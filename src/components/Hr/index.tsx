import classnames from 'classnames';
import { makeStyles, CSSProperties } from '@material-ui/styles';
import { MuiTheme } from 'src/styles/FormStyle/css/IMuiThemeOptions';

interface HrStyleProps {
  hr: CSSProperties;
}

interface HrProps {
  customStyle?: HrStyleProps;
}

const useStyles = makeStyles((theme: MuiTheme) => ({
  hr: {
    width: '100%',
    marginTop: -50,
    marginBottom: 59.9,
    border: '1px solid #E0E0E0',
    [theme.breakpoints.down('sm')]: {
      marginTop: -30,
      marginBottom: 29,
    },
  },
}));

export default function Hr({ customStyle }: HrProps): JSX.Element {
  const classes = useStyles();

  return <hr className={classnames(classes.hr, customStyle)} />;
}
