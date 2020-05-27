import { FormikProps } from 'formik';

import { FielControlForm } from 'src/components/FieldControlForm';
import { getFullNameFields } from 'src/helpers/fieldsForm';

export const FormFirmInformation = (formikProps: FormikProps<any>) => {
  return getFullNameFields().map(
    ({ name, type, customWidth, label, numberMask, setNumberMask }) => (
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
        numberMask={numberMask}
        setNumberMask={setNumberMask}
      />
    ),
  );
};
