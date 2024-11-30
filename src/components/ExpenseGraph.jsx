import { useState } from "react";
import LineChart from "./LineChart";
import Segment from "./Segment";
import Dropdown from "./Dropdown";

const expenseSegmentData = [
  {
    id: "all",
    name: "All",
    icon: null,
    active: true,
  },
  {
    id: "expense",
    name: "Expense",
    icon: null,
    active: false,
  },
  {
    id: "income",
    name: "Income",
    icon: null,
    active: false,
  },
];
export default function ExpenseGraph() {
  const [expenseSegment, setExpenseSegment] = useState(expenseSegmentData);
  // const [expense, setExpense] = useState("all");

  function handleExpenseSegment(event, id) {
    const newState = expenseSegment.map((segment) => {
      return segment.id === id ? { ...segment, active: true } : { ...segment, active: false };
    });
    setExpenseSegment(newState);
    // setExpense(id);
  }
  return (
    <div className="col-4 p-6 expense_graph_container">
      <div className="flex justify-between">
        <Segment buttons={expenseSegment} handler={handleExpenseSegment} size="l" type="primary" />
        <Dropdown />
      </div>

      <div className="mt-6" style={{ height: "220px" }}>
        <LineChart />
      </div>
    </div>
  );
}
