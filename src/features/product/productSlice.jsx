import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import {fetchAllProducts, fetchProductsByFilter, fetchAllBrands, fetchAllCategories, fetchProductById} from "./productApi"

const initialState = {
    products: [],
    brands: [],
    category: [],
    status: 'idle',
    totalItems:0,
    selectedProduct: null
}

export const fetchProductByIdAsync  = createAsyncThunk(
    'product/fetchProductById',
    async (id) => {
        const response  = await fetchProductById(id)
        return response.data;
    }
);

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

export const fetchAllBrandsAsync  = createAsyncThunk(
    'product/fetchAllBrands',
    async () => {
        const response  = await fetchAllBrands()
        return response.data;
    }
);
export const fetchAllCategoriesAsync  = createAsyncThunk(
    'product/fetchAllCategories',
    async () => {
        const response  = await fetchAllCategories()
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
        .addCase(fetchAllBrandsAsync.pending, (state) => {
            state.status = "loading"
            // state.products = action.payload 
        })
        .addCase(fetchAllBrandsAsync.fulfilled, (state, action) => {
            state.status = "idle",
            state.brands = action.payload
        })
        .addCase(fetchAllCategoriesAsync.pending, (state) => {
            state.status = "loading"
            // state.products = action.payload 
        })
        .addCase(fetchAllCategoriesAsync.fulfilled, (state, action) => {
            state.status = "idle",
            state.category = action.payload
        })
        .addCase(fetchProductByIdAsync.pending, (state) => {
            state.status = "loading"
            // state.products = action.payload 
        })
        .addCase(fetchProductByIdAsync.fulfilled, (state, action) => {
            state.status = "idle",
            state.selectedProduct = action.payload
        })
    }
})

export const selectAllProducts = (state) => state.product.products 
export const selectBrands = (state) => state.product.brands  
export const selectCategory = (state) => state.product.category  

export const selectTotalItems = (state) => state.product.totalItems 
export const selectProductById = (state) => state.product.selectedProduct 

export default productSlice.reducer