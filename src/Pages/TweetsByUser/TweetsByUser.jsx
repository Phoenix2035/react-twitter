import React, {useEffect, useState} from 'react'
import {Divider} from "@material-ui/core"
import useStyle from "../Home/HomeStyles"
import Header from "../../Components/Header/Header"
import TweetList from "../Home/Components/TweetList"
import {Person} from '@material-ui/icons'
import {useParams} from 'react-router-dom'
import {getAllTweets} from '../../Api/Api_Tweet';
import {toast} from "react-toastify";


function TweetsByUser() {

    const [tweets, setTweets] = useState([])

    useEffect(() => {
        getAllTweets((isOk, data) => {
            if (!isOk) return toast.warn('false');
            setTweets(data)
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