import ButtonLink from "./ButtonLink";
import classes from "./TransactionsShortList.module.scss";
import { formatDynamicDate } from "../utils/formatDynamicDate";
// import getSymbol from "../utils/getSymbol";
// import exchangeToDefaultCurrency from "../utils/exchangeToDefaultCurrency";
import DefaultAmount from "./DefaultAmount";
import BaseCurrencyAmount from "./BaseCurrencyAmount";

// ListItem Component
function ListItem({ amount, currency, timestamp, merchant, merchant_id, type, options }) {
  return (
    <div className={classes.list_item}>
      <div
        className={classes.list_item_image}
        style={{
          backgroundImage: `url('/images/merchant/${merchant_id}.png')`,
        }}
      ></div>
      <div className={classes.list_item_info}>
        <div>
          <div className={classes.merchant_name}>{merchant}</div>
          <div className={classes.transaction_date}>{formatDynamicDate(timestamp)}</div>
        </div>
        <div>
          <div className={classes.transaction_amount_currency}>
            <DefaultAmount type={type} amount={amount} currency={currency} />
          </div>
          <div className={classes.transaction_amount_main_currency}>
            <BaseCurrencyAmount options={options} currency={currency} type={type} amount={amount} />
          </div>
        </div>
      </div>
    </div>
  );
}

// TransactionsShortList Component
function TransactionsShortList({ data, options }) {
  const transactions = data.slice(0, 5).map((item) => {
    return <ListItem key={item.id} {...item} options={options} />;
  });

  return (
    <div className={`${classes.transactions} col-8 p-6 transactions_shortlist`}>
      <div className={classes.transactions_header}>
        <h2>Recent transactions</h2>
        <div className={classes.transactions_header_actions}>
          <ButtonLink type="secondary" to={"/transactions"}>
            View More
          </ButtonLink>
        </div>
      </div>

      <div className={classes.transactions_content}>{transactions}</div>
    </div>
  );
}

export default TransactionsShortList;
