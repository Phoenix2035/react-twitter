import {API, instanceAPI} from './Api'

export const loginApi = (user, callback) => {
    API().post('/login', user)
        .then(response => {
            const data = response.data
            callback(true, data)
        }).catch(err => {
        callback(false, err.response.data.message)
    })
}

export const regApi = (user, callback) => {
    API().post('/register', user)
        .then(response => {
            const data = response.data
            callback(true, data)
        }).catch(err => {
        callback(false, err.response.data.message)
    })
}



export const uploadUserPhoto = (photo, callback) => {
    instanceAPI().post('/uploadUserPhoto', photo)
        .then(response => {
            const data = response.data
            callback(true, data)
        }).catch(err => {
        callback(false, err.response.data.message)
    })
}

