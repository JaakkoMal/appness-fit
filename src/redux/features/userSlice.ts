import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { UserState, Weight } from '../../types/types'

const initialState: UserState = {
  userId: '',
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  height: null,
  weightArray: [{weight: 0, weightedOnDate: new Date().toLocaleDateString()}],
  goalWeight: null,
  gender: '',
  activityLevel: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      return action.payload
    }
  }
})

export const { 
  setUser
} = userSlice.actions
export const selectUser = (state: RootState) => state.user
export default userSlice.reducer