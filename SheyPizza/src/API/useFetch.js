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
        setData(result.data);
      } catch (error) {
        setData([]);
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchdata();
  }, [endPoint]);

  return {
    data,
    isError,
    isLoading,
  };
};

export default useFetchData;
