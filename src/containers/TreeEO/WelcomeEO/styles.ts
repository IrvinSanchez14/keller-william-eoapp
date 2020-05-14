import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { MuiTheme } from 'src/styles/FormStyle/css/IMuiThemeOptions';

export const styles = (theme: MuiTheme): { [style: string]: CSSProperties } => ({
  titleForm: {
    color: '#07293D',
    fontSize: '16px',
    lineHeight: '21px',
    width: '275px',
    [theme.breakpoints.up(768)]: {
      fontSize: '22px',
      lineHeight: '28px',
      width: '430px',
      fontWeight: 'bold',
    },
  },
  stepHeader: {
    fontSize: '24px',
    lineHeight: '28px',
    letterSpacing: '-0.5px',
    [theme.breakpoints.up(768)]: {
      fontSize: '56px',
      lineHeight: '62px',
      marginBottom: '30px',
      letterSpacing: '-1px',
    },
  },
  label: {
    lineHeight: '14px',
    fontSize: '16px',
    [theme.breakpoints.up('md')]: {
      fontSize: '16px',
      lineHeight: '22px',
      color: '#07293D',
    },
  },
  labelFirm: {
    fontSize: '16px',
    lineHeight: '22px',
    [theme.breakpoints.up('md')]: {
      fontSize: '16px',
      lineHeight: '22px',
      color: '#07293D',
      marginTop: '1px',
    },
  },
  iconSize: {
    width: '53px',
    height: '100%',
  },
  content: {
    marginTop: '34px',
    textAlign: 'center',
    [theme.breakpoints.up(750)]: {
      textAlign: 'center',
      marginTop: '56px',
    },
  },
  contentFirm: {
    marginRight: '37px',
    [theme.breakpoints.up(750)]: {
      marginRight: '42px',
      marginTop: '59px',
    },
  },
  iconFirm: {
    width: '66px',
    height: '51px',
    [theme.breakpoints.up(750)]: {
      width: '66px',
      height: '51px',
    },
  },
  contentAgent: {
    marginRight: '10px',
    marginTop: '31px',
    [theme.breakpoints.up(750)]: {
      marginRight: '29px',
      marginTop: '56px',
    },
  },
  iconAgent: {
    width: '79px',
    height: '55px',
    [theme.breakpoints.up(750)]: {
      width: '79px',
      height: '55px',
    },
  },
  labelAgent: {
    fontSize: '16px',
    lineHeight: '22px',
    marginLeft: '-26px',
    [theme.breakpoints.up('md')]: {
      fontSize: '16px',
      lineHeight: '22px',
      color: '#07293D',
      marginLeft: '-26px',
    },
  },
  contentCommission: {
    marginTop: '27px',
    [theme.breakpoints.up(750)]: {
      marginRight: '38px',
      marginTop: '49px',
    },
  },
  iconCommission: {
    width: '62px',
    height: '62px',
    [theme.breakpoints.up(750)]: {
      width: '62px',
      height: '62px',
    },
  },
  contentPolicy: {
    marginRight: '45px',
    marginTop: '22px',
    [theme.breakpoints.up(750)]: {
      marginRight: '45px',
      marginTop: '50px',
    },
  },
  iconPolicy: {
    width: '57px',
    height: '62px',
    [theme.breakpoints.up(750)]: {
      width: '57px',
      height: '62px',
    },
  },
  labelPolicy: {
    fontSize: '16px',
    lineHeight: '22px',
    marginLeft: '13px',
    [theme.breakpoints.up('md')]: {
      fontSize: '16px',
      lineHeight: '22px',
      color: '#07293D',
      marginLeft: '13px',
    },
  },
  iconRisk: {
    width: '53px',
    height: '55px',
    [theme.breakpoints.up(750)]: {
      width: '53px',
      height: '55px',
    },
  },
  card: {
    padding: 0,
    outline: 'none',
    width: 85,
    [theme.breakpoints.up(750)]: {
      height: 128,
      width: 128,
    },
  },
  divSVG: {
    display: 'flex',
    marginBottom: '46px',
    marginTop: '15px',
    [theme.breakpoints.down(990)]: {
      flexWrap: 'wrap',
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      marginBottom: '46px',
      marginTop: '15px',
    },
  },
  textContent: {
    fontSize: '16px',
    lineHeight: '19px',
    color: '#07293D',
    marginBottom: '25px',
    width: '275px',
    [theme.breakpoints.up(750)]: {
      fontSize: '20px',
      lineHeight: '26px',
      color: '#07293D',
      marginBottom: '45px',
      width: '528px',
    },
  },
  alignButton: {
    justifyContent: 'flex-end',
  },
  bottomHeader: {
    fontSize: '16px',
    lineHeight: '20px',
    [theme.breakpoints.up(750)]: {
      fontSize: '22px',
      lineHeight: '28px',
      marginTop: 0,
    },
  },
});
