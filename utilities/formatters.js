export function amountFormatter(amount) {
  return (
    amount
      .toString()
      .replace('.', ',')
      .replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ' €'
  );
}

export function accountNumberFormatter(account) {
  return account.replace(/\B(?=(\d{4})+(?!\d))/g, ' ');
}
