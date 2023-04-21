import { firebaseApp, auth, database } from "./firebaseInit.js";
import{ onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js';
import { set, ref, child, push, update, onValue} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";

var createNoteButton= document.getElementById("noteMaker");

function onClickMakeNote(){
    const user = auth.currentUser;
    if (user) {
        var currentNote = document.getElementById("note").value;
        var eventNoteFor  = document.getElementById("eventPicked").value;
        var uid = user.uid;
        update(ref(database, 'users/' + uid),{
            currentNote : currentNote,
            eventNoteFor : eventNoteFor,
        })
        .then(()=>{       window.location.replace("./myNotses.html");});

    }

}

createNoteButton.addEventListener("click", onClickMakeNote);



function defaultReference2(userId){
        
    return onValue(ref(database, 'users/' + userId), (snapshot) => {
        const eventNote = (snapshot.val() && snapshot.val().eventNoteFor);
        const currentNote = (snapshot.val() && snapshot.val().currentNote);
        if(currentNote != '' || currentNote != null){
            document.getElementById("notesParagraph").innerHTML = "For: " + eventNote + " I need to: " + currentNote;
        }
        else{
            document.getElementById("notesParagraph").innerHTML = "No current notes";
        }
    },
    {onlyOnce: true}); 
    }
    
    
    onAuthStateChanged(auth, (user) => {
            
        console.log(user.uid);
        if (user) {
    
            defaultReference2(user.uid);
        } else {
        window.location.replace("./login.html");
        }
    });
    
    