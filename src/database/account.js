import {auth, db} from './firebase';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged
} from "firebase/auth";
import {doc, setDoc, getDoc} from "firebase/firestore";

const register = (name, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCred) => {
        const user = userCred.user
        console.log(user)
        await setDoc(doc(db, 'users', user.uid), {
            name: name,
            email: email,
            created: Date.now()
        })
        return true;
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error code " + errorCode)
        console.log(errorMessage)
        return false;
    });
}

const logIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
            return true;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Error code " + errorCode)
            console.log(errorMessage)
            return false;
        });
}

export {
    register,
    logIn
}