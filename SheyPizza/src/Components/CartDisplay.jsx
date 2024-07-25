// import { useCart } from "../Functionality/CartContext";
import { Card, Button, Typography, Space, message } from "antd";
import { PlusOutlined, MinusOutlined, DeleteOutlined } from "@ant-design/icons";
import "../CSS/Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchPizzaData } from "../API/useFetch";
import { cartAction } from "../Store/cartSlice";
import { useEffect } from "react";

const { Title, Text } = Typography;

export default function CartDisplay() {
  const dispatch = useDispatch();

  const pizzaData = useSelector((state) => state.cart.items);
  console.log(pizzaData);
  const cart = useSelector((state) => state.cart.initialCart);
  useEffect(() => {
    dispatch(fetchPizzaData("/Pizza"));
  }, [dispatch]);

  const handleIncreaseQuantity = (item) => {
    dispatch(
      cartAction.updatingCart({
        pizza: item.pizza,
        variant: item.variant,
        quantity: 1,
      })
    );
  };

  const handleDecreaseQuantity = (item) => {
    if (item.quantity > 1) {
      dispatch(
        cartAction.updatingCart({
          pizza: item.pizza,
          variant: item.variant,
          quantity: -1,
        })
      );
    }
  };

  const handleRemoveItem = (item) => {
    dispatch(
      cartAction.removingFromCart({ pizza: item.pizza, variant: item.variant })
    );
  };

  const getPrice = (pizzaName, variantName) => {
    const pizza = pizzaData.find((p) => p.name === pizzaName);
    if (pizza) {
      const variant = pizza.variant.find((v) => v.name === variantName);
      return variant ? variant.price : 0;
    }
    console.log(pizza);
    return 0;
  };

  const getImageUrl = (pizzaName) => {
    const pizza = pizzaData.find((p) => p.name === pizzaName);
    return pizza ? pizza.img : "";
  };
  console.log(cart);
  const totalPrice = cart.reduce((total, item) => {
    return (
      total +
      getPrice(item.pizza.name, item.pizza.selectedVariant) * item.quantity
    );
  }, 0);

  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Item Successfully deleted",
      duration: 5,
    });
  };

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
