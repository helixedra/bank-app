import getSymbol from "../../utils/getSymbol";
import AccountIcon from "./AccountIcon";
import { RiCheckboxBlankCircleFill, RiCheckboxCircleFill } from "@remixicon/react";
import TotalBalance from "./TotalBalance";
import "./AccountListModal.scss";
import Button from "../shared/Button";

export default function AccountsListModal({ accounts, active, handler }) {
  function isActive(id) {
    if (active.id === id) {
      return (
        <span className="checkbox_fill">
          <RiCheckboxCircleFill />
        </span>
      );
    } else {
      return (
        <span className="checkbox_blank">
          <RiCheckboxBlankCircleFill />
        </span>
      );
    }
  }

  const accountsList = accounts.map((account) => {
    return (
      <div className="accounts_list__item" key={account.id} onClick={() => handler(account.account_id)}>
        <div className="accounts_list__item__container">
          <div className="accounts_list__item__checkbox">{isActive(account.account_id)}</div>
          <div className="accounts_list__item__icon">
            <AccountIcon accounts={accounts} current={account.currency.toLowerCase()} />
          </div>
          <div className="accounts_list__item__name">{account.currency}</div>
        </div>
        <div className="accounts_list__item__amount">
          {getSymbol(account.currency)}
          {account.balance}
        </div>
      </div>
    );
  });
  const allAccountsItem = (
    <div className="accounts_list__item" onClick={() => handler("all-accounts")}>
      <div className="accounts_list__item__container">
        <div className="accounts_list__item__checkbox">{isActive("all-accounts")}</div>
        <div className="accounts_list__item__icon">
          <span className="icon_stack">
            <AccountIcon accounts={accounts} />
          </span>
        </div>
        <div className="accounts_list__item__name">All</div>
      </div>
      <div className="accounts_list__item__amount">
        {getSymbol("USD")}
        <TotalBalance accounts={accounts} />
      </div>
    </div>
  );

  return (
    <div>
      <div className="accounts_list__container">
        <div className="accounts_list">
          {accountsList}
          {allAccountsItem}
        </div>
        <Button style={"secondary"} width={"100%"}>
          New Account
        </Button>
      </div>
    </div>
  );
}
