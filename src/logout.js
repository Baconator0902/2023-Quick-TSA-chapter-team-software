import { firebaseApp, auth, database } from "./firebaseInit.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js' ;
import{ set, ref } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js';

const logOutButton = document.getElementById("logOutButton")
function logOut(){
    signOut(auth).then(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
             
              
    
        
            } else {
                window.location.replace("./index.html");
            }
    });
      }).catch((error) => {
        // An error happened.
      });
}

logOutButton.addEventListener('click', logOut);