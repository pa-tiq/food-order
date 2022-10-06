import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "./Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const calculateTotalPrice = (items) => {
  return items
    .reduce((currentNumber, item) => {
      return currentNumber + item.price * item.amount;
    }, 0)
    .toFixed(2);
};

const Cart = (props) => {
  const cartContext = useContext(CartContext);
  const hasItems = cartContext.items.length > 0;

  const cartItemAddHandler = (item) => {
    item.amout = 1;
    cartContext.addItem(item);
  };
  const cartItemRemoveHandler = (id) => {
    cartContext.removeItem(id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Price</span>
        <span>{calculateTotalPrice(cartContext.items)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        {hasItems ? (
          <button className={classes.button}>Order</button>
        ) : (
          <button className={classes.button} disabled>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
