import { Component } from 'react';
import classnames from 'classnames';
import { FormikHelpers } from 'formik';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { FormikProps, IAppStoreProps } from 'src/typesInterface/IAppStoreProps';
import { changeStatusProgressBar, storeCommissionTotalSummary } from 'src/store/actions/app';
import { setInformationPage } from 'src/store/actions/app';
import { getFullNameFields } from 'src/helpers/fieldsForm';
import StepWrapper from 'src/components/StepWrapper';
import { FormApp } from 'src/components/FormApp';
import { FielControlForm } from 'src/components/FieldControlForm';
import { categoriesName } from 'src/helpers/constants';

import { withStyles } from 'src/styles/FormStyle/css/withStyles';
import { styles } from './styles';
import { Row, Column } from 'src/components/LayoutWrapper/Flex';

type FullNameProps = IAppStoreProps;

type FormFields = {
  contactName: string;
  brokerName: string;
  kwMarketCenterName: string;
  yearEstablished: number;
};

@withStyles(styles)
export class CommissionInformationSummary extends Component<FullNameProps> {
  isInitValid = false;
  isButtonLoading = false;
  state = {
    totalCommision: 0,
  };

  nextStep = async (values: any, actions: FormikHelpers<FormFields>) => {
    this.isButtonLoading = true;
    const { dispatch, formData } = this.props;
    const total = this.totalSummary();
    storeCommissionTotalSummary(dispatch, total); //TODO put state in localstorage
    changeStatusProgressBar(dispatch, formData.app.metadata.progressBar + 4.8);
    actions.setSubmitting(true);
    setInformationPage(dispatch, 16, categoriesName.commissionInformation);
  };

  async componentDidMount() {
    const { dispatch } = this.props;
    setInformationPage(dispatch, 15, categoriesName.commissionInformation);
  }

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
        value: formData.app.data.commissionInformation.residential.total,
      },
      {
        key: 2,
        title: 'Commercial',
        value: formData.app.data.commissionInformation.commercial.total,
      },
      {
        key: 3,
        title: 'Farm/Ranch',
        value: formData.app.data.commissionInformation.farmRanch,
      },
      {
        key: 4,
        title: 'Auctioneering',
        value: formData.app.data.commissionInformation.auctioneering,
      },
      {
        key: 5,
        title: 'Mortgage',
        value: formData.app.data.commissionInformation.mortageBrokerage,
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
    return total;
  };

  render() {
    const isLoading = false;
    const { classes, formData } = this.props;
    return (
      !isLoading && (
        <StepWrapper
          avatarText={this.props.intl.get('app.avatar.text.commission.part.seven')}
          heading={this.props.intl.get('app.head.form.commission.par.seven')}
          classHeader={classnames(classes.stepHeader)}
        >
          <Typography className={classnames(classes.titleForm)}>
            {this.props.intl.get('app.title.form.commission.part.seven')}
          </Typography>

          <FormApp
            initialValues={{
              contacName: formData.app.data.firmInformation.contacName || '',
              brokerName: formData.app.data.firmInformation.brokerName || '',
              kwMarketCenterName: formData.app.data.firmInformation.kwMarketCenterName || '',
              yearEstablished: formData.app.data.firmInformation.yearEstablished || '',
            }}
            isInitValid={this.isInitValid}
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
                  <Row wrap="wrap" margin="0 -8px" className={classnames(classes.backTitleTable)}>
                    <Column padding="7px 20px">
                      <Typography className={classnames(classes.titleTable)}>
                        {this.props.intl.get('app.title.table.commission.part.seven').toUpperCase()}
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
        </StepWrapper>
      )
    );
  }
}
