import React, { useEffect, useState } from 'react';
import useStyle from "./HomeStyles";
import Header from "../../Components/Header/Header";
import { Divider } from "@material-ui/core";
import NewTweet from "./Components/NewTweet";
import TweetList from "./Components/TweetList";
import HomeIcon from '@material-ui/icons/Home';
import { getTweets } from '../../Api/Api_Tweet';





function Home() {
    const classes = useStyle()
    const [tweets, setTweets] = useState([])

    useEffect(() => {
        getTweets((isOk, data) => {
            if (!isOk) return alert('false');
            return setTweets(data)
        })
    }, [])
    return (
        <div className={classes.root}>
            <Header title={'خانه'} icon={<HomeIcon />} />
            <Divider className={classes.divider} />
            <NewTweet />
            <TweetList data={tweets} />
        </div>
    );
}

export default Home;