export function formatAmount(
  amount: string | boolean | number,
  isMoney: boolean,
  withDecimal = false,
): string {
  let formatValue: string | number;
  if (isMoney) {
    formatValue = amount.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    formatValue = withDecimal ? formatValue : formatValue.replace('.00', '');
  } else {
    formatValue = amount.toLocaleString('en-US');
  }
  return formatValue;
}

export function formatBoolean(value: string | boolean | number): string {
  return value ? 'Yes' : 'No';
}

export function formatPercentage(percentage: string | boolean | number): string {
  return `${percentage}%`;
}

export function verifyType(value: any, type?: string): string {
  if (type) {
    if (type === 'amount' || type === 'money') {
      return formatAmount(value, type === 'money');
    } else if (type === 'boolean') {
      return formatBoolean(value);
    } else if (type === 'percentage') {
      return formatPercentage(value);
    }
  }
  return value.toString();
}
