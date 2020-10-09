import React from 'react';
import useStyle from "../HomeStyles";
import {Button, Grid, IconButton} from "@material-ui/core";

function NewTweet() {
    const classes = useStyle()
    return (
        <div className={classes.newTweet}>
            <Grid container>
                <img src="./images/user-img.png" alt="user" style={{borderRadius: '50%'}}/>
                <textarea placeholder="توییت کن..." className={classes.input}/>
            </Grid>

            <Grid container direction={"row-reverse"} style={{marginTop: 16}}>
                <Button className={classes.newTweetBtn} variant={"contained"} color={"primary"}>
                    توییت
                </Button>

                <IconButton className={classes.newTweetImgBtn}>
                    <img src="./images/tweetpic.png" alt="tweet"/>
                </IconButton>
            </Grid>
        </div>
    );
}

export default NewTweet;