import React from "react";
import classes from './MealItem.module.css';
import Card from '../UI/Card';

const MealItem = (props) => {
  return(
    <li className={classes.meal}>
      <div>     
        <h3 className={classes.h3}>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{`$${props.price.toFixed(2)}`}</div>
      </div>
      <div>
        
      </div>
    </li>
  );
};

export default MealItem;