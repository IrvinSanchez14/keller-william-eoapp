import { makeStyles } from '@material-ui/styles';
import { MuiTheme } from 'src/styles/FormStyle/css/IMuiThemeOptions';

export const useStyles = makeStyles((theme: MuiTheme) => ({
  wrapper: ({ notFixed, zeroQuoteResults }: { [prop: string]: any }) => ({
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing(0, 3),
    maxHeight: '100%',
    height: '100%',
    ...(notFixed && {
      position: 'relative',
    }),
    [theme.breakpoints.up('md')]: {
      minHeight: '100vh',
    },
    [theme.breakpoints.up(1440)]: {
      padding: theme.spacing(0, 7),
    },
    [theme.breakpoints.down(400)]: {
      padding: theme.spacing(0, 1, 0, 1),
    },
  }),
  imageWrapper: ({ notFixed }: { [prop: string]: any }) => ({
    position: 'fixed',
    bottom: 0,
    zIndex: 0,
    width: '100%',
    ...(notFixed && {
      position: 'relative',
      marginTop: 'auto',
    }),
    pointerEvents: 'none',
  }),
  treesImage: {
    [theme.breakpoints.down('sm')]: {
      height: 78,
    },
  },
  houseImage: {
    [theme.breakpoints.down('sm')]: {
      height: 126,
      marginLeft: theme.spacing(),
    },
  },
  houseWithFenceImage: {
    [theme.breakpoints.up('md')]: {
      marginRight: 42,
    },
    [theme.breakpoints.down('sm')]: {
      height: 136,
      marginRight: theme.spacing(),
    },
  },
  dogOnCouchImage: {
    margin: '0 auto 20px',
    height: '25vh',

    [theme.breakpoints.up(690)]: {
      height: 383,
      margin: 0,
      bottom: 0,
    },

    [theme.breakpoints.down(900)]: {
      width: '80%',
    },
  },
  grayShapeMobile: ({ withGrayShapeRight, withGrayShapeLeft }: { [prop: string]: any }) => ({
    position: 'fixed',
    ...(withGrayShapeRight && {
      top: 58,
      right: 0,
    }),
    ...(withGrayShapeLeft && {
      display: 'none',
    }),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  }),
  grayShapeDesktop: ({ withGrayShapeRight, withGrayShapeLeft }: { [prop: string]: any }) => ({
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
      position: 'fixed',
      height: '100vh',
      ...(withGrayShapeRight && {
        right: 0,
      }),
      ...(withGrayShapeLeft && {
        left: 0,
      }),
    },
  }),
  gradientShapeMobile: ({
    withGradientShapeRight,
    withGradientShapeLeft,
    shouldHideOnMobile,
  }: {
    [prop: string]: any;
  }) => ({
    position: 'absolute',
    ...(withGradientShapeRight && {
      top: 313,
      right: 0,
    }),
    ...(withGradientShapeLeft && {
      maxHeight: '100vh',
      top: 296,
      left: 0,
    }),
    ...(shouldHideOnMobile && {
      display: 'none',
    }),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  }),
  gradientShapeDesktop: ({
    withGradientShapeRight,
    withGradientShapeLeft,
    withSmallerLeftGradient,
  }: {
    [prop: string]: any;
  }) => ({
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
      position: 'absolute',
      ...(withGradientShapeRight && {
        top: 0,
        right: 0,
      }),
      ...(withGradientShapeLeft && {
        top: 140,
        left: 0,
        maxHeight: '80%',
      }),
      ...(withSmallerLeftGradient && {
        top: 140,
        height: '70%',
      }),
    },
  }),
  gradientShape404: {
    display: 'none',

    [theme.breakpoints.up(690)]: {
      display: 'block',
      position: 'absolute',
      left: 0,
      top: 200,
    },

    [theme.breakpoints.down(900)]: {
      top: 100,
    },

    [theme.breakpoints.down(1260)]: {
      top: '15%',
      width: '22%',
    },

    [theme.breakpoints.up(1260)]: {
      top: 200,
      left: 0,
    },
  },
  gradientShapeDesktopZeroResults: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
      height: 700,
    },
  },
  treesSharpImage: {
    transform: 'translateX(-186px)',
    [theme.breakpoints.down('lg')]: {
      transform: 'translateX(0)',
    },
    [theme.breakpoints.down('sm')]: {
      height: 108,
    },
  },
  blockImage: {
    [theme.breakpoints.down('sm')]: {
      height: 198,
    },
  },
}));
