import Axios from 'axios'


export const API = () => {
  return  Axios.create({
        baseURL: 'http://localhost:3000',
        headers: {
            API_KEY: "lnhfkagfjasgfjbfmafjagfanfaskabdfasb"
        }
    })
}