import React, { useState } from 'react'
import { db, doc, updateDoc, arrayUnion } from '../../firebase/firebaseConfig'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { addWorkout } from '../redux/features/workoutsSlice'
import QuickWorkoutView from '../views/QuickWorkoutView'
import { QuickWorkoutState, Movement, Set, HomeStackParamList} from '../types/types'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
type Props = NativeStackScreenProps<HomeStackParamList, 'QuickWorkout'>

const workoutInitialState: Movement[] = [
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
export default function QuickWorkoutScreen({navigation}: Props) {

  const dispatch = useAppDispatch()
  const userId = useAppSelector((state) => state.user.userId)
  const [workout, setWorkout] = useState<Movement[]>(workoutInitialState)


  const addEmptyExerciseInputField = () => {
    const newWorkout = [...workout]
    const newExercise = {
      movementId: newWorkout[newWorkout.length - 1].movementId + 1,
      name: '',
      sets: []
    }
    newWorkout.push(newExercise)
    setWorkout(newWorkout)
  }

  const addSetsToExercise = (movementId: number, name: string, sets: Set[]) => {
    const newWorkout = [...workout]
    const exerciseIndex = newWorkout.findIndex(i => i.movementId === movementId)
    if (exerciseIndex!== -1) {
      newWorkout[exerciseIndex].name = name
      newWorkout[exerciseIndex].sets = sets
      setWorkout(newWorkout)
    }
  }

  const saveWorkout = () => {
    const newWorkout: QuickWorkoutState = {
      workoutDate: new Date().toLocaleDateString(),
      workout: workout
    }
    dispatch(addWorkout(newWorkout))
    addWorkoutToFirebase(newWorkout, userId)
    goToHomeView()
  }

  const addWorkoutToFirebase = async (workout: QuickWorkoutState, userId: string) => {
    const workoutsRef = doc(db, "Workouts", userId);
    await updateDoc(workoutsRef, {
      workouts: arrayUnion(workout)
    });
  }

  const goToHomeView = () => {
    navigation.navigate('Home')
  }

  return (
    <QuickWorkoutView
      workout={workout}
      addEmptyExerciseInputField={addEmptyExerciseInputField}
      saveWorkout={saveWorkout}
      addSetsToExercise={addSetsToExercise}
    />
  )
}
