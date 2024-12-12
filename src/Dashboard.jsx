//Dashboard.jsx
// import SubHeader from "./components/SubHeader";
// import userdata from "./database/userdata.json";
// import Accounts from "./components/Accounts";
import Accounts from "./components/accounts/Accounts";
import TransactionsShortList from "./components/transactions/TransactionsShortList";

// import PromoSectionsSlider from "./components/PromoSectionsSlider";
// import transactions from "./database/transactions.json";
import { useSelector } from "react-redux";
import Cards from "./components/cards/Cards";
import Analytics from "./components/analytics/Analytics";
import PromoSections from "./components/promo/PromoSection";

export default function Dashboard() {
  const userdata = useSelector((state) => state.userdata);
  const transactions = useSelector((state) => state.transactions);
  return (
    <main>
      {/* <SubHeader data={userdata} /> */}
      <div className="row">
        <Accounts userdata={userdata} />
        <Analytics />
        <Cards cards={userdata.cards} />
      </div>
      <div className="row">
        <TransactionsShortList data={transactions.transactions} options={{ base_currency: userdata.base_currency }} />
        <PromoSections />
      </div>
    </main>
  );
}
