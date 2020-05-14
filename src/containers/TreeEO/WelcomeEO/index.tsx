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
    label: 'Firm',
  },
  {
    id: 2,
    icon: 'agentWelcome',
    label: 'Agents',
  },
  {
    id: 3,
    icon: 'commissionWelcome',
    label: 'Commission',
  },
  {
    id: 4,
    icon: 'policyWelcome',
    label: 'Policy',
  },
  {
    id: 5,
    icon: 'riskWelcome',
    label: 'Risk Profile',
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
    setInformationPage(dispatch, 0, categoriesName.intro);
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
          classHeader={classnames(classes.stepHeader)}
          classBottom={classnames(classes.bottomHeader)}
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
                    <div>
                      <div
                        className={classnames(
                          this.props.classes.contentFirm,
                          this.props.classes.content,
                        )}
                      >
                        <Icon
                          name="firmWelcome"
                          className={classnames(this.props.classes.iconFirm)}
                        />
                        <Typography
                          className={classnames(this.props.classes.labelFirm)}
                          variant="body1"
                        >
                          Firm
                        </Typography>
                      </div>
                    </div>
                    <div>
                      <div
                        className={classnames(
                          this.props.classes.contentAgent,
                          this.props.classes.content,
                        )}
                      >
                        <Icon
                          name="agentWelcome"
                          className={classnames(this.props.classes.iconAgent)}
                        />
                        <Typography
                          variant="body1"
                          className={classnames(this.props.classes.labelAgent)}
                        >
                          Agents
                        </Typography>
                      </div>
                    </div>
                    <div>
                      <div
                        className={classnames(
                          this.props.classes.contentCommission,
                          this.props.classes.content,
                        )}
                      >
                        <Icon
                          name="commissionWelcome"
                          className={classnames(this.props.classes.iconCommission)}
                        />
                        <Typography
                          variant="body1"
                          className={classnames(this.props.classes.label)}
                        >
                          Commission
                        </Typography>
                      </div>
                    </div>
                    <div>
                      <div
                        className={classnames(
                          this.props.classes.contentPolicy,
                          this.props.classes.content,
                        )}
                      >
                        <Icon
                          name="policyWelcome"
                          className={classnames(this.props.classes.iconPolicy)}
                        />
                        <Typography
                          variant="body1"
                          className={classnames(this.props.classes.labelPolicy)}
                        >
                          Policy
                        </Typography>
                      </div>
                    </div>
                    <div>
                      <div className={classnames(this.props.classes.content)}>
                        <Icon
                          name="riskWelcome"
                          className={classnames(this.props.classes.iconRisk)}
                        />
                        <Typography
                          variant="body1"
                          className={classnames(this.props.classes.label)}
                        >
                          Risk Profile
                        </Typography>
                      </div>
                    </div>
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
