import { NavLink } from "react-router-dom";
// import UserButton from "./UserButton";
// import NotificationButton from "./NotificationButton";
import ThemeSwitcher from "./../global/ThemeSwitcher";
import MobileMenu from "./MobileMenu";
import "./Menu.scss";

export default function Navigation({ data }) {
  const menu = [
    {
      id: "dashboard",
      name: "Dashboard",
      link: "/",
    },
    {
      id: "transactions",
      name: "Transactions",
      link: "/transactions",
    },
    {
      id: "services",
      name: "Services",
      link: "/services",
    },
    {
      id: "support",
      name: "Support",
      link: "/support",
    },
  ];

  const desktopMenu = menu.map((item) => (
    <li key={item.id} className="desktop_menu__menu_item">
      <NavLink to={item.link}>{item.name}</NavLink>
    </li>
  ));

  return (
    <nav>
      <div className="hidden">
        <ThemeSwitcher />
      </div>

      <div className="desktop_menu hidden">
        <ul className="desktop_menu__container">
          {desktopMenu}
          {/* <li>
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
        </li> */}
        </ul>
      </div>
      <MobileMenu menu={menu} />
    </nav>
  );
}
