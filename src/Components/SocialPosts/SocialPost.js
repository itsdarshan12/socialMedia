import React from 'react';
import classes from './SocialPost.module.css';
import { Container, Col, Row, Button } from 'react-bootstrap';
import * as MediaActions from '../../Assets/MediaActions/MediaActions';
import * as Icons from '../../Assets/Icons/Icons';

const SocialPost = (props) => {
    return (
        <div className={classes.PostContainer}>
            <Row>
                <Col sm={2}>
                    <img src={MediaActions.UserGirl} className={classes.SocialPstUserProfile} alt="ProfilePic" />
                </Col>
                <Col sm={8}>
                    <p className={classes.SocialPostUserName}>{props.ProfileName}</p>
                    <p className={classes.ParaWithOutMargin}>{props.date}</p>
                </Col>
                <Col sm={2} className={classes.TextAlignCenter}><i className={classes.MoreOptionIcon}>
                    {Icons.MoreOptionIcon}</i></Col>
            </Row>
            {props.fileType === "IMAGE" ? <img src={props.file} alt="SocialPost" className={classes.SocialPostFile} /> :
                <video src={props.file} className={classes.SocialPostFile} controls autoPlay playsInline />
            }

            <div className={classes.SocialPostCmtContainer}>
                <Row>
                    <Col sm={12}>
                        <img src={MediaActions.User} className={classes.SocialCmtProfile} alt="ProfilePic" />
                        <input className={classes.SocialCmtInput} placeholder="Enter your Comments here" />
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default SocialPost;