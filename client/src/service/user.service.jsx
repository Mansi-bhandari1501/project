// import { axiosApi } from '../config'
import  axios from "axios"

export const userLogin = async (payload )=> await  axios.post('http://localhost:8080/users/login', payload)
export const userRegister = async (payload) => await axios.post('http://localhost:8080/users/register', payload)
export const userFetch = async (payload) => await axios.get('http://localhost:8080/users', payload)
   