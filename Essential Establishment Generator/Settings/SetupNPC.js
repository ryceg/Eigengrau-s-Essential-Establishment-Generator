setup.createNPC = function() {
	var gender        = ["man", "woman"].random();
  var race          = ["human", "human", "human", "human", "human", "human", "half-elf", "half-elf", "elf", "elf", "dwarf", "dwarf", "gnome", "halfling", "half-orc", "dragonborn", "tiefling"].random();
  var firstname;
  var lastname      = State.variables.name.last.random();
	var age           =  ["childlike", "rather young", "eighteen year old", "surprisingly young", "relatively young", "relatively young", "middle aged", "middle aged", "middle aged", "middle aged", "middle aged", "relatively old", "sun wizened", "quite old", "ancient"].random();
  var eyeColours;
  var racesingular;
  var raceplural;
  var raceadjective;
  var racelanguage;
  var height;
  var weight;
  var skinColours   = ["translucent", "white", "pale", "fair", "light", "light tan", "tan", "pale", "fair", "light", "light tan", "tan", "dark tan", "brown"];
  var haircolour    = ["brunette", "brunette", "brown", "brownish", "auburn", "amber", "hazel", "redhead", "dark redhead", "blonde", "dark blonde", "white", "platinum", "black", "black"];
	var hairtype      = ["thick", "wispy", "straight", "straight", "wavy", "wavy", "curly", "wiry", "oily", "lush", "poofy", "long", "braided", "very long", "greasy", "unruly", "unusually styled", "short cropped hair", "a shaved head"];
	var scar          = ["a jagged scar", "a dark purple scar", "an angry red scar", "a long, thin scar running up the arm", "a scar on the eye", "a scar around the neck", "a scar on the throat", "a fiery red scar", "a finger missing", "two fingers missing"];
	var tattoo        = ["a dagger tattoo", "an arrow tattoo", "an anchor tattoo", "a skull tattoo", "a pair of crossed bones tattoo", "a snake tattoo", "a scorpion tattoo", "a spider web tattoo", "a heart tattoo", "a ring of thorns tattoo", "a mermaid tattoo", "a dragon tattoo"];
	var dndclass      = ["barbarian", "bard", "cleric", "druid", "fighter", "monk", "rogue", "ranger", "paladin", "sorcerer", "warlock", "wizard"];
	var profession    = ["Actor", "Advocate", "Advisor", "Animal handler", "Apothecary", "Architect", "Archivist", "Armorer", "Astrologer", "Baker", "Banker", "Barber", "Barkeep", "Blacksmith", "Bookseller", "Brewer", "Bricklayer", "Brothel keeper", "Buccaneer", "Butcher", "Caravanner", "Carpenter", "Cartographer", "Chandler", "Chef", "Clock maker", "Cobbler", "Cook", "Counselor", "Courtesan", "Courtier", "Cowherd", "Dancer", "Diplomat", "Distiller", "Diver", "Farmer", "Fisherman", "Fishmonger", "Gardener", "General", "Gladiator", "Glovemaker", "Goldsmith", "Grocer", "Guardsman", "Guildmaster", "Hatmaker", "Healer", "Herald", "Herbalist", "Hermit", "Historian", "Hunter", "Ice seller", "Innkeeper", "Inventor", "Jailer", "Jester", "Jeweler", "Judge", "Knight", "Lady", "Leatherworker", "Librarian", "Linguist", "Locksmith", "Lord", "Lumberjack", "Mason", "Masseur", "Merchant", "Messenger", "Midwife", "Miller", "Miner", "Minister", "Minstrel", "Monk", "Mortician", "Necromancer", "Noble", "Nun", "Nurse", "Officer", "Painter", "Patissier", "Perfumer", "Philosopher", "Physician", "Pilgrim", "Potter", "Priest", "Privateer", "Professor", "Roofer", "Ropemaker", "Rugmaker", "Saddler", "Sailor", "Scabbard maker", "Sculptor", "Scavenger", "Scholar", "Seamstress", "Servant", "Shaman", "Shepherd", "Ship's captain", "Silversmith", "Slave", "Slaver", "Smith", "Soldier", "Spice Merchant", "Squire", "Stablehand", "Stevedore", "Stonemason", "Steward", "Street seller", "Street sweeper", "Student", "Surgeon", "Surveyor", "Sailor", "Tanner", "Tavernkeeper", "Tax collector", "Teacher", "Thatcher", "Thief", "Torturer", "Town crier", "Toymaker", "Vendor", "Veterinarian", "Vintner", "Weaver", "Wetnurse", "Woodcarver", "Wood seller", "Wrestler", "Writer"];
	var trait       = ["fidgets", "drinks too much", "eats too much", "swears often", "has poor hygiene", "cannot resist flirting", "cannot stop staring at you", "sweats profusely and easily", "is a habitual liar", "embellishes the truth", "exaggerates details", "has a short temper", "is melodramatic", "gossips about the most mundane things", "cannot resist a juicy secret", "chews with an open mouth", "often sniffs audibly", "is incredibly gullible", "is skeptical of everything", "paces about incessantly", "makes poor eye contact"];
	var currentmood = ["annoyed", "scared", "relaxed", "concerned", "bemused", "stressed", "amused", "content", "distracted"];
	var idle        = ["sitting, with a piece of bread in hand", "sitting, mug in hand", "poring over some map", "reading some letter intently", "reading a book", "shuffling a pack of cards", "chewing on a piece of hay", "sharpening a knife", "buffing a piece of armour", "polishing a shield", "sharpening the blade on a fearsome looking dagger", "cutting an apple into bite sized pieces", "biting into an apple", "eating an apple while looking at some book", "eating a hunk of cheese while reading a book", "sipping out of a huge mug while reading a book", "reading a book titled '<<print $book.pun.pluck()>>'", "reading a book titled '<<print $book.pun.pluck()>>'", "reading a book titled '<<print $book.pun.pluck()>>'"];
	var reading     = ["a piece of history- my forefather's journal, detailing his life in $town.name when it was just a settlement.", "my journal, from many years ago.", "my mother's journal, from just before she disappeared", "a document which I received by postboy two days ago... I believe it is in code, and somebody is trying to tell me something.", "a traitor's memoirs, extremely rare... I thought it would be a good laugh, but some of what he says is concerningly accurate.", "some sort of spell, though I don't know how to read it.", "a document I bought at the flea market; it looks to be a set of instructions on how to make a golem.", "a book which I bought, believing it to be blank, and suitable for a journal. However, now there's this strange foreign script that I can't read in it.", "a book that I bought as a gift for my mother, who loves beautiful covers, despite not being able to read."];


    switch (race) {
    case "human":
        eyeColours    = ["yellow", "amber", "brown", "hazel", "green", "blue", "gray", "aqua", "brown", "hazel", "green", "blue", "gray", "aqua", "purple", "pale brown", "pale blue", "pale green", "ash gray"].random();
        racesingular  = "person";
        raceplural    = "humans";
        raceadjective = "man";
        racelanguage  = "Common";
        height        = ["tiny", "short", "slightly below average height", "rather average height", "slightly above average height", "tall", "tall", "tall", "giraffe-like"].random();
        weight        = ["waif-like", "thin", "skinny", "skinny", "wiry", "thin", "stocky", "beefy", "muscular", "slightly underweight", "slightly overweight", "slightly overweight", "round", "tubby", "portly"].random();
        if (gender === "man") {
            firstname = State.variables.name.man.pluck();
        }
        else if (gender === "woman") {
            firstname = State.variables.name.woman.pluck();
        }
        break;

    case "elf":
        eyeColours    = ["yellow", "amber", "brown", "hazel", "green", "blue", "gray", "aqua", "purple", "pale brown", "pale blue", "pale green", "ash gray"].random();
        racesingular  = "elf";
        raceplural    = "elves";
        raceadjective = "elfish";
        racelanguage  = "Elven";
        height        = ["rather average height", "slightly above average height", "tall", "tall", "tall"].random();
        weight        = ["waif-like", "thin", "skinny", "skinny", "wiry", "thin", "stocky", "slightly underweight"].random();
        if (gender === "man") {
            firstname = State.variables.name.maleelf.pluck();
        }
        else if (gender === "woman") {
            firstname = State.variables.name.femaleelf.pluck();
        }
        break;

  	case "dwarf":
      eyeColours      = ["yellow", "amber", "brown", "dark brown", "hazel", "green", "blue", "gray", "brown", "dark brown", "hazel", "green", "blue", "gray", "aqua"].random();
  		racesingular    = "dwarf";
  		raceplural      = "dwarves";
  		raceadjective   = "dwarven";
  		racelanguage    = "Dwarven";
  		height          = ["short", "squat"].random();
      weight          = ["stocky", "beefy", "muscular", "slightly underweight", "slightly overweight", "slightly overweight", "round", "tubby", "portly"].random();
  		if (gender === "man") {
  			   firstname  = State.variables.name.maledwarf.pluck();
      }
  		else if (gender === "woman") {
  				 firstname = State.variables.name.femaledwarf.pluck();
  		}
      break;

  	case "halfling":
      eyeColours      = ["yellow", "amber", "brown", "hazel", "green", "blue", "gray", "aqua", "red", "purple", "pale brown", "pale blue", "pale green", "ash gray"].random();
  	  racesingular    = "halfling";
  		raceplural      = "hobbits";
  		raceadjective   = "halfling";
  		racelanguage    = "Halfling";
  		height          = ["short", "tiny", "diminuitive", "little"].random();
      weight          = ["waif-like", "thin", "skinny", "skinny", "wiry", "thin", "stocky", "beefy", "muscular", "slightly underweight"].random();
      if (gender === "man") {
          firstname = State.variables.name.malehalfling.pluck();
      }
      else if (gender === "woman") {
          firstname = State.variables.name.femalehalfling.pluck();
      }
      break;
  	case "half-orc":
      eyeColours      = ["yellow", "amber", "orange", "brown", "hazel", "yellow", "amber", "orange", "brown", "hazel", "green", "blue", "gray", "aqua", "red"].random();
  		racesingular    = "half-orc";
  		raceplural      = "half-orcs";
  		raceadjective   = "orcish";
  		racelanguage    = "Orcish";
  		height          = ["rather average height", "slightly above average height", "tall", "tall", "intimidatingly tall"].random();
  		weight          = ["slightly underweight", "stocky", "beefy", "muscular", "extremely muscular", "slightly overweight"].random();
  		if (gender === "man") {
  				 firstname = State.variables.name.maleorc.pluck();
      }
  			  else if (gender === "woman") {
  				 firstname = State.variables.name.femaleorc.pluck();
  		}
      break;

  	case "dragonborn":
      eyeColours      = ["yellow", "amber", "yellow", "amber", "brown", "hazel", "green", "blue", "gray", "aqua", "red", "purple", "aqua", "red", "purple", "gold", "gold"].random();
  		racesingular    = "drake";
  		raceplural      = "drakes";
  		raceadjective   = "draconian";
  		racelanguage    = "Draconic";
  		height          = ["rather average height", "slightly above average height", "tall", "tall", "tall"].random();
      weight          = ["stocky", "beefy", "muscular", "slightly underweight", "extremely muscular", "slightly overweight"].random();
      if (gender === "man") {
          firstname = State.variables.name.maledragonborn.pluck();
      }
      else if (gender === "woman") {
          firstname = State.variables.name.femaledragonborn.pluck();
      }
      break;

  	case "tiefling":
      eyeColours      = ["yellow", "amber", "brown", "hazel", "green", "blue", "aqua", "red", "purple", "pale brown", "pale blue", "pale green", "ash gray", "violet red", "aquamarine", "deep blue", "spring green", "sea green", "emerald green"].random();
  		racesingular    = "tiefling";
  		raceplural      = "tieflings";
  		raceadjective   = "devilish";
  		racelanguage    = "Demonic";
  		height          = ["tiny", "short", "slightly below average height", "rather average height", "slightly above average height", "tall", "tall", "tall", "giraffe-like"].random();
  		weight          = ["waif-like", "thin", "skinny", "skinny", "wiry", "thin", "stocky", "beefy", "muscular", "slightly underweight"].random();
  		if (gender === "man") {
  				 firstname = State.variables.name.maletiefling.pluck();
      }
  			  else if (gender === "woman") {
  				 firstname = State.variables.name.femaletiefling.pluck();
  		}
      break;

  	case "half-elf":
      eyeColours      = ["yellow", "amber", "brown", "hazel", "green", "blue", "gray", "aqua", "red", "purple", "pale brown", "pale blue", "pale green", "ash gray"].random();
  		racesingular    = "half-elf";
  		raceplural      = "half-elves";
  		raceadjective   = "elfish";
  		racelanguage    = "Elven";
  		height          = ["rather average height", "slightly above average height", "tall", "tall", "tall"].random();
      weight          = ["waif-like", "thin", "skinny", "skinny", "wiry", "thin", "stocky", "beefy", "muscular", "slightly underweight"].random();
      if (gender === "man") {
  				 firstname = [State.variables.name.man.pluck(), State.variables.name.maleelf.pluck()].random();
      }
  			  else if (gender === "woman") {
  				 firstname = [State.variables.name.woman.pluck(), State.variables.name.femaleelf.pluck()].random();
  		}
      break;

  	case "gnome":
      eyeColours      = ["yellow", "amber", "brown", "hazel", "green", "blue", "gray", "aqua", "red", "purple", "pale brown", "pale blue", "pale green", "ash gray"].random();
  		racesingular    = "gnome";
  		raceplural      = "gnomes";
  		raceadjective   = "gnomish";
  		racelanguage    = "Gnomish";
  		height          = ["short", "tiny"].random();
  		weight          = ["slightly underweight", "stocky", "beefy", "slightly overweight", "slightly overweight", "round", "tubby"].random();
      if (gender === "man") {
           firstname = State.variables.name.maledwarf.pluck();
      }
          else if (gender === "woman") {
           firstname = State.variables.name.femaledwarf.pluck();
      }
      break;
}
  return {
      gender        : gender,
      race          : race,
      age           : age,
      eyeColours    : eyeColours,
      racesingular  : racesingular,
      raceplural    : raceplural,
      raceadjective : raceadjective,
      racelanguage  : racelanguage,
      firstname     : firstname,
      lastname      : lastname,
      height        : height,
      weight        : weight,
      skinColours   : skinColours.random(),
      haircolour    : haircolour.random(),
      hairtype      : hairtype.random(),
      scar          : scar.random(),
      tattoo        : tattoo.random(),
      dndclass      : dndclass.random(),
      profession    : profession.random(),
      trait         : trait.random(),
      currentmood   : currentmood,
      idle          : idle,
      reading       : reading
  };

};
