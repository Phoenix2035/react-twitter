import React from 'react';
import {Grid, IconButton, Typography} from "@material-ui/core";
import useStyle from "../HomeStyles";
import FavoriteIcon from '@material-ui/icons/Favorite'

function Tweet(props) {
    const classes = useStyle()
    const renderTweetText = (text) => {
        return {__html: text.replace(/#\S+/g, "<a href='/tags/$&' style='color: #6495ed'>$&</a>")}
    }

    return (
        <div className={classes.tweetItem}>
            <Grid container>
                <img src={props.item.img} alt="user" style={{borderRadius: '50%', height: 'max-content'}}/>
                <Grid container item direction={"column"} style={{flex: 1, marginRight: '1rem'}}>
                    <Grid container item>
                        <Typography className={classes.tweetItemName}>{props.item.name}</Typography>
                        <Typography className={classes.tweetItemId}>{props.item.id}</Typography>
                    </Grid>
                    <Typography
                        dangerouslySetInnerHTML={renderTweetText(props.item.text)}
                        component={'p'}
                        className={classes.tweetText}/>
                </Grid>

            </Grid>

            <Grid container direction={"row-reverse"} style={{marginTop: 16}} alignItems={"center"}>

                <IconButton className={classes.newTweetImgBtn}>
                    <img src="/images/retweet.png" alt="tweet"/>
                </IconButton>

                <IconButton className={classes.newTweetImgBtn}>
                    <FavoriteIcon color={"error"}/>
                </IconButton>

                <Typography className={classes.likeCount}>
                    {props.item.likes}
                </Typography>
            </Grid>
        </div>
    );
}

export default Tweet;