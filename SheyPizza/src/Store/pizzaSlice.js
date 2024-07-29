import { createSlice } from "@reduxjs/toolkit";
import { fetchPizzaData } from "../API/useFetch";

const pizzaSlice = createSlice({
  name: "pizza",
  initialState: {
    pizzaStates: [],
    isError: "",
    isLoading: true,
  },
  reducers: {
    setPizzaStates: (state, action) => {
      state.pizzaStates = action.payload;
    },
    updateVariant: (state, action) => {
      const { index, value } = action.payload;
      state.pizzaStates[index].selectedVariant = value;
    },
    updateQuantity: (state, action) => {
      const { index, value } = action.payload;
      state.pizzaStates[index].quantity = value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzaData.pending, (state) => {
        state.isLoading = true;
        state.isError = "";
      })
      .addCase(fetchPizzaData.fulfilled, (state, action) => {
        state.isLoading = false;
        const initialState = action.payload.map((item) => ({
          id: item.id,
          name: item.name,
          img: item.img,
          description: item.description,
          variants: item.variant || [],
          selectedVariant: item.variant ? item.variant[0].name : "",
          quantity: 1,
        }));
        state.pizzaStates = initialState;
      })
      .addCase(fetchPizzaData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
        console.log(action.error);
        state.pizzaStates = [];
      });
  },
});

export const pizzaAction = pizzaSlice.actions;

export default pizzaSlice;
