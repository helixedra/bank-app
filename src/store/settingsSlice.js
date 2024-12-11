import { createSlice } from "@reduxjs/toolkit";
import { getTheme, setTheme } from "./localStorage";

let initialTheme = getTheme();
if (!initialTheme) {
  initialTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  setTheme(initialTheme);
}

const InitialSettings = {
  theme: initialTheme,
};

const settingsSlice = createSlice({
  name: "settings",
  initialState: InitialSettings,
  reducers: {
    switchTheme: (state, action) => {
      state.theme = action.payload;
      setTheme(action.payload);
    },
  },
});

export const { switchTheme } = settingsSlice.actions;
export default settingsSlice.reducer;
