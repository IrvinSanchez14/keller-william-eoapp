import { Component } from 'react';
import classnames from 'classnames';

import { FielControlForm } from 'src/components/FieldControlForm';
import { Column } from 'src/components/LayoutWrapper/Flex';
import {
  setInformationPage,
  addClaimsPolicy,
  storeClaimsPolicy,
  changeStatusProgressBar,
} from 'src/store/actions/app';

import { styles } from './styles';
import { IAppStoreProps } from 'src/typesInterface/IAppStoreProps';
import { TextFieldForm } from 'src/components/TextFieldForm';
import { withStyles } from 'src/styles/FormStyle/css/withStyles';
import StepWrapper from 'src/components/StepWrapper';
import { FormApp } from 'src/components/FormApp';
import { RadioField } from 'src/components/RadioForm';
import { categoriesName } from 'src/helpers/constants';
import { AwesomeFontIcon } from 'src/components/AwesomeFontIcon';
import { policyInforamtionClaims } from 'src/helpers/validations';
import { dateMask } from 'src/utils';

export type CurrentAddressProps = IAppStoreProps;

@withStyles(styles)
export class PolicyInformationClaims extends Component<CurrentAddressProps> {
  isLoading = false;
  isInitValid = false;
  isButtonLoading = false;
  shouldErrorShow = true;
  formattedAddress = '';
  isHaveClaims: boolean = null;
  addressComponent: Array<string> = [];
  unit = '';
  monthsAtCurrentAddress = 0;
  years: number | '' = '';
  months: number | '' = '';
  isInitialValid = false;

  async componentDidMount() {
    const { dispatch } = this.props;
    setInformationPage(dispatch, 8, categoriesName.policyInformation);
  }

  nextStep = async (values: any, actions: any) => {
    const { dispatch, formData } = this.props;
    this.isButtonLoading = true;
    changeStatusProgressBar(dispatch, formData.app.metadata.progressBar + 4.8);
    actions.setSubmitting(true);
    storeClaimsPolicy(dispatch, values);
    setInformationPage(dispatch, 9, categoriesName.policyInformation);
  };

  renderResidenceTimeForm = ({ touched, errors, setFieldTouched }: any) => {
    const { classes, formData, dispatch } = this.props;

    const residenceTimeFields = [
      {
        name: 'dateClaim',
        label: 'Date of claim',
        mask: dateMask,
        numberMask: false,
        placeholder: 'MM/DD/YYYY',
      },
      {
        placeholder: '$',
        name: 'amountClaim',
        label: 'Amount of claim',
        numberMask: true,
      },
    ];

    return (
      <>
        {formData.app.data.policyInformation.claims.map((e: any, index: number) => (
          <Column key={index} className={classes.periodContainer}>
            {residenceTimeFields.map(({ name, placeholder, label, mask, numberMask }: any) => (
              <FielControlForm
                key={`claims.${name}.${index}`}
                name={`claims.${index}.${name}`}
                type="text"
                errors={errors}
                touched={touched}
                renderFastField
                renderCustomField={({ field }) => (
                  <TextFieldForm
                    {...field}
                    type="text"
                    numberMask={numberMask}
                    data-test-id={`${name}.${index}`}
                    label={label}
                    placeholder={placeholder}
                    setFieldTouched={setFieldTouched}
                    customWidth={150}
                    mask={mask}
                    className={classnames(classes.periodContainerInput, {
                      [classes.periodContainerInputInvalid]: errors[name] && touched[name],
                    })}
                  />
                )}
              />
            ))}
          </Column>
        ))}
        <div
          className={classes.containerAddButton}
          onClick={() =>
            addClaimsPolicy(dispatch, {
              claims: [
                ...formData.app.data.policyInformation.claims,
                formData.app.data.policyInformation.claims,
              ],
            })
          }
        >
          <div>
            <AwesomeFontIcon
              name="faPlusCircle"
              type="light"
              dataTestId="backButton"
              className={classes.iconPlus}
            />
          </div>
          <div className={classes.pAddButton}>
            <p>Add another claim</p>
          </div>
        </div>
      </>
    );
  };

  render() {
    const { intl, classes, formData } = this.props;

    return (
      !this.isLoading && (
        <>
          <StepWrapper
            avatarText={intl.get('app.avatar.title.policy.part.two')}
            heading={intl.get('app.head.form.policy.part.two')}
          >
            <FormApp
              initialValues={{
                isHaveClaims: formData.app.data.policyInformation.isHaveClaims,
                claims: formData.app.data.policyInformation.claims || [],
              }}
              validationSchema={policyInforamtionClaims}
              onSubmit={this.nextStep}
              className={classes.form}
              buttonLabel={'Continue'}
              dataTestId="reviewButton"
              isLoading={this.isButtonLoading}
              isInitValid
              isInQuestionnaire
            >
              {({ touched, errors, values, setFieldValue, setFieldTouched }: any) => (
                <>
                  <div className={classes.radioContainer}>
                    <FielControlForm
                      name="isHaveClaims"
                      renderCustomField={({ field }) => (
                        <RadioField
                          {...field}
                          name="isHaveClaims"
                          value="isHaveClaims"
                          data-test-id="sameAddressButtonYes"
                          label={'Yes, I have claims'}
                          onChange={() => setFieldValue('isHaveClaims', true)}
                          checked={values.isHaveClaims === true}
                        />
                      )}
                    />
                  </div>
                  {values.isHaveClaims && (
                    <Column className={classes.cardContainer}>
                      {this.renderResidenceTimeForm({ touched, errors, setFieldTouched })}
                    </Column>
                  )}
                  <div
                    className={classnames(classes.radioContainer, {
                      [classes.radioBottomContainer]: !!values.isHaveClaims,
                    })}
                  >
                    <FielControlForm
                      name="isHaveClaims"
                      renderCustomField={({ field }) => (
                        <RadioField
                          {...field}
                          name="isHaveClaims"
                          value="isHaveClaims"
                          data-test-id="sameAddressButtonNo"
                          label={'No, I do not have any claims'}
                          onChange={() => {
                            setFieldValue('isHaveClaims', false);
                            setFieldValue('claims', []);
                          }}
                          checked={values.isHaveClaims === false}
                        />
                      )}
                    />
                  </div>
                </>
              )}
            </FormApp>
          </StepWrapper>
        </>
      )
    );
  }
}
