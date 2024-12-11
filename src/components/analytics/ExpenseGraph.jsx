import { useState } from "react";
// import LineChart from "./LineChart";
// import Segment from "./Segment";
import Dropdown from "../shared/Dropdown";
import BarChart from "./BarCharts";
import { useSelector } from "react-redux";

export default function ExpenseGraph() {
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
    <div className="card_container">
      <div className="flex justify-between items-center">
        <h2>Analytics</h2>

        <Dropdown style="secondary" options={rangeDropdownState} toggle={toggleRangeDropdown} align="left" />
      </div>

      <div style={{ height: "220px" }}>
        <BarChart period={period} style={chartsStyle} theme={theme} />
      </div>
    </div>
  );
}
