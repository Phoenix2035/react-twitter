import React, {useEffect, useState} from 'react'
import {Divider} from "@material-ui/core"
import useStyle from "../Home/HomeStyles"
import Header from "../../Components/Header/Header"
import TweetList from "../Home/Components/TweetList"
import {Person} from '@material-ui/icons'
import {useParams} from 'react-router-dom'
import { getTweets } from '../../Api/Api_Tweet';




function TweetsByUser() {

    const [tweets, setTweets] = useState([])

    useEffect(() => {
        getTweets((isOk, data) => {
            if (!isOk) return alert('false');
            return setTweets(data)
        })

    }, [])
    const classes = useStyle()
    const {user} = useParams()
    return (
        <div className={classes.root}>
            <Header title={user} icon={<Person/>}/>
            <Divider className={classes.divider}/>
            <TweetList data={tweets}/>
        </div>
    );
}

export default TweetsByUser;