import { message } from "antd";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { fetchSpecificPizza } from "../API/useFetch";
import { UpdatePizzaData } from "../API/UpdateData";
// import { fetchPizzaWrapper } from "./FetchPizzaWrapper";

const UpdatePizza = () => {
  const { id } = useParams();
  const [imageUrl, setImageUrl] = useState("");
  // const [PizzaData, setPizzaData] = useState(null);
  // const PizzaData = fetchPizzaWrapper();

  const navigate = useNavigate();

  const handleImageUrlChange = (e, setFieldValue) => {
    setImageUrl(e.target.value);
    setFieldValue("img", e.target.value);
  };

  // const getPizzaData = async () => {
  //   const data = await fetchSpecificPizza(id);
  //   setPizzaData(data);
  // };
  // useEffect(() => {
  //   getPizzaData();
  // }, [id]);

  const onFinish = async (values) => {
    try {
      await UpdatePizzaData(id, values, navigate);
      console.log("Form values:", values);
      message.success("Pizza Updated successfully!");
    } catch (error) {
      console.error("Error posting pizza:", error);
      throw error;
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    message.error("Failed to add pizza.");
  };
  return {
    imageUrl,
    setImageUrl,
    handleImageUrlChange,
    onFinish,
    onFinishFailed,
    // PizzaData,
    // setPizzaData
  };
};
export default UpdatePizza;
