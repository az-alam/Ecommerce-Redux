import { configureStore } from "@reduxjs/toolkit";
import ecommerceReducer from './slices/Slice';

export default configureStore({
    reducer:{
        ecommerce:ecommerceReducer
    }
})