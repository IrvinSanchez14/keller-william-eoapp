import * as React from 'react';
import classnames from 'classnames';
import { RadioProps } from '@material-ui/core/Radio';
import { FormControlLabel, Radio, Typography } from '@material-ui/core';

import { Icon } from 'src/components/Icon';
import { WithStyles } from 'src/styles/FormStyle/css/withStyles';

import { useStyles } from './styles';

export type RadioFieldProps = RadioProps &
  WithStyles<typeof useStyles> & {
    logoName?: string;
    subLabel?: string;
    label?: string;
    value?: string;
    text?: string;
    className?: string;
    size?: 'small' | 'large';
  };

export const RadioField: React.FC<RadioFieldProps> = ({
  className,
  onChange,
  checked,
  label,
  logoName,
  subLabel,
  value,
  text,
  size,
  ...rest
}) => {
  const classes = useStyles({ checked, isSmall: size === 'small' });

  return (
    <FormControlLabel
      labelPlacement="end"
      value={value}
      checked={checked}
      onChange={onChange}
      className={classnames(classes.container, className)}
      control={
        <Radio
          icon={<span className={classnames(classes.icon, classes.uncheckedIcon)} />}
          checkedIcon={<Icon name="circleCheck" className={classes.icon} />}
          {...rest}
        />
      }
      label={
        <div className={classes.labelContainer}>
          {!!logoName && <Icon name={logoName} className={classes.img} />}
          <Typography className={classes.label} variant="body1">
            {label}
          </Typography>
          {subLabel && (
            <Typography className={classes.subLabel} variant="body1">
              {subLabel}
              {text && <span>{text}</span>}
            </Typography>
          )}
        </div>
      }
    />
  );
};
