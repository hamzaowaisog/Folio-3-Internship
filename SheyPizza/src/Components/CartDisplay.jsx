import {useCart} from "../Functionality/CartContext";
export default function CartDisplay(){
   const {
    cart
   } = useCart();
    return(
        <div>
            <h1>Cart</h1>
            <div>
                {cart.map((item, index) => (
                    <div key={index}>
                        <h2>{item.pizza.name}</h2>
                        <p>Variant: {item.variant}</p>
                        <p>Quantity: {item.quantity}</p>
                    </div>
                ))}
            </div>
      </div>
    )
}