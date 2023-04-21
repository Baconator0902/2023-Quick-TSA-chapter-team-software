import{auth, database, firebaseApp} from './firebaseInit.js';
import{signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js';
import{ getDatabase, ref, onValue } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js';

function defaultReference(userId){
        
return onValue(ref(database, 'users/' + userId), (snapshot) => {
    const firstName = (snapshot.val() && snapshot.val().userFirstName);
    const lastName = (snapshot.val() && snapshot.val().userLastName);
    const chapterID = (snapshot.val() && snapshot.val().inchapterID);
    const chapterName = (snapshot.val()&& snapshot.val().inchapterName);
    const personID = (snapshot.val()&& snapshot.val().personID);
    const phoneNumber = (snapshot.val()&& snapshot.val().number);
    const goodEmail=(snapshot.val()&& snapshot.val().email);
    const otherSocials=(snapshot.val()&& snapshot.val().coms);
    const event1=(snapshot.val()&& snapshot.val().event1);
    const event2=(snapshot.val()&& snapshot.val().event2);
    const event3=(snapshot.val()&& snapshot.val().event3);
    const event4=(snapshot.val()&& snapshot.val().event4);
    const event5=(snapshot.val()&& snapshot.val().event5);
    const event6=(snapshot.val()&& snapshot.val().event6);
    const teamSize=(snapshot.val()&& snapshot.val().maxTeam);
    const skills=(snapshot.val()&& snapshot.val().mySkills);
    const pastWork=(snapshot.val()&& snapshot.val().pastWorks);
    const levelofComp=(snapshot.val()&& snapshot.val().compLevel);
    const freeTime=(snapshot.val()&& snapshot.val().freeTime);
    const yearsExp=(snapshot.val()&& snapshot.val().yearsinClub);
 
 //My profile
    document.getElementById("username").innerHTML = "Welcome " + firstName + " " + lastName;
    document.getElementById("uid").innerHTML = "Your TSA individual ID for the current conference is: " + personID;
    if(chapterName != null){
    document.getElementById("chapter").innerHTML = "You are a part of the: " + chapterName + " chapter, with the chapter ID of: " + chapterID;
    }
    else{
        document.getElementById("chapter").innerHTML = "You are currently not in a chapter";
    }
  //My portfolio
//intro
    document.getElementById("name").innerHTML = "Hello! I am " + firstName + " " + lastName;
  //loops for contacts  
    if(phoneNumber != "" && goodEmail == ""){
    document.getElementById("contacts").innerHTML = "If after reading my portfolio you want to reach out, you can find me at the number: " + phoneNumber;
    }else if(phoneNumber == "" && goodEmail!= ''){
        document.getElementById("contacts").innerHTML = "If after reading my portfolio you want to reach out, you can find me at the email: " + goodEmail;
    }
    else if(phoneNumber != "" && goodEmail != ""){
        document.getElementById("contacts").innerHTML = "If after reading my portfolio you want to reach out, you can find me at the number: " + phoneNumber + " or the email: " + goodEmail;
    }
    else{

    }
    //
    //other socials
if(otherSocials != ""){
    document.getElementById("otherPlatforms").innerHTML = "I am also comfortable communicating with: " + otherSocials;
}
else{

}
//
//Events
    if(event1 != "" ){
        document.getElementById("event1").innerHTML = "I am most interested in the event " + event1;
    }
     if(event2 != ''){
        document.getElementById("event2").innerHTML = "I am the next most interested in the event " + event2;
    }
     if(event3 != ''){
        document.getElementById("event3").innerHTML = "I am the next most interested in the event " + event3;
    }
     if(event4 != ''){
        document.getElementById("event4").innerHTML = "I am the next most interested in the event " + event4;
    }
     if(event5 != ''){
        document.getElementById("event5").innerHTML = "I am the next most interested in the event " + event5;
    }
     if(event6 != ''){
        document.getElementById("event6").innerHTML = "I am the next most interested in the event " + event6;
    }

//Team specs
if(teamSize != ''){
    document.getElementById("teamSize").innerHTML = "In these events, I am looking for teams no larger than " + teamSize;
}
else{

}
//
//Skills
if(skills != ''){
    document.getElementById("skills").innerHTML = "I can contribute certain skills including " + skills + " to the team";

}
else{

}
if(pastWork!= ''){
    document.getElementById("pastWork").innerHTML = "In the past I have worked on " + pastWork + " which would help for these events";

}
else{

}
//
if(levelofComp != ''){
    document.getElementById("levelofComp").innerHTML = "I am willing to go up to " + levelofComp + " and compete";
}
if(freeTime != ''){
    document.getElementById("freeTime").innerHTML = "I can devote about " + freeTime + " hours a week to my projects";
}

if(yearsExp != ''){
    document.getElementById("yearsIn").innerHTML = "I have been a part of TSA for about " + yearsExp + " years";
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

