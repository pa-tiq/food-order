import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "./Modal";
import CartContext from "../../store/cart-context";

const calculateTotalPrice = (items) => {
  return items.reduce((currentNumber, item) => {
    return currentNumber + (item.price * item.amount);
  }, 0);
};

const Cart = (props) => {

  const cartContext = useContext(CartContext);

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartContext.items.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Price</span>
        <span>{`$${(calculateTotalPrice(cartContext.items)).toFixed(2)}`}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
