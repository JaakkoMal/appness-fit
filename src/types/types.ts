export type LoginCredentials = {
    email: string,
    password: string
}

// NAV

export type LoginStackParamList = {
  Start: undefined
  SignUp: undefined
}

export type DrawerNavParamList = {
  HomeStack: undefined
  MyProfile: undefined
}

export type HomeStackParamList = {
  Home: undefined
  QuickWorkout: undefined
  WorkoutHistory: undefined
  EditPersonalStats: undefined
}

// RTK

export interface LoginState {
  isLoggedIn: boolean
}

export interface Weight {
  weight: number,
  weightedOnDate: string
}

export interface UserState {
  userId: string 
  email: string
  password: string
  firstName: string
  lastName: string
  height: number | null
  weightArray: Weight[]
  goalWeight: number | null
  gender: string
  activityLevel: number | null
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

export type WorkoutsState = QuickWorkoutState[]
