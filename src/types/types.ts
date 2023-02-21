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
    QuickWorkout: undefined
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
    password: string
    firstName: string
    lastName: string
    height: Number | null
    weightArray: Weight[]
    goalWeight: Number | null
    gender: string
    activityLevel: Number | null
}

export interface Set {
    setNumber: number,
    reps: number,
    weight: number
}

export interface Movement {
    movementId: number
    name: string
    sets: Set[]
}

export type QuickWorkoutState = {
    workoutDate: string,
    workout: Movement[]
}
