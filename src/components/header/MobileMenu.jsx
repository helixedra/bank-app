import { NavLink } from "react-router-dom";
import { RiMenu2Line, RiCloseLargeLine } from "@remixicon/react";
import "./Menu.scss";
import { useEffect, useState } from "react";

export default function MobileMenu({ menu }) {
  const [menuState, setMenuState] = useState(false);

  const closeMenu = () => setMenuState(false);

  const mobileMenu = menu.map((item) => (
    <div key={item.id} className="mobile_menu__list__item">
      <NavLink to={item.link} onClick={closeMenu}>
        {item.name}
      </NavLink>
    </div>
  ));

  useEffect(() => {
    if (menuState) {
      document.querySelector("body").classList.add("overflow-hidden");
    } else {
      document.querySelector("body").classList.remove("overflow-hidden");
    }

    // return () => {
    //   second
    // }
  }, [menuState]);

  return (
    <>
      <div className={`mobile_menu__backdrop ${!menuState ? "hidden" : ""}`} onClick={closeMenu}></div>
      <div className="mobile_menu">
        <div className="mobile_menu__burger" onClick={() => setMenuState((prev) => !prev)}>
          {!menuState ? <RiMenu2Line /> : <RiCloseLargeLine />}
        </div>

        <div className={`mobile_menu__list ${menuState ? "menu_opened" : "menu_closed"}`}>{mobileMenu}</div>
      </div>
    </>
  );
}
