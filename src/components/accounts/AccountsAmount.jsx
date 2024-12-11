import currency from "./../../database/currency.json";
import getSymbol from "../../utils/getSymbol";
import Amount from "./Amount";

export default function AccountsAmount({ userdata, selectedAccount, selectedAccountName }) {
  const getExchangeRate = (cur) => {
    const found = currency?.find((item) => item.currency === cur);
    return found ? parseFloat(found.exchange_rate) : null;
  };

  const getTotal = (balances) => {
    return balances.reduce((acc, balance) => acc + balance, 0);
  };

  const getAllAccountsTotalBalance = () => {
    const totalBalance = userdata.accounts.map((account) => {
      const exchangeRate = getExchangeRate(account.currency);
      const totalInUSD = parseFloat(account.balance) * exchangeRate;
      return totalInUSD;
    });

    return getTotal(totalBalance).toFixed(2);
  };

  let currentAccount;

  if (selectedAccount === "all-accounts") {
    currentAccount = {
      currency: "USD",
      symbol: getSymbol("USD"),
      amount: getAllAccountsTotalBalance(),
    };
  } else {
    const accountData = userdata.accounts.find((account) => account.account_id === selectedAccount) || null;

    currentAccount = {
      currency: accountData.currency,
      symbol: getSymbol(accountData.currency),
      amount: accountData.balance,
    };
  }
  return (
    <div className="accounts_amount">
      <div className="accounts_amount__label">Balance &bull; {selectedAccountName}</div>
      <Amount currentAccount={currentAccount} />
    </div>
  );
}
