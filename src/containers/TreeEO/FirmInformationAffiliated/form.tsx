import { FielControlForm } from 'src/components/FieldControlForm';
import { RadioField } from 'src/components/RadioForm';
import { useAppContext } from 'src/store';
import { useState, useEffect } from 'react';

export const propertyUsageFields = [
  {
    id: 1,
    name: 'isFirmOwned',
    value: true,
    text: 'YES',
    textMobile: 'Yes',
  },
  {
    id: 2,
    name: 'isFirmOwned',
    value: false,
    text: 'NO',
    textMobile: 'No',
  },
];

export const FormFirmInformationAffiliated = (formikProps: any, handleChange: any) => {
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
          label={isMobile <= 768 ? item.textMobile : intl.get(`app.radio.answer.${item.text}`)}
          onChange={() => handleChange(item.value, formikProps)}
          checked={formikProps.values.isFirmOwned === item.value}
        />
      )}
    />
  ));
};
