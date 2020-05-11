import { Component } from 'react';
import classnames from 'classnames';
import { Typography } from '@material-ui/core';
import { Divider } from '@material-ui/core';

import { commissionResidentialValidateSchema } from 'src/helpers/validations';
import { categoriesName } from 'src/helpers/constants';
import { setInformationPage } from 'src/store/actions/app';
import { storeCommissionResidential, changeStatusProgressBar } from 'src/store/actions/app';
import { FormApp } from 'src/components/FormApp';
import { FielControlForm } from 'src/components/FieldControlForm';

import { withStyles } from 'src/styles/FormStyle/css/withStyles';
import { styles } from './styles';
import { Row, Column } from 'src/components/LayoutWrapper/Flex';

interface IFormFirmInformation {
  formData: any;
  dispatch: any;
  onSubmit?: any;
  hideButton?: boolean;
  classes?: any;
  changeSum?: any;
}

@withStyles(styles)
export class FormCommissionInformationResidential extends Component<IFormFirmInformation> {
  state = {
    residential: {
      realEstate: this.props.formData.app.data.commission.residential.realEstate,
      rawLand: this.props.formData.app.data.commission.residential.rawLand,
      appraisals: this.props.formData.app.data.commission.residential.appraisals,
      propertyMgmt: this.props.formData.app.data.commission.residential.propertyMgmt,
      ownedProperty: this.props.formData.app.data.commission.residential.ownedProperty,
    },
    total: 0,
  };
  isInitValid = false;
  isButtonLoading = false;

  nextStep = async (values: any, actions: any) => {
    const totalResidential = this.sumState(this.state.residential);
    this.isButtonLoading = true;
    const { dispatch, formData } = this.props;
    storeCommissionResidential(dispatch, values, totalResidential); //TODO put state in localstorage
    changeStatusProgressBar(dispatch, formData.app.metadata.progressBar + 4.8);
    actions.setSubmitting(true);
    setInformationPage(dispatch, 13, categoriesName.commission);
  };

  changeDataSum = (event: any) => {
    const { name, value } = event.target;

    this.setState((prev: any) => ({
      residential: {
        ...prev.residential,
        [name]: value,
      },
    }));
  };

  sumState = (object: any) => {
    return Object.keys(object).reduce((sum, key) => sum + parseFloat(object[key] || 0), 0);
  };

  render() {
    const { formData, classes, onSubmit, dispatch, hideButton } = this.props;
    const { residential } = this.state;
    return (
      <FormApp
        initialValues={{
          realEstate: formData.app.data.commission.residential.realEstate,
          rawLand: formData.app.data.commission.residential.rawLand,
          appraisals: formData.app.data.commission.residential.appraisals,
          propertyMgmt: formData.app.data.commission.residential.propertyMgmt,
          ownedProperty: formData.app.data.commission.residential.ownedProperty,
        }}
        isInitValid={this.isInitValid}
        validationSchema={commissionResidentialValidateSchema}
        onSubmit={this.nextStep}
        buttonLabel={'Continue'}
        dataTestId="continueButton"
        isLoading={this.isButtonLoading}
        isInQuestionnaire
        dispatch={dispatch}
        progressBar={formData.app.metadata.progressBar}
        hideButton={hideButton}
      >
        {({ touched, errors, setFieldTouched, setFieldValue, resetForm, dirty, values }) => {
          return (
            <>
              <Row wrap="wrap" margin="0 8px">
                <Column className={classnames(classes.containerOne)}>
                  <FielControlForm
                    data-test-id="realEstate"
                    name="realEstate"
                    type="number"
                    label={'Real Estate'}
                    setFieldTouched={setFieldTouched}
                    errors={errors}
                    touched={touched}
                    shouldValidateOnMount
                    renderFastField
                    customWidth={165}
                    onChange={(e: any) => {
                      this.changeDataSum(e);
                      setFieldValue('realEstate', e.target.value);
                    }}
                  />
                </Column>
                <Column className={classnames(classes.containerTwo)}>
                  <FielControlForm
                    data-test-id="rawLand"
                    name="rawLand"
                    type="number"
                    label={'Raw Land'}
                    setFieldTouched={setFieldTouched}
                    errors={errors}
                    touched={touched}
                    shouldValidateOnMount
                    renderFastField
                    customWidth={165}
                    onChange={(e: any) => {
                      this.changeDataSum(e);
                      setFieldValue('rawLand', e.target.value);
                    }}
                  />
                </Column>
              </Row>
              <Row wrap="wrap" margin="0 8px">
                <Column className={classnames(classes.containerOne)}>
                  <FielControlForm
                    data-test-id="appraisals"
                    name="appraisals"
                    type="number"
                    label={'Appraisals'}
                    setFieldTouched={setFieldTouched}
                    errors={errors}
                    touched={touched}
                    shouldValidateOnMount
                    renderFastField
                    customWidth={165}
                    onChange={(e: any) => {
                      this.changeDataSum(e);
                      setFieldValue('appraisals', e.target.value);
                    }}
                  />
                </Column>
                <Column className={classnames(classes.containerTwo)}>
                  <FielControlForm
                    data-test-id="propertyMgmt"
                    name="propertyMgmt"
                    type="number"
                    label={'Property Mgmt'}
                    setFieldTouched={setFieldTouched}
                    errors={errors}
                    touched={touched}
                    shouldValidateOnMount
                    renderFastField
                    customWidth={165}
                    onChange={(e: any) => {
                      this.changeDataSum(e);
                      setFieldValue('propertyMgmt', e.target.value);
                    }}
                  />
                </Column>
              </Row>

              <Row wrap="wrap" margin="0 8px" style={{ flexDirection: 'column' }}>
                <Column className={classnames(classes.containerOne)}>
                  <FielControlForm
                    data-test-id="ownedProperty"
                    name="ownedProperty"
                    type="number"
                    label={'Owned Property'}
                    setFieldTouched={setFieldTouched}
                    errors={errors}
                    touched={touched}
                    shouldValidateOnMount
                    renderFastField
                    customWidth={165}
                    onChange={(e: any) => {
                      this.changeDataSum(e);
                      setFieldValue('ownedProperty', e.target.value);
                    }}
                  />
                </Column>
              </Row>
              <div className={classnames(classes.containerTotal)}>
                <Divider style={{ margin: '0 15px' }} />
                <div className={classnames(classes.divContainerTotal)}>
                  <Typography className={classnames(classes.textTotal)}>
                    {'Residential total'}
                  </Typography>
                  <Typography className={classnames(classes.textNumberTotal)}>
                    ${this.sumState(residential)}
                  </Typography>
                </div>
              </div>
            </>
          );
        }}
      </FormApp>
    );
  }
}
