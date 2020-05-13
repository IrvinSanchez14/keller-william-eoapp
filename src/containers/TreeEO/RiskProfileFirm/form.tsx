import { FielControlForm } from 'src/components/FieldControlForm';

import { RadioField } from 'src/components/RadioForm';
import { withStyles } from 'src/styles/FormStyle/css/withStyles';
import { styles } from './styles';

export const propertyUsageFields = [
  {
    id: 1,
    name: 'isRepresentCommission',
    value: true,
    text: 'Yes',
  },
  {
    id: 2,
    name: 'isRepresentCommission',
    value: false,
    text: 'No',
  },
];

export const FormRiskProfileFirm = (formikProps: any) => {
  return (
    <>
      <div>
        <FielControlForm
          name="isRepresentCommission"
          renderCustomField={({ field }) => (
            <RadioField
              {...field}
              name="isRepresentCommission"
              value="isRepresentCommission"
              data-test-id="sameAddressButtonNo"
              label={'Yes'}
              onChange={() => formikProps.setFieldValue('isRepresentCommission', true)}
              checked={formikProps.values.isRepresentCommission === true}
            />
          )}
        />
      </div>
      <div>
        <FielControlForm
          name="isRepresentCommission"
          renderCustomField={({ field }) => (
            <RadioField
              {...field}
              name="isRepresentCommission"
              value="isRepresentCommission"
              data-test-id="sameAddressButtonNo"
              label={'No'}
              onChange={() => formikProps.setFieldValue('isRepresentCommission', false)}
              checked={formikProps.values.isRepresentCommission === false}
            />
          )}
        />
      </div>
    </>
  );
};
