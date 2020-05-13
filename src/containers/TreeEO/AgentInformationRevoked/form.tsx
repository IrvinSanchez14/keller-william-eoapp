import { FielControlForm } from 'src/components/FieldControlForm';
import { RadioField } from 'src/components/RadioForm';

export const propertyUsageFields = [
  {
    id: 1,
    name: 'revokedLicense',
    value: true,
    text: 'Yes',
  },
  {
    id: 2,
    name: 'revokedLicense',
    value: false,
    text: 'No',
  },
];

export const FormAgentInformationRevoked = (formikProps: any, handleChange) => {
  return propertyUsageFields.map((item) => (
    <FielControlForm
      key={item.id}
      name={item.name}
      renderCustomField={({ field }) => (
        <RadioField
          {...field}
          value={item.value}
          data-test-id={item.value}
          label={item.text}
          onChange={() => handleChange(item.value, formikProps)}
          checked={formikProps.values.revokedLicense === item.value}
        />
      )}
    />
  ));
};
