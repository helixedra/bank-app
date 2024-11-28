import { useState } from "react";
import Segment from "./Segment";
import ImageIcon from "./ImageIcon";
import CreditCard from "./CreditCard";
export default function Accounts() {
  const accountSegmentData = [
    {
      id: "all-accounts",
      name: "All Accounts",
      icon: null,
      active: true,
    },
    {
      id: "usd-account",
      name: "USD",
      icon: (
        <ImageIcon
          image="/images/us-flag.png"
          size={{ width: "24px", height: "24px" }}
          title="USD Account"
        />
      ),
      active: false,
    },
    {
      id: "eur-account",
      name: "EUR",
      icon: (
        <ImageIcon
          image="/images/eu-flag.png"
          size={{ width: "24px", height: "24px" }}
          title="EUR Account"
        />
      ),
      active: false,
    },
  ];

  const [accountSegment, setAccountSegment] = useState(accountSegmentData);

  function handleAccountSegment(event, id) {
    const newState = accountSegment.map((segment) => {
      return segment.id === id
        ? { ...segment, active: true }
        : { ...segment, active: false };
    });

    setAccountSegment(newState);
  }
  return (
    <div className="col-8 accounts_container p-6">
      <Segment
        buttons={accountSegment}
        handler={handleAccountSegment}
        size="l"
        type="primary"
      />
      <CreditCard />
    </div>
  );
}
