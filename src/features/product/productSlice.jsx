import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import {fetchAllProducts, fetchProductsByFilter} from "./productApi"

const initialState = {
    products: [],
    status: 'idle'
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
    async ({filter, sort}) => {
        const response  = await fetchProductsByFilter(filter, sort)
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
            state.products = action.payload 
        })
    }
})

export const selectAllProducts = (state) => state.product.products 

export default productSlice.reducer