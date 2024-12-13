import { useState, useEffect } from "react";
import NotificationsDropdown from "./NotificationsDropdown";
import { useSelector, useDispatch } from "react-redux";
import { updateNotifications } from "../../store/notificationsSlice";

export default function NotificationButton() {
  const notifications = useSelector((state) => state.notifications);
  const dispatch = useDispatch();

  const [notificationsDropdownState, setNotificationsDropdownState] = useState({
    data: notifications,
    visibility: false,
  });

  useEffect(() => {
    if (notificationsDropdownState.visibility) {
      const timeout = setTimeout(() => {
        dispatch(updateNotifications());
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [notificationsDropdownState.visibility, dispatch]);

  function toggleNotificationsDropdown() {
    setNotificationsDropdownState((prev) => ({
      data: prev.data,
      visibility: !prev.visibility,
    }));
  }

  return <NotificationsDropdown options={{ data: notifications, visibility: notificationsDropdownState.visibility }} toggle={toggleNotificationsDropdown} />;
}
