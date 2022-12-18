import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { lightTheme } from "../../common/styles/theme/baseTheme"
import { ThemeEnum, ThemeStyle } from "../../common/styles/theme/intarfeceTheme"
import { handleServerNetworkError } from "../../common/utils/axios-error-utils/axiosErrors"

export type RequestStatusType = "idle" | "loading" | "succeeded" | "failed"

export type InitialAppStateType = {
  status: RequestStatusType
  error: string
  theme: ThemeEnum
  isInitialized: boolean
}

const initialState: InitialAppStateType = {
  status: "idle",
  error: "",
  isInitialized: false,
  theme: ThemeEnum.light,
}

const slice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    setAppStatus(state, action: PayloadAction<{ status: RequestStatusType }>) {
      state.status = action.payload.status
    },
    setAppError(state, action: PayloadAction<{ error: string }>) {
      state.error = action.payload.error
    },
    setAppInitializedAC(state, action: PayloadAction<{ isInitialized: boolean }>) {
      state.isInitialized = action.payload.isInitialized
    },
    setTheme(state, action: PayloadAction<{ themeStyle: ThemeEnum }>) {
      state.theme = action.payload.themeStyle
    },
  },
})

export const appReducer = slice.reducer
export const setAppStatus = slice.actions.setAppStatus
export const setAppError = slice.actions.setAppError
export const setAppInitializedAC = slice.actions.setAppInitializedAC
export const setThemeApp = slice.actions.setTheme

export const setThemeAppTC = createAsyncThunk("app/them", async (currentTheme: ThemeEnum, thunkApi) => {
  thunkApi.dispatch(setAppStatus({ status: "loading" }))
  try {
    thunkApi.dispatch(setThemeApp({ themeStyle: currentTheme }))
    thunkApi.dispatch(setAppStatus({ status: "succeeded" }))
  } catch (e) {
    handleServerNetworkError(e, thunkApi.dispatch)
    thunkApi.dispatch(setAppStatus({ status: "failed" }))
  }
})
