import React, { useState, useContext } from 'react';
import { connect } from 'react-redux';
import classes from './Authentication.module.css';
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar';
import { Col, Container, Row } from 'react-bootstrap';
import * as MediaActions from '../../Assets/MediaActions/MediaActions';
import { Tabs } from "@feuer/react-tabs";
import { AuthContext } from '../../HOC/Auth-Context/auth-context';

const AuthPage = (props) => {
    const [key, setKey] = useState('home');
    const [getSignUpPayload, setSignUpPayload] = useState({});
    const [getLoginPayload, setLoginPayload] = useState({});
    const [getInputValue, setInputValue] = useState("");
    const authContext = useContext(AuthContext);

    const onCHangeInput = (oEvent, InputType) => {
        let sTextValue = oEvent.target.value;
        setInputValue(sTextValue);
        switch (InputType) {
            case "FIRSTNAME":
                setSignUpPayload({
                    ...getSignUpPayload,
                    firstName: getInputValue
                });
                break;
            case "LASTNAME":
                setSignUpPayload({
                    ...getSignUpPayload,
                    lastName: getInputValue
                });
                break;
            case "EMAIL":
                setSignUpPayload({
                    ...getSignUpPayload,
                    email: getInputValue
                });
                break;
            case "PASSWORD":
                setSignUpPayload({
                    ...getSignUpPayload,
                    password: getInputValue
                });
                break;
            case "CONFIRMPASS":
                setSignUpPayload({
                    ...getSignUpPayload,
                    confirmPassword: getInputValue
                });
                break;
            case "USERNAME":
                setSignUpPayload({
                    ...getSignUpPayload,
                    username: getInputValue
                });
                break;
            case "LOGINUSERNAME":
                setLoginPayload({
                    ...setLoginPayload,
                    loginuser: getInputValue
                });
                break;
            case "LOGINPASS":
                setLoginPayload({
                    ...setLoginPayload,
                    loginpass: getInputValue
                });
                break;
            default:
        }
    };


    const fnSignUpHandler = (oEvent) => {
        authContext.login();
        props.AuthHandler(getSignUpPayload);
        setSignUpPayload({});
    };
    const fnCancelHandler = (oEvent) => {
        setSignUpPayload({});
    };

    const fnLoginHandler = (oEvent) => {
        authContext.login();
        props.AuthHandler(getLoginPayload);
        setLoginPayload({});
    };


    return (
        <div>
            <Toolbar />
            <div className={classes.AuthPageContainer}>

            </div>
            <Container>
                <Row>
                    <Col sm={6}>
                        <img src={MediaActions.WelcomePoster} alt="Social Media Poster" className={classes.Poster} />
                    </Col>
                    <Col sm={6}>
                        <div className={classes.FormContainer}>
                            <Tabs
                                activeTab={{
                                    id: "tab1"
                                }}
                            >
                                <Tabs.Tab id="tab1" title="Sign Up">
                                    <div>
                                        <form>
                                            <Row>
                                                <Col xs={6}>
                                                    <label><b>First Name</b></label>
                                                    <input className={classes.InputField} onChange={(oEvent) => onCHangeInput(oEvent, "FIRSTNAME")} />
                                                </Col>
                                                <Col xs={6}>
                                                    <label><b>Second Name</b></label>
                                                    <input className={classes.InputField} onChange={(oEvent) => onCHangeInput(oEvent, "LASTNAME")} />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col sm={12}>
                                                    <label><b>Username</b></label><br />
                                                    <input className={classes.InputField} onChange={(oEvent) => onCHangeInput(oEvent, "USERNAME")} />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col sm={12}>
                                                    <label><b>Email-Id</b></label><br />
                                                    <input className={classes.InputField} onChange={(oEvent) => onCHangeInput(oEvent, "EMAIL")} />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xs={6}>
                                                    <label><b>Password</b></label>
                                                    <input className={classes.InputField} onChange={(oEvent) => onCHangeInput(oEvent, "PASSWORD")} />
                                                </Col>
                                                <Col xs={6}>
                                                    <label><b>Confirm Password</b></label>
                                                    <input className={classes.InputField} onChange={(oEvent) => onCHangeInput(oEvent, "CONFIRMPASS")} />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col sm={12} className={classes.MarginTop}>
                                                    <button className={classes.CancelBtn} type="button" onClick={(oEvent) => fnCancelHandler(oEvent)}>Cancel</button>
                                                    <button className={classes.ActionBtn} type="button" onClick={(oEvent) => fnSignUpHandler(oEvent)}>SignUp</button>
                                                </Col>
                                            </Row>
                                        </form>
                                    </div>
                                </Tabs.Tab>
                                <Tabs.Tab id="tab2" title="Login">
                                    <div style={{ padding: 10 }}>
                                        <form>
                                            <Row>
                                                <Col xs={12}>
                                                    <label><b>Username</b></label><br />
                                                    <input className={classes.InputField} onChange={(oEvent) => onCHangeInput(oEvent, "LOGINUSERNAME")} />
                                                </Col>
                                                <Col xs={12}>
                                                    <label><b>Password</b></label><br />
                                                    <input className={classes.InputField} onChange={(oEvent) => onCHangeInput(oEvent, "LOGINPASS")} />
                                                </Col>
                                                <Col sm={12} className={classes.MarginTop}>
                                                    <button className={classes.ActionBtn} type="button" onClick={(oEvent) => fnLoginHandler(oEvent)}>Login</button>
                                                </Col>
                                            </Row>
                                        </form>
                                    </div>
                                </Tabs.Tab>
                            </Tabs>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {

    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        AuthHandler: (oPayload) => dispatch({ type: "LOGIN", oPayload: oPayload })
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(AuthPage); 