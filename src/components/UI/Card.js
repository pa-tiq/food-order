import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  const cartItems = (
    <ul>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <div className={classes.card}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
      </div>
      <div>

      </div>
    </div>
  );
};

export default Card;
