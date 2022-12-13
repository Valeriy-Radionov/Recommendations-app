import { AxiosResponse } from "axios"
import { baseInstance } from "./axios-instance/baseInstanceApi"

export const authApi = {
  register(regData: AuthRequestType) {
    return baseInstance.post<AuthRequestType, AxiosResponse<AuthResponseType>>(`${Endpoints.register}`, regData)
  },
  login(loginData: AuthRequestType) {
    return baseInstance.post<AuthRequestType, AxiosResponse<AuthResponseType>>(`${Endpoints.login}`, loginData)
  },
  logout() {
    return baseInstance.post(`${Endpoints.logout}`)
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
export type Role = "admin" | "user"
export type User = {
  id: string
  email: string
  isActivated: boolean
  role: Role
}
export type AuthResponseType = {
  accessToken: string
  refreshToken: string
  user: User
}
