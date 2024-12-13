import UserButton from "./UserButton";
import Notifications from "./Notifications";
import MobileMenu from "./MobileMenu";
import "./Navigation.scss";
import DesktopMenu from "./DesktopMenu";
import ThemeSwitcher from "./../global/ThemeSwitcher";
import { useSelector } from "react-redux";

export default function Navigation() {
  const userdata = useSelector((state) => state.userdata);

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

  return (
    <nav>
      <div className="desktop_menu">
        <DesktopMenu menu={menu} />
      </div>

      <div className="mobile_menu">
        <MobileMenu menu={menu} />
      </div>

      <div className="user_controls">
        <div>
          <ThemeSwitcher />
        </div>
        <div>
          <Notifications />
        </div>

        <div>
          <UserButton userdata={userdata} />
        </div>
      </div>
    </nav>
  );
}
