import { initializeApp } from "firebase/app"
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getReactNativePersistence, initializeAuth } from 'firebase/auth/react-native'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { getFirestore, doc, getDoc, setDoc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  // Your firebase config here...
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
})

export {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    db,
    doc,
    getDoc,
    setDoc,
    updateDoc,
    arrayUnion,
    arrayRemove
}