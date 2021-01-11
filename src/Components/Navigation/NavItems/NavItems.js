import React from 'react';
import classes from './NavItems.module.css';
// import Aux from '../../../HOC/Auxiliary/Auxiliary';
import NavItem from './NavItem/NavItem';
import { Row, Col } from 'react-bootstrap';
import * as Icons from '../../../Assets/Icons/Icons';
const NavItems = (props) => {
    return (
        <ul className={classes.NavItems}>
            <Row>
                <Col sm={3}>
                    <NavItem Link="/" exact>LOGO</NavItem>
                </Col>
                <Col sm={7}>
                    <input placeholder="Search here" className={classes.SearchInput} />
                    <button className={classes.SearchBtn}>{Icons.SearchIcon}</button>
                </Col>
                <Col sm={2}>
                    <NavItem Link="/Signup">SignUp</NavItem>
                    <NavItem Link="/Login">Login</NavItem>
                </Col>
            </Row>
        </ul>
    );
};

export default NavItems;