import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { MuiTheme } from 'src/styles/FormStyle/css/IMuiThemeOptions';

export const styles = (theme: MuiTheme): { [style: string]: CSSProperties } => ({
  titleForm: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: '1.3em',
    [theme.breakpoints.up(768)]: {
      fontSize: 22,
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
  customContainer: {
    [theme.breakpoints.down('xs')]: {
      margin: 0,
      '& > .MuiGrid-item': {
        padding: 0,
      },
    },
  },
  alignButton: {
    justifyContent: 'flex-end',
  },
});
