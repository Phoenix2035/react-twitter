import React from 'react';
import RightSidebar from "../RightSidebar/RightSidebar";
import {Divider} from "@material-ui/core";
import useStyle from './LayoutStyles';
import LeftSideBar from "../LeftSideBar/LeftSideBar"
import Home from "../../Pages/Home/Home"


function Layout() {
    const classes = useStyle()
    return (
        <div className={classes.root}>
            <RightSidebar/>
            <Divider className={classes.divider} orientation={"vertical"}/>
            <Home/>
            <Divider className={classes.divider} orientation={"vertical"}/>
            <LeftSideBar/>
        </div>
    );
}

export default Layout;