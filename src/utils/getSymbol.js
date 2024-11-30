import currencyData from "./../database/currency.json";

const getSymbol = (cur) => {
  const found = currencyData.find((item) => item.currency === cur);
  return found ? found.symbol : null;
};

export default getSymbol;
