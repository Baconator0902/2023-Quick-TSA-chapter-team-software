import { firebaseApp, auth, database } from "./firebaseInit.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js' ;
import{ set, ref , update } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js';


var grandUpdateButton = document.getElementById("grandUpdater");

function updateInterests90(){
var mySkills = document.getElementById("skills").value;
var myPastWorks = document.getElementById("pastWorks").value;
var myFirstEvent = document.getElementById("eventInterest1").value;
var mySecondEvent = document.getElementById("eventInterest2").value;
var myThirdEvent = document.getElementById("eventInterest3").value;
var myFourthEvent = document.getElementById("eventInterest4").value;
var myFifthEvent = document.getElementById("eventInterest5").value;
var mySixthEvent = document.getElementById("eventInterest6").value;
var myFreeTime = document.getElementById("freeTime").value;
var myComsPref = document.getElementById("communication").value;
var myNumber = document.getElementById("phoneNumber").value;
var myBestEmail = document.getElementById("goodEmail").value;
var myAvailability = document.getElementById("availability").value;
var myTeamSize = document.getElementById("teamSizePref").value;
var yearsIn = document.getElementById("yearsIn").value;
    const user = auth.currentUser;
    if (user) {
        var uid = user.uid;
        update(ref(database, 'users/' + uid),{
            mySkills : mySkills,
            pastWorks : myPastWorks,
            event1 : myFirstEvent,
            event2: mySecondEvent,
            event3: myThirdEvent,
            event4:myFourthEvent,
            event5: myFifthEvent,
            event6 : mySixthEvent,
            freeTime : myFreeTime,
            coms: myComsPref,
            number: myNumber,
            email : myBestEmail,
            compLevel : myAvailability,
            maxTeam : myTeamSize,
            yearsinClub: yearsIn
            
        })
        .then(()=>{       window.location.replace("./profile.html");});

    }

} 

grandUpdateButton.addEventListener('click', updateInterests90);