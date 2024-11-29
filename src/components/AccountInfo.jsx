import currency from "./../database/currency.json";

export default function AccountInfo({ userdata, state }) {
  //   console.log(state);
  //   console.log(userdata);

  const getExchangeRate = (cur) => {
    const found = currency.find((item) => item.currency === cur);
    return found ? parseFloat(found.exchange_rate) : null;
  };
  const getTotalBalance = (balances) => {
    return balances.reduce((acc, balance) => acc + balance, 0);
  };

  const getAllAccountsData = () => {
    // console.log();
    const totalBalance = userdata.accounts.map((account) => {
      //   account.balance;
      //   account.currency;
      //   console.log("account.currency", account.currency);

      const exchangeRate = getExchangeRate(account.currency);

      //   console.log("exchangeRate:", exchangeRate);

      const totalInUSD = parseFloat(account.balance) * exchangeRate;
      return totalInUSD;
    });

    return getTotalBalance(totalBalance).toFixed(2);
    // return accounts; // Возвращаем все счета
  };

  const getSymbol = (cur) => {
    const found = currency.find((item) => item.currency === cur);
    return found ? found.symbol : null;
  };

  let currentAccount;

  if (state === "all-accounts") {
    currentAccount = {
      currency: "USD",
      symbol: getSymbol("USD"),
      amount: getAllAccountsData(),
    };
  } else {
    const accountData =
      userdata.accounts.find((account) => account.account_id === state) || null;

    currentAccount = {
      currency: accountData.currency,
      symbol: getSymbol(accountData.currency),
      amount: accountData.balance,
    };
  }

  return (
    <div className="account_info_container">
      <div className="account_info_label">Total balance</div>
      <div className="account_info_amount">
        <span className="account_info_amount_symbol">
          {currentAccount && currentAccount.symbol}
        </span>
        {currentAccount &&
          new Intl.NumberFormat("en-IN").format(currentAccount.amount)}
      </div>
    </div>
  );
}
