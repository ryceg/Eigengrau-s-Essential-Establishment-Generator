setup.motivationFaction = function(faction) {
  var faction = faction;

  switch (faction.type) {
    case "thieves":
      Object.assign(faction, {
        motivation: ["money", "money", "money", "money", "money", "fame", "power", "power", "power", "glory", "vengeance", "vengeance", "vengeance", "politics"].random(),
      });
      break;

    case "merchants":
      Object.assign(faction, {
        motivation: ["money", "money", "money", "money", "money", "power", "glory", "vengeance", "politics", "politics", "politics"].random(),
      });
      break;

    case "wizards":
      Object.assign(faction, {
        motivation: ["money", "money", "fame", "fame", "fame", "knowledge", "knowledge", "knowledge", "knowledge", "power", "power", "power", "glory", "vengeance", "vengeance", "politics", "politics"].random(),
      });
      break;

    case "rangers":
      Object.assign(faction, {
        motivation: ["money", "knowledge", "knowledge", "knowledge", "fame", "power", "power", "power", "glory", "glory", "glory", "vengeance", "politics", "politics", "politics"].random(),
      });
      break;

    case "seers":
      Object.assign(faction, {
        motivation: ["money", "money", "knowledge", "knowledge", "knowledge", "knowledge", "fame", "power", "power", "glory", "vengeance", "politics", "politics", "politics"].random(),
      });
      break;

    case "priests":
      Object.assign(faction, {
        motivation: ["money", "money", "money", "knowledge", "knowledge", "fame", "power", "power", "power", "glory", "vengeance", "vengeance", "vengeance", "politics", "politics", "politics", "politics"].random(),
      });
      break;

    case "monks":
      Object.assign(faction, {
        motivation: ["money", "money", "money", "knowledge", "knowledge", "fame", "power", "power", "power", "glory", "vengeance", "vengeance", "vengeance", "politics", "politics"].random(),
      });
      break;

    case "assassins":
      Object.assign(faction, {
        motivation: ["money", "money", "money", "fame", "power", "power", "power", "glory", "vengeance", "vengeance", "vengeance", "politics", "politics", "politics"].random(),
      });
      break;

    case "artisans":
      Object.assign(faction, {
        motivation: ["money", "money", "money", "money", "money", "fame", "fame", "fame", "glory", "glory", "glory", "vengeance", "politics"].random(),
      });
      break;

    case "bards":
      Object.assign(faction, {
        motivation: ["money", "money", "money", "fame", "fame",  "fame", "fame", "fame", "glory", "glory", "glory", "politics"].random(),
      });
      break;

    case "nobles":
      Object.assign(faction, {
        motivation: ["money", "money", "money", "fame", "power", "power", "power", "power", "glory", "vengeance", "vengeance", "vengeance", "politics", "politics", "politics", "politics", "politics"].random(),
      });
      break;

    case "bandits":
      Object.assign(faction, {
        motivation: ["money", "money", "money", "fame", "power", "power", "power", "glory", "vengeance", "vengeance", "vengeance", "politics", "politics", "politics"].random(),
      });
      break;

    case "mercenaries":
      Object.assign(faction, {
        motivation: ["money", "money", "money", "money", "money", "money", "fame","power", "glory", "politics"].random(),
      });
      break;

    default:
      Object.assign(faction, {
        motivation: ["money", "money", "money", "money", "money", "fame", "power", "power", "power", "glory", "vengeance", "vengeance", "vengeance", "politics"].random(),
      });

    // case "thieves":
    //   Object.assign(faction, {
    //     motivation: ["money", "money", "money", "money", "money", "fame", "power", "power", "power", "glory", "vengeance", "vengeance", "vengeance", "politics"].random(),
    //   });
    //   break;


  }
  return faction.motivation;
};
