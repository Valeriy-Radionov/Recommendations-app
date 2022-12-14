import { AxiosResponse } from "axios"
import { axiosInstance } from "./axios-instance/axiosInstance"

export const usersApi = {
  getUser() {
    return axiosInstance.get<AxiosResponse<User[]>>(`${Endpoints.getUsers}`)
  },
}
enum Endpoints {
  getUsers = "/api/users",
}
export type Role = "admin" | "user"

export type User = {
  id: string
  email: string
  isActivated: boolean
  role: Role
}
