import axios from "axios"

export const http = axios.create({
  baseURL: 'https://api.light.xhhzs.cn',
  timeout: 10000,
})
