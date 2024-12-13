import { NavLink } from "react-router-dom";
import { RiMenu2Line, RiCloseLargeLine } from "@remixicon/react";
import "./Navigation.scss";
import { useState } from "react";

export default function MobileMenu({ menu }) {
  const [menuState, setMenuState] = useState(false);

  const mobileMenu = menu.map((item) => (
    <div key={item.id} className="mobile_menu__list__item">
      <NavLink to={item.link} onClick={closeMenu}>
        {item.name}
      </NavLink>
    </div>
  ));

  function closeMenu() {
    document.querySelector(".wrapper").classList.remove("side_menu_open");
    document.querySelector(".wrapper").classList.add("side_menu_close");
    setMenuState(false);
  }
  function openMenu() {
    document.querySelector(".wrapper").classList.remove("side_menu_close");
    document.querySelector(".wrapper").classList.add("side_menu_open");
    setMenuState(true);
  }

  function handleMobileMenu() {
    menuState ? closeMenu() : openMenu();
  }

  return (
    <>
      <div className={`mobile_menu__backdrop ${!menuState ? "hidden" : ""}`} onClick={closeMenu}></div>
      <div className="mobile_menu__container">
        <div className="mobile_menu__burger" onClick={handleMobileMenu}>
          <RiMenu2Line />
        </div>

        <div className={`mobile_menu__list ${menuState ? "menu_opened" : "menu_closed"}`}>
          <button className="mobile_menu__close" onClick={handleMobileMenu}>
            <RiCloseLargeLine />
          </button>
          {mobileMenu}
        </div>
      </div>
    </>
  );
}
