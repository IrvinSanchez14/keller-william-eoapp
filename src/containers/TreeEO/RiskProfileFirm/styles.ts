import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { MuiTheme } from 'src/styles/FormStyle/css/IMuiThemeOptions';

export const styles = (theme: MuiTheme): { [style: string]: CSSProperties } => ({
  stepHeader: {
    fontSize: '24px',
    lineHeight: '28px',
    letterSpacing: '-0.5px',
    [theme.breakpoints.up(768)]: {
      fontSize: '56px',
      lineHeight: '62px',
      marginBottom: '6em',
      letterSpacing: '-1px',
    },
  },
});
