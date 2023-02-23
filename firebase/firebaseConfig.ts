import { initializeApp } from "firebase/app"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { getFirestore, doc, getDoc, setDoc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAYXlAuvtPcQW6NFEDPF5j53sHjItXbxR0",
    authDomain: "appness-fit.firebaseapp.com",
    projectId: "appness-fit",
    storageBucket: "appness-fit.appspot.com",
    messagingSenderId: "301835086613",
    appId: "1:301835086613:web:f86b43b069525174e9d71c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    db,
    doc,
    getDoc,
    setDoc,
    updateDoc,
    arrayUnion,
    arrayRemove
}