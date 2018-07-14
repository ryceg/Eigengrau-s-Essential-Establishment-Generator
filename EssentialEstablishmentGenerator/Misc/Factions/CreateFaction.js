setup.createFaction = function(base) {
  var faction = {};
  var baseName = "Faction";
  var type = ["thieves", "merchants", "wizards", "rangers", "seers", "priests", "monks", "assassins", "artisans", "nobles", "bards", "mercenaries", "bandits"].random();
  var motivation = ["money", "fame", "power", "glory", "vengeance", "politics"];
  var leadershipType = ["individual", "individual", "individual", "group"];
  var leadershipGeneration = {};

  var meetingAccessibility,
      meetingRegularity,
      meetingCooperation;

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
  //
  // switch (faction.type) {
  //   case "thieves":
  //     Object.assign(leadershipGeneration, { dndclass: "rogue" });
  //     break;
  //   case "merchants":
  //     Object.assign(leadershipGeneration, { profession: "merchant", background: "noble" });
  //     break;
  //   case "wizards":
  //     Object.assign(leadershipGeneration, { dndclass: "wizard" });
  //     break;
  //   case "rangers":
  //     Object.assign(leadershipGeneration, { dndclass: "ranger" });
  //     break;
  //   case "seers":
  //     Object.assign(leadershipGeneration, { dndclass: "cleric" });
  //     break;
  //   case "priests":
  //     Object.assign(leadershipGeneration, { dndclass: "cleric" });
  //     break;
  //   case "monks":
  //     Object.assign(leadershipGeneration, { dndclass: "monk" });
  //     break;
  //   case "assassins":
  //     Object.assign(leadershipGeneration, { dndclass: "rogue", background: "charlatan" });
  //     break;
  //   case "artisans":
  //     Object.assign(leadershipGeneration, { background: "faction artisan" });
  //     break;
  //   case "nobles":
  //     Object.assign(leadershipGeneration, { background: "noble" });
  //     break;
  //   case "bards":
  //     Object.assign(leadershipGeneration, { dndclass: "bard", background: "entertainer" });
  //     // break;
  //   // default:
  // }

  // switch (faction.leadershipType) {
  //   case "individual":
  //     State.variables.factionLeader = setup.createNPC(leadershipGeneration);
  // }

  // State.variables.factions.set(baseName + ++index, faction)};

  return faction;
};
};
