import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Dashboard from "./Dashboard";
import Transactions from "./Transactions";
import Settings from "./Settings";
import Services from "./Services";
import userdata from "./database/userdata.json";

export default function App() {
  return (
    <>
      <div className="wrapper">
        <Navigation data={{ userdata }} />
        <Routes>
          <Route path="/" element={<Dashboard data={{ userdata }} />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/services" element={<Services />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </>
  );
}
