function generateChapterTeamMotions() {
    var actions = [
        //Subsidiary
        "Postpone indefinately",
        "Amend",
        "Commit",
        "Postpone definately",
        "limit debate",
        "Previous question",
        "Lay on the table",
        //privileged
        "Call for the orders of the day",
        "Raise a question of privilege",
        "Recess",
        "Adjourn",
        "Fix the time to which to adjourn",
        //incidental
        "Point of order",
        "appeal",
        "suspend the rules",
        "Objection to the consideration of the question",
        "Division of the question",
        "Consideration by paragraph/seriatim",
        "Division of the assembly",
        "Parliamentary inquiry",
        "Request for information",
        "Request to withdraw a motion",
        "Request to be excused from a duty",
        //motions that bring a question again before the assembly
        "Take from the table",
        "Rescind",
        "Discharge a committee",
        "Reconsider"
      ];
    
      var  officers = [
        "president",
        "vice-president",
        "secretary",
        "seargent-at-arms",
        "reporter",
        "treasurer"
      ];
    
      var officerMotion = ["", "", "", "", "", ""];
    
    
      var outPutText = "";
      for (var i = 0; i < officers.length; i++) {
        var motionNum = Math.floor(Math.random() * (actions.length - 1));
        var chosenMotion = actions[motionNum];
        officerMotion[i] = officers[i] + ': ' + chosenMotion;
        actions.splice(actions.indexOf(chosenMotion), 1);
      }
      for (var i = 0; i < officerMotion.length; i++) {
        outPutText = outPutText + officerMotion[i] + '</p><br><p>';
      }
      var motionstext = document.getElementById('motions');
      motionstext.innerHTML = outPutText;
}

