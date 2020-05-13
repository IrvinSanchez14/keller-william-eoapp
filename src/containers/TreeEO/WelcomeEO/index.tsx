import { Component } from 'react';
import classnames from 'classnames';
import { FormikHelpers } from 'formik';
import { Typography } from '@material-ui/core';

import { IAppStoreProps } from 'src/typesInterface/IAppStoreProps';
import { storeFirmConfirmation, changeStatusProgressBar } from 'src/store/actions/app';
import { setInformationPage } from 'src/store/actions/app';
import StepWrapper from 'src/components/StepWrapper';
import { categoriesName } from 'src/helpers/constants';
import { FormApp } from 'src/components/FormApp';
import { Icon } from 'src/components/Icon';

import { withStyles } from 'src/styles/FormStyle/css/withStyles';
import { styles } from './styles';

type FullNameProps = IAppStoreProps;

type FormFields = {
  contactName: string;
  brokerName: string;
  kwMarketCenterName: string;
  yearEstablished: number;
};

const getTypesCommission = [
  {
    id: 1,
    icon: 'firmWelcome',
    label: 'Residential',
  },
  {
    id: 2,
    icon: 'agentWelcome',
    label: 'Commercial',
  },
  {
    id: 3,
    icon: 'commissionWelcome',
    label: 'Farm/Ranch',
  },
  {
    id: 4,
    icon: 'policyWelcome',
    label: 'Auctioneering',
  },
  {
    id: 5,
    icon: 'riskWelcome',
    label: 'Mortgage',
  },
];

@withStyles(styles)
export class WelcomeEO extends Component<FullNameProps> {
  isButtonLoading = false;
  isInitValid = false;

  nextStep = async (values: any, actions: FormikHelpers<FormFields>) => {
    this.isButtonLoading = true;
    const { dispatch, formData } = this.props;
    storeFirmConfirmation(dispatch, values); //TODO put state in localstorage
    changeStatusProgressBar(dispatch, formData.app.metadata.progressBar + 4.8);
    actions.setSubmitting(true);
    setInformationPage(dispatch, 1, categoriesName.firmConfirmation);
  };

  async componentDidMount() {
    const { dispatch } = this.props;
    setInformationPage(dispatch, 0, categoriesName.firmConfirmation);
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
    const { classes, formData, dispatch } = this.props;
    return (
      !isLoading && (
        <StepWrapper
          avatarText={this.props.intl.get('app.avatar.text,welcome')}
          heading={this.props.intl.get('app.head.welcome')}
          bottomContent={this.props.intl.getHTML('app.link.welcome')}
        >
          <Typography className={classnames(classes.titleForm)}>
            {this.props.intl.get('app.title.welcome')}
          </Typography>
          <FormApp
            initialValues={{}}
            onSubmit={this.nextStep}
            buttonLabel={'Continue'}
            dataTestId="continueButton"
            isLoading={this.isButtonLoading}
            isInQuestionnaire
            dispatch={dispatch}
            progressBar={formData.app.metadata.progressBar}
            hideButton={false}
            alignButton={classnames(classes.alignButton)}
          >
            {() => {
              return (
                <>
                  <div className={classnames(this.props.classes.divSVG)}>
                    {this.renderChildrenCommissionTypes()}
                  </div>
                  <Typography className={classnames(this.props.classes.textContent)}>
                    {this.props.intl.getHTML('app.text.welcome')}
                  </Typography>
                  <Typography className={classnames(this.props.classes.textContent)}>
                    {this.props.intl.getHTML('app.text.welcome.two')}
                  </Typography>
                </>
              );
            }}
          </FormApp>
        </StepWrapper>
      )
    );
  }
}
