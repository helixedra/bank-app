import { useState } from "react";
import Button from "./Button";
import currency from "./../database/currency.json";
import getSymbol from "../utils/getSymbol";
import { RiArrowRightUpLine, RiArrowLeftDownLine } from "@remixicon/react";
import Modal from "./Modal";
import AccountAmount from "./AccountAmount";
import TransferModal from "./TransferModal";

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

  const [transferModal, setTransaferModal] = useState(false);

  function handleTransferModal() {
    setTransaferModal((prev) => !prev);
  }

  return (
    <div className="account_info_container">
      <div>
        <div className="account_info_label">Total balance</div>
        <div className="account_info_amount">
          <AccountAmount currentAccount={currentAccount} />
        </div>
      </div>
      <div className="account_actions">
        <Button size="l" type="primary" icon={<RiArrowRightUpLine />}>
          Request
        </Button>
        <Button size="l" type="primary" icon={<RiArrowLeftDownLine />} action={handleTransferModal}>
          Transfer
        </Button>
        <Button size="l" type="secondary">
          More
        </Button>
      </div>
      <Modal visibility={transferModal} handler={handleTransferModal} title="Transfer Money">
        <TransferModal />
      </Modal>
    </div>
  );
}
