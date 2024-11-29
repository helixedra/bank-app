import { useState, useRef } from "react";
import {
  RiArrowRightUpLine,
  RiArrowLeftDownLine,
  RiArrowRightLine,
  RiArrowLeftLine,
} from "@remixicon/react";
import Button from "./Button";
import Segment from "./Segment";
import ImageIcon from "./ImageIcon";
import CreditCard from "./CreditCard";
import AccountInfo from "./AccountInfo";
import userdata from "./../database/userdata.json";
import "./Accounts.scss";
export default function Accounts() {
  const cardSliderRef = useRef();

  const creditCards = userdata.cards.map((card) => {
    return <CreditCard key={card.id} card={card} />;
  });

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
  const [userAccount, setUserAccount] = useState("all-accounts");

  function handleAccountSegment(event, id) {
    const newState = accountSegment.map((segment) => {
      return segment.id === id
        ? { ...segment, active: true }
        : { ...segment, active: false };
    });

    setAccountSegment(newState);
    setUserAccount(id);
  }

  const handleSlider = (move) => {
    const padding = 16;
    const slider = cardSliderRef.current;
    const slides = slider.childElementCount;
    const sliderWidth = slides * 308 + slides * padding;
    // const sliderWidth = slider.offsetWidth - 40;
    // const step = parseFloat((sliderWidth / slides).toFixed(1));
    const step = 300 + padding;
    const maxTranslateX = Math.min(0, step - sliderWidth);

    let position = Number(slider.getAttribute("data-position"));

    if (move === "left") {
      position = Math.min(position + step, 0);
    } else {
      position = Math.max(position - step, maxTranslateX);
    }

    slider.style = `transform: translateX(${position}px)`;
    slider.setAttribute("data-position", position);
  };

  return (
    <div className="col-8 accounts_container p-6">
      <Segment
        buttons={accountSegment}
        handler={handleAccountSegment}
        size="l"
        type="primary"
      />

      <div className="account_container flex justify-between">
        <AccountInfo userdata={userdata} state={userAccount} />
        <div className="credit_cards_container">
          <div className="slider_buttons">
            <button onClick={() => handleSlider("left")}>
              <RiArrowLeftLine />
            </button>
            <button onClick={() => handleSlider("right")}>
              <RiArrowRightLine />
            </button>
          </div>
          <div className="cards" data-position="0" ref={cardSliderRef}>
            {creditCards}
          </div>
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
