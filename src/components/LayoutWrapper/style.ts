import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { MuiTheme } from 'src/styles/FormStyle/css/IMuiThemeOptions';

export const styles = (theme: MuiTheme): { [style: string]: CSSProperties } => ({
  flex: {
    /* YOGA standard https://facebook.github.io/yoga */
    boxSizing: 'border-box',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    flexShrink: 0,
    alignContent: 'flex-start',

    borderWidth: 0,
    margin: 0,
    padding: 0,
    minWidth: 0,
  },

  row: {
    flexDirection: 'row',
  },
});
