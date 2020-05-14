import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { MuiTheme } from 'src/styles/FormStyle/css/IMuiThemeOptions';

export const styles = (theme: MuiTheme): { [style: string]: CSSProperties } => ({
  titleForm: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: '1.0em',
    [theme.breakpoints.up(768)]: {
      fontSize: 22,
      marginBottom: '-0.2em',
    },
  },
  fielControlForm: {
    width: 161,
    height: 60,
    [theme.breakpoints.down(theme.breakpoints.values.md)]: {
      width: 119,
      height: 40,
    },
  },
  rowStyles: {
    margin: '0 -8px',
    '& .column': {
      padding: '0 8px',
      [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
        '&:nth-of-type(2)': {
          paddingTop: '23px',
        },
      },
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
      marginBottom: '450px',
    },
  },
});
