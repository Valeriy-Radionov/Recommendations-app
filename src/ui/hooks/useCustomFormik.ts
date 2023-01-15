import { useFormik } from "formik"
import { loginTC, registrationTC } from "../../bll/reducers/authReducer"
import { useAppDispatch } from "../../common/hooks/appHooks"
import { validatorEmail, validatorPassword } from "../../common/utils/validators/formikValidators"
import { FormikType } from "../components/auth/auth-form/AuthForm"

export const useCustomFormik = (indicatorForm: "login" | "register") => {
  const dispatch = useAppDispatch()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      const errors: FormikType = {}
      validatorEmail(values, errors)
      validatorPassword(values, errors)
      return errors
    },
    onSubmit: (values) => {
      const value = {
        email: values.email,
        password: values.password,
      }
      indicatorForm === "login" && dispatch(loginTC(value))
      indicatorForm === "register" && dispatch(registrationTC(value))
      formik.resetForm()
    },
  })
  return formik
}
