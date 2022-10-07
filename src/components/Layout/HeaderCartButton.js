import React, { useContext, useEffect, useState } from "react";
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
  const [animateCart, setAnimateCart] = useState(false);
  const { items: cartItems} = cartContext;
  let numberOfCartItems = calculateNumberOfCartItems(cartItems);
  let buttonClass = `${classes.button} ${animateCart && classes.bump}`;

  useEffect(() => {
    const interval = setTimeout(() => {
      setAnimateCart(true);
    }, 100);
    return () => {           
      clearTimeout(interval);
      setAnimateCart(false); 
    }; 
    
  },[cartItems]);

  return (
    <button className={buttonClass} onClick={props.onShowCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
