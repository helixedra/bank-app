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

  const modalsStateInitial = {
    accounts: false,
    transfer: false,
    request: false,
    exchange: false,
    more: false,
  };

  const [modalsState, setModalsState] = useState(modalsStateInitial);

  function toggleModal(modal) {
    setModalsState((prev) => ({ ...prev, [modal]: !prev[modal] }));
  }

  function handleAccountsModal(id = false) {
    setSelectedAccount(id ? accountItemsInitial.filter((account) => account.id === id)[0] : accountItemsInitial.filter((account) => account.id === "all-accounts")[0]);
    toggleModal("accounts");
  }

  // function handleAccountButtons(action) {}

  return (
    <>
      <div className="accounts">
        <AccountsHeader account={selectedAccount} action={() => toggleModal("accounts")} />
        <AccountsAmount userdata={userdata} selectedAccount={selectedAccount.id} selectedAccountName={selectedAccount.name} />
        <AccountsButtons>
          <IconButton icon={<RiArrowUpLine />} style="primary" text={"Request"} action={() => toggleModal("request")} />
          <IconButton icon={<RiArrowDownLine />} style="primary" text={"Transfer"} action={() => toggleModal("transfer")} />
          <IconButton icon={<RiArrowLeftRightLine />} style="primary" text={"Exchange"} action={() => toggleModal("exchange")} />
          <IconButton icon={<RiMoreFill />} style="primary" text={"More"} action={() => toggleModal("more")} />
        </AccountsButtons>
      </div>

      <Modal visibility={modalsState.accounts} handler={() => toggleModal("accounts")} title="Accounts">
        <AccountsListModal accounts={userdata.accounts} active={selectedAccount} handler={handleAccountsModal} />
      </Modal>
      <Modal visibility={modalsState.transfer} handler={() => toggleModal("transfer")} title="Transfer"></Modal>
      <Modal visibility={modalsState.request} handler={() => toggleModal("request")} title="Request"></Modal>
      <Modal visibility={modalsState.exchange} handler={() => toggleModal("exchange")} title="Exchange"></Modal>
      <Modal visibility={modalsState.more} handler={() => toggleModal("more")} title="More"></Modal>
    </>
  );
}
