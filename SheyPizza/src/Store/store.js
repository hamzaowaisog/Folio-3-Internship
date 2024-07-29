import { configureStore } from "@reduxjs/toolkit";
import pizzaSlice from "./pizzaSlice";
import cartSlice from "./cartSlice";
import authSlice from "./authslice";



const store = configureStore({
    reducer:{
        pizza : pizzaSlice.reducer,
        cart  : cartSlice.reducer,
        auth : authSlice.reducer,
    }
});

export default store;

