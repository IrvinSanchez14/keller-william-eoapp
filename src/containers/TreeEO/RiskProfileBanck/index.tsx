import { Component } from 'react';
import classnames from 'classnames';

import { IAppStoreProps } from 'src/typesInterface/IAppStoreProps';
import { storeRiskProfile, changeStatusProgressBar } from 'src/store/actions/app';
import { riskProfileBanckValidateSchema } from 'src/helpers/validations';
import { setInformationPage } from 'src/store/actions/app';
import StepWrapper from 'src/components/StepWrapper';
import { FormApp } from 'src/components/FormApp';
import { FielControlForm } from 'src/components/FieldControlForm';

import { RadioField } from 'src/components/RadioForm';
import { categoriesName } from 'src/helpers/constants';

import { withStyles } from 'src/styles/FormStyle/css/withStyles';
import { styles } from './styles';

type FullNameProps = IAppStoreProps;

export const propertyUsageFields = [
  {
    id: 1,
    name: 'isMortageBanking',
    value: true,
    text: 'Yes',
  },
  {
    id: 2,
    name: 'isMortageBanking',
    value: false,
    text: 'No',
  },
];

@withStyles(styles)
export class RiskProfileBanck extends Component<FullNameProps> {
  isInitValid = false;
  state = { width: 0 };

  nextStep = async (values: any, actions: any) => {
    const { dispatch, formData } = this.props;
    storeRiskProfile(dispatch, values); //TODO put state in localstorage
    changeStatusProgressBar(dispatch, formData.app.metadata.progressBar + 4.8);
    setInformationPage(dispatch, 18, categoriesName.riskFactorInformation);
  };

  async componentDidMount() {
    const { dispatch } = this.props;
    setInformationPage(dispatch, 17, categoriesName.riskFactorInformation);
    this.setState({ width: window.innerWidth });
    window.addEventListener('resize', this.updateDimensions);
  }

  updateDimensions = () => {
    this.setState({ width: window.innerWidth });
  };

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  render() {
    const isLoading = false;
    const { formData, classes } = this.props;
    return (
      !isLoading && (
        <StepWrapper
          avatarText={this.props.intl.get('app.avatar.text.risk.part.two')}
          heading={this.props.intl.get('app.header.form.risk.part.two')}
          classHeader={classnames(classes.stepHeader)}
        >
          <FormApp
            initialValues={{
              isMortageBanking: formData.app.data.riskFactorInformation.isMortageBanking,
            }}
            isInitValid
            validationSchema={riskProfileBanckValidateSchema}
            onSubmit={this.nextStep}
            buttonLabel={'Continue'}
            dataTestId="continueButton"
            isLoading={false}
            isInQuestionnaire
            dispatch={this.props.dispatch}
            progressBar={formData.app.metadata.progressBar}
          >
            {({ values, setFieldValue }: any) => (
              <>
                <div>
                  <FielControlForm
                    name="isMortageBanking"
                    renderCustomField={({ field }) => (
                      <RadioField
                        {...field}
                        name="isMortageBanking"
                        value="isMortageBanking"
                        data-test-id="sameAddressButtonNo"
                        label={
                          this.state.width <= 768
                            ? 'Yes'
                            : this.props.intl.get('app.text.checkbox.yes.risk.part.two')
                        }
                        onChange={() => setFieldValue('isMortageBanking', true)}
                        checked={values.isMortageBanking === true}
                      />
                    )}
                  />
                </div>
                <div>
                  <FielControlForm
                    name="isMortageBanking"
                    renderCustomField={({ field }) => (
                      <RadioField
                        {...field}
                        name="isMortageBanking"
                        value="isMortageBanking"
                        data-test-id="sameAddressButtonNo"
                        label={
                          this.state.width <= 768
                            ? 'No'
                            : this.props.intl.get('app.text.checkbox.no.risk.part.two')
                        }
                        onChange={() => setFieldValue('isMortageBanking', false)}
                        checked={values.isMortageBanking === false}
                      />
                    )}
                  />
                </div>
              </>
            )}
          </FormApp>
        </StepWrapper>
      )
    );
  }
}
