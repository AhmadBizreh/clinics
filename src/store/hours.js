import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clinicName: localStorage.getItem("hours"),
};

const hoursSlice = createSlice({
  name: "hours",
  initialState,
  reducers: {
    setHours(state, action) {
      state.hours = action.payload;
      localStorage.setItem("hours", action.payload);
    },
  },
});

export const hoursAction = hoursSlice.actions;
export default hoursSlice.reducer;
