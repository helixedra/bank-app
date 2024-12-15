import { useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "./../components/shared/Button";
import "./Transactions.scss";
import SearchInput from "./../components/shared/SearchInput";
import { getTime, getDateFormatted } from "./../utils/formatDynamicDate";
import BaseCurrencyAmount from "./../components/global/BaseCurrencyAmount";
import DefaultAmount from "./../components/global/DefaultAmount";
import PaginationControls from "./../components/shared/PaginationControls";
import IconButton from "./../components/shared/IconButton";
import { RiPieChartLine, RiSearchLine, RiEqualizer2Line, RiExportLine, RiTimeFill, RiCheckDoubleLine, RiCloseCircleFill, RiCloseLargeLine } from "@remixicon/react";

// import IconButton from "./IconButton";

export default function Transactions() {
  const transactionsDataInitial = useSelector((state) => state.transactions); // Get Transactions
  const userdata = useSelector((state) => state.userdata);

  const [transactionsData, setTransactionsData] = useState(transactionsDataInitial.transactions); // Transactions in state

  const [searchQuery, setSearchQuery] = useState(""); // Search query

  // Search handler
  function handleSearch(value, name) {
    //Reset search
    if (value === "") {
      setSearchQuery("");
      return setTransactionsData(transactionsDataInitial.transactions);
    }

    // Filter by search query
    if (name === "search") {
      setSearchQuery(value);
      const searchResult = transactionsData?.filter((item) => item.merchant.toLowerCase().includes(value.toLowerCase()));
      setTransactionsData(searchResult);
    }
  }

  // Sort Transactions by date
  const sortedTransactionsByDate = useCallback(() => {
    return [...transactionsData].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
  }, [transactionsData]);

  // Pagination
  const { page } = useParams();
  const currentPage = parseInt(page, 10) || 1;
  const itemsPerPage = 10;
  const transactions = sortedTransactionsByDate().map((item) => {
    return <TransactionItem data={item} key={item.id} options={{ base_currency: userdata.base_currency }} />;
  });
  const paginatedData = transactions.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const [searchMobile, setSearchMobile] = useState(false);

  return (
    <main>
      <div className="block_container transactions">
        <div className="transactions__header">
          <div className="transactions__header__left_side">
            {/* <Button type="secondary" icon={<RiPieChartLine />}>
              Chart
            </Button> */}
            <div className="transactions__search">
              <div className="transactions__search__desktop">
                <SearchInput placeholder="Search" value={searchQuery} handler={handleSearch} name="search" />
              </div>

              <div className="transactions__search__mobile">
                {!searchMobile && <IconButton style="secondary" className="search_mobile__container__search_icon" icon={<RiSearchLine />} action={() => setSearchMobile((prev) => !prev)} />}

                <div className={`transactions__search__mobile__input_container ${!searchMobile ? "hidden" : ""}`}>
                  <SearchInput className="mobile_search_input" placeholder="Search" value={searchQuery} handler={handleSearch} name="search" />
                  <IconButton className="search_mobile__container__close" style={"secondary"} icon={<RiCloseLargeLine />} action={() => setSearchMobile((prev) => !prev)} />
                </div>
              </div>
            </div>
          </div>
          <div className={`transactions__header__right_side ${searchMobile ? "hidden" : ""}`}>
            <Button style="secondary" icon={<RiEqualizer2Line />}>
              Filter
            </Button>
            <Button style="secondary" icon={<RiExportLine />}>
              Export
            </Button>
          </div>
        </div>
        <div className="transactions__table">{paginatedData.length === 0 ? <div className="empty_state">Nothing to display</div> : paginatedData}</div>
        <div className="transactions__footer">
          <div>
            <PaginationControls currentPage={currentPage} totalItems={transactions.length} itemsPerPage={itemsPerPage} parentUrl={"/transactions"} />
          </div>
        </div>
      </div>
    </main>
  );
}

// TransactionItem component
function TransactionItem({ data, options }) {
  const { amount, currency, category, timestamp, merchant, merchant_id, type, status } = data;

  return (
    <div className="transaction_item">
      <div className="transaction_item__main">
        <div
          className="transaction_item__main__image"
          style={{
            backgroundImage: `url('/images/merchant/${merchant_id}.png')`,
          }}
        ></div>
        <div className="transaction_item__main__info">
          <div className="transaction_item__main__info__title">{merchant}</div>
          <div className="transaction_item__main__info__additional">
            <span className="transaction_item__category">{category}</span>
            <span className="transaction_item__bullet">&bull;</span>
            <span className="transaction_item__datetime_mobile">
              {getDateFormatted(timestamp)}, {getTime(timestamp)}
            </span>
          </div>
        </div>
      </div>

      <div className="transaction_item__date">
        <div className="transaction_item__date__date">{getDateFormatted(timestamp)}</div>
        <div className="transaction_item__date__time">at {getTime(timestamp)}</div>
      </div>

      <div className="transaction_item__status">
        <div className="status_container">
          <div className="transaction_item__status__item">
            <Status status={status} />
          </div>
        </div>
      </div>

      <div className="transaction_item__amount">
        <div className="transaction_item__amount__main">
          <DefaultAmount type={type} amount={amount} currency={currency} />
        </div>
        <div className="transaction_item__amount__additional">
          <BaseCurrencyAmount options={options} currency={currency} type={type} amount={amount} />
        </div>

        <span className="transaction_item__status_mobile">
          <Status status={status} type="mobile" />
        </span>
      </div>
    </div>
  );
}

//Status component
function Status({ status, type = "desktop" }) {
  const statusData = {
    pending: {
      name: "Pending",
      icon: <RiTimeFill />,
    },
    completed: {
      name: "Completed",
      icon: <RiCheckDoubleLine />,
    },
    rejected: {
      name: "Rejected",
      icon: <RiCloseCircleFill />,
    },
  };

  return (
    <>
      {type === "mobile" ? (
        <div title={statusData[status].name} className={`${status}`}>
          {statusData[status].name}
        </div>
      ) : (
        <div title={statusData[status].name} className={`transaction_item__status__item ${status}`}>
          {statusData[status].icon} {statusData[status].name}
        </div>
      )}
    </>
  );
}
