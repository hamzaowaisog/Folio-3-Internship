import { useState } from "react"
import Pizza from "../Data/PizzaData";

const CardFunctionality = () =>{
    const initialState = Pizza.map((pizza) => ({
        quantity: 1,
        variant: pizza.variant? pizza.variant[0].name : "",
      }));
    
      const [pizzaStates, setPizzaStates] = useState(initialState);
    
      const handleVariantChange = (index, value) => {
        const updatedPizzaStates = [...pizzaStates];
        updatedPizzaStates[index].variant = value;
        setPizzaStates(updatedPizzaStates);
      };
    
      const handleQuantityChange = (index , value) => {
        const updatedPizzaStates = [...pizzaStates];
        updatedPizzaStates[index].quantity = value;
        setPizzaStates(updatedPizzaStates);
      }
    
      const calculatePrice = (index) => {
        const pizza = Pizza[index];
        if (!pizza || !pizza.variant) {
          return 0;
        }
        const selectedVariant = pizza.variant.find(
          (v) => v.name === pizzaStates[index].variant
        );
        return selectedVariant ? selectedVariant.price * pizzaStates[index].quantity : 0;
      };
      return {
        pizzaStates,
        handleVariantChange,
        handleQuantityChange,
        calculatePrice
      
    }
    
};

export default CardFunctionality;

