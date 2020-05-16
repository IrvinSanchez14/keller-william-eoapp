import createNumberMask from 'text-mask-addons/dist/createNumberMask';
export const dateMask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
export const phoneMask = [
  '(',
  /[1-9]/,
  /\d/,
  /\d/,
  ')',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

export const percentageMask = (rawValue: string) =>
  createNumberMask({ prefix: '', sufix: ' %' })(rawValue);

export const numberMask = (rawValue: string) =>
  createNumberMask({
    prefix: '',
    thousandsSeparatorSymbol: '',
  })(rawValue);

export const fourDigitsMask = (rawValue: string) =>
  createNumberMask({
    integerLimit: 4,
    prefix: '',
    thousandsSeparatorSymbol: '',
  })(rawValue);
