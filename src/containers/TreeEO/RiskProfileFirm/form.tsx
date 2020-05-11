import { Component } from 'react';

import { riskProfileFirmValidateSchema } from 'src/helpers/validations';
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
export class FormRiskProfileFirm extends Component<IFormFirmInformation> {
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
    const { formData, onSubmit, dispatch, hideButton } = this.props;
    return (
      <FormApp
        initialValues={{
          isRepresentCommission: formData.app.data.riskProfile.isRepresentCommission,
        }}
        isInitValid
        validationSchema={riskProfileFirmValidateSchema}
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
    );
  }
}
