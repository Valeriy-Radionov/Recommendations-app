import { Dispatch } from "@reduxjs/toolkit"
import axios, { AxiosError } from "axios"
import { setAppError, setAppStatus } from "../../../bll/reducers/appReducer"

export const handleServerNetworkError = (e: unknown, dispatch: Dispatch) => {
  const err = e as Error | AxiosError
  if (axios.isAxiosError(err)) {
    const error = err.response?.data.msg ? err.response.data.msg : err.message
    dispatch(setAppError({ error: error }))
  }
  dispatch(setAppStatus({ status: "failed" }))
}
