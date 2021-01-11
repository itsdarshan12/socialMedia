import React from 'react';
import classes from './Toolbar.module.css';
import NavItems from '../NavItems/NavItems';
const Toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <nav>
                <NavItems />
            </nav>
        </header>
    );
};

export default Toolbar;