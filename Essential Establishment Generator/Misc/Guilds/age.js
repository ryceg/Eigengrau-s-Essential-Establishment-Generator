setup.ageGuild = function(guild) {
  var guild = guild;

      if (guild.ageRoll > 95){
        guild.age == "ancient";
      } else if (guild.ageRoll > 90){
        guild.age == "extremely old";
      } else if (guild.ageRoll > 80){
        guild.age == "very old";
      } else if (guild.ageRoll > 70){
        guild.age == "quite old";
      } else if (guild.ageRoll > 60){
        guild.age == "well established";
      } else if (guild.ageRoll > 55){
        guild.age == "somewhat old";
      } else if (guild.ageRoll > 50){
        guild.age == "relatively new";
      } else if (guild.ageRoll > 45){
        guild.age == "recently established";
      } else if (guild.ageRoll > 40){
        guild.age == "new";
      } else if (guild.ageRoll > 30){
        guild.age == "quite new";
      } else if (guild.ageRoll > 20){
        guild.age == "very new";
      } else if (guild.ageRoll > 10){
        guild.age == "brand new";
      } else if (guild.ageRoll <= 5){
        guild.age == "unknown";
      } else {
        guild.age == "well established";
      }
  return guild.age;
};
