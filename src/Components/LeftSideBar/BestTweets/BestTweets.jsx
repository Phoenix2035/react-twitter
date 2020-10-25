import React from 'react';
import {ButtonBase, Grid, Typography} from "@material-ui/core";
import useStyle from "../LeftSideBarStyles";

function BestTweets({item}) {
    const classes = useStyle()

    const getImage = () => {
        if (item.image) return item.image
        return "/image/person.png"
    }
    return (
        <ButtonBase style={{width: '100%'}}>
            <Grid container className={classes.twitterParent}>
                <img src={getImage()} alt="user" className={classes.profileImg}/>
                <Grid container item direction={"column"} alignItems={"flex-start"} className={classes.twitterNameParent}>
                    <Typography className={classes.profileName}>{item.name}</Typography>
                    <Typography className={classes.profileId}>{item.username}</Typography>
                </Grid>
            </Grid>
        </ButtonBase>
    );
}

export default BestTweets;