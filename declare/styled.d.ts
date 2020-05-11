import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    desktopSmall: (...opts: any) => ReturnType<ThemedCssFunction<DefaultTheme>>;
    tablet: (...opts: any) => ReturnType<ThemedCssFunction<DefaultTheme>>;
    phone: (...opts: any) => ReturnType<ThemedCssFunction<DefaultTheme>>;
    phoneSmall: (...opts: any) => ReturnType<ThemedCssFunction<DefaultTheme>>;
    desktopSmall: string;
    tablet: string;
    phone: string;
    phoneSmall: string;
    gridWidth: string;
    boxShadow: string;
    fonts: {
      sizes: {
        biggest: string;
        bigger: string;
        big: string;
        regular: string;
        small: string;
        smaller: string;
        smallest: string;
      };
    };
    colors: {
      white: string;
      mortgageRed: string;
      primaryDark: string;
      darkGray: string;
      gray: string;
      mediumGray: string;
      lightGray: string;
      lightestGray: string;
      lightBlue: string;
      dark: colorDark;
      darkBlue: string;
      mainHeadingColor: string;
      grayTableHeader: string;
      paragraph: {
        dark: string;
        lightGray: string;
        darkGray: string;
      };
      spanColor: string;
      primary: string;
      grayLight: string;
      grayBorders: string;
      shadowColor: string;
    };
  }
}
