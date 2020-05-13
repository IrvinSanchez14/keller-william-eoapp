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
    },
  },
  label: {
    color: '#082a3e',
    fontWeight: 'bold',
    fontSize: theme.fontSize.xxs,
    textAlign: 'center',
    lineHeight: '14px',
    margin: '-3px 0px 0px -18px',
    [theme.breakpoints.up(750)]: {
      fontSize: '16px',
      marginTop: '-25px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 16,
      lineHeight: '28px',
      margin: '-20px 0px 0px -34px',
    },
  },
  iconSize: {
    width: '53px',
    height: '100%',
  },
  content: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    width: 85,
    [theme.breakpoints.up(750)]: {
      height: 128,
      width: 128,
    },
  },
  divSVG: {
    display: 'flex',
    marginBottom: '46px',
    marginTop: '15px',
    [theme.breakpoints.down(990)]: {
      flexWrap: 'wrap',
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      marginBottom: '46px',
      marginTop: '15px',
    },
  },
  textContent: {
    fontSize: '16px',
    lineHeight: '19px',
    color: '#07293D',
    marginBottom: '25px',
    [theme.breakpoints.up(750)]: {
      fontSize: '20px',
      lineHeight: '26px',
      color: '#07293D',
      marginBottom: '45px',
    },
  },
  alignButton: {
    justifyContent: 'flex-end',
  },
  bottomHeader: {
    fontSize: '16px',
    lineHeight: '20px',
    [theme.breakpoints.up(750)]: {
      fontSize: '22px',
      lineHeight: '28px',
      marginTop: 0,
    },
  },
});
