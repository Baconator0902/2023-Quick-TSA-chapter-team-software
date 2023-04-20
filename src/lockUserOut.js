import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js' ;
import { firebaseApp, auth, database } from "./firebaseInit.js";
onAuthStateChanged(auth, (user) => {
        
    if (user) {


    } else {
    window.location.replace("./login.html");
    }
});

