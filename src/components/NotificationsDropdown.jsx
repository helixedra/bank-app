// import { useState } from "react";
// import { RiArrowDropDownLine } from "@remixicon/react";
import { RiNotification3Line } from "@remixicon/react";
import btnClasses from "./Button.module.scss";
import classes from "./NotificationsDropdown.module.scss";
import { formatDynamicDate } from "./../utils/formatDynamicDate";

export default function Dropdown({ size = "l", type = "additional", options = { data: [], visibility: false }, toggle, listHeight = null }) {
  // const currentValue = options.data?.find((option) => option.active);
  const listItems = options.data?.map((item) => <DropdownItem {...item} key={item.id} />);
  // console.log(arrow);

  const unreadStatus = options.data?.find((item) => item.read === false) ? true : false;

  return (
    <div className={classes.dropdown_container}>
      <div className={options.visibility ? `${classes.backdrop}` : `hidden`} onClick={toggle}></div>
      <div className={classes.dropdown}>
        <DropdownButton size={size} type={type} state={options.visibility} toggle={toggle} unread={unreadStatus} />
        <div className={options.visibility ? `${classes.list}` : `${classes.list} hidden`}>
          <div className={`${type}`} style={listHeight ? { height: `${listHeight}px` } : undefined}>
            {listItems}
            <button className={classes.show_more}>Show More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function DropdownButton({ size, type, toggle, unread }) {
  // console.log(arrow);
  return (
    <button onClick={toggle} className={`${btnClasses.button} ${btnClasses[size]} ${btnClasses[type]} ${classes.notification_button}`}>
      <RiNotification3Line />
      {unread && <span className={classes.unreaded}></span>}
    </button>
  );
}

function DropdownItem({ title, message, timestamp, read }) {
  return (
    <button aria-label={`Notification: ${title}`} aria-live="polite" className={`${classes.list_item}`} style={read ? { opacity: 0.9 } : null}>
      {!read && <span className={classes.unreaded}></span>}
      <span className={classes.list_item_title}>{title}</span>
      <span className={classes.list_item_date}>{formatDynamicDate(timestamp)}</span>
      <span className={classes.list_item_text}>{message}</span>
    </button>
  );
}
