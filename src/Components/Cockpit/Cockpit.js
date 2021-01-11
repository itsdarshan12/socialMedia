import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Layout from '../../HOC/Layout/Layout';
import { Switch } from 'react-router-dom';
import Home from '../../Containers/Home/Home';

class Cockpit extends Component {
    render() {
        return (
            <Layout>
                <Home />
            </Layout>
        );
    };
}

export default Cockpit;