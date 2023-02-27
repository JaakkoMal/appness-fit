import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { LoginState } from '../../types/types'

const initialState: LoginState = {
  isLoggedIn: false
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
      login: (state) => {
        state.isLoggedIn = true
      },
      logout: (state) => {
        state.isLoggedIn = false
      }
    }
})

export const { login, logout } = loginSlice.actions
export const selectLogin = (state: RootState) => state.login.isLoggedIn
export default loginSlice.reducer