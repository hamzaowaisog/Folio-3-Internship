import {createSlice} from "@reduxjs/toolkit";

const pizzaSlice = createSlice({
    name : 'pizza',
    initialState: {
        pizzaStates: [],
        isError : '',
    } 

})

export default pizzaSlice;