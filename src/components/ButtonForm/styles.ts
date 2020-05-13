import { makeStyles } from '@material-ui/styles';
import { MuiTheme } from 'src/styles/FormStyle/css/IMuiThemeOptions';
import { fonts } from 'assets/fonts';

export const useStyles = makeStyles((theme: MuiTheme) => ({
  default: ({
    outlined,
    isBlue,
    isWhite,
    isDark,
    disabled,
    customWidthMobile,
    customWidthDesktop,
    asLink,
  }: any) => ({
    fontFamily: `"${fonts.Effra}", "Arial", "sans-serif"`,
    fontWeight: 500,
    height: 50,
    width: customWidthMobile || '100%',
    fontSize: theme.fontSize.sm,
    boxShadow: 'none',
    outline: 'none',
    borderRadius: 30,
    textDecoration: 'none',
    textTransform: 'none',
    position: 'relative',
    [theme.breakpoints.up(768)]: {
      height: 60,
      width: customWidthDesktop || 226,
      fontSize: theme.fontSize.md,
    },
    ...(!outlined &&
      isBlue && {
        backgroundColor: theme.palette.main.blue,
        color: theme.palette.common.white,
        '&:hover': {
          opacity: 1,
          backgroundColor: theme.palette.main.blue,
        },
      }),
    ...(!outlined &&
      isWhite && {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.main.blue,
        '&:hover': {
          opacity: 1,
          backgroundColor: theme.palette.common.white,
        },
      }),
    ...(!outlined &&
      isDark && {
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.common.white,
        '&:hover': {
          opacity: 1,
          backgroundColor: theme.palette.primary.dark,
        },
      }),
    ...(!outlined &&
      disabled && {
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.main.gray,
      }),
    ...(outlined && {
      backgroundColor: 'transparent',
      boxSizing: 'border-box',
    }),
    ...(outlined &&
      disabled && {
        border: `2px solid ${theme.palette.primary.main}`,
        color: theme.palette.main.gray,
      }),
    ...(outlined &&
      isBlue && {
        border: `2px solid ${theme.palette.main.blue}`,
        color: theme.palette.main.blue,
        '&:hover': {
          opacity: 1,
        },
      }),
    ...(outlined &&
      isWhite && {
        border: `2px solid ${theme.palette.common.white}`,
        color: theme.palette.common.white,
        '&:hover': {
          opacity: 1,
        },
      }),
    ...(asLink && {
      color: theme.palette.main.blue,
      fontSize: theme.fontSize.xxs,
      fontWeight: 400,
      textDecoration: 'underline',
      width: 'auto',
      [theme.breakpoints.up(768)]: {
        fontSize: theme.fontSize.xs,
      },
    }),
    ...(outlined &&
      isDark && {
        border: `2px solid ${theme.palette.primary.dark}`,
        color: theme.palette.primary.dark,
        '&:hover': {
          opacity: 1,
        },
      }),
  }),
  withIcon: {
    height: 64,
    padding: '0px 8px',
    textAlign: 'left',
  },
  withSubLabel: {
    padding: 0,
    display: 'block',
  },
  subLabel: {
    '& p': {
      fontSize: 11,
    },
  },
  link: {
    textDecoration: 'none',
  },
  icon: {
    width: 55,
    marginRight: 16,
    maxHeight: 49,
  },
  labelWithIconContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  customIcon: {
    [theme.breakpoints.up(theme.breakpoints.values.lg)]: {
      marginRight: theme.spacing(),
    },
  },
  buttonLoadingState: {
    display: 'flex',
    justifyContent: 'center',
    ['& i']: {
      animationName: '$blink',
      animationDuration: '1.4s',
      animationIterationCount: 'infinite',
      animationFillMode: 'both',
      background: 'white',
      height: 2,
      width: 2,
      borderRadius: '50%',
      marginRight: 8,
    },
    ['& i:nth-child(2)']: {
      animationDelay: '.2s',
    },
    ['& i:nth-child(3)']: {
      animationDelay: '.4s',
    },
  },
  '@keyframes blink': {
    '0%': {
      opacity: 0.2,
      width: 5,
      height: 5,
    },
    '20%': {
      opacity: 1,
      width: 11,
      height: 11,
    },
    '100%': {
      opacity: 0.2,
      width: 5,
      height: 5,
    },
  },
  grayOutlined: {
    backgroundColor: 'transparent',
    border: '2px solid #FFFFFF !important',
    color: '#FFFFFF !important',
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '& span': {
      color: '#FFFFFF !important',
    },
  },
  labelClass: {
    fontSize: 30,
  },
  subLabelClass: {
    marginTop: 7,
    fontSize: 12,
  },
  labelWithFlexReverted: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
}));
