import { useState } from "react";
import classes from "./TransferModal.module.scss";
import { RiArrowDownLine } from "@remixicon/react";
import Dropdown from "./Dropdown";
import ImageIcon from "./ImageIcon";
import userdata from "./../database/userdata.json";
import getSymbol from "../utils/getSymbol";

export default function TransferModal() {
  const currencyDropdownInitial = [
    { id: "usd", name: "USD", action: () => handleCurrencyDropdown("usd"), before: null, after: null, active: true },
    { id: "eur", name: "EUR", action: () => handleCurrencyDropdown("eur"), before: null, after: null, active: false },
  ];

  function getAccountData(id) {
    return userdata.accounts.find((account) => account.account_id === id);
  }

  const accountsDropdownInitial = [
    {
      id: "usd-account",
      name: "USD Account",
      action: () => handleAccountsDropdown("usd-account"),
      before: <ImageIcon image="/images/us-flag.png" size={{ width: "24px", height: "24px" }} title="USD Account" />,
      after: `${getSymbol("USD")} ${getAccountData("usd-account").balance}`,
      active: true,
    },
    {
      id: "eur-account",
      name: "EUR Account",
      action: () => handleAccountsDropdown("eur-account"),
      before: <ImageIcon image="/images/eu-flag.png" size={{ width: "24px", height: "24px" }} title="EUR Account" />,
      after: `${getSymbol("EUR")} ${getAccountData("eur-account").balance}`,
      active: false,
    },
  ];

  const [accountsDropdownState, setAccountsDropdownState] = useState({ data: accountsDropdownInitial, visibility: false });
  const [currencyDropdownState, setCurrencyDropdownState] = useState({ data: currencyDropdownInitial, visibility: false });
  const [symbol, setSymbol] = useState(getSymbol(currencyDropdownInitial[0].id.toUpperCase()));

  function handleAccountsDropdown(id) {
    // Update state
    setAccountsDropdownState((prev) => {
      const newData = prev.data.map((item) => (item.id === id ? { ...item, active: true } : { ...item, active: false }));
      const newVisibility = !prev.visibility;
      return { data: newData, visibility: newVisibility };
    });
    // Actions
    // setPeriod(id);
  }

  function handleCurrencyDropdown(id) {
    console.log(id);

    // Update state
    setCurrencyDropdownState((prev) => {
      const newData = prev.data.map((item) => (item.id === id ? { ...item, active: true } : { ...item, active: false }));
      const newVisibility = !prev.visibility;
      return { data: newData, visibility: newVisibility };
    });
    // Actions
    // setPeriod(id);
    setSymbol(getSymbol(id.toUpperCase()));
  }

  function toggleAccountsDropdown() {
    setAccountsDropdownState((prev) => {
      return { data: prev.data, visibility: !prev.visibility };
    });
  }

  function toggleCurrencyDropdown() {
    setCurrencyDropdownState((prev) => {
      return { data: prev.data, visibility: !prev.visibility };
    });
  }

  //   function getSymbolOfSelected(){
  //     const symbol = currencyDropdownState.data.find(item => item.id ===)
  //   }

  return (
    <>
      <div className={classes.transfer_from_container}>
        <div className={classes.amout_container}>
          <div className={classes.label}>Amount</div>
          <div className={classes.input}>
            <span className={classes.symbol}>{symbol}</span>
            <input className={classes.amount_input} type="number" placeholder="0.00" />
            <Dropdown options={currencyDropdownState} toggle={toggleCurrencyDropdown} />
          </div>
        </div>

        <div className={classes.from_container}>
          <div className={classes.label}>Transfer From</div>
          <div className={classes.input}>
            <Dropdown options={accountsDropdownState} toggle={toggleAccountsDropdown} />
          </div>
        </div>
      </div>
      <div className={classes.arrow_inside}>
        <RiArrowDownLine />
      </div>
      <div className={classes.transfer_to_container}>sad</div>
    </>
  );
}
