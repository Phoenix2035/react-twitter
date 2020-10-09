import React from 'react';
import useStyle from "./LeftSideBarStyles";
import {Divider, Grid, Typography} from "@material-ui/core";
import BestTweets from "./BestTweets/BestTweets";


const tweets = [
    {
        id: '@xiaomi',
        name: 'Xiaomi',
        img: './images/xiaomi.png'
    },
    {
        id: '@samsung',
        name: 'Samsung',
        img: './images/samsung.png'
    },
    {
        id: '@BillGates',
        name: 'بیل گیتس',
        img: './images/bil.png'
    },
    {
        id: '@Mike_IMC',
        name: 'مایک بای',
        img: './images/mike.png'
    },
    {
        id: '@Shirley_IMC',
        name: 'شرلی ونگ',
        img: './images/shily.png'
    },

]

function LeftSideBar() {
    const classes = useStyle()
    return (
        <div className={classes.root}>
            <Grid container direction={"row-reverse"}>
                <img src="./images/user-img.png" alt="user" className={classes.profileImg}/>
                <Grid container item direction={"column"} className={classes.profileText}>
                    <Typography className={classes.profileName}>علی قدوسی</Typography>
                    <Typography className={classes.profileId}>Ali Ghodousi</Typography>
                </Grid>

                <Grid container item direction={"column"} className={classes.twitterRoot}>
                    <Typography className={classes.twitterTitle}>
                        بهترین خبرنگاران
                    </Typography>
                    <Divider style={{marginLeft: '-12%', marginRight: '-12%'}}/>

                    {
                        tweets.map((item, index) =>
                            <React.Fragment key={item.id}>
                                <BestTweets item={item}/>

                                {
                                    index !== tweets.length - 1 &&
                                    <Divider style={{marginLeft: '-12%', marginRight: '-12%'}}/>
                                }
                            </React.Fragment>
                        )
                    }


                </Grid>
            </Grid>
        </div>

    );
}

export default LeftSideBar;