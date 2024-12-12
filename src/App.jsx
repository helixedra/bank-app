import { Routes, Route } from "react-router-dom";
import Navigation from "./components/header/Navigation";
import Dashboard from "./Dashboard";
import Transactions from "./Transactions";
import Support from "./Support";
import Services from "./Services";
import userdata from "./database/userdata.json"; // delete
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import store from "./store/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <>
      <div className="wrapper">
        <Provider store={store}>
          <ToastContainer />
          <Navigation data={{ userdata }} />
          <Routes>
            <Route path="/" element={<Dashboard data={{ userdata }} />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/transactions/:page" element={<Transactions />} />
            <Route path="/services" element={<Services />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </Provider>
      </div>
    </>
  );
}
