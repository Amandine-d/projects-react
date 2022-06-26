import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const fetchCartData = () => {
  return (
    async (dispatch) => {
      const fetchData = async () => {
        const response = await fetch('https://react-http-c4132-default-rtdb.europe-west1.firebasedatabase.app/cart.json',
        );
        if (!response.ok) {
          throw new Error('Could not feth cart data');
        }
        const data = await response.json();
        return data;
      };
      try {
        const cartData = await fetchData();
        dispatch(cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        }));
      } catch (error) {
        dispatch(
          uiActions.showNotification({
            status: 'Error',
            title: 'Error!',
            message: 'fetching cart data failed',
          })
        );
      }
    }
  )
}

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart Data!',
      })
    );

    const sendRequest = async () => {
      const response = await fetch('https://react-http-c4132-default-rtdb.europe-west1.firebasedatabase.app/cart.json', {
        method: 'PUT',
        body: JSON.stringify({
          items: cart.items,
          totalQuantity: cart.totalQuantity,
        }),
      });
      if (!response.ok) {
        throw new Error('Sending cart data failed');
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully!',
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'Error',
          title: 'Error!',
          message: 'Sending cart data failed',
        })
      );
    }
  };
};