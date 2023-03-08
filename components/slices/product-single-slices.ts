
import {
    Brand,
    IProduct,
    Material,
    OrderType, Product,
    ProductGroup,
    Status
} from './../../pages/api/swagger-generated-api classes';
import { AppState } from './../abstract/root-redux-store';
import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

// Type for our state
export interface ProductState  {
}

 // Initial state
const initialState: ProductState = {
    product :Product
};
 
// Actual Slice
export const productSingleSlice = createSlice({
  name: "ProductSlice",
    initialState,
  reducers: {
    // Action to set the authentication status
    setProduct(state, action) {
        console.log('setProduct',action.payload);
      state.product = action.payload;
    },
  },

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setProduct } = productSingleSlice.actions;

export const selectProductState = (state: AppState) => state.ProductSlice.product;

export default productSingleSlice.reducer;