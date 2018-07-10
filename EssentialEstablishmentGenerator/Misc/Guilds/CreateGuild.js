setup.createGuild = function(base) {
  var guild = {};
  var baseName = "Guild";
  var type = ["thieves", "merchants", "wizards", "rangers", "seers", "priests", "monks", "assassins", "artisans", "nobles", "bards"].random();
  var motivation = ["money", "fame", "power", "glory", "vengeance", "politics"];
  var leadershipType = ["individual", "individual", "individual", "group"];
  var leadershipGeneration;

  var leaderQualification = ["most skilled", "rose to power through nepotism", "completed an ordeal"];
  var leaderBribesRoll = random(1, 50) + random(1, 50);
  var leaderCompetenceRoll = random(1, 50) + random(1, 50);

  var joiningFeeRoll = random(1, 50) + random(1, 50);
  var joiningRequirementRoll = random(1, 50) + random(1, 50);
  var joiningInitiationRoll = random(1, 50) + random(1, 50);
  var joiningRequirement = ["social status", "reputation", "a favour to be done", "to be called on for a favour", "referral by an existing member", "referral by several members", "endorsement by the current leader"];
  var joiningInitiation = ["a task to be done", "a secret task", "a mission", "a simple form to be filled", "nothing", "an oath to be taken", "a display of loyalty", "a display of skill", "a display of bravery"];


  var influenceRoll = random(1, 50) + random(1, 50);
  var influence;
  var reputationRoll = random(1, 50) + random(1, 50);
  var reputation;
  var ageRoll = random(1, 50) + random(1, 50);
  var age;
  var sizeRoll = random(1, 50) + random(1, 50);
  var size;
  var stabilityRoll = random(1, 50) + random(1, 50);
  var stability;
  var resourcesRoll = random(1, 50) + random(1, 50);
  var resources;

  var guild = Object.assign({
    // type: ["thieves", "merchants", "wizards", "rangers", "seers", "priests", "monks", "assassins", "artisans", "nobles", "bards"].random(),
    type: "wizards",
    motivation: setup.motivationGuild(guild),
    leadershipType: "individual",
    // leadershipType: leadershipType.random(),
    influenceRoll: influenceRoll,
    reputationRoll : reputationRoll,
    ageRoll: ageRoll,
    sizeRoll: sizeRoll,
    stabilityRoll: stabilityRoll,
    resourcesRoll: resourcesRoll,
    influence: influence,
    reputation : reputation,
    age: age,
    size: size,
    stability: stability,
    resources: resources,
  }, base);

  guild.name = setup.nameGuild(guild);
  guild.age = setup.ageGuild(guild);
  guild.reputation = setup.reputationGuild(guild);
  guild.size = setup.sizeGuild(guild);
  guild.influence = setup.influenceGuild(guild);
  guild.resources = setup.resourcesGuild(guild);
  guild.stability = setup.stabilityGuild(guild);

  switch (guild.type) {
    case "thieves":
      leadershipGeneration.push('dndclass: "rogue",');
      break;
    case "merchants":
      leadershipGeneration.push('profession: "merchant", background: "noble",');
      break;
    case "wizards":
      leadershipGeneration.push('dndclass: "wizard",');
      break;
    case "rangers":
      leadershipGeneration.push('dndclass: "ranger",');
      break;
    case "seers":
      leadershipGeneration.push('dndclass: "cleric",');
      break;
    case "priests":
      leadershipGeneration.push('dndclass: "cleric",');
      break;
    case "monks":
      leadershipGeneration.push('dndclass: "monk",');
      break;
    case "assassins":
      leadershipGeneration.push('dndclass: "rogue", background: "charlatan",');
      break;
    case "artisans":
      leadershipGeneration.push('background: "guild artisan",');
      break;
    case "nobles":
      leadershipGeneration.push('background: "noble",');
      break;
    case "bards":
      leadershipGeneration.push('dndclass: "bard", background: "entertainer",');
      break;
    // default:
  }

  switch (guild.leadershipType) {
    case "individual":
      State.setVar("$guildLeader", setup.createNPC({leadershipGeneration}));
  }



    //
    // if (guild.placeholderRoll > 95){
    //   guild.placeholder = "excellent";
    // } else if (guild.placeholderRoll > 90){
    //   guild.placeholder = "very good";
    // } else if (guild.placeholderRoll > 80){
    //   guild.placeholder = "quite good";
    // } else if (guild.placeholderRoll > 70){
    //   guild.placeholder = "good";
    // } else if (guild.placeholderRoll > 60){
    //   guild.placeholder = "above average";
    // } else if (guild.placeholderRoll > 55){
    //   guild.placeholder = "slightly above average";
    // } else if (guild.placeholderRoll > 50){
    //   guild.placeholder = "average";
    // } else if (guild.placeholderRoll > 45){
    //   guild.placeholder = "slightly below average";
    // } else if (guild.placeholderRoll > 40){
    //   guild.placeholder = "poor";
    // } else if (guild.placeholderRoll > 30){
    //   guild.placeholder = "quite poor";
    // } else if (guild.placeholderRoll > 20){
    //   guild.placeholder = "very poor";
    // } else if (guild.placeholderRoll > 10){
    //   guild.placeholder = "extremely poor";
    // } else if (guild.placeholderRoll <= 5){
    //   guild.placeholder = "abysmal";
    // } else {
    //   guild.placeholder = "average";
    // }
    //
    //
    // if (guild.placeholderRoll > 95){
    //   guild.influenceRoll += Math.fm(guild.influenceRoll, 15);
    // } else if (guild.placeholderRoll > 90){
    //   guild.influenceRoll += Math.fm(guild.influenceRoll, 10);
    // } else if (guild.placeholderRoll > 80){
    //   guild.influenceRoll += Math.fm(guild.influenceRoll, 8);
    // } else if (guild.placeholderRoll > 70){
    //   guild.influenceRoll += Math.fm(guild.influenceRoll, 6);
    // } else if (guild.placeholderRoll > 60){
    //   guild.influenceRoll += Math.fm(guild.influenceRoll, 4);
    // } else if (guild.placeholderRoll > 55){
    //   guild.influenceRoll += Math.fm(guild.influenceRoll, 2);
    // } else if (guild.placeholderRoll > 50){
    //   guild.influenceRoll += Math.fm(guild.influenceRoll, 1);
    // } else if (guild.placeholderRoll > 45){
    //   guild.influenceRoll += Math.fm(guild.influenceRoll, -1);
    // } else if (guild.placeholderRoll > 40){
    //   guild.influenceRoll += Math.fm(guild.influenceRoll, -2);
    // } else if (guild.placeholderRoll > 30){
    //   guild.influenceRoll += Math.fm(guild.influenceRoll, -4);
    // } else if (guild.placeholderRoll > 20){
    //   guild.influenceRoll += Math.fm(guild.influenceRoll, -6);
    // } else if (guild.placeholderRoll > 10){
    //   guild.influenceRoll += Math.fm(guild.influenceRoll, -8);
    // } else if (guild.placeholderRoll <= 5){
    //   guild.influenceRoll += Math.fm(guild.influenceRoll, -10);
    // } else {
    //   guild.influenceRoll += Math.fm(guild.influenceRoll, 10);
    // }

  // State.variables.guilds.set(baseName + ++index, guild)};

  return guild;
};
