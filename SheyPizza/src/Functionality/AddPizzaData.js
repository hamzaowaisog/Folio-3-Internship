import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PostPizzaData } from "../API/PutData";
import { message } from "antd";

const AddPizzaData = () =>{
    const [imageUrl, setImageUrl] = useState("");
    const navigate = useNavigate();
  
    const handleImageUrlChange = (e,setFieldValue) => {
      setImageUrl(e.target.value);
      setFieldValue("img", e.target.value);
    };
  
    const onFinish = async (values) => {
     
      try{
      await PostPizzaData(values , navigate);
      console.log("Form values:", values);
      message.success("Pizza added successfully!");
      }
      catch(error) {
        console.error('Error posting pizza:', error);
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
        onFinishFailed
    }
}

export default AddPizzaData;