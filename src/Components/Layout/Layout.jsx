import React from 'react';
import useStyle from './Styles'
import {Typography} from "@material-ui/core";

function Layout() {
    const classes = useStyle()
    return (
        <div className={classes.root}>
            <div className={classes.rightSidebar}>
                <Typography component='h1'>
                    منوی سمت راست
                </Typography>
            </div>
            <div className={classes.mainPart}>Main</div>
            <div className={classes.leftSidebar}>Left</div>
        </div>
    );
}

export default Layout;