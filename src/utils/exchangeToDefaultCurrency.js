import currencyData from "./../database/currency.json";

const exchangeToDefaultCurrency = (defaultCurrency = "USD", currency, amount) => {
  const selectedCurrency = currencyData.find((item) => item.currency === currency);
  const convertedAmount = Number(amount) * Number(selectedCurrency.exchange_rate);
  return convertedAmount;
};
export default exchangeToDefaultCurrency;
