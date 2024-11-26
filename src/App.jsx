import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Dashboard from "./Dashboard";
import Transactions from "./Transactions";
import Settings from "./Settings";
export default function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  );
}
