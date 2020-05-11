import { Component } from 'react';
import classnames from 'classnames';
import reactIntlUniversal from 'react-intl-universal';
import { Typography } from '@material-ui/core';

import { commissionTransactionValidateSchema } from 'src/helpers/validations';

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

const intl = reactIntlUniversal;

@withStyles(styles)
export class FormCommissionInformationTransaction extends Component<IFormFirmInformation> {
  isInitValid = false;
  isButtonLoading = false;

  render() {
    const { classes, formData, dispatch, onSubmit, hideButton } = this.props;
    return (
      <FormApp
        initialValues={{
          percentageTransactions: formData.app.data.commission.percentageTransactions,
        }}
        isInitValid={this.isInitValid}
        validationSchema={commissionTransactionValidateSchema}
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
              <Row wrap="wrap" margin="0 8px" style={stylesComponent.rowContainer}>
                <Typography
                  style={{ margin: '0 8px' }}
                  className={classnames(classes.subTitleForm)}
                >
                  {intl.get('app.subtitle.form.commission.part.two')}
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
    );
  }
}

const stylesComponent = {
  rowContainer: {
    marginBottom: '1.3em',
  },
};
