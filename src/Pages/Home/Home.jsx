import React from 'react';
import useStyle from "./HomeStyles";
import Header from "./Components/Header";
import {Divider} from "@material-ui/core";
import NewTweet from "./Components/NewTweet";
import TweetList from "./Components/TweetList";


const tweets = [
    {
        sender: {
            id: '@xiaomi',
            name: 'Xiaomi',
            img: './images/xiaomi.png'

        },
        text: '                        بهترین وعده غذایی با اختلاف زیادی صبحانه است چون ممکن نیست بریا #صبحانه کسی خورشت #کرفس درست کنه\n',
        likes: 8
    }, {
        sender: {
            id: '@samsung',
            name: 'Samsung',
            img: './images/samsung.png'

        },
        text: '                        بهترین وعده غذایی با اختلاف زیادی صبحانه است چون ممکن نیست بریا #صبحانه کسی خورشت #کرفس درست کنه\n',
        likes: 5
    }, {
        sender: {
            id: '@koooooh',
            name: 'سیامک کوه دره',
            img: './images/koooh_user.png'

        },
        text: '                        بهترین وعده غذایی با اختلاف زیادی صبحانه است چون ممکن نیست بریا #صبحانه کسی خورشت #کرفس درست کنه\n',
        likes: 3
    }, {
        sender: {
            id: '@Mike_IMC',
            name: 'مایک بای',
            img: './images/mike.png'

        },
        text: '                        بهترین وعده غذایی با اختلاف زیادی صبحانه است چون ممکن نیست بریا #صبحانه کسی خورشت #کرفس درست کنه\n',
        likes: 2
    }, {
        sender: {
            id: '@Shirley_IMC',
            name: 'شرلی ونگ',
            img: './images/shily.png'

        },
        text: '                        بهترین وعده غذایی با اختلاف زیادی صبحانه است چون ممکن نیست بریا #صبحانه کسی خورشت #کرفس درست کنه\n',
        likes: 10
    }
]

function Home() {
    const classes = useStyle()
    return (
        <div className={classes.root}>
            <Header/>
            <Divider className={classes.divider}/>
            <NewTweet/>
            <TweetList data={tweets}/>
        </div>
    );
}

export default Home;