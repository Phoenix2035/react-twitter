import React from 'react';
import {Route, Redirect} from "react-router-dom";

const isLogin = !!localStorage.getItem('x-auth-token')

function PrivateRoute({render, ...props}) {
    return (
        <Route {...props} render={(props) => {
            if (isLogin) {
                return render(props)
            } else {
                return <Redirect to={'/login'}/>
            }
        }}/>
    );
}

export default PrivateRoute;