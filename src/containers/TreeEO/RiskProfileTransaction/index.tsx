import { Component } from 'react';
import classnames from 'classnames';
import { FormikHelpers } from 'formik';
import { Typography } from '@material-ui/core';

import { IAppStoreProps } from 'src/typesInterface/IAppStoreProps';
import { storeRiskProfile, changeStatusProgressBar } from 'src/store/actions/app';
import { setInformationPage } from 'src/store/actions/app';
import { riskProfileTransactionValidateSchema } from 'src/helpers/validations';
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
export class RiskProfileTransaction extends Component<FullNameProps> {
  isInitValid = false;
  isButtonLoading = false;

  nextStep = async (values: any, actions: FormikHelpers<FormFields>) => {
    this.isButtonLoading = true;
    const { dispatch, formData } = this.props;
    storeRiskProfile(dispatch, values); //TODO put state in localstorage
    changeStatusProgressBar(dispatch, formData.app.metadata.progressBar + 4.8);
    actions.setSubmitting(true);
    setInformationPage(dispatch, 21, categoriesName.commission);
  };

  async componentDidMount() {
    const { dispatch } = this.props;
    setInformationPage(dispatch, 20, categoriesName.commission);
  }

  render() {
    const isLoading = false;
    const { classes, formData } = this.props;
    return (
      !isLoading && (
        <StepWrapper
          avatarText={this.props.intl.get('app.avatar.text.risk.part.five')}
          heading={this.props.intl.get('app.header.form.risk.part.five')}
          classHeader={classnames(classes.stepHeader)}
        >
          <FormApp
            initialValues={{
              percentageTransactions: formData.app.data.riskProfile.percentageTransactions,
            }}
            isInitValid={this.isInitValid}
            validationSchema={riskProfileTransactionValidateSchema}
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
                  <Row wrap="wrap" margin="0 8px" style={stylesComponent.rowContainer}>
                    <Typography
                      style={{ margin: '0 8px' }}
                      className={classnames(classes.subTitleForm)}
                    >
                      {this.props.intl.get('app.title.form.risk.part.five')}
                    </Typography>
                    <Column padding="0px 8px">
                      <FielControlForm
                        data-test-id="percentageTransactions"
                        name="percentageTransactions"
                        type="number"
                        label={'Percentage of transactions'}
                        setFieldTouched={setFieldTouched}
                        errors={errors}
                        touched={touched}
                        shouldValidateOnMount
                        renderFastField
                        customWidth={100}
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
