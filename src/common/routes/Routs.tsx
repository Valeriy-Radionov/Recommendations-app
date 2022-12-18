import { Route, Routes } from "react-router-dom"
import { Login } from "../../ui/components/auth/login/Login"
import { Registration } from "../../ui/components/auth/registration/Registration"
import { ErrorPage } from "../components/errorPage/ErrorPage"

export enum AppRoutes {
  defPath = "/",
  login = "/login",
  registr = "/registration",
  users = "/profile",
  error = "*",
}

export const Routs = () => {
  return (
    <Routes>
      <Route path={AppRoutes.defPath} element={<Login />} />
      <Route path={AppRoutes.login} element={<Login />} />
      <Route path={AppRoutes.registr} element={<Registration />} />
      <Route path={AppRoutes.error} element={<ErrorPage />} />
    </Routes>
  )
}
