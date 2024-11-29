import classes from "./CreditCard.module.scss";
import { useState } from "react";
import { RiFileCopyLine } from "@remixicon/react";

export default function CreditCard({ card }) {
  console.log(card.card_id);

  const [copySuccess, setCopySuccess] = useState(false);
  const [fronSide, setFrontSide] = useState(true);
  const [isTurned, setIsTurned] = useState(false);

  const handleCopy = (e) => {
    e.stopPropagation();
    navigator.clipboard
      .writeText(card.card_number)
      .then(() => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 4000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const handleCardTurn = () => {
    // console.log(cardRef.current.classList);
    setIsTurned((prev) => !prev);
    // cardRef.current.classList.add("card_turn");
    setTimeout(() => {
      setFrontSide((prev) => !prev);
      setIsTurned((prev) => !prev);
    }, 250);
  };

  const formatedNumber = (number) => number.replace(/(.{4})/g, "$1 ");

  return (
    <>
      <div className={classes.card_container}>
        {fronSide && (
          <div
            className={`${classes.card} ${classes[card.card_id]} ${
              isTurned ? classes.turn_card : ""
            }`}
            onClick={handleCardTurn}
          >
            <div className={classes.card_header}>
              <div className="flex items-center">
                <div className={classes.card_pay_logo}></div>
                <div className="ml-4">{card.name}</div>
              </div>
              <div className={classes.card_logo}></div>
            </div>
            <div
              className={classes.card_number}
              onClick={handleCopy}
              title="Click to copy"
            >
              {formatedNumber(card.card_number)}
              <span className={classes.copy_icon}>
                <RiFileCopyLine size={16} />
              </span>
            </div>

            <div className={classes.card_info}>
              <div className={classes.card_info_holder}>
                <div className={classes.card_info_label}>Name</div>
                <div className={classes.card_info_value}>Danzel Washington</div>
              </div>
              <div className={classes.card_info_date}>
                <div className={classes.card_info_label}>Valid thru</div>
                <div className={classes.card_info_value}>{card.valid_date}</div>
              </div>
            </div>
          </div>
        )}

        {!fronSide && (
          <div
            className={`${classes.card} ${classes[card.card_id]} ${
              isTurned ? classes.turn_card : ""
            }`}
            onClick={handleCardTurn}
          >
            <div className={classes.magnet_line}></div>
            <div className={classes.cvv}>
              <div className={classes.cvv_label}>CVV</div>
              <div className={classes.cvv_code}>{card.cvv_code}</div>
            </div>
          </div>
        )}
        {copySuccess && (
          <div className={classes.copy_success}>Number copied</div>
        )}
      </div>
    </>
  );
}
