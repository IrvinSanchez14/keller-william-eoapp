import { makeStyles } from '@material-ui/styles';
import { MuiTheme } from 'src/styles/FormStyle/css/IMuiThemeOptions';

export const useStyles = makeStyles((theme: MuiTheme) => ({
  label: {
    fontSize: theme.fontSize.xxs,
    lineHeight: '12px',
    fontWeight: 400,
    color: theme.palette.inputs.main,
    marginBottom: theme.spacing(),
    marginTop: theme.spacing(1.5),
    [theme.breakpoints.up(768)]: {
      fontSize: theme.fontSize.xs,
      lineHeight: '14px',
      marginBottom: '11px',
    },
  },
  labelWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    border: 'none !important',
    alignItems: 'flex-start',
  },
  error: (props: { [prop: string]: any }) => ({
    fontSize: '13px',
    fontWeight: 400,
    color: theme.palette.error.main,
    textAlign: props.textAlign,
    ...(props.errorWithLabel && {
      marginBottom: 4,
      [theme.breakpoints.down(768)]: {
        fontSize: 12,
      },
    }),
    ...(props.longError && {
      top: 0,
    }),
  }),
}));
