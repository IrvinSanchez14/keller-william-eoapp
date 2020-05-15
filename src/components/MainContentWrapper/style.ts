import { makeStyles } from '@material-ui/styles';
import { MuiTheme } from 'src/styles/FormStyle/css/IMuiThemeOptions';

export const useStyles = makeStyles((theme: MuiTheme) => ({
  wrapper: {
    maxWidth: 1260,
    width: '100%',
    flexDirection: 'column',
    margin: '0 auto 147px',
    zIndex: 1,
    [theme.breakpoints.up('md')]: {
      minHeight: 650,
    },
  },
  divContainerBody: {
    height: 'auto',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      minHeight: '709px',
      marginTop: '10px',
    },
  },
  progressBar: {
    padding: '10px 0px 10px 0px',
    position: 'static',
    zIndex: 1,
    width: '100%',
    maxWidth: '1260px',
    marginBottom: '0.3em',
    marginTop: '-11px',
  },
  basicContainer: {
    width: '100%',
    overflowWrap: 'break-word',
    flexDirection: 'column',
    padding: theme.spacing(3),
    boxShadow: '0 0 42px 0 rgba(0,0,0,0.15)',
    borderRadius: '12px 12px 0 0',
    [theme.breakpoints.up(350)]: {
      padding: 23,
    },
    [theme.breakpoints.up('md')]: {
      width: '50%',
      padding: '46px 23px',
      borderRadius: '0 12px 12px 0',
    },
    [theme.breakpoints.up(1230)]: {
      padding: '46px',
    },
  },
  infoContainer: {
    backgroundColor: theme.palette.primary.dark,
    color: 'white',
    [theme.breakpoints.up('md')]: {
      borderRadius: '12px 0 0 12px',
    },
    [theme.breakpoints.down('sm')]: {
      borderRadius: '12px 12px 0 0',
    },
  },
  formContainer: {
    backgroundColor: theme.palette.common.white,
    [theme.breakpoints.down('sm')]: {
      borderRadius: '0 0 12px 12px',
    },
  },
}));
