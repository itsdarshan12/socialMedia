import * as Icons from '../../Assets/Icons/Icons';
import * as MediaActions from '../../Assets/MediaActions/MediaActions';

const initialState = {
    aSideNavigation: [
        {
            icon: Icons.Feed,
            menu: "Feed"
        },
        {
            icon: Icons.FriendsIcon,
            menu: "Friends"
        },
        {
            icon: Icons.EventIcon,
            menu: "Event"
        },
        {
            icon: Icons.WatchVideoIcon,
            menu: "Watch Videos"
        },
        {
            icon: Icons.PhotoIcon,
            menu: "Photos"
        },
        {
            icon: Icons.FilesIcon,
            menu: "Files"
        },
        {
            icon: Icons.MarketPlaceIcon,
            menu: "Market Place"
        }
    ],

    aPagesYouLike: [
        {
            icon: Icons.PageFootBallIcon,
            menu: "Football FC"
        },
        {
            icon: Icons.CommunitylIcon,
            menu: "UI/UX Community"
        },
        {
            icon: Icons.ReactIcon,
            menu: "React.js"
        },
    ],

    aSocialPost: [
        {
            user: "Posted User Name",
            date: "08 Jan 2021",
            file: MediaActions.defaultPost,
            fileType: "IMAGE",
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
    ]

};

const reducer = (state = initialState, action) => {
    const oCloneState = { ...state };
    let oTempState = {};
    switch (action.type) {
        case "POSTTOPUBLIC":
            const aTempPublicPost = [...oCloneState.aSocialPost];
            aTempPublicPost.push(action.payload);
            oTempState = {
                ...state,
                aSocialPost: aTempPublicPost
            }
            return oTempState;
    }
    return state;
};

export default reducer;