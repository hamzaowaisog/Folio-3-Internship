import {configureStore, createSlice} from '@reduxjs/toolkit'


const counterSlice = createSlice({
    name: "counter" ,
    initialState: { counter:0},
    reducers: {
        INC: state => {
            state.counter++
        },
        DEC: state => {
            state.counter--
        },
        ADD: (state, action) => {
            state.counter += action.payload
        }
    }

})
export const actions = counterSlice.actions;

const store = configureStore({
    reducer: counterSlice.reducer
})
export default store;