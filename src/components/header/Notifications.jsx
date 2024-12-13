import { useState, useEffect } from "react";
// import NotificationsDropdown from "./NotificationsDropdown";
import { useSelector, useDispatch } from "react-redux";
import { updateNotifications } from "../../store/notificationsSlice";
import NotificationItem from "./NotificationItem";
import NotificationsButton from "./NotificationsButton";
import Modal from "../shared/Modal";

export default function Notifications() {
  //State for modal
  const [notificationsModal, setNotificationsModal] = useState(false);

  //using redux for notifications
  const notifications = useSelector((state) => state.notifications);
  const dispatch = useDispatch();

  const listItems = notifications?.map((item) => <NotificationItem {...item} key={item.id} />);

  const readStatus = notifications?.find((item) => item.read === false) ? true : false;

  useEffect(() => {
    if (notificationsModal) {
      const timeout = setTimeout(() => {
        dispatch(updateNotifications());
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [notificationsModal, dispatch]);

  //toggle function for modal
  function toggleNotificationsModal() {
    setNotificationsModal((prev) => !prev);
  }

  return (
    <div className="notifications_container">
      <NotificationsButton style="secondary" toggle={toggleNotificationsModal} readStatus={readStatus} />

      <Modal visibility={notificationsModal} handler={toggleNotificationsModal} title="Notifications">
        {listItems}
      </Modal>
    </div>
  );
}
