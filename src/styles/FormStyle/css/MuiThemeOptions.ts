import { createMuiTheme } from '@material-ui/core';
import { MuiThemeOptions } from './IMuiThemeOptions';
import { fonts } from '../../../../static/fonts/fontForm';

const defaultTheme = createMuiTheme();

const muiBreakpoints = {
  values: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 900,
    xl: 1200,
  },
};

const muiFontSizes = {
  xxs: 12,
  xs: 14,
  sm: 16,
  md: 18,
  lg: 20,
  xl: 24,
  xxl: 30,
  xxxl: 32,
};

const muiPalette = {
  primary: {
    light: '#4791db',
    main: '#1976d2',
    dark: '#1D253C',
  },
  secondary: {
    light: '#E7F8FE',
    main: '#35C655',
    dark: '#1EA2D4',
  },
  error: {
    main: '#FD5C51',
  },
  main: {
    blue: '#0093E9',
    gray: '#C4C4C4',
    darkGray: '#999',
    background: '#F7F7F7',
  },
  blue: {
    100: '#68d0cb',
    200: '#4dc5cf',
    300: '#32bad2',
    400: '#1caed4',
    500: '#1ca1d4',
    600: '#0093e9',
  },
  gray: {
    50: '#f1f1f1',
    100: '#CACACB',
    200: '#9B9B9B',
    300: '#F3F3F3',
    400: '#E8E8E8',
    500: '#EBEFF5',
    600: '#FAFAFA',
    700: '#F6F9FB',
    800: '#676672',
  },
  lemonade: {
    main: '#FF0083',
  },
  gabi: {
    light: '#EBF8FD',
  },
  rating: {
    main: '#FFDF2A',
  },
  loader: {
    lightBlue: '#6ED2F8',
  },
  inputs: {
    background: '#F9F9F9',
    border: '#E4E4E4',
    main: '#797979',
    placeholder: '#A7A7A7',
  },
};

const muiTypography: MuiThemeOptions['typography'] = {
  fontFamily: `"${fonts.Effra}",Arial", "sans-serif"`,
  h1: {
    fontSize: 24,
    lineHeight: '28px',
    fontWeight: 'bold',
    [defaultTheme.breakpoints.up(768)]: {
      fontSize: 56,
      lineHeight: '62px',
    },
  },
  h2: {
    fontSize: 20,
    lineHeight: '24px',
    fontWeight: 'bold',
    [defaultTheme.breakpoints.up(768)]: {
      fontSize: 32,
      lineHeight: '32px',
    },
  },
  h3: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 1.2,
    [defaultTheme.breakpoints.up(768)]: {
      fontSize: 48,
    },
  },
  h4: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 1.2,
    [defaultTheme.breakpoints.up(768)]: {
      fontSize: 36,
    },
  },
  h5: {
    fontWeight: 'bold',
    lineHeight: 1.2,
    [defaultTheme.breakpoints.up(768)]: {
      fontSize: 48,
    },
  },
  subtitle1: {
    fontSize: 16,
    lineHeight: '20px',
    [defaultTheme.breakpoints.up(768)]: {
      fontSize: 22,
      lineHeight: '28px',
    },
  },
  subtitle2: {
    fontSize: 16,
    lineHeight: '20px',
    [defaultTheme.breakpoints.up(768)]: {
      lineHeight: '22px',
    },
  },
  body1: {
    fontSize: 19,
    fontWeight: 'normal',
    [defaultTheme.breakpoints.up(768)]: {
      fontSize: 16,
    },
  },
  caption: {
    fontSize: 12,
    [defaultTheme.breakpoints.up(768)]: {
      fontSize: 14,
    },
  },
};

const muiOverrides = {
  MuiLinearProgress: {
    colorPrimary: {
      backgroundColor: muiPalette.gray[200],
    },
    barColorPrimary: {
      backgroundColor: muiPalette.gray[200],
    },
  },
  MuiInput: {
    root: {
      borderRadius: 6,
      boxShadow: '-1px 2px 4px 1px rgba(0,0,0,0.08)',
      backgroundColor: defaultTheme.palette.common.white,
      [defaultTheme.breakpoints.up(768)]: {
        borderRadius: 12,
      },
    },
    underline: {
      ['&:before']: {
        display: 'none',
      },
      ['&:after']: {
        display: 'none',
      },
    },
    input: {
      paddingLeft: defaultTheme.spacing(2),
      fontSize: 16,
      fontWeight: 'bold',
    },
  },
  MuiSelect: {
    select: {
      padding: defaultTheme.spacing(1),
      paddingLeft: defaultTheme.spacing(1.5),
      fontSize: 16,
      fontWeight: 'bold',
      borderRadius: 6,
      [defaultTheme.breakpoints.up(768)]: {
        borderRadius: 12,
      },
    },
    selectMenu: {
      '&$selectMenu': {
        paddingLeft: defaultTheme.spacing(2),
        paddingRight: defaultTheme.spacing(2),
      },
    },
  },
  MuiBackdrop: {
    root: {
      backgroundColor: 'rgba(29,37,60,0.5)',
    },
  },
  MuiListItemText: {
    inset: {
      padding: 0,
      ['&:first-child']: {
        paddingLeft: defaultTheme.spacing(5),
      },
    },
  },
  MuiPickersToolbar: {
    toolbar: {
      backgroundColor: muiPalette.blue[500],
      '& h6': {
        color: defaultTheme.palette.common.white,
      },
    },
  },
  MuiMenuItem: {
    root: {
      fontSize: 16,
    },
  },
  MuiPickersDay: {
    root: {
      '&$selected': {
        backgroundColor: muiPalette.blue[500],
      },
    },
    day: {
      color: muiPalette.blue[500],
    },
    current: {
      color: muiPalette.blue[500],
    },
  },
  MuiPickersModal: {
    dialogAction: {
      color: muiPalette.secondary.dark,
      fontWeight: 600,
      borderTop: 0,
      borderBottom: 0,
      borderLeft: `2px solid ${muiPalette.blue[100]}`,
      borderRight: `2px solid ${muiPalette.blue[500]}`,
      boxSizing: 'border-box',
      backgroundPosition: '0 0, 0 100%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 2px',
      backgroundImage: `linear-gradient(to right, ${muiPalette.blue[100]}, ${muiPalette.blue[200]},
        ${muiPalette.blue[300]}, ${muiPalette.blue[400]}, ${muiPalette.blue[500]}),
        linear-gradient(to right, ${muiPalette.blue[100]}, ${muiPalette.blue[200]},
        ${muiPalette.blue[300]}, ${muiPalette.blue[400]}, ${muiPalette.blue[500]})`,
    },
  },
  MuiRating: {
    iconEmpty: {
      color: muiPalette.gray[400],
    },
    icon: {
      color: muiPalette.rating.main,
    },
    decimal: {
      width: 25,
      '@media (min-width: 768px)': {
        width: 30,
      },
    },
    sizeLarge: {
      fontSize: 30,
      '@media (min-width: 768px)': {
        fontSize: 35,
      },
    },
  },
  MuiSnackbar: {
    anchorOriginTopCenter: {
      top: 0,
      '@media (min-width: 576px)': {
        top: 0,
      },
    },
  },
};

export const muiThemeOptions: MuiThemeOptions = {
  typography: muiTypography,
  palette: muiPalette,
  fontSize: muiFontSizes,
  // @ts-ignore
  breakpoints: muiBreakpoints,
  // @ts-ignore
  overrides: muiOverrides,
};
