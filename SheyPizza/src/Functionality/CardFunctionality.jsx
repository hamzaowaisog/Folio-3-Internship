import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPizzaData } from "../API/useFetch";
import { pizzaAction } from "../Store/pizzaSlice";

const CardFunctionality = () => {
  // const { data: pizza, isError } = useFetchData("/Pizza ");
  // const [pizzaStates, setPizzaStates] = useState([]);

  const dispatch = useDispatch();
  const pizzaStates = useSelector(state => state.pizza.pizzaStates);
  const isError = useSelector(state => state.pizza.isError);
  const isLoading = useSelector(state => state.pizza.isLoading);



  useEffect(() => {
    // if (isError !== "") {
    //   setPizzaStates([]);
    //   return;
    // } 
    //   if (pizza.length > 0) {
    //     const initialState = pizza.map((item) => ({
    //       name: item.name,
    //       img: item.img,
    //       description: item.description,
    //       variants: item.variant || [],
    //       selectedVariant: item.variant ? item.variant[0].name : "",
    //       quantity: 1,
    //     }));
    //     setPizzaStates(initialState);
    //   }
    dispatch(fetchPizzaData("/Pizza"));
    
  }, [dispatch]);

  const handleVariantChange = (index, value) => {
    // const updatedPizzaStates = [...pizzaStates];
    // updatedPizzaStates[index].selectedVariant = value;
    // setPizzaStates(updatedPizzaStates);
    dispatch(pizzaAction.updateVariant({index,value}));
  };

  const handleQuantityChange = (index, value) => {
    // const updatedPizzaStates = [...pizzaStates];
    // updatedPizzaStates[index].quantity = value;
    // setPizzaStates(updatedPizzaStates);
    dispatch(pizzaAction.updateQuantity({index,value}))
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
