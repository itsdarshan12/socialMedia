import React from 'react';
import classes from './Layout.module.css';
import Aux from '../Auxiliary/Auxiliary';
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar';
const Layout = (props) => {
    return (
        <Aux>
            <Toolbar />
            <main className={classes.MainContent}>
                {props.children}
            </main>
        </Aux>
    );
};

export default Layout;;