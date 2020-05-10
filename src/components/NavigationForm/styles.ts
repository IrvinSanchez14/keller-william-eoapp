import { makeStyles } from '@material-ui/styles';
import { MuiTheme } from 'src/styles/FormStyle/css/IMuiThemeOptions';
import { fonts } from 'assets/fonts';

export default makeStyles((theme: MuiTheme) => ({
  wrapper: {
    width: '100%',
    padding: theme.spacing(0, 3),
    boxShadow: '0 0 12px 0 rgba(0,0,0,0.15)',
    zIndex: 2,
    [theme.breakpoints.down('sm')]: {
      width: '100vw',
    },
    [theme.breakpoints.up('md')]: {
      position: 'static',
      padding: 0,
      boxShadow: 'none',
    },
  },
  container: {
    maxWidth: 1260,
    width: '100%',
    height: 82,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    zIndex: 2,
    [theme.breakpoints.up('md')]: {
      height: 117,
      boxShadow: 'none',
    },
  },
  logoContainer: {
    order: 1,
    [theme.breakpoints.up('md')]: {
      order: 2,
    },
    '& > a': {
      textDecoration: 'none',
    },
  },
  logoCentered: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  equalWidth: {
    flex: 1,
  },
  logo: {
    height: 28,
    alignSelf: 'flex-start',
    [theme.breakpoints.up('md')]: {
      alignSelf: 'center',
    },
    [theme.breakpoints.up('lg')]: {
      height: 38,
    },
  },
  logoConfirmation: {
    [theme.breakpoints.up('md')]: {
      height: 38,
    },
  },
  backButtonContainer: {
    position: 'absolute',
    bottom: -40,
    flex: 1,
    [theme.breakpoints.up('md')]: {
      position: 'static',
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'row-reverse',
      width: '100%',
      justifyContent: 'space-between',
      padding: theme.spacing(0, 2),
    },
    [theme.breakpoints.down(400)]: {
      padding: theme.spacing(0),
    },
  },
  contentProgressBar: {
    padding: 10,
    position: 'static',
    zIndex: 1,
    width: '100%',
    maxWidth: '1260px',
    marginBottom: '1.3em',
    marginTop: '-13px',
  },
  buttonContainerWithCustomBack: {
    flexDirection: 'row',
  },
  backIconContainer: {
    cursor: 'pointer',
    width: 30,
    height: 30,
    border: `1px solid #1D253C`,
    borderRadius: 50,
    backgroundColor: 'transparent',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing(),
    [theme.breakpoints.up('lg')]: {
      marginRight: theme.spacing(3),
      width: 34,
      height: 34,
    },
  },
  backIcon: {
    fontSize: theme.fontSize.md,
    fontWeight: 300,
    color: '#1D253C',
  },
  stepContainer: {
    'margin-right': 'auto',
    '& span': {
      color: theme.palette.primary.dark,
      letterSpacing: '1.5px',
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(),
      borderLeft: '1px solid #C0C0C0',
      '& span': {
        fontSize: theme.fontSize.xxs,
      },
    },
    [theme.breakpoints.up('lg')]: {
      paddingLeft: theme.spacing(3),
      '& span': {
        letterSpacing: '2px',
        fontSize: theme.fontSize.xs,
      },
    },
  },

  stepType: {
    marginRight: 5,
  },
  ctaContainer: {
    order: 3,
    flex: 1,
  },
  ctaContainerPosition: {
    [theme.breakpoints.down('sm')]: {
      flex: 0.3,
    },
    [theme.breakpoints.down(400)]: {
      flex: 'none',
    },
  },
  ctaContainerInvisible: {
    visibility: 'hidden',
  },
  ctaButtonMobile: {
    borderRadius: 50,
    height: 40,
    width: 40,
    textAlign: 'center',
    '& i': {
      margin: 0,
    },
    [theme.breakpoints.up(theme.breakpoints.values.lg)]: {
      display: 'none',
    },
  },
  ctaButtonMobileConfirmation: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  ctaButtonDesktop: {
    display: 'none',
    [theme.breakpoints.up('lg')]: {
      display: 'block',
    },
  },
  ctaButtonDesktopConfirmation: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
  customBackLabel: {
    color: '#0093E9',
    fontWeight: 'bold',
    letterSpacing: 2,
    fontSize: 14,
    marginLeft: 15,
    cursor: 'pointer',
  },
  phoneIcon: {
    border: `2px solid ${theme.palette.common.black}`,
    borderRadius: 50,
    padding: '10px 10px 9px 9px',
  },
  hidden: {
    display: 'none',
  },
  noPadding: {
    padding: 0,
    border: 'none',
  },
  saveProgressContainer: {
    order: 2,
    flex: 1,
    justifyContent: 'flex-end',
    [theme.breakpoints.up('md')]: {
      order: 1,
      justifyContent: 'flex-start',
    },
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(0, 1),
    },
  },
  saveProgressButton: {
    fontFamily: `"${fonts.Effra}","Arial", "sans-serif"`,
    color: theme.palette.main.blue,
    fontSize: theme.fontSize.xs,
    fontWeight: 400,
    textDecoration: 'underline',
    height: 50,
    [theme.breakpoints.up(768)]: {
      height: 60,
    },
  },
  saveProgressMobile: {
    [theme.breakpoints.up(768)]: {
      display: 'none',
    },
  },
  saveProgressDesktop: {
    [theme.breakpoints.down(768)]: {
      display: 'none',
    },
  },
  fetchingCaptionContainer: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flex: 1,
      position: 'static',
      justifyContent: 'flex-start',
    },
  },
  fetchingCaption: {
    fontSize: theme.fontSize.xs,
    fontWeight: 'bold',
    marginLeft: 12,
    [theme.breakpoints.up(768)]: {
      fontSize: theme.fontSize.sm,
    },
  },
  spinner: {
    width: 22,
    animation: '$spin 1.4s cubic-bezier(0.51, 0.29, 0.59, 0.81) infinite',
  },

  '@keyframes spin': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
}));
