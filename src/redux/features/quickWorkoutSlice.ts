import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { QuickWorkoutState } from '../../types/types'

const initialState: QuickWorkoutState = {
  workoutDate: new Date().toLocaleDateString(),
  workout: [
    {
      movementId: 1,
      name: '',
      sets: [
        {
          setNumber: 1,
          reps: 0,
          weight: 0
        }      
      ]
    }
  ]
}

export const quickWorkoutSlice = createSlice({
  name: 'quick workout',
  initialState,
  reducers: {
    addWorkoutDate: (state, action: PayloadAction<string>) => {
      state.workoutDate = action.payload
    },
    addMovementName: (state, action: PayloadAction<{movementId: number, name: string}>) => {
      const nameIndex = state.workout.findIndex(i => i.movementId === action.payload.movementId)
            
      if (nameIndex !== -1) {
        state.workout[nameIndex].name = action.payload.name
      } else {
          state.workout.push({
            movementId: action.payload.movementId,
            name: action.payload.name,
            sets: [
              {
                setNumber: 1,
                reps: 0,
                weight: 0
              }
            ]
          })
        }
    },
    addReps: (state, action: PayloadAction<{movementId: number, setNumber: number, reps: number}>) => {
      const movementIndex = state.workout.findIndex(i => i.movementId === action.payload.movementId)
            
      if (movementIndex !== -1) {
        const setIndex = state.workout[movementIndex].sets.findIndex(i => i.setNumber === action.payload.setNumber)
        if (setIndex !== -1) {
          state.workout[movementIndex].sets[setIndex].reps = action.payload.reps
        } else {
            state.workout[movementIndex].sets.push({
              setNumber: action.payload.setNumber,
              reps: action.payload.reps,
              weight: 0
          })
        }
      }
    },
    addWeight: (state, action: PayloadAction<{movementId: number, setNumber: number, weight: number}>) => {
      const movementIndex = state.workout.findIndex(i => i.movementId === action.payload.movementId)
            
      if (movementIndex !== -1) {
        const setIndex = state.workout[movementIndex].sets.findIndex(i => i.setNumber === action.payload.setNumber)
        if (setIndex !== -1) {
          state.workout[movementIndex].sets[setIndex].weight = action.payload.weight
        } else {
          state.workout[movementIndex].sets.push({
            setNumber: action.payload.setNumber,
            reps: action.payload.weight,
            weight: 0
          })
        }
      }
    },
    addSet: (state, action: PayloadAction<{movementId: number, setNumber: number}>) => {
      const movementIndex = state.workout.findIndex(i => i.movementId === action.payload.movementId)

      if (movementIndex !== -1) {
        state.workout[movementIndex].sets.push({
          setNumber: action.payload.setNumber,
          reps: 0,
          weight: 0
        })
      }
    },
    removeSet: (state, action: PayloadAction<{movementId: number, setNumber: number}>) => {
      const movementIndex = state.workout.findIndex(i => i.movementId === action.payload.movementId)

      if (movementIndex !== -1) {
        const setIndex = state.workout[movementIndex].sets.findIndex(i => i.setNumber === action.payload.setNumber)
        if (setIndex !== -1) {
          state.workout[movementIndex].sets.splice(setIndex, 1)
          let count = 1
          state.workout[movementIndex].sets.forEach(set => {
            set.setNumber = count
            count += 1
          })
        }
      }
    },
    setWorkoutInitialState: (state) => {
      return initialState
    }
  }
})

export const { addWorkoutDate, addMovementName, addReps, addWeight, addSet, removeSet, setWorkoutInitialState } = quickWorkoutSlice.actions
export const selectQuickWorkout = (state: RootState) => state.quickWorkout
export default quickWorkoutSlice.reducer