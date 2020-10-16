import React, { useEffect, useState } from 'react';
import { ButtonBase, Grid, Typography } from "@material-ui/core";
import useStyle from './RightSidebarStyles'
import { Link } from "react-router-dom";
import { getHashTags } from '../../Api/Api_Tweet'

function RightSidebar() {
    const classes = useStyle()

    const [hashtags, setHashtags] = useState([])

    useEffect(() => {
        getHashTags((isOk, data) => {
            if (!isOk) return alert('false hashtags')
            return setHashtags(data)
        })
    }, [])


    return (
        <div className={classes.root}>
            <Link to={'/'}>
                <Grid container direction={"row"} alignItems={"center"}>
                    <Grid item>
                        <img src='/images/logo.png' alt='logo' />
                    </Grid>

                    <Grid item>
                        <Typography className={classes.logoType}>
                            توییتر فارسی
                        </Typography>
                    </Grid>
                </Grid>
            </Link>

            <Typography className={classes.hashtagTitle}>
                داغ ترین هشتگ ها
            </Typography>

            <Grid container direction={"column"} alignItems={"center"}>
                {
                    hashtags.map((item, index) =>
                        <ButtonBase className={classes.hashtagParent} key={index}>
                            <Link to={'/hashtags/' + item} style={{ width: '100%' }}>
                                <Grid container item>
                                    <img src="/images/hashtag.png" alt="hashtag" />
                                    <Typography className={classes.hashtag}>
                                        {item}
                                    </Typography>
                                </Grid>
                            </Link>
                        </ButtonBase>)
                }

            </Grid>
        </div>
    );
}

export default RightSidebar;