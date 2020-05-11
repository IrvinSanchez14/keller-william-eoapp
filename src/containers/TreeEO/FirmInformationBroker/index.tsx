import { Component } from 'react';
import classnames from 'classnames';
import { FormikHelpers } from 'formik';
import Typography from '@material-ui/core/Typography';
import isEmpty from 'lodash/isEmpty';

import { IAppStoreProps } from 'src/typesInterface/IAppStoreProps';
import { storeFirmConfirmation, changeStatusProgressBar } from 'src/store/actions/app';
import { setInformationPage } from 'src/store/actions/app';
import { dateBrokerValidateSchema } from 'src/helpers/validations';
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
export class FirmInformationBroker extends Component<FullNameProps> {
  isInitValid = false;
  isButtonLoading = false;

  nextStep = async (values: any, actions: FormikHelpers<FormFields>) => {
    this.isButtonLoading = true;
    const { dispatch, formData } = this.props;
    storeFirmConfirmation(dispatch, values); //TODO put state in localstorage
    changeStatusProgressBar(dispatch, formData.app.metadata.progressBar + 4.8);
    actions.setSubmitting(true);
    setInformationPage(dispatch, 4, categoriesName.firmConfirmation);
  };

  async componentDidMount() {
    const { dispatch } = this.props;
    const { formData } = this.props;
    if (!isEmpty(formData.app.data)) {
      this.isInitValid = await dateBrokerValidateSchema.isValid({
        dateLicensedBrokerAgent: formData.app.data.firmInformation.dateLicensedBrokerAgent,
        dateLicensedBroker: formData.app.data.firmInformation.dateLicensedBroker,
      });
    }
    setInformationPage(dispatch, 3, categoriesName.firmConfirmation);
  }

  render() {
    const isLoading = false;
    const { classes, formData } = this.props;
    return (
      !isLoading && (
        <StepWrapper
          avatarText={this.props.intl.get('app.avatar.text.firm.part.one')}
          heading={this.props.intl.get('app.head.form.firm.part.one')}
          subHeading={['', this.props.intl.get('app.subhead.form.firm.part.one')]}
          bottomContent={this.props.intl.getHTML('app.link.condition.firm.part.one')}
        >
          <FormApp
            initialValues={{
              dateLicensedBrokerAgent:
                formData.app.data.firmInformation.dateLicensedBrokerAgent || '',
              dateLicensedBroker: formData.app.data.firmInformation.dateLicensedBroker || '',
            }}
            isInitValid={this.isInitValid}
            validationSchema={dateBrokerValidateSchema}
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
                  <Row wrap="wrap" className={classnames(classes.rowStyles)}>
                    <Column>
                      <Typography className={classnames(classes.titleForm)}>
                        Date broker licensed as an agent
                      </Typography>
                      <FielControlForm
                        data-test-id="dateLicensedBrokerAgent"
                        id="dateLicensedBrokerAgent"
                        name="dateLicensedBrokerAgent"
                        type="text"
                        label={'Date'}
                        setFieldTouched={setFieldTouched}
                        errors={errors}
                        touched={touched}
                        shouldValidateOnMount
                        className={classnames(classes.fielControlForm)}
                        renderFastField
                      />
                    </Column>

                    <Column>
                      <Typography className={classnames(classes.titleForm)}>
                        Date licensed as a broker.
                      </Typography>
                      <FielControlForm
                        data-test-id="dateLicensedBroker"
                        name="dateLicensedBroker"
                        type="text"
                        label={'Date'}
                        setFieldTouched={setFieldTouched}
                        errors={errors}
                        touched={touched}
                        className={classnames(classes.fielControlForm)}
                        shouldValidateOnMount
                        renderFastField
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
