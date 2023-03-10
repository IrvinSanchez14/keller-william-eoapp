import { useState } from 'react';
import classnames from 'classnames';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/styles';
import { MuiTheme } from 'src/styles/FormStyle/css/IMuiThemeOptions';
import { FielControlForm } from 'src/components/FieldControlForm';
import { Row, Column } from 'src/components/LayoutWrapper/Flex';
import { useAppContext } from 'src/store';
import { moneyMask, removeSignsFromNumbers, parseNumberToMoney } from 'src/utils';

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
  rowContainer: {
    display: 'flex',
  },
  rowContainerReview: {
    display: 'flex',
    margin: '0px 0px 0px -29px',
    [theme.breakpoints.up(768)]: {
      fontSize: 22,
      display: 'flex',
      margin: '0px 0px 0px -29px',
    },
  },
  inputContainer: {
    padding: '0',
    paddingLeft: '30px',
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

export const FormCommissionInformationResidential = (formikProps: any, isReview?: boolean) => {
  const { state } = useAppContext();
  const classes = useStyles();
  const [residential, setResidential] = useState({
    realState: state.app.data.commissionInformation.residentialCommission.realEstate,
    rawLand: state.app.data.commissionInformation.residentialCommission.rawLand,
    appraisals: state.app.data.commissionInformation.residentialCommission.appraisals,
    propertyMgmt: state.app.data.commissionInformation.residentialCommission.propertyMgmt,
    ownedProperty: state.app.data.commissionInformation.residentialCommission.ownedProperty,
  });

  const changeDataSum = (event: any) => {
    let { name, value } = event.target;
    name = name.split('.').pop();
    setResidential((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sumState = (object: any) =>
    Object.keys(object).reduce((sum, key) => sum + removeSignsFromNumbers(object[key] ?? 0), 0);

  return (
    <>
      <Row wrap={'wrap'} className={isReview ? classes.rowContainerReview : classes.rowContainer}>
        <Column className={classnames(classes.inputContainer)}>
          <FielControlForm
            data-test-id="residential.realEstate"
            name="residential.realEstate"
            label={'Real Estate'}
            placeholder="$0"
            setFieldTouched={formikProps.setFieldTouched}
            errors={formikProps.errors}
            touched={formikProps.touched}
            shouldValidateOnMount
            renderFastField
            customWidth={165}
            onChange={(e: any) => {
              changeDataSum(e);
              formikProps.setFieldValue(
                'residential.realEstate',
                removeSignsFromNumbers(e.target.value),
              );
            }}
            numberMask
            setNumberMask={moneyMask}
          />
        </Column>
        <Column className={classnames(classes.inputContainer)}>
          <FielControlForm
            data-test-id="rawLand"
            name="residential.rawLand"
            placeholder="$0"
            label={'Raw Land'}
            setFieldTouched={formikProps.setFieldTouched}
            errors={formikProps.errors}
            touched={formikProps.touched}
            shouldValidateOnMount
            renderFastField
            customWidth={165}
            onChange={(e: any) => {
              changeDataSum(e);
              formikProps.setFieldValue(
                'residential.rawLand',
                removeSignsFromNumbers(e.target.value),
              );
            }}
            numberMask
            setNumberMask={moneyMask}
          />
        </Column>

        <Column className={classnames(classes.inputContainer)}>
          <FielControlForm
            data-test-id="appraisals"
            name="residential.appraisals"
            placeholder="$0"
            label={'Appraisals'}
            setFieldTouched={formikProps.setFieldTouched}
            errors={formikProps.errors}
            touched={formikProps.touched}
            shouldValidateOnMount
            renderFastField
            customWidth={165}
            onChange={(e: any) => {
              changeDataSum(e);
              formikProps.setFieldValue(
                'residential.appraisals',
                removeSignsFromNumbers(e.target.value),
              );
            }}
            numberMask
            setNumberMask={moneyMask}
          />
        </Column>
        <Column className={classnames(classes.inputContainer)}>
          <FielControlForm
            data-test-id="propertyMgmt"
            name="residential.propertyMgmt"
            placeholder="$0"
            label={'Property Mgmt'}
            setFieldTouched={formikProps.setFieldTouched}
            errors={formikProps.errors}
            touched={formikProps.touched}
            shouldValidateOnMount
            renderFastField
            customWidth={165}
            onChange={(e: any) => {
              changeDataSum(e);
              formikProps.setFieldValue(
                'residential.propertyMgmt',
                removeSignsFromNumbers(e.target.value),
              );
            }}
            numberMask
            setNumberMask={moneyMask}
          />
        </Column>
        <Column className={classnames(classes.inputContainer)}>
          <FielControlForm
            data-test-id="ownedProperty"
            name="residential.ownedProperty"
            placeholder="$0"
            label={'Owned Property'}
            setFieldTouched={formikProps.setFieldTouched}
            errors={formikProps.errors}
            touched={formikProps.touched}
            shouldValidateOnMount
            renderFastField
            customWidth={165}
            onChange={(e: any) => {
              changeDataSum(e);
              formikProps.setFieldValue(
                'residential.ownedProperty',
                removeSignsFromNumbers(e.target.value),
              );
            }}
            numberMask
            setNumberMask={moneyMask}
          />
        </Column>
      </Row>
      {isReview ? null : (
        <div className={classnames(classes.containerTotal)}>
          <Divider style={{ margin: '0 15px' }} />
          <div className={classnames(classes.divContainerTotal)}>
            <Typography className={classnames(classes.textTotal)}>{'Residential total'}</Typography>
            <Typography className={classnames(classes.textNumberTotal)}>
              {parseNumberToMoney(sumState(residential))}
            </Typography>
          </div>
        </div>
      )}
    </>
  );
};
