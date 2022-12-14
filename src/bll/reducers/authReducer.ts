import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { authApi, AuthRequestType, AuthResponseType } from "../../api/authApi"
import { User } from "../../api/usersApi"
import { setAppStatus } from "./appReducer"

export type UserDataType = {
  currentUser: AuthResponseType
  isLoggedIn: boolean
}

const initialState: UserDataType = {
  currentUser: {
    accessToken: "",
    refreshToken: "",
    user: {
      email: "",
      id: "",
      isActivated: false,
      role: "user",
    },
  },
  isLoggedIn: false,
}

const slice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setIsLoggedIn(state, action: PayloadAction<{ isLoggedIn: boolean }>) {
      state.isLoggedIn = action.payload.isLoggedIn
    },
    setCurrentUser(state, action: PayloadAction<{ userData: AuthResponseType }>) {
      state.currentUser = action.payload.userData
    },
    logout(state) {
      state = {} as UserDataType
    },
  },
})
export const authReducer = slice.reducer
export const setIsLoggedIn = slice.actions.setIsLoggedIn
export const setCurrentUser = slice.actions.setCurrentUser
export const logoutUser = slice.actions.logout

export const loginTC = createAsyncThunk("auth/login", async (payload: AuthRequestType, thunkApi) => {
  thunkApi.dispatch(setAppStatus({ status: "loading" }))
  try {
    const responseData = await authApi.login(payload)
    const userData = responseData.data
    if (userData && userData.user.isActivated) {
      thunkApi.dispatch(setCurrentUser({ userData }))
      localStorage.setItem("token", userData.accessToken)
      thunkApi.dispatch(setIsLoggedIn({ isLoggedIn: true }))
    }
    thunkApi.dispatch(setAppStatus({ status: "succeeded" }))
  } catch (e) {
    thunkApi.dispatch(setAppStatus({ status: "failed" }))
  }
})

export const registrationTC = createAsyncThunk("auth/registration", async (payload: AuthRequestType, thunkApi) => {
  thunkApi.dispatch(setAppStatus({ status: "loading" }))
  try {
    const responseData = await authApi.register(payload)
    const userData = responseData.data
    if (userData) {
      localStorage.setItem("token", userData.accessToken)
      thunkApi.dispatch(setAppStatus({ status: "succeeded" }))
    }
  } catch (e) {
    thunkApi.dispatch(setAppStatus({ status: "failed" }))
  }
})

export const logoutTC = createAsyncThunk("auth/logout", async (payload: AuthRequestType, thunkApi) => {
  thunkApi.dispatch(setAppStatus({ status: "loading" }))
  try {
    const responseData = await authApi.logout()
    const userData = responseData.data
    if (userData) {
      localStorage.removeItem("token")
      thunkApi.dispatch(logoutUser())
      thunkApi.dispatch(setAppStatus({ status: "succeeded" }))
    }
  } catch (e) {
    thunkApi.dispatch(setAppStatus({ status: "failed" }))
  }
})
