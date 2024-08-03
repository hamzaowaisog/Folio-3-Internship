import { message } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPizzaData } from "../API/useFetch";
import { cartAction } from "../Store/cartSlice";


const CartDisplayFunction = () => {
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
    return{
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
    }

}
export default CartDisplayFunction;