import React from 'react';
import useStyle from "./HomeStyles";
import Header from "./Components/Header";
import {Divider} from "@material-ui/core";
import NewTweet from "./Components/NewTweet";

function Home() {
    const classes = useStyle()
    return (
        <div className={classes.root}>
            <Header/>
            <Divider className={classes.divider}/>
            <NewTweet/>
        </div>
    );
}

export default Home;