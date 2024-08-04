import {createSlice} from "@reduxjs/toolkit";
import { fetchUserData } from "../API/useFetch";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAdmin:false,
        isAuthenticated: false,
        data : null,
    },
    reducers: {
        login: (state,action) => {
            state.isAuthenticated = action.payload.auth;
            state.isAdmin = action.payload.admin;
            localStorage.setItem('authState', JSON.stringify(state));

        },
        logout: state => {
            state.isAuthenticated = false;
            state.isAdmin = false;
            state.data = null;
            localStorage.removeItem('authState');
        }
    },
    extraReducers: (builder) =>{
        builder.addCase(fetchUserData.fulfilled, (state, action) => {
            state.data = action.payload;
            
        })
    }
})
export const authActions = authSlice.actions;
export default authSlice;