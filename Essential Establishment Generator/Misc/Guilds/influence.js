setup.influenceGuild = function(guild) {
  var guild = guild;


  if (guild.ageRoll > 95){
    guild.influenceRoll += Math.fm(guild.influenceRoll, 15);
  } else if (guild.ageRoll > 90){
    guild.influenceRoll += Math.fm(guild.influenceRoll, 10);
  } else if (guild.ageRoll > 80){
    guild.influenceRoll += Math.fm(guild.influenceRoll, 8);
  } else if (guild.ageRoll > 70){
    guild.influenceRoll += Math.fm(guild.influenceRoll, 6);
  } else if (guild.ageRoll > 60){
    guild.influenceRoll += Math.fm(guild.influenceRoll, 4);
  } else if (guild.ageRoll > 55){
    guild.influenceRoll += Math.fm(guild.influenceRoll, 2);
  } else if (guild.ageRoll > 50){
    guild.influenceRoll += Math.fm(guild.influenceRoll, 1);
  } else if (guild.ageRoll > 45){
    guild.influenceRoll += Math.fm(guild.influenceRoll, -1);
  } else if (guild.ageRoll > 40){
    guild.influenceRoll += Math.fm(guild.influenceRoll, -2);
  } else if (guild.ageRoll > 30){
    guild.influenceRoll += Math.fm(guild.influenceRoll, -4);
  } else if (guild.ageRoll > 20){
    guild.influenceRoll += Math.fm(guild.influenceRoll, -6);
  } else if (guild.ageRoll > 10){
    guild.influenceRoll += Math.fm(guild.influenceRoll, -8);
  } else if (guild.ageRoll <= 5){
    guild.influenceRoll += Math.fm(guild.influenceRoll, -10);
  } else {
    guild.influenceRoll += Math.fm(guild.influenceRoll, 10);
  }


  if (guild.influenceRoll > 95){
    guild.influence = "excellent";
  } else if (guild.influenceRoll > 90){
    guild.influence = "very good";
  } else if (guild.influenceRoll > 80){
    guild.influence = "quite good";
  } else if (guild.influenceRoll > 70){
    guild.influence = "good";
  } else if (guild.influenceRoll > 60){
    guild.influence = "above average";
  } else if (guild.influenceRoll > 55){
    guild.influence = "slightly above average";
  } else if (guild.influenceRoll > 50){
    guild.influence = "average";
  } else if (guild.influenceRoll > 45){
    guild.influence = "slightly below average";
  } else if (guild.influenceRoll > 40){
    guild.influence = "poor";
  } else if (guild.influenceRoll > 30){
    guild.influence = "quite poor";
  } else if (guild.influenceRoll > 20){
    guild.influence = "very poor";
  } else if (guild.influenceRoll > 10){
    guild.influence = "extremely poor";
  } else if (guild.influenceRoll <= 5){
    guild.influence = "abysmal";
  } else {
    guild.influence = "average";
  }

  return guild.influence;
};
