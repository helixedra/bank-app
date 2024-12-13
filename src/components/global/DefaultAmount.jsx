import getSymbol from "../../utils/getSymbol";
import "./../transactions/TransactionsShortList";

// DefaultAmount Component
function DefaultAmount({ type, currency, amount }) {
  const formattedAmount = amount.toLocaleString(undefined, { maximumFractionDigits: 2 });
  const symbol = getSymbol(currency);
  return (
    <>
      {type === "expense" && <span className="type_expense">{`- ${symbol} ${formattedAmount}`}</span>}
      {type === "income" && <span className="type_income">{`+ ${symbol} ${formattedAmount}`}</span>}
    </>
  );
}
export default DefaultAmount;
