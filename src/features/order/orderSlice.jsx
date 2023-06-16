import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import {createOrder} from "./orderApi"

const initialState = {
    status: "idle",
    orders: [],
    // error: null
};

export const createOrderAsync  = createAsyncThunk(
    'order/createOrder',
    async (order) => {
        const response  = await createOrder(order)
        return response.data;
    }
);

export const orderSlice = createSlice({
    name: "order",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(createOrderAsync.pending, (state) => {
            state.status = "loading";
        })
        .addCase(createOrderAsync.fulfilled, (state, action) => {
            state.status = "idle",
            state.orders.push(action.payload)
        })
    }
})

export default orderSlice.reducer