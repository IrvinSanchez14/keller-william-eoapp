import { FielControlForm } from 'src/components/FieldControlForm';
import { CheckBoxForm } from 'src/components/CheckBoxForm';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';

import { MuiTheme } from 'src/styles/FormStyle/css/IMuiThemeOptions';
import { useState } from 'react';
import { dateMask } from 'src/utils';
import { useAppContext } from 'src/store';

const useStyles = makeStyles((theme: MuiTheme) => ({
  customContainer: {
    [theme.breakpoints.down('xs')]: {
      margin: 0,
      '& > .MuiGrid-item': {
        padding: 0,
      },
    },
  },
}));

export const FormPolicyInformation = (formikProps: any, handleChange?: any) => {
  const { state } = useAppContext();
  const classes = useStyles();
  const [isHaveInsurance, setIsHaveInsurance] = useState(
    state.app.data.policyInformation.isHaveInsurance,
  );

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <FielControlForm
            data-test-id="currentCarrier"
            name="currentCarrier"
            type="string"
            label={'Current carrier'}
            setFieldTouched={formikProps.setFieldTouched}
            errors={formikProps.errors}
            touched={formikProps.touched}
            shouldValidateOnMount
            fullWidth
            renderFastField
            customWidth={0}
            readOnly={isHaveInsurance}
          />
          <FielControlForm
            name="isHaveInsuranceField"
            type="checkbox"
            renderFastField
            renderCustomField={({ field }) => (
              <CheckBoxForm
                {...field}
                name="isHaveInsuranceField"
                data-test-id="other"
                label={'I do not have insurance'}
                onChange={(e: any) => {
                  formikProps.setFieldValue('currentCarrier', '');
                  formikProps.setFieldValue('renewalDate', '');
                  formikProps.setFieldValue('deductible', '');
                  formikProps.setFieldValue('limits', '');
                  formikProps.setFieldValue('yearCoverage', '');
                  formikProps.setFieldValue('annualPremium', '');
                  setIsHaveInsurance(!isHaveInsurance);
                  handleChange(!isHaveInsurance);
                }}
                isChecked={isHaveInsurance}
                hasHelper
              />
            )}
          />
        </Grid>
        <Grid item container xs={12}>
          <Grid item xs={6} lg={5}>
            <FielControlForm
              data-test-id="renewalDate"
              name="renewalDate"
              type="string"
              label={'Renewal date'}
              setFieldTouched={formikProps.setFieldTouched}
              errors={formikProps.errors}
              touched={formikProps.touched}
              placeholder="MM/DD/YYYY"
              mask={dateMask}
              shouldValidateOnMount
              fullWidth
              renderFastField
              readOnly={isHaveInsurance}
            />
          </Grid>
        </Grid>
        <Grid item container xs={12} spacing={4} classes={{ root: classes.customContainer }}>
          <Grid item container xs={12} sm={4} md={5}>
            <Grid item xs={6} sm={12}>
              <FielControlForm
                data-test-id="deductible"
                name="deductible"
                type="number"
                label={'Deductible'}
                placeholder="$"
                setFieldTouched={formikProps.setFieldTouched}
                errors={formikProps.errors}
                touched={formikProps.touched}
                shouldValidateOnMount
                renderFastField
                readOnly={isHaveInsurance}
              />
            </Grid>
          </Grid>
          <Grid item container xs={12} sm={4} md={5}>
            <Grid item xs={6} sm={12}>
              <FielControlForm
                data-test-id="limits"
                name="limits"
                type="number"
                label={'Limits'}
                placeholder="$"
                setFieldTouched={formikProps.setFieldTouched}
                errors={formikProps.errors}
                touched={formikProps.touched}
                shouldValidateOnMount
                renderFastField
                readOnly={isHaveInsurance}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item container xs={12}>
          <Grid item xs={12}>
            <FielControlForm
              data-test-id="yearCoverage"
              name="yearCoverage"
              type="string"
              label={'Years of continuous coverage'}
              setFieldTouched={formikProps.setFieldTouched}
              errors={formikProps.errors}
              touched={formikProps.touched}
              shouldValidateOnMount
              fullWidth
              renderFastField
              customWidth={80}
              readOnly={isHaveInsurance}
            />
          </Grid>
        </Grid>

        <Grid item container xs={12} spacing={4} classes={{ root: classes.customContainer }}>
          <Grid item xs={6} sm={5}>
            <FielControlForm
              data-test-id="annualPremium"
              name="annualPremium"
              type="string"
              label={'Annual premium'}
              setFieldTouched={formikProps.setFieldTouched}
              errors={formikProps.errors}
              touched={formikProps.touched}
              placeholder="$"
              shouldValidateOnMount
              fullWidth
              renderFastField
              readOnly={isHaveInsurance}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
