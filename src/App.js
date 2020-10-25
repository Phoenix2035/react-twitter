import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

// My Components
import Home from "./Pages/Home/Home";
import Layout from "./Components/Layout/Layout";
import TweetsByHashtag from "./Pages/TweetsByHashtag/TweetsByHashtag";
import TweetsByUser from "./Pages/TweetsByUser/TweetsByUser";
import Auth from "./Pages/Auth/Auth";
import PublicRoute from "./Components/AccessRoute/PublicRoute";
import PrivateRoute from "./Components/AccessRoute/PrivateRoute";
import NotFound from "./Pages/404/NotFound";
import {TweetProvider} from "./Context/TweetContext";

function App() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <PublicRoute path={'/login'} component={Auth}/>
                    <PrivateRoute path={'/'} render={() =>
                        <TweetProvider>
                            <Layout>
                                <Switch>
                                    <Route exact path='/' component={Home}/>
                                    <Route path='/hashtags/:hashtag' component={TweetsByHashtag}/>
                                    <Route path='/users/:user' component={TweetsByUser}/>
                                    <Route component={NotFound}/>
                                </Switch>
                            </Layout>
                        </TweetProvider>
                    }/>
                </Switch>
            </BrowserRouter>
            <ToastContainer/>
        </>
    )

}

export default App;
