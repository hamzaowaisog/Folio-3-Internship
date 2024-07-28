import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
import "../CSS/form.css";
import { Field, Formik } from "formik";
import SignUpSchema from "../Functionality/SignUpSchema";

const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};
export default function RegisterForm() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignUpSchema}
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
                onFinish={handleSubmit}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  label="Name"
                  name="Name"
                  validateStatus={errors.name && touched.name ? "error" : ""}
                  help={errors.name && touched.name ? errors.name : ""}
                >
                  <Field name="name">
                    {({ field }) => (
                      <Input
                        {...field}
                        placeholder="Name..."
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    )}
                  </Field>
                </Form.Item>
                <Form.Item
                  label="Email"
                  name="Email"
                  validateStatus={errors.email && touched.email ? "error" : ""}
                  help={errors.email && touched.email ? errors.email : ""}
                >
                  <Field name="email">
                    {({ field }) => (
                      <Input
                        {...field}
                        placeholder="Email..."
                        value={values.email}
                        onChange={handleChange}
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
                  hasFeedback
                >
                  <Field name="password">
                    {({ field }) => (
                      <Input.Password
                        {...field}
                        placeholder="Password..."
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    )}
                  </Field>
                </Form.Item>
                <Form.Item
                  label="Confirm-Password"
                  name="Confirm-password"
                  validateStatus={
                    errors.confirmPassword && touched.confirmPassword
                      ? "error"
                      : ""
                  }
                  help={
                    errors.confirmPassword && touched.confirmPassword
                      ? errors.confirmPassword
                      : ""
                  }
                  hasFeedback
                >
                  <Field name="confirmPassword">
                    {({ field }) => (
                      <Input.Password
                        {...field}
                        placeholder="Confirm Password..."
                        value={values.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    )}
                  </Field>
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
                  <Link className="Link" to="/login">
                    Already Registered? Click Here to Login
                  </Link>
                </Form.Item>
              </Form>
            </div>
          </>
        );
      }}
    </Formik>
  );
}
