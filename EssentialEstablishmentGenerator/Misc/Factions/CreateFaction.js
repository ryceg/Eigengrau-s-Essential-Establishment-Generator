setup.createFaction = function(base) {
  var faction = {};
  var baseName = "Faction";
  var type = ["thieves", "merchants", "wizards", "rangers", "seers", "priests", "monks", "assassins", "artisans", "nobles", "bards", "mercenaries", "bandits"].random();
  var motivation = ["money", "fame", "power", "glory", "vengeance", "politics"];
  var leadershipType = ["individual", "individual", "individual", "group"];
  var leadershipGeneration = [];

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

  // switch (faction.type) {
  //   case "thieves":
  //     leadershipGeneration.push(dndclass: "rogue",);
  //     break;
  //   case "merchants":
  //     leadershipGeneration.push(profession: "merchant", background: "noble",);
  //     break;
  //   case "wizards":
  //     leadershipGeneration.push(dndclass: "wizard",);
  //     break;
  //   case "rangers":
  //     leadershipGeneration.push(dndclass: "ranger",);
  //     break;
  //   case "seers":
  //     leadershipGeneration.push(dndclass: "cleric",);
  //     break;
  //   case "priests":
  //     leadershipGeneration.push(dndclass: "cleric",);
  //     break;
  //   case "monks":
  //     leadershipGeneration.push(dndclass: "monk",);
  //     break;
  //   case "assassins":
  //     leadershipGeneration.push(dndclass: "rogue", background: "charlatan",);
  //     break;
  //   case "artisans":
  //     leadershipGeneration.push(background: "faction artisan",);
  //     break;
  //   case "nobles":
  //     leadershipGeneration.push(background: "noble",);
  //     break;
  //   case "bards":
  //     leadershipGeneration.push(dndclass: "bard", background: "entertainer",);
  //     break;
  //   // default:
  // }

  setup.leaderFaction(faction);

  switch (faction.leadershipType) {
    case "individual":
      State.setVar("$factionLeader", setup.createNPC({leadershipGeneration}));
  }


  // State.variables.factions.set(baseName + ++index, faction)};

  return faction;
  };
};
