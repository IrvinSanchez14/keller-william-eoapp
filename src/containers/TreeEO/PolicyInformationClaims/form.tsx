import classnames from 'classnames';
import { makeStyles } from '@material-ui/styles';
import { MuiTheme } from 'src/styles/FormStyle/css/IMuiThemeOptions';
import { FielControlForm } from 'src/components/FieldControlForm';
import { Column } from 'src/components/LayoutWrapper/Flex';
import { addClaimsPolicy, removeClaims, insertFirstClaims } from 'src/store/actions/app';
import { TextFieldForm } from 'src/components/TextFieldForm';
import { RadioField } from 'src/components/RadioForm';
import { AwesomeFontIcon } from 'src/components/AwesomeFontIcon';
import { dateMask } from 'src/utils';
import { useState } from 'react';
import { moneyMask } from 'src/utils';

const useStyles = makeStyles((theme: MuiTheme) => ({
  unitContainer: {
    [theme.breakpoints.up(768)]: {
      width: 90,
      textAlign: 'center',
      marginLeft: 12,
    },
    marginBottom: 30,
    width: '100%',
  },
  cardContainer: {
    position: 'relative',
    top: -40,
    padding: '36px 36px 36px',
    background: theme.palette.primary.light,
    borderRadius: '0 0 18px 18px',
    '@media (min-width: 768px)': {
      top: -60,
      padding: theme.spacing(8.5, 2.5, 4.5),
      borderRadius: '0 0 36px 36px',
    },
    '@media (min-width: 900px)': {
      padding: '36px 36px 36px',
      maxHeight: '375px',
      overflowY: 'auto',
    },
  },
  iconPlus: {
    fontSize: 23,
  },
  containerAddButton: {
    display: 'flex',
    flexDirection: 'row',
    cursor: 'pointer',
    color: '#0093E9',
    margin: '21px 0px -8px -5px',
  },
  pAddButton: {
    margin: '6px 0px 0px 10px',
    fontSize: '16px',
    lineHeight: '12px',
    fontWeight: 600,
  },
  radioContainer: {
    zIndex: 1,
  },
  radioBottomContainer: {
    zIndex: 1,
    position: 'relative',
    top: -30,
    [theme.breakpoints.up(768)]: {
      top: -40,
    },
  },
  addressCotaniner: {
    [theme.breakpoints.down(768)]: {
      flexWrap: 'wrap',
    },
  },
  periodContainer: {
    flexDirection: 'row',
    margin: '10px 0px 0px -8px',
    '& > div': {
      [theme.breakpoints.down('md')]: {
        flex: 1,
      },
      '&:first-child': {
        marginRight: 10,
        [theme.breakpoints.up('md')]: {
          margin: '0px 31px 0px -2px',
        },
      },
    },
  },
  periodContainerInput: {
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
    [theme.breakpoints.up('md')]: {
      textAlign: 'center',
    },
  },
  periodContainerInputInvalid: {
    borderColor: theme.palette.error.main,
  },
}));

export const FormPolicyInformationClaims = (
  formikProps: any,
  formData: any,
  dispatch: any,
  handleChange?: any,
) => {
  const classes = useStyles();
  const [isHaveInsurance, setIsHaveInsurance] = useState(false);

  const renderResidenceTimeForm = () => {
    const residenceTimeFields = [
      {
        name: 'dateClaim',
        mask: dateMask,
        numberMask: false,
        placeholder: 'MM/DD/YYYY',
        label: 'Date of claim',
        type: 'text',
      },
      {
        placeholder: '$',
        name: 'amountClaim',
        label: 'Amount of claim',
        numberMask: true,
        type: 'text',
        setNumberMask: moneyMask,
      },
    ];

    return (
      <>
        {formData.app.data.policyInformation.claims.map((e: any, index: number) => (
          <Column key={index} className={classes.periodContainer}>
            {residenceTimeFields.map(
              ({ name, placeholder, label, mask, numberMask, type, setNumberMask }: any) => {
                return (
                  <FielControlForm
                    key={`claims.${name}.${index}`}
                    name={`claims.${index}.${name}`}
                    type={type}
                    errors={formikProps.errors}
                    touched={formikProps.touched}
                    renderFastField
                    renderCustomField={({ field }) => (
                      <TextFieldForm
                        {...field}
                        type={type}
                        numberMask={numberMask}
                        data-test-id={`${name}.${index}`}
                        label={label}
                        placeholder={placeholder}
                        setFieldTouched={formikProps.setFieldTouched}
                        mask={mask}
                        className={classnames({
                          [classes.periodContainerInputInvalid]:
                            formikProps.errors[name] && formikProps.touched[name],
                        })}
                        customWidth={161}
                        setNumberMask={setNumberMask}
                      />
                    )}
                  />
                );
              },
            )}
          </Column>
        ))}
        <div
          className={classes.containerAddButton}
          onClick={() => {
            const addArray = [{}];
            addClaimsPolicy(dispatch, {
              claims: [...formikProps.values.claims, addArray],
            });
          }}
        >
          <div>
            <AwesomeFontIcon
              name="faPlusCircle"
              type="light"
              dataTestId="backButton"
              className={classes.iconPlus}
              size="10x"
            />
          </div>
          <div className={classes.pAddButton}>
            <p>Add another claim</p>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className={classes.radioContainer}>
        <FielControlForm
          name="isHaveClaims"
          shouldValidateOnMount
          setFieldTouched={formikProps.setFieldTouched}
          errors={formikProps.errors}
          renderCustomField={({ field }) => (
            <RadioField
              {...field}
              name="isHaveClaims"
              value={true}
              data-test-id="sameAddressButtonYes"
              label={'Yes, I have claims'}
              onChange={() => {
                formikProps.setFieldValue('isHaveClaims', true);
                setIsHaveInsurance(true);
                handleChange(true);
              }}
              checked={formikProps.values.isHaveClaims === true}
            />
          )}
        />
      </div>
      {formikProps.values.isHaveClaims && (
        <Column className={classes.cardContainer}>{renderResidenceTimeForm()}</Column>
      )}
      <div
        className={classnames(classes.radioContainer, {
          [classes.radioBottomContainer]: !!formikProps.values.isHaveClaims,
        })}
      >
        <FielControlForm
          name="isHaveClaims"
          shouldValidateOnMount
          setFieldTouched={formikProps.setFieldTouched}
          renderCustomField={({ field }) => (
            <RadioField
              {...field}
              name="isHaveClaims"
              value={false}
              data-test-id="sameAddressButtonNo"
              label={'No, I do not have any claims'}
              onChange={() => {
                formikProps.setFieldValue('isHaveClaims', false);
                formikProps.setFieldValue('claims', []);
                setIsHaveInsurance(false);
                handleChange(false);
                removeClaims(dispatch);
              }}
              checked={formikProps.values.isHaveClaims === false}
            />
          )}
        />
      </div>
    </>
  );
};
