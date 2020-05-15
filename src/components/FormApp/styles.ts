import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { MuiTheme } from 'src/styles/FormStyle/css/IMuiThemeOptions';

export const styles = (theme: MuiTheme): { [style: string]: CSSProperties } => ({
  form: {
    position: 'relative',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    margin: '6px 14px 0px 14px',
  },
  buttonContainer: {
    marginTop: 25,
    [theme.breakpoints.up(768)]: {
      marginTop: 'auto',
    },
  },
  centeredButtonContainer: {
    [theme.breakpoints.down(768)]: {
      justifyContent: 'center',
    },
  },
  filledButton: {
    position: 'absolute',
    right: 6,
    width: 60,
    bottom: 67,
    height: 48,
    borderRadius: 20,
  },
  doubleButtonContainer: {
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  actionButtonContainer: {
    [theme.breakpoints.up(theme.breakpoints.values.md)]: {
      flex: 2,
      margin: '0px 0px 5px 0px',
    },
    [theme.breakpoints.down(theme.breakpoints.values.md)]: {
      width: 140,
    },
  },
  button: {
    [theme.breakpoints.up(768)]: {
      marginTop: 35,
    },
  },
  doubleButton: {
    maxWidth: 225,
    width: '100%',
    padding: theme.spacing(0, 2),
  },
  saveProgressContainer: {
    flex: 1,
    marginLeft: theme.spacing(3),
  },
  saveProgressButton: {
    color: theme.palette.main.blue,
    fontSize: theme.fontSize.xxs,
    fontWeight: 400,
    textDecoration: 'underline',
    height: 50,
    [theme.breakpoints.up(768)]: {
      fontSize: theme.fontSize.xs,
      height: 60,
    },
  },
  faqLink: {
    marginLeft: 5,
    '& p': {
      fontSize: 12,
    },
  },
  faqContainer: {
    color: theme.palette.blue[600],
  },
  row: {
    [theme.breakpoints.up(768)]: {
      flexDirection: 'row',
      alignItems: 'flex-end',
    },
  },
  rowButtonContainer: {
    maxWidth: 160,
    [theme.breakpoints.up(768)]: {
      margin: 0,
      maxWidth: 'inherit',
    },
  },
  rowButton: {
    [theme.breakpoints.up(768)]: {
      margin: 0,
      marginLeft: 30,
    },
  },
});
