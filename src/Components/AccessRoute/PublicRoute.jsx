import React from 'react';
import {Route, Redirect} from "react-router-dom";

const isLogin = !!localStorage.getItem('x-auth-token')

function PublicRoute({component, ...props}) {
    return (
        <Route {...props} render={(props) => {
            if (isLogin) {
                return <Redirect to={'/'}/>
            } else {
                return React.createElement(component, props)
            }
        }}/>
    );
}

export default PublicRoute;