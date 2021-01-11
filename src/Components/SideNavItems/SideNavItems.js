import React from 'react';
import classes from './SideNavItems.module.css';

const SideNavItem = (props) => {
    return (
        <li className={classes.NavItemList}>
            <div className={classes.NavItemCard}>
                <i className={classes.NavIcon}>{props.icon}</i>
                <p className={classes.NavName}>{props.menu}</p>
            </div>
        </li>
    );
};

export default SideNavItem;