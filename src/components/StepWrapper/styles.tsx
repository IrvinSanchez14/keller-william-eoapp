import { MuiTheme } from 'src/styles/FormStyle/css/IMuiThemeOptions';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { fonts } from 'public/fonts';

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
      margin: '7px 0px 20px 5px',
    },
  },
  stepInfoAgentBadge: {
    [theme.breakpoints.up('md')]: {
      margin: '5px 0px 20px 5px',
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
      marginTop: '2px',
      fontSize: '12px',
      lineHeight: '14px',
      letterSpacing: '2.2px',
    },
  },
  stepInfoHeader: {
    fontSize: 53,
    marginBottom: '0.4em',
    lineHeight: '62px',
    whiteSpace: 'pre-wrap',
    fontFamily: fonts.Effra,
    fontWeight: 'bold',
    [theme.breakpoints.down(theme.breakpoints.values.md)]: {
      fontSize: 24, // send fontSize via props?
      lineHeight: '28px',
    },
  },
  stepInfoContent: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      color: '#999999',
    },
  },
  subHeading: {
    fontSize: 54,
    lineHeight: '62px',
    fontFamily: fonts.Effra,
    fontWeight: 'bold',
    [theme.breakpoints.down(theme.breakpoints.values.md)]: {
      fontSize: 20,
      lineHeight: '24px',
      fontWeight: 'bold',
    },
  },
  description: {
    lineHeight: '28px',
    fontSize: '22px',
    fontFamily: fonts.Effra,
    fontWeight: 'bold',
    [theme.breakpoints.down(theme.breakpoints.values.md)]: {
      fontSize: '16px',
      lineHeight: '20px',
      fontWeight: 'normal',
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
