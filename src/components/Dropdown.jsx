// import { useState } from "react";
import { RiArrowDropDownLine } from "@remixicon/react";
import btnClasses from "./Button.module.scss";
import classes from "./Dropdown.module.scss";

export default function Dropdown({ size = "l", type = "additional", options = { data: [], visibility: false }, arrow = true, icon, iconButton = false, toggle, listHeight = null, label = null, align = "center", width = "auto" }) {
  const currentValue = options.data?.find((option) => option.active);
  const listItems = options.data?.map((item) => <DropdownItem {...item} key={item.id} />);

  const alignList = {
    left: "align_left",
    right: "align_right",
    center: "align_center",
  };

  return (
    <div className={classes.dropdown_container}>
      <div className={options.visibility ? `${classes.backdrop}` : `hidden`} onClick={toggle}></div>
      <div className={classes.dropdown}>
        {label && <div className={classes.label}>{label}</div>}
        <DropdownButton size={size} type={type} state={options.visibility} toggle={toggle} icon={icon} iconButton={iconButton} before={currentValue?.before} after={currentValue?.after} arrow={arrow} width={width}>
          {iconButton ? icon : currentValue?.name}
        </DropdownButton>
        <div className={options.visibility ? `${classes.list} ${classes[alignList[align]]}` : `${classes.list} ${classes[alignList[align]]} hidden`}>
          <div className={`${type}`} style={listHeight ? { height: `${listHeight}px` } : undefined}>
            {listItems}
          </div>
        </div>
      </div>
    </div>
  );
}

function DropdownButton({ size, type, icon, children, iconButton, arrow, state, toggle, before, after, width }) {
  return (
    <button onClick={toggle} className={`${btnClasses.button} ${btnClasses[size]} ${btnClasses[type]}`} style={{ width: `${width}` }}>
      {iconButton ? (
        <span className={btnClasses.icon_button}>{icon}</span>
      ) : (
        <>
          {before && <span className={classes.before}>{before}</span>}
          <span className={classes.value}>{children}</span>
          {after && <span>{after}</span>}
        </>
      )}

      {arrow ? (
        state ? (
          <span className={classes.arrow_up}>
            <RiArrowDropDownLine />
          </span>
        ) : (
          <span className={classes.arrow_down}>
            <RiArrowDropDownLine />
          </span>
        )
      ) : null}
    </button>
  );
}

function DropdownItem({ name, action, before, after, border = false }) {
  return (
    <>
      <button className={classes.list_item} onClick={action}>
        <span className={classes.list_item_before}>{before}</span>
        <span className={classes.list_item_text}>{name}</span>
        <span className={classes.list_item_after}>{after}</span>
      </button>
      {border && <div className={classes.list_item_border}></div>}
    </>
  );
}
