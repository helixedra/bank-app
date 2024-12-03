import { createSlice } from "@reduxjs/toolkit";
import transationsJsonFile from "./../database/transactions.json";
import { getTransactions, setTransactions } from "./localStorage";

let initialTransactions = getTransactions();

if (!initialTransactions) {
  initialTransactions = transationsJsonFile;
  setTransactions(initialTransactions);
}

const transactionsSlice = createSlice({
  name: "transactions",
  initialState: initialTransactions,
  reducers: {
    // Reducers
  },
});

export default transactionsSlice.reducer;
