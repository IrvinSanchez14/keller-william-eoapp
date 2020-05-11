import { Component } from 'react';
import classnames from 'classnames';
import { FormikHelpers } from 'formik';
import Typography from '@material-ui/core/Typography';
import { IAppStoreProps } from 'src/typesInterface/IAppStoreProps';
import { storeCommissionInformation, changeStatusProgressBar } from 'src/store/actions/app';
import { setInformationPage } from 'src/store/actions/app';
import { commissionInformationValidateSchema } from 'src/helpers/validations';
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
export class CommissionInformation extends Component<FullNameProps> {
  isInitValid = false;
  isButtonLoading = false;

  nextStep = async (values: any, actions: FormikHelpers<FormFields>) => {
    this.isButtonLoading = true;
    const { dispatch, formData } = this.props;
    storeCommissionInformation(dispatch, values); //TODO put state in localstorage
    changeStatusProgressBar(dispatch, formData.app.metadata.progressBar + 5);
    actions.setSubmitting(true);
    setInformationPage(dispatch, 10, categoriesName.commission);
  };

  async componentDidMount() {
    const { dispatch } = this.props;
    setInformationPage(dispatch, 9, categoriesName.commission);
  }

  render() {
    const isLoading = false;
    const { classes, formData } = this.props;
    return (
      !isLoading && (
        <StepWrapper
          avatarText={this.props.intl.get('app.avata.title.commission.part.one')}
          heading={this.props.intl.get('app.head.commission.part.one')}
          bottomContent={this.props.intl.get('app.link.commission.part.one')}
          classHeader={classnames(classes.stepHeader)}
          classBottom={classnames(classes.stepBottom)}
        >
          <FormApp
            initialValues={{
              grossCommission: formData.app.data.commission.grossCommission,
              averageValue: formData.app.data.commission.averageValue,
            }}
            isInitValid={this.isInitValid}
            validationSchema={commissionInformationValidateSchema}
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
                  <Row wrap="wrap" margin="0 -8px" style={stylesComponent.rowContainer}>
                    <Column padding="0px 8px">
                      <Typography className={classnames(classes.subTitleForm)}>
                        {this.props.intl.get('app.subtitle.form.commission.part.one')}
                      </Typography>
                      <FielControlForm
                        data-test-id="grossCommission"
                        name="grossCommission"
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
                  <Row wrap="wrap" margin="0 -8px" style={stylesComponent.rowContainer}>
                    <Column padding="0px 8px">
                      <Typography className={classnames(classes.subTitleForm)}>
                        {this.props.intl.get('app.subtitle2.form.commission.part.one')}
                      </Typography>
                      <FielControlForm
                        data-test-id="averageValue"
                        name="averageValue"
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