function genStudyNote() {
    var motions = [
            {
                "Title" : "Main Motion",
                "Class" : "M",
                "Interrupt" : false,
                "Second" : true,
                "Debatable" : true,
                "Amendable" : true,
                "Vote" : "majority",
                "Reconsider" : "always",
                "notes": "not always majority vote (pg 103-104)"
            },
            {
                "Title" : "adjourn",
                "Class" : "P",
                "Interrupt" : false,
                "Second" : true,
                "Debatable" : false,
                "Amendable" : false,
                "Vote" : "majority",
                "Reconsider" : "never",
                "notes": "Main in some cases"
            },
            {
                "Title" : "Adopt Report",
                "Class" : "M",
                "Interrupt" : false,
                "Second" : true,
                "Debatable" : true,
                "Amendable" : true,
                "Vote" : "majority",
                "Reconsider" : "always",
                "notes": ""
            },
            {
                "Title" : "Adopt bylaws initially",
                "Class" : "M",
                "Interrupt" : false,
                "Second" : true,
                "Debatable" : true,
                "Amendable" : true,
                "Vote" : "majority",
                "Reconsider" : "Negative",
                "notes": ""
            },
            {
                "Title" : "Adopt revised bylaws",
                "Class" : "M/B",
                "Interrupt" : false,
                "Second" : true,
                "Debatable" : true,
                "Amendable" : true,
                "Vote" : "As specified in bylaws",
                "Reconsider" : "always",
                "notes": ""
            },
            {
                "Title" : "Amend",
                "Class" : "S",
                "Interrupt" : false,
                "Second" : true,
                "Debatable" : true,
                "Amendable" : true,
                "Vote" : "majority",
                "Reconsider" : "always",
                "notes": "Only debatable if motion to be amended is debatable."
            },
            {
                "Title" : "Amend an amendment of a pending question",
                "Class" : "S",
                "Interrupt" : false,
                "Second" : true,
                "Debatable" : true,
                "Amendable" : true,
                "Vote" : "majority",
                "Reconsider" : "always",
                "notes": "Only debatable if motion to be amended is debatable."
            },
            {
                "Title" : "Amend something previously adopted",
                "Class" : "M/B",
                "Interrupt" : false,
                "Second" : true,
                "Debatable" : true,
                "Amendable" : true,
                "Vote" : "2/3, majority of entire membership, or majority with previous notice",
                "Reconsider" : "negative",
                "notes": ""
            },
            {
                "Title" : "Amend bylaws",
                "Class" : "M/B",
                "Interrupt" : false,
                "Second" : true,
                "Debatable" : true,
                "Amendable" : true,
                "Vote" : "As specified in bylaws",
                "Reconsider" : "negative",
                "notes": ""
            },
            {
                "Title" : "Appeal",
                "Class" : "I",
                "Interrupt" : true,
                "Second" : true,
                "Debatable" : true,
                "Amendable" : false,
                "Vote" : "majority vote in negative",
                "Reconsider" : "always",
                "notes": ""
            },
            {
                "Title" : "To create a blank",
                "Class" : "I",
                "Interrupt" : false,
                "Second" : true,
                "Debatable" : false,
                "Amendable" : false,
                "Vote" : "majority",
                "Reconsider" : "never",
                "notes": ""
            },
            {
                "Title" : "Commit/Refer",
                "Class" : "S",
                "Interrupt" : false,
                "Second" : true,
                "Debatable" : true,
                "Amendable" : true,
                "Vote" : "majority",
                "Reconsider" : "always",
                "notes": "Only reconsiderable until committee has begun consideration"
            },
            {
                "Title" : "Consider informally",
                "Class" : "S",
                "Interrupt" : false,
                "Second" : true,
                "Debatable" : true,
                "Amendable" : true,
                "Vote" : "majority",
                "Reconsider" : "Negative",
                "notes": "Debate limited to merits of considering informally, not on the main motion"
            },
            {
                "Title" : "To limit/extend limits of debate",
                "Class" : "S",
                "Interrupt" : false,
                "Second" : true,
                "Debatable" : false,
                "Amendable" : true,
                "Vote" : "2/3",
                "Reconsider" : "always",
                "notes": "If vote is affirmative, can only reconsider unexecuted part"
            },
            {
                "Title" : "Discharge a committee",
                "Class" : "M/B",
                "Interrupt" : false,
                "Second" : true,
                "Debatable" : true,
                "Amendable" : true,
                "Vote" : "2/3",
                "Reconsider" : "always",
                "notes": ""
            },
            {
                "Title" : "Division of the assembly",
                "Class" : "I",
                "Interrupt" : false,
                "Second" : true,
                "Debatable" : false,
                "Amendable" : true,
                "Vote" : "majority",
                "Reconsider" : "never",
                "notes": ""
            },
            {
                "Title" : "Division of the question",
                "Class" : "I",
                "Interrupt" : false,
                "Second" : true,
                "Debatable" : false,
                "Amendable" : true,
                "Vote" : "majority",
                "Reconsider" : "never",
                "notes": ""
            },
            {
                "Title" : "To be excused from a duty",
                "Class" : "I",
                "Interrupt" : true,
                "Second" : true,
                "Debatable" : true,
                "Amendable" : true,
                "Vote" : "majority",
                "Reconsider" : "negative",
                "notes": "Does not need a second if moved by another member"
            },
            {
                "Title" : "Fix the time at which to adjourn",
                "Class" : "P",
                "Interrupt" : false,
                "Second" : true,
                "Debatable" : true,
                "Amendable" : true,
                "Vote" : "majority",
                "Reconsider" : "always",
                "notes": "can be a main motion"
            },
            {
                "Title" : "Request for Information",
                "Class" : "I",
                "Interrupt" : true,
                "Second" : false,
                "Debatable" : false,
                "Amendable" : false,
                "Vote" : "not voted",
                "Reconsider" : "never",
                "notes": ""
            },
            {
                "Title" : "Lay on the Table",
                "Class" : "S",
                "Interrupt" : false,
                "Second" : true,
                "Debatable" : false,
                "Amendable" : false,
                "Vote" : "majority",
                "Reconsider" : "negative",
                "notes": ""
            },
            {
                "Title" : "To approve minutes",
                "Class" : "M",
                "Interrupt" : false,
                "Second" : true,
                "Debatable" : true,
                "Amendable" : true,
                "Vote" : "not voted",
                "Reconsider" : "negative",
                "notes": ""
            },
            {
                "Title" : "Close nominations",
                "Class" : "I",
                "Interrupt" : false,
                "Second" : true,
                "Debatable" : false,
                "Amendable" : true,
                "Vote" : "majority",
                "Reconsider" : "negative",
                "notes": ""
            },
            {
                "Title" : "Objection to the consideration of the question",
                "Class" : "I",
                "Interrupt" : true,
                "Second" : false,
                "Debatable" : false,
                "Amendable" : false,
                "Vote" : "2/3 against",
                "Reconsider" : "negative",
                "notes": ""
            },
            {
                "Title" : "Call for the orders of the day",
                "Class" : "P",
                "Interrupt" : true,
                "Second" : false,
                "Debatable" : false,
                "Amendable" : false,
                "Vote" : "2/3",
                "Reconsider" : "always",
                "notes": ""
            },
            {
                "Title" : "Point of order",
                "Class" : "I",
                "Interrupt" : true,
                "Second" : false,
                "Debatable" : false,
                "Amendable" : false,
                "Vote" : "chair",
                "Reconsider" : "",
                "notes": ""
            },
            {
                "Title" : "Parliamentary Inquiry",
                "Class" : "I",
                "Interrupt" : true,
                "Second" : false,
                "Debatable" : false,
                "Amendable" : false,
                "Vote" : "chair",
                "Reconsider" : "",
                "notes": ""
            },
            {
                "Title" : "Postpone Indefinately",
                "Class" : "S",
                "Interrupt" : false,
                "Second" : true,
                "Debatable" : true,
                "Amendable" : false,
                "Vote" : "majority",
                "Reconsider" : "affirmative",
                "notes": "only motion that can only be reconsidered in the affirmative"
            },
            {
                "Title" : "Postpone definately",
                "Class" : "S",
                "Interrupt" : false,
                "Second" : true,
                "Debatable" : true,
                "Amendable" : true,
                "Vote" : "majority",
                "Reconsider" : "always",
                "notes": "Can only postpone until the next regular meeting; debate can only go into whether it should be postponed"
            },
            {
                "Title" : "Previous Question",
                "Class" : "MS",
                "Interrupt" : false,
                "Second" : true,
                "Debatable" : false,
                "Amendable" : false,
                "Vote" : "2/3",
                "Reconsider" : "always",
                "notes": "Reconsidering affirmative can only go until any vote has been taken"
            },
            {
                "Title" : "Question of privilege",
                "Class" : "P",
                "Interrupt" : true,
                "Second" : false,
                "Debatable" : false,
                "Amendable" : false,
                "Vote" : "chair",
                "Reconsider" : "never",
                "notes": "should not interrupt a person who has begun to speak; if raised in the form of a motion it should be seconded"
            },
            {
                "Title" : "Recess",
                "Class" : "P",
                "Interrupt" : false,
                "Second" : true,
                "Debatable" : true,
                "Amendable" : true,
                "Vote" : "majority",
                "Reconsider" : "never",
                "notes": "can be a main motion"
            },
            {
                "Title" : "Reconsider",
                "Class" : "B",
                "Interrupt" : false,
                "Second" : true,
                "Debatable" : true,
                "Amendable" : false,
                "Vote" : "majority",
                "Reconsider" : "never",
                "notes": "can interrupt when another member has the floor but has not begun to speak; highest precedence to make but not to vote on"
            },
            {
                "Title" : "Suspend the rules",
                "Class" : "I",
                "Interrupt" : false,
                "Second" : true,
                "Debatable" : false,
                "Amendable" : false,
                "Vote" : "majority",
                "Reconsider" : "never",
                "notes": ""
            },
            {
                "Title" : "Take from the table",
                "Class" : "B",
                "Interrupt" : false,
                "Second" : true,
                "Debatable" : false,
                "Amendable" : false,
                "Vote" : "majority",
                "Reconsider" : "never",
                "notes": ""
            }
            
        ]
        
    var randomProperty = Math.floor(Math.random() * (motions.length + 1));
    var studyNote = document.getElementById('studyNote');
    console.log(randomProperty);
    console.log(studyNote);
    console.log(motions[randomProperty].Title);
    studyNote.innerHTML = "Title: " + motions[randomProperty].Title
    + "</p><br><p>" + 
    "Class: " + motions[randomProperty].Class
    + "</p><br><p>" + 
    "Interrupt: " + motions[randomProperty].Interrupt
    + "</p><br><p>" + 
    "Second: " + motions[randomProperty].Second
    + "</p><br><p>" + 
    "Debatable: " + motions[randomProperty].Debatable
    + "</p><br><p>" + 
    "Amendable: " + motions[randomProperty].Amendable
    + "</p><br><p>" + 
    "Vote: " + motions[randomProperty].Vote
    + "</p><br><p>" + 
    "Reconsider: " + motions[randomProperty].Reconsider
    + "</p><br><p>" + 
    "notes: " + motions[randomProperty].notes
}