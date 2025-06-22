import { createSlice } from "@reduxjs/toolkit";
import { getDetails } from "./actions";

const initialState = {
  isLoading: true,
  error: null,
  data: null,
};

const covidSlice = createSlice({
  name: "covidSlice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // getDetails Pending
    builder.addCase(getDetails.pending, (state, { error }) => {
      state.isLoading = true;
    });

    // getDetails Fulfilled
    builder.addCase(getDetails.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.data = payload;
    });

    // getDetails Rejected
    builder.addCase(getDetails.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
      state.data = null;
    });
  },
});

export const {} = covidSlice.actions;
export default covidSlice.reducer;
