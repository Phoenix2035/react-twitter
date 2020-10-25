import React, {useEffect, useState} from 'react';
import useStyle from "./HomeStyles";
import Header from "../../Components/Header/Header";
import {Divider} from "@material-ui/core";
import NewTweet from "./Components/NewTweet";
import TweetList from "./Components/TweetList";
import HomeIcon from '@material-ui/icons/Home';
import {getAllTweets} from '../../Api/Api_Tweet';
import {toast} from "react-toastify";
import {setTweetList, useTweetDispatch, useTweetState} from "../../Context/TweetContext";


function Home() {
    const classes = useStyle()

    const tweetDispatch = useTweetDispatch()


    const {tweetList: tweets} = useTweetState()

    const updateTweets = () => {
        getAllTweets((isOk, data) => {
            if (!isOk)
                return toast.warn('ناموفق بود');
            setTweetList(tweetDispatch, data)
        })

    }

    useEffect(() => {
        updateTweets()

    }, [])
    return (
        <div className={classes.root}>
            <Header title={'خانه'} icon={<HomeIcon/>}/>
            <Divider className={classes.divider}/>
            <NewTweet updateTweets={updateTweets}/>
            <TweetList data={tweets}/>
        </div>
    );
}

export default Home;