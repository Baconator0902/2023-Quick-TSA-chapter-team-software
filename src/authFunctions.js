import { firebaseApp, auth, database } from "./firebaseInit.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js' ;
import{update,  set, ref } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js';

const submitButton =  document.getElementById("submitButton");

function signUpWithEmail(){
   
   //Variables for email, password, username
    var signUpEmail = document.getElementById("email").value;
    
    var signUpPassword = document.getElementById("password1").value;

    var signUpPassword2 = document.getElementById("password2").value;

    var firstName = document.getElementById("first_name").value;
    
    var lastName = document.getElementById("last_name").value;

    var personID = document.getElementById("userTSAID").value;
      
    //create user:
    if(signUpPassword2 == signUpPassword){
    createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword).then((userCredential) => {
        var user = userCredential.user;
      
        onAuthStateChanged(auth, (user) => {
        
            if (user) {
                var uid = user.uid;
                set(ref(database, 'users/' + uid),{
                    userId : uid,
                    userFirstName : firstName,
                   userLastName :lastName,
                   userEmal : signUpEmail,
                    personID : "",
                    mySkills : "",
                    pastWorks : "",
                    event1 : "",
                    event2: "",
                    event3: "",
                    event4:"",
                    event5: "",
                    event6 : "",
                    freeTime : "",
                    coms: "",
                    number: "",
                    email : "",
                    compLevel : "",
                    maxTeam : "",
                    yearsinClub: ""
                    
                })
                .then(()=>{       window.location.replace("./profile.html");});
        
            } else {
            
            }
    });

     })
    .catch((error) => {
// ..
     });}
     else{
        window.alert("Passwords do not match!");
     }
}

submitButton.addEventListener('click', signUpWithEmail);