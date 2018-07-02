setup.motivation = function(guild) {
  var guild = guild;

  switch (guild.type) {
    case "thieves":
      Object.assign(guild, {
        motivation: ["money", "money", "money", "money", "money", "fame", "power", "power", "power", "glory", "vengeance", "vengeance", "vengeance", "politics"].random(),
      });
      break;

    case "merchants":
      Object.assign(guild, {
        motivation: ["money", "money", "money", "money", "money", "power", "glory", "vengeance", "politics", "politics", "politics"].random(),
      });
      break;

    case "wizards":
      Object.assign(guild, {
        motivation: ["money", "money", "fame", "fame", "fame", "knowledge", "knowledge", "knowledge", "knowledge", "power", "power", "power", "glory", "vengeance", "vengeance", "politics", "politics"].random(),
      });
      break;

    case "rangers":
      Object.assign(guild, {
        motivation: ["money", "knowledge", "knowledge", "knowledge", "fame", "power", "power", "power", "glory", "glory", "glory", "vengeance", "politics", "politics", "politics"].random(),
      });
      break;

    case "seers":
      Object.assign(guild, {
        motivation: ["money", "money", "knowledge", "knowledge", "knowledge", "knowledge", "fame", "power", "power", "glory", "vengeance", "politics", "politics", "politics"].random(),
      });
      break;

    case "priests":
      Object.assign(guild, {
        motivation: ["money", "money", "money", "knowledge", "knowledge", "fame", "power", "power", "power", "glory", "vengeance", "vengeance", "vengeance", "politics", "politics", "politics", "politics"].random(),
      });
      break;

    case "monks":
      Object.assign(guild, {
        motivation: ["money", "money", "money", "knowledge", "knowledge", "fame", "power", "power", "power", "glory", "vengeance", "vengeance", "vengeance", "politics", "politics"].random(),
      });
      break;

    case "assassins":
      Object.assign(guild, {
        motivation: ["money", "money", "money", "fame", "power", "power", "power", "glory", "vengeance", "vengeance", "vengeance", "politics", "politics", "politics"].random(),
      });
      break;

    case "artisans":
      Object.assign(guild, {
        motivation: ["money", "money", "money", "money", "money", "fame", "fame", "fame", "glory", "glory", "glory", "vengeance", "politics"].random(),
      });
      break;

    case "nobles":
      Object.assign(guild, {
        motivation: ["money", "money", "money", "fame", "power", "power", "power", "power", "glory", "vengeance", "vengeance", "vengeance", "politics", "politics", "politics", "politics", "politics"].random(),
      });
      break;

    default:
      Object.assign(guild, {
        motivation: ["money", "money", "money", "money", "money", "fame", "power", "power", "power", "glory", "vengeance", "vengeance", "vengeance", "politics"].random(),
      });

    // case "thieves":
    //   Object.assign(guild, {
    //     motivation: ["money", "money", "money", "money", "money", "fame", "power", "power", "power", "glory", "vengeance", "vengeance", "vengeance", "politics"].random(),
    //   });
    //   break;


  }
  return guild;
};
