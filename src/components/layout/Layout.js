import { Fragment } from 'react';
import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';

const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main className={classes.main}></main>{props.children}
    </Fragment>
  );
};

export default Layout;
