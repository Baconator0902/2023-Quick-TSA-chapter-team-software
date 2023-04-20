import{auth, database, firebaseApp} from './firebaseInit.js';
import{signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js';
import{ getDatabase, ref, onValue } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js';

function defaultReference(userId){
        
return onValue(ref(database, 'users/' + userId), (snapshot) => {
    const firstName = (snapshot.val() && snapshot.val().userFirstName);
    const lastName = (snapshot.val() && snapshot.val().userLastName);
    const email = (snapshot.val()&& snapshot.val().userEmal);
    const chapterID = (snapshot.val() && snapshot.val().inchapterID);
    const chapterName = (snapshot.val()&& snapshot.val().inchapterName);

    document.getElementById("username").innerHTML = "Welcome " + firstName + " " + lastName;
    if(chapterName != null){
    document.getElementById("chapter").innerHTML = "You are a part of the: " + chapterName + " chapter, with the chapter ID of: " + chapterID;
    }
    else{
        document.getElementById("chapter").innerHTML = "You are currently not in a chapter";
    }
  
},
{onlyOnce: true}); 
}


onAuthStateChanged(auth, (user) => {
        
    console.log(auth);
    console.log(user);
    console.log(user.uid);
    if (user) {

        defaultReference(user.uid);
    } else {
    window.location.replace("./login.html");
    }
});

