import { makeStyles } from '@material-ui/styles';
import { MuiTheme } from 'src/styles/FormStyle/css/IMuiThemeOptions';
import { fonts } from 'assets/fonts';

export const useStyles = makeStyles((theme: MuiTheme) => ({
  wrapper: ({ isInline }: { isInline: boolean }) => ({
    width: '100%',
    ...(isInline && {
      width: 'auto',
    }),
  }),
  nameContainer: {
    flex: 1,
  },
  caption: ({ isConfirmation }: { isConfirmation: boolean }) => ({
    textTransform: 'uppercase',
    fontSize: 9,
    letterSpacing: 2,
    margin: 0,
    color: theme.palette.common.white,
    ...(isConfirmation && {
      color: theme.palette.primary.dark,
    }),
    fontWeight: 'bold',
  }),
  captionDesktop: {
    display: 'none',
    [theme.breakpoints.up(768)]: {
      display: 'block',
    },
  },
  captionMobile: {
    display: 'none',
    [theme.breakpoints.down(768)]: {
      display: 'block',
    },
  },
  name: ({ isConfirmation }: { isConfirmation: boolean }) => ({
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.palette.common.white,
    ...(isConfirmation && {
      color: theme.palette.primary.dark,
    }),
    lineHeight: 1.2,
    [theme.breakpoints.up('lg')]: {
      fontSize: 28,
    },
  }),
  avatar: ({ photo, avatar, responsiveSizes }: { [prop: string]: any }) => ({
    position: 'relative',
    width: responsiveSizes[0],
    height: responsiveSizes[0],
    backgroundSize: 'cover',
    borderRadius: '50%',
    background: `url("${encodeURI(photo)}")`,
    ...(!!avatar && {
      background: `url("${encodeURI(avatar)}")`,
    }),
    ...(!photo &&
      !avatar && {
        background: 'rgba(255,255,255,0.1)',
      }),
    [theme.breakpoints.up(768)]: {
      ...(!!avatar && {
        width: responsiveSizes[0] * 2,
        height: responsiveSizes[0] * 2,
      }),
    },
    [theme.breakpoints.up('lg')]: {
      width: responsiveSizes[1],
      height: responsiveSizes[1],
      ...(!!avatar && {
        width: responsiveSizes[1] * 0.7,
        height: responsiveSizes[1] * 0.7,
      }),
    },
    [theme.breakpoints.up(1220)]: {
      ...(!!avatar && {
        width: responsiveSizes[1],
        height: responsiveSizes[1],
      }),
    },

    '&::before': {
      position: 'absolute',
      bottom: 0,
      right: -10,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: responsiveSizes[0] * 0.4,
      height: responsiveSizes[0] * 0.4,
      content: '"kw"',
      background: '#b40200',
      borderRadius: '50%',
      fontSize: 10,
      letterSpacing: -1,
      fontFamily: `"${fonts.Effra}", "Arial", "sans-serif"`,
      color: theme.palette.common.white,
      ...(!!avatar && {
        fontSize: responsiveSizes[0] * 0.2,
        width: responsiveSizes[0] * 0.4,
        height: responsiveSizes[0] * 0.4,
      }),
      [theme.breakpoints.up(768)]: {
        ...(!!avatar && {
          fontSize: responsiveSizes[0] * 0.3,
          width: responsiveSizes[0] * 0.6,
          height: responsiveSizes[0] * 0.6,
          letterSpacing: -2,
        }),
      },
      [theme.breakpoints.up('lg')]: {
        width: responsiveSizes[1] * 0.4,
        height: responsiveSizes[1] * 0.4,
        fontSize: 14,
        ...(!!avatar && {
          right: -20,
          fontSize: responsiveSizes[0] * 0.4,
          width: responsiveSizes[1] * 0.25,
          height: responsiveSizes[1] * 0.25,
          letterSpacing: -3,
        }),
      },
      [theme.breakpoints.up(1220)]: {
        ...(!!avatar && {
          fontSize: responsiveSizes[0] * 0.6,
          width: responsiveSizes[1] * 0.35,
          height: responsiveSizes[1] * 0.35,
          letterSpacing: -4,
        }),
      },
    },
  }),
  iconsDesktopContainer: {
    display: 'none',
    '& > a': {
      textDecoration: 'none',
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
  },
  iconsMobileContainer: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  icon: {
    background: 'rgba(255,255,255,0.1)',
    width: 30,
    height: 30,
    display: 'flex',
    justifyContent: 'center',
    borderRadius: '50%',
    alignItems: 'center',
    color: theme.palette.common.white,
    [theme.breakpoints.up('lg')]: {
      width: 41,
      height: 41,
    },
  },
  emailIcon: {
    margin: theme.spacing(0, 1),
    [theme.breakpoints.up('lg')]: {
      margin: theme.spacing(0, 2),
    },
  },
}));
