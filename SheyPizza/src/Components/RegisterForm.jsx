import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
import "../CSS/form.css";

const onFinish = (values) => {
    console.log("Success:", values);
  };
  
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
export default function RegisterForm() {
  return (
    <>
      <div className="box">
        <h1 className="heading">REGISTER</h1>
        <Form
          name="register"
          labelCol={{
            xs: { span: 24 },
            sm: { span: 8 },
          }}
          wrapperCol={{
            xs: { span: 24 },
            sm: { span: 16 },
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Name"
            name="Name"
            rules={[
              {
                required: true,
                message: "Please input your Name!",
              },
            ]}
          >
            <Input placeholder="Name..." />
          </Form.Item>
          <Form.Item
            label="Email"
            name="Email"
            rules={[
              {
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input placeholder="email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="Confirm-Password"
            name="Confirm-password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
              ({getFieldValue}) => ({
                validator(_,value){
                    if(!value || getFieldValue("password") === value){
                        return Promise.resolve();
                    }
                    return Promise.reject(new Error("The two passwords that you entered do not match!"));
                },
              }),
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>


          <Form.Item
            wrapperCol={{
              xs: { offset: 0, span: 24 },
              sm: { offset: 8, span: 16 },
            }}
          >
            <Button type="primary" danger htmlType="submit">
              Submit
            </Button>
          </Form.Item>
          <Form.Item
            wrapperCol={{
              xs: { offset: 0, span: 24 },
              sm: { offset: 8, span: 16 },
            }}
          >
            <Link className="Link" to="/register">
              Already Registered? Click Here to Login
            </Link>
          </Form.Item>
        </Form>
      </div>
    </>
);
}
