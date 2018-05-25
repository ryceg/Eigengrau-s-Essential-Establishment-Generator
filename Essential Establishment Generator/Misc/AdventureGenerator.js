setup.createAdventure = (function(base) {
// Tables used later
      var location = ["dungeon", "wilderness", "other"];
      var introduction = ["While traveling in the wilderness, the characters fall into a sinkhole that opens beneath their feet, dropping them into the adventure location.", "While traveling in the wilderness, the characters notice the entrance to the adventure location.", "While traveling on a road, the characters are attacked by monsters that flee into the nearby adventure location.", "The adventurers find a map on a dead body. In addition to the map setting up the adventure, the $adventureVillain.name wants the map.", "A mysterious magic item (or $adventureVillain.name) teleports the characters to the adventure location.", "A stranger approaches the characters in a tavern and urges them toward the adventure location.", "$town.name needs volunteers to go to the adventure location.", "An NPC the characters care about needs them to go to the adventure location.", "An NPC the characters must obey orders them to go to the adventure location.", "An NPC the characters respect asks them to go to the adventure location.", "One night, the characters all dream about entering the adventure location.", "A ghost appears and terrorizes a village. Research reveals that it can be put to rest only by entering the adventure location."];
      var climax = ["The adventurers confront $adventureVillain.name and a group of minions in a bloody battle to the finish.", "The adventurers chase $adventureVillain.name while dodging obstacles designed to thwart them, leading to a final confrontation in or outside $adventureVillain.firstname's refuge", "The actions of the adventurers or $adventureVillain.firstname result in a cataclysmic even that the adventurers must escape", "The adventurers race to the site where $adventureVillain.name is bringing a master plan to its conclusion, arriving just as that plan is about to be completed", "$adventureVillain.name and two or three lieutenants perform seperate rites in a large room. The adventurers must disrupt all the rites at the same time. ", "An ally betrays the adventurers as they're about to achieve their goal (use this climax carefully, and don't overuse it).", "A portal opens to another plane of existence. Creatures on the other side spill out, forcing the adventurers to close the portal and deal with $adventureVillain.name at the same time.", "Traps, hazards, or animated objects turn against the adventurers while $adventureVillain.name attacks.", "The dungeon begins to collapse while the adventurers face $adventureVillain.name, who attempts to escape in the chaos. ", "A threat more powerful than the adventurers appears, destrops $adventureVillain.name, and then turns its attention on the characters. ", "The adventurers must choose whether to pursue the fleeing $adventureVillain.name or save an NPC they care about or a group of innocents. ", "The adventurers must discover $adventureVillain.firstname's secret weakness before they can hope to defeat $adventureVillain.himher"];
      var otherGoal = ["Bring $adventureVillain.name to justice.", "Clear the name of an innocent NPC.", "Protect or hide an NPC.", "Protect an object.", "Discover the nature and origin of a strange phenomenon that might be $adventureVillain.firstname's doing.", "Find a wanted fugitive.", "Overthrow a tyrant.", "Uncover a conspiracy to overthrow a ruler.", "Negotiate peace between enemy nations or feuding families.", "Secure aid from a ruler or council.", "Help a villain find redemption.", "Parley with a villain.", "Smuggle weapons to rebel forces.", "Stop a band of smugglers.", "Gather intelligence on an enemy force.", "Win a tournament.", "Determine the villain's identity.", "Locate a stolen item.", "Make sure a wedding goes off without a hitch."];
      var backdrop = ["anniversary of a monarch's reign", "anniversary of an important event", "arena event", "arrival of a caravan or ship", "arrival of a circus", "arrival of an important npc", "arrival of marching modrons", "artistic performance", "athletic event", "birth of a child", "birthday of an important npc", "civic festival", "comet appearance", "commemoration of a past tragedy", "consecration of a new temple", "coronation", "council meeting", "equinox or solstice", "execution", "fertility festival", "full moon", "funeral", "graduation of cadets or wizards", "harvest festival", "holy day", "investiture of a knight or other noble", "lunar eclipse", "midsummer festival", "midwinter festival", "migration of monsters", "monarch's ball", "new moon", "new year", "pardoning of a prisoner", "planar conjunction", "planetary alignment", "priestly investiture", "procession of ghosts", "remembrance for soldiers lost in war", "royal address or proclamation", "royal audience day", "signing of a treaty", "solar eclipse", "tournament", "trial", "violent uprising", "wedding or wedding anniversary"];
      var quandary = ["Ally quandary", "Friend quandary", "Honor quandary", "Rescue quandary", "Respect quandary"];
      var twist = ["The adventurers are racing against other creatures with the same or opposite goal.", "The adventurers become responsible for the safety of a noncombatant NPC.", "The adventurers are prohibited from killing $adventureVillain.name, but $adventureVillain.heshe has no compunctions about killing them.", "The adventurers have a time limit.", "The adventurers have received false or extraneous information.", "Completing an adventure goal fulfills a prophecy or prevents the fulfillment of a prophecy.", "The adventurers have two different goals, but they can complete only one.", "Completing the goal secretly helps $adventureVillain.name.", "The adventurers must cooperate with a known enemy to achieve the goal.", "The adventurers are under magical compulsion (such as a geas spell) to complete their goal"];
      var sidequest = ["find a specific item rumored to be in the area.", "retrieve a stolen item in $adventureVillain.firstname's possession.", "receive information from an npc in the area.", "rescue a captive.", "discover the fate of a missing npc.", "slay a specific monster.", "discover the nature and origin of a strange phenomenon in the area.", "secure the aid of a character or creature in the area."];
      var patron = ["retired adventurer", "local ruler", "military officer", "temple official", "sage", "respected elder", "deity or celestial", "mysterious fey", "old friend", "former teacher", "parent or other family member", "desperate commoner", "embattled merchant", "villain posing as a patron"];
      var villain = ["beast or monstrosity with no particular agenda", "terrible aberration bent on corruption or domination", "fiend bent on corruption or destruction", "dragon bent on domination and plunder", "giant bent on plunder", "horrible undead with any agenda", "fey with a mysterious goal", "humanoid cultist", "humanoid conqueror", "humanoid seeking revenge", "humanoid schemer seeking to rule", "humanoid criminal mastermind", "humanoid raider or ravager", "humanoid under a curse", "misguided humanoid zealot"];
      var villainActions = ["by doing one big event", "by a crime spree", "by growing corruption throughout the land", "by serial crimes", "step by step"];
      var ally = ["skilled adventurer", "inexperienced adventurer", "enthusiastic commoner", "soldier", "priest", "sage", "revenge seeker", "raving lunatic adventurer", "celestial ally", "fey ally", "disguised monster", "villain posing as an ally"];

      var adventure = Object.assign({
          location: location.random(),
          introduction: introduction.random(),
          climax: climax.random(),
          otherGoal: otherGoal.random(),
          backdrop: backdrop.random(),
          quandary: quandary.random(),
          twist: twist.random(),
          sidequest: sidequest.random(),
          patron: patron.random(),
          villain: villain.random(),
          villainActions: villainActions.random(),
          ally: ally.random(),
      }, base);
  /*var adventure = Object.assign({
      location: ["dungeon", "wilderness", "other"].random(),
      introduction: ["While traveling in the wilderness, the characters fall into a sinkhole that opens beneath their feet, dropping them into the adventure location.", "While traveling in the wilderness, the characters notice the entrance to the adventure location.", "While traveling on a road, the characters are attacked by monsters that flee into the nearby adventure location.", "The adventurers find a map on a dead body. In addition to the map setting up the adventure, the $adventureVillain.name wants the map.", "A mysterious magic item (or $adventureVillain.name) teleports the characters to the adventure location.", "A stranger approaches the characters in a tavern and urges them toward the adventure location.", "$town.name needs volunteers to go to the adventure location.", "An NPC the characters care about needs them to go to the adventure location.", "An NPC the characters must obey orders them to go to the adventure location.", "An NPC the characters respect asks them to go to the adventure location.", "One night, the characters all dream about entering the adventure location.", "A ghost appears and terrorizes a village. Research reveals that it can be put to rest only by entering the adventure location."].random(),
      climax: ["The adventurers confront $adventureVillain.name and a group of minions in a bloody battle to the finish.", "The adventurers chase $adventureVillain.name while dodging obstacles designed to thwart them, leading to a final confrontation in or outside $adventureVillain.firstname's refuge", "The actions of the adventurers or $adventureVillain.firstname result in a cataclysmic even that the adventurers must escape", "The adventurers race to the site where $adventureVillain.name is bringing a master plan to its conclusion, arriving just as that plan is about to be completed", "$adventureVillain.name and two or three lieutenants perform seperate rites in a large room. The adventurers must disrupt all the rites at the same time. ", "An ally betrays the adventurers as they're about to achieve their goal (use this climax carefully, and don't overuse it).", "A portal opens to another plane of existence. Creatures on the other side spill out, forcing the adventurers to close the portal and deal with $adventureVillain.name at the same time.", "Traps, hazards, or animated objects turn against the adventurers while $adventureVillain.name attacks.", "The dungeon begins to collapse while the adventurers face $adventureVillain.name, who attempts to escape in the chaos. ", "A threat more powerful than the adventurers appears, destrops $adventureVillain.name, and then turns its attention on the characters. ", "The adventurers must choose whether to pursue the fleeing $adventureVillain.name or save an NPC they care about or a group of innocents. ", "The adventurers must discover $adventureVillain.firstname's secret weakness before they can hope to defeat $adventureVillain.himher"].random(),
      otherGoal: ["Bring $adventureVillain.name to justice.", "Clear the name of an innocent NPC.", "Protect or hide an NPC.", "Protect an object.", "Discover the nature and origin of a strange phenomenon that might be $adventureVillain.firstname's doing.", "Find a wanted fugitive.", "Overthrow a tyrant.", "Uncover a conspiracy to overthrow a ruler.", "Negotiate peace between enemy nations or feuding families.", "Secure aid from a ruler or council.", "Help a villain find redemption.", "Parley with a villain.", "Smuggle weapons to rebel forces.", "Stop a band of smugglers.", "Gather intelligence on an enemy force.", "Win a tournament.", "Determine the villain's identity.", "Locate a stolen item.", "Make sure a wedding goes off without a hitch."].random(),
      backdrop: ["anniversary of a monarch's reign", "anniversary of an important event", "arena event", "arrival of a caravan or ship", "arrival of a circus", "arrival of an important npc", "arrival of marching modrons", "artistic performance", "athletic event", "birth of a child", "birthday of an important npc", "civic festival", "comet appearance", "commemoration of a past tragedy", "consecration of a new temple", "coronation", "council meeting", "equinox or solstice", "execution", "fertility festival", "full moon", "funeral", "graduation of cadets or wizards", "harvest festival", "holy day", "investiture of a knight or other noble", "lunar eclipse", "midsummer festival", "midwinter festival", "migration of monsters", "monarch's ball", "new moon", "new year", "pardoning of a prisoner", "planar conjunction", "planetary alignment", "priestly investiture", "procession of ghosts", "remembrance for soldiers lost in war", "royal address or proclamation", "royal audience day", "signing of a treaty", "solar eclipse", "tournament", "trial", "violent uprising", "wedding or wedding anniversary"].random(),
      quandry: ["Ally quandary", "Friend quandary", "Honor quandary", "Rescue quandary", "Respect quandary"].random(),
      twist: ["The adventurers are racing against other creatures with the same or opposite goal.", "The adventurers become responsible for the safety of a noncombatant NPC.", "The adventurers are prohibited from killing $adventureVillain.name, but $adventureVillain.heshe has no compunctions about killing them.", "The adventurers have a time limit.", "The adventurers have received false or extraneous information.", "Completing an adventure goal fulfills a prophecy or prevents the fulfillment of a prophecy.", "The adventurers have two different goals, but they can complete only one.", "Completing the goal secretly helps $adventureVillain.name.", "The adventurers must cooperate with a known enemy to achieve the goal.", "The adventurers are under magical compulsion (such as a geas spell) to complete their goal"].random(),
      sidequest: ["find a specific item rumored to be in the area.", "retrieve a stolen item in $adventureVillain.firstname's possession.", "receive information from an npc in the area.", "rescue a captive.", "discover the fate of a missing npc.", "slay a specific monster.", "discover the nature and origin of a strange phenomenon in the area.", "secure the aid of a character or creature in the area."].random(),
      patron: ["retired adventurer", "local ruler", "military officer", "temple official", "sage", "respected elder", "deity or celestial", "mysterious fey", "old friend", "former teacher", "parent or other family member", "desperate commoner", "embattled merchant", "villain posing as a patron"].random(),
      villain: ["beast or monstrosity with no particular agenda", "terrible aberration bent on corruption or domination", "fiend bent on corruption or destruction", "dragon bent on domination and plunder", "giant bent on plunder", "horrible undead with any agenda", "fey with a mysterious goal", "humanoid cultist", "humanoid conqueror", "humanoid seeking revenge", "humanoid schemer seeking to rule", "humanoid criminal mastermind", "humanoid raider or ravager", "humanoid under a curse", "misguided humanoid zealot"].random(),
      villainActions: ["by doing one big event", "by a crime spree", "by growing corruption throughout the land", "by serial crimes", "step by step"].random(),
      ally: ["skilled adventurer", "inexperienced adventurer", "enthusiastic commoner", "soldier", "priest", "sage", "revenge seeker", "raving lunatic adventurer", "celestial ally", "fey ally", "disguised monster", "villain posing as an ally"].random(),
    }, base);*/

switch (adventure.location) {
    case "dungeon":
         adventure.goal = adventure.goal || ["stop the dungeon's monstrous inhabitants from raiding the surface world.", "foil a villain's evil scheme.", "destroy a magical threat inside the dungeon.", "acquire treasure.", "find a particular item for a specific purpose.", "retrieve a stolen item hidden in the dungeon.", "find information needed for a special purpose.", "rescue a captive.", "discover the fate of a previous adventuring party.", "find an npc who disappeared in the area.", "slay a dragon or some other challenging monster.", "discover the nature and origin of a strange location or phenomenon.", "pursue fleeing foes taking refuge in the dungeon.", "escape from captivity in the dungeon.", "clear a ruin so it can be rebuilt and reoccupied.", "discover why a villain is interested in the dungeon.", "win a bet or complete a rite of passage by surviving in the dungeon for a certain amount of time.", "parley with a villain in the dungeon.", "hide from a threat outside the dungeon."].random();
    break;
    case "wilderness":
         adventure.goal = adventure.goal || ["assess the scope of a natural or unnatural disaster.", "escort an npc to a destination.", "arrive at a destination without being seen by the villain's forces.", "stop monsters from raiding caravans and farms.", "establish trade with a distant town.", "protect a caravan traveling to a distant town.", "map a new land.", "find a place to establish a colony.", "find a natural resource.", "hunt a specific monster.", "return home from a distant place.", "obtain information from a reclusive hermit.", "find an object that was lost in the wilds.", "discover the fate of a missing group of explorers.", "pursue fleeing foes.", "assess the size of an approaching army.", "escape the reign of a tyrant.", "protect a wilderness site from attackers."].random();
    break;
    case "other":
         adventure.goal = adventure.goal || ["seize control of a fortified location such as a fortress, town, or ship.", "defend a location from attackers.", "retrieve an object from inside a secure location in a settlement.", "retrieve an object from a caravan.", "salvage an object or goods from a lost vessel or caravan.", "break a prisoner out of a jail or prison camp.", "escape from a jail or prison camp.", "successfully travel through an obstacle course to gain recognition or reward.", "infiltrate a fortified location.", "find the source of strange occurrences in a haunted house or other location.", "interfere with the operation of a business.", "rescue a character, monster, or object from a natural or unnatural disaster."].random();
 }

switch (adventure.goal) {
  case "rescue a captive.":
          var adventureGoalNPC = setup.createNPC();
          variables().adventureGoalNPC = goalNPC;
          Object.assign(adventure, {
              goalNPC: goalNPC,
              goal: "rescue " + adventureGoalNPC.name + ", a " + adventureGoalNPC.racenote + " who was captured and taken prisoner.",
          });
          break;
  case "discover the fate of a previous adventuring party.":
          var adventureGoalNPC = setup.createNPC();
          variables().adventureGoalNPC = goalNPC;
          Object.assign(adventure, {
              goalNPC: goalNPC,
              goal: "rescue " + adventureGoalNPC.name + ", a " + adventureGoalNPC.racenote + " who was captured and taken prisoner.",
          });
          break;
  case "find an npc who disappeared in the area.":
          var adventureGoalNPC = setup.createNPC();
          variables().adventureGoalNPC = goalNPC;
          Object.assign(adventure, {
              goalNPC: goalNPC,
              goal: "find " + adventureGoalNPC.name + ", a " + adventureGoalNPC.racenote + " who disappeared in the area.",
          });
          break;
  case "escort an npc to a destination.":
          var adventureGoalNPC = setup.createNPC();
          variables().adventureGoalNPC = goalNPC;
          Object.assign(adventure, {
              goalNPC: goalNPC,
              goal: "escort " + adventureGoalNPC.name + ", a " + adventureGoalNPC.racenote + " who needs protection on the way to another place.",
          });
          break;
  case "discover the fate of a missing group of explorers.":
          var adventureGoalNPC = setup.createNPC();
          variables().adventureGoalNPC = goalNPC;
          Object.assign(adventure, {
              goalNPC: goalNPC,
              goal: "discover the fate of " + adventureGoalNPC.name + " and " + adventureGoalNPC.hisher + " exploring party, who disappeared in the area.",
          });
          break;
  case "break a prisoner out of a jail or prison camp.":
          var adventureGoalNPC = setup.createNPC();
          variables().adventureGoalNPC = goalNPC;
          Object.assign(adventure, {
              goalNPC: goalNPC,
              goal: "rescue " + adventureGoalNPC.name + ", a " + adventureGoalNPC.racenote + " who was captured and taken prisoner.",
          });
          break;
  case "rescue a character, monster, or object from a natural or unnatural disaster.":
          var adventureGoalNPC = setup.createNPC();
          variables().adventureGoalNPC = goalNPC;
          Object.assign(adventure, {
              goalNPC: goalNPC,
              goal: "rescue " + adventureGoalNPC.name + ", a " + adventureGoalNPC.racenote + " who was caught in a natural disaster.",
          });


switch (adventure.villain) {
  case "giant bent on plunder":
          var adventureVillain = setup.createNPC({height: "huge", race: "giant"});
          variables().adventureVillain = Villain;
          Object.assign(adventure, {
                adventureVillain: adventureVillain,
          });
          break;
  case "fey with a mysterious goal":
          var adventureVillain = setup.createNPC({race: "fey"});
          variables().adventureVillain = Villain;
          Object.assign(adventure, {
                adventureVillain: adventureVillain,
          });
          break;
  case "humanoid cultist":
          var adventureVillain = setup.createNPC({dndclass: either("cleric", "sorcerer", "wizard")});
          variables().adventureVillain = Villain;
          Object.assign(adventure, {
                adventureVillain: adventureVillain,
                villain: "cultist called " + adventureVillain.name,
          });
          break;
  case "humanoid conqueror":
          var adventureVillain = setup.createNPC({dndclass: either("barbarian", "fighter", "paladin")});
          variables().adventureVillain = Villain;
          Object.assign(adventure, {
                adventureVillain: adventureVillain,
                villain: "fearsome conqueror called " + adventureVillain.name,
          });
          break;
  case "humanoid seeking revenge":
          var adventureVillain = setup.createNPC();
          variables().adventureVillain = Villain;
          Object.assign(adventure, {
                adventureVillain: adventureVillain,
                villain: adventureVillain.racenote + " called " + adventureVillain.name + " hellbent on revenge.",
          });
          break;
  case "humanoid schemer seeking to rule":
          var adventureVillain = setup.createNPC({dndclass: either("sorcerer", "rogue")});
          variables().adventureVillain = Villain;
          Object.assign(adventure, {
                adventureVillain: adventureVillain,
                villain: "conniving" + adventureVillain.racenote + "called " + adventureVillain.name + " who seeks power",
          });
          break;
  case "humanoid criminal mastermind":
          var adventureVillain = setup.createNPC({dndclass: either("sorcerer", "rogue")});
          variables().adventureVillain = Villain;
          Object.assign(adventure, {
                adventureVillain: adventureVillain,
                villain: "conniving" + adventureVillain.racenote + "called " + adventureVillain.name + " who seeks to build a criminal empire",
          });
          break;
  case "humanoid raider or ravager":
          var adventureVillain = setup.createNPC({dndclass: either("barbarian", "fighter")});
          variables().adventureVillain = Villain;
          Object.assign(adventure, {
                adventureVillain: adventureVillain,
                villain: "fearsome raider called " + adventureVillain.name,
          });
          break;
  case "humanoid under a curse":
          var adventureVillain = setup.createNPC();
          variables().adventureVillain = Villain;
          Object.assign(adventure, {
                adventureVillain: adventureVillain,
                villain: adventureVillain.racenote + " called " + adventureVillain.name + " who was placed under a curse"
          });
          break;
  case "misguided humanoid zealot":
          var adventureVillain = setup.createNPC({dndclass: "cleric"});
          variables().adventureVillain = Villain;
          Object.assign(adventure, {
                adventureVillain: adventureVillain,
                villain: "misguided" + adventureVillain.racenote + "zealot called " + adventureVillain.name,
          });
          break;
  default:
          var adventureVillain = setup.createNPC();
          variables().adventureVillain = Villain;
          Object.assign(adventure, {
                adventureVillain: adventureVillain,
          });


switch (adventure.ally) {
    case "young adventurer":
    var adventureAlly = setup.createNPC({age: "relatively young"});
    variables().adventureAlly = Ally;
      Object.assign(adventure, {
         adventureAlly: adventureAlly,
       });
       break;
    case "enthusiastic commoner":
    var adventureAlly = setup.createNPC({dndclass: "peasant"});
    variables().adventureAlly = Ally;
      Object.assign(adventure, {
         adventureAlly: adventureAlly,
       });
       break;
    case "soldier":
    var adventureAlly = setup.createNPC({dndclass: "fighter", background: "soldier"});
    variables().adventureAlly = Ally;
      Object.assign(adventure, {
         adventureAlly: adventureAlly,
       });
       break;
    case "priest":
    var adventureAlly = setup.createNPC({dndclass: "cleric"});
    variables().adventureAlly = Ally;
      Object.assign(adventure, {
           adventureAlly: adventureAlly,
       });
       break;
    case "sage":
    var adventureAlly = setup.createNPC({dndclass: either("cleric", "monk", "druid", "wizard"), background: "sage"});
    variables().adventureAlly = Ally;
      Object.assign(adventure, {
           adventureAlly: adventureAlly,
       });
       break;
    case "celestial ally":
    var adventureAlly = setup.createNPC({race: "celestial being"});
    variables().adventureAlly = Ally;
      Object.assign(adventure, {
           adventureAlly: adventureAlly,
       });
       break;
    case "fey ally":
    var adventureAlly = setup.createNPC({race: "fey"});
    variables().adventureAlly = Ally;
      Object.assign(adventure, {
           adventureAlly: adventureAlly,
       });
       break;
    default:
    var adventureAlly = setup.createNPC();
    variables().adventureAlly = Ally;
      Object.assign(adventure, {
           adventureAlly: adventureAlly,
       });
       break;
 };


switch (adventure.patron) {
    case "retired adventurer":
      var adventurePatron = setup.createNPC({adventure: "retired"});
        variables().adventurePatron = Patron;
          Object.assign(adventure, {
              adventurePatron: adventurePatron,
         });
         break;
    case "local ruler":
      var adventurePatron = setup.createNPC({dndclass: "lord"});
      variables().adventurePatron = Patron;
        Object.assign(adventure, {
            adventurePatron: adventurePatron,
         });
         break;
    case "military officer":
      var adventurePatron = setup.createNPC({dndclass: either("fighter", "paladin"), background: "soldier"});
      variables().adventurePatron = Patron;
        Object.assign(adventure, {
            adventurePatron: adventurePatron,
         });
         break;
    case "temple official":
      var adventurePatron = setup.createNPC({dndclass: either("cleric", "cleric", "cleric", "paladin"), background: "sage"});
      variables().adventurePatron = Patron;
        Object.assign(adventure, {
            adventurePatron: adventurePatron,
         });
         break;
    case "sage":
      var adventurePatron = setup.createNPC({dndclass: either("cleric", "cleric", "cleric", "paladin"), background: "sage"});
      variables().adventurePatron = Patron;
        Object.assign(adventure, {
            adventurePatron: adventurePatron,
         });
         break;
    case "respected elder":
      var adventurePatron = setup.createNPC({age: "venerable"});
      variables().adventurePatron = Patron;
        Object.assign(adventure, {
            adventurePatron: adventurePatron,
         });
         break;
    case "deity or celestial":
      var adventurePatron = setup.createNPC({race: "celestial being"});
      variables().adventurePatron = Patron;
        Object.assign(adventure, {
            adventurePatron: adventurePatron,
         });
         break;
    case "mysterious fey":
      var adventurePatron = setup.createNPC({race: "fey"});
      variables().adventurePatron = Patron;
        Object.assign(adventure, {
            adventurePatron: adventurePatron,
         });
         break;
    case "former teacher":
      var adventurePatron = setup.createNPC({age: "venerable"});
      variables().adventurePatron = Patron;
        Object.assign(adventure, {
            adventurePatron: adventurePatron,
         });
         break;
    default:
      var adventurePatron = setup.createNPC();
      variables().adventurePatron = Patron;
        Object.assign(adventure, {
            adventurePatron: adventurePatron,
         });
}
    return adventure;
}}
});
