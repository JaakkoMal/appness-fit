import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'
import { UserState, Weight } from '../types/types'

const initialState: UserState = {
    userId: '',
    email: '',
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
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload
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
        setHeight: (state, action: PayloadAction<number>) => {
            state.height = action.payload
        },
        setWeight: (state, action: PayloadAction<Weight>) => {
            state.weightArray.push(action.payload)
        },
        setGoalWeight: (state, action: PayloadAction<number>) => {
            state.goalWeight = action.payload
        },
        setGender: (state, action: PayloadAction<string>) => {
            state.gender = action.payload
        },
        setActivityLevel: (state, action: PayloadAction<number>) => {
            state.activityLevel = action.payload
        },
        setUser: (state, action: PayloadAction<UserState>) => {
            return action.payload
        }
    }
})

export const { 
    setUserId,  
    setEmail, 
    setPassword, 
    setFirstName, 
    setLastName, 
    setHeight, 
    setWeight, 
    setGoalWeight, 
    setGender, 
    setActivityLevel,
    setUser
 } = userSlice.actions
export const selectUser = (state: RootState) => state.user
export default userSlice.reducer