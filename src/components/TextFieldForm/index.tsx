import React, { useRef, useEffect, useState } from 'react';
import { FormikErrors } from 'formik';
import classnames from 'classnames';
import MaskedInput from 'react-text-mask';
import { InputProps } from '@material-ui/core/Input';
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

import { WithStyles } from 'src/styles/FormStyle/css/withStyles';

import { useStyles } from './styles';
import { Column } from '../LayoutWrapper/Flex';

export type TextFieldProps = InputProps &
  WithStyles<typeof useStyles> & {
    placeholder?: string;
    label?: string;
    defaultValue?: string | number;
    iconName?: string;
    errorText?: string | FormikErrors<any>;
    filled?: boolean;
    type?: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    className?: string;
    iconClassName?: string;
    mask?: (string | RegExp)[] | boolean;
    numberMask?: boolean;
    onClick?: (e: React.MouseEvent<HTMLInputElement | SVGElement>) => void;
    autoCorrectDate?: string;
    readOnly?: boolean;
    focused?: boolean;
    fullWidth?: boolean;
    customWidth?: number;
    setFieldValue?: (field: string, value: any, shouldValidate?: boolean) => void;
    setFieldTouched?: (field: string, isTouched?: boolean, shouldValidate?: boolean) => void;
    validateForm?: () => void;
    shouldValidateOnMount?: boolean;
    containerStyles?: any;
  };

const setNumberMask = (rawValue: string) => {
  const numberMask = createNumberMask({
    prefix: '',
  });
  const mask = numberMask(rawValue);
  return mask;
};

export function TextFieldForm(Props: TextFieldProps) {
  const {
    placeholder,
    label,
    type,
    defaultValue,
    value,
    onChange,
    onBlur,
    className,
    errorText,
    onClick,
    mask,
    numberMask,
    autoCorrectDate,
    readOnly,
    focused,
    setFieldValue,
    setFieldTouched,
    fullWidth,
    customWidth,
    validateForm,
    containerStyles,
    shouldValidateOnMount = false,
    ...rest
  } = Props;
  const classes = useStyles({ fullWidth, customWidth });
  const inputRef = useRef(null);
  const [isEditing, setEditing] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    if (shouldValidateOnMount) {
      validateForm();
    }

    if (!!inputRef.current.addEventListener) {
      const handleWheel = (event: React.FocusEvent<HTMLInputElement>) => event.preventDefault();
      inputRef.current.addEventListener('wheel', handleWheel);

      return () => {
        inputRef.current.removeEventListener('wheel', handleWheel);
      };
    }
  }, []);

  useEffect(() => {
    if (inputRef.current && focused) {
      inputRef.current && inputRef.current.focus();
    }
    if (isEditing) {
      const dateOfBirthInput = document.getElementsByName('dateOfBirth')[0];
      dateOfBirthInput.focus();
      setEditing(false);
    }
  }, [isEditing]);

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { name } = rest;
    const date = value.toString();
    if (name === 'dateOfBirth' && date.length === 8) {
      const givenDate = date.slice(0, 6);
      //const countedYear = autocompleteYear(date);
      setFieldValue(name, `${givenDate}${date}`);
      setEditing(true);
      setTabIndex(0);
    } else if (name === 'dateOfBirth') {
      onBlur(event);
    } else {
      setTabIndex(0);
      onBlur(event);
    }

    setFieldTouched(name, true);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = rest;
    if (name === 'dateOfBirth' && tabIndex !== -1) {
      setTabIndex(-1);
    }
    onChange(event);
  };

  const autoCorrectPipe = !!autoCorrectDate ? createAutoCorrectedDatePipe(autoCorrectDate) : null;

  const inputClasses = classnames(classes.inputStyles, className, {
    [classes.error]: !!errorText,
    [classes.readOnly]: readOnly,
  });
  return (
    <Column className={classnames(classes.container, containerStyles)}>
      <p>Label</p>
      <div className={classes.inputWrapper}>
        {mask && (
          <MaskedInput
            {...rest}
            placeholderChar={'\u2000'}
            mask={mask}
            keepCharPositions={!!autoCorrectPipe}
            pipe={autoCorrectPipe}
            placeholder={placeholder}
            onChange={handleChange}
            onBlur={handleBlur}
            value={value}
            type={type}
            className={inputClasses}
            guide={false}
            disabled={readOnly}
            ref={inputRef}
            tabIndex={tabIndex}
          />
        )}
        {numberMask && (
          <MaskedInput
            {...rest}
            mask={setNumberMask}
            keepCharPositions={false}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            type={type}
            className={inputClasses}
            guide={false}
            disabled={readOnly}
            ref={inputRef}
          />
        )}
        {!(mask || numberMask) && (
          <input
            {...rest}
            placeholder={placeholder}
            onChange={handleChange}
            onBlur={onBlur}
            value={value}
            type={type}
            disabled={readOnly}
            className={inputClasses}
            ref={inputRef}
          />
        )}
      </div>
    </Column>
  );
}
