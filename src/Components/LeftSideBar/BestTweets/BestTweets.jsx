import React from 'react';
import {ButtonBase, Grid, Typography} from "@material-ui/core";
import useStyle from "../LeftSideBarStyles";

function BestTweets({item}) {
    const classes = useStyle()
    return (
        <ButtonBase style={{width:'100%'}}>
            <Grid container className={classes.twitterParent}>
                <img src={item.img} alt="user" className={classes.profileImg}/>
                <Grid container item direction={"column"} className={classes.twitterNameParent}>
                    <Typography className={classes.profileName}>{item.name}</Typography>
                    <Typography className={classes.profileId}>{item.id}</Typography>
                </Grid>
            </Grid>
        </ButtonBase>
    );
}

export default BestTweets;