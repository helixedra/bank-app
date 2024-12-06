import UserAvatar from "./UserAvatar";
import Dropdown from "./Dropdown";
import { useState } from "react";
import { RiUserLine, RiCustomerService2Line, RiLogoutCircleRLine, RiSettings4Line } from "@remixicon/react";

export default function UserButton({ userdata }) {
  const dropdownUserOptions = [
    { id: 1, name: "Profile", action: () => handleDropdownUser(1), before: <RiUserLine />, after: null, active: true },
    { id: 2, name: "Support", action: () => handleDropdownUser(2), before: <RiCustomerService2Line />, after: null, active: false },
    { id: 3, name: "Settings", action: () => handleDropdownUser(3), before: <RiSettings4Line />, after: null, active: false, border: true },
    { id: 4, name: "Logout", action: () => handleDropdownUser(4), before: <RiLogoutCircleRLine />, after: null, active: false },
  ];
  const [dropdownUserState, setDropdownUserState] = useState({ data: dropdownUserOptions, visibility: false });

  function handleDropdownUser(id) {
    // Update state
    setDropdownUserState((prev) => {
      const newData = prev.data.map((item) => (item.id === id ? { ...item, active: true } : { ...item, active: false }));
      const newVisibility = !prev.visibility;
      return { data: newData, visibility: newVisibility };
    });
    // Actions
    // DO SOME ACTION...
  }

  function toggleDropdownUser() {
    setDropdownUserState((prev) => {
      return { data: prev.data, visibility: !prev.visibility };
    });
  }

  return (
    <Dropdown options={dropdownUserState} toggle={toggleDropdownUser} iconButton={true} arrow={false} icon={<UserAvatar image={userdata.userpic} />} align="left" />
    // <button className="user_button">

    // </button>
  );
}
