import { createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "./api";

export const fetchPizzaData = createAsyncThunk('pizza/fetchData', async(endpoint)=>{
  return getData(endpoint).then(response => response.data);
});