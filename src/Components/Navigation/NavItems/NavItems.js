import React, { useContext } from 'react';
import classes from './NavItems.module.css';
// import Aux from '../../../HOC/Auxiliary/Auxiliary';
import NavItem from './NavItem/NavItem';
import { Row, Col } from 'react-bootstrap';
import * as Icons from '../../../Assets/Icons/Icons';
import { AuthContext } from '../../../HOC/Auth-Context/auth-context';
import Aux from '../../../HOC/Auxiliary/Auxiliary';
const NavItems = (props) => {
    const authContext = useContext(AuthContext);


    const fnLogOutHandler = (oEvent) => {
        authContext.logout();
    };

    return (
        <ul className={classes.NavItems}>
            <Row>
                <Col sm={3}>
                    <NavItem Link="/" exact>SOCIAL MEDIA</NavItem>
                </Col>
                <Col sm={7}>
                    {authContext.isAuthenticated ?
                        <Aux>
                            <input placeholder="Search here" className={classes.SearchInput} />
                            <button className={classes.SearchBtn}>{Icons.SearchIcon}</button>
                        </Aux>
                        :
                        null
                    }
                </Col>
                <Col sm={2}>
                    {authContext.isAuthenticated ?
                        <button className={classes.LogOut} onClick={(oEvent) => fnLogOutHandler(oEvent)}>Logout</button>
                        : null}
                </Col>
            </Row>
        </ul>
    );
};

export default NavItems;