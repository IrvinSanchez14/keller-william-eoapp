import { Theme } from '@material-ui/core';
import { Palette, PaletteOptions } from '@material-ui/core/styles/createPalette';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

interface NewPalette {
  main: {
    blue: string;
    gray: string;
    darkGray: string;
    background: string;
  };
  blue: {
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
  };
  gray: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
  };
  lemonade: {
    main: string;
  };
  gabi: {
    light: string;
  };
  rating: {
    main: string;
  };
  loader: {
    lightBlue: string;
  };
  inputs: {
    main: string;
    border: string;
    background: string;
    placeholder: string;
  };
}

interface Size {
  xxs?: number;
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl?: number;
  xxxl?: number;
}

interface MuiPalette extends Palette, NewPalette {}

export interface MuiTheme extends Theme {
  palette: MuiPalette;
  fontSize: Size;
}

interface MuiPaletteOptions extends PaletteOptions, NewPalette {}

export interface MuiThemeOptions extends ThemeOptions {
  palette: MuiPaletteOptions;
  fontSize: Size;
}
