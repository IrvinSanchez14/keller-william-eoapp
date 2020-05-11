import { Component } from 'react';
import classnames from 'classnames';
import reactIntlUniversal from 'react-intl-universal';
import { Typography } from '@material-ui/core';

import { commissionInformationValidateSchema } from 'src/helpers/validations';

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
export class FormCommissionInformation extends Component<IFormFirmInformation> {
  isInitValid = false;
  isButtonLoading = false;

  render() {
    const isLoading = false;
    const { classes, formData, dispatch, onSubmit, hideButton } = this.props;
    return (
      <FormApp
        initialValues={{
          grossCommission: formData.app.data.commission.grossCommission,
          averageValue: formData.app.data.commission.averageValue,
        }}
        isInitValid={this.isInitValid}
        validationSchema={commissionInformationValidateSchema}
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
              <Row wrap="wrap" margin="0 -8px" style={stylesComponent.rowContainer}>
                <Column padding="0px 8px">
                  <Typography className={classnames(classes.subTitleForm)}>
                    {intl.get('app.subtitle.form.commission.part.one')}
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
                    {intl.get('app.subtitle2.form.commission.part.one')}
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
    );
  }
}

const stylesComponent = {
  rowContainer: {
    marginBottom: '1.3em',
  },
};
