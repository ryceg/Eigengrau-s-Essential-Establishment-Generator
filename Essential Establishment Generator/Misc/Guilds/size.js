setup.sizeGuild = function(guild) {
  if (guild.ageRoll > 95){
    guild.sizeRoll += Math.fm(guild.sizeRoll, 7);
  } else if (guild.ageRoll > 90){
    guild.sizeRoll += Math.fm(guild.sizeRoll, 6);
  } else if (guild.ageRoll > 80){
    guild.sizeRoll += Math.fm(guild.sizeRoll, 5);
  } else if (guild.ageRoll > 70){
    guild.sizeRoll += Math.fm(guild.sizeRoll, 4);
  } else if (guild.ageRoll > 60){
    guild.sizeRoll += Math.fm(guild.sizeRoll, 3);
  } else if (guild.ageRoll > 55){
    guild.sizeRoll += Math.fm(guild.sizeRoll, 2);
  } else if (guild.ageRoll > 50){
    guild.sizeRoll += Math.fm(guild.sizeRoll, 1);
  } else if (guild.ageRoll > 45){
    guild.sizeRoll += Math.fm(guild.sizeRoll, -1);
  } else if (guild.ageRoll > 40){
    guild.sizeRoll += Math.fm(guild.sizeRoll, -1);
  } else if (guild.ageRoll > 30){
    guild.sizeRoll += Math.fm(guild.sizeRoll, -2);
  } else if (guild.ageRoll > 20){
    guild.sizeRoll += Math.fm(guild.sizeRoll, -3);
  } else if (guild.ageRoll > 10){
    guild.sizeRoll += Math.fm(guild.sizeRoll, -4);
  } else if (guild.ageRoll <= 5){
    guild.sizeRoll += Math.fm(guild.sizeRoll, -5);
  } else {
    guild.sizeRoll += Math.fm(guild.sizeRoll, 1);
  }



  if (guild.sizeRoll > 95){
    guild.size = "huge";
  } else if (guild.sizeRoll > 90){
    guild.size = "very large";
  } else if (guild.sizeRoll > 80){
    guild.size = "quite large";
  } else if (guild.sizeRoll > 70){
    guild.size = "large";
  } else if (guild.sizeRoll > 60){
    guild.size = "above average sized";
  } else if (guild.sizeRoll > 55){
    guild.size = "slightly above average sized";
  } else if (guild.sizeRoll > 50){
    guild.size = "average sized";
  } else if (guild.sizeRoll > 45){
    guild.size = "slightly below average sized";
  } else if (guild.sizeRoll > 40){
    guild.size = "somewhat small";
  } else if (guild.sizeRoll > 30){
    guild.size = "quite small";
  } else if (guild.sizeRoll > 20){
    guild.size = "very small";
  } else if (guild.sizeRoll > 10){
    guild.size = "tiny";
  } else if (guild.sizeRoll <= 5){
    guild.size = "a handful of members";
  } else {
    guild.size = "average";
  }

  return guild.size;
};
