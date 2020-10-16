import React, { useEffect, useRef } from 'react';
import useStyle from "../HomeStyles";
import { Button, Grid, IconButton } from "@material-ui/core";
import classnames from 'classnames'
import { newTweetRequest } from '../../../Api/Api_Tweet'


function NewTweet() {
    const classes = useStyle()
    const input = useRef()

    const newTweetPost = () => {
        const newTweet = input.current.innerText

        if (!newTweet) return;
        const data = {
            id: Math.floor(Math.random() * 1000),
            "name": "Samsung",
            "img": "/images/samsung.png",
            "text": newTweet,
            "likes": 5
        }

        newTweetRequest(data, (isOk) => {
            if (!isOk) return alert('false post ')
            return alert('true post')
        })
    }

    useEffect(() => {
        input.current.addEventListener('input', function (e) {

        })
    }, [])

    return (
        <div className={classes.newTweet}>
            <Grid container>
                <img src="/images/user-img.png" alt="user" style={{ borderRadius: '50%' }} />
                <div
                    contentEditable
                    data-placeholder="توییت کن..."
                    className={classnames(classes.input, 'editable')}
                    ref={input}
                />
            </Grid>

            <Grid container direction={"row-reverse"} style={{ marginTop: 16 }}>
                <Button
                    onClick={newTweetPost}
                    className={classes.newTweetBtn} variant={"contained"} color={"primary"}>
                    توییت
                </Button>

                <IconButton className={classes.newTweetImgBtn}>
                    <img src="/images/tweetpic.png" alt="tweet" />
                </IconButton>
            </Grid>
        </div>
    );
}

export default NewTweet;