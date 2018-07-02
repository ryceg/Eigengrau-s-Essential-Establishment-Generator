setup.createGuild = function(guild) {
  var type = ["thieves", "merchants", "wizards", "rangers", "seers", "priests", "monks", "assassins", "artisans", "nobles"];
  var motivation = ["money", "fame", "power", "glory", "vengeance", "politics"];
  var leadershipType = ["individual", "group"];

  var leaderQualification = ["most skilled", "rose to power through nepotism", "completed an ordeal"];
  var leaderBribes = random(1, 50) + random(1, 50);
  var leaderCompetence = random(1, 50) + random(1, 50);

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
    type: type.random(),
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
  }, guild);

    guild.motivation = setup.motivation(guild);

  return guild;
};
