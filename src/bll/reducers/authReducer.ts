import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { AuthResponseType } from "../../api/authApi"

const initialState: AuthResponseType & { isLoggedIn: boolean } = {
  accessToken: "",
  refreshToken: "",
  isLoggedIn: false,
  user: {
    email: "",
    id: "",
    isActivated: false,
    role: "user",
  },
}
const slice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setIsLoggedIn(state, action: PayloadAction<{ isLoggedIn: boolean }>) {
      state.isLoggedIn = action.payload.isLoggedIn
    },
    setCurrentUser(state, action: PayloadAction<{ currentUser: AuthResponseType }>) {
      //   state.currentUser = action.payload.currentUser
    },
  },
})
export const authReducer = slice.reducer
