import Axios from 'axios'


export const API = () => {
    return Axios.create({
        baseURL: "https://twitterapi.liara.run/api",
    });
};


export const instanceAPI = () => {
    return Axios.create({
        baseURL: "https://twitterapi.liara.run/api",
        headers: {
            'x-auth-token': localStorage.getItem("x-auth-token")
        }
    });
};
