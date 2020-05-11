import { Component } from 'react';

import { policyInforamtionValidateSchema } from 'src/helpers/validations';
import { FormApp } from 'src/components/FormApp';
import { FielControlForm } from 'src/components/FieldControlForm';
import { withStyles } from 'src/styles/FormStyle/css/withStyles';
import { styles } from './styles';
import { CheckBoxForm } from 'src/components/CheckBoxForm';
import Grid from '@material-ui/core/Grid';

interface IFormFirmInformation {
  formData: any;
  dispatch: any;
  onSubmit?: any;
  hideButton?: boolean;
  classes?: any;
}

@withStyles(styles)
export class FormPolicyInformation extends Component<IFormFirmInformation> {
  state = {
    isHaveInsurance: this.props.formData.app.data.policyInformation.isHaveInsurance,
  };
  isInitValid = false;
  isButtonLoading = false;

  render() {
    const { formData, classes, dispatch, onSubmit, hideButton } = this.props;
    const { isHaveInsurance } = this.state;

    return (
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
        onSubmit={onSubmit}
        buttonLabel={'Continue'}
        dataTestId="continueButton"
        isLoading={this.isButtonLoading}
        isInQuestionnaire
        dispatch={dispatch}
        progressBar={formData.app.metadata.progressBar}
        notDisabled={isHaveInsurance}
        hideButton={false}
      >
        {({ touched, errors, setFieldTouched, setFieldValue, resetForm }) => {
          return (
            <>
              <Grid container>
                <Grid item xs={12}>
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
                        onChange={() => {
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
                </Grid>
                <Grid item container xs={12}>
                  <Grid item xs={6} lg={5}>
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
                      readOnly={isHaveInsurance}
                    />
                  </Grid>
                </Grid>
                <Grid
                  item
                  container
                  xs={12}
                  spacing={4}
                  classes={{ root: classes.customContainer }}
                >
                  <Grid item container xs={12} sm={4} md={5}>
                    <Grid item xs={6} sm={12}>
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
                        readOnly={isHaveInsurance}
                      />
                    </Grid>
                  </Grid>
                  <Grid item container xs={12} sm={4} md={5}>
                    <Grid item xs={6} sm={12}>
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
                        readOnly={isHaveInsurance}
                      />
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item container xs={12}>
                  <Grid item xs={12}>
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
                      customWidth={80}
                      readOnly={isHaveInsurance}
                    />
                  </Grid>
                </Grid>

                <Grid
                  item
                  container
                  xs={12}
                  spacing={4}
                  classes={{ root: classes.customContainer }}
                >
                  <Grid item xs={6} sm={5}>
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
                      readOnly={isHaveInsurance}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </>
          );
        }}
      </FormApp>
    );
  }
}
