import { Component } from 'react';
import classnames from 'classnames';
import { FormikHelpers } from 'formik';
import isEmpty from 'lodash/isEmpty';

import { IAppStoreProps } from 'src/typesInterface/IAppStoreProps';
import { storeInsurancePolicy, changeStatusProgressBar } from 'src/store/actions/app';
import { setInformationPage } from 'src/store/actions/app';
import { policyInforamtionValidateSchema } from 'src/helpers/validations';
import StepWrapper from 'src/components/StepWrapper';
import { FormApp } from 'src/components/FormApp';
import { FielControlForm } from 'src/components/FieldControlForm';

import { withStyles } from 'src/styles/FormStyle/css/withStyles';
import { styles } from './styles';
import { Row, Column } from 'src/components/LayoutWrapper/Flex';
import { categoriesName } from 'src/helpers/constants';
import { CheckBoxForm } from 'src/components/CheckBoxForm';

type FullNameProps = IAppStoreProps;

type FormFields = {
  contactName: string;
  brokerName: string;
  kwMarketCenterName: string;
  yearEstablished: number;
};

@withStyles(styles)
export class PolicyInformation extends Component<FullNameProps> {
  state = {
    isHaveInsurance: this.props.formData.app.data.policyInformation.isHaveInsurance,
  };
  isInitValid = false;
  isButtonLoading = false;

  nextStep = async (values: any, actions: FormikHelpers<FormFields>) => {
    this.isButtonLoading = true;
    const { dispatch, formData } = this.props;
    storeInsurancePolicy(dispatch, values); //TODO put state in localstorage
    changeStatusProgressBar(dispatch, formData.app.metadata.progressBar + 5);
    actions.setSubmitting(true);
    setInformationPage(dispatch, 8, categoriesName.policyInformation);
  };

  async componentDidMount() {
    const { dispatch } = this.props;
    const { formData } = this.props;
    if (!isEmpty(formData.app.data)) {
    }
    setInformationPage(dispatch, 7, categoriesName.policyInformation);
  }

  render() {
    const isLoading = false;
    const { classes, formData } = this.props;
    const { isHaveInsurance } = this.state;
    return (
      !isLoading && (
        <StepWrapper
          avatarText={this.props.intl.get('app.avatar.title.policy.part.one')}
          heading={this.props.intl.get('app.head.form.policy.part.one')}
        >
          <FormApp
            initialValues={{
              currentCarrier: formData.app.data.policyInformation.currentCarrier || '',
              isHaveInsurance: formData.app.data.policyInformation.isHaveInsurance || false,
              renewalDate: formData.app.data.policyInformation.insurance.renewalDate || '',
              deductible: formData.app.data.policyInformation.insurance.deductible || '',
              limits: formData.app.data.policyInformation.insurance.limits || '',
              yearCoverage: formData.app.data.policyInformation.insurance.yearCoverage || '',
              annualPremium: formData.app.data.policyInformation.insurance.annualPremium || '',
            }}
            isInitValid={this.isInitValid}
            validationSchema={policyInforamtionValidateSchema(isHaveInsurance)}
            onSubmit={this.nextStep}
            buttonLabel={'Continue'}
            dataTestId="continueButton"
            isLoading={this.isButtonLoading}
            isInQuestionnaire
            dispatch={this.props.dispatch}
            progressBar={formData.app.metadata.progressBar}
            notDisabled={isHaveInsurance}
          >
            {({ touched, errors, setFieldTouched, setFieldValue, resetForm }) => {
              return (
                <>
                  <Row wrap="wrap" margin="0 8px" style={stylesComponent.rowContainer}>
                    <FielControlForm
                      data-test-id="currentCarrier"
                      name="currentCarrier"
                      type="string"
                      label={'Current Carrier'}
                      setFieldTouched={setFieldTouched}
                      errors={errors}
                      touched={touched}
                      shouldValidateOnMount
                      fullWidth
                      renderFastField
                      customWidth={0}
                      readOnly={isHaveInsurance}
                    />
                    <FielControlForm
                      name="isHaveInsurance"
                      type="checkbox"
                      renderFastField
                      setFieldTouched={setFieldTouched}
                      shouldValidateOnMount
                      renderCustomField={({ field }) => (
                        <CheckBoxForm
                          {...field}
                          data-test-id="other"
                          label={'I do not have insurance'}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            resetForm({
                              currentCarrier: '',
                              renewalDate: '',
                              deductible: '',
                              limits: '',
                              yearCoverage: '',
                              annualPremium: '',
                            });
                            this.setState({
                              isHaveInsurance: !this.state.isHaveInsurance,
                            });
                            setFieldValue('isHaveInsurance', !this.state.isHaveInsurance);
                          }}
                          isChecked={this.state.isHaveInsurance}
                          hasHelper
                        />
                      )}
                    />
                  </Row>
                  <Row wrap="wrap" margin="0 8px" style={{ flexDirection: 'column' }}>
                    <Column padding="0px 8px">
                      <FielControlForm
                        data-test-id="renewalDate"
                        name="renewalDate"
                        type="string"
                        label={'Renewal date'}
                        setFieldTouched={setFieldTouched}
                        errors={errors}
                        touched={touched}
                        shouldValidateOnMount
                        fullWidth
                        renderFastField
                        customWidth={170}
                        readOnly={isHaveInsurance}
                      />
                    </Column>
                  </Row>
                  <Row wrap="wrap" margin="0 8px">
                    <Column padding="0px 8px">
                      <FielControlForm
                        data-test-id="deductible"
                        name="deductible"
                        type="number"
                        label={'Deductible'}
                        setFieldTouched={setFieldTouched}
                        errors={errors}
                        touched={touched}
                        shouldValidateOnMount
                        renderFastField
                        customWidth={150}
                        readOnly={isHaveInsurance}
                      />
                    </Column>
                    <Column padding="0px 30px">
                      <FielControlForm
                        data-test-id="limits"
                        name="limits"
                        type="number"
                        label={'Limits'}
                        setFieldTouched={setFieldTouched}
                        errors={errors}
                        touched={touched}
                        shouldValidateOnMount
                        renderFastField
                        customWidth={150}
                        readOnly={isHaveInsurance}
                      />
                    </Column>
                  </Row>
                  <Row wrap="wrap" margin="0 8px" style={{ flexDirection: 'column' }}>
                    <Column padding="0px 8px">
                      <FielControlForm
                        data-test-id="yearCoverage"
                        name="yearCoverage"
                        type="string"
                        label={'Years of continuos coverage'}
                        setFieldTouched={setFieldTouched}
                        errors={errors}
                        touched={touched}
                        shouldValidateOnMount
                        fullWidth
                        renderFastField
                        customWidth={75}
                        readOnly={isHaveInsurance}
                      />
                    </Column>
                  </Row>
                  <Row wrap="wrap" margin="0 8px" style={{ flexDirection: 'column' }}>
                    <Column padding="0px 8px">
                      <FielControlForm
                        data-test-id="annualPremium"
                        name="annualPremium"
                        type="string"
                        label={'Annual premium'}
                        setFieldTouched={setFieldTouched}
                        errors={errors}
                        touched={touched}
                        shouldValidateOnMount
                        fullWidth
                        renderFastField
                        customWidth={150}
                        readOnly={isHaveInsurance}
                      />
                    </Column>
                  </Row>
                </>
              );
            }}
          </FormApp>
        </StepWrapper>
      )
    );
  }
}

const stylesComponent = {
  rowContainer: {
    marginBottom: '1.3em',
  },
};
