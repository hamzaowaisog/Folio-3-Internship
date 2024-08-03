import { Button, Form, Input, Checkbox, message } from "antd";
import { Formik, Field, ErrorMessage, FieldArray } from "formik";
import "../CSS/AddPizza.css";
import AddPizzaSchema from "../Functionality/AddPizzaSchema";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PostPizzaData } from "../API/PutData";

export default function AddView() {
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

  const initialValues = {
    name: "",
    img: "",
    description: "",
    variant: [
      { name: "small", price: "" 

      },
      {
        name: "medium",
        price: "",
      },
      {
        name: "large",
        price: "",
      },
    ],
  };

  return (
    <div className="box">
      <h1 className="heading">Add Pizza</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={AddPizzaSchema}
        onSubmit={onFinish}
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue,
          errors,
          touched,
        }) => (
          <Form
            name="addPizza"
            labelCol={{ xs: { span: 24 }, sm: { span: 8 } }}
            wrapperCol={{ xs: { span: 24 }, sm: { span: 16 } }}
            initialValues={{ remember: true }}
            onFinish={handleSubmit}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Pizza Name"
              name="name"
              validateStatus={touched.name && errors.name ? "error" : null}
              help={touched.name && errors.name ? errors.name : ""}
            >
              <Field name="name">
                {({ field }) => (
                  <Input
                    {...field}
                    placeholder="Alfredo"
                    value={values.name}
                    onBlur={handleBlur}
                  />
                )}
              </Field>
            </Form.Item>

            <Form.Item
              label="Image URL"
              name="img"
              validateStatus={touched.img && errors.img ? "error" : null}
              help={touched.img && errors.img ? errors.img : ""}
            >
              <Field name="img">
                {({ field }) => (
                  <Input
                    {...field}
                    onBlur={handleBlur}
                    placeholder="https://www.example.com/image.jpg"
                    onChange={(e) =>{handleImageUrlChange(e, setFieldValue)}}
                  />
                )}
              </Field>
            </Form.Item>

            {imageUrl && (
              <div className="image-preview">
                <center>
                  <img src={imageUrl} alt="Pizza Preview" />
                </center>
              </div>
            )}

            <Form.Item
              label="Description"
              name="description"
              validateStatus={
                touched.description && errors.description ? "error" : null
              }
              help={
                touched.description && errors.description
                  ? errors.description
                  : ""
              }
            >
              <Field name="description">
                {({ field }) => (
                  <Input.TextArea
                    {...field}
                    placeholder="A delicious pizza with creamy Alfredo sauce, topped with spinach, mushrooms, and chicken."
                    value={values.description}
                    onBlur={handleBlur}
                  />
                )}
              </Field>
            </Form.Item>

            <Form.Item
              label="Variants"
              name="variant"
            >
              <FieldArray name="variant">
                {() =>(
                  <div className="variant-group">
                    {values.variant.map((variant,index) =>(
                      <div className="variant-item" key={variant.name}>
                          <Field name={`variant.${index}.name`}>
                          {({ field }) => (
                            <Input
                              {...field}
                              placeholder={variant.name}
                              disabled
                            />
                          )}
                        </Field>
                        <Field name={`variant.${index}.price`}>
                          {({ field }) => (
                            <Input
                              {...field}
                              type="number"
                              placeholder="price"
                              onChange={handleChange}
                              className="variant-price-input"
                            />
                          )}
                        </Field>
                        <ErrorMessage
                          name={`variant.${index}.price`}
                          component="div"
                          className="error-message"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </FieldArray>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                xs: { span: 24, offset: 0 },
                sm: { span: 16, offset: 8 },
              }}
            >
              <Button type="primary" danger htmlType="submit" disabled={isSubmitting}>
                Add Pizza
              </Button>
            </Form.Item>
          </Form>
        )}
      </Formik>
    </div>
  );
}
