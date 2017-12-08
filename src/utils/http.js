import axios from 'axios'

export const HTTP = axios.create({
  baseURL: process.env.NODE_ENV
})

export default HTTP
