setup.resourcesFaction = function(faction) {
  var faction = faction;

  if (faction.ageRoll > 95){
    faction.resourcesRoll += Math.fm(faction.resourcesRoll, 15);
  } else if (faction.ageRoll > 90){
    faction.resourcesRoll += Math.fm(faction.resourcesRoll, 10);
  } else if (faction.ageRoll > 80){
    faction.resourcesRoll += Math.fm(faction.resourcesRoll, 8);
  } else if (faction.ageRoll > 70){
    faction.resourcesRoll += Math.fm(faction.resourcesRoll, 6);
  } else if (faction.ageRoll > 60){
    faction.resourcesRoll += Math.fm(faction.resourcesRoll, 4);
  } else if (faction.ageRoll > 55){
    faction.resourcesRoll += Math.fm(faction.resourcesRoll, 2);
  } else if (faction.ageRoll > 50){
    faction.resourcesRoll += Math.fm(faction.resourcesRoll, 1);
  } else if (faction.ageRoll > 45){
    faction.resourcesRoll += Math.fm(faction.resourcesRoll, -1);
  } else if (faction.ageRoll > 40){
    faction.resourcesRoll += Math.fm(faction.resourcesRoll, -2);
  } else if (faction.ageRoll > 30){
    faction.resourcesRoll += Math.fm(faction.resourcesRoll, -4);
  } else if (faction.ageRoll > 20){
    faction.resourcesRoll += Math.fm(faction.resourcesRoll, -6);
  } else if (faction.ageRoll > 10){
    faction.resourcesRoll += Math.fm(faction.resourcesRoll, -8);
  } else if (faction.ageRoll <= 5){
    faction.resourcesRoll += Math.fm(faction.resourcesRoll, -10);
  } else {
    faction.resourcesRoll += Math.fm(faction.resourcesRoll, 10);
  }


  if (faction.resourcesRoll > 95){
    faction.resources = "limitless";
  } else if (faction.resourcesRoll > 90){
    faction.resources = "near limitless";
  } else if (faction.resourcesRoll > 80){
    faction.resources = "extensive";
  } else if (faction.resourcesRoll > 70){
    faction.resources = "significant";
  } else if (faction.resourcesRoll > 60){
    faction.resources = "many";
  } else if (faction.resourcesRoll > 55){
    faction.resources = "decent";
  } else if (faction.resourcesRoll > 50){
    faction.resources = "average";
  } else if (faction.resourcesRoll > 45){
    faction.resources = "slightly below average";
  } else if (faction.resourcesRoll > 40){
    faction.resources = "somewhat limited";
  } else if (faction.resourcesRoll > 30){
    faction.resources = "limited";
  } else if (faction.resourcesRoll > 20){
    faction.resources = "quite poor";
  } else if (faction.resourcesRoll > 10){
    faction.resources = "extremely poor";
  } else if (faction.resourcesRoll <= 5){
    faction.resources = "destitute";
  } else {
    faction.resources = "average";
  }

  return faction.resources;
};
