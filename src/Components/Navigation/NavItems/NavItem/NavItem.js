import React from 'react';
import classes from './NavItem.module.css';
import { NavLink } from 'react-router-dom';
const NavItem = (props) => {
    const cssNavItem = [classes.NavItem];
    return (
        <li className={cssNavItem.join(" ")}>
            <NavLink
                to={props.Link}
                activeClassName={classes.active}
                exact={props.exact}
            >
                {props.children}
            </NavLink>
        </li>
    );
};

export default NavItem;;