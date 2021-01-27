import React from 'react';
import classes from './Friends.module.css';
import ProfileList from '../../Components/ProfileList/ProfileList';
import Aux from '../../HOC/Auxiliary/Auxiliary';
import { Row } from 'react-bootstrap';
import { connect } from 'react-redux';

const Friends = (props) => {
    console.log(props, "friends");
    const aFriendList = [...props.aFriendsList];
    const xFriendList = aFriendList.map((oFriend, index) => {
        return (
            <ProfileList
                key={index}
                image={oFriend.img}
                profileName={oFriend.profileName}
                username={oFriend.name}
                Link="/Friend/" />
        );
});
return (
    <div className={classes.FriendsContent}>
        <Row>
            {xFriendList}
        </Row>
    </div>
);
};

const mapStateToProps = (state) => {
    return {
        aFriendsList: state.aFriendsList
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Friends);