import React from 'react';
import {Grid, IconButton, Typography} from "@material-ui/core";
import useStyle from "../HomeStyles";
import FavoriteIcon from '@material-ui/icons/Favorite'
import {likeTweet, setTweetText, useTweetDispatch} from "../../../Context/TweetContext";
import {likeTweetRequest} from "../../../Api/Api_Tweet";
import {toast} from "react-toastify";

function Tweet({data}) {
    const classes = useStyle()

    const tweetDispatch = useTweetDispatch()

    const getImage = () => {
        if (data.user.image)
            return data.user.image
        else return '/images/person.png'
    }
    const renderTweetText = (text) => {
        return {__html: text.replace(/#\S+/g, "<a href='/tags/$&' style='color: #6495ed'>$&</a>")}
    }

    const retweetClick = () => {
        setTweetText(tweetDispatch, data.text)
    }

    const handleLike = () => {
        likeTweetRequest(data._id, (isOk, data) => {
            if (!isOk) return toast.error(data)
            likeTweet(tweetDispatch, data._id)
        })
    }

    return (
        <div className={classes.tweetItem}>
            <Grid container>
                <img src={getImage()} alt="user" style={{borderRadius: '50%', width: '60px', height: '60px'}}/>
                <Grid container item direction={"column"} style={{flex: 1, marginRight: '1rem'}}>
                    <Grid container item>
                        <Typography className={classes.tweetItemName}>{data.user.name}</Typography>
                        <Typography className={classes.tweetItemId}>{data.user.id}</Typography>
                    </Grid>
                    <Typography
                        dangerouslySetInnerHTML={renderTweetText(data.text)}
                        component={'p'}
                        className={classes.tweetText}/>
                    {
                        data.image &&
                        <div>
                            <div className={classes.tweetImg} style={{backgroundImage: `url(${data.image})`}}/>
                        </div>
                    }
                </Grid>

            </Grid>

            <Grid container direction={"row-reverse"} style={{marginTop: 16}} alignItems={"center"}>

                <IconButton className={classes.newTweetImgBtn} onClick={retweetClick}>
                    <img src="/images/retweet.png" alt="tweet"/>
                </IconButton>

                <IconButton className={classes.newTweetImgBtn} onClick={handleLike}>
                    <FavoriteIcon color={"error"}/>
                </IconButton>

                <Typography className={classes.likeCount}>
                    {data.likes}
                </Typography>
            </Grid>
        </div>
    );
}

export default Tweet;