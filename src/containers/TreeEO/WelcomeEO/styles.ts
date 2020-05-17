import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { MuiTheme } from 'src/styles/FormStyle/css/IMuiThemeOptions';

export const styles = (theme: MuiTheme): { [style: string]: CSSProperties } => ({
  titleForm: {
    color: '#07293D',
    fontSize: '16px',
    lineHeight: '21px',
    width: '100%',
    [theme.breakpoints.up(768)]: {
      fontSize: '21px',
      lineHeight: '28px',
      fontWeight: 'bold',
      margin: '3px 0px 0px 15px',
      letterSpacing: '0.8px',
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
      marginTop: '7px',
    },
  },
  label: {
    lineHeight: '14px',
    fontSize: '16px',
    [theme.breakpoints.up('md')]: {
      lineHeight: '22px',
      color: '#07293D',
    },
  },
  labelFirm: {
    fontSize: '16px',
    lineHeight: '22px',
    fontWeight: 'bold',
    [theme.breakpoints.up('md')]: {
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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: '85px',
    marginTop: '34px',
    textAlign: 'center',
    [theme.breakpoints.up(750)]: {
      justifyContent: 'flex-end',
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
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    [theme.breakpoints.up('md')]: {
      lineHeight: '22px',
      color: '#07293D',
    },
  },
  labelComission: {
    lineHeight: '14px',
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '4px',
    [theme.breakpoints.up('md')]: {
      lineHeight: '22px',
      color: '#07293D',
      margin: '-6px 0px 0px -7px',
    },
  },
  contentCommission: {
    marginRight: '16px',
    [theme.breakpoints.up(750)]: {
      marginRight: '31px',
    },
  },
  iconCommission: {
    width: '62px',
    marginBottom: '5px',
    [theme.breakpoints.up(750)]: {
      width: '62px',
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
  contentRisk: {
    marginRight: '45px',
    marginTop: '22px',
    [theme.breakpoints.up(750)]: {
      marginTop: '56px',
    },
  },
  iconPolicy: {
    width: '57px',
    height: '62px',
    marginBottom: '5px',
    [theme.breakpoints.up(750)]: {
      width: '72px',
      height: '62px',
    },
  },
  labelPolicy: {
    fontSize: '16px',
    lineHeight: '22px',
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    [theme.breakpoints.up('md')]: {
      lineHeight: '22px',
      color: '#07293D',
      letterSpacing: '0px',
      marginTop: '-2px',
      marginRight: '10px',
    },
  },
  iconRisk: {
    width: '53px',
    height: '55px',
    [theme.breakpoints.up(750)]: {
      width: '55px',
      height: '55px',
      alignSelf: 'flex-start',
    },
  },
  labelRisk: {
    fontSize: '16px',
    lineHeight: '22px',
    fontWeight: 'bold',
    [theme.breakpoints.up('md')]: {
      lineHeight: '22px',
      color: '#07293D',
      width: '88px',
      margin: '0px 0px 0px -18px',
      letterSpacing: '0px',
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
    alignItems: 'flex-end',
    marginBottom: '46px',
    marginTop: '15px',
    [theme.breakpoints.down(1200)]: {
      flexWrap: 'wrap',
    },
    [theme.breakpoints.up(500)]: {
      marginBottom: '46px',
      marginTop: '-10px',
    },
  },
  textContent: {
    fontSize: '16px',
    lineHeight: '19px',
    color: '#07293D',
    marginBottom: '25px',
    width: 'auto',
    [theme.breakpoints.up(750)]: {
      fontSize: '20px',
      lineHeight: '26px',
      color: '#07293D',
      marginBottom: '45px',
      width: 'auto',
    },
  },
  textContentFinal: {
    fontSize: '16px',
    lineHeight: '19px',
    color: '#07293D',
    marginBottom: '25px',
    width: 'auto',
    [theme.breakpoints.up(750)]: {
      fontSize: '20px',
      lineHeight: '26px',
      color: '#07293D',
      marginBottom: '0px',
      width: 'auto',
      marginTop: '-19px',
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
      margin: '0px 0px 0px 4px',
      marginTop: 0,
    },
  },
});
