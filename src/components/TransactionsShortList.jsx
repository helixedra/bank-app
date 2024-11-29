import Button from "./Button";
import classes from "./TransactionsShortList.module.scss";
import currencyData from "./../database/currency.json";

const getSymbol = (cur) => {
  const found = currencyData.find((item) => item.currency === cur);
  return found ? found.symbol : null;
};

const exchangeToDefaultCurrency = (
  defaultCurrency = "USD",
  currency,
  amount
) => {
  const selectedCurrency = currencyData.find(
    (item) => item.currency === currency
  );
  const convertedAmount =
    Number(amount) * Number(selectedCurrency.exchange_rate);
  return convertedAmount.toLocaleString(undefined, {
    maximumFractionDigits: 2,
  });
};

function ListItem({
  amount,
  currency,
  timestamp,
  merchant,
  // category,
  type,
  options,
}) {
  // console.log(currency);

  return (
    <div className={classes.list_item}>
      <div
        className={classes.list_item_image}
        style={{
          backgroundImage: `/images/merchant/${merchant.toLowerCase()}.jpg`,
        }}
      ></div>
      <div className={classes.list_item_info}>
        <div>
          <div className={classes.merchant_name}>{merchant}</div>
          <div className={classes.transaction_date}>{timestamp}</div>
        </div>
        <div>
          <div className={classes.transaction_amount_currency}>
            {type === "expense" ? (
              <span className={classes.type_expense}>
                -{getSymbol(currency)}{" "}
                {amount.toLocaleString(undefined, {
                  maximumFractionDigits: 2,
                })}
              </span>
            ) : (
              <span className={classes.type_income}>
                +{getSymbol(currency)}{" "}
                {amount.toLocaleString(undefined, {
                  maximumFractionDigits: 2,
                })}
              </span>
            )}
          </div>
          <div className={classes.transaction_amount_main_currency}>
            {options.base_currency !== currency &&
              `${type === "expense" ? "-" : "+"}${getSymbol(
                currency
              )} ${exchangeToDefaultCurrency(
                options.base_currency,
                currency,
                amount
              )}`}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TransactionsShortList({ data, options }) {
  // console.log(data);

  //..
  const transactions = data.slice(0, 5).map((item) => {
    return <ListItem key={item.id} {...item} options={options} />;
  });

  return (
    <div className={`${classes.transactions} col-8 p-6 transactions_shortlist`}>
      <div className={classes.transactions_header}>
        <div className={classes.transactions_header_title}>
          Recent transactions
        </div>
        <div className={classes.transactions_header_actions}>
          <Button type="secondary">More</Button>
        </div>
      </div>

      <div className={classes.transactions_content}>{transactions}</div>
    </div>
  );
}
