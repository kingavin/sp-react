import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const isAuthenticated = () => false;

const AuthRoute = ({component, ...rest}) => {
    const { isPublic } = component;
    if (isAuthenticated()) {
        if (unauthenticatedOnly === true) {
            return <Redirect to={ '/' } />;
        } else {
            return <Route { ...rest } component={ component } />;
        }
    } else {
        if (isPublic === true) {
            return <Redirect to={ '/login' } />;
        } else {
            return <Route { ...rest } component={ component } />;
        }
    }
};

export default AuthRoute;