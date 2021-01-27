import React, { useState, useEffect, useMemo } from 'react';
import classes from './SocialPost.module.css';
import { Container, Col, Row, Button } from 'react-bootstrap';
import * as MediaActions from '../../Assets/MediaActions/MediaActions';
import * as Icons from '../../Assets/Icons/Icons';
import Aux from '../../HOC/Auxiliary/Auxiliary';

const SocialPost = (props) => {

    let [getLikes, setLikes] = useState(0);
    let [getDisLikes, setDisLikes] = useState(0);
    let [getComments, setComments] = useState("");
    let [getArryComments, setArryComments] = useState([]);
    let xCommentSection = null;

    // useEffect(() => {
    //     xCommentSection = getArryComments.map((oCmt, index) => {
    //         return (
    //             <Row key={index}>
    //                 <Col sm={1}></Col>
    //                 <Col sm={10}>
    //                     <img src={MediaActions.User} className={classes.SocialCmtUserPic} alt="ProfilePic" />
    //                     <p className={classes.UserComments}>{oCmt.comment}</p>
    //                 </Col>
    //                 <Col sm={1}></Col>
    //             </Row>
    //         );
    //     });
    // }, [getArryComments]);

    const fnLikeBtnHandler = () => {
        getLikes += 1;
        setLikes(getLikes);
    };
    const fnDisLikeBtnHandler = () => {
        getDisLikes += 1;
        setDisLikes(getDisLikes);
    };


    const onChangeCmtHandler = (oEvent) => {
        let sComments = oEvent.target.value;
        setComments(sComments);
    };

    const fnPostComments = (oEvent) => {
        let aTempComments = [...getArryComments];
        let oCmt = {
            comment: getComments
        }
        if (getComments !== "") {
            aTempComments.push(oCmt);
            console.log(aTempComments);
            setComments("");
            setArryComments(aTempComments);
        }
    };

    xCommentSection = getArryComments.map((oCmt, index) => {
        return (
            <Row key={index}>
                <Col sm={1}></Col>
                <Col sm={10} className={classes.CommentSection}>
                    <img src={MediaActions.User} className={classes.SocialCmtUserPic} alt="ProfilePic" />
                    <p className={classes.UserComments}>{oCmt.comment}</p>
                </Col>
                <Col sm={1}></Col>
            </Row>
        );
    });


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
            <div className={classes.EmotionContainer}>
                <Col sm={4}>
                    <div className={classes.LikeShareHolder}>
                        <i className={classes.LikeIcon} onClick={() => fnLikeBtnHandler()}>{Icons.LikeIcon}</i>
                        <i className={classes.LikeIcon} onClick={() => fnDisLikeBtnHandler()}>{Icons.DisLikeIcon}</i>
                    </div>
                </Col>
                <Col sm={8} className={classes.TextAlignRight}>
                    <p className={classes.LikeCount}>{getDisLikes} dislikes</p>
                    <p className={classes.LikeCount}>{getLikes} likes,</p>
                </Col>
            </div>
            <div className={classes.SocialPostCmtContainer}>
                <Row>
                    <Col sm={12}>
                        <img src={MediaActions.User} className={classes.SocialCmtProfile} alt="ProfilePic" />
                        <input className={classes.SocialCmtInput}
                            id="#CommentInput"
                            placeholder="Enter your Comments here"
                            value={getComments}
                            onChange={(oEvent) => onChangeCmtHandler(oEvent)}
                        />
                        <button
                            id="#HiddenCMtBtn"
                            style={{
                                borderRadius: "5px"
                            }}
                            onClick={(oEvent) => fnPostComments(oEvent)}
                        >POST</button>
                    </Col>
                </Row>
                <Aux>
                    {xCommentSection}
                </Aux>
            </div>
        </div>
    );
};

export default SocialPost;