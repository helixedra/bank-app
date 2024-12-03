import { useState } from "react";
import classes from "./TransferModal.module.scss";
import { RiArrowDownLine, RiContactsBookLine, RiBankLine, RiBankCardLine, RiMoreFill, RiArrowRightLine } from "@remixicon/react";
import Dropdown from "./Dropdown";
import ImageIcon from "./ImageIcon";
import Segment from "./Segment";
import userdata from "./../database/userdata.json";
import getSymbol from "../utils/getSymbol";
import Button from "./Button";
import contacts from "./../database/contacts.json";
import countries from "./../database/countries.json";
import Input from "./Input";
import { v4 as uuidv4 } from "uuid";
import { toast, Bounce } from "react-toastify";
import { useDispatch } from "react-redux";
import { addTransaction } from "./../store/transactionsSlice";
import { updateBalance } from "../store/userSlice";

export default function TransferModal({ handler }) {
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
    handleForm(id, "transfer_from");
  }

  function handleCurrencyDropdown(id) {
    // console.log(id);

    // Update state
    setCurrencyDropdownState((prev) => {
      const newData = prev.data.map((item) => (item.id === id ? { ...item, active: true } : { ...item, active: false }));
      const newVisibility = !prev.visibility;
      return { data: newData, visibility: newVisibility };
    });
    // Actions
    // setPeriod(id);
    setSymbol(getSymbol(id.toUpperCase()));
    handleForm(id.toUpperCase(), "currency");
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

  const recipientSegmentData = [
    {
      id: "contacts",
      name: "My Contacts",
      icon: <RiContactsBookLine />,
      active: true,
    },
    {
      id: "bank",
      name: "Bank Recipient",
      icon: <RiBankLine />,
      active: false,
    },
    {
      id: "card",
      name: "Card Recipient",
      icon: <RiBankCardLine />,
      active: false,
    },
  ];

  const recipientComponents = {
    contacts: <ContactsRecipient />,
    bank: <BankRecipient />,
    card: <CardRecipient />,
  };

  const [recipientSegment, setRecipientSegment] = useState(recipientSegmentData);
  const [recipient, setRecipient] = useState(recipientComponents.contacts);

  function handleRecipientSegment(event, id) {
    const newState = recipientSegment.map((segment) => {
      return segment.id === id ? { ...segment, active: true } : { ...segment, active: false };
    });

    setRecipientSegment(newState);
    setRecipient(recipientComponents[id]);
    console.log(id);
  }

  const initialFormData = {
    amount: "",
    transfer_from: "usd-account",
    transfer_to: "contacts",
    id: uuidv4(),
    currency: "USD",
    timestamp: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  function handleForm(value, type) {
    if (type === "amount") {
      value = value.replace(/[^0-9.]/g, "");
      // value = parseFloat(value).toFixed(2);
    }

    setFormData((prev) => {
      return {
        ...prev,
        [type]: value,
      };
    });
    setTimestamp();
  }

  function setTimestamp() {
    const currentDateTime = new Date().toISOString();

    setFormData((prev) => {
      return {
        ...prev,
        timestamp: currentDateTime,
      };
    });
  }

  function validateForm() {
    if (formData.amount !== "" && formData.timestamp !== "") {
      if (parseFloat(formData.amount).toFixed(2) > 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  function clearForm() {
    setFormData(initialFormData);
  }
  // const notify = () => toast("Wow so easy!");

  const dispatch = useDispatch();

  function submitForm() {
    // console.log(formData);
    if (validateForm()) {
      // toast("Transfer successfully sent!");
      toast.success("Transfer successfully sent!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        // draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });

      insertNewTransaction();
      handler();
      clearForm();
    } else {
      toast.error("ERROR: Incorrect data entered", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        // draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      // console.log("Error");
    }
  }

  function insertNewTransaction() {
    const preparedTransation = {
      id: formData.id,
      amount: parseFloat(formData.amount).toFixed(2),
      currency: formData.currency,
      timestamp: formData.timestamp,
      merchant: "Bank Transfer",
      merchant_id: "default",
      category: "Transfer",
      type: "expense",
      status: "pending",
    };

    dispatch(addTransaction(preparedTransation));
    dispatch(updateBalance({ account: formData.transfer_from, currency: formData.currency, amount: preparedTransation.amount }));
  }

  // useEffect(() => {
  //   console.log(formData);
  // }, [formData]);

  return (
    <>
      <div className={classes.transfer_from_container}>
        <div className={classes.amout_container}>
          <div className={classes.label}>Amount</div>
          <div className={classes.input}>
            <span className={classes.symbol}>{symbol}</span>
            <input className={classes.amount_input} type="number" placeholder="0.00" value={formData.amount} onChange={(e) => handleForm(e.target.value, "amount")} />
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
      <div className={classes.transfer_to_container}>
        <div className={classes.amout_container}>
          <div className={classes.label}>Transfer To</div>
          <div className="pt-6">
            <Segment buttons={recipientSegment} handler={handleRecipientSegment} size="l" type="primary" />
          </div>
          <div>{recipient}</div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-6">
        <Button size="l" type="secondary" action={handler}>
          Cancel
        </Button>
        <Button size="l" type="primary" after={<RiArrowRightLine />} action={submitForm}>
          Continue
        </Button>
      </div>
    </>
  );
}

function ContactsRecipient() {
  const myContacts = contacts.slice(0, 6).map((contact) => {
    return (
      <div className={classes.contact_item} key={contact.id} onClick={() => alert()}>
        <div className={classes.contact_item_userpic} style={{ backgroundImage: `url('${contact.userpic}')` }}></div>
        <div className={classes.contact_item_name}>{contact.name}</div>
      </div>
    );
  });
  const moreButton = (
    <div className={classes.contact_item} key={"more-button"} onClick={() => alert("more")}>
      <div className={classes.contact_item_more}>
        <RiMoreFill />
      </div>
      <div className={classes.contact_item_name}>More</div>
    </div>
  );

  return (
    <div className={classes.contacts}>
      {myContacts}
      {moreButton}
    </div>
  );
}
function BankRecipient() {
  const [bankRecipient, setBankRecipient] = useState({ first_name: "", last_name: "" });

  function handleBankRecipient(value, name) {
    setBankRecipient((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  const countriesDropdownData = countries.map((item) => {
    return {
      ...item,
      name: item.country,
      action: () => handleCountriesDropdown(item.id),
      active: false,
    };
  });

  const countriesDropdownDataInitial = [{ id: 0, name: "Select country", action: () => handleCountriesDropdown(0), active: true }, ...countriesDropdownData];

  const [countriesDropdown, setCountriesDropdown] = useState({ data: countriesDropdownDataInitial, visibility: false });

  function handleCountriesDropdown(id) {
    setCountriesDropdown((prev) => {
      const newData = prev.data.map((item) => (item.id === id ? { ...item, active: true } : { ...item, active: false }));
      const newVisibility = !prev.visibility;
      return { data: newData, visibility: newVisibility };
    });
    // Actions
  }

  function toggleCountriesDropdown() {
    setCountriesDropdown((prev) => {
      return { data: prev.data, visibility: !prev.visibility };
    });
  }

  return (
    <div className={classes.bank_form_container}>
      <div>
        <Dropdown options={countriesDropdown} toggle={toggleCountriesDropdown} listHeight={200} label="Country" />
        <Input label="Account Number" placeholder="AB 0000 0000 0000 0000 0000 0000" />
      </div>
      <div>
        <Input label="First Name" value={bankRecipient.first_name} handler={handleBankRecipient} name="first_name" />
        <Input label="Last Name" value={bankRecipient.last_name} handler={handleBankRecipient} name="last_name" />
      </div>
    </div>
  );
}

function CardRecipient() {
  return (
    <div className={classes.bank_form_container}>
      <div>
        <Input type="number" label="Card Number" placeholder="0000 0000 0000 0000" />
      </div>
      <div>
        <Input label="First Name" />
        <Input label="Last Name" />
      </div>
    </div>
  );
}
