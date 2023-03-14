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
  goalWeight: 0,
  gender: '',
  activityLevel: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      return action.payload
    },
    updateWeight: (state, action: PayloadAction<Weight>) => {
      state.weightArray.push(action.payload)
    },
    updateGoalWeight: (state, action: PayloadAction<number>) => {
      state.goalWeight = action.payload
    },
    updateActivityLevel: (state, action: PayloadAction<number>) => {
      state.activityLevel = action.payload
    }
  }
})

export const { 
  setUser,
  updateWeight,
  updateGoalWeight,
  updateActivityLevel
} = userSlice.actions
export const selectUser = (state: RootState) => state.user
export default userSlice.reducer