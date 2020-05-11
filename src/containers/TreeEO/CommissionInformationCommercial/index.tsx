import { Component } from 'react';
import { FormikHelpers } from 'formik';
import classnames from 'classnames';
import isEmpty from 'lodash/isEmpty';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { IAppStoreProps } from 'src/typesInterface/IAppStoreProps';
import { storeCommissionCommercial, changeStatusProgressBar } from 'src/store/actions/app';
import { setInformationPage } from 'src/store/actions/app';
import { commissionResidentialValidateSchema } from 'src/helpers/validations';
import StepWrapper from 'src/components/StepWrapper';
import { FormApp } from 'src/components/FormApp';
import { FielControlForm } from 'src/components/FieldControlForm';
import { withStyles } from 'src/styles/FormStyle/css/withStyles';
import { styles } from './styles';
import { Row, Column } from 'src/components/LayoutWrapper/Flex';
import { categoriesName } from 'src/helpers/constants';

type FullNameProps = IAppStoreProps;

type FormFields = {
  contactName: string;
  brokerName: string;
  kwMarketCenterName: string;
  yearEstablished: number;
};

@withStyles(styles)
export class CommissionInformationCommercial extends Component<FullNameProps> {
  state = {
    residential: {
      realEstate: this.props.formData.app.data.commission.commercial.realEstate,
      rawLand: this.props.formData.app.data.commission.commercial.rawLand,
      appraisals: this.props.formData.app.data.commission.commercial.appraisals,
      propertyMgmt: this.props.formData.app.data.commission.commercial.propertyMgmt,
      ownedProperty: this.props.formData.app.data.commission.commercial.ownedProperty,
    },
    total: 0,
  };
  isInitValid = false;
  isButtonLoading = false;

  nextStep = async (values: any, actions: FormikHelpers<FormFields>) => {
    const totalResidential = this.sumState(this.state.residential);
    this.isButtonLoading = true;
    const { dispatch, formData } = this.props;
    storeCommissionCommercial(dispatch, values, totalResidential); //TODO put state in localstorage
    changeStatusProgressBar(dispatch, formData.app.metadata.progressBar + 4.8);
    actions.setSubmitting(true);
    setInformationPage(dispatch, 14, categoriesName.commission);
  };

  async componentDidMount() {
    const { dispatch } = this.props;
    const { formData } = this.props;
    if (!isEmpty(formData.app.data)) {
    }
    setInformationPage(dispatch, 13, categoriesName.commission);
  }

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
    const isLoading = false;
    const { formData, classes } = this.props;
    const { residential } = this.state;
    return (
      !isLoading && (
        <StepWrapper
          avatarText={this.props.intl.get('app.avata.text.commission.part.four')}
          heading={this.props.intl.get('app.head.form.commission.part.five')}
          bottomContent={this.props.intl.get('app.link.commission.part.four')}
          classHeader={classnames(classes.stepHeader)}
          classBottom={classnames(classes.stepBottom)}
        >
          <Typography className={classnames(classes.titleForm)}>{'Commercial'}</Typography>
          <FormApp
            initialValues={{
              realEstate: formData.app.data.commission.commercial.realEstate,
              rawLand: formData.app.data.commission.commercial.rawLand,
              appraisals: formData.app.data.commission.commercial.appraisals,
              propertyMgmt: formData.app.data.commission.commercial.propertyMgmt,
              ownedProperty: formData.app.data.commission.commercial.ownedProperty,
            }}
            isInitValid={this.isInitValid}
            validationSchema={commissionResidentialValidateSchema}
            onSubmit={this.nextStep}
            buttonLabel={'Continue'}
            dataTestId="continueButton"
            isLoading={this.isButtonLoading}
            isInQuestionnaire
            dispatch={this.props.dispatch}
            progressBar={formData.app.metadata.progressBar}
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
                        {'Commercial total'}
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
        </StepWrapper>
      )
    );
  }
}
