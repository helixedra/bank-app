import { formatDynamicDate } from "./../../utils/formatDynamicDate";
import "./Notifications.scss";

export default function DropdownItem({ title, message, timestamp, read }) {
  return (
    <div className={`notifications__list_item`} style={read ? { opacity: 0.9 } : null}>
      <div className="notifications__list_item__container">
        <span className="notifications__list_item__title">
          {!read && <span className="notifications__list_item__unreaded"></span>}
          {title}
        </span>
        <span className="notifications__list_item__date">{formatDynamicDate(timestamp)}</span>
        <span className="notifications__list_item__text">{message}</span>
      </div>
    </div>
  );
}
