import * as Icons from '../../Assets/Icons/Icons';
import * as MediaActions from '../../Assets/MediaActions/MediaActions';

const initialState = {
    aSideNavigation: [
        {
            icon: Icons.Feed,
            menu: "Feed",
            exact: true,
            Link: "/Feed"
        },
        {
            icon: Icons.FriendsIcon,
            menu: "Friends",
            exact: false,
            Link: "/Friends"
        },
        {
            icon: Icons.EventIcon,
            menu: "Event",
            exact: false,
            Link: "/Event"
        },
        {
            icon: Icons.WatchVideoIcon,
            menu: "Watch Videos",
            exact: false,
            Link: "/WatchVideos"
        },
        {
            icon: Icons.PhotoIcon,
            menu: "Photos",
            exact: false,
            Link: "/Photos"
        },
        {
            icon: Icons.FilesIcon,
            menu: "Files",
            exact: false,
            Link: "/Files"
        },
        {
            icon: Icons.MarketPlaceIcon,
            menu: "Market Place",
            exact: false,
            Link: "/MarketPlace"
        }
    ],

    aPagesYouLike: [
        {
            icon: Icons.PageFootBallIcon,
            menu: "Football FC",
            exact: false,
            Link: "/FootballFC"
        },
        {
            icon: Icons.CommunitylIcon,
            menu: "UI/UX Community",
            exact: false,
            Link: "/UIUXCommunity"
        },
        {
            icon: Icons.ReactIcon,
            menu: "React.js",
            exact: false,
            Link: "/React"
        },
    ],

    aSocialPost: [
        {
            user: "Posted User Name",
            date: "08 Jan 2021",
            file: MediaActions.defaultPost,
            fileType: "IMAGE",
            iLikes: 0,
            iDisLikes: 0,
            aComments: []
        }
    ],

    aStories: [
        {
            user: "Posted User Name",
            date: "08 Jan 2021",
            file: MediaActions.User,
        },
        {
            user: "Posted User Name",
            date: "08 Jan 2021",
            file: MediaActions.UserGirl,
        },
        {
            user: "Posted User Name",
            date: "08 Jan 2021",
            file: MediaActions.UserGirl,
        }
    ],

    aFriendsList: [
        {
            img: MediaActions.DefaultPic,
            name: "Darshan",
            profileName: "Darshan.js",
            followers: "23"
        },
        {
            img: MediaActions.DefaultPic,
            name: "Dhanush",
            profileName: "Dhanush.js",
            followers: "232"
        },
        {
            img: MediaActions.DefaultPic,
            name: "Tony",
            profileName: "Iron Man",
            followers: "23"
        },
        {
            img: MediaActions.DefaultPic,
            name: "Steve",
            profileName: "Captain America",
            followers: "232"
        },
        {
            img: MediaActions.DefaultPic,
            name: "Parker",
            profileName: "Spider Man",
            followers: "23"
        },
        {
            img: MediaActions.DefaultPic,
            name: "Bruse",
            profileName: "Hulk",
            followers: "232"
        },
        {
            img: MediaActions.DefaultPic,
            name: "Strange",
            profileName: "Dr.Strange",
            followers: "23"
        },
        {
            img: MediaActions.DefaultPic,
            name: "Steve",
            profileName: "Captain America",
            followers: "232"
        }
    ],

    oUserDetails: {
        username: ""
    }

};

const reducer = (state = initialState, action) => {
    const oCloneState = { ...state };
    let oTempState = {};
    switch (action.type) {
        case "POSTTOPUBLIC":
            const aTempPublicPost = [...oCloneState.aSocialPost];
            action.payload.iLikes = 0;
            action.payload.iDisLikes = 0;
            action.payload.aComments = [];
            aTempPublicPost.push(action.payload);
            oTempState = {
                ...state,
                aSocialPost: aTempPublicPost
            }
            return oTempState;
        case "LOGIN":
            let oTempUser = { ...oCloneState.oUserDetails };
            oTempUser.username = action.oPayload.username;
            oTempState = {
                ...state,
                oUserDetails: oTempUser
            }
            return oTempState;
    }
    return state;
};

export default reducer;