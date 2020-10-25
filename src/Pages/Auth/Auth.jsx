import React, {useEffect, useState, useRef} from 'react';
import {Button, TextField, Paper, Tab, Tabs, Typography} from "@material-ui/core";
import useStyle from './AuthStyles'
import {create} from 'jss';
import rtl from 'jss-rtl';
import {StylesProvider, jssPreset} from '@material-ui/core/styles';
import {loginApi, regApi} from '../../Api/Api_Auth'
import {toast} from "react-toastify";


const jss = create({plugins: [...jssPreset().plugins, rtl()]});

const LOGIN_TAB_VALUE = 1
const REG_TAB_VALUE = 2


function Auth() {
    const classes = useStyle()
    const regRef = useRef(null)

    const [tab, setTab] = useState()


    // Login State
    const [usernameLogin, setUsernameLogin] = useState()
    const [passwordLogin, setPasswordLogin] = useState()

    // Register State
    const [fullNameRegister, setFullNameRegister] = useState()
    const [usernameRegister, setUsernameRegister] = useState()
    const [passwordRegister, setPasswordRegister] = useState()
    const [confPasswordRegister, setConfPasswordRegiste] = useState()


    const handleChange = (e, newValue) => {
        setTab(newValue)
    }


    const validateRegister = (user) => {
        if (!user.name) return "باید حتما نام و نام خانوادگی را وارد کنید"
        if (!user.username) return "باید حتما نام کاربری را وارد کنید"
        if (!user.password) return "باید حتما رمز عبور را وارد کنید"
        if (user.password !== user.confPasswordRegister) return "باید رمزها مشابه باشند"
    }

    const validateLogin = (user) => {
        if (!user.username) return "باید حتما نام کاربری را وارد کنید"
        if (!user.password) return "باید حتما رمز عبور را وارد کنید"
    }


    const handleRegister = () => {
        const user = {
            name: fullNameRegister,
            username: usernameRegister,
            password: passwordRegister,
            confPasswordRegister
        }
        const error = validateRegister(user)
        if (error) return toast.warn(error)
        user.confPasswordRegister = undefined
        regApi(user, (isOk, data) => {
            if (!isOk) return toast.error(data)
            toast.success("شما با موفقیت ثبت نام شدید")
            localStorage.setItem('name', data.name)
            localStorage.setItem('image', data.image)
            localStorage.setItem('username', data.username)
            localStorage.setItem('x-auth-token', data["x-auth-token"])
            window.location.reload()
        })
    }

    const handleLogin = () => {
        const user = {
            username: usernameLogin,
            password: passwordLogin
        }
        const error = validateLogin(user)
        if (error) return toast.warn(error)
        loginApi(user, (isOk, data) => {
            if (!isOk) return toast.error(data)
            toast.success("شما با موفقیت وارد شدید")
            localStorage.setItem('name', data.name)
            localStorage.setItem('image', data.image)
            localStorage.setItem('username', data.username)
            localStorage.setItem('x-auth-token', data["x-auth-token"])
            window.location.reload()

        })
    }

    useEffect(() => {
        if (window.location.pathname === '/login')
            regRef.current.click()
    }, [])
    return (
        <StylesProvider jss={jss}>
            <Paper className={classes.container}>
                <Typography className={classes.headerText}>
                    به توییتر من خوش آمدید
                </Typography>

                <Tabs
                    value={tab}
                    indicatorColor={"primary"}
                    textColor={"primary"}
                    onChange={handleChange}
                >
                    <Tab className={classes.tab} label={'ورود'} value={LOGIN_TAB_VALUE}/>
                    <Tab ref={regRef} className={classes.tab} label={"ثبت نام"} value={REG_TAB_VALUE}/>
                </Tabs>

                {tab === LOGIN_TAB_VALUE &&
                <div className={classes.containerInput}>
                    <TextField
                        value={usernameLogin} onChange={e => setUsernameLogin(e.target.value)}
                        className={classes.textField} label={"نام کاربری"} variant="outlined"
                        inputProps={{style: {fontFamily: 'shabnam'}}}
                        InputLabelProps={{style: {fontFamily: 'shabnam'}}}/>
                    <TextField
                        type='password'
                        value={passwordLogin} onChange={e => setPasswordLogin(e.target.value)}
                        className={classes.textField} label={"رمز عبور"} variant="outlined"
                        inputProps={{style: {fontFamily: 'shabnam'}}}
                        InputLabelProps={{style: {fontFamily: 'shabnam'}}}
                    />
                    <Button
                        onClick={handleLogin}
                        variant={"contained"} color={"primary"}>ورود</Button>
                </div>
                }

                {
                    tab === REG_TAB_VALUE &&
                    <div className={classes.containerInput}>
                        <TextField
                            value={fullNameRegister} onChange={e => setFullNameRegister(e.target.value)}
                            className={classes.textField} label={"نام و نام خانوادگی"} variant="outlined"
                            inputProps={{style: {fontFamily: 'shabnam'}}}
                            InputLabelProps={{style: {fontFamily: 'shabnam'}}}/>

                        <TextField
                            value={usernameRegister} onChange={e => setUsernameRegister(e.target.value)}
                            className={classes.textField} label={"نام کاربری"} variant="outlined"
                            inputProps={{style: {fontFamily: 'shabnam'}}}
                            InputLabelProps={{style: {fontFamily: 'shabnam'}}}/>

                        <TextField
                            type='password'
                            value={passwordRegister} onChange={e => setPasswordRegister(e.target.value)}
                            className={classes.textField} label={"رمز عبور"} variant="outlined"
                            inputProps={{style: {fontFamily: 'shabnam'}}}
                            InputLabelProps={{style: {fontFamily: 'shabnam'}}}/>

                        <TextField
                            type='password'
                            value={confPasswordRegister} onChange={e => setConfPasswordRegiste(e.target.value)}
                            className={classes.textField} label={"تکرار رمز عبور"} variant="outlined"
                            inputProps={{style: {fontFamily: 'shabnam'}}}
                            InputLabelProps={{style: {fontFamily: 'shabnam'}}}/>

                        <Button onClick={handleRegister} variant={"contained"} color={"primary"}>ثبت نام</Button>
                    </div>
                }
            </Paper>
        </StylesProvider>
    );
}

export default Auth;