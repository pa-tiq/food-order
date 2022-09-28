import React, {Fragment, useState} from 'react';
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import Input from '../UI/Input';

const MealItemForm = () => {

  const [amount, setAmount] = ueState(0);
  
  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };

  return (
    <Form>
      <Input className={classes.form}
        type='number'
        min='0'
        max='10'
        onChange={amountChangeHandler}
        value={amount}
      />
      <button className={classes.button}></button>
    </Form>
  );
};

export default MealItemForm;