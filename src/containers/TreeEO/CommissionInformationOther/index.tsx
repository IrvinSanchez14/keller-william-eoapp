import { Component } from 'react';
import classnames from 'classnames';
import { FormikHelpers } from 'formik';
import Typography from '@material-ui/core/Typography';

import { IAppStoreProps } from 'src/typesInterface/IAppStoreProps';
import { storeCommissionInformation, changeStatusProgressBar } from 'src/store/actions/app';
import { setInformationPage } from 'src/store/actions/app';
import { commissionOtherValidateSchema } from 'src/helpers/validations';
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
export class CommissionInformationOther extends Component<FullNameProps> {
  isInitValid = false;
  isButtonLoading = false;

  nextStep = async (values: any, actions: FormikHelpers<FormFields>) => {
    this.isButtonLoading = true;
    const { dispatch, formData } = this.props;
    storeCommissionInformation(dispatch, values); //TODO put state in localstorage
    changeStatusProgressBar(dispatch, formData.app.metadata.progressBar + 5);
    actions.setSubmitting(true);
    setInformationPage(dispatch, 15, categoriesName.commission);
  };

  async componentDidMount() {
    const { dispatch } = this.props;
    setInformationPage(dispatch, 14, categoriesName.commission);
  }

  render() {
    const isLoading = false;
    const { classes, formData } = this.props;
    return (
      !isLoading && (
        <StepWrapper
          avatarText={this.props.intl.get('app.avatar.text.commission.part.six')}
          heading={this.props.intl.get('app.head.form.commission.part.six')}
          bottomContent={this.props.intl.get('app.link.commission.part.four')}
          classHeader={classnames(classes.stepHeader)}
          classBottom={classnames(classes.stepBottom)}
        >
          <FormApp
            initialValues={{
              farmRanch: formData.app.data.commission.farmRanch,
              auctioneering: formData.app.data.commission.auctioneering,
              mortageBrokerage: formData.app.data.commission.mortageBrokerage,
            }}
            isInitValid={this.isInitValid}
            validationSchema={commissionOtherValidateSchema}
            onSubmit={this.nextStep}
            buttonLabel={'Continue'}
            dataTestId="continueButton"
            isLoading={this.isButtonLoading}
            isInQuestionnaire
            dispatch={this.props.dispatch}
            progressBar={formData.app.metadata.progressBar}
          >
            {({ touched, errors, setFieldTouched }) => {
              return (
                <>
                  <Row wrap="wrap" style={stylesComponent.rowContainer}>
                    <Column>
                      <Typography className={classnames(classes.subTitleForm)}>
                        {this.props.intl.get('app.subtitle.one.commission.part.six')}
                      </Typography>
                      <FielControlForm
                        data-test-id="farmRanch"
                        name="farmRanch"
                        type="number"
                        label={'Commission'}
                        setFieldTouched={setFieldTouched}
                        errors={errors}
                        touched={touched}
                        shouldValidateOnMount
                        renderFastField
                        customWidth={150}
                      />
                    </Column>
                  </Row>
                  <Row wrap="wrap" style={stylesComponent.rowContainer}>
                    <Column>
                      <Typography className={classnames(classes.subTitleForm)}>
                        {this.props.intl.get('app.subtitle.two.commission.part.six')}
                      </Typography>
                      <FielControlForm
                        data-test-id="auctioneering"
                        name="auctioneering"
                        type="number"
                        label={'Average property value'}
                        setFieldTouched={setFieldTouched}
                        errors={errors}
                        touched={touched}
                        shouldValidateOnMount
                        renderFastField
                        customWidth={150}
                      />
                    </Column>
                  </Row>
                  <Row wrap="wrap" className={classnames(classes.rowFinal)}>
                    <Column>
                      <Typography className={classnames(classes.subTitleForm)}>
                        {this.props.intl.get('app.subtitle.three.commission.part.six')}
                      </Typography>
                      <FielControlForm
                        data-test-id="mortageBrokerage"
                        name="mortageBrokerage"
                        type="number"
                        label={'Average property value'}
                        setFieldTouched={setFieldTouched}
                        errors={errors}
                        touched={touched}
                        shouldValidateOnMount
                        renderFastField
                        customWidth={150}
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
