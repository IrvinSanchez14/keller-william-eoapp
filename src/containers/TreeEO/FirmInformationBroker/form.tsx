import { Component } from 'react';
import classnames from 'classnames';
import { Typography } from '@material-ui/core';

import { dateBrokerValidateSchema } from 'src/helpers/validations';
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
}

@withStyles(styles)
export class FormFirmInformationBroker extends Component<IFormFirmInformation> {
  isInitValid = false;
  isButtonLoading = false;

  render() {
    const isLoading = false;
    const { classes, formData, onSubmit, dispatch, hideButton } = this.props;
    return (
      <FormApp
        initialValues={{
          dateLicensedBrokerAgent: formData.app.data.firmInformation.dateLicensedBrokerAgent || '',
          dateLicensedBroker: formData.app.data.firmInformation.dateLicensedBroker || '',
        }}
        isInitValid={this.isInitValid}
        validationSchema={dateBrokerValidateSchema}
        onSubmit={onSubmit}
        buttonLabel={'Continue'}
        dataTestId="continueButton"
        isLoading={this.isButtonLoading}
        isInQuestionnaire
        dispatch={dispatch}
        progressBar={formData.app.metadata.progressBar}
        hideButton={hideButton}
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
    );
  }
}
