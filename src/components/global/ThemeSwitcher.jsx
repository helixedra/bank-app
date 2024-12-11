import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchTheme } from "../../store/settingsSlice";

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

  return <button onClick={toggleTheme}>{theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}</button>;
};

export default ThemeSwitcher;
