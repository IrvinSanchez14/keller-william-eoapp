import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { MuiTheme } from 'src/styles/FormStyle/css/IMuiThemeOptions';

export const styles = (theme: MuiTheme): { [style: string]: CSSProperties } => ({
  titleForm: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: '1.0em',
    [theme.breakpoints.up(768)]: {
      fontSize: 22,
      marginBottom: '0.7em',
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
      letterSpacing: '-1px',
    },
  },
});
