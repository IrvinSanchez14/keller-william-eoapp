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
  createNumberMask({ prefix: '', suffix: '%', integerLimit: 3 })(rawValue);

export const numberMask = (rawValue: string) =>
  createNumberMask({
    prefix: '',
  })(rawValue);

export const integerMask = (rawValue: string) =>
  createNumberMask({
    prefix: '',
    suffix: '',
    thousandsSeparatorSymbol: '',
  })(rawValue);

export const moneyMask = (rawValue: string) =>
  createNumberMask({
    prefix: '$',
  })(rawValue);

export const fourDigitsMask = (rawValue: string) =>
  createNumberMask({
    integerLimit: 4,
    prefix: '',
    thousandsSeparatorSymbol: '',
  })(rawValue);

export const removePercentageSign = (rawValue: string | number): number =>
  isNaN(+rawValue) ? +(rawValue as string).replace('%', '') : Number(rawValue);

export const removeSignsFromNumbers = (rawValue: string | number): number =>
  isNaN(+rawValue) ? +(rawValue as string).replace(/,|[$]/g, '') : Number(rawValue);

export const parseNumberToThounsads = (rawValue: number | string): string =>
  `${rawValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;

export const parseNumberToMoney = (rawValue: number | string): string =>
  `$${parseNumberToThounsads(rawValue)}`;
