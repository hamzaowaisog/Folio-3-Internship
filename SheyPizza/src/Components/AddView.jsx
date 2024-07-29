import { Button, Form, Input, Checkbox, message } from 'antd';
import "../CSS/AddPizza.css";
import { useState } from 'react';

export default function AddView() {
  const [form] = Form.useForm();
  const [checkedVariants, setCheckedVariants] = useState([]);
  const [prices, setPrices] = useState({});
  const [imageUrl, setImageUrl] = useState('');

  const handleVariantChange = (checkedValues) => {
    setCheckedVariants(checkedValues);
  };

  const handlePriceChange = (e, variant) => {
    setPrices({
      ...prices,
      [variant]: e.target.value
    });
  };

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  const onFinish = (values) => {
    console.log('Form values:', values);
    console.log('Prices:', prices);
    message.success('Pizza added successfully!');
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    message.error('Failed to add pizza.');
  };

  return (
    <div className="box">
      <h1 className="heading">Add Pizza</h1>
      <Form
        form={form}
        name="addPizza"
        labelCol={{ xs: { span: 24 }, sm: { span: 8 } }}
        wrapperCol={{ xs: { span: 24 }, sm: { span: 16 } }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Pizza Name"
          name="PizzaName"
          rules={[{ required: true, message: 'Please input the pizza name!' }]}
        >
          <Input placeholder="Alfredo" />
        </Form.Item>

        <Form.Item
          label="Image URL"
          name="ImageUrl"
          rules={[{ required: true, message: 'Please input the image URL!' }]}
        >
          <Input
            placeholder="https://www.example.com/image.jpg"
            onChange={handleImageUrlChange}
          />
        </Form.Item>

        {imageUrl && (
          <div className="image-preview"><center>
            <img src={imageUrl} alt="Pizza Preview" /></center>
          </div>
        )}

        <Form.Item
          label="Description"
          name="Description"
          rules={[{ required: true, message: 'Please input the description!' }]}
        >
          <Input.TextArea placeholder="Description" />
        </Form.Item>

        <Form.Item
          label="Variants"
          name="Variants"
          rules={[{ required: true, message: 'Please select at least one variant!' }]}
        >
          <Checkbox.Group onChange={handleVariantChange}>
            <div className="variant-group">
              <div className="variant-item">
                <Checkbox value="Small">Sm</Checkbox>
                {checkedVariants.includes('Small') && (
                  <Input
                    type="number"
                    placeholder="Price"
                    onChange={(e) => handlePriceChange(e, 'Small')}
                    className="variant-price-input"
                  />
                )}
              </div>
              <div className="variant-item">
                <Checkbox value="Medium">Md</Checkbox>
                {checkedVariants.includes('Medium') && (
                  <Input
                    type="number"
                    placeholder="Price"
                    onChange={(e) => handlePriceChange(e, 'Medium')}
                    className="variant-price-input"
                  />
                )}
              </div>
              <div className="variant-item">
                <Checkbox value="Large">Lg</Checkbox>
                {checkedVariants.includes('Large') && (
                  <Input
                    type="number"
                    placeholder="Price"
                    onChange={(e) => handlePriceChange(e, 'Large')}
                    className="variant-price-input"
                  />
                )}
              </div>
            </div>
          </Checkbox.Group>
        </Form.Item>

        <Form.Item
          wrapperCol={{ xs: { span: 24, offset: 0 }, sm: { span: 16, offset: 8 } }}
        >
          <Button type="primary" danger htmlType="submit">
            Add Pizza
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
