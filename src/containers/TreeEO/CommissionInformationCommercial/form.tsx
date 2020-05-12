import { useState } from 'react';
import classnames from 'classnames';
import { Typography } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { MuiTheme } from 'src/styles/FormStyle/css/IMuiThemeOptions';
import { FielControlForm } from 'src/components/FieldControlForm';
import { Row, Column } from 'src/components/LayoutWrapper/Flex';
import { useAppContext } from 'src/store';

const useStyles = makeStyles((theme: MuiTheme) => ({
  titleForm: {
    color: '#07293D',
    fontSize: 16,
    lineHeight: '21px',
    fontWeight: 'bold',
    marginBottom: '1.3em',
    margin: '0 15px',
    [theme.breakpoints.up(768)]: {
      fontSize: 22,
      lineHeight: '28px',
      marginBottom: '0.7em',
      margin: '0 15px',
      color: '#07293D',
    },
  },
  subTitleForm: {
    fontSize: 16,
    [theme.breakpoints.up(768)]: {
      fontSize: 22,
      padding: '0px 8px',
    },
  },
  containerOne: {
    padding: '0px 0px',
    [theme.breakpoints.up(768)]: {
      padding: '0px 8px',
    },
  },
  containerTwo: {
    padding: '0px 0px',
    [theme.breakpoints.up(768)]: {
      padding: '0px 30px',
    },
  },
  containerTotal: {
    marginTop: 20,
    marginBottom: '-30px',
    [theme.breakpoints.up(768)]: {
      marginTop: 85,
      marginBottom: '-50px',
    },
  },
  divContainerTotal: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '15px',
  },
  stepHeader: {
    fontSize: '24px',
    lineHeight: '28px',
    [theme.breakpoints.up(768)]: {
      fontSize: '56px',
      lineHeight: '62px',
    },
  },
  stepBottom: {
    fontSize: '16px',
    lineHeight: '20px',
    [theme.breakpoints.up(768)]: {
      fontSize: '22px',
      lineHeight: '28px',
      marginTop: 55,
    },
  },
  textTotal: {
    fontSize: 16,
    lineHeight: '20px',
    fontWeight: 'bold',
    marginBottom: '1.3em',
    margin: '0 15px',
    marginTop: '2px',
    [theme.breakpoints.up(768)]: {
      fontSize: '22px',
      lineHeight: '28px',
      color: '#07293D',
      marginTop: '10px',
    },
  },
  textNumberTotal: {
    fontSize: 24,
    lineHeight: '20px',
    fontWeight: 'bold',
    marginBottom: '1.3em',
    margin: '0 15px',
    [theme.breakpoints.up(768)]: {
      fontSize: '48px',
      lineHeight: '48px',
    },
  },
}));

export const FormCommissionInformationCommercial = (formikProps: any, isReview?: boolean) => {
  const { state } = useAppContext();
  const classes = useStyles();
  const [commercial, setCommercial] = useState({
    realEstate: state.app.data.commissionInformation.commercial.realEstate,
    rawLand: state.app.data.commissionInformation.commercial.rawLand,
    appraisals: state.app.data.commissionInformation.commercial.appraisals,
    propertyMgmt: state.app.data.commissionInformation.commercial.propertyMgmt,
    ownedProperty: state.app.data.commissionInformation.commercial.ownedProperty,
  });

  const changeDataSum = (event: any) => {
    const { name, value } = event.target;
    setCommercial((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sumState = (object: any) => {
    return Object.keys(object).reduce((sum, key) => sum + parseFloat(object[key] || 0), 0);
  };

  return (
    <>
      <Row wrap="wrap">
        <Column className={classnames(classes.containerOne)}>
          <FielControlForm
            data-test-id="realEstate"
            name="commercial.realEstate"
            type="number"
            label={'Real Estate'}
            setFieldTouched={formikProps.setFieldTouched}
            errors={formikProps.errors}
            touched={formikProps.touched}
            shouldValidateOnMount
            renderFastField
            customWidth={165}
            onChange={(e: any) => {
              changeDataSum(e);
              formikProps.setFieldValue('commercial.realEstate', e.target.value);
            }}
          />
        </Column>
        <Column className={classnames(classes.containerTwo)}>
          <FielControlForm
            data-test-id="rawLand"
            name="commercial.rawLand"
            type="number"
            label={'Raw Land'}
            setFieldTouched={formikProps.setFieldTouched}
            errors={formikProps.errors}
            touched={formikProps.touched}
            shouldValidateOnMount
            renderFastField
            customWidth={165}
            onChange={(e: any) => {
              changeDataSum(e);
              formikProps.setFieldValue('commercial.rawLand', e.target.value);
            }}
          />
        </Column>

        <Column className={classnames(classes.containerOne)}>
          <FielControlForm
            data-test-id="appraisals"
            name="commercial.appraisals"
            type="number"
            label={'Appraisals'}
            setFieldTouched={formikProps.setFieldTouched}
            errors={formikProps.errors}
            touched={formikProps.touched}
            shouldValidateOnMount
            renderFastField
            customWidth={165}
            onChange={(e: any) => {
              changeDataSum(e);
              formikProps.setFieldValue('commercial.appraisals', e.target.value);
            }}
          />
        </Column>
        <Column className={classnames(classes.containerTwo)}>
          <FielControlForm
            data-test-id="propertyMgmt"
            name="commercial.propertyMgmt"
            type="number"
            label={'Property Mgmt'}
            setFieldTouched={formikProps.setFieldTouched}
            errors={formikProps.errors}
            touched={formikProps.touched}
            shouldValidateOnMount
            renderFastField
            customWidth={165}
            onChange={(e: any) => {
              changeDataSum(e);
              formikProps.setFieldValue('commercial.propertyMgmt', e.target.value);
            }}
          />
        </Column>
        <Column className={classnames(classes.containerOne)}>
          <FielControlForm
            data-test-id="ownedProperty"
            name="commercial.ownedProperty"
            type="number"
            label={'Owned Property'}
            setFieldTouched={formikProps.setFieldTouched}
            errors={formikProps.errors}
            touched={formikProps.touched}
            shouldValidateOnMount
            renderFastField
            customWidth={165}
            onChange={(e: any) => {
              changeDataSum(e);
              formikProps.setFieldValue('commercial.ownedProperty', e.target.value);
            }}
          />
        </Column>
      </Row>
      {isReview ? null : (
        <div className={classnames(classes.containerTotal)}>
          <Divider style={{ margin: '0 15px' }} />
          <div className={classnames(classes.divContainerTotal)}>
            <Typography className={classnames(classes.textTotal)}>{'Residential total'}</Typography>
            <Typography className={classnames(classes.textNumberTotal)}>
              ${sumState(commercial)}
            </Typography>
          </div>
        </div>
      )}
    </>
  );
};
