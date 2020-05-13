import { FielControlForm } from 'src/components/FieldControlForm';
import { RadioField } from 'src/components/RadioForm';
import { useAppContext } from 'src/store';

export const propertyUsageFields = [
  {
    id: 1,
    name: 'isFirmOwned',
    value: true,
    text: 'YES',
  },
  {
    id: 2,
    name: 'isFirmOwned',
    value: false,
    text: 'NO',
  },
];

export const FormFirmInformationAffiliated = (formikProps: any, handleChange: any) => {
  const { intl } = useAppContext();

  return propertyUsageFields.map((item) => (
    <FielControlForm
      key={item.id}
      name={item.name}
      shouldValidateOnMount
      renderCustomField={({ field }) => (
        <RadioField
          {...field}
          name={item.name}
          value={item.value}
          data-test-id={item.value}
          label={intl.get(`app.radio.answer.${item.text}`)}
          onChange={() => handleChange(item.value, formikProps)}
          checked={formikProps.values.isFirmOwned === item.value}
        />
      )}
    />
  ));
};
