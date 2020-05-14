import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { MuiTheme } from 'src/styles/FormStyle/css/IMuiThemeOptions';

export const styles = (theme: MuiTheme): { [style: string]: CSSProperties } => ({
  titleForm: {
    fontSize: 18,
    lineHeight: '24px',
    fontWeight: 'bold',
    marginBottom: '1.0em',
    [theme.breakpoints.up(768)]: {
      fontSize: 22,
      marginBottom: '0.7em',
      lineHeight: '28px',
    },
  },
  alignButton: {
    justifyContent: 'flex-end',
  },
  stepBottom: {
    fontSize: '16px',
    lineHeight: '20px',
    [theme.breakpoints.up(768)]: {
      fontSize: '22px',
      lineHeight: '28px',
      width: '410px',
      marginTop: '80px',
    },
  },
  stepHeader: {
    fontSize: '24px',
    lineHeight: '28px',
    [theme.breakpoints.up(768)]: {
      fontSize: '56px',
      lineHeight: '62px',
      width: '545px',
    },
  },
});
