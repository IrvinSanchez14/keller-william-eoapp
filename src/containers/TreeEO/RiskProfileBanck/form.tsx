import { Component } from 'react';
import reactIntlUniversal from 'react-intl-universal';

import { riskProfileBanckValidateSchema } from 'src/helpers/validations';
import { FormApp } from 'src/components/FormApp';
import { FielControlForm } from 'src/components/FieldControlForm';

import { RadioField } from 'src/components/RadioForm';

import { withStyles } from 'src/styles/FormStyle/css/withStyles';
import { styles } from './styles';

interface IFormFirmInformation {
  formData: any;
  dispatch: any;
  onSubmit?: any;
  hideButton?: boolean;
  classes?: any;
}

const intl = reactIntlUniversal;

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
export class FormRiskProfileBanck extends Component<IFormFirmInformation> {
  isInitValid = false;
  state = { width: 0 };

  async componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }

  updateDimensions = () => {
    this.setState({ width: window.innerWidth });
  };

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  render() {
    const { formData, dispatch, onSubmit, hideButton } = this.props;
    return (
      <FormApp
        initialValues={{
          isMortageBanking: formData.app.data.riskProfile.isMortageBanking,
        }}
        isInitValid
        validationSchema={riskProfileBanckValidateSchema}
        onSubmit={onSubmit}
        buttonLabel={'Continue'}
        dataTestId="continueButton"
        isLoading={false}
        isInQuestionnaire
        dispatch={dispatch}
        progressBar={formData.app.metadata.progressBar}
        hideButton={hideButton}
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
                        : intl.get('app.text.checkbox.yes.risk.part.two')
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
                        : intl.get('app.text.checkbox.no.risk.part.two')
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
    );
  }
}
