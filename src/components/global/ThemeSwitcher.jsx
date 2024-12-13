import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchTheme } from "../../store/settingsSlice";
import { RiMoonLine, RiSunLine } from "@remixicon/react";

const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.settings.theme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    dispatch(switchTheme(newTheme));
  };

  return (
    <button className="theme_switcher" onClick={toggleTheme}>
      {theme === "light" ? <RiMoonLine /> : <RiSunLine />}
    </button>
  );
};

export default ThemeSwitcher;
