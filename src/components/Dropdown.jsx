import { RiArrowDropDownLine } from "@remixicon/react";
import classes from "./Button.module.scss";
function DropdownButton({ size, type, icon, children, iconButton = false, arrow = true }) {
  return (
    <button className={`${classes.button} ${classes[size]} ${classes[type]}`}>
      {iconButton ? <span className={classes.icon_button}>{icon}</span> : icon && <span className={classes.icon}>{icon}</span>}
      {children}
      <span>{arrow && <RiArrowDropDownLine />}</span>
    </button>
  );
}

function DropdownItem({ text, action }) {
  return <li onClick={action}>{text}</li>;
}

export default function Dropdown({ size = "l", options = [], type = "additional", visibility, handler }) {
  const listItems = options.map((item) => <DropdownItem {...item} key={item.id} action={handler} />);

  return (
    <>
      <DropdownButton size={size} type={type}>
        Year
      </DropdownButton>
      <div className={visibility ? "dropdown_list" : "dropdown_list hidden"}>
        <ul className={`${type}`}>{listItems}</ul>
      </div>
    </>
  );
}
