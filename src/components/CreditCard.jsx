import classes from "./CreditCard.module.scss";
export default function CreditCard() {
  return (
    <div className={classes.card}>
      <div className={classes.card_header}>
        <div className={classes.card_pay_logo}></div>
        <div className={classes.card_logo}></div>
      </div>
      <div className={classes.card_number}>9811 9533 2725 9097</div>
      <div className={classes.card_info}>
        <div className={classes.card_info_holder}>
          <div className={classes.card_info_label}>Name</div>
          <div className={classes.card_info_value}>Danzel Washinghton</div>
        </div>
        <div className={classes.card_info_date}>
          <div className={classes.card_info_label}>Valid thru</div>
          <div className={classes.card_info_value}>09/29</div>
        </div>
      </div>
    </div>
  );
}
