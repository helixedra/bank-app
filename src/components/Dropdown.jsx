// import { useState } from "react";
import { RiArrowDropDownLine } from "@remixicon/react";
import btnClasses from "./Button.module.scss";
import classes from "./Dropdown.module.scss";

export default function Dropdown({ size = "l", type = "additional", options = { data: [], visibility: false }, icon, iconButton = false, toggle }) {
  const currentValue = options.data?.find((option) => option.active);
  const listItems = options.data?.map((item) => <DropdownItem {...item} key={item.id} />);

  return (
    <div className={classes.dropdown_container}>
      <DropdownButton size={size} type={type} state={options.visibility} toggle={toggle} icon={icon} iconButton={iconButton} before={currentValue?.before} after={currentValue?.after}>
        {iconButton ? icon : currentValue?.name}
      </DropdownButton>
      <div className={options.visibility ? `${classes.list}` : `${classes.list} hidden`}>
        <div className={`${type}`}>{listItems}</div>
      </div>
    </div>
  );
}

function DropdownButton({ size, type, icon, children, iconButton, arrow = true, state, toggle, before, after }) {
  return (
    <button onClick={toggle} className={`${btnClasses.button} ${btnClasses[size]} ${btnClasses[type]}`}>
      {iconButton ? <span className={btnClasses.icon_button}>{icon}</span> : icon && <span className={btnClasses.icon}>{icon}</span>}
      {before && <span className={classes.before}>{before}</span>}
      <span className={classes.value}>{children}</span>
      {after && <span>{after}</span>}
      {arrow && state ? (
        <span className={classes.arrow_up}>
          <RiArrowDropDownLine />
        </span>
      ) : (
        <span className={classes.arrow_down}>
          <RiArrowDropDownLine />
        </span>
      )}
    </button>
  );
}

function DropdownItem({ name, action, before, after }) {
  return (
    <button className={classes.list_item} onClick={action}>
      <span className={classes.list_item_before}>{before}</span>
      <span className={classes.list_item_text}>{name}</span>
      <span className={classes.list_item_after}>{after}</span>
    </button>
  );
}
