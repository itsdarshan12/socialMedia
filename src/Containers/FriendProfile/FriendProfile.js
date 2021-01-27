import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
// import Aux from '../../HOC/Auxiliary/Auxiliary';
import classes from './FriendProfile.module.css';
import * as MediaActions from '../../Assets/MediaActions/MediaActions';
import GenericTag from '../../Components/UI/GenericTag/GenericTag';

const FriendProfile = (props) => {
    const [getProfileName, setProfileName] = useState("");
    const [getUserName, setUserName] = useState("");

    useEffect(() => {
        let sProfileName = props.location.state.profileName;
        let sUsername = props.location.state.username;
        setProfileName(sProfileName);
        setUserName(sUsername);
    }, []);


    return (
        <div className={classes.MainContent}>
            <Row>
                <Col sm={12}>
                    <img src={MediaActions.DefaultCover} alt="CoverPic here" className={classes.CoverPic} />
                    <div className={classes.ProfilePicContainer} >
                        <img src={MediaActions.User} alt="ProfilePic" className={classes.ProfilePic} />
                    </div>
                    <div className={classes.ProfileDetailsContainer}>
                        <Col sm={12}>
                            <h3>{getProfileName}</h3>
                            <p>{getUserName}</p>
                            <Col sm={12}>
                                <GenericTag TagTitle="About" />
                                <GenericTag TagTitle="Friends" count="10" />
                                <GenericTag TagTitle="Activities" count="12" />
                                <GenericTag TagTitle="Posts" count="30" />
                            </Col>
                        </Col>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default FriendProfile;