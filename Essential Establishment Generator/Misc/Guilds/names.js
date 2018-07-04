setup.nameGuild = function(guild) {
var main;
var adjective;
var group;
var unique;
var name;
var output;
switch (guild.type) {
  case "thieves":
    Object.assign(name, {
      adjective: ["Clever", "Sneaky", "Cunning", "Conniving", "Honest", "Black", "Invisible", "Silent"].random(),
      main: ["Cutpurses", "Pilferers", "Thieves", "Rogues", "Property Reappropriaters"].random(),
      group: ["Society", "Group", "League", "Collective", "Brothers", "Brotherhood", "Order"].random(),
      unique: ["Silent Movers", "Silent Partners", "The Tip-Toe Club", "Good Fences", "League of Lifters and Grifters", "The Neighborhood Watch", "The Unseen Hand", "The Kleptocrats", "The Riverside Raiders", "Black Market Mayhem", "The Boondock Burglars", "The Dock Workers", "Pickpockets Anonymous"].random(),
    });
    break;

  case "merchants":
    Object.assign(name, {
      main: ["Merchants", "Company", "Sellers and Buyers", "Traders", "Dealers", "Brokers", "Pedlars", "Hawkers", "Distributors"].random(),
      adjective: ["Shrewd", "Thrifty", "Golden Spoon", "Rich", "Miserly"].random(),
      group: ["Society", "Group", "League", "Collective", "Brothers", "Brotherhood", "Order"].random(),

      });
    break;

  case "wizards":
    Object.assign(name, {
      main: ["Prestidigitators", "Illusionists", "Casters", "Magic Users", "Diviners", "Evokers", "Necromancers", "Abjurers", "Scroll Keepers", "Book Keepers", "Collectors", "Librarians"].random(),
      adjective: ["Arcane", "Magical", "Scholarly", "Absent Minded", "Knowledgeable", "Intelligent", "Unknown", "Eldritch", "Memorized"].random(),
      group: ["Society", "Academy", "University", "Club", "Scholarly Group", "League", "Collective", "Brothers", "Brotherhood", "Order"].random(),
      unique: ["We Make Magic!", "The Academy", "The Arcane Order", "Adepts Anonymous", "The Callers Club", "The Union of Universal Magic", "The University of the Unusual and Unexplained", "The College of Conjurers", "Necromancers' Network", "The Evokers' League", "The Nation of Abjuration", "Seers' and Company", "The Illusory Guild", "Spellcasters Anonymous"].random(),
      });
    break;

  case "rangers":
    Object.assign(name, {
      main: ["Wilderness", "the Woods", "the Lands", "the Forests", "the Trees", "the Animals"].random(),
      adjective: ["Tree Loving", "Padfoot", "Barefoot", "Protective", "Watchful", "Careful", "Honest"].random(),
      group: ["Society", "Group", "Collective", "Brothers", "Brotherhood", "Order", "Protectors", "Defenders", "Conservationists", "Guardians"].random(),
      });
    break;

  case "seers":
    Object.assign(name, {
      main: ["Seers", "Predictionists", "Future Seers", "Observers", "Eyes", "Historians"].random(),
      adjective: ["All Seeing", "All Knowing", "Watchful", "Future"].random(),
      group: ["Society", "Group", "Collective", "Brothers", "Brotherhood", "Order"].random(),
      });
    break;

  case "priests":
    Object.assign(name, {
      main: ["Priests", "Clergy", "Churchpeople", "People of the Cloth", "Robes", "Incense", "Elders", "Preachers"].random(),
      adjective: ["Holy", "Faithful", "Caring", "Civil", "Devout", "Devoted", "Compassionate"].random(),
      group: ["Society", "Group", "League", "Servants", "Collective", "Brothers", "Brotherhood", "Brotherhood", "Priesthood", "Order"].random(),
      });
    break;

  case "monks":
    Object.assign(name, {
      main: ["Monks", "Robes", "Stone", "Rock"].random(),
      adjective: ["Understanding", "Meditating", "Calm", "Unmoving"].random(),
      group: ["Society", "Group", "League", "Collective", "Brothers", "Brotherhood", "Order"].random(),
      });
    break;

  case "assassins":
    Object.assign(name, {
      main: ["Dagger", "Knife", "Executioners", "Hangmen", "Hitmen", "Killers", "Doctors"].random(),
      adjective: ["Cunning", "Discreet", "Quiet", "Bloody", "Rusted", "Poisoned", "Defiled"].random(),
      group: ["Society", "Group", "League", "Collective", "Brothers", "Brotherhood", "Order"].random(),
      unique: ["Dead Is Dead", "The Killers", "The Slayers", "The Big Game Players", "The Blood Club", "The League of Silence", "The Silencers", "The Whispers", "The Shadow Guild", "Shadowfront"].random(),
      });
    break;

  case "artisans":
    Object.assign(name, {
      main: ["Creators", "Visionaries", "Artisans", "Artists"].random(),
      adjective: ["Creative", "Inspired", "Bohemian", "Unpaid", "God-Touched"].random(),
      group: ["Society", "Group", "League", "Collective", "Brothers", "Brotherhood", "Order"].random(),
      });
    break;

  case "bards":
    Object.assign(name, {
      main: ["Rehearsals", "Musicians", "Bards", "Harmonies", "Poems", "Ballads", "Arias", "Lutes", "Minstrels"].random(),
      adjective: ["Tuneful", "Melodious", "Inspired", "Twelve Tone", "Busking"].random(),
      group: ["Symphony", "Quartet", "Ensemble", "Society", "Group", "League", "Collective", "Brothers", "Brotherhood", "Order"].random(),
      });
    break;

  case "nobles":
    Object.assign(name, {
      main: ["People of Taste", "Land Owners", "Barons", "Tycoons", "Nobles", "Gentlemen"].random(),
      adjective: ["Sophisticated", "Intelligent", "Refined", "Cultured", "Wealthy", "Distinguished"].random(),
      group: ["Society", "Group", "Dinner Club", "League", "Club"].random(),
      });
    break;

  default:
    Object.assign(name, {
      main: ["People", "Men", "Citizens"].random(),
      adjective: ["Watchful", "Careful"].random(),
      group: ["Society", "Group", "League", "Collective", "Brothers", "Brotherhood", "Order"].random(),
    });
  }

  output = [
    "The " + name.group + " of " + name.adjective + " " + name.main,
    "The " + name.group + " of " + name.main,
    "The " + name.adjective + " " + name.group,
    "The " + name.main + " of " + State.town.name,
    "The " + State.town.name + " " + name.main,
  ].random();

 return output;
};
