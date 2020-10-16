import React from 'react';
import {Typography} from "@material-ui/core";
import useStyle from "./HeaderStyles";

function Header({title, icon}) {
    const classes = useStyle()
    return (
        <div className={classes.header}>
            {icon}
            <Typography className={classes.headerTitle}>
                {title}
            </Typography>
        </div>
    );
}

export default Header;