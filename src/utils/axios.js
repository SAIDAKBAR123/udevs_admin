import axios from 'axios'
import config from '../config/defaultSettings'
// axios new instance
const request = axios.create({
  baseURL: config.baseURL,
  timeout: 8000
})


// Error on connection
const errorHandler = (error, hooks) => {
  if (error.response) {
    if (error.response.status === 403) {

    }
    if ( error.response.status === 401) {

    }
  }
  return Promise.reject(error.response)
}

// request interceptor
request.interceptors.request.use(config => {
    // here you can set tokens, client-ids, and other header types

    //   const token = localStorage.getItem('token')
    //   config.headers['client-id'] = process.env.CLIENT_ID
    //   if (token) {
    //     config.headers['Authorization'] = token
    //   }
  return config
}, errorHandler)

// response interceptor
request.interceptors.response.use(response => response.data , errorHandler)

export default request

