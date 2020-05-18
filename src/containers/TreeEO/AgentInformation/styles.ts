import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { MuiTheme } from 'src/styles/FormStyle/css/IMuiThemeOptions';

export const styles = (theme: MuiTheme): { [style: string]: CSSProperties } => ({
  titleForm: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: '1.3em',
    color: ' #07293D',
    [theme.breakpoints.up(768)]: {
      fontSize: 22,
      marginBottom: '35px',
      color: ' #07293D',
    },
  },
  subTitleForm: {
    fontSize: 16,
    lineHeight: '21px',
    [theme.breakpoints.up(768)]: {
      fontSize: 22,
      lineHeight: '28px',
      padding: '0px 8px',
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
      maxWidth: '410px',
      marginTop: '80px',
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
