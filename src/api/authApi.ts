import { AxiosResponse } from "axios"
import { axiosInstance } from "./axios-instance/axiosInstance"
import { User } from "./usersApi"

export const authApi = {
  register(regData: AuthRequestType) {
    return axiosInstance.post<AuthRequestType, AxiosResponse<AuthResponseType>>(`${Endpoints.register}`, regData)
  },
  login(loginData: AuthRequestType) {
    return axiosInstance.post<AuthRequestType, AxiosResponse<AuthResponseType>>(`${Endpoints.login}`, loginData)
  },
  logout() {
    return axiosInstance.post(`${Endpoints.logout}`)
  },
}

enum Endpoints {
  register = "/api/registration",
  login = "/api/login",
  logout = "/api/logout",
}

export type AuthRequestType = {
  email: string
  password: string
}

export type AuthResponseType = {
  accessToken: string
  refreshToken: string
  user: User
}
