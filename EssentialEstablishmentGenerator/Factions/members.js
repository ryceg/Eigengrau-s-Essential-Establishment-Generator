setup.membersFaction = function(faction) {
  switch (faction.type) {
    case "thieves":
      Object.assign(faction, {
        membersTrait: ["missing an earlobe", "absolutely nothing; they're completely anonymous", "a dagger given to ever member", "a ring given to every member", "a grey hood", "their lack of manners", "their bad stench", "their rabble-rousing tendencies"].random(),
        placeholder: [].random(),
      });
      break;
    case "merchants":
      Object.assign(faction, {
        membersTrait: [].random(),
        placeholder: [].random(),
      });
      break;
    case "wizards":
      Object.assign(faction, {
        membersTrait: [].random(),
        placeholder: [].random(),
      });
      break;
    case "rangers":
      Object.assign(faction, {
        membersTrait: [].random(),
        placeholder: [].random(),
      });
      break;
    case "seers":
      Object.assign(faction, {
        membersTrait: [].random(),
        placeholder: [].random(),
      });
      break;
    case "priests":
      Object.assign(faction, {
        membersTrait: [].random(),
        placeholder: [].random(),
      });
      break;
    case "monks":
      Object.assign(faction, {
        membersTrait: [].random(),
        placeholder: [].random(),
      });
      break;
    case "assassins":
      Object.assign(faction, {
        membersTrait: [].random(),
        placeholder: [].random(),
      });
      break;
    case "artisans":
      Object.assign(faction, {
        membersTrait: [].random(),
        placeholder: [].random(),
      });
      break;
    case "nobles":
      Object.assign(faction, {
        membersTrait: [].random(),
        placeholder: [].random(),
      });
      break;
    case "bards":
      Object.assign(faction, {
        membersTrait: [].random(),
        placeholder: [].random(),
      });
      break;
    default:
      Object.assign(faction, {
        membersTrait: [].random(),
        placeholder: [].random(),
      });
  }



  return faction;
};
