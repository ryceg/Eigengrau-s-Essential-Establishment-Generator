setup.createFaction = function(base) {
  var faction = {};
  var baseName = "Faction";
  var type = ["thieves", "merchants", "wizards", "rangers", "seers", "priests", "monks", "assassins", "artisans", "nobles", "bards", "mercenaries", "bandits"].random();
  var leadershipType = ["individual", "individual", "individual", "group", "group"];
  var isPoliticalPower;
  var leadershipGeneration = {};


  var leaderBribesRoll = dice(2, 50);
  var leaderCompetenceRoll = dice(2, 50);

  var joiningFeeRoll = dice(2, 50);
  var joiningRequirementRoll = dice(2, 50);
  var joiningInitiationRoll = dice(2, 50);
  var joiningRequirement = ["social status", "reputation", "a favour to be done", "to be called on for a favour", "referral by an existing member", "referral by several members", "endorsement by the current leader"];
  var joiningInitiation = ["a task to be done", "a secret task", "a mission", "a simple form to be filled", "nothing", "an oath to be taken", "a display of loyalty", "a display of skill", "a display of bravery"];


  var influenceRoll = dice(2, 50);
  var influence;
  var reputationRoll = dice(2, 50);
  var reputation;
  var ageRoll = dice(2, 50);
  var age;
  var sizeRoll = dice(2, 50);
  var size;
  var stabilityRoll = dice(2, 50);
  var stability;
  var resourcesRoll = dice(2, 50);
  var resources;

  var faction = Object.assign({
    isPoliticalPower: isPoliticalPower,
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

  setup.leaderFaction(faction);

  // State.variables.factions.set(baseName + ++index, faction)};

  return faction;

};
