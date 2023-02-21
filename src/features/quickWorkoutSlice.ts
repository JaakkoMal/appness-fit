import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'
import { QuickWorkoutState, Movement, Set } from '../types/types'

const initialState: QuickWorkoutState = {
    workoutDate: '',
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
                    console.log("Ol joo!")
                    console.log(state)
                } else {
                    state.workout[movementIndex].sets.push({
                        setNumber: action.payload.setNumber,
                        reps: action.payload.reps,
                        weight: 0
                    })
                    console.log("Ei ol, ny o")
                    console.log(state)
                }
            }
        },
        addWeight: (state, action: PayloadAction<{movementId: number, setNumber: number, weight: number}>) => {
            const movementIndex = state.workout.findIndex(i => i.movementId === action.payload.movementId)
            
            if (movementIndex !== -1) {
                const setIndex = state.workout[movementIndex].sets.findIndex(i => i.setNumber === action.payload.setNumber)
                if (setIndex !== -1) {
                    state.workout[movementIndex].sets[setIndex].weight = action.payload.weight
                    console.log("Ol joo!")
                    console.log(state)
                } else {
                    state.workout[movementIndex].sets.push({
                        setNumber: action.payload.setNumber,
                        reps: action.payload.weight,
                        weight: 0
                    })
                    console.log("Ei ol, ny o")
                    console.log(state)
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
        }
    }
})

export const { addWorkoutDate, addMovementName, addReps, addWeight, addSet } = quickWorkoutSlice.actions
export const selectQuickWorkout = (state: RootState) => state
export default quickWorkoutSlice.reducer