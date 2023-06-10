import { createSlice } from "@reduxjs/toolkit";

const initialClinicValuesState = {
  clinicName: localStorage.getItem("clinicName"),
  country: localStorage.getItem("country"),
  city: localStorage.getItem("city"),
  phoneNumber: localStorage.getItem("phoneNumber"),
};

const clinicValuesSlice = createSlice({
  name: "form",
  initialState: initialClinicValuesState,
  reducers: {
    save(steat, action) {
      steat.clinicName = action.payload.clinicName;
      steat.country = action.payload.country;
      steat.city = action.payload.city;
      steat.phoneNumber = action.payload.phoneNumber;

      localStorage.setItem("clinicName", action.payload.clinicName);
      localStorage.setItem("country", action.payload.country);
      localStorage.setItem("city", action.payload.city);
      localStorage.setItem("phoneNumber", action.payload.phoneNumber);
    },
  },
});

export const clinicAction = clinicValuesSlice.actions;
export default clinicValuesSlice.reducer;
