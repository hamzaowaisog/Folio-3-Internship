import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";
import "../CSS/form.css";

const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export default function LoginForm() {
  return (
    <div className="box">
      <h1 className="heading">LOGIN</h1>
      <Form
        name="login"
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
          label="Email"
          name="Email"
          rules={[
            {
              required: true,
              message: "Please input your Email!",
            },
          ]}
        >
          <Input />
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
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            xs: { offset: 0, span: 24 },
            sm: { offset: 8, span: 16 },
          }}
        >
          <Checkbox>Remember me</Checkbox>
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
            <Link className="Link" to="/register">Click Here to Register</Link>
            </Form.Item>
       
      </Form>
    </div>
  );
}
