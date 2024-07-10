import {Link} from "react-router-dom";
import CartFunction from "../Functionality/Cart";

const MenuFunction = () =>{
  const {
    cart
  } = CartFunction();
    const menuItems = [
        { key: "1", label: <Link to={"/login"} >Login</Link> },
        { key: "2", label: <Link to={"/cart"}>Cart {cart.length} </Link> },
      ];
    return{
        menuItems
    };

}
export default MenuFunction ;