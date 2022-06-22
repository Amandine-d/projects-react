import { useContext } from 'react';
import CartItem from './CartItem';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import Checkout from './Checkout';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  console.log(CartContext, 'cartcontext');
  console.log(cartCtx, 'cartctx');

  const totalAmount = `£${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);

  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item, amount: 1});
    //Add Item when in cart
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
    {cartCtx.items.map((item) => (
      <CartItem
        key={item.id}
        name={item.name}
        amount={item.amount}
        price={item.price}
        onRemove={cartItemRemoveHandler.bind(null, item.id)}
        onAdd={cartItemAddHandler.bind(null, item)}
      />
    ))}
  </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>
      <Checkout />
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose} >
          Close
        </button>
        {hasItems && <button className={classes.button}>
          Order
        </button>}
      </div>
    </Modal>
  );
};

export default Cart;
