import { useEffect, useState } from "react";
import { getData } from "./api";

const useFetchData = (endPoint) => {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchdata = async () => {
      setIsLoading(true);
      try {
        const result = await getData(endPoint);
        console.log(result.data);
        setData(result.data);
      } catch (error) {
        setIsError(error.message);
      }
      finally{
        setIsLoading(false);
      }
    };
    fetchdata();
  }, [endPoint]);

  return {
    data,
    isError,
    isLoading
  };
};

export default useFetchData;
