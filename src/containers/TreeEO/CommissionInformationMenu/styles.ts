import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { MuiTheme } from 'src/styles/FormStyle/css/IMuiThemeOptions';

export const styles = (theme: MuiTheme): { [style: string]: CSSProperties } => ({
  titleForm: {
    color: '#07293D',
    fontSize: '16px',
    lineHeight: '21px',
    width: '275px',
    [theme.breakpoints.up(768)]: {
      fontSize: '22px',
      lineHeight: '28px',
      width: '100%',
    },
  },
  stepHeader: {
    fontSize: '24px',
    lineHeight: '28px',
    [theme.breakpoints.up(768)]: {
      fontSize: '56px',
      lineHeight: '62px',
      maxWidth: '550px',
    },
  },
  label: {
    color: '#082a3e',
    fontWeight: 'bold',
    fontSize: 11,
    textAlign: 'center',
    lineHeight: '14px',
    marginTop: theme.spacing(),
    [theme.breakpoints.up(750)]: {
      fontSize: theme.fontSize.xs,
      marginTop: '-25px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 18,
      lineHeight: '28px',
    },
  },
  iconSize: {
    width: '100%',
    height: '100%',
  },
  content: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: theme.spacing(1),
    padding: theme.spacing(),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(1.5),
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(2),
    },
  },
  card: {
    padding: 0,
    outline: 'none',
    width: 103,
    height: 100,
    marginRight: theme.spacing(0.8),
    marginBottom: theme.spacing(0.8),
    marginLeft: theme.spacing(2),
    [theme.breakpoints.up(340)]: {
      marginRight: theme.spacing(),
      marginBottom: theme.spacing(),
    },
    [theme.breakpoints.up(436)]: {
      marginRight: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    [theme.breakpoints.up('md')]: {
      width: 150,
      height: 220,
      marginRight: theme.spacing(),
    },
    [theme.breakpoints.up('lg')]: {
      marginRight: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  },
  alignButton: {
    justifyContent: 'flex-end',
  },
});
