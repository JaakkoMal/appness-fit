export type loginCredentials = {
    email: string,
    password: string
}

// NAV

export type LoginStackParamList = {
    Start: undefined
    SignUp: undefined
}

export type TabNavParamList = {
    HomeStack: undefined
    MyProfile: undefined
}

export type HomeStackParamList = {
    Home: undefined
}

// RTK

export interface Weight {
    weight: Number,
    weightedOnDate: string
}

export interface UserState {
    userId: string 
    isLoggedIn: boolean
    email: string
    username: string
    password: string
    firstName: string
    lastName: string
    height: Number | null
    weightArray: Weight[]
    goalWeight: Number | null
    gender: string
    activityLevel: Number | null
}