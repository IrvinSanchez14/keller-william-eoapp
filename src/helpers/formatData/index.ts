export function formatAmount(
  amount: string | boolean | number,
  isMoney: boolean,
  withDecimal = false,
): string {
  let formatValue: string | number;
  if (!amount) return '';
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

export function formatNumericalAbbreviation(amount: number) {
  if (amount && amount > 0) {
    let newAmount = amount.toString();
    if (newAmount.length >= 10 && newAmount.length <= 12) {
      newAmount = `$${newAmount.substr(0, newAmount.length - 9)}B`;
    } else if (newAmount.length >= 7 && newAmount.length <= 9) {
      newAmount = `$${newAmount.substr(0, newAmount.length - 6)}M`;
    } else if (newAmount.length >= 4 && newAmount.length <= 6) {
      newAmount = `$${newAmount.substr(0, newAmount.length - 3)}K`;
    } else {
      newAmount = formatAmount(amount, true);
    }
    return newAmount;
  }
  return formatAmount(amount, true);
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
