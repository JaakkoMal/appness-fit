import { configureStore } from "@reduxjs/toolkit"
import loginReducer from '../features/loginSlice'
import userReducer from '../features/userSlice'
import quickWorkoutReducer from '../features/quickWorkoutSlice'

export const store = configureStore({
    reducer: {
        login: loginReducer,
        user: userReducer,
        quickWorkout: quickWorkoutReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch