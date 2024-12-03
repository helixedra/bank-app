import { createSlice } from "@reduxjs/toolkit";
import transationsJsonFile from "./../database/transactions.json";
import { getTransactions, setTransactions } from "./localStorage";

let initialTransactions = getTransactions();

if (!initialTransactions) {
  initialTransactions = transationsJsonFile; // Get from JSON file
  setTransactions(initialTransactions); // Save to localStorage
}

const transactionsSlice = createSlice({
  name: "transactions",
  initialState: initialTransactions,
  reducers: {
    // Reducers
    addTransaction: (state, action) => {
      state.transactions.push(action.payload);
    },
  },
});

export const { addTransaction } = transactionsSlice.actions;
export default transactionsSlice.reducer;
