import React, {useRef, useState} from 'react';
import useStyle from "../HomeStyles";
import {Button, Grid, IconButton} from "@material-ui/core";
import classnames from 'classnames'
import {newTweetRequest} from '../../../Api/Api_Tweet'
import {toast} from "react-toastify";
import {useTweetDispatch, useTweetState} from "../../../Context/TweetContext";
import {setTweetText} from "../../../Context/TweetContext";


function NewTweet({updateTweets}) {
    const classes = useStyle()
    const inputFile = useRef()

    const [imageFile, setImageFile] = useState()
    const [imagePath, setImagePath] = useState()

    const {tweetText} = useTweetState()
    const tweetDispatch = useTweetDispatch()

    const newTweetPost = () => {
        // const tweetText = input.current.innerText
        if (!tweetText) return;

        const formData = new FormData()
        formData.append("text", tweetText)
        if (imageFile)
            formData.append("image", imageFile)
        newTweetRequest(formData, (isOk, data) => {
            if (!isOk) return toast.error(data)
            toast.success('توییت شما ارسال شد')
            updateTweets()
            setTweetText(tweetDispatch, '')
            setImagePath()
            setImageFile()
        })
    }

    // useEffect(() => {
    //     input.current.addEventListener('input', function (e) {
    //
    //     })
    // }, [])

    const getImage = () => {
        if (localStorage.getItem('image') && localStorage.getItem('image') !== 'undefined')
            return localStorage.getItem('image')
        return '/images/person.png'
    }

    const selectImg = () => {
        inputFile.current.click()
    }

    const handleChangeImg = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setImageFile(e.target.files[0])

            const reader = new FileReader()
            reader.onload = (e) => {
                setImagePath(e.target.result)
            }
            reader.readAsDataURL(e.target.files[0])
        }

    }
    return (
        <div className={classes.newTweet}>
            <Grid container>
                <img src={getImage()} alt="user" style={{borderRadius: '50%', width: 60, height: 60}}/>
                <div
                    contentEditable
                    data-placeholder="توییت کن..."
                    className={classnames(classes.input, 'editable')}
                    onChange={e => setTweetText(tweetDispatch, e.target.value)}
                />
                <input type="file" style={{display: 'none'}} ref={inputFile} onChange={handleChangeImg}/>
            </Grid>

            {
                imagePath &&
                <div>
                    <div className={classes.tweetImg} style={{backgroundImage: `url(${imagePath})`}}/>
                </div>
            }


            <Grid container direction={"row-reverse"} style={{marginTop: 16, alignItems: 'center'}}>
                <Button
                    onClick={newTweetPost}
                    className={classes.newTweetBtn} variant={"contained"} color={"primary"}>
                    توییت
                </Button>

                <IconButton className={classes.newTweetImgBtn} onClick={selectImg}>
                    <img src="/images/tweetpic.png" alt="tweet"/>
                </IconButton>
            </Grid>
        </div>
    );
}

export default NewTweet;