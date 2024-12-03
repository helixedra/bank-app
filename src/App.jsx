import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Dashboard from "./Dashboard";
import Transactions from "./Transactions";
import Settings from "./Settings";
import Services from "./Services";
import userdata from "./database/userdata.json"; // delete

import store from "./store/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <>
      <div className="wrapper">
        <Provider store={store}>
          <Navigation data={{ userdata }} />
          <Routes>
            <Route path="/" element={<Dashboard data={{ userdata }} />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/transactions/:page" element={<Transactions />} />
            <Route path="/services" element={<Services />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Provider>
      </div>
    </>
  );
}
