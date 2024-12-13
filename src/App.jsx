import { Routes, Route } from "react-router-dom";
import Navigation from "./components/header/Navigation";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Support from "./pages/Support";
import Services from "./pages/Services";
// import userdata from "./database/userdata.json"; // delete
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
          <Navigation />
          <Routes>
            <Route path="/" element={<Dashboard />} />
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
