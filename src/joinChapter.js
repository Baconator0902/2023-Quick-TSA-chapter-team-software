import { firebaseApp, auth, database } from "./firebaseInit.js";
import{ onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js';
import { set, ref, child, push, update } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";


const joinButton = document.getElementById("joinButton");

function onClickJoinChapter(){
    const user = auth.currentUser;
    if (user) {
        var chapID = document.getElementById("chapterID1").value;
        var chapName  = document.getElementById("chapterName1").value;
        var uid = user.uid;
     
        update(ref(database, 'users/' + uid),{
            inchapterID : chapID,
            inchapterName : chapName,
        })
        .then(()=>{       window.location.replace("./profile.html");});

    } else {
    
    }
}
joinButton.addEventListener("click", onClickJoinChapter);