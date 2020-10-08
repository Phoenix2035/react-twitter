import React from 'react';
import RightSidebar from "../RightSidebar/RightSidebar";
import {Divider} from "@material-ui/core";
import useStyle from './LayoutStyles';


function Layout() {
    const classes = useStyle()
    return (
        <div className={classes.root}>
            <RightSidebar/>
            <Divider className={classes.divider} orientation={"vertical"}/>
            <div className={classes.mainPart}>Main</div>
            <div className={classes.leftSidebar}>Left</div>
        </div>
    );
}

export default Layout;