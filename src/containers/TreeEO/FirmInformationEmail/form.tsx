import { FormikProps } from 'src/typesInterface/IAppStoreProps';
import { getFullEmailFields } from 'src/helpers/fieldsForm';
import { FielControlForm } from 'src/components/FieldControlForm';

export const FormFirmInformationEmail = ({ errors, touched, setFieldTouched }: FormikProps) =>
  getFullEmailFields().map(({ name, type, customWidth, label }) => (
    <FielControlForm
      data-test-id={name}
      key={name}
      name={name}
      type={type}
      setFieldTouched={setFieldTouched}
      label={label}
      fullWidth
      errors={errors}
      touched={touched}
      renderFastField
      shouldValidateOnMount
      customWidth={customWidth}
    />
  ));
