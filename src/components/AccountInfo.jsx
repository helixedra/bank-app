import { useState, useEffect } from "react";
import Button from "./Button";
import currency from "./../database/currency.json";
import { RiArrowRightUpLine, RiArrowLeftDownLine } from "@remixicon/react";

export default function AccountInfo({ userdata, state }) {
  const getExchangeRate = (cur) => {
    const found = currency.find((item) => item.currency === cur);
    return found ? parseFloat(found.exchange_rate) : null;
  };
  const getTotalBalance = (balances) => {
    return balances.reduce((acc, balance) => acc + balance, 0);
  };

  const getAllAccountsData = () => {
    const totalBalance = userdata.accounts.map((account) => {
      const exchangeRate = getExchangeRate(account.currency);
      const totalInUSD = parseFloat(account.balance) * exchangeRate;
      return totalInUSD;
    });

    return getTotalBalance(totalBalance).toFixed(2);
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
    const accountData = userdata.accounts.find((account) => account.account_id === state) || null;

    currentAccount = {
      currency: accountData.currency,
      symbol: getSymbol(accountData.currency),
      amount: accountData.balance,
    };
  }

  // Numbers Animations
  const [displayedAmount, setDisplayedAmount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 150;
    const finalAmount = currentAccount.amount;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const currentValue = Math.min((progress / duration) * finalAmount, finalAmount);
      setDisplayedAmount(currentValue);

      if (progress < duration) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [currentAccount.amount]);

  return (
    <div className="account_info_container">
      <div>
        <div className="account_info_label">Total balance</div>
        <div className="account_info_amount">
          <span className="account_info_amount_symbol">{currentAccount && currentAccount.symbol}</span>
          {new Intl.NumberFormat("en-IN").format(displayedAmount.toFixed(2))}
        </div>
      </div>
      <div className="account_actions">
        <Button size="l" type="primary" icon={<RiArrowRightUpLine />}>
          Request
        </Button>
        <Button size="l" type="primary" icon={<RiArrowLeftDownLine />}>
          Transfer
        </Button>
        <Button size="l" type="secondary">
          More
        </Button>
      </div>
    </div>
  );
}
