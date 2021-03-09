import { MuiTheme } from 'src/styles/FormStyle/css/IMuiThemeOptions';
import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme: MuiTheme) => ({
  container: {
    background: '#1D253C',
    width: '100%',
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 30,
  },
  closeIcon: {
    color: 'white',
    fontSize: 27,
    position: 'absolute',
    right: 30,
    top: 20,
    cursor: 'pointer',
  },
  dogIcon: {
    paddingTop: 5,
    paddingLeft: 10,
  },
  text: {
    color: 'white',
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  contentInformation: {
    maxWidth: 680,
  },
  title: {
    fontSize: 30,
    lineHeight: '36px',
    textAlign: 'center',
    color: theme.palette.common.white,
    marginTop: theme.spacing(4),
    letterSpacing: '-1px',
    [theme.breakpoints.up(768)]: {
      fontSize: 56,
      lineHeight: '62px',
      marginTop: theme.spacing(7),
    },
  },
  subTitle: {
    textAlign: 'center',
    marginTop: theme.spacing(2),
    fontSize: 16,
    lineHeight: '20px',
    [theme.breakpoints.up(768)]: {
      color: theme.palette.common.white,
      marginTop: theme.spacing(3),
      fontSize: 22,
      lineHeight: '28px',
    },
  },
  form: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  formContainer: {
    maxWidth: 710,
  },
  inputContainer: {
    flexDirection: 'row',
    display: 'flex',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    maxWidth: 700,
    [theme.breakpoints.down(768)]: {
      flexDirection: 'column',
    },
  },
  label: {
    margin: '0 20px 0 0',
  },
  inputStyles: ({ customWidth }: any) => ({
    background: theme.palette.inputs.background,
    height: 61,
    border: `1px solid ${theme.palette.inputs.border}`,
    borderRadius: 12,
    boxShadow: 'none',
    width: customWidth || '95%',
    fontFamily: `"Effra", "Arial", "sans-serif"`,
    fontSize: 22,
    fontWeight: 'bold',
    textIndent: 3,
    WebkitAppearance: 'none',
    color: '#1D253C',
    '&::placeholder': {
      color: theme.palette.inputs.placeholder,
      fontSize: 21,
      [theme.breakpoints.down(768)]: {
        fontSize: theme.fontSize.md - 3,
      },
    },
    '&[type=number]': {
      MozAppearance: 'textfield',
    },
    '&[type=number]::-webkit-inner-spin-button': {
      WebkitAppearance: 'none',
      margin: 0,
    },
    [theme.breakpoints.down(768)]: {
      height: 41,
      textIndent: 3,
      fontSize: theme.fontSize.md,
    },
  }),
  inputfieldContainer: {
    width: '100%',
  },
  select: {
    width: '95%',
    height: 61,
    '& .MuiSelect-select': {
      fontFamily: `"Effra", "Arial", "sans-serif"`,
      fontSize: 22,
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      [theme.breakpoints.down(768)]: {
        fontSize: theme.fontSize.md - 3,
      },
    },
    '& .MuiSelect-select:focus': {
      background: theme.palette.common.white,
      borderRadius: 6,
    },
    [theme.breakpoints.down(768)]: {
      height: 39,
      borderRadius: 12,
    },
    '& div': {
      '& div': {
        zIndex: 10,
        position: 'relative',
        overflow: 'hidden',
      },
    },
  },
  selectDefaultValue: {
    '& .MuiSelect-select': {
      color: theme.palette.inputs.placeholder,
    },
  },
  buttonContainer: {
    marginTop: 30,
    justifyContent: 'center',
    paddingBottom: 40,
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      marginTop: 60,
    },
  },
  button: {
    background: theme.palette.main.blue,
    fontWeight: 400,
    height: 50,
    borderRadius: 30,
    minWidth: 225,
    color: theme.palette.common.white,
    [theme.breakpoints.up(768)]: {
      fontSize: theme.fontSize.xs,
      height: 60,
    },
  },
  buttonText: {
    fontFamily: `"Effra", "Arial", "sans-serif"`,
    textDecoration: 'none',
    fontSize: 18,
  },
}));
