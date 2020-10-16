import { API } from './Api'

export const getTweets = (callback) => {
    API().get('/tweets')
        .then(res => {
            const data = res.data
            callback(true, data)
        }).catch(err => {
            callback(false, err)
        })
}

export const getUsers = (callback) => {
    API().get('/users')
        .then(res => {
            const data = res.data
            callback(true, data)
        }).catch(err => {
            callback(false, err)
        })
}

export const getHashTags = (callback) => {
    API().get('/hashtags')
        .then(res => {
            const data = res.data
            callback(true, data)
        }).catch(err => {
            callback(false, err)
        })
}

export const newTweetRequest = (data, callback) => {
    API().post('/tweets', data)
        .then(res => {
            callback(true)
        }).catch(err => {
            callback(true)
        })
}