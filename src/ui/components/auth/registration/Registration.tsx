import { AppRoutes } from "../../../../common/routes/Routs"
import { AuthForm } from "../auth-form/AuthForm"

export const Registration = () => {
  return <AuthForm idicatorForm="register" formTitle="Registration" navLinkName="Back to Login" routAuthForm={AppRoutes.login} routToPage={AppRoutes.users} submitBtnname={"REGISTRATION"} />
}
