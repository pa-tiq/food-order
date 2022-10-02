import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item); //concat generates a new array
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    return {
      items:updatedItems,
      totalAmount:updatedTotalAmount
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
    items: [],
    totalAmount: 0,
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