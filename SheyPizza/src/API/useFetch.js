import { createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "./api";

export const fetchPizzaData = createAsyncThunk('pizza/fetchData', async(endpoint)=>{
  return getData(endpoint).then(response => response.data);
});

export const fetchUserData = createAsyncThunk('user/fetchData', async(endpoint)=>{
  return getData(endpoint).then(response => response.data);
})

export const fetchSpecificPizza = async (id) =>{
  try{
    const response = await getData(`/Pizza/${id}`);
    console.log(response.data);
    return response.data;
  }
  catch (error){
    console.error('Error fetching pizza:', error);
    throw error;
  }
}