import { makeStyles } from '@material-ui/styles';
import { MuiTheme } from 'src/styles/FormStyle/css/IMuiThemeOptions';

export const useStyles = makeStyles((theme: MuiTheme) => ({
  container: ({ checked, isSmall }: { [prop: string]: boolean }) => ({
    position: 'relative',
    display: 'flex',
    backgroundColor: theme.palette.common.white,
    width: '100%',
    height: 60,
    margin: theme.spacing(0, 0, 1.25),
    border: '1px solid #E4E4E4',
    borderRadius: 40,
    boxShadow: '2px 2px 0 0 rgba(181,181,181,0.5)',
    '& > span:first-child': {
      paddingLeft: 20,
      paddingRight: 12,
      '@media (min-width: 768px)': {
        paddingLeft: 24,
      },
    },
    '@media (min-width: 768px)': {
      height: 80,
      marginBottom: 20,
    },
    ...(checked && {
      boxShadow: 'none',
      borderColor: '#0093E9',
      backgroundColor: '#E4F5FF',
    }),
    ...(!checked && {
      borderColor: '#E4E4E4',
    }),
    ...(isSmall && {
      width: '100%',
      height: 50,
      marginBottom: 0,
      '& > span:first-child': {
        paddingLeft: 18,
        paddingRight: 12,
      },
      '@media (min-width: 768px)': {
        maxWidth: 180,
        height: 60,
      },
    }),
  }),
  img: {
    paddingLeft: 12,
    maxWidth: 55,
  },
  labelContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  label: {
    color: '#0093E9',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: '25px',
    '@media (min-width: 768px)': {
      fontSize: 22,
    },
  },
  subLabel: {
    marginLeft: 'auto',
    fontWeight: 600,
    '& span': {
      color: '#93929B',
    },
    fontSize: 16,
  },
  icon: {
    height: 26,
    width: 26,
    '@media (min-width: 768px)': {
      height: 32,
      width: 32,
    },
  },
  uncheckedIcon: {
    borderRadius: '50%',
    border: '1px solid #E4E4E4',
  },
}));
