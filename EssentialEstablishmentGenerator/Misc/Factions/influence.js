setup.influenceFaction = function(faction) {
  var faction = faction;


  if (faction.ageRoll > 95){
    faction.influenceRoll += Math.fm(faction.influenceRoll, 15);
  } else if (faction.ageRoll > 90){
    faction.influenceRoll += Math.fm(faction.influenceRoll, 10);
  } else if (faction.ageRoll > 80){
    faction.influenceRoll += Math.fm(faction.influenceRoll, 8);
  } else if (faction.ageRoll > 70){
    faction.influenceRoll += Math.fm(faction.influenceRoll, 6);
  } else if (faction.ageRoll > 60){
    faction.influenceRoll += Math.fm(faction.influenceRoll, 4);
  } else if (faction.ageRoll > 55){
    faction.influenceRoll += Math.fm(faction.influenceRoll, 2);
  } else if (faction.ageRoll > 50){
    faction.influenceRoll += Math.fm(faction.influenceRoll, 1);
  } else if (faction.ageRoll > 45){
    faction.influenceRoll += Math.fm(faction.influenceRoll, -1);
  } else if (faction.ageRoll > 40){
    faction.influenceRoll += Math.fm(faction.influenceRoll, -2);
  } else if (faction.ageRoll > 30){
    faction.influenceRoll += Math.fm(faction.influenceRoll, -4);
  } else if (faction.ageRoll > 20){
    faction.influenceRoll += Math.fm(faction.influenceRoll, -6);
  } else if (faction.ageRoll > 10){
    faction.influenceRoll += Math.fm(faction.influenceRoll, -8);
  } else if (faction.ageRoll <= 5){
    faction.influenceRoll += Math.fm(faction.influenceRoll, -10);
  } else {
    faction.influenceRoll += Math.fm(faction.influenceRoll, 10);
  }


  if (faction.influenceRoll > 95){
    faction.influence = "excellent";
  } else if (faction.influenceRoll > 90){
    faction.influence = "very good";
  } else if (faction.influenceRoll > 80){
    faction.influence = "quite good";
  } else if (faction.influenceRoll > 70){
    faction.influence = "good";
  } else if (faction.influenceRoll > 60){
    faction.influence = "above average";
  } else if (faction.influenceRoll > 55){
    faction.influence = "slightly above average";
  } else if (faction.influenceRoll > 50){
    faction.influence = "average";
  } else if (faction.influenceRoll > 45){
    faction.influence = "slightly below average";
  } else if (faction.influenceRoll > 40){
    faction.influence = "poor";
  } else if (faction.influenceRoll > 30){
    faction.influence = "quite poor";
  } else if (faction.influenceRoll > 20){
    faction.influence = "very poor";
  } else if (faction.influenceRoll > 10){
    faction.influence = "extremely poor";
  } else if (faction.influenceRoll <= 5){
    faction.influence = "abysmal";
  } else {
    faction.influence = "average";
  }

  return faction.influence;
};
