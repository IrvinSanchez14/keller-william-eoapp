import { ButtonHTMLAttributes } from 'react';

export default interface ButtonPrimaryProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isInverted: boolean;
  color: string;
  width: string;
  children?: JSX.Element | string;
  isLoading: boolean;
}
