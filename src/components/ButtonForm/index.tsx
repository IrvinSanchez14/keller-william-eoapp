import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { ButtonBase } from '@material-ui/core';
import { ButtonBaseProps } from '@material-ui/core/ButtonBase';

import { WithStyles } from 'src/styles/FormStyle/css/withStyles';
import { Icon } from '../Icon';

import { useStyles } from './styles';
import { AwesomeFontIcon } from '../AwesomeFontIcon';

export type CustomButtonProps = WithStyles<typeof useStyles> &
  ButtonBaseProps & {
    label: any;
    subLabel?: string;
    to?: string;
    isLoading?: boolean;
    iconName?: string;
    customIconName?: string;
    customIconType?: 'solid' | 'regular' | 'light';
    disabled?: boolean;
    onClick?: any;
    loaderclass?: string;
    outlined?: boolean;
    variant?: string;
    isBlue?: boolean;
    isWhite?: boolean;
    isDark?: boolean;
    fontWeight?: string | number;
    type?: string;
    customWidth?: number;
    withLabelClass?: boolean;
    withSubLabelClass?: boolean;
    customWidthMobile?: number | string;
    customWidthDesktop?: number | string;
    asLink?: boolean;
    customIconClass?: string;
    flexReverse?: boolean;
  };

function ButtonForm(Props: any) {
  const {
    to,
    label,
    withLabelClass,
    subLabel,
    withSubLabelClass,
    outlined,
    isLoading,
    iconName,
    customIconName,
    customIconType,
    className,
    onClick,
    loaderclass,
    disabled,
    isBlue = true,
    isWhite,
    isDark,
    fontWeight,
    type,
    customWidthMobile,
    customWidthDesktop,
    asLink,
    customIconClass = '',
    flexReverse,
    ...rest
  } = Props;
  const classes = useStyles({
    outlined,
    isBlue,
    isWhite,
    isDark,
    fontWeight,
    disabled,
    customWidthMobile,
    customWidthDesktop,
    asLink,
  });
  const variant = outlined ? 'outlined' : 'contained';
  const children = (
    <ButtonBase
      variant={variant}
      className={classnames(classes.default, className, {
        [classes.withIcon]: !!iconName,
        [classes.withSubLabel]: !!subLabel,
      })}
      disabled={disabled}
      onClick={onClick}
      type={type}
      {...rest}
    >
      {isLoading ? (
        <span className={classnames(classes.buttonLoadingState, loaderclass)}>
          <i />
          <i />
          <i />
        </span>
      ) : (
        <>
          <div
            className={classnames({
              [classes.labelWithIconContainer]: !!iconName,
              [classes.labelWithFlexReverted]: flexReverse,
            })}
          >
            {!!iconName && <Icon name={iconName} className={classes.icon} />}
            {!!customIconName && (
              <AwesomeFontIcon
                name={customIconName}
                type={customIconType}
                className={classnames(classes.customIcon, customIconClass)}
              />
            )}
            <span className={`${withLabelClass ? classes.labelClass : ''}`}>{label}</span>
          </div>
          {subLabel && (
            <div
              className={classnames(classes.subLabel, {
                [classes.subLabelClass]: withSubLabelClass,
              })}
            >
              <span>{subLabel}</span>
            </div>
          )}
        </>
      )}
    </ButtonBase>
  );

  return (
    <>
      {to ? (
        <Link className={classnames(classes.link)} to={to}>
          {children}
        </Link>
      ) : (
        <>{children}</>
      )}
    </>
  );
}

export default ButtonForm;
