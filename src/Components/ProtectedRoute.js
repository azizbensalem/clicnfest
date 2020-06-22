import React from 'react';
import {Route , Redirect } from 'react-router-dom';
import auth from './Auth';
import Login from '../Pages/Login/Login';

export const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route 
        {...rest}
        render= {props => {
            if (auth.isAuthenticated = "true") {
                return <Component {...props} />
            }
            else {
                return <Login />
                {/* <Redirect 
                to={{
                    pathname: "/",
                    state: {
                        from: props.location
                    }
                }}
            /> */}
            }
        }}
        />
    );
}