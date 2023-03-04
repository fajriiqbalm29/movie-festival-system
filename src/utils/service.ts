import Axios from 'axios'
import router from '@/router/route'

const baseURL:string = 'http://localhost:3000/api'
const user : any = JSON.parse(localStorage.getItem('user_session'))

const axios = Axios.create({
    baseURL
})

if (user && user.access_token) axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`;

axios.interceptors.response.use(
    resp => {
        return resp
    },
    error => {
        /** intercept if Unauthenticated */
        const errorMessageFromApi = error.response.data.message || error.response.data.messages || null

        if (error.response.status === 401 && errorMessageFromApi === 'Unauthenticated.') {
            axios.defaults.headers.Authorization = null
            router.push('/')
        }

        return Promise.reject(error)
    })

export default axios