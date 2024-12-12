import ButtonLink from "../shared/ButtonLink";
import "./TransactionsShortList.scss";
import { formatDynamicDate } from "../../utils/formatDynamicDate";
import DefaultAmount from "../DefaultAmount";
import BaseCurrencyAmount from "../BaseCurrencyAmount";
import { useCallback, useEffect, useState } from "react";

// ListItem Component
function ListItem({ amount, currency, timestamp, merchant, merchant_id, type, options }) {
  return (
    <div className="transactions_shortlist__list_item">
      <div
        className="transactions_shortlist__list_item__image"
        style={{
          backgroundImage: `url('/images/merchant/${merchant_id}.png')`,
        }}
      ></div>
      <div className="transactions_shortlist__list_item__info">
        <div>
          <div className="transactions_shortlist__list_item__info__merchant_name">{merchant}</div>
          <div className="transactions_shortlist__list_item__info__transaction_date">{formatDynamicDate(timestamp)}</div>
        </div>
        <div>
          <div className="transactions_shortlist__list_item__info__amount_currency">
            <DefaultAmount type={type} amount={amount} currency={currency} />
          </div>
          <div className="transactions_shortlist__list_item__info__amount_main_currency">
            <BaseCurrencyAmount options={options} currency={currency} type={type} amount={amount} />
          </div>
        </div>
      </div>
    </div>
  );
}

// TransactionsShortList Component
function TransactionsShortList({ data, options }) {
  const [delayedData, setDelayedData] = useState(data);

  // Sort transactions by date
  const sortedTransactionsByDate = useCallback(() => {
    return [...delayedData].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
  }, [delayedData]);

  // Update delayedData with a 5-second delay when data changes
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDelayedData(data);
    }, 5000); // 5-second delay

    return () => clearTimeout(timeoutId); // Cleanup timeout on component unmount or data change
  }, [data]);

  const transactions = sortedTransactionsByDate()
    .slice(0, 5)
    .map((item) => {
      return <ListItem key={item.id} {...item} options={options} />;
    });

  return (
    <div className="block_container transactions_shortlist">
      <div className="transactions_shortlist__header">
        <div className="block_title">Recent transactions</div>
        <div className="transactions_shortlist__header__actions">
          <ButtonLink style="secondary" link={"/transactions"}>
            View More
          </ButtonLink>
        </div>
      </div>

      <div className="transactions_shortlist__content">{transactions}</div>
    </div>
  );
}

export default TransactionsShortList;
