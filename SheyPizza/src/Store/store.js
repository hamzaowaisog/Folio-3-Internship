import { configureStore } from "@reduxjs/toolkit";
import pizzaSlice from "./pizzaSlice";



const store = configureStore({
    reducer:{
        pizza : pizzaSlice.reducer,
    }
});

export default store;