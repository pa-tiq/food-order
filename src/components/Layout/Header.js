import classes from './Header.module.css'
import React, { Fragment } from 'react';
import the_world_is_not_enough from '../../assets/the_world_is_not_enough.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>buceta</h1>
        <HeaderCartButton onShowCart={props.onShowCart}/>
      </header>
      <div className={classes['main-image']}>
        <img src={the_world_is_not_enough} alt="the world is not enough"/>
      </div>      
    </Fragment>
  );
};

export default Header;
