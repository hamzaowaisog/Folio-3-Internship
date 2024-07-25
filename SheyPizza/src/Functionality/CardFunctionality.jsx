import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPizzaData } from "../API/useFetch";
import { pizzaAction } from "../Store/pizzaSlice";

const CardFunctionality = () => {
  const dispatch = useDispatch();
  const pizzaStates = useSelector((state) => state.pizza.pizzaStates);
  const isError = useSelector((state) => state.pizza.isError);
  const isLoading = useSelector((state) => state.pizza.isLoading);

  useEffect(() => {
    dispatch(fetchPizzaData("/Pizza"));
  }, [dispatch]);

  const handleVariantChange = (index, value) => {
    dispatch(pizzaAction.updateVariant({ index, value }));
  };

  const handleQuantityChange = (index, value) => {
    dispatch(pizzaAction.updateQuantity({ index, value }));
  };

  const calculatePrice = (index) => {
    const pizzaItem = pizzaStates[index];
    if (!pizzaItem || !pizzaItem.variants) {
      return 0;
    }
    const selectedVariant = pizzaItem.variants.find(
      (v) => v.name === pizzaItem.selectedVariant
    );
    return selectedVariant ? selectedVariant.price * pizzaItem.quantity : 0;
  };

  return {
    isError,
    pizzaStates,
    isLoading,
    handleVariantChange,
    handleQuantityChange,
    calculatePrice,
  };
};

export default CardFunctionality;
