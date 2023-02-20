import { getAuth, createUserWithEmailAndPassword } from '../../../firebase/firebaseConfig'
import { db, doc, getDoc, setDoc } from '../../../firebase/firebaseConfig'
import { UserState } from '../../types/types'

export const createUser = (user: UserState) => {
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, user.email, user.password)
    .then((userCredential) => {
        const createdUser = userCredential.user
        console.log("USER: ", user)
        addUserInfo(user, createdUser.uid )
    })
    .catch ((error) => {
        console.log("Error code: ", error.code)
        console.log("Error message: ", error.message)
    })
}

const addUserInfo = async (user: UserState, uid: string) => {
    await setDoc(doc(db, 'User', uid), {
        userId: uid,
        isLoggedIn: user.isLoggedIn,
        email: user.email,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        height: user.height,
        weightArray: user.weightArray[user.weightArray.length - 1],
        goalWeight: user.goalWeight,
        gender: user.gender,
        activityLevel: user.activityLevel
    })
}

export const getUserInfo = async (userId: string) => {
    const userDocRef = doc(db, 'User', userId)
    const docSnap = await getDoc(userDocRef)

    if (docSnap.exists()) {
        console.log('HERE HERE: ', docSnap.data())
    } else {
        console.log('No such document')
    }
}