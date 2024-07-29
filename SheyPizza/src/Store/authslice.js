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

        },
        logout: state => {
            state.isAuthenticated = false;
            state.data = null;
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