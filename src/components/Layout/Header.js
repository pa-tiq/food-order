import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';
import { Fragment } from 'react';
import the_world_is_not_enough from '../../assets/the_world_is_not_enough.jpg';

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>buceta</h1>
        <HeaderCartButton/>
      </header>
      <img/>
    </Fragment>
  );
};

export default Header;
