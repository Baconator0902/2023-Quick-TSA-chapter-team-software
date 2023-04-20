import { firebaseApp, auth, database } from "./firebaseInit.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js' ;
import{ set, ref } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js';

const loginButton = document.getElementById("loginButton");
console.log(loginButton);

function logInWithEmail(){
    var uEmail = document.getElementById("loginEmail").value;
    var uPassword = document.getElementById("loginPassword").value;
    signInWithEmailAndPassword(auth, uEmail, uPassword)
    .then((userCredential) => {
// Signed in 
    var user = userCredential.user;
    console.log(user);
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          window.location.replace("./profile.html");
          

    
        } else {
        
        }
});

 })
.catch((error) => {
const errorCode = error.code;
const errorMessage = error.message;
// ..
 });    


}

loginButton.addEventListener("click", logInWithEmail);