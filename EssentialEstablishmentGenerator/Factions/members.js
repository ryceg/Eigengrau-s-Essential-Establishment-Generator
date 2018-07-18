setup.membersFaction = function(faction) {
  switch (faction.type) {
    case "thieves":
      Object.assign(faction, {
        membersTrait: ["a missing earlobe", "absolutely nothing; they're completely anonymous", "a dagger given to ever member", "a ring given to every member", "a grey hood", "their lack of manners", "their bad stench", "their rabble-rousing tendencies"].random(),
        placeholder: [].random(),
      });
      break;
    case "merchants":
      Object.assign(faction, {
        membersTrait: ["the ring that members are given", "their excessively bureaucratic tendencies", "their purple robes", "their gaudy jewelry", "the fact that a member is always closely followed by a boy carrying a chest"].random(),
        placeholder: [].random(),
      });
      break;
    case "wizards":
      Object.assign(faction, {
        membersTrait: ["their lack of table manners", "their extreme interest in the oddities of the arcane", "the blue robes they wear", "the sash that members are given", "the ring that members are given", "their excessively bureaucratic tendencies"].random(),
        placeholder: [].random(),
      });
      break;
    case "rangers":
      Object.assign(faction, {
        membersTrait: ["the ring that members are given", "their pet ferrets", "their pet sparrows", "the twigs that are strewn throughout their hair", "their terrible smell", "the lack of footwear"].random(),
        placeholder: [].random(),
      });
      break;
    case "seers":
      Object.assign(faction, {
        membersTrait: ["the ring that members are given", "their excessively bureaucratic tendencies", "the vacant look that members have", "the vacant stare that members pull (in order to fit in with the others)", "the plain robes they wear", "the bright blue coloured sashes they wear"].random(),
        placeholder: [].random(),
      });
      break;
    case "priests":
      Object.assign(faction, {
        membersTrait: ["the ring that members are given", "their excessively bureaucratic tendencies", "the walking sticks that all members carry", "the beards that they grow", "the grey robes they wear", "the amulet they wear"].random(),
        placeholder: [].random(),
      });
      break;
    case "monks":
      Object.assign(faction, {
        membersTrait: ["the ring that members are given", "their excessively bureaucratic tendencies", "their shaved heads", "their malnutrition", "their calm presence", "their know-it-all answers", "their terrible jokes", "their amazing beer", "the tankard that all members carry"].random(),
        placeholder: [].random(),
      });
      break;
    case "assassins":
      Object.assign(faction, {
        membersTrait: ["the ring that members are given", "absolutely nothing; they're completely anonymous", "their black sashes", "their tendency to blink quickly", "their quick tempers"].random(),
        placeholder: [].random(),
      });
      break;
    case "artisans":
      Object.assign(faction, {
        membersTrait: ["the ring that members are given", "their excessively bureaucratic tendencies", "their absentmindedness", "their egos", "their attention to detail", "their creativity", "their lust for fame", "their pride"].random(),
        placeholder: [].random(),
      });
      break;
    case "nobles":
      Object.assign(faction, {
        membersTrait: ["the ring that members are given", "their excessively bureaucratic tendencies", "their absentmindedness", "their egos", "their attention to detail", "their creativity", "their lust for fame", "their pride"].random(),
        placeholder: [].random(),
      });
      break;
    case "bards":
      Object.assign(faction, {
        membersTrait: ["the ring that members are given", "their excessively bureaucratic tendencies", "their absentmindedness", "their egos", "their attention to detail", "their creativity", "their lust for fame", "their pride", "their terrible ballads", "their limerick rhyming", "their funky harmonies", "their use of tritone substitution and negative harmony", "their stochastically generated microtonal four-voice fugues"].random(),
        placeholder: [].random(),
      });
      break;
    default:
      Object.assign(faction, {
        membersTrait: ["the ring that members are given", "their excessively bureaucratic tendencies", "their distinctive headgear", "their white horses"].random(),
        placeholder: [].random(),
      });
  }



  return faction;
};
