import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import {Typography} from "@material-ui/core";
import useStyle from "../HomeStyles";

function Header() {
    const classes = useStyle()
    return (
        <div className={classes.header}>
            <HomeIcon/>
            <Typography className={classes.headerTitle}>
                خانه
            </Typography>
        </div>
    );
}

export default Header;