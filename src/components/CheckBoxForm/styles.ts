import { makeStyles } from '@material-ui/styles';
import { MuiTheme } from 'src/styles/FormStyle/css/IMuiThemeOptions';

export const useStyles = makeStyles((theme: MuiTheme) => ({
  label: {
    width: '100%',
    background: 'transparent',
  },
  container: ({ hasHelper, isChecked, withoutBorder }: { [prop: string]: boolean }) => ({
    ...(!hasHelper &&
      !isChecked &&
      !withoutBorder && {
        border: `2px solid ${theme.palette.gray[100]}`,
        borderRadius: 6,
        margin: theme.spacing(1, 0),
        backgroundColor: theme.palette.common.white,
      }),
    ...(!hasHelper &&
      isChecked &&
      !withoutBorder && {
        border: `2px solid ${theme.palette.blue[200]}`,
        borderRadius: 6,
        margin: theme.spacing(1, 0),
      }),
    ...(withoutBorder && {
      width: '100%',
      '& div': {
        padding: 0,
      },
    }),
  }),
  wrapper: ({ hasHelper }: { [prop: string]: boolean }) => ({
    ...(hasHelper && {
      marginTop: theme.spacing(),
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      '& p': {
        color: theme.palette.inputs.main,
        fontSize: theme.fontSize.xxs,
        lineHeight: '14px',
        fontWeight: 400,
        marginLeft: theme.spacing(1.5),
        [theme.breakpoints.up(768)]: {
          fontSize: theme.fontSize.xs,
          lineHeight: '22px',
          marginLeft: theme.spacing(2),
        },
      },
      '& span': {
        padding: 0,
      },
    }),
    ...(!hasHelper && {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 56,
      width: '100%',
      padding: theme.spacing(2),
      borderRadius: 6,
      backgroundColor: theme.palette.common.white,
      cursor: 'pointer',
      '& p': {
        fontWeight: 400,
        fontSize: theme.fontSize.sm,
      },
    }),
  }),
  checkbox: {
    padding: 0,
    fontSize: theme.fontSize.sm,
  },
  icon: {
    height: 19,
    width: 19,
    '@media (min-width: 768px)': {
      height: 24,
      width: 24,
    },
  },
  uncheckedIcon: {
    borderRadius: '25%',
    border: '1px solid #E4E4E4',
    background: 'rgb(249, 249, 249)',
  },
}));
