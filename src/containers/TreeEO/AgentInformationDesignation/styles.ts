import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { MuiTheme } from 'src/styles/FormStyle/css/IMuiThemeOptions';

export const styles = (theme: MuiTheme): { [style: string]: CSSProperties } => ({
  titleForm: {
    fontSize: 16,
    lineHeight: '21px',
    color: '#07293D',
    marginBottom: '1.3em',
    [theme.breakpoints.up(768)]: {
      fontSize: 22,
      lineHeight: '28px',
      marginBottom: '0.7em',
    },
  },
  subTitleForm: {
    fontSize: 16,
    [theme.breakpoints.up(768)]: {
      fontSize: 22,
      padding: '0px 8px',
    },
  },
  alignButton: {
    justifyContent: 'flex-end',
  },
  stepHeader: {
    fontSize: '24px',
    lineHeight: '28px',
    [theme.breakpoints.up(768)]: {
      fontSize: '56px',
      lineHeight: '62px',
      width: 520,
      marginBottom: 320,
    },
  },
});
