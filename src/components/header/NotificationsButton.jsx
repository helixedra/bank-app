import { RiNotification3Line } from "@remixicon/react";
import "./Notifications.scss";

export default function NotificationsButton({ style, toggle, readStatus }) {
  return (
    <button onClick={toggle} className={`button button_${style} notification_button`}>
      <RiNotification3Line />
      {readStatus && <span className="unreaded"></span>}
    </button>
  );
}
