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
    
      var rng = Random();
    
      var outPutText = "";
      for (var i = 0; i < officers.length; i++) {
        var motionNum = rng.nextInt(actions.length - 1);
        var chosenMotion = actions[motionNum];
        officerMotion[i] = '${officers[i]}: $chosenMotion';
        actions.remove(chosenMotion);
      }
      for (var i = 0; i < officerMotion.length; i++) {
        outPutText = '${outPutText + officerMotion[i]}\n';
      }
      var motionstext = document.getElementById('motions');
      motionstext.innerHTML = outPutText;
}
