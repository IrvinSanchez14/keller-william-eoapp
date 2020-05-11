import { Component } from 'react';
import classnames from 'classnames';
import reactIntlUniversal from 'react-intl-universal';
import { Typography } from '@material-ui/core';

import { commissionOtherValidateSchema } from 'src/helpers/validations';
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
export class FormCommissionInformationOther extends Component<IFormFirmInformation> {
  isInitValid = false;
  isButtonLoading = false;

  render() {
    const { classes, formData, onSubmit, dispatch, hideButton } = this.props;
    return (
      <FormApp
        initialValues={{
          farmRanch: formData.app.data.commission.farmRanch,
          auctioneering: formData.app.data.commission.auctioneering,
          mortageBrokerage: formData.app.data.commission.mortageBrokerage,
        }}
        isInitValid={this.isInitValid}
        validationSchema={commissionOtherValidateSchema}
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
                <Column>
                  <Typography className={classnames(classes.subTitleForm)}>
                    {intl.get('app.subtitle.one.commission.part.six')}
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
              <Row wrap="wrap" margin="0 -8px" style={stylesComponent.rowContainer}>
                <Column>
                  <Typography className={classnames(classes.subTitleForm)}>
                    {intl.get('app.subtitle.two.commission.part.six')}
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
                    {intl.get('app.subtitle.three.commission.part.six')}
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
    );
  }
}

const stylesComponent = {
  rowContainer: {
    marginBottom: '1.3em',
  },
};
