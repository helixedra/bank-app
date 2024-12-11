import currency from "../../database/currency.json";

export default function TotalBalance({ accounts }) {
  const getExchangeRate = (cur) => {
    const found = currency?.find((item) => item.currency === cur);
    return found ? parseFloat(found.exchange_rate) : null;
  };

  const getTotal = (balances) => {
    return balances.reduce((acc, balance) => acc + balance, 0);
  };

  const getAllAccountsTotalBalance = () => {
    const totalBalance = accounts.map((account) => {
      const exchangeRate = getExchangeRate(account.currency);
      const totalInUSD = parseFloat(account.balance) * exchangeRate;
      return totalInUSD;
    });

    return getTotal(totalBalance).toFixed(2);
  };
  return <>{getAllAccountsTotalBalance()}</>;
}
