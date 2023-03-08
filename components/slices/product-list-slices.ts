import {
    Brand,
    IProduct,
    Material,
    OrderType, Product,
    ProductGroup,
    Status
} from './../../pages/api/swagger-generated-api classes';
import {AppState} from './../abstract/root-redux-store';
import {createSlice} from "@reduxjs/toolkit";
import {HYDRATE} from "next-redux-wrapper";

// Type for our state
export interface ProductListState {

    Products: Product[];
}

// Initial state
const initialState: ProductListState = {
    Products: []
};

// Actual Slice
export const productListSlice = createSlice({
    name: "SearchSlice",
    initialState,
    reducers: {
        // Action to set the authentication status
        setProductList(state, action) {
            console.log(action, state);
            state.Products = action.payload;
        }
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

export const {setProductList} = productListSlice.actions;

export const selectProductListState = (state: AppState) => state.SearchSlice.Products;

export default productListSlice.reducer;