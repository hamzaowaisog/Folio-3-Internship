import React from 'react';
import { useCart } from "../Functionality/CartContext";
import { Card, Button, Typography, Row, Col, Avatar, Divider, Space } from 'antd';
import { PlusOutlined, MinusOutlined, DeleteOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

export default function CartDisplay() {
  const { cart, addToCart, removeFromCart, pizzaData } = useCart();

  const handleIncreaseQuantity = (item) => {
    addToCart(item.pizza, item.variant, 1); // Increase quantity by 1
  };

  const handleDecreaseQuantity = (item) => {
    if (item.quantity > 1) {
      addToCart(item.pizza, item.variant, -1); // Decrease quantity by 1 if > 1
    }
  };

  const handleRemoveItem = (item) => {
    removeFromCart(item.pizza, item.variant); // Remove item from the cart
  };

  const getPrice = (pizzaName, variantName) => {
    const pizza = pizzaData.find((p) => p.name === pizzaName);
    if (pizza) {
      const variant = pizza.variant.find((v) => v.name === variantName);
      return variant ? variant.price : 0;
    }
    return 0;
  };

  const getImageUrl = (pizzaName) => {
    const pizza = pizzaData.find((p) => p.name === pizzaName);
    return pizza ? pizza.img : '';
  };

  const totalPrice = cart.reduce((total, item) => {
    return total + getPrice(item.pizza.name, item.variant) * item.quantity;
  }, 0);

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: 'auto' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Your Cart</Title>
      <Row gutter={[32, 32]}>
        {cart.map((item, index) => (
          <Col key={index} xs={24} sm={12} lg={8}>
            <Card
              hoverable
              style={{ borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}
              cover={<img alt={item.pizza.name} src={getImageUrl(item.pizza.name)} style={{ height: '200px', objectFit: 'cover', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />}
            >
              <Card.Meta
                avatar={<Avatar src={getImageUrl(item.pizza.name)} size={64} style={{ border: '2px solid #fff' }} />}
                title={<Title level={4} style={{ marginBottom: 0, color: '#333' }}>{item.pizza.name}</Title>}
                description={
                  <>
                    <Text style={{ display: 'block', color: '#666' }}>Variant: {item.variant}</Text>
                    <Text style={{ display: 'block', color: '#666' }}>Quantity: {item.quantity}</Text>
                    <Text strong style={{ display: 'block', fontSize: '1.2em', color: '#333' }}>Price: ${getPrice(item.pizza.name, item.variant) * item.quantity}</Text>
                  </>
                }
              />
              <Space style={{ marginTop: '16px' }}>
                <Button
                  type="primary"
                  shape="circle"
                  icon={<PlusOutlined />}
                  onClick={() => handleIncreaseQuantity(item)}
                />
                <Button
                  type="primary"
                  shape="circle"
                  icon={<MinusOutlined />}
                  onClick={() => handleDecreaseQuantity(item)}
                  disabled={item.quantity <= 1}
                />
                <Button
                  type="danger"
                  shape="circle"
                  icon={<DeleteOutlined />}
                  onClick={() => handleRemoveItem(item)}
                />
              </Space>
            </Card>
          </Col>
        ))}
      </Row>
      <Divider style={{ margin: '32px 0' }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Title level={3} style={{ color: '#333' }}>Total: ${totalPrice}</Title>
        <Button type="primary" size="large" style={{ borderRadius: '5px', backgroundColor: '#5C6AC4', borderColor: '#5C6AC4' }}>
          Checkout
        </Button>
      </div>
    </div>
  );
}