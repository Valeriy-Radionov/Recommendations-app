import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"

export type RequestStatusType = "idle" | "loading" | "succeeded" | "failed"

export type InitialAppStateType = {
  status: RequestStatusType
  error: string
  isInitialized: boolean
}

const initialState: InitialAppStateType = {
  status: "idle",
  error: "",
  isInitialized: false,
}

const slice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    setAppStatusAC(state, action: PayloadAction<{ status: RequestStatusType }>) {
      state.status = action.payload.status
    },
    setAppErrorAC(state, action: PayloadAction<{ error: string }>) {
      state.error = action.payload.error
    },
    setAppInitializedAC(state, action: PayloadAction<{ isInitialized: boolean }>) {
      state.isInitialized = action.payload.isInitialized
    },
  },
})

export const appReducer = slice.reducer
