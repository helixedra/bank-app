import { useState } from "react";
import Dropdown from "./../shared/Dropdown";
import BarChart from "./BarCharts";
import { useSelector } from "react-redux";
import "./Analytics.scss";

export default function Analytics({ heading = true }) {
  const rangeDropdownInitial = [
    { id: "yearly", name: "Yearly", action: () => handleRangeDropdown("yearly"), before: null, after: null, active: false },
    { id: "monthly", name: "Monthly", action: () => handleRangeDropdown("monthly"), before: null, after: null, active: false },
    { id: "daily", name: "Daily", action: () => handleRangeDropdown("daily"), before: null, after: null, active: true },
  ];

  const [rangeDropdownState, setRangeDropdownState] = useState({ data: rangeDropdownInitial, visibility: false });
  const [period, setPeriod] = useState("daily");

  const theme = useSelector((state) => state.settings.theme);

  function handleRangeDropdown(id) {
    // Update state
    setRangeDropdownState((prev) => {
      const newData = prev.data.map((item) => (item.id === id ? { ...item, active: true } : { ...item, active: false }));
      const newVisibility = !prev.visibility;
      return { data: newData, visibility: newVisibility };
    });
    // Actions
    setPeriod(id);
  }

  function toggleRangeDropdown() {
    setRangeDropdownState((prev) => {
      return { data: prev.data, visibility: !prev.visibility };
    });
  }

  const chartsStyle = {
    light: {
      expenseBarColor: "#1A1A1A",
      incomeBarColor: "#CCCCCC",
    },
    dark: {
      expenseBarColor: "#999999",
      incomeBarColor: "#4D4D4D",
    },
  };

  return (
    <div className="analytics__container">
      <div className="analytics__header">
        <div className={heading ? "block_title" : "block_title invisible"}>Analytics</div>
        <Dropdown style="secondary" options={rangeDropdownState} toggle={toggleRangeDropdown} align="left" />
      </div>
      <div className="analytics__chart">
        <BarChart period={period} style={chartsStyle} theme={theme} />
      </div>
    </div>
  );
}
