import classnames from 'classnames';
import { Checkbox, Typography } from '@material-ui/core';

import { Icon } from 'src/components/Icon';
import { useStyles } from './styles';

export type CustomCheckboxProps = {
  isChecked?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  className?: string;
  hasHelper?: boolean;
  withoutBorder?: boolean;
};

export const CheckBoxForm: React.FC<CustomCheckboxProps> = ({
  isChecked,
  label,
  onChange,
  className,
  hasHelper,
  withoutBorder,
  ...rest
}: CustomCheckboxProps) => {
  const classes = useStyles({ hasHelper, isChecked, withoutBorder });

  return (
    <label className={classes.label}>
      <div className={classnames(classes.container, className)}>
        <div className={classnames(classes.wrapper, className)}>
          {!hasHelper && label && <Typography variant="body1">{label}</Typography>}
          <Checkbox
            icon={
              <span className={classnames(classes.icon, classes.uncheckedIcon)} title="unchecked" />
            }
            checkedIcon={<Icon name="squareCheck" className={classes.icon} />}
            checked={isChecked || false}
            onChange={onChange}
            className={classes.checkbox}
            {...rest}
          />
          {hasHelper && label && <Typography className={classes.label}>{label}</Typography>}
        </div>
      </div>
    </label>
  );
};
