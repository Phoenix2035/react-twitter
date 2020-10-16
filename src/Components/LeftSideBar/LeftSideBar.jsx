import React, { useEffect, useState } from 'react';
import useStyle from "./LeftSideBarStyles";
import { Divider, Grid, Typography } from "@material-ui/core";
import BestTweets from "./BestTweets/BestTweets";
import { Link } from "react-router-dom";
import { getUsers } from '../../Api/Api_Tweet'



function LeftSideBar() {
    const classes = useStyle()

    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers((isOk, data) => {
            if (!isOk) return alert('false user')
            return setUsers(data)
        })
    }, [])

    return (
        <div className={classes.root}>
            <Grid container direction={"row-reverse"}>
                <img src="/images/user-img.png" alt="user" className={classes.profileImg} />
                <Grid container item direction={"column"} className={classes.profileText}>
                    <Typography className={classes.profileName}>علی قدوسی</Typography>
                    <Typography className={classes.profileId}>Ali Ghodousi</Typography>
                </Grid>

                <Grid container item direction={"column"} className={classes.twitterRoot}>
                    <Typography className={classes.twitterTitle}>
                        بهترین خبرنگاران
                    </Typography>
                    <Divider style={{ marginLeft: '-12%', marginRight: '-12%' }} />

                    {
                        users.map((item, index) =>
                            <Link to={`/users/${item.name}`} key={item.id} style={{ width: '100%' }}>
                                <BestTweets item={item} />

                                {
                                    index !== users.length - 1 &&
                                    <Divider style={{ marginLeft: '-12%', marginRight: '-12%' }} />
                                }
                            </Link>
                        )
                    }


                </Grid>
            </Grid>
        </div>

    );
}

export default LeftSideBar;