import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { QuickWorkoutState } from '../../types/types'

const initialState: QuickWorkoutState = {
  workoutDate: new Date().toLocaleDateString(),
  exercises: [
    {
      exerciseId: 1,
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
    addExerciseName: (state, action: PayloadAction<{exerciseId: number, name: string}>) => {
      const nameIndex = state.exercises.findIndex(exercise => exercise.exerciseId === action.payload.exerciseId)
            
      if (nameIndex !== -1) {
        state.exercises[nameIndex].name = action.payload.name
      } else {
          state.exercises.push({
            exerciseId: action.payload.exerciseId,
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
    addReps: (state, action: PayloadAction<{exerciseId: number, setNumber: number, reps: number}>) => {
      const movementIndex = state.exercises.findIndex(exercise => exercise.exerciseId === action.payload.exerciseId)
            
      if (movementIndex !== -1) {
        const setIndex = state.exercises[movementIndex].sets.findIndex(set => set.setNumber === action.payload.setNumber)
        if (setIndex !== -1) {
          state.exercises[movementIndex].sets[setIndex].reps = action.payload.reps
        } else {
            state.exercises[movementIndex].sets.push({
              setNumber: action.payload.setNumber,
              reps: action.payload.reps,
              weight: 0
          })
        }
      }
    },
    addWeight: (state, action: PayloadAction<{exerciseId: number, setNumber: number, weight: number}>) => {
      const movementIndex = state.exercises.findIndex(exercise => exercise.exerciseId === action.payload.exerciseId)
            
      if (movementIndex !== -1) {
        const setIndex = state.exercises[movementIndex].sets.findIndex(set => set.setNumber === action.payload.setNumber)
        if (setIndex !== -1) {
          state.exercises[movementIndex].sets[setIndex].weight = action.payload.weight
        } else {
          state.exercises[movementIndex].sets.push({
            setNumber: action.payload.setNumber,
            reps: action.payload.weight,
            weight: 0
          })
        }
      }
    },
    addSet: (state, action: PayloadAction<{exerciseId: number, setNumber: number}>) => {
      const movementIndex = state.exercises.findIndex(exercise => exercise.exerciseId === action.payload.exerciseId)

      if (movementIndex !== -1) {
        state.exercises[movementIndex].sets.push({
          setNumber: action.payload.setNumber,
          reps: 0,
          weight: 0
        })
      }
    },
    removeSet: (state, action: PayloadAction<{exerciseId: number, setNumber: number}>) => {
      const movementIndex = state.exercises.findIndex(exercise => exercise.exerciseId === action.payload.exerciseId)

      if (movementIndex !== -1) {
        const setIndex = state.exercises[movementIndex].sets.findIndex(set => set.setNumber === action.payload.setNumber)
        if (setIndex !== -1) {
          state.exercises[movementIndex].sets.splice(setIndex, 1)
          let count = 1
          state.exercises[movementIndex].sets.forEach(set => {
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

export const { addExerciseName, addReps, addWeight, addSet, removeSet, setWorkoutInitialState } = quickWorkoutSlice.actions
export const selectQuickWorkout = (state: RootState) => state.quickWorkout
export default quickWorkoutSlice.reducer