import { useState } from "react";
import Dropdown from "./components/Dropdown";
import { RiBankLine } from "@remixicon/react";

export default function Services() {
  const dropdownTestOptions = [
    { id: 1, name: "Option 1", action: () => handleDropdownTest(1), before: null, after: null, active: true },
    { id: 2, name: "Option 2", action: () => handleDropdownTest(2), before: null, after: <RiBankLine />, active: false },
    { id: 3, name: "Option 3", action: () => handleDropdownTest(3), before: <RiBankLine />, after: <RiBankLine />, active: false },
  ];
  const [dropdownTestState, setDropdownTestState] = useState({ data: dropdownTestOptions, visibility: false });

  function handleDropdownTest(id) {
    // Update state
    setDropdownTestState((prev) => {
      const newData = prev.data.map((item) => (item.id === id ? { ...item, active: true } : { ...item, active: false }));
      const newVisibility = !prev.visibility;
      return { data: newData, visibility: newVisibility };
    });
    // Actions
    // DO SOME ACTION...
  }

  function toggleDropdownTest() {
    setDropdownTestState((prev) => {
      return { data: prev.data, visibility: !prev.visibility };
    });
  }

  return (
    <main>
      <Dropdown options={dropdownTestState} toggle={toggleDropdownTest} />
    </main>
  );
}
