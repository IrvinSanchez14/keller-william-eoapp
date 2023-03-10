import { ReactNode } from 'react';
import classnames from 'classnames';
import { Field, FieldProps } from 'formik';

import { useStyles } from './styles';
import { TextFieldForm } from '../TextFieldForm';

export type FieldControlProps = {
  name?: string;
  type?: string;
  className?: string;
  touched?: { [key: string]: any };
  placeholder?: string;
  errors?: { [key: string]: any };
  label?: string;
  mask?: (string | RegExp)[];
  numberMask?: boolean;
  autoCorrectDate?: string;
  isLoading?: boolean;
  setFieldTouched?: (field: string, isTouched?: boolean, shouldValidate?: boolean) => void;
  renderFastField?: boolean;
  renderCustomField?: ({ field: FieldProps, form: FormikProps }) => ReactNode;
  readOnly?: boolean;
  focused?: boolean;
  fullWidth?: boolean;
  customWidth?: number;
  shouldValidateOnMount?: boolean;
  isErrorMessageHidden?: boolean;
  textAlign?: 'center' | 'left';
  containerStyles?: string;
  id?: string;
  onChange?: any;
  setNumberMask?: (rawValue: string) => void;
  percentageMask?: boolean;
};

export function FielControlForm(Props: FieldControlProps) {
  const {
    id,
    name,
    type,
    placeholder,
    errors = {},
    autoCorrectDate,
    mask,
    numberMask,
    touched = {},
    label,
    renderCustomField,
    isLoading,
    readOnly,
    focused,
    renderFastField,
    fullWidth,
    customWidth,
    isErrorMessageHidden,
    textAlign,
    className,
    setNumberMask,
    percentageMask,
    ...rest
  } = Props;
  const isError = errors[name] && touched[name];
  const classes = useStyles({ isError, textAlign });

  const render = ({ field, form }: FieldProps) => {
    const { setFieldValue, setFieldTouched, validateForm } = form;

    return renderCustomField ? (
      <>{renderCustomField({ field, form })}</>
    ) : (
      <TextFieldForm
        {...field}
        {...rest}
        fullWidth={fullWidth}
        type={type}
        placeholder={placeholder}
        errorText={
          !isErrorMessageHidden && errors[name] && touched[name] ? (errors[name] as string) : ''
        }
        label={label}
        mask={!!mask ? mask : false}
        numberMask={numberMask ? numberMask : false}
        autoCorrectDate={!!autoCorrectDate ? autoCorrectDate : ''}
        readOnly={isLoading ? true : readOnly}
        focused={focused}
        setFieldValue={setFieldValue}
        setFieldTouched={setFieldTouched}
        customWidth={customWidth}
        validateForm={validateForm}
        className={classnames(classes.inputStyles, className)}
        setNumberMask={setNumberMask}
        percentageMask={percentageMask}
      />
    );
  };

  const props = {
    name,
    touched,
    type,
    render,
    ...rest,
  };

  return renderFastField ? (
    <Field name={props.name} id={id}>
      {render}
    </Field>
  ) : (
    <Field>{render}</Field>
  );
}
