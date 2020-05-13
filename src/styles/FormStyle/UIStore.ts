import { createMuiTheme } from '@material-ui/core/styles';
import { muiThemeOptions } from 'src/styles/FormStyle/css/MuiThemeOptions';

export class UIStore {
  get muiTheme() {
    return createMuiTheme(muiThemeOptions);
  }
}

export const uiStoreInstance = new UIStore();
