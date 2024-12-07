import Button from "./components/Button";
import { RiPieChartLine, RiSearchLine, RiEqualizer2Line, RiExportLine, RiTimeFill, RiCheckDoubleLine, RiCloseCircleFill } from "@remixicon/react";
import classes from "./Transactions.module.scss";
import SearchInput from "./components/SearchInput";
import userdata from "./database/userdata.json";
import { getTime, getDateFormatted } from "./utils/formatDynamicDate";
import BaseCurrencyAmount from "./components/BaseCurrencyAmount";
import DefaultAmount from "./components/DefaultAmount";
import { useParams } from "react-router-dom";
import PaginationControls from "./components/PaginationControls";
import { useSelector } from "react-redux";
import { useCallback, useState } from "react";

export default function Transactions() {
  const transactionsDataInitial = useSelector((state) => state.transactions); // Get Transactions

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

  return (
    <main>
      <div className={classes.transactions}>
        <div className={classes.transactions_header}>
          <div>
            {/* <Button type="secondary" icon={<RiPieChartLine />}>
              Chart
            </Button> */}
            <SearchInput icon={<RiSearchLine />} placeholder="Search" value={searchQuery} handler={handleSearch} name="search" />
          </div>
          <div>
            <Button type="secondary" icon={<RiEqualizer2Line />}>
              Filter
            </Button>
            <Button type="secondary" icon={<RiExportLine />}>
              Export
            </Button>
          </div>
        </div>
        <div className={classes.transactions_table}>{paginatedData.length === 0 ? <div className={classes.empty_state}>Nothing to display</div> : paginatedData}</div>
        <div className={classes.transactions_footer}>
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
    <div className={classes.transation_item}>
      <div className="flex">
        <div
          className={classes.image}
          style={{
            backgroundImage: `url('/images/merchant/${merchant_id}.png')`,
          }}
        ></div>
        <div className={classes.info}>
          <div className={classes.main_info}>{merchant}</div>
          <div className={classes.additional_info}>{category}</div>
        </div>
      </div>

      <div className={classes.date}>
        <div className={classes.main_info}>{getDateFormatted(timestamp)}</div>
        <div className={classes.additional_info}>at {getTime(timestamp)}</div>
      </div>

      <div className={classes.status}>
        <Status status={status} />
      </div>

      <div className={classes.amount}>
        <div className={classes.main_info}>
          <DefaultAmount type={type} amount={amount} currency={currency} />
        </div>
        <div className={classes.additional_info}>
          <BaseCurrencyAmount options={options} currency={currency} type={type} amount={amount} />
        </div>
      </div>
    </div>
  );
}

//Status component
function Status({ status }) {
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
    <span className={`${classes.status_item} ${classes[status]}`}>
      {statusData[status].icon} {statusData[status].name}
    </span>
  );
}
