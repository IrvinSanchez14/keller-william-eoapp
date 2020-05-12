import { Component } from 'react';
import classnames from 'classnames';
import { FormikHelpers } from 'formik';
import Typography from '@material-ui/core/Typography';
import { IAppStoreProps } from 'src/typesInterface/IAppStoreProps';
import { changeStatusProgressBar } from 'src/store/actions/app';
import { setInformationPage } from 'src/store/actions/app';
import StepWrapper from 'src/components/StepWrapper';
import { FormApp } from 'src/components/FormApp';
import { categoriesName } from 'src/helpers/constants';
import { Icon } from 'src/components/Icon';

import { withStyles } from 'src/styles/FormStyle/css/withStyles';
import { styles } from './styles';

const getTypesCommission = [
  {
    id: 1,
    icon: 'singleDefault',
    label: 'Residential',
  },
  {
    id: 2,
    icon: 'commercialDefault',
    label: 'Commercial',
  },
  {
    id: 3,
    icon: 'farmDefault',
    label: 'Farm/Ranch',
  },
  {
    id: 4,
    icon: 'auctioneringDefault',
    label: 'Auctioneering',
  },
  {
    id: 5,
    icon: 'mortgageDefault',
    label: 'Mortgage',
  },
];

type FullNameProps = IAppStoreProps;

type FormFields = {
  contactName: string;
  brokerName: string;
  kwMarketCenterName: string;
  yearEstablished: number;
};

@withStyles(styles)
export class CommissionInformationMenu extends Component<FullNameProps> {
  isInitValid = false;
  isButtonLoading = false;

  nextStep = async (values: any, actions: FormikHelpers<FormFields>) => {
    this.isButtonLoading = true;
    const { dispatch, formData } = this.props;
    changeStatusProgressBar(dispatch, formData.app.metadata.progressBar + 4.8);
    actions.setSubmitting(true);
    setInformationPage(dispatch, 12, categoriesName.commissionInformation);
  };

  async componentDidMount() {
    const { dispatch } = this.props;
    setInformationPage(dispatch, 11, categoriesName.commissionInformation);
  }

  renderChildrenCommissionTypes = () =>
    getTypesCommission.map((item) => (
      <div key={item.id} className={classnames(this.props.classes.card)}>
        <div className={classnames(this.props.classes.content)}>
          <Icon name={item.icon} className={classnames(this.props.classes.iconSize)} />
          <Typography variant="body1" className={classnames(this.props.classes.label)}>
            {item.label}
          </Typography>
        </div>
      </div>
    ));

  render() {
    const isLoading = false;
    const { classes, formData } = this.props;
    return (
      !isLoading && (
        <StepWrapper
          avatarText={this.props.intl.get('app.avatar.text.commission.part.three')}
          heading={this.props.intl.get('app.head.form.commission.part.three')}
          classHeader={classnames(classes.stepHeader)}
        >
          <Typography className={classnames(classes.titleForm)}>
            {this.props.intl.get('app.title.form.commission.part.three')}
          </Typography>

          <FormApp
            initialValues={{}}
            isInitValid={this.isInitValid}
            validationSchema={null}
            onSubmit={this.nextStep}
            buttonLabel={'Continue'}
            dataTestId="continueButton"
            isLoading={this.isButtonLoading}
            isInQuestionnaire
            dispatch={this.props.dispatch}
            progressBar={formData.app.metadata.progressBar}
            notDisabled={true}
          >
            {() => {
              return (
                <>
                  <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '1em' }}>
                    {this.renderChildrenCommissionTypes()}
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
