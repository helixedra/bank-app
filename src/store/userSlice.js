import { createSlice } from "@reduxjs/toolkit";
import userdataJsonFile from "./../database/userdata.json";
import { getUser, setUser } from "./localStorage";

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
  },
});

export default userSlice.reducer;
