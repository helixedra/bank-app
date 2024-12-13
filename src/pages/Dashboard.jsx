//Dashboard.jsx
// import SubHeader from "./components/SubHeader";
// import userdata from "./database/userdata.json";

import TransactionsShortList from "../components/transactions/TransactionsShortList";

// import PromoSectionsSlider from "./components/PromoSectionsSlider";
// import transactions from "./database/transactions.json";
import { useSelector } from "react-redux";
import Accounts from "../components/accounts/Accounts";
import Cards from "../components/cards/Cards";
import Analytics from "../components/analytics/Analytics";
import PromoSections from "../components/promo/PromoSection";

export default function Dashboard() {
  const userdata = useSelector((state) => state.userdata);
  const transactions = useSelector((state) => state.transactions);
  return (
    <main>
      {/* <SubHeader data={userdata} /> */}
      <div className="row">
        <div className="block_container">
          <Accounts userdata={userdata} />
        </div>
        <div className="block_container analytics">
          <Analytics />
        </div>
        <Cards cards={userdata.cards} />
      </div>
      <div className="row">
        <TransactionsShortList data={transactions.transactions} options={{ base_currency: userdata.base_currency }} />
        <PromoSections />
      </div>
    </main>
  );
}
