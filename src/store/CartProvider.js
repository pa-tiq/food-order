import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    let updatedItems = [];
    const indexItemAlreadyInCart = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    if (indexItemAlreadyInCart >= 0) {
      updatedItems = [...state.items];
      updatedItems[indexItemAlreadyInCart].amount += action.item.amount;
      console.log("amount ", updatedItems[indexItemAlreadyInCart].amount);
    } else {
      updatedItems = state.items.concat(action.item); //concat generates a new array
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  } else if (action.type === "REMOVE") {
    let updatedItems = [];
    const itemIndexToRemove = state.items.findIndex(
      (item) => item.id === action.id
    );
    const updatedTotalAmount =
      state.totalAmount - state.items[itemIndexToRemove].price;
    if (state.items[itemIndexToRemove].amount === 1) {
      updatedItems = state.items.filter((item) => {
        return item.id !== action.id;
      });
    } else {
      updatedItems = [...state.items];
      updatedItems[itemIndexToRemove].amount -= 1;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  } else return defaultCartState;
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
