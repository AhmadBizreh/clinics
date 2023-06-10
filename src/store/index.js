import { configureStore } from "@reduxjs/toolkit";

import clinicValuesReducer from "./clinic";
import hoursReducer from "./hours"

const store = configureStore({
  reducer: {
    clinicValuesStore: clinicValuesReducer,
    hoursStore: hoursReducer,
  },
});

export default store;
