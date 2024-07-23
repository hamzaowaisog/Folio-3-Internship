import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";


export const fetchData = () =>{
    return async(dispatch) =>{
         const fetchHandler =async() =>{
            const res = await fetch ("https://redux-http-6581f-default-rtdb.firebaseio.com/cartItems.json")
            const data = await res.json()
            return data;
         }
         try{
            const cartData = await fetchHandler();
            // dispatch(cartActions.replaceData(cartData));
         }
         catch(error){
            dispatch(uiActions.showNotification({
                message : "Fetching data failed",
                type : "error",
                open : true
            }))
         
         }
    }
}

export const sendCartData = (cart) => {
    return async (dispatch) => {
      dispatch(
        uiActions.showNotification({
          message: "Sending cart data",
          type: "warning",
          open: true,
        })
      );
      const sendRequest = async () => {
        const res = await fetch(
          "https://redux-http-6581f-default-rtdb.firebaseio.com/cartItems.json",
          {
            method: "PUT",
            body: JSON.stringify(cart),
          }
        );
        dispatch(
          uiActions.showNotification({
            message: "Sent cart data successfully",
            type: "success",
            open: true,
          })
        );
      };
      try {
        await sendRequest();
      } catch (err) {
        dispatch(
          uiActions.showNotification({
            message: "Sending cart data failed",
            type: "error",
            open: true,
          })
        );
      }
    };
  };