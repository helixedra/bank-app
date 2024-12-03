import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import transactionsReducer from "./transactionsSlice";
import { setUser, setTransactions } from "./localStorage";

const store = configureStore({
  reducer: {
    userdata: userReducer,
    transactions: transactionsReducer,
  },
});

// sync with localStorage
store.subscribe(() => {
  setUser(store.getState().userdata);
  setTransactions(store.getState().transactions);
});

export default store;
