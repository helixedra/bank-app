//Dashboard.jsx

import { RiArrowRightUpLine, RiArrowLeftDownLine } from "@remixicon/react";
import Button from "./components/Button";

import SubHeader from "./components/SubHeader";
import userdata from "./database/userdata.json";
import Accounts from "./components/Accounts";
import TransactionsShortList from "./components/TransactionsShortList";
import ExpenseGraph from "./components/ExpenseGraph";
import PromoSectionsSlider from "./components/PromoSectionsSlider";
export default function Dashboard() {
  return (
    <main>
      total balance $ 6,348.55 request Transfer Search transaction Transactions
      view all
      <SubHeader data={userdata} />
      <div className="container">
        <div className="row mb-6">
          <Accounts />
          <ExpenseGraph />
        </div>
        <div className="row">
          <TransactionsShortList />
          <PromoSectionsSlider />
        </div>
      </div>
      <Button size="l" type="primary" icon={<RiArrowRightUpLine />}>
        Request
      </Button>
      <Button size="l" type="primary" icon={<RiArrowLeftDownLine />}>
        Transfer
      </Button>
      <Button size="s" type="primary">
        S Primary
      </Button>
      <Button size="m" type="primary">
        M Primary
      </Button>
      <Button size="l" type="primary">
        L Primary
      </Button>
      <Button size="xl" type="primary">
        XL Primary
      </Button>
      <Button size="s" type="secondary">
        S Secondary
      </Button>
      <Button size="m" type="secondary">
        M Secondary
      </Button>
      <Button size="l" type="secondary">
        L Secondary
      </Button>
      <Button size="xl" type="secondary">
        XL Secondary
      </Button>
      <Button size="s" type="additional">
        S Additional
      </Button>
      <Button size="m" type="additional">
        M Additional
      </Button>
      <Button size="l" type="additional">
        L Additional
      </Button>
      <Button size="xl" type="additional">
        XL Additional
      </Button>
    </main>
  );
}
