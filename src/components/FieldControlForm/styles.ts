import { makeStyles } from '@material-ui/styles';
import { MuiTheme } from 'src/styles/FormStyle/css/IMuiThemeOptions';

export const useStyles = makeStyles((theme: MuiTheme) => ({
  inputStyles: ({ isError, textAlign }: any) => ({
    ...(isError && {
      borderColor: theme.palette.error.main,
    }),
    ...(textAlign && {
      textAlign,
    }),
  }),
}));
