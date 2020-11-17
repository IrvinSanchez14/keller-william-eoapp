import { useState, useEffect } from 'react';

import { FielControlForm } from 'src/components/FieldControlForm';

import { RadioField } from 'src/components/RadioForm';
import { useAppContext } from 'src/store';

export const propertyUsageFields = [
  {
    id: 1,
    name: 'isMortgageBanking',
    value: true,
    text: 'Yes',
  },
  {
    id: 2,
    name: 'isMortgageBanking',
    value: false,
    text: 'No',
  },
];

export const FormRiskProfileBanck = (formikProps: any) => {
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
          name="isMortgageBanking"
          renderCustomField={({ field }) => (
            <RadioField
              {...field}
              name="isMortgageBanking"
              value="isMortgageBanking"
              data-test-id="sameAddressButtonNo"
              label={isMobile <= 768 ? 'Yes' : intl.get('app.text.checkbox.yes.risk.part.two')}
              onChange={() => formikProps.setFieldValue('isMortgageBanking', true)}
              checked={formikProps.values.isMortgageBanking === true}
            />
          )}
        />
      </div>
      <div>
        <FielControlForm
          name="isMortgageBanking"
          renderCustomField={({ field }) => (
            <RadioField
              {...field}
              name="isMortgageBanking"
              value="isMortgageBanking"
              data-test-id="sameAddressButtonNo"
              label={isMobile <= 768 ? 'No' : intl.get('app.text.checkbox.no.risk.part.two')}
              onChange={() => formikProps.setFieldValue('isMortgageBanking', false)}
              checked={formikProps.values.isMortgageBanking === false}
            />
          )}
        />
      </div>
    </>
  );
};
