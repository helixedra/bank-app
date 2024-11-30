//Dashboard.jsx

// import Button from "./components/Button";

import SubHeader from "./components/SubHeader";
import userdata from "./database/userdata.json";
import Accounts from "./components/Accounts";
import TransactionsShortList from "./components/TransactionsShortList";
import ExpenseGraph from "./components/ExpenseGraph";
import PromoSectionsSlider from "./components/PromoSectionsSlider";
import transactions from "./database/transactions.json";

// if(userdata) {
//   const transations.
// }

export default function Dashboard() {
  return (
    <main>
      <SubHeader data={userdata} />
      <div className="container">
        <div className="row mb-6">
          <Accounts />
          <ExpenseGraph />
        </div>
        <div className="row">
          <TransactionsShortList data={transactions.transactions} options={{ base_currency: userdata.base_currency }} />
          <PromoSectionsSlider />
        </div>
      </div>
    </main>
  );
}
