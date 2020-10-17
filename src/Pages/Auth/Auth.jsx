import React, {useState} from 'react';
import {Button, TextField, Paper, Tab, Tabs, Typography} from "@material-ui/core";
import useStyle from './AuthStyles'
import {create} from 'jss';
import rtl from 'jss-rtl';
import {StylesProvider, jssPreset} from '@material-ui/core/styles';

const jss = create({plugins: [...jssPreset().plugins, rtl()]});

const LOGIN_TAB_VALUE = 1
const REG_TAB_VALUE = 2


function Auth() {
    const classes = useStyle()

    const [tab, setTab] = useState()

    const handleChange = (e, newValue) => {
        setTab(newValue)
    }

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
                    <Tab className={classes.tab} label={"ثبت نام"} value={REG_TAB_VALUE}/>
                </Tabs>

                {tab === LOGIN_TAB_VALUE &&
                <div className={classes.containerInput}>
                    <TextField className={classes.textField} label={"نام کاربری"} variant="outlined"
                               inputProps={{style: {fontFamily: 'shabnam'}}}
                               InputLabelProps={{style: {fontFamily: 'shabnam'}}}/>
                    <TextField className={classes.textField} label={"رمز عبور"} variant="outlined"
                               inputProps={{style: {fontFamily: 'shabnam'}}}
                               InputLabelProps={{style: {fontFamily: 'shabnam'}}}/>
                    <Button variant={"contained"} color={"primary"}>ورود</Button>
                </div>
                }

                {
                    tab === REG_TAB_VALUE &&
                    <div className={classes.containerInput}>
                        <TextField className={classes.textField} label={"نام و نام خانوادگی"} variant="outlined"
                                   inputProps={{style: {fontFamily: 'shabnam'}}}
                                   InputLabelProps={{style: {fontFamily: 'shabnam'}}}/>
                        <TextField className={classes.textField} label={"نام کاربری"} variant="outlined"
                                   inputProps={{style: {fontFamily: 'shabnam'}}}
                                   InputLabelProps={{style: {fontFamily: 'shabnam'}}}/>
                        <TextField className={classes.textField} label={"رمز عبور"} variant="outlined"
                                   inputProps={{style: {fontFamily: 'shabnam'}}}
                                   InputLabelProps={{style: {fontFamily: 'shabnam'}}}/>
                        <TextField className={classes.textField} label={"تکرار رمز عبور"} variant="outlined"
                                   inputProps={{style: {fontFamily: 'shabnam'}}}
                                   InputLabelProps={{style: {fontFamily: 'shabnam'}}}/>
                        <Button variant={"contained"} color={"primary"}>ثبت نام</Button>
                    </div>
                }
            </Paper>
        </StylesProvider>
    );
}

export default Auth;