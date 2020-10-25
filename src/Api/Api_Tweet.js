import {API, instanceAPI} from './Api'

export const getAllTweets = (callback) => {
    instanceAPI().post('/getAllTweet')
        .then(res => {
            const data = res.data
            callback(true, data)
        }).catch(err => {
        callback(false, err)
    })
}

export const getUsers = (callback) => {
    instanceAPI().get('/getAllUser')
        .then(res => {
            const data = res.data
            callback(true, data)
        }).catch(err => {
        callback(false, err)
    })
}

export const getHashTags = (callback) => {
    instanceAPI().get('/getAllHashTags')
        .then(res => {
            const data = res.data
            callback(true, data)
        }).catch(err => {
        callback(false, err)
    })
}

export const newTweetRequest = (data, callback) => {
    instanceAPI().post('/newTweet', data)
        .then(res => {
            const data = res.data
            callback(true, data)
        }).catch(err => {
        callback(false, err)
    })
}

export const likeTweetRequest = (id, callback) => {
    instanceAPI().get(`/likeTweet/${id}`)
        .then(res => {
            const data = res.data
            callback(true, data)
        }).catch(err => {
        callback(false, err)
    })
}