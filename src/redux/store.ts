import { configureStore } from "@reduxjs/toolkit"
import loginReducer from './features/loginSlice'
import userReducer from './features/userSlice'
import quickWorkoutSlice from "./features/quickWorkoutSlice"
import workoutsReducer from './features/workoutsSlice'

export const store = configureStore({
    reducer: {
        login: loginReducer,
        user: userReducer,
        quickWorkout: quickWorkoutSlice,
        workouts: workoutsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch