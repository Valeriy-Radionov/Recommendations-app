import axios from "axios"

export const baseInstance = axios.create({
  baseURL: process.env.NODE_ENV === "development" ? process.env.LOCAL_SERVER_URL : process.env.PROD_SERVER_URL,
  withCredentials: true,
})

baseInstance.interceptors.request.use((config) => {
  config.headers = {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  }
  return config
})
