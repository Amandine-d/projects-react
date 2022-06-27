import { NavLink } from 'react-router-dom';

import classes from './MainHeader.module.css';

const MainHeader = () => {
  //Forthe className:
  //With NavLinktakes a function that give information about the link
  //className={(navData) => {navData.isActive ? ' ' : ''}}
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to='/welcome'>Welcome</NavLink>
          </li>
          <li>
            <NavLink to='/products'>Products</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
