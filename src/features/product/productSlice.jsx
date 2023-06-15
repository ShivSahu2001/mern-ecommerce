import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import {fetchAllProducts, fetchProductsByFilter} from "./productApi"

const initialState = {
    products: [],
    status: 'idle',
    totalItems:0
}

export const fetchAllProductsAsync  = createAsyncThunk(
    'product/fetchAllProducts',
    async () => {
        const response  = await fetchAllProducts()
        return response.data;
    }
);

export const fetchProductsByFilterAsync  = createAsyncThunk(
    'product/fetchProductsByFilter',
    async ({filter, sort, pagination}) => {
        const response  = await fetchProductsByFilter(filter, sort, pagination)
        return response.data;
    }
);

export const productSlice = createSlice({
    name: "product",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchAllProductsAsync.pending, (state) => {
            state.status = "loading";
        })
        .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
            state.status = "idle",
            state.products = action.payload 
        })
        .addCase(fetchProductsByFilterAsync.pending, (state) => {
            state.status = "loading"
            // state.products = action.payload 
        })
        .addCase(fetchProductsByFilterAsync.fulfilled, (state, action) => {
            state.status = "idle",
            state.products = action.payload.products
            state.totalItems = action.payload.totalItems
        })
    }
})

export const selectAllProducts = (state) => state.product.products 

export const selectTotalItems = (state) => state.product.totalItems 

export default productSlice.reducer