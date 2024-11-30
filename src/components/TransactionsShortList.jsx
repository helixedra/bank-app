import Button from "./Button";
import classes from "./TransactionsShortList.module.scss";
import currencyData from "./../database/currency.json";
import moment from "moment";

// Utilities
const formatDynamicDate = (dateString) => {
  const date = moment(dateString);
  if (date.isSame(moment(), "day")) {
    return date.format("HH:mm");
  }
  if (date.isSame(moment().subtract(1, "days"), "day")) {
    return `Yesterday, ${date.format("HH:mm")}`;
  }
  return date.format("D MMMM, HH:mm");
};

const getSymbol = (cur) => {
  const found = currencyData.find((item) => item.currency === cur);
  return found ? found.symbol : null;
};
const exchangeToDefaultCurrency = (defaultCurrency = "USD", currency, amount) => {
  const selectedCurrency = currencyData.find((item) => item.currency === currency);
  const convertedAmount = Number(amount) * Number(selectedCurrency.exchange_rate);
  return convertedAmount;
};

// DefaultAmount Component
function DefaultAmount({ type, currency, amount }) {
  const formattedAmount = amount.toLocaleString(undefined, { maximumFractionDigits: 2 });
  const symbol = getSymbol(currency);

  return (
    <>
      {type === "expense" && <span className={classes.type_expense}>{`- ${symbol} ${formattedAmount}`}</span>}
      {type === "income" && <span className={classes.type_income}>{`+ ${symbol} ${formattedAmount}`}</span>}
    </>
  );
}

// BaseCurrencyAmount Component
function BaseCurrencyAmount({ options, currency, type, amount }) {
  const symbol = getSymbol("USD");
  // const symbol = getSymbol(currency);
  const convertedAmount = exchangeToDefaultCurrency(options.base_currency, currency, amount);
  const formattedAmount = convertedAmount.toLocaleString(undefined, { maximumFractionDigits: 2 });

  return <>{options.base_currency !== currency && `${type === "expense" ? "-" : "+"} ${symbol} ${formattedAmount}`}</>;
}

// ListItem Component
function ListItem({ amount, currency, timestamp, merchant, merchant_id, type, options }) {
  // console.log(moment(timestamp).calendar());

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

function TransactionsShortList({ data, options }) {
  // console.log(data);

  //..
  const transactions = data.slice(0, 5).map((item) => {
    return <ListItem key={item.id} {...item} options={options} />;
  });

  return (
    <div className={`${classes.transactions} col-8 p-6 transactions_shortlist`}>
      <div className={classes.transactions_header}>
        <div className={classes.transactions_header_title}>Recent transactions</div>
        <div className={classes.transactions_header_actions}>
          <Button type="secondary">More</Button>
        </div>
      </div>

      <div className={classes.transactions_content}>{transactions}</div>
    </div>
  );
}

export default TransactionsShortList;
