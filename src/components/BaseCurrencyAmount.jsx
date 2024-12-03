import getSymbol from "../utils/getSymbol";
import exchangeToDefaultCurrency from "../utils/exchangeToDefaultCurrency";

// BaseCurrencyAmount Component
function BaseCurrencyAmount({ options, currency, type, amount }) {
  const symbol = getSymbol("USD");
  // const symbol = getSymbol(currency);
  const convertedAmount = exchangeToDefaultCurrency(options.base_currency, currency, amount);
  const formattedAmount = convertedAmount.toLocaleString(undefined, { maximumFractionDigits: 2 });
  return <>{options.base_currency !== currency && `${type === "expense" ? "-" : "+"} ${symbol} ${formattedAmount}`}</>;
}

export default BaseCurrencyAmount;
