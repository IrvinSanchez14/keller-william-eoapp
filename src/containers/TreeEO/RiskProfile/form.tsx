import { useState, useEffect } from 'react';

import { FielControlForm } from 'src/components/FieldControlForm';
import { RadioField } from 'src/components/RadioForm';
import { useAppContext } from 'src/store';

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

export const FormRiskProfile = (formikProps: any) => {
  const { intl } = useAppContext();
  const [isMobile, setIsMobile] = useState(0);

  const handleResize = () => {
    setIsMobile(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    setIsMobile(window.innerWidth);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
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
              label={isMobile <= 768 ? 'Yes' : intl.get('app.text.checkbox.yes.risk.part.one')}
              onChange={() => formikProps.setFieldValue('isHomeWarranty', true)}
              checked={formikProps.values.isHomeWarranty === true}
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
              label={isMobile <= 768 ? 'No' : intl.get('app.text.checkbox.no.risk.part.one')}
              onChange={() => formikProps.setFieldValue('isHomeWarranty', false)}
              checked={formikProps.values.isHomeWarranty === false}
            />
          )}
        />
      </div>
    </>
  );
};
