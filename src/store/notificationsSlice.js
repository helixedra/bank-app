import { createSlice } from "@reduxjs/toolkit";
import notificationsJsonFile from "./../database/notifications.json";
import { getNotifications, setNotifications } from "./localStorage";

let initialNotifications = getNotifications();

if (!initialNotifications) {
  initialNotifications = notificationsJsonFile; // Get from JSON file
  setNotifications(initialNotifications); // Save to localStorage
}

const notificationsSlice = createSlice({
  name: "notifications",
  initialState: initialNotifications,
  reducers: {
    // Reducers
    updateNotifications: (state) => {
      state.map((item) => (item.read = true));
    },
  },
});

export const { updateNotifications } = notificationsSlice.actions;
export default notificationsSlice.reducer;
