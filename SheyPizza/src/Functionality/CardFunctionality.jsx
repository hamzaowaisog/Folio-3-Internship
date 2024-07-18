import { useEffect, useState } from "react";
import GetPizza from "../API/GetPizza";

const CardFunctionality = () => {
  const { pizza, isError } = GetPizza();
  const [pizzaStates, setPizzaStates] = useState([]);

  useEffect(() => {
    if (pizza.length > 0) {
      const initialState = pizza.map((item) => ({
        name: item.name,
        img: item.img,
        description: item.description,
        variants: item.variant || [],
        selectedVariant: item.variant ? item.variant[0].name : "",
        quantity: 1,
      }));
      setPizzaStates(initialState);
    }
  }, [pizza]);

  const handleVariantChange = (index, value) => {
    const updatedPizzaStates = [...pizzaStates];
    updatedPizzaStates[index].selectedVariant = value;
    setPizzaStates(updatedPizzaStates);
  };

  const handleQuantityChange = (index, value) => {
    const updatedPizzaStates = [...pizzaStates];
    updatedPizzaStates[index].quantity = value;
    setPizzaStates(updatedPizzaStates);
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
    handleVariantChange,
    handleQuantityChange,
    calculatePrice,
  };
};

export default CardFunctionality;
