import React, { useState, useEffect } from 'react';
import classes from './Home.module.css';
import Aux from '../../HOC/Auxiliary/Auxiliary';
import { Container, Col, Row, Button, ProgressBar } from 'react-bootstrap';
import * as MediaActions from '../../Assets/MediaActions/MediaActions';
import { connect } from 'react-redux';
import SideNavCard from '../../Components/SideNavItems/SideNavItems';
import SocialPost from '../../Components/SocialPosts/SocialPost';
import StoryTag from '../../Components/StoryTags/StoryTags';
import * as Icons from '../../Assets/Icons/Icons';

const Home = (props) => {

    const [getShorProgressBar, setShowProgressBar] = useState(false);
    const [getPercentageFileLoaded, setPercentageFileLoaded] = useState(0);
    const [getPayload, setPayload] = useState({});

    useEffect(() => {
        fetch("https://react-projects-6a856-default-rtdb.firebaseio.com/Videos.json"
        ).then((response) => {
            return response.json();
        }).then((data) => {
            if (data) {
                // let Typeblob = new Blob([data.file], { type: data.format });
                // let Dataurl = URL.createObjectURL(Typeblob);
                // data.file = Dataurl;
                // props.fnPostSocialFeed(data);
                // fnServerFileHandler(data);
            }
        }).catch((error) => console.log(error));
    }, []);

    const fnfileUploader = (oEvent) => {
        let oFileUploader = document.getElementById("#BtnBrowseHidden");
        oFileUploader.addEventListener('change', fnFileHandler());
        oFileUploader.click();
    };



    const fnFileHandler = (oEvent) => {
        if (oEvent) {
            setShowProgressBar(true);
            let file = oEvent.target.files[0];
            let reader = new FileReader();
            addListeners(reader);
            let fileType = file.name.split(".")[1];
            const fileTemp = fileType.toUpperCase();
            let mediaType = "";
            switch (fileTemp) {
                case 'PNG':
                case 'JPEG':
                case 'JPG':
                    mediaType = "IMAGE";
                    reader.readAsDataURL(file)
                    break;
                case 'MP4':
                case 'WMV':
                    mediaType = "VIDEO";
                    // reader.readAsArrayBuffer(file);
                    reader.readAsDataURL(file)
                    break;
            }
            reader.onprogress = (oEvent) => {
                fnProgressLogger(oEvent);
            };
            reader.onloadend = (oEvent) => {
                fnFileReader(oEvent, reader, mediaType, file);
            };
        }
    };

    const fnServerFileHandler = (data) => {
        let reader = new FileReader();
        addListeners(reader);
        reader.readAsDataURL(data)
        reader.onprogress = (oEvent) => {
            fnProgressLogger(oEvent);
        };
        reader.onloadend = (oEvent) => {
            fnFileReader(oEvent, reader, data);
        };
    };

    const fnFileReader = (oEvent, reader, fileType, file) => {
        let oPayload = {};
        let formData = new FormData();
        switch (fileType) {
            case "IMAGE":
                oPayload = {
                    file: reader.result,
                    user: "UserName",
                    fileType: fileType,
                    date: new Date().toISOString().split("T")[0]
                };
                formData.append("myfiles", file);
                break;
            case "VIDEO":
                debugger;
                let blob = new Blob([reader.result], { type: file.type });
                let url = URL.createObjectURL(blob);
                let fileContent = oEvent.target.result;
                // let source = document.createElement('source');
                // let videoElement = document.createElement('video');
                // videoElement.addEventListener('timeupdate', timeListeners, false);
                // videoElement.addEventListener('loadstart', handleEvent);
                // videoElement.addEventListener('progress', handleEvent, false);
                // videoElement.addEventListener('canplay', handleEvent);
                // videoElement.addEventListener('canplaythrough', handleEvent);

                // videoElement.setAttribute('src', url);
                // videoElement.setAttribute('type', file.type);
                // videoElement.appendChild(source);
                // videoElement.src = url;
                // formData.append("myfiles", file);
                oPayload = {
                    file: reader.result,
                    user: "UserName",
                    fileType: fileType,
                    format: file.type,
                    date: new Date().toISOString().split("T")[0]
                };
            // setPayload(oPayload);
        }
        // fnPostVideoHandler(formData);
        props.fnPostSocialFeed(oPayload);
        setShowProgressBar(false);
    };

    const addListeners = (reader) => {
        reader.addEventListener('progress', fnProgressLogger);
    };

    // const timeListeners = (video) => {
    //     debugger;
    // };

    const handleEvent = (event) => {
        debugger;
        console.log(event.type);
        console.log(event.srcElement.readyState);
        let video = event.srcElement;
        let duration = event.srcElement.duration;
        let bufferLengthDetector;
        let linearProgress;
        // if (duration > 0) {
        //     bufferLengthDetector = setInterval((readBuffer()), duration);
        // }    
        if (event.type === "canplaythrough") {
            //     event.srcElement.play();
            // props.fnPostSocialFeed(getPayload);
            // setShowProgressBar(false);
        }
        // readBuffer = () => {
        //     let percent = video.buffered.end(video.buffered.length - 1) / video.duration;
        //     if (percent >= .9) {
        //         linearProgress.buffer = 1;
        //         clearInterval(bufferLengthDetector);
        //     }
        //     else {
        //         linearProgress.buffer = percent;
        //     }
        // }
    }

    const completeHandler = () => {

    };

    const fnPostVideoHandler = (oPayload) => {
        fetch("https://react-projects-6a856-default-rtdb.firebaseio.com/Videos.json", {
            method: "POST",
            body: oPayload,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((response) => {
            debugger;
            fileReaderFetch(response);
        }).then((data) => {
            debugger;
        }).catch((error) => console.log(error));
    };

    const fileReaderFetch = (reader) => {
        let uploadReader = reader.body.getReader();
        var total = 0
        return new Promise((resolve, reject) => {
            function pump() {
                uploadReader.read().then(({ done, value }) => {
                    if (done) {
                        resolve()
                        return
                    }
                    total += value.byteLength;
                    console.log(`received ${value.byteLength} bytes (${total} bytes in total)`);
                    pump()
                }).catch(reject)
            }
            pump();
        })
    };

    const fnProgressLogger = (oEvent, fileType) => {
        let MB = oEvent.loaded / 1024 / 1000;
        let percentLoaded = Math.round((oEvent.loaded / oEvent.total) * 100);
        setPercentageFileLoaded(percentLoaded);
    };


    const aNavListItems = [...props.aSideNavigation];
    let xSideNavList = aNavListItems.map((oNavItem, index) => {
        return (<SideNavCard key={index} icon={oNavItem.icon} menu={oNavItem.menu} />
        );
    });

    const aPagesLike = [...props.aPagesYouLike];
    const iPageLikeCount = aPagesLike.length;
    let xPagesYouLike = aPagesLike.map((oPageItem, index) => {
        return (<SideNavCard key={index} icon={oPageItem.icon} menu={oPageItem.menu} count={oPageItem.count} />);
    });

    const aSocialFeed = [...props.aSocialPost];
    let xSocialPost = aSocialFeed.map((oFeed, index) => {
        return (<SocialPost key={index} ProfileName={oFeed.user} fileType={oFeed.fileType} date={oFeed.date} file={oFeed.file} />
        );
    });

    const aTempStorys = [...props.aStories];
    let xStoryTag = aTempStorys.map((oStory, index) => {
        return (
            <StoryTag key={index} ProfileName={oStory.user} ProfilePic={oStory.file} />
        );
    });
    return (
        <Container>
            <Row>
                <Col sm={3} className={classes.SideMenu}>
                    <div className={classes.UserProfileCard}>
                        <Col sm={4} className={classes.FloatLeft}>
                            <img src={MediaActions.User} alt="ProfilePic" className={classes.ProfilePic} />
                        </Col>
                        <Col sm={8} className={classes.FloatLeft}>
                            <p className={classes.ProfileName}>User Profile Name</p>
                            <p>username</p>
                        </Col>
                    </div>
                    <div className={classes.NavigationPanel}>
                        <Aux>
                            {xSideNavList}
                        </Aux>
                    </div>
                    <div className={classes.SidePagesList}>
                        <p className={classes.PagesListHeading}>PAGES YOU LIKE - {(iPageLikeCount)}</p>
                        <hr />
                        <Aux>
                            {xPagesYouLike}
                        </Aux>
                    </div>
                </Col>
                <Col sm={6}>
                    <div className={classes.FeedMenu}>
                        <p className={classes.FeedHeading}>Post Something</p>
                        <hr />
                        <div className={classes.FeedPostContainer}>
                            <Row>
                                <Col sm={2}>
                                    <img src={MediaActions.User} alt="ProfilePic" className={classes.FeedProfilePic} />
                                </Col>
                                <Col sm={10}>
                                    <input placeholder="Whats on your mind?" className={classes.WhatsOnMindinput} />
                                    <input type="file" id="#BtnBrowseHidden" style={{
                                        display: 'none'
                                    }} onChange={(oEvent) => fnFileHandler(oEvent)} />
                                    <button onClick={(oEvent) => fnfileUploader(oEvent)} className={classes.AttachBtn}>{Icons.AttachMentIcon}</button>
                                </Col>
                            </Row>
                            {getShorProgressBar ?
                                <ProgressBar style={{
                                    backgroundColor: '#b4b8bb',
                                }} striped variant="success" now={getPercentageFileLoaded} label={`${getPercentageFileLoaded}%`} />
                                : null
                            }
                        </div>
                        <Aux>
                            {xSocialPost}
                        </Aux>
                    </div>
                </Col>
                <Col sm={3}>
                    <div className={classes.EventMenu}>
                        <p className={classes.EventHeading}>Stories</p>
                        <hr />
                        <div className={classes.StoryContainer}>
                            {xStoryTag}
                        </div>
                    </div>
                    <div className={classes.EventMenu}>
                        <p className={classes.EventHeading}>Events</p>
                        <hr />
                        <div className={classes.StoryContainer}>
                            {xStoryTag}
                        </div>
                    </div>
                </Col>
            </Row>
        </Container >
    );
}

const mapStateToProps = (state) => {
    return {
        aSideNavigation: state.aSideNavigation,
        aPagesYouLike: state.aPagesYouLike,
        aSocialPost: state.aSocialPost,
        aStories: state.aStories
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fnPostSocialFeed: (oPostPublic) => dispatch({ type: "POSTTOPUBLIC", payload: oPostPublic })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);