import { configureStore } from "@reduxjs/toolkit"
import loginReducer from './features/loginSlice'
import userReducer from './features/userSlice'
import workoutsReducer from './features/workoutsSlice'

export const store = configureStore({
    reducer: {
        login: loginReducer,
        user: userReducer,
        workouts: workoutsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch