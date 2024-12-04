import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import transactionsReducer from "./transactionsSlice";
import notificationsReducer from "./notificationsSlice";
import { setUser, setTransactions, setNotifications } from "./localStorage";

const store = configureStore({
  reducer: {
    userdata: userReducer,
    transactions: transactionsReducer,
    notifications: notificationsReducer,
  },
});

// sync with localStorage
store.subscribe(() => {
  setUser(store.getState().userdata);
  setTransactions(store.getState().transactions);
  setNotifications(store.getState().notifications);
});

export default store;
