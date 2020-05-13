import { fonts } from 'assets/fonts';
import { makeStyles } from '@material-ui/styles';
import { MuiTheme } from 'src/styles/FormStyle/css/IMuiThemeOptions';

export const useStyles = makeStyles((theme: MuiTheme) => ({
  inputWrapper: {
    position: 'relative',
  },
  inputStyles: ({ customWidth }: any) => ({
    background: theme.palette.inputs.background,
    height: 61,
    border: `1px solid ${theme.palette.inputs.border}`,
    borderRadius: 12,
    boxShadow: 'none',
    width: customWidth || '100%',
    fontFamily: `"${fonts.Effra}", "Arial", "sans-serif"`,
    fontSize: 22,
    fontWeight: 'bold',
    padding: theme.spacing(0, 2, 0, 2),
    WebkitAppearance: 'none',
    margin: 0,
    '&::placeholder': {
      color: theme.palette.inputs.placeholder,
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
      fontSize: theme.fontSize.md,
    },
  }),
  container: ({ fullWidth }: { [prop: string]: boolean }) => ({
    position: 'relative',
    [theme.breakpoints.up(768)]: {
      width: '100%',
    },
    ...(!fullWidth && {
      [theme.breakpoints.up(768)]: {
        maxWidth: 511,
      },
    }),
  }),
  closeIcon: {
    width: 30,
    height: 30,
    cursor: 'pointer',
  },
  readOnly: {
    color: theme.palette.gray[200],
    '&:disabled': {
      backgroundColor: theme.palette.common.white,
    },
  },
  error: {
    borderColor: `${theme.palette.error.main} !important`,
  },
}));
