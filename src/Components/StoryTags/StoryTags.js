import React from 'react';
import classes from './StoryTags.module.css';
import { Container, Col, Row, Button } from 'react-bootstrap';

const StoryTag = (props) => {
    return (
        <li className={classes.StoryList}>
            <Row>
                <Col sm={4}>
                    <img src={props.ProfilePic} alt="Profile" className={classes.StoryProfilePic} />
                </Col>
                <Col sm={8}>
                    <p className={classes.StoryUserName}>{props.ProfileName}</p>
                    <p>05 Jan 2021</p>
                </Col>
            </Row>
        </li>
    );
};

export default StoryTag;