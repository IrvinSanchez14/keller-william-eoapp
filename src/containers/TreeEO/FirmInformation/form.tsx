import { FielControlForm } from 'src/components/FieldControlForm';
import { getFullNameFields } from 'src/helpers/fieldsForm';

export const FormFirmInformation = (formikProps: any) => {
  return getFullNameFields().map(({ name, type, customWidth, label }) => (
    <FielControlForm
      data-test-id={name}
      id={name}
      key={name}
      name={name}
      type={type}
      setFieldTouched={formikProps.setFieldTouched}
      label={label}
      fullWidth
      shouldValidateOnMount
      errors={formikProps.errors}
      touched={formikProps.touched}
      renderFastField
      customWidth={customWidth}
    />
  ));
};
