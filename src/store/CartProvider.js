import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    let updatedItems = [];
    const itemAlreadyInCart = state.items.findIndex((item) => item.id === action.item.id);
    if(itemAlreadyInCart >= 0){
      updatedItems = state.items.concat();
      updatedItems[itemAlreadyInCart].amount += action.item.amount;
    }
    else{
      updatedItems = state.items.concat(action.item); //concat generates a new array
    }
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    return {
      items:updatedItems,
      totalAmount:updatedTotalAmount
    }
  }
  else if(action.type === "REMOVE"){
    const updatedItems = state.items.filter((item) => {
      return item.id != action.id;
    });
    return {
      items:updatedItems,
    }
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCardAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCardAction({ type: "ADD", item: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCardAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
