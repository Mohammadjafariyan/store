import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import {productSingleSlice} from "@/components/slices/product-single-slices";
import {productListSlice} from "@/components/slices/product-list-slices";

const makeStore = () =>
  configureStore({
    reducer: {
      [productSingleSlice.name]: productSingleSlice.reducer,
      [productListSlice.name]: productListSlice.reducer,

      
    },
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);