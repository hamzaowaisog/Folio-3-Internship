import { useEffect, useState } from "react";
import axios from "../API/axios";

const GetPizza = () =>{
const [pizza, setPizza] = useState([]);
  const [isError, setIsError] = useState("");

  useEffect(() => {
  const fetchdata = async () => {
    try{
    const resp = await axios.get("/Pizza");
    setPizza(resp.data);
    }
    catch(error){
      try{
        const resp = await axios.get("http://10.164.60.56:3000/Pizza");
    setPizza(resp.data);
      }
      catch(error){
        setIsError(error.message);
      }
    }
  };
  fetchdata();
},[]);

  return {
    pizza,
    isError,
  };
};

export default GetPizza;