setup.leaderFaction = function(faction) {
  var leadershipGeneration;
  faction.leaderBribesRoll = dice(2, 50);
  faction.leaderCompetenceRoll = dice(2, 50);


  switch (faction.type) {
    case "thieves":
      // Object.assign(leadershipGeneration, { dndclass: "rogue" });
      faction.leaderQualification = ["the most skilled of the group", "able to rise to power by completing an ordeal", "able to rise to power by completing an ordeal", "the most charismatic of the group", "democratically elected", "able to oust the previous leadership", "able to oust the previous leadership", "able to oust the previous leadership", "able to rise to power through nepotism", "rose to power through nepotism", "rose to power through nepotism", "promoted by being the most powerful in the group"].random();
      break;
    case "merchants":
      // Object.assign(leadershipGeneration, { profession: "merchant", background: "noble" });
      faction.leaderQualification = ["the wealthiest of the group", "the wealthiest of the group", "the wealthiest of the group", "able to rise to power by completing an ordeal", "the most charismatic of the group", "democratically elected", "able to oust the previous leadership", "able to rise to power through nepotism", "able to rise to power through nepotism", "able to rise to power through nepotism", "promoted by being the most powerful in the group"].random();
      break;
    case "wizards":
      // Object.assign(leadershipGeneration, { dndclass: "wizard" });
      faction.leaderQualification = ["the wealthiest of the group", "the strongest of the group", "the strongest of the group", "able to rise to power by completing an ordeal", "the most charismatic of the group", "democratically elected", "able to oust the previous leadership", "able to rise to power through nepotism", "able to rise to power through nepotism", "able to rise to power through nepotism", "promoted by being the most powerful in the group"].random();
      break;
    case "rangers":
      // Object.assign(leadershipGeneration, { dndclass: "ranger" });
      faction.leaderQualification = ["the wealthiest of the group", "the strongest of the group", "the strongest of the group", "able to rise to power by completing an ordeal", "able to rise to power by completing an ordeal", "able to rise to power by completing an ordeal", "the most charismatic of the group", "democratically elected", "able to oust the previous leadership", "able to rise to power through nepotism", "able to rise to power through nepotism", "able to rise to power through nepotism", "promoted by being the most powerful in the group"].random();
      break;
    case "seers":
      // Object.assign(leadershipGeneration, { dndclass: "cleric" });
      faction.leaderQualification = ["the wealthiest of the group", "the strongest of the group", "the strongest of the group", "able to rise to power by completing an ordeal", "the most charismatic of the group", "democratically elected", "able to oust the previous leadership", "able to rise to power through nepotism", "able to rise to power through nepotism", "able to rise to power through nepotism", "promoted by being the most powerful in the group"].random();
      break;
    case "priests":
      // Object.assign(leadershipGeneration, { dndclass: "cleric" });
      faction.leaderQualification = ["the wealthiest of the group", "the holiest of the group", "the holiest of the group", "able to rise to power by completing an ordeal", "the most charismatic of the group", "democratically elected", "able to oust the previous leadership", "able to rise to power through nepotism", "able to rise to power through nepotism", "able to rise to power through nepotism", "promoted by being the most powerful in the group"].random();
      break;
    case "monks":
      // Object.assign(leadershipGeneration, { dndclass: "monk" });
      faction.leaderQualification = ["the wealthiest of the group", "the strongest of the group", "the strongest of the group", "able to rise to power by completing an ordeal", "the most charismatic of the group", "democratically elected", "able to oust the previous leadership", "able to rise to power through nepotism", "able to rise to power through nepotism", "able to rise to power through nepotism", "promoted by being the most powerful in the group"].random();
      break;
    case "assassins":
      // Object.assign(leadershipGeneration, { dndclass: "rogue", background: "charlatan" });
      faction.leaderQualification = ["the wealthiest of the group", "the strongest of the group", "the strongest of the group", "able to rise to power by completing an ordeal", "the most charismatic of the group", "democratically elected", "able to oust the previous leadership", "able to oust the previous leadership", "able to oust the previous leadership", "able to rise to power through nepotism", "able to rise to power through nepotism", "able to rise to power through nepotism", "promoted by being the most powerful in the group", "promoted by being the most powerful in the group", "promoted by being the most powerful in the group"].random();
      break;
    case "artisans":
      // Object.assign(leadershipGeneration, { background: "faction artisan" });
      faction.leaderQualification = ["the wealthiest of the group", "the strongest of the group", "able to rise to power by completing a masterpiece", "able to rise to power by completing a masterpiece", "able to rise to power by completing an ordeal", "the most charismatic of the group", "democratically elected", "able to oust the previous leadership", "able to rise to power through nepotism", "able to rise to power through nepotism", "able to rise to power through nepotism", "promoted by being the most powerful in the group"].random();
      break;
    case "nobles":
      // Object.assign(leadershipGeneration, { background: "noble" });
      faction.leaderQualification = ["the wealthiest of the group", "the wealthiest of the group", "the wealthiest of the group", "able to rise to power by completing an ordeal", "the most charismatic of the group", "democratically elected", "able to oust the previous leadership", "able to rise to power through nepotism", "able to rise to power through nepotism", "able to rise to power through nepotism", "promoted by being the most powerful in the group"].random();
      break;
    case "bards":
      // Object.assign(leadershipGeneration, { dndclass: "bard", background: "entertainer" });
      faction.leaderQualification = ["the wealthiest of the group", "the strongest of the group", "able to rise to power by completing a masterpiece", "able to rise to power by completing a masterpiece", "able to rise to power by completing an ordeal", "the most charismatic of the group", "democratically elected", "able to oust the previous leadership", "able to rise to power through nepotism", "able to rise to power through nepotism", "able to rise to power through nepotism", "promoted by being the most powerful in the group"].random();
      break;
    // default:
  }

  if (faction.leaderBribesRoll > 95){
    faction.leaderBribes = "will never, under any circumstances be accepted";
  } else if (faction.leaderBribesRoll > 90){
    faction.leaderBribes = "will never be accepted, and will be met with instant excommunication";
  } else if (faction.leaderBribesRoll > 80){
    faction.leaderBribes = "are treated as insults";
  } else if (faction.leaderBribesRoll > 70){
    faction.leaderBribes = "will be met with laughter";
  } else if (faction.leaderBribesRoll > 60){
    faction.leaderBribes = "are scorned";
  } else if (faction.leaderBribesRoll > 55){
    faction.leaderBribes = "are uncommon, and frowned upon";
  } else if (faction.leaderBribesRoll > 50){
    faction.leaderBribes = "will usually be rejected";
  } else if (faction.leaderBribesRoll > 45){
    faction.leaderBribes = "depend on circumstances";
  } else if (faction.leaderBribesRoll > 40){
    faction.leaderBribes = "are sometimes accepted";
  } else if (faction.leaderBribesRoll > 30){
    faction.leaderBribes = "will be bargained about";
  } else if (faction.leaderBribesRoll > 20){
    faction.leaderBribes = "will usually be accepted";
  } else if (faction.leaderBribesRoll > 10){
    faction.leaderBribes = "are a regular part of business";
  } else if (faction.leaderBribesRoll <= 5){
    faction.leaderBribes = "are expected";
  } else {
    faction.leaderBribes = "depend on circumstances";
  }

  if (faction.leaderCompetenceRoll > 95){
    faction.leaderCompetence = "ruthlessly efficient";
  } else if (faction.leaderCompetenceRoll > 90){
    faction.leaderCompetence = "extremely efficient";
  } else if (faction.leaderCompetenceRoll > 80){
    faction.leaderCompetence = "very competent";
  } else if (faction.leaderCompetenceRoll > 70){
    faction.leaderCompetence = "quite competent";
  } else if (faction.leaderCompetenceRoll > 60){
    faction.leaderCompetence = "reasonably competent";
  } else if (faction.leaderCompetenceRoll > 55){
    faction.leaderCompetence = "usually competent";
  } else if (faction.leaderCompetenceRoll > 50){
    faction.leaderCompetence = "of mild competence";
  } else if (faction.leaderCompetenceRoll > 45){
    faction.leaderCompetence = "of mild incompetence";
  } else if (faction.leaderCompetenceRoll > 40){
    faction.leaderCompetence = "somewhat incompetent";
  } else if (faction.leaderCompetenceRoll > 30){
    faction.leaderCompetence = "quite incompetent";
  } else if (faction.leaderCompetenceRoll > 20){
    faction.leaderCompetence = "very incompetent";
  } else if (faction.leaderCompetenceRoll > 10){
    faction.leaderCompetence = "unbelievably incompetent";
  } else if (faction.leaderCompetenceRoll <= 5){
    faction.leaderCompetence = "incompetent to the point of being unable to pour water out of a boot with the instructions written on the heel";
  } else {
    faction.leaderCompetence = "of mild competence";
  }

  switch (faction.leadershipType) {
    case "individual":
      if (faction.isPoliticalPower === true) {
        State.variables.townLeader = State.variables.factionLeader;
      } else {
        State.variables.factionLeader = setup.createNPC(leadershipGeneration);
      }
    break;
    case "group":
      var meetingAccessibilityRoll = dice(2, 50),
          meetingRegularityRoll = dice(2, 50) + (Math.fairmath((faction.stabilityRoll * 2), -100)),
          meetingAccessibility,
          meetingRegularity;
      faction.leaderGroupSizeRoll = dice(3, 4);


          if (meetingRegularityRoll > 95){
            faction.meetingRegularity = "every day, at 5pm sharp";
          } else if (meetingRegularityRoll > 90){
            faction.meetingRegularity = "every other day";
          } else if (meetingRegularityRoll > 80){
            faction.meetingRegularity = "every third day";
          } else if (meetingRegularityRoll > 70){
            faction.meetingRegularity = "every week";
          } else if (meetingRegularityRoll > 60){
            faction.meetingRegularity = "every ten days";
          } else if (meetingRegularityRoll > 55){
            faction.meetingRegularity = "whenever a meeting is called";
          } else if (meetingRegularityRoll > 50){
            faction.meetingRegularity = "once a fortnight";
          } else if (meetingRegularityRoll > 45){
            faction.meetingRegularity = "once every three weeks";
          } else if (meetingRegularityRoll > 40){
            faction.meetingRegularity = "once a month";
          } else if (meetingRegularityRoll > 30){
            faction.meetingRegularity = "whenever a leader calls them";
          } else if (meetingRegularityRoll > 20){
            faction.meetingRegularity = "whenever three of the leaders happen to be together";
          } else if (meetingRegularityRoll > 10){
            faction.meetingRegularity = "once in a blue moon";
          } else if (meetingRegularityRoll <= 5){
            faction.meetingRegularity = "at literally any time";
          } else {
            faction.meetingRegularity = "when there's an issue that needs discussion";
          }

          if (meetingAccessibilityRoll > 95){
            faction.meetingAccessibility = "announced well ahead of time and are open to anyone";
          } else if (meetingAccessibilityRoll > 90){
            faction.meetingAccessibility = "announced ahead of time and are open to anyone";
          } else if (meetingAccessibilityRoll > 80){
            faction.meetingAccessibility = "are open to anyone";
          } else if (meetingAccessibilityRoll > 70){
            faction.meetingAccessibility = "are open to senior members";
          } else if (meetingAccessibilityRoll > 60){
            faction.meetingAccessibility = "are open to members";
          } else if (meetingAccessibilityRoll > 55){
            faction.meetingAccessibility = "are open to people accompanied by a member";
          } else if (meetingAccessibilityRoll > 50){
            faction.meetingAccessibility = "are not usually open to non-members";
          } else if (meetingAccessibilityRoll > 45){
            faction.meetingAccessibility = "are not open to non-members";
          } else if (meetingAccessibilityRoll > 40){
            faction.meetingAccessibility = "are held behind closed doors";
          } else if (meetingAccessibilityRoll > 30){
            faction.meetingAccessibility = "are open to those that can find them";
          } else if (meetingAccessibilityRoll > 20){
            faction.meetingAccessibility = "are invite-only";
          } else if (meetingAccessibilityRoll > 10){
            faction.meetingAccessibility = "closed to all";
          } else if (meetingAccessibilityRoll <= 5){
            faction.meetingAccessibility = "closed and held in secret";
          } else {
            faction.meetingAccessibility = "are open to members";
          }

          if (faction.leaderGroupSizeRoll > 11){
            faction.leaderGroupTitle = "Cabinet";
          } else if (faction.leaderGroupSizeRoll > 8){
            faction.leaderGroupTitle = "Board";
          } else if (faction.leaderGroupSizeRoll > 3){
            faction.leaderGroupTitle = "Committee";
          } else if (faction.leaderGroupSizeRoll == 3){
            faction.leaderGroupTitle = "Triumvirate";
          }

  }



  return faction;
};
