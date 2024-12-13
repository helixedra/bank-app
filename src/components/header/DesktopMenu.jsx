import { NavLink } from "react-router-dom";

export default function DesktopMenu({ menu }) {
  //
  const desktopMenu = menu.map((item) => (
    <li key={item.id} className="desktop_menu__menu_item">
      <NavLink to={item.link}>{item.name}</NavLink>
    </li>
  ));

  return <ul className="desktop_menu__container">{desktopMenu}</ul>;
}
