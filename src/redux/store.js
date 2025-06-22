import { configureStore } from "@reduxjs/toolkit";
import covidSlice from "./covidSlice";

const reduxStore = configureStore({
  reducer: {
    covidSlice,
  },
});

export default reduxStore;
