import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'
import { UserState, Weight } from '../types/types'

const initialState: UserState = {
    userId: '',
    isLoggedIn: false,
    email: '',
    username: '',
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
        setUserId: (state, action: PayloadAction<string>) => {
            state.userId = action.payload
        },
        login: (state) => {
            state.isLoggedIn = true
        },
        logout: (state) => {
            state.isLoggedIn = false
        },
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload
        },
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        },
        setFirstName: (state, action: PayloadAction<string>) => {
            state.firstName = action.payload
        },
        setLastName: (state, action: PayloadAction<string>) => {
            state.lastName = action.payload
        },
        setHeight: (state, action: PayloadAction<Number>) => {
            state.height = action.payload
        },
        setWeight: (state, action: PayloadAction<Weight>) => {
            state.weightArray.push(action.payload)
        },
        setGoalWeight: (state, action: PayloadAction<Number>) => {
            state.goalWeight = action.payload
        },
        setGender: (state, action: PayloadAction<string>) => {
            state.gender = action.payload
        },
        setActivityLevel: (state, action: PayloadAction<Number>) => {
            state.activityLevel = action.payload
        }
    }
})

export const { setUserId, login, logout, setEmail, setUsername, setPassword, setFirstName, setLastName, setHeight, setWeight, setGoalWeight, setGender, setActivityLevel } = userSlice.actions
export const selectUser = (state: RootState) => state
export default userSlice.reducer