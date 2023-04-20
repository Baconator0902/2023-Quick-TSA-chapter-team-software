import { firebaseApp, auth, database } from "./firebaseInit.js";
import{ onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js';
import { set, ref, child, push, update } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";


const regButton = document.getElementById("chapterMaker");

function onClickRegisterAChapter(){

        const user = auth.currentUser;
        if (user) {
            var chapID = document.getElementById("chapterID").value;
            var chapName  = document.getElementById("chapterName").value;
            var uid = user.uid;
            set(ref(database, 'chapters/' + chapID),{
              chapterID : chapID,
                chapterName : chapName,
                
                
                
                
            })
            update(ref(database, 'users/' + uid),{
                inchapterID : chapID,
                inchapterName : chapName,
            })
            .then(()=>{       window.location.replace("./profile.html");});
    
        } else {
        
        }

}

regButton.addEventListener('click', onClickRegisterAChapter);