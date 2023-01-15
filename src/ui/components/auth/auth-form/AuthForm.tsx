import VisibilityIcon from "@mui/icons-material/Visibility"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"
import { Box } from "@mui/material"
import FormControl from "@mui/material/FormControl"
import IconButton from "@mui/material/IconButton"
import InputAdornment from "@mui/material/InputAdornment"
import TextField from "@mui/material/TextField"
import Grid from "@mui/material/Unstable_Grid2"
import React, { useState } from "react"
import { Navigate } from "react-router-dom"
import styled from "styled-components"
import { CommonButton } from "../../../../common/components/CommonButton"
import { NavigateButton } from "../../../../common/components/NaviganeBtn"
import { useAppSelector } from "../../../../common/hooks/appHooks"
import { AppRoutes } from "../../../../common/routes/Routs"
import { useCustomFormik } from "../../../hooks/useCustomFormik"

export type FormikType = {
  email?: string
  password?: string
}
export type CommonAuthFormType = {
  formTitle: string
  indicatorForm: "login" | "register"
  routToPage: AppRoutes
  navLinkName: string
  routAuthForm: AppRoutes
  submitBtnname: string
}

export const AuthForm: React.FC<CommonAuthFormType> = ({ indicatorForm: idicatorForm, formTitle, routToPage, navLinkName, submitBtnname, routAuthForm }) => {
  const handleClickShowPassword = () => setShowPassword((show) => !show)
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn)

  const [showPassword, setShowPassword] = useState<boolean>(false)
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }
  const formik = useCustomFormik(idicatorForm)
  const errorEmail = formik.touched.email && formik.errors.email ? "error" : "success"
  const errorPassword = formik.touched.password && formik.errors.password ? "error" : "success"

  if (isLoggedIn) {
    return <Navigate key={"auth-form-navigate"} to={routToPage} />
  }
  return (
    <Wrapper>
      <Container>
        <CustomForm autoComplete="off" onSubmit={formik.handleSubmit}>
          <FormControl
            variant="outlined"
            sx={{
              "& .MuiTextField-root": { margin: "20px" },
              padding: "10px",
              borderRadius: "5px",
              boxShadow: 4,
            }}
          >
            <Title>{formTitle}</Title>
            <FormTextField id="email-form" type={"email"} errorform={errorEmail} autoComplete="off" label={"Email"} {...formik.getFieldProps("email")} />
            <FormTextField
              id="password-form"
              autoComplete="off"
              errorform={errorPassword}
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
                      {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              label="Password"
              {...formik.getFieldProps("password")}
            />
            <CommonButton type="submit" height="50px" width="100%" name={submitBtnname} />
            <NavigateButton to={routAuthForm} name={navLinkName} />
          </FormControl>
        </CustomForm>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.bgColor};
  width: ${({ theme }) => theme.size.conteinerWidth}%;
`
const Container = styled(Grid)`
  width: 100%;
  display: flex;
  margin-top: 15%;
  flex-direction: column;
`
const Title = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily.large}, sans-serif;
  font-size: ${({ theme }) => theme.fontSizeEm.large}em;
  color: ${({ theme }) => theme.colors.textColor};
  text-align: center;
`
const CustomForm = styled.form`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

type BorderFieldType = {
  errorform: "error" | "success"
}
const FormTextField = styled(TextField)<BorderFieldType>`
  & .MuiTextField-root {
    margin: 20px;
  }
  & label {
    color: ${({ errorform }) => (errorform !== "error" ? ({ theme }) => theme.colors.textColor : ({ theme }) => theme.colors.dangerColor)};
    background-color: ${({ theme }) => theme.colors.bgColor};
    opacity: 0.5;
  }
  & label.Mui-focused {
    color: ${({ errorform }) => (errorform !== "error" ? ({ theme }) => theme.colors.accessoryColor : ({ theme }) => theme.colors.dangerColor)};
    opacity: 1;
  }
  & .MuiOutlinedInput-root {
    & fieldset {
      border: 2px solid;
      border-color: ${({ errorform }) => (errorform !== "error" ? ({ theme }) => theme.colors.accessoryColor : ({ theme }) => theme.colors.dangerColor)};
    }
    &:focus-within fieldset {
      border-color: ${({ errorform }) => (errorform !== "error" ? ({ theme }) => theme.colors.accessoryColor : ({ theme }) => theme.colors.dangerColor)};
    }
    &:hover fieldset {
      border-color: ${({ theme }) => theme.colors.textColor};
    }
  }
`
