import React, { useContext } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const calculateNumberOfCartItems = (items) => {
  return items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);
};

const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext);
  let numberOfCartItems = calculateNumberOfCartItems(cartContext.items);

  return (
    <button className={classes.button} onClick={props.onShowCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
