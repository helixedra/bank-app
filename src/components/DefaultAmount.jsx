import getSymbol from "../utils/getSymbol";
import classes from "./TransactionsShortList.module.scss";

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
export default DefaultAmount;
