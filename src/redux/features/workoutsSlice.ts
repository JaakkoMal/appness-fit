import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { WorkoutsState, QuickWorkoutState } from '../../types/types'

const initialState: WorkoutsState = []

export const workoutsSlice = createSlice({
  name: 'workouts',
  initialState,
  reducers: {
    addWorkout: (state, action: PayloadAction<QuickWorkoutState>) => {
      state.push(action.payload)
    },
    setWorkouts: (state, action: PayloadAction<WorkoutsState>) => {
      return action.payload
    }
  }
})

export const { 
  addWorkout,
  setWorkouts  
} = workoutsSlice.actions
export const selectWorkouts = (state: RootState) => state.workouts
export default workoutsSlice.reducer