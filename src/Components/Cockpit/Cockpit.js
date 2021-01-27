import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Layout from '../../HOC/Layout/Layout';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../../Containers/Home/Home';
import Events from '../../Containers/Events/Events';
import Friends from '../../Containers/Friends/Friends';
import WatchVideos from '../../Containers/watchVideos/watchVideos';
import Photos from '../../Containers/Photos/Photos';
import Files from '../../Containers/Files/Files';
import MarketPlace from '../../Containers/MarketPlaces/MarketPlaces';
import FriendProfile from '../../Containers/FriendProfile/FriendProfile';

class Cockpit extends Component {


    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/MarketPlace" component={MarketPlace} />
                    <Route path="/Files" component={Files} />
                    <Route path="/Photos" component={Photos} />
                    <Route path="/WatchVideos" component={WatchVideos} />
                    <Route path="/Friends" component={Friends} />
                    <Route path="/Friend/:id" component={FriendProfile} />
                    <Route path="/Event" component={Events} />
                    <Route path="/Feed" exact component={Home} />
                    {/* <Route path="/" exact component={Home} /> */}
                    <Redirect from="/" to="/Feed" />
                </Switch>
            </Layout>
        );
    };
}

export default Cockpit;