import { AxiosResponse } from "axios"
import { User } from "./authApi"
import { axiosInstance } from "./axios-instance/axiosInstance"

export const usersApi = {
  getUser() {
    return axiosInstance.get<AxiosResponse<User[]>>(`${Endpoints.getUsers}`)
  },
}
enum Endpoints {
  getUsers = "/api/users",
}
