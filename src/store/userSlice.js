import { createSlice } from "@reduxjs/toolkit";
import userdataJsonFile from "./../database/userdata.json";
import { getUser, setUser } from "./localStorage";
import exchangeToDefaultCurrency from "./../utils/exchangeToDefaultCurrency";

let initialUserdata = getUser();

if (!initialUserdata) {
  initialUserdata = userdataJsonFile;
  setUser(initialUserdata);
}

const userSlice = createSlice({
  name: "user",
  initialState: initialUserdata,
  reducers: {
    // Reducers
    updateBalance: (state, action) => {
      const { account, currency, amount } = action.payload;

      let newAmount = amount;
      // Find the account to update
      const targetAccount = state.accounts.find((acc) => acc.account_id === account);

      if (currency !== state.base_currency) {
        newAmount = exchangeToDefaultCurrency("USD", currency, amount);
      }

      if (targetAccount) {
        // Update the balance
        targetAccount.balance = (parseFloat(targetAccount.balance) - parseFloat(newAmount)).toFixed(2);
      }
    },
  },
});
export const { updateBalance } = userSlice.actions;
export default userSlice.reducer;
