import { Component } from 'react';
import classnames from 'classnames';

import { IAppStoreProps } from 'src/typesInterface/IAppStoreProps';
import { storeRiskProfile, changeStatusProgressBar } from 'src/store/actions/app';
import { riskProfileFirmValidateSchema } from 'src/helpers/validations';
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
    name: 'isRepresentCommission',
    value: true,
    text: 'Yes',
  },
  {
    id: 2,
    name: 'isRepresentCommission',
    value: false,
    text: 'No',
  },
];

@withStyles(styles)
export class RiskProfileFirm extends Component<FullNameProps> {
  isInitValid = false;
  state = { width: 0 };

  nextStep = async (values: any, actions: any) => {
    const { dispatch, formData } = this.props;
    storeRiskProfile(dispatch, values); //TODO put state in localstorage
    changeStatusProgressBar(dispatch, formData.app.metadata.progressBar + 4.8);
    setInformationPage(dispatch, 20, categoriesName.riskFactorInformation);
  };

  async componentDidMount() {
    const { dispatch } = this.props;
    setInformationPage(dispatch, 19, categoriesName.riskFactorInformation);
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
          avatarText={this.props.intl.get('app.avatar.text.risk.part.four')}
          heading={this.props.intl.get('app.header.form.risk.part.four')}
          classHeader={classnames(classes.stepHeader)}
        >
          <FormApp
            initialValues={{
              isRepresentCommission: formData.app.data.riskFactorInformation.isRepresentCommission,
            }}
            isInitValid
            validationSchema={riskProfileFirmValidateSchema}
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
                    name="isRepresentCommission"
                    renderCustomField={({ field }) => (
                      <RadioField
                        {...field}
                        name="isRepresentCommission"
                        value="isRepresentCommission"
                        data-test-id="sameAddressButtonNo"
                        label={'Yes'}
                        onChange={() => setFieldValue('isRepresentCommission', true)}
                        checked={values.isRepresentCommission === true}
                      />
                    )}
                  />
                </div>
                <div>
                  <FielControlForm
                    name="isRepresentCommission"
                    renderCustomField={({ field }) => (
                      <RadioField
                        {...field}
                        name="isRepresentCommission"
                        value="isRepresentCommission"
                        data-test-id="sameAddressButtonNo"
                        label={'No'}
                        onChange={() => setFieldValue('isRepresentCommission', false)}
                        checked={values.isRepresentCommission === false}
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
