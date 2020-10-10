import React from 'react';
import {Grid, IconButton, Typography} from "@material-ui/core";
import useStyle from "../HomeStyles";
import FavoriteIcon from '@material-ui/icons/Favorite'

function Tweet({data}) {
    const classes = useStyle()
    return (
        <div className={classes.tweetItem}>
            <Grid container>
                <img src={data.sender.img} alt="user" style={{borderRadius: '50%', height: 'max-content'}}/>
                <Grid container item direction={"column"} style={{flex: 1, marginRight: '1rem'}}>
                    <Grid container item>
                        <Typography className={classes.tweetItemName}>{data.sender.name}</Typography>
                        <Typography className={classes.tweetItemId}>{data.sender.id}</Typography>
                    </Grid>
                    <Typography className={classes.tweetText}>
                        {data.text}
                    </Typography>

                </Grid>

            </Grid>

            <Grid container direction={"row-reverse"} style={{marginTop: 16}} alignItems={"center"}>

                <IconButton className={classes.newTweetImgBtn}>
                    <img src="./images/retweet.png" alt="tweet"/>
                </IconButton>

                <IconButton className={classes.newTweetImgBtn}>
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