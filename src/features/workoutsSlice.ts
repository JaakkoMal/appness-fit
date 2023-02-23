import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'
import { WorkoutsState, QuickWorkoutState } from '../types/types'

const initialState: WorkoutsState = {
    userId: '',
    workouts: []
}

export const workoutsSlice = createSlice({
    name: 'workouts',
    initialState,
    reducers: {
        setUserId: (state, action: PayloadAction<string>) => {
            state.userId = action.payload
        },
        addWorkout: (state, action: PayloadAction<QuickWorkoutState>) => {
            state.workouts.push(action.payload)
        },
        setWorkouts: (state, action: PayloadAction<WorkoutsState>) => {
            return action.payload
        }
    }
})

export const { 
    setUserId,
    addWorkout,
    setWorkouts  
 } = workoutsSlice.actions
export const selectWorkouts = (state: RootState) => state.workouts
export default workoutsSlice.reducer