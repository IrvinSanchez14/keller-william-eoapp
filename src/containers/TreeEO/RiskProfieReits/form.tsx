import { useState, useEffect } from 'react';

import { FielControlForm } from 'src/components/FieldControlForm';

import { RadioField } from 'src/components/RadioForm';

import { useAppContext } from 'src/store';

export const propertyUsageFields = [
  {
    id: 1,
    name: 'isPerformServices',
    value: true,
    text: 'Yes',
  },
  {
    id: 2,
    name: 'isPerformServices',
    value: false,
    text: 'No',
  },
];

export const FormRiskProfileReits = (formikProp: any) => {
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
          name="isPerformServices"
          renderCustomField={({ field }) => (
            <RadioField
              {...field}
              name="isPerformServices"
              value="isPerformServices"
              data-test-id="sameAddressButtonNo"
              label={isMobile <= 768 ? 'Yes' : intl.get('app.text.checkbox.yes.risk.part.three')}
              onChange={() => formikProp.setFieldValue('isPerformServices', true)}
              checked={formikProp.values.isPerformServices === true}
            />
          )}
        />
      </div>
      <div>
        <FielControlForm
          name="isPerformServices"
          renderCustomField={({ field }) => (
            <RadioField
              {...field}
              name="isPerformServices"
              value="isPerformServices"
              data-test-id="sameAddressButtonNo"
              label={isMobile <= 768 ? 'No' : intl.get('app.text.checkbox.no.risk.part.three')}
              onChange={() => formikProp.setFieldValue('isPerformServices', false)}
              checked={formikProp.values.isPerformServices === false}
            />
          )}
        />
      </div>
    </>
  );
};
