import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { MuiTheme } from 'src/styles/FormStyle/css/IMuiThemeOptions';

export const styles = (theme: MuiTheme): { [style: string]: CSSProperties } => ({
  titleForm: {
    color: '#07293D',
    fontSize: 16,
    lineHeight: '21px',
    fontWeight: 'bold',
    marginBottom: '1.3em',
    margin: '0 15px',
    [theme.breakpoints.up(768)]: {
      fontSize: 22,
      lineHeight: '28px',
      marginBottom: '0.7em',
      margin: '0 15px',
      color: '#07293D',
    },
  },
  subTitleForm: {
    fontSize: 16,
    [theme.breakpoints.up(768)]: {
      fontSize: 22,
      padding: '0px 8px',
    },
  },
  containerOne: {
    padding: '0px 0px',
    [theme.breakpoints.up(768)]: {
      padding: '0px 8px',
    },
  },
  containerTwo: {
    padding: '0px 0px',
    [theme.breakpoints.up(768)]: {
      padding: '0px 30px',
    },
  },
  containerTotal: {
    marginTop: 20,
    marginBottom: '-30px',
    [theme.breakpoints.up(768)]: {
      marginTop: 85,
      marginBottom: '-50px',
    },
  },
  divContainerTotal: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '15px',
  },
  stepHeader: {
    fontSize: '24px',
    lineHeight: '28px',
    [theme.breakpoints.up(768)]: {
      fontSize: '56px',
      lineHeight: '62px',
    },
  },
  stepBottom: {
    fontSize: '16px',
    lineHeight: '20px',
    [theme.breakpoints.up(768)]: {
      fontSize: '22px',
      lineHeight: '28px',
      marginTop: 55,
    },
  },
  textTotal: {
    fontSize: 16,
    lineHeight: '20px',
    fontWeight: 'bold',
    marginBottom: '1.3em',
    margin: '0 15px',
    marginTop: '2px',
    [theme.breakpoints.up(768)]: {
      fontSize: '22px',
      lineHeight: '28px',
      color: '#07293D',
      marginTop: '10px',
    },
  },
  textNumberTotal: {
    fontSize: 24,
    lineHeight: '20px',
    fontWeight: 'bold',
    marginBottom: '1.3em',
    margin: '0 15px',
    [theme.breakpoints.up(768)]: {
      fontSize: '48px',
      lineHeight: '48px',
    },
  },
});
