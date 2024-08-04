import { configureStore } from "@reduxjs/toolkit";
import pizzaSlice from "./pizzaSlice";
import cartSlice from "./cartSlice";
import authSlice from "./authslice";

const loadAuthState = () =>{
    try{
        const authState = localStorage.getItem('authState');
        if(authState === null) return undefined;
        return JSON.parse(authState);
    }catch(e){
        return undefined;
    }
}



const store = configureStore({
    reducer:{
        pizza : pizzaSlice.reducer,
        cart  : cartSlice.reducer,
        auth : authSlice.reducer,
    },
    preloadedState: {
        auth: loadAuthState() || undefined,
    }
});

export default store;

