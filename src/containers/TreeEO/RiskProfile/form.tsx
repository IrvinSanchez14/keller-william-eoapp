import { Component } from 'react';
import reactIntlUniversal from 'react-intl-universal';

import { riskProfileValidateSchema } from 'src/helpers/validations';
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
    name: 'isHomeWarranty',
    value: true,
    text: 'Yes',
  },
  {
    id: 2,
    name: 'isHomeWarranty',
    value: false,
    text: 'No',
  },
];

@withStyles(styles)
export class FormRiskProfile extends Component<IFormFirmInformation> {
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
    const { formData, onSubmit, hideButton, dispatch } = this.props;
    return (
      <FormApp
        initialValues={{
          isHomeWarranty: formData.app.data.riskProfile.isHomeWarranty,
        }}
        isInitValid
        validationSchema={riskProfileValidateSchema}
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
                name="isHomeWarranty"
                renderCustomField={({ field }) => (
                  <RadioField
                    {...field}
                    name="isHomeWarranty"
                    value="isHomeWarranty"
                    data-test-id="sameAddressButtonNo"
                    label={
                      this.state.width <= 768
                        ? 'Yes'
                        : intl.get('app.text.checkbox.yes.risk.part.one')
                    }
                    onChange={() => setFieldValue('isHomeWarranty', true)}
                    checked={values.isHomeWarranty === true}
                  />
                )}
              />
            </div>
            <div>
              <FielControlForm
                name="isHomeWarranty"
                renderCustomField={({ field }) => (
                  <RadioField
                    {...field}
                    name="isHomeWarranty"
                    value="isHomeWarranty"
                    data-test-id="sameAddressButtonNo"
                    label={
                      this.state.width <= 768
                        ? 'No'
                        : intl.get('app.text.checkbox.no.risk.part.one')
                    }
                    onChange={() => setFieldValue('isHomeWarranty', false)}
                    checked={values.isHomeWarranty === false}
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
