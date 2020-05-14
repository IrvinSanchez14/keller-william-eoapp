import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { MuiTheme } from 'src/styles/FormStyle/css/IMuiThemeOptions';

export const styles = (theme: MuiTheme): { [style: string]: CSSProperties } => ({
  unitContainer: {
    [theme.breakpoints.up(768)]: {
      width: 90,
      textAlign: 'center',
      marginLeft: 12,
    },
    marginBottom: 30,
    width: '100%',
  },
  cardContainer: {
    position: 'relative',
    top: -40,
    padding: theme.spacing(6.5, 3, 3.5),
    background: theme.palette.primary.light,
    borderRadius: '0 0 18px 18px',
    '@media (min-width: 768px)': {
      top: -60,
      padding: theme.spacing(8.5, 2.5, 4.5),
      borderRadius: '0 0 36px 36px',
    },
    '@media (min-width: 900px)': {
      padding: theme.spacing(5.5, 4.5, 4.5),
      maxHeight: '375px',
      overflowY: 'auto',
    },
  },
  iconPlus: {
    fontSize: 23,
  },
  containerAddButton: {
    marginTop: '10px',
    display: 'flex',
    flexDirection: 'row',
    cursor: 'pointer',
    color: '#0093E9',
  },
  pAddButton: {
    marginLeft: 15,
    fontSize: '1.15em',
    fontWeight: 600,
  },
  radioContainer: {
    zIndex: 1,
  },
  radioBottomContainer: {
    zIndex: 1,
    position: 'relative',
    top: -30,
    [theme.breakpoints.up(768)]: {
      top: -40,
    },
  },
  addressCotaniner: {
    [theme.breakpoints.down(768)]: {
      flexWrap: 'wrap',
    },
  },
  periodContainer: {
    flexDirection: 'row',
    '& > div': {
      [theme.breakpoints.down('md')]: {
        flex: 1,
      },
      '&:first-child': {
        marginRight: 10,
        [theme.breakpoints.up('md')]: {
          marginRight: theme.spacing(2),
        },
      },
    },
  },
  periodContainerInput: {
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
    [theme.breakpoints.up('md')]: {
      textAlign: 'center',
    },
  },
  periodContainerInputInvalid: {
    borderColor: theme.palette.error.main,
  },
  alignButton: {
    justifyContent: 'flex-end',
  },
  stepHeader: {
    fontSize: '24px',
    lineHeight: '28px',
    [theme.breakpoints.up(768)]: {
      fontSize: '56px',
      lineHeight: '62px',
      marginBottom: '390px',
    },
  },
});
