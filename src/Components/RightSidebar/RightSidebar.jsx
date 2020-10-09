import React from 'react';

import {ButtonBase, Grid, Typography} from "@material-ui/core";
import useStyle from './RightSidebarStyles'

const hashtags = [
    "پرچم_دار_جدید",
    "کرونا_ویروس",
    "سامسونگ",
    "هلو_سامر",
    "تابستون_کوتاهه",
    "پرچم_دار_جدید",
    "کرونا_ویروس",
    "سامسونگ",
    "هلو_سامر",
    "تابستون_کوتاهه"
]

function RightSidebar() {
    const classes = useStyle()
    return (
        <div className={classes.root}>
            <Grid container direction={"row"} alignItems={"center"}>
                <Grid item>
                    <img src='./images/logo.png' alt='logo'/>
                </Grid>

                <Grid item>
                    <Typography className={classes.logoType}>
                        توییتر فارسی
                    </Typography>
                </Grid>
            </Grid>

            <Typography className={classes.hashtagTitle}>
                داغ ترین هشتگ ها
            </Typography>

            <Grid container direction={"column"} alignItems={"center"}>
                {
                    hashtags.map((item, index) =>
                        <ButtonBase className={classes.hashtagParent} key={index}>
                            <Grid container item>
                                <img src="./images/hashtag.png" alt="hashtag"/>
                                <Typography className={classes.hashtag}>
                                    {item}
                                </Typography>
                            </Grid>
                        </ButtonBase>)
                }

            </Grid>
        </div>
    );
}

export default RightSidebar;