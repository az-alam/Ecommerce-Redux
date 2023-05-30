import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchdata=createAsyncThunk("ecommerce",async()=>{
    const response=await axios.get('https://fakestoreapi.com/products')
    console.log(response.data)
    return response.data
})
export const ecommerceSlice=createSlice({
    name:"ecommerce",
    initialState:{
        products:[],
        loading:false,
        cart:[]
    },
    reducers:{
        setCart: (state, action)=>{
            state.cart=[...state.cart, action.payload]
        }
    },

    extraReducers:{
        [fetchdata.pending]:(state)=>{
            state.loading=true
        },
        [fetchdata.fulfilled]:(state, action)=>{
            state.loading=false;
            state.products=action.payload;
        },
    }
})

export const {setCart}=ecommerceSlice.actions;
export default ecommerceSlice.reducer