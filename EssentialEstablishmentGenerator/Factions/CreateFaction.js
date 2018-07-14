setup.createFaction = function(base) {
  var faction = {};
  var baseName = "Faction";
  var type = ["thieves", "merchants", "wizards", "rangers", "seers", "priests", "monks", "assassins", "artisans", "nobles", "bards", "mercenaries", "bandits"].random();
  var motivation = ["money", "fame", "power", "glory", "vengeance", "politics"];
  var leadershipType = ["individual", "individual", "individual", "group"];
  var leadershipGeneration = {};

  var meetingAccessibility;
  var meetingRegularity;
  var meetingCooperation;

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

  var faction = Object.assign({
    // type: ["thieves", "merchants", "wizards", "rangers", "seers", "priests", "monks", "assassins", "artisans", "nobles", "bards"].random(),
    type: "wizards",
    motivation: setup.motivationFaction(faction),
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

  faction.name = setup.nameFaction(faction);
  faction.age = setup.ageFaction(faction);
  faction.reputation = setup.reputationFaction(faction);
  faction.size = setup.sizeFaction(faction);
  faction.influence = setup.influenceFaction(faction);
  faction.resources = setup.resourcesFaction(faction);
  faction.stability = setup.stabilityFaction(faction);

  switch (faction.type) {
    case "thieves":
      Object.assign(leadershipGeneration, { dndclass: "rogue" });
      break;
    case "merchants":
      Object.assign(leadershipGeneration, { profession: "merchant", background: "noble" });
      break;
    case "wizards":
      Object.assign(leadershipGeneration, { dndclass: "wizard" });
      break;
    case "rangers":
      Object.assign(leadershipGeneration, { dndclass: "ranger" });
      break;
    case "seers":
      Object.assign(leadershipGeneration, { dndclass: "cleric" });
      break;
    case "priests":
      Object.assign(leadershipGeneration, { dndclass: "cleric" });
      break;
    case "monks":
      Object.assign(leadershipGeneration, { dndclass: "monk" });
      break;
    case "assassins":
      Object.assign(leadershipGeneration, { dndclass: "rogue", background: "charlatan" });
      break;
    case "artisans":
      Object.assign(leadershipGeneration, { background: "faction artisan" });
      break;
    case "nobles":
      Object.assign(leadershipGeneration, { background: "noble" });
      break;
    case "bards":
      Object.assign(leadershipGeneration, { dndclass: "bard", background: "entertainer" });
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
      State.variables.factionLeader = setup.createNPC(leadershipGeneration);
  }

  // State.variables.factions.set(baseName + ++index, faction)};

  return faction;
}
};
