import media from './mediaQueries';

const colorDark = '#1D253C';

export default {
  ...media,
  gridWidth: '1260px',
  fonts: {
    sizes: {
      biggest: '48px',
      bigger: '34px',
      big: '24px',
      regular: '20px',
      small: '18px',
      smaller: '16px',
      smallest: '13px',
    },
  },
  colors: {
    white: '#fff',
    mortgageRed: '#b3060f',
    redCheck: '#ce011f',
    primaryDark: '#343342',
    darkGray: '#4d4d4f',
    gray: '#676672',
    mediumGray: '#93929B',
    lightGray: '#CACACB',
    lightestGray: '#ebebeb',
    lightBlue: '#1CA1D4',
    dark: colorDark,
    darkBlue: '#1D253C',
    mainHeadingColor: colorDark,
    paragraph: {
      dark: '#07293D',
      lightGray: '#999999',
      darkGray: '#6A6A6A',
    },
    grayTableHeader: '#979797',
    grayTableColor: 'rgba(52, 51, 66, 0.05)',
    spanColor: colorDark,
    primary: '#0093E9',
    grayLight: '#C4C4C4',
    grayBorders: '#D4D4D4',
    shadowColor: 'rgba(145, 145, 145, 0.28)',
    shadowGrayColor: '#D8D8D8',
  },
  boxShadow: '0 3px 9px 0 rgba(0,0,0,0.16)',
};
