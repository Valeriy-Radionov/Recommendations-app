import { FormikType } from "../../../ui/components/auth/auth-form/AuthForm"
const errorRequired = "Required field"
const invalidEmail = "Invalid email address"
const invalidPassword = "Password must be more 8 symbols"

export const validatorEmail = (values: FormikType, error: FormikType) => {
  if (values.email === "") {
    error.email = errorRequired
  }
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email!)) {
    error.email = invalidEmail
  }
  return error
}

export const validatorPassword = (values: FormikType, error: FormikType) => {
  if (values.password === "") {
    error.password = errorRequired
  }
  if (values.password?.length! < 7) {
    error.password = invalidPassword
  }
  return error
}
