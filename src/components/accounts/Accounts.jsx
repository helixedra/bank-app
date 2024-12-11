import AccountsButtons from "./AccountsButtons";
import AccountsAmount from "./AccountsAmount";
import AccountsHeader from "./AccountsHeader";
import "./Accounts.scss";
import { useState } from "react";
import AccountIcon from "./AccountIcon";
import Modal from "../shared/Modal";
import AccountsListModal from "./AccountsListModal";
import IconButton from "../shared/IconButton";
import { RiArrowUpLine, RiArrowDownLine, RiArrowLeftRightLine, RiMoreFill } from "@remixicon/react";

export default function Accounts({ userdata }) {
  // console.log(userdata);

  const defaultItem = {
    id: "all-accounts",
    name: "All Accounts",
    icon: <AccountIcon accounts={userdata.accounts} />,
  };

  const accountsItems = userdata.accounts?.map((account) => {
    return {
      id: account.account_id,
      name: account.name,
      icon: <AccountIcon accounts={userdata.accounts} current={account.currency} />,
    };
  });

  const accountItemsInitial = [{ ...defaultItem }, ...accountsItems];

  const [selectedAccount, setSelectedAccount] = useState(accountItemsInitial.filter((account) => account.id === "all-accounts")[0]);

  const [accountsModal, setAccountsModal] = useState(false);

  function toggleAccountsModal() {
    setAccountsModal((prev) => !prev);
  }

  function handleAccountsModal(id = false) {
    setSelectedAccount(id ? accountItemsInitial.filter((account) => account.id === id)[0] : accountItemsInitial.filter((account) => account.id === "all-accounts")[0]);
    toggleAccountsModal();
  }

  return (
    <>
      <div className="card_container">
        <div className="accounts">
          <AccountsHeader account={selectedAccount} action={toggleAccountsModal} />
          <AccountsAmount userdata={userdata} selectedAccount={selectedAccount.id} selectedAccountName={selectedAccount.name} />
          <AccountsButtons>
            <IconButton icon={<RiArrowUpLine />} style="primary" text={"Request"} action={""} />
            <IconButton icon={<RiArrowDownLine />} style="primary" text={"Transfer"} action={""} />
            <IconButton icon={<RiArrowLeftRightLine />} style="primary" text={"Exchange"} action={""} />
            <IconButton icon={<RiMoreFill />} style="primary" text={"More"} action={""} />
          </AccountsButtons>
        </div>
      </div>
      <Modal visibility={accountsModal} handler={toggleAccountsModal} title="Accounts">
        <AccountsListModal accounts={userdata.accounts} active={selectedAccount} handler={handleAccountsModal} />
      </Modal>
    </>
  );
}
