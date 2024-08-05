import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { PostUserData } from "../API/PutData";

const RegisterUser = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    console.log("Success:", values);
    message.success("User Registered Successfully");
    const { confirmPassword, ...withoutConfimPass } = values;
    console.log(withoutConfimPass);
    await PostUserData(withoutConfimPass, navigate);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return {
    onFinish,
    onFinishFailed,
  };
};
export default RegisterUser;
