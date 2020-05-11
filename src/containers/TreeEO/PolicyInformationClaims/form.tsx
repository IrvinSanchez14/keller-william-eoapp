import { Component } from 'react';
import classnames from 'classnames';

import { FielControlForm } from 'src/components/FieldControlForm';
import { Column } from 'src/components/LayoutWrapper/Flex';
import { addClaimsPolicy } from 'src/store/actions/app';

import { styles } from './styles';
import { TextFieldForm } from 'src/components/TextFieldForm';
import { withStyles } from 'src/styles/FormStyle/css/withStyles';
import { FormApp } from 'src/components/FormApp';
import { RadioField } from 'src/components/RadioForm';
import { AwesomeFontIcon } from 'src/components/AwesomeFontIcon';

interface IFormFirmInformation {
  formData: any;
  dispatch: any;
  onSubmit?: any;
  hideButton?: boolean;
  classes?: any;
}

@withStyles(styles)
export class FormPolicyInformationClaims extends Component<IFormFirmInformation> {
  isLoading = false;
  isButtonLoading = false;
  isHaveClaims: boolean = undefined;
  isInitialValid = false;

  renderResidenceTimeForm = ({ touched, errors, setFieldTouched }: any) => {
    const { classes, formData, dispatch } = this.props;

    const residenceTimeFields = [
      {
        name: 'dateClaim',
        placeholder: '',
        label: 'Date of claim',
      },
      {
        name: 'amountClaim',
        placeholder: '',
        label: 'Amount of claim',
      },
    ];

    return (
      <>
        {formData.app.data.policyInformation.claims.map((e: any, index: number) => (
          <Column key={index} className={classes.periodContainer}>
            {residenceTimeFields.map(({ name, placeholder, label }: any) => (
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
                    data-test-id={`${name}.${index}`}
                    label={label}
                    placeholder={placeholder}
                    setFieldTouched={setFieldTouched}
                    customWidth={150}
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
    const { classes, formData, onSubmit, hideButton } = this.props;

    return (
      <FormApp
        initialValues={{
          isHaveClaims: formData.app.data.policyInformation.isHaveClaims,
          claims: formData.app.data.policyInformation.claims || [],
        }}
        validationSchema={null}
        onSubmit={onSubmit}
        className={classes.form}
        buttonLabel={'Continue'}
        dataTestId="reviewButton"
        isLoading={this.isButtonLoading}
        isInitValid={this.isInitialValid}
        isInQuestionnaire
        hideButton={hideButton}
      >
        {({ touched, errors, values, setFieldValue, setFieldTouched, dirty }: any) => (
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
                    onChange={() => setFieldValue('isHaveClaims', false)}
                    checked={values.isHaveClaims === false}
                  />
                )}
              />
            </div>
          </>
        )}
      </FormApp>
    );
  }
}
