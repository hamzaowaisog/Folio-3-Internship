import { Button, Checkbox, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "../CSS/form.css";
import SignInSchema from "../Functionality/SignInSchema";
import { Field, Formik } from "formik";
import { useDispatch} from "react-redux";
import { useEffect } from "react";
import { fetchUserData } from "../API/useFetch";
import Login from "../Functionality/Login";

export default function LoginForm() {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {checkLogin} = Login();

  const onFinish = (values) => {
    console.log("Success:", values);
    if(checkLogin(values) === 1){
      navigate("/admin");
    }
    else if(checkLogin(values) === 2){
        navigate("/");
    }
    else {
      alert("Invalid username or password");
      navigate("/login")
    }
  };

  useEffect (()=>{
    dispatch(fetchUserData("/Users"))
  },[dispatch])
  
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  
  const initialValues = {
    email: "",
    password: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignInSchema}
      onSubmit={onFinish}
    >
      {(formik) => {
        const {
          errors,
          handleSubmit,
          handleChange,
          handleBlur,
          touched,
          isValid,
          values,
          dirty,
        } = formik;
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
              onFinish={handleSubmit}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Email"
                name="Email"
                validateStatus={errors.email && touched.email ? "error" : ""}
                help={errors.email && touched.email ? errors.email : null}
              >
                <Field name="email">
                  {({ field }) => (
                    <Input
                      {...field}
                      placeholder="Email"
                      value={values.email}
                      onBlur={handleBlur}
                    />
                  )}
                </Field>
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                validateStatus={
                  errors.password && touched.password ? "error" : ""
                }
                help={
                  errors.password && touched.password ? errors.password : ""
                }
              >
                <Field name="password">
                  {({ field }) => (
                    <Input.Password
                      {...field}
                      placeholder="Password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  )}
                </Field>
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
                <Button
                  type="primary"
                  danger
                  htmlType="submit"
                  className={!(dirty && isValid) ? "disabled-btn" : ""}
                  disabled={!(dirty && isValid)}
                >
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
                  Click Here to Register
                </Link>
              </Form.Item>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
}
