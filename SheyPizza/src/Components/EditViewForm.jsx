import { ErrorMessage, Field, FieldArray, Formik } from "formik";
import AddPizzaSchema from "../Functionality/AddPizzaSchema";
import { Button, Form, Input } from "antd";
import "../CSS/AddPizza.css";
import Loader from "./Loader";
import UpdatePizza from "../Functionality/UpdatePizzaData";
import { Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPizzaWrapper } from "../Functionality/FetchPizzaWrapper";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";

export default function EditView() {
  const {id} = useParams();
  return (
    <ErrorBoundary >
  <Suspense fallback={<Loader/>}>
    <EditForm
    id={id}/>
  </Suspense>
  </ErrorBoundary>
  );

 
}

const EditForm =  ({id}) => {
  const [PizzaData,setPizzaData] = useState(null);

  const {
    imageUrl,
    handleImageUrlChange,
    onFinish,
    onFinishFailed,
  } = UpdatePizza();

  useEffect(() =>{
    fetchPizzaWrapper(id).then(response => {
      setPizzaData(response);
    })
  },[id]);



  return (
    <div className="box">
      <h1 className="heading">Edit Pizza</h1>
      {PizzaData ? (
      <Formik
        initialValues={{
          name: PizzaData.name || "",
          img: PizzaData.img || "",
          description: PizzaData.description || "",
          variant: PizzaData.variant || [],
        }}
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
            name="Edit Pizza"
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
                    value={values.img}
                    placeholder="https://www.example.com/image.jpg"
                    onChange={(e) => {
                      handleImageUrlChange(e, setFieldValue);
                    }}
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

            <Form.Item label="Variants" name="variant">
              <FieldArray name="variant">
                {() => (
                  <div className="variant-group">
                    {values.variant.map((variant, index) => (
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
              <Button
                type="primary"
                danger
                htmlType="submit"
                disabled={isSubmitting}
              >
                Edit Pizza
              </Button>
            </Form.Item>
          </Form>
        )}
      </Formik>
      ):( <Loader/>)}
    </div>
  );
}
