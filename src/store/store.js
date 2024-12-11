import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import transactionsReducer from "./transactionsSlice";
import notificationsReducer from "./notificationsSlice";
import settingsReducer from "./settingsSlice";
import { setUser, setTransactions, setNotifications, setTheme } from "./localStorage";

const store = configureStore({
  reducer: {
    userdata: userReducer,
    transactions: transactionsReducer,
    notifications: notificationsReducer,
    settings: settingsReducer,
  },
});

// sync with localStorage
store.subscribe(() => {
  const state = store.getState();

  setUser(state.userdata);
  setTransactions(state.transactions);
  setNotifications(state.notifications);
  if (state.settings && state.settings.theme) {
    setTheme(state.settings.theme);
  }
});

export default store;
