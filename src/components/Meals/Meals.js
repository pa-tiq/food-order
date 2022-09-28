import MealsSummary from "./MealsSummary";
import MealsAvailable from "./MealsAvailable";
import React, { Fragment } from "react";

const Meals = () => {
  return(
    <Fragment>
      <MealsSummary/>
      <MealsAvailable/>
    </Fragment>
  );
};

export default Meals;