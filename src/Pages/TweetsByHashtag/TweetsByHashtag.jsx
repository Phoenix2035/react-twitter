import React, { useEffect, useState } from 'react';
import { Divider } from "@material-ui/core";
import useStyle from "../Home/HomeStyles";
import Header from "../../Components/Header/Header";
import TweetList from "../Home/Components/TweetList";
import { getTweets } from '../../Api/Api_Tweet';


function TweetsByHashtag(props) {
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
            <Header title={props.match.params.hashtag} icon={<img src="/images/hashtag.png" alt="hashtag" />} />
            <Divider className={classes.divider} />
            <TweetList data={tweets} />
        </div>
    );
}

export default TweetsByHashtag;