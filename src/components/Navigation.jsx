import { NavLink } from "react-router-dom";
import UserButton from "./UserButton";
import NotificationButton from "./NotificationButton";
import ThemeSwitcher from "./global/ThemeSwitcher";
export default function Navigation({ data }) {
  return (
    <nav>
      <ThemeSwitcher />
      {/* <ul className="desktop_menu">
        <li>
          <NavLink to="/">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/transactions">Transactions</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/support">Support</NavLink>
        </li>
      </ul>
      <ul className="user_controls">
        <li>
          <NotificationButton />
        </li>
        <li>
          <UserButton userdata={data.userdata} />
        </li>
      </ul> */}
    </nav>
  );
}
