import { MuiTheme } from 'src/styles/FormStyle/css/IMuiThemeOptions';
import { CSSProperties } from '@material-ui/core/styles/withStyles';

export const styles = (theme: MuiTheme): { [style: string]: CSSProperties } => ({
  stepContainer: {
    [theme.breakpoints.down('sm')]: {
      padding: '0 17px',
      marginTop: 60,
    },
  },
  stepInfoBadge: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 18,
  },
  stepInfoKaceyBadge: {
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(2.5),
    },
  },
  stepInfoAgentBadge: {
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(8),
    },
  },
  stepInfoDogAvatar: {
    width: '40px',
    height: '40px',
    marginRight: '15px',
    [theme.breakpoints.up('md')]: {
      width: '54px',
      height: '54px',
      marginRight: '18px',
    },
  },
  stepInfoAvatarText: {
    textTransform: 'uppercase',
    fontSize: 11,
    fontWeight: 'bold',
    margin: 0,
    letterSpacing: '2px',
    [theme.breakpoints.up('md')]: {
      fontSize: 12,
    },
  },
  stepInfoHeader: {
    whiteSpace: 'pre-wrap',
  },
  stepInfoContent: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      color: '#999999',
    },
  },
  subHeading: {
    fontSize: 20,
    lineHeight: '24px',
    fontWeight: 'bold',
    [theme.breakpoints.up(768)]: {
      fontSize: 48,
      lineHeight: '54px',
    },
  },
  bottomContent: {
    marginTop: 'auto',
    '& a': {
      color: theme.palette.common.white,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 12,
    },
  },
  link: {
    color: theme.palette.common.white,
    marginTop: 40,
  },
});
