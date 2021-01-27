import React from 'react';
import classes from './SideNavItems.module.css';
import { NavLink } from 'react-router-dom';

const SideNavItem = (props) => {
    return (
        <li className={classes.NavItemList}>
            <NavLink to={props.Link} exact={props.exact} activeClassName={classes.active}>
                <div className={classes.NavItemCard}>
                    <i className={classes.NavIcon}>{props.icon}</i>
                    <p className={classes.NavName}>{props.menu}</p>
                </div>
            </NavLink>
        </li>
    );
};

export default SideNavItem;