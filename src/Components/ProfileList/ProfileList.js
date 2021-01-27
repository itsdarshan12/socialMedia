import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classes from './ProfileList.module.css';

const ProfileList = (props) => {
    return (
        <Col sm={3}>
            <Link to={{
                pathname: `${props.Link}${props.profileName}`,
                state: { profileName: props.profileName, username: props.username }
            }}>
                <div className={classes.ProfileCard}>
                    <img src={props.image} className={classes.FriendProfileImg} alt="ProfileImage" />
                    <p className={classes.ProfileName}>{props.profileName}</p>
                    <p className={classes.UserName}>{props.username}</p>
                </div>
            </Link>
        </Col>
    );
};

export default ProfileList;