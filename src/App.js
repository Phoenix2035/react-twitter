import React from 'react';
import Layout from "./Components/Layout/Layout";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./Pages/Home/Home";
import TweetsByHashtag from "./Pages/TweetsByHashtag/TweetsByHashtag";
import TweetsByUser from "./Pages/TweetsByUser/TweetsByUser";
import NotFound from "./Pages/404/NotFound";
import Auth from "./Pages/Auth/Auth";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={'/login'} component={Auth}/>
                <Route path={'/'} render={() =>
                    <Layout>
                        <Switch>
                            <Route exact path='/' component={Home}/>
                            <Route path='/hashtags/:hashtag' component={TweetsByHashtag}/>
                            <Route path='/users/:user' component={TweetsByUser}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </Layout>
                }/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
