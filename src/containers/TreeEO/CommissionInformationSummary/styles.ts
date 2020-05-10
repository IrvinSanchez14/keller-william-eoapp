import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { MuiTheme } from 'src/styles/FormStyle/css/IMuiThemeOptions';

export const styles = (theme: MuiTheme): { [style: string]: CSSProperties } => ({
  titleForm: {
    fontSize: 16,
    lineHeight: '21px',
    fontWeight: 'bold',
    marginBottom: '1.0em',
    [theme.breakpoints.up(768)]: {
      fontSize: 22,
      lineHeight: '28px',
      marginBottom: '0.7em',
    },
  },
  backTitleTable: {
    background: '#f5f5f5',
    color: '#787878',
  },
  titleTable: {
    fontSize: '11px',
    lineHeight: '14px',
    fontWeight: 'bold',
    letterSpacing: '2px',
    [theme.breakpoints.up(768)]: {
      fontSize: '12px',
      lineHeight: '14px',
      fontWeight: 'bold',
      letterSpacing: '2px',
    },
  },
  divBottomTotal: {
    margin: '0 12px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '25px',
    [theme.breakpoints.up(768)]: {
      marginBottom: 80,
    },
  },
  totalTypo: {
    color: '#1d253c',
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: '30px',
    letterSpacing: '-0.5px',
    [theme.breakpoints.up(768)]: {
      fontSize: 36,
      lineHeight: '40px',
      color: '#1d253c',
      fontWeight: 'bold',
      letterSpacing: '-0.5px',
    },
  },
  divFieldTable: {
    margin: '0 12px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '10px',
  },
  textTableField: {
    fontSize: '14px',
    lineHeight: '46px',
    [theme.breakpoints.up(768)]: {
      fontSize: '16px',
      lineHeight: '56px',
    },
  },
  typoValueNumber: {
    fontSize: '14px',
    lineHeight: '46px',
    color: '#707070',
    fontWeight: 'bold',
    [theme.breakpoints.up(768)]: {
      fontSize: '16px',
      lineHeight: '56px',
      color: '#707070',
      fontWeight: 'bold',
    },
  },
  stepHeader: {
    fontSize: '24px',
    lineHeight: '28px',
    [theme.breakpoints.up(768)]: {
      fontSize: '56px',
      lineHeight: '62px',
    },
  },
});
