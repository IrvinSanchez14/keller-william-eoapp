import { Component } from 'react';
import classnames from 'classnames';
import reactIntlUniversal from 'react-intl-universal';
import { Typography, Divider } from '@material-ui/core';

import { FormikProps } from 'src/typesInterface/IAppStoreProps';

import { getFullNameFields } from 'src/helpers/fieldsForm';
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
export class FormCommissionInformationSummary extends Component<IFormFirmInformation> {
  isInitValid = false;
  isButtonLoading = false;
  state = {
    totalCommision: 0,
  };

  renderFormChildren = ({ errors, touched, setFieldTouched }: FormikProps) =>
    getFullNameFields().map(({ name, type, customWidth, label }) => (
      <FielControlForm
        data-test-id={name}
        key={name}
        name={name}
        type={type}
        setFieldTouched={setFieldTouched}
        label={label}
        fullWidth
        errors={errors}
        touched={touched}
        renderFastField
        customWidth={customWidth}
      />
    ));

  renderChildrenTable = () => {
    const { classes, formData } = this.props;
    const children = [];
    children.push(
      {
        key: 1,
        title: 'Residential',
        value: formData.app.data.commissionInformation.residential.total || 0,
      },
      {
        key: 2,
        title: 'Commercial',
        value: formData.app.data.commissionInformation.commercial.total || 0,
      },
      {
        key: 3,
        title: 'Farm/Ranch',
        value: formData.app.data.commissionInformation.farmRanch || 0,
      },
      {
        key: 4,
        title: 'Auctioneering',
        value: formData.app.data.commissionInformation.auctioneering || 0,
      },
      {
        key: 5,
        title: 'Mortgage',
        value: formData.app.data.commissionInformation.mortageBrokerage || 0,
      },
    );
    return children.map((item: any) => {
      return (
        <>
          <div key={item.key} className={classnames(classes.divFieldTable)}>
            <Typography className={classnames(classes.textTableField)}>{item.title}</Typography>
            <Typography className={classnames(classes.typoValueNumber)}>
              ${item.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </Typography>
          </div>
          <Divider />
        </>
      );
    });
  };

  totalSummary = () => {
    const { formData } = this.props;
    const total =
      formData.app.data.commissionInformation.residential.total +
      formData.app.data.commissionInformation.commercial.total +
      formData.app.data.commissionInformation.farmRanch +
      formData.app.data.commissionInformation.auctioneering +
      formData.app.data.commissionInformation.mortageBrokerage;
    return total || 0;
  };

  render() {
    const isLoading = false;
    const { classes, formData, onSubmit, hideButton, dispatch } = this.props;
    return (
      <FormApp
        initialValues={{
          contacName: formData.app.data.firmInformation.contacName || '',
          brokerName: formData.app.data.firmInformation.brokerName || '',
          kwMarketCenterName: formData.app.data.firmInformation.kwMarketCenterName || '',
          yearEstablished: formData.app.data.firmInformation.yearEstablished || '',
        }}
        isInitValid={this.isInitValid}
        onSubmit={onSubmit}
        buttonLabel={'Continue'}
        dataTestId="continueButton"
        isLoading={this.isButtonLoading}
        isInQuestionnaire
        dispatch={dispatch}
        progressBar={formData.app.metadata.progressBar}
        hideButton={hideButton}
        alignButton={classnames(classes.alignButton)}
      >
        {({ touched, errors, setFieldTouched }) => {
          return (
            <>
              <Row wrap="wrap" margin="0 -8px" className={classnames(classes.backTitleTable)}>
                <Column padding="7px 20px">
                  <Typography className={classnames(classes.titleTable)}>
                    {intl.get('app.title.table.commission.part.seven').toUpperCase()}
                  </Typography>
                </Column>
              </Row>
              {this.renderChildrenTable()}
              <Divider style={{ height: '2px' }} />
              <div className={classnames(classes.divBottomTotal)}>
                <Typography className={classnames(classes.totalTypo)}>Total</Typography>
                <Typography className={classnames(classes.totalTypo)}>
                  $
                  {this.totalSummary()
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </Typography>
              </div>
            </>
          );
        }}
      </FormApp>
    );
  }
}
