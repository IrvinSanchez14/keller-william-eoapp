import classnames from 'classnames';
import { makeStyles } from '@material-ui/styles';
import { MuiTheme } from 'src/styles/FormStyle/css/IMuiThemeOptions';

import { FielControlForm } from 'src/components/FieldControlForm';
import { Column } from 'src/components/LayoutWrapper/Flex';
import { addClaimsPolicy } from 'src/store/actions/app';

import { TextFieldForm } from 'src/components/TextFieldForm';

import { RadioField } from 'src/components/RadioForm';
import { AwesomeFontIcon } from 'src/components/AwesomeFontIcon';
import { dateMask } from 'src/utils';

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
    padding: theme.spacing(6.5, 3, 3.5),
    background: theme.palette.primary.light,
    borderRadius: '0 0 18px 18px',
    '@media (min-width: 768px)': {
      top: -60,
      padding: theme.spacing(8.5, 2.5, 4.5),
      borderRadius: '0 0 36px 36px',
    },
    '@media (min-width: 900px)': {
      padding: theme.spacing(5.5, 4.5, 4.5),
      maxHeight: '375px',
      overflowY: 'auto',
    },
  },
  iconPlus: {
    fontSize: 23,
  },
  containerAddButton: {
    marginTop: '10px',
    display: 'flex',
    flexDirection: 'row',
    cursor: 'pointer',
    color: '#0093E9',
  },
  pAddButton: {
    marginLeft: 15,
    fontSize: '1.15em',
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
    '& > div': {
      [theme.breakpoints.down('md')]: {
        flex: 1,
      },
      '&:first-child': {
        marginRight: 10,
        [theme.breakpoints.up('md')]: {
          marginRight: theme.spacing(2),
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

export const FormPolicyInformationClaims = (formikProps: any, formData: any, dispatch: any) => {
  const classes = useStyles();
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
        type: 'number',
      },
    ];

    return (
      <>
        {formData.app.data.policyInformation.claims.map((e: any, index: number) => (
          <Column key={index} className={classes.periodContainer}>
            {residenceTimeFields.map(
              ({ name, placeholder, label, mask, numberMask, type, values }: any) => {
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
                        customWidth={150}
                        mask={mask}
                        className={classnames(classes.periodContainerInput, {
                          [classes.periodContainerInputInvalid]:
                            formikProps.errors[name] && formikProps.touched[name],
                        })}
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
          renderCustomField={({ field }) => (
            <RadioField
              {...field}
              name="isHaveClaims"
              value={true}
              data-test-id="sameAddressButtonYes"
              label={'Yes, I have claims'}
              onChange={() => formikProps.setFieldValue('isHaveClaims', true)}
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
              }}
              checked={formikProps.values.isHaveClaims === false}
            />
          )}
        />
      </div>
    </>
  );
};