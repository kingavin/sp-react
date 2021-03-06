import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import { createState } from 'redux';
import { Provider } from 'react-redux';

import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';

import Footer from './layout/Footer';
import Header from './layout/Header';
import Nav from './layout/Nav';

import Activity from './activity/Activity';
import Invitation from './invitation/Invitation';
import Report from './report/Report';
import History from './history/History';
import Site from './site/Site';
import Display from './display/Display';
import Team from './team/Team';

const config = {
    issuer: 'https://dev-129136.oktapreview.com/oauth2/default',
    redirectUri: window.location.origin + '/implicit/callback',
    clientId: '0oacebec20zPMaZdY0h7'
}

const store = createStore();

const Layout = () => {
    const bodyStyle = {
        border: '1px solid red',
        padding: '15px'
    }

    return (
        <Router>
            <div>
                <Header />
                <Nav />

                <div style={bodyStyle}>
                    <Switch>
                        <Route exact path='/' component={Activity} />
                        <Route path='/invitations' component={Invitation} />
                        <Route path='/reports' component={Report} />
                        <Route path='/history' component={History} />
                        <Route path='/sites' component={Site} />
                        <Route path='/displays' component={Display} />
                        <Route path='/team' component={Team} />
                        <Route path='/user' render={() => <h1>USER PAGE</h1>} />
                    </Switch>
                </div>
                <Footer />
            </div>
        </Router>
    );
};

export default Layout;
