import { useState, useEffect } from 'react';

import { FielControlForm } from 'src/components/FieldControlForm';

import { RadioField } from 'src/components/RadioForm';

import { withStyles } from 'src/styles/FormStyle/css/withStyles';
import { styles } from './styles';
import { useAppContext } from 'src/store';

export const propertyUsageFields = [
  {
    id: 1,
    name: 'isMortageBanking',
    value: true,
    text: 'Yes',
  },
  {
    id: 2,
    name: 'isMortageBanking',
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
          name="isMortageBanking"
          renderCustomField={({ field }) => (
            <RadioField
              {...field}
              name="isMortageBanking"
              value="isMortageBanking"
              data-test-id="sameAddressButtonNo"
              label={isMobile <= 768 ? 'Yes' : intl.get('app.text.checkbox.yes.risk.part.two')}
              onChange={() => formikProps.setFieldValue('isMortageBanking', true)}
              checked={formikProps.values.isMortageBanking === true}
            />
          )}
        />
      </div>
      <div>
        <FielControlForm
          name="isMortageBanking"
          renderCustomField={({ field }) => (
            <RadioField
              {...field}
              name="isMortageBanking"
              value="isMortageBanking"
              data-test-id="sameAddressButtonNo"
              label={isMobile <= 768 ? 'No' : intl.get('app.text.checkbox.no.risk.part.two')}
              onChange={() => formikProps.setFieldValue('isMortageBanking', false)}
              checked={formikProps.values.isMortageBanking === false}
            />
          )}
        />
      </div>
    </>
  );
};
