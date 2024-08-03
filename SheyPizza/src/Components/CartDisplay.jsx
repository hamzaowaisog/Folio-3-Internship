
import { Card, Button, Typography, Space, message } from "antd";
import { PlusOutlined, MinusOutlined, DeleteOutlined } from "@ant-design/icons";
import "../CSS/Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchPizzaData } from "../API/useFetch";
import { cartAction } from "../Store/cartSlice";
import { useEffect } from "react";
import CartDisplayFunction from "../Functionality/CartDisplay";

const { Title, Text } = Typography;

export default function CartDisplay() {
 
  const {
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    handleRemoveItem,
    getPrice,
    getImageUrl,
    totalPrice,
    messageApi,
    contextHolder,
    success,
    cart
  } = CartDisplayFunction();

  return (
    <div className="parent">
      {contextHolder}
      <Title level={2} className="title">
        Your Cart
      </Title>
      <div className="child">
        <div className="childish">
          {cart.map((item, index) => (
            <Card
              key={index}
              hoverable
              className="card"
              cover={
                <img
                  alt={item.pizza.name}
                  src={getImageUrl(item.pizza.name)}
                  className="card_img"
                />
              }
            >
              <Card.Meta
                title={
                  <Title level={4} id="Cardtitle">
                    {item.pizza.name}
                  </Title>
                }
                description={
                  <>
                    <Text className="cardText">
                      Variant: {item.pizza.selectedVariant}
                    </Text>
                    <Text className="cardText">Quantity: {item.quantity}</Text>
                    <Text strong id="cardPrice">
                      Price: Rs
                      {getPrice(item.pizza.name, item.pizza.selectedVariant) *
                        item.quantity}
                    </Text>
                  </>
                }
              />
              <Space id="cardSpace">
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
                  onClick={() => {
                    handleRemoveItem(item);
                    success();
                  }}
                />
              </Space>
            </Card>
          ))}
        </div>
        <div className="RightParent">
          <Title level={3}>Total: Rs{totalPrice}</Title>
          <Button type="primary" size="large" danger id="cardButton">
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
}
