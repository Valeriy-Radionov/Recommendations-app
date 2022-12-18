import { AppRoutes } from "../../../../common/routes/Routs"
import { AuthForm } from "../auth-form/AuthForm"

export const Login = () => {
  return <AuthForm idicatorForm="login" formTitle="Sign In" navLinkName="Back to Registration" routToPage={AppRoutes.users} submitBtnname="LOGIN" routAuthForm={AppRoutes.registr} />
}
