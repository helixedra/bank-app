import { useState } from "react";
// import LineChart from "./LineChart";
// import Segment from "./Segment";
import Dropdown from "./Dropdown";
import BarChart from "./BarCharts";

export default function ExpenseGraph() {
  // const expenseSegmentData = [
  //   {
  //     id: "balance",
  //     name: "Balance",
  //     icon: null,
  //     active: true,
  //   },
  //   {
  //     id: "expense",
  //     name: "Expense",
  //     icon: null,
  //     active: false,
  //   },
  //   {
  //     id: "income",
  //     name: "Income",
  //     icon: null,
  //     active: false,
  //   },
  // ];
  const rangeDropdownInitial = [
    { id: "yearly", name: "Yearly", action: () => handleRangeDropdown("yearly"), before: null, after: null, active: false },
    { id: "monthly", name: "Monthly", action: () => handleRangeDropdown("monthly"), before: null, after: null, active: false },
    { id: "daily", name: "Daily", action: () => handleRangeDropdown("daily"), before: null, after: null, active: true },
  ];
  // const [expenseSegment, setExpenseSegment] = useState(expenseSegmentData);
  const [rangeDropdownState, setRangeDropdownState] = useState({ data: rangeDropdownInitial, visibility: false });
  const [period, setPeriod] = useState("daily");

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
  // const [expense, setExpense] = useState("all");

  // function handleExpenseSegment(event, id) {
  //   const newState = expenseSegment.map((segment) => {
  //     return segment.id === id ? { ...segment, active: true } : { ...segment, active: false };
  //   });
  //   setExpenseSegment(newState);
  //   // setExpense(id);
  // }
  return (
    <div className="col-4 p-6 expense_graph_container">
      <div className="flex justify-between items-center">
        <h2>Statistics</h2>
        {/* <Segment buttons={expenseSegment} handler={handleExpenseSegment} size="l" type="primary" /> */}
        <Dropdown options={rangeDropdownState} toggle={toggleRangeDropdown} />
      </div>

      <div className="mt-6" style={{ height: "220px" }}>
        {/* <LineChart /> */}
        <BarChart period={period} />
      </div>
    </div>
  );
}
