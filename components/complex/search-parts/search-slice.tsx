import { AppState } from "@/components/abstract/root-redux-store";
import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

// Type for our state
export interface SearchState {
}

// Initial state
const initialState: SearchState = {
};

// Actual Slice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {

  },
});

export const {  } = authSlice.actions;

//export const selectAuthState = (state: AppState) => state.auth.authState;

export default authSlice.reducer;