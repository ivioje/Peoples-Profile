import React from 'react';
import { Navigate, Route } from 'react-router';

const ProtectedRoute = ({ component: Component, authenticated: authenticated, ...rest }) => {
    <Route {...rest} render=
        {props => authenticated
            ?
            (<Component {...props} />)
            :
            (<Navigate to={{ pathname: "/login" }} />)
        }
    />
}

export default ProtectedRoute