import React, {useEffect, useRef, useState} from 'react';
import useStyle from "./LeftSideBarStyles";
import {Divider, Grid, Typography, Menu, MenuItem} from "@material-ui/core";
import BestTweets from "./BestTweets/BestTweets";
import {Link} from "react-router-dom";
import {getUsers} from '../../Api/Api_Tweet'
import {toast} from "react-toastify";
import {uploadUserPhoto} from "../../Api/Api_Auth";


function LeftSideBar() {
    const classes = useStyle()

    const [users, setUsers] = useState([])
    const [imageFile, setImageFile] = useState()
    const [imagePath, setImagePath] = useState()
    const [anchorMenu, setAnchorMenu] = useState()
    const inputRef = useRef()

    useEffect(() => {
        getUsers((isOk, data) => {
            if (!isOk) return toast.warn('false user')
            return setUsers(data)
        })
    }, [])

    const handleToggleMenu = (e) => {
        if (anchorMenu) setAnchorMenu(null)
        else
            setAnchorMenu(e.currentTarget)
    }


    const handleAvatarChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setImageFile(e.target.files[0])

            const reader = new FileReader()
            reader.onload = (e) => {
                setImagePath(e.target.result)
            }

            reader.readAsDataURL(e.target.files[0])
            const formData = new FormData()
            formData.append("image", e.target.files[0])

            uploadUserPhoto(formData, (isOk, data) => {
                if (!isOk)
                    return toast.error(data)
                toast.success('عکس شما با موفقیت آپلود شد')
                localStorage.setItem('image', data.imagePath)
            })
        }
    }

    const getImage = () => {
        if (imagePath) return imagePath
        if (localStorage.getItem('image') && localStorage.getItem('image') !== 'undefined')
            return localStorage.getItem('image')
        return '/images/user-profiles.png'
    }

    return (
        <div className={classes.root}>
            <Grid container direction={"row-reverse"} onClick={handleToggleMenu}>
                <img src={getImage()} alt="user" className={classes.profileImg}/>
                <Grid container item direction={"column"} className={classes.profileText} style={{cursor: 'pointer'}}>
                    <Typography className={classes.profileName}>{localStorage.getItem('name')}</Typography>
                    <Typography className={classes.profileId}>{localStorage.getItem('username')}</Typography>
                </Grid>
                <input type={'file'} ref={inputRef} style={{display: 'none'}} onChange={handleAvatarChange}/>
            </Grid>
            <Grid container item direction={"column"} className={classes.twitterRoot}>
                <Typography className={classes.twitterTitle}>
                    بهترین خبرنگاران
                </Typography>
                <Divider style={{marginLeft: '-12%', marginRight: '-12%'}}/>

                {
                    users.map((item, index) =>
                        <Link to={`/users/${item.name}`} key={index} style={{width: '100%'}}>
                            <BestTweets item={item}/>

                            {
                                index !== users.length - 1 &&
                                <Divider style={{marginLeft: '-12%', marginRight: '-12%'}}/>
                            }
                        </Link>
                    )
                }
            </Grid>

            <Menu open={Boolean(anchorMenu)} onClose={() => setAnchorMenu(null)} anchorEl={anchorMenu}>
                <MenuItem className={classes.menuItem} onClick={() => {
                    inputRef.current.click()
                }}>ویرایش عکس پروفایل</MenuItem>
                <MenuItem className={classes.menuItem} onClick={() => {
                    localStorage.clear();
                    window.location.reload()
                }}>خروج</MenuItem>
            </Menu>
        </div>

    );
}

export default LeftSideBar;