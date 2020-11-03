import classnames from 'classnames';
import { Typography } from '@material-ui/core';
import { WithStyles } from 'src/styles/FormStyle/css/withStyles';
import { FormikErrors } from 'formik';
import { useStyles } from './styles';

export type LabelProps = WithStyles<typeof useStyles> & {
  label?: string;
  errorLabel?: string | FormikErrors<any>;
  textAlign?: string;
  className?: string;
};

export function LabelForm(Props: LabelProps) {
  const { label, errorLabel, className, textAlign = 'right' } = Props;
  const classes = useStyles({
    textAlign,
    longError: errorLabel?.length > 40,
    errorWithLabel: !!label,
  });

  return (
    <div className={classnames(classes.labelWrapper, className)}>
      {label && <Typography className={classes.label}>{label}</Typography>}
      {errorLabel && <Typography className={classes.error}>{errorLabel}</Typography>}
    </div>
  );
}
