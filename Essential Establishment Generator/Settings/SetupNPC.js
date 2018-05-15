setup.createNPC = function() {
	var gender        = ["man", "woman"].random();
	var heshe;
	var himher;
	var hisher;
	var himherself;
	var hisherself;
	var boygirl;
	var manwoman;
	var menwomen;
	var guygirl;
  var race          = ["human", "human", "human", "human", "human", "human", "half-elf", "half-elf", "elf", "elf", "dwarf", "dwarf", "gnome", "halfling", "half-orc", "dragonborn", "tiefling"].random();
	var racenote;
	var physicaltrait;
	var firstname;
  var lastname      = State.variables.name.last.random();
	var name;
	var age           =  ["childlike", "rather young", "eighteen year old", "surprisingly young", "relatively young", "relatively young", "middle aged", "middle aged", "middle aged", "middle aged", "middle aged", "relatively old", "sun wizened", "quite old", "ancient"].random();
  var eyes;
  var racesingular;
  var raceplural;
  var raceadjective;
  var racelanguage;
  var height;
  var weight;
	var demeanour			= ["calm", "moody", "kind", "conceited", "cruel", "mean", "careful", "polite", "happy"].random();
	var adventure			= ["retired from adventuring", "currently looking for an adventure", "looking for assistance", "recuperating from an adventure", "on a holiday from adventuring", "taking a short break from adventuring"].random();
  var skinColours   = ["translucent", "white", "pale", "fair", "light", "light tan", "tan", "pale", "fair", "light", "light tan", "tan", "dark tan", "brown"];
  var haircolour    = ["brunette", "brunette", "brown", "brownish", "auburn", "amber", "hazel", "redhead", "dark redhead", "blonde", "dark blonde", "white", "platinum", "black", "black"].random();
	var hairtype      = ["thick", "wispy", "straight", "straight", "wavy", "wavy", "curly", "wiry", "oily", "lush", "poofy", "long", "braided", "very long", "greasy", "unruly", "unusually styled", "short cropped hair"].random();
	var hair					= hairtype + " " + haircolour + " hair";
	var scar          = ["a jagged scar", "a dark purple scar", "an angry red scar", "a long, thin scar running up the arm", "a scar on the eye", "a scar around the neck", "a scar on the throat", "a fiery red scar", "a finger missing", "two fingers missing"].random();
	var tattoo        = ["a dagger tattoo", "an arrow tattoo", "an anchor tattoo", "a skull tattoo", "a pair of crossed bones tattoo", "a snake tattoo", "a scorpion tattoo", "a spider web tattoo", "a heart tattoo", "a ring of thorns tattoo", "a mermaid tattoo", "a dragon tattoo"].random();
	var dndclass      = ["barbarian", "bard", "cleric", "druid", "fighter", "monk", "rogue", "ranger", "paladin", "sorcerer", "warlock", "wizard"].random();
	var background	  = ["acolyte", "charlatan", "criminal", "entertainer", "folk hero", "guild artisan", "hermit", "noble", "outlander", "sage", "sailor", "soldier", "urchin"].random();
	var bond;
	var profession    = ["Actor", "Advocate", "Advisor", "Animal handler", "Apothecary", "Architect", "Archivist", "Armorer", "Astrologer", "Baker", "Banker", "Barber", "Barkeep", "Blacksmith", "Bookseller", "Brewer", "Bricklayer", "Brothel keeper", "Buccaneer", "Butcher", "Caravanner", "Carpenter", "Cartographer", "Chandler", "Chef", "Clock maker", "Cobbler", "Cook", "Counselor", "Courtesan", "Courtier", "Cowherd", "Dancer", "Diplomat", "Distiller", "Diver", "Farmer", "Fisherman", "Fishmonger", "Gardener", "General", "Gladiator", "Glovemaker", "Goldsmith", "Grocer", "Guardsman", "Guildmaster", "Hatmaker", "Healer", "Herald", "Herbalist", "Hermit", "Historian", "Hunter", "Ice seller", "Innkeeper", "Inventor", "Jailer", "Jester", "Jeweler", "Judge", "Knight", "Lady", "Leatherworker", "Librarian", "Linguist", "Locksmith", "Lord", "Lumberjack", "Mason", "Masseur", "Merchant", "Messenger", "Midwife", "Miller", "Miner", "Minister", "Minstrel", "Monk", "Mortician", "Necromancer", "Noble", "Nun", "Nurse", "Officer", "Painter", "Patissier", "Perfumer", "Philosopher", "Physician", "Pilgrim", "Potter", "Priest", "Privateer", "Professor", "Roofer", "Ropemaker", "Rugmaker", "Saddler", "Sailor", "Scabbard maker", "Sculptor", "Scavenger", "Scholar", "Seamstress", "Servant", "Shaman", "Shepherd", "Ship's captain", "Silversmith", "Slave", "Slaver", "Smith", "Soldier", "Spice Merchant", "Squire", "Stablehand", "Stevedore", "Stonemason", "Steward", "Street seller", "Street sweeper", "Student", "Surgeon", "Surveyor", "Sailor", "Tanner", "Tavernkeeper", "Tax collector", "Teacher", "Thatcher", "Thief", "Torturer", "Town crier", "Toymaker", "Vendor", "Veterinarian", "Vintner", "Weaver", "Wetnurse", "Woodcarver", "Wood seller", "Wrestler", "Writer"];
	var trait       = ["fidgets", "drinks too much", "eats too much", "swears often", "has poor hygiene", "cannot resist flirting", "cannot stop staring at you", "sweats profusely and easily", "is a habitual liar", "embellishes the truth", "exaggerates details", "has a short temper", "is melodramatic", "gossips about the most mundane things", "cannot resist a juicy secret", "chews with an open mouth", "often sniffs audibly", "is incredibly gullible", "is skeptical of everything", "paces about incessantly", "makes poor eye contact"];
	var currentmood = ["annoyed", "scared", "relaxed", "concerned", "bemused", "stressed", "amused", "content", "distracted"];
	var idle        = ["sitting, with a piece of bread in hand", "sitting, mug in hand", "poring over some map", "reading some letter intently", "reading a book", "shuffling a pack of cards", "chewing on a piece of hay", "sharpening a knife", "buffing a piece of armour", "polishing a shield", "sharpening the blade on a fearsome looking dagger", "cutting an apple into bite sized pieces", "biting into an apple", "eating an apple while looking at some book", "eating a hunk of cheese while reading a book", "sipping out of a huge mug while reading a book", "reading a book titled '<<print $book.pun.pluck()>>'", "reading a book titled '<<print $book.pun.pluck()>>'", "reading a book titled '<<print $book.pun.pluck()>>'"];
	var reading     = ["a piece of history- my forefather's journal, detailing his life in $town.name when it was just a settlement.", "my journal, from many years ago.", "my mother's journal, from just before she disappeared", "a document which I received by postboy two days ago... I believe it is in code, and somebody is trying to tell me something.", "a traitor's memoirs, extremely rare... I thought it would be a good laugh, but some of what he says is concerningly accurate.", "some sort of spell, though I don't know how to read it.", "a document I bought at the flea market; it looks to be a set of instructions on how to make a golem.", "a book which I bought, believing it to be blank, and suitable for a journal. However, now there's this strange foreign script that I can't read in it.", "a book that I bought as a gift for my mother, who loves beautiful covers, despite not being able to read."];
	var pockets			= ["5 cp", "6 cp", "15 cp", "22 cp", "27 cp", "5 sp", "5 sp", "6 sp", "7 sp", "2 gp", "34 cp and 4 sp", "12 sp and 7 gp", "a clove of garlic", "a vial of ink worth 8sp", "hardtack", "an explosive rune, dealing 2d4 fire damage", "a palm-sized glass sphere", "a wooden comb", "fragments of a shattered sword", "a deck of tarot cards", "map of a nearby castle", "map of the local area", "a tin spoon", "a mess kit", "lacy undergarments", "spectacles worth 5gp", "a spool of thread", "a piece of chalk", "a necklace of animal teeth", "a headhunter's contract", "a list of people in a nearby city", "a worn leather strap", "a ring of iron keys", "a flask full of salt water", "a box of candles", "a vial of quicksilver", "a traveller's journal", "a lead amulet", "a signet ring for a noble house", "a list of local taverns", "a golden yellow topaz gem worth 50gp", "a page torn from a spellbook", "scraps of bad poetry", "a pair of bloodstained gloves", "thirteen mouse teeth", "a pouch full of dried berries", "an invitation to a wedding that happened a few weeks ago", "a brass ring", "a shopping list", "the cork from a wine bottle", "a scrap of paper with uninteligible writing on it", "a smoking pipe", "a pouch of ruby powder", "a deed to a ruined tower", "a bottle of honey", "a sling with 10 bullets", "a broken buckle", "a knot of silk ribbons", "a silver pearl worth 10gp", "a potion of Polymorph Self worth 350gp", "1pp wrapped in a crude map", "pocket sand", "a wedge of cheese", "a string of wooden prayer beads", "a lock of hair", "a dead mouse", "a compass", "an empty flask", "85gp", "three diamonds worth 30gp each", "a black pearl worth 50gp", "a black opal worth 100gp"].random();

	if (typeof State.temporary.gender !== 'undefined') {
			//if the variable _gender is defined
			gender				= State.temporary.gender;
	}

	if (typeof State.temporary.race !== 'undefined') {
			//if the variable _race is defined
			race				= State.temporary.race;
	}

	if (typeof State.temporary.dndclass !== 'undefined') {
			//if the variable _dndclass is defined
			dndclass				= State.temporary.dndclass;
	}

	if (typeof State.temporary.age !== 'undefined') {
			//if the variable _age is defined
			age				= State.temporary.age;
	}

	if (typeof State.temporary.weight !== 'undefined') {
			//if the variable _weight is defined
			weight				= State.temporary.weight;
	}

	if (typeof State.temporary.height !== 'undefined') {
			//if the variable _height is defined
			height				= State.temporary.height;
	}

	if (typeof State.temporary.demeanour !== 'undefined') {
			//if the variable _demeanour is defined
			demeanour				= State.temporary.demeanour;
	}

	switch (gender) {
		case "man":
			heshe 				= "he";
			himher 				= "him";
			himherself		= "himself";
			hisher 				= "his";
			hisherself		= "hisself";
			boygirl			  = "boy";
			manwoman 			= "man";
			menwomen 			= "men";
			guygirl 			= "guy";
			break;
		case "woman":
			heshe 				= "she";
			himher			  = "her";
			himherself		= "herself";
			hisher 				= "her";
			hisherself		= "herself";
			boygirl			  = "girl";
			manwoman 			= "woman";
			menwomen		  = "women";
			guygirl 			= "girl";
}

var physicaltraitroll = Math.floor(Math.random() * 10) + 1;
		if (physicaltraitroll > 8)
		{
				physicaltrait = scar;
		}
		else if (physicaltraitroll > 6)
		{
				physicaltrait = tattoo;
		}
		else if (physicaltraitroll <= 6)
		{
				physicaltrait = hair;
		}


    switch (race) {
    case "human":
        eyes   			  = ["yellow", "amber", "brown", "hazel", "green", "blue", "gray", "aqua", "brown", "hazel", "green", "blue", "gray", "aqua", "purple", "pale brown", "pale blue", "pale green", "ash gray"].random();
        racesingular  = "person";
        raceplural    = "humans";
        raceadjective = "man";
        racelanguage  = "Common";
        height        = ["tiny", "short", "slightly below average height", "rather average height", "slightly above average height", "tall", "tall", "tall", "giraffe-like"].random();
				weight        = ["waif-like", "thin", "skinny", "skinny", "wiry", "thin", "stocky", "beefy", "muscular", "slightly underweight", "slightly overweight", "slightly overweight", "round", "tubby", "portly"].random();
				racenote 			= height + " " + gender;
			  if (gender === "man") {
            firstname = State.variables.name.man.pluck();
        }
        else if (gender === "woman") {
            firstname = State.variables.name.woman.pluck();
        }
        break;

    case "elf":
        eyes  			  = ["yellow", "amber", "brown", "hazel", "green", "blue", "gray", "aqua", "purple", "pale brown", "pale blue", "pale green", "ash gray"].random();
        racesingular  = "elf";
				racenote 			= race;
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
      eyes     			  = ["yellow", "amber", "brown", "dark brown", "hazel", "green", "blue", "gray", "brown", "dark brown", "hazel", "green", "blue", "gray", "aqua"].random();
  		racesingular    = "dwarf";
			racenote 				= race;
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
      eyes   			    = ["yellow", "amber", "brown", "hazel", "green", "blue", "gray", "aqua", "red", "purple", "pale brown", "pale blue", "pale green", "ash gray"].random();
  	  racesingular    = "halfling";
			racenote 				= race;
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
      eyes    			  = ["yellow", "amber", "orange", "brown", "hazel", "yellow", "amber", "orange", "brown", "hazel", "green", "blue", "gray", "aqua", "red"].random();
  		racesingular    = "half-orc";
			racenote 				= race;
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
      eyes     			  = ["yellow", "amber", "yellow", "amber", "brown", "hazel", "green", "blue", "gray", "aqua", "red", "purple", "aqua", "red", "purple", "gold", "gold"].random();
  		racesingular    = "drake";
			racenote 				= race;
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
      eyes     			  = ["yellow", "amber", "brown", "hazel", "green", "blue", "aqua", "red", "purple", "pale brown", "pale blue", "pale green", "ash gray", "violet red", "aquamarine", "deep blue", "spring green", "sea green", "emerald green"].random();
  		racesingular    = "tiefling";
			racenote 				= race;
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
      eyes   			    = ["yellow", "amber", "brown", "hazel", "green", "blue", "gray", "aqua", "red", "purple", "pale brown", "pale blue", "pale green", "ash gray"].random();
  		racesingular    = "half-elf";
			racenote 				= race;
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
      eyes   			    = ["yellow", "amber", "brown", "hazel", "green", "blue", "gray", "aqua", "red", "purple", "pale brown", "pale blue", "pale green", "ash gray"].random();
  		racesingular    = "gnome";
			racenote 				= race;
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

	switch (dndclass) {
			case "barbarian":
			background = ["charlatan", "criminal", "folk hero", "hermit", "hermit", "hermit", "hermit", "hermit", "outlander", "outlander", "outlander", "outlander", "outlander", "sailor", "soldier", "soldier", "soldier", "urchin"].random();
			break;
			case "bard":
			background = ["charlatan", "charlatan", "criminal", "entertainer", "entertainer", "entertainer", "entertainer", "entertainer", "entertainer", "folk hero", "folk hero", "guild artisan", "guild artisan", "noble", "outlander", "sailor", "soldier", "urchin"].random();
			break;
			case "cleric":
			background = ["acolyte", "acolyte", "acolyte", "acolyte", "acolyte", "charlatan", "criminal", "entertainer", "folk hero", "folk hero", "folk hero", "guild artisan", "guild artisan", "hermit", "hermit", "noble", "noble", "noble", "sage", "sage", "sage", "sage", "sailor", "soldier", "urchin"].random();
			break;
			case "druid":
			background = ["acolyte", "acolyte", "acolyte", "charlatan", "folk hero", "folk hero", "folk hero", "hermit", "hermit", "hermit", "hermit", "hermit", "noble", "noble", "outlander", "outlander", "outlander", "outlander", "sage", "sage", "sage", "sailor", "soldier", "urchin"].random();
			break;
			case "fighter":
			background = ["acolyte", "charlatan", "criminal", "criminal", "criminal", "entertainer", "folk hero", "folk hero", "folk hero", "guild artisan", "hermit", "noble", "outlander", "outlander", "sage", "sailor", "sailor", "sailor", "soldier", "soldier", "soldier", "soldier", "soldier", "soldier", "urchin"].random();
			break;
			case "monk":
			background = ["acolyte", "acolyte", "acolyte", "acolyte", "charlatan", "criminal", "folk hero", "guild artisan", "hermit", "hermit", "hermit", "noble", "noble", "outlander", "sage", "sage", "sage", "soldier", "urchin"].random();
			break;
			case "rogue":
			background = ["charlatan", "charlatan", "charlatan", "criminal", "criminal", "criminal", "criminal", "criminal", "criminal", "folk hero", "folk hero", "guild artisan", "guild artisan", "hermit", "noble", "noble", "outlander", "sailor", "soldier", "urchin", "urchin", "urchin", "urchin", "urchin"].random();
			break;
			case "ranger":
			background = ["acolyte", "acolyte", "charlatan", "criminal", "entertainer", "folk hero", "folk hero", "folk hero", "folk hero", "guild artisan", "hermit", "hermit", "hermit", "hermit", "outlander", "outlander", "outlander", "outlander", "sage", "sailor", "soldier", "soldier", "soldier", "urchin"].random();
			break;
			case "paladin":
			background = ["acolyte", "acolyte", "acolyte", "acolyte", "charlatan", "criminal", "entertainer", "folk hero", "folk hero", "folk hero", "folk hero", "guild artisan", "hermit", "noble", "noble", "noble", "noble", "noble", "outlander", "sage", "sailor", "soldier", "soldier", "soldier", "soldier", "soldier", "urchin", "urchin", "urchin", "urchin"].random();
			break;
			case "sorcerer":
			background = ["acolyte", "acolyte", "acolyte", "acolyte", "charlatan", "charlatan", "charlatan", "charlatan", "criminal", "entertainer", "entertainer", "folk hero", "folk hero", "guild artisan", "hermit", "noble", "noble", "noble", "outlander", "sage", "sage", "sage", "sailor", "soldier", "urchin"].random();
			break;
			case "warlock":
			background = ["acolyte", "acolyte", "acolyte", "acolyte", "acolyte", "acolyte", "charlatan", "criminal", "entertainer", "folk hero", "guild artisan", "hermit", "hermit", "hermit", "hermit", "hermit", "hermit", "noble", "noble", "noble", "outlander", "sage", "sage", "sage", "sage", "sage", "sailor", "soldier", "urchin"].random();
			break;
			case "wizard":
			background = ["acolyte", "acolyte", "acolyte", "acolyte", "acolyte", "acolyte", "charlatan", "criminal", "entertainer", "folk hero", "guild artisan", "hermit", "hermit", "hermit", "hermit", "hermit", "hermit", "noble", "noble", "noble", "outlander", "sage", "sage", "sage", "sage", "sage", "sailor", "soldier", "urchin"].random();
			break;
		}


		switch (background) {
			case "acolyte":
			bond = ["I would die to recover an ancient artifact of my faith that was lost long ago.",
			"I will someday get revenge on the corrupt temple hierarchy who branded me a heretic.",
			"I owe me life to the priest <<print $name.man.pluck()>> who took me in when my parents died.",
			"Everything I do is for the common people.",
			"I will do anything to protect the temple where I served.",
			"I seek to preserve a sacred text that my enemies consider heretical and seek to destroy."].random();
			break;
			case "charlatan":
			bond = ["I fleeced the wrong person, a lord called <<print $name.man.pluck()>>, and must work to ensure that he never crosses paths with me or those I care about.",
			"I owe everything to my mentor <<print $name.man.pluck()>>--a horrible person who's probably rotting in jail somewhere.",
			"Somewhere out there I have a child, litte <<print $name.man.pluck()>>, who doesn't know me. I'm going to try and make the world better for him.",
			"I come from a noble family, and one day I'll reclaim my lands and title from those who stole them from me.",
			"A powerful person, Lord <<print $name.man.pluck()>>, killed someone I love. Some day soon, I'll have my revenge.",
			"I swindled and ruined a person who didn't deserve it, and now I seek to atone for my misdeeds but might never be able to forgive myself."].random();
			break;
			case "criminal":
			bond = ["I'm trying to pay off an old debt I owe to a generous benefactor.",
			"My ill-gotten gains go to support my family.",
			"Something important was taken from me, and I aim to steal it back.",
			"I will become the greatest thief that ever lived.",
			"I'm guilty of a terrible crime. I hope I can redeem myself for it.",
			"Someone I loved died because of a mistake I made. That will never happen again."].random();
			break;
			case "entertainer":
			bond = ["My instrument is my most treasured possession, and it reminds me of someone I love.",
			"Someone stole my precious instrument, and someday I'll get it back.",
			"I want to be famous, whatever it takes.",
			"I idolize a hero of the old tales and measure my deeds against that person's.",
			"I will do anything to prove myself superior to my hated rival.",
			"I would do anything for the other members of my old party."].random();
			break;
			case "folk hero":
			bond = ["I have a family, but I have no idea where they are.  One day, I hope to see them again.",
			"I worked the land, I love the land, and I will protect the land.",
			"A proud noble once gave me a horrible beating, and I will take my revenge on any bully I encounter.",
			"My tools are symbols of my past life, and I carry them so that I will never forget my roots.",
			"I protect those who cannot protect themselves.",
			"I wish my childhood sweetheart had come with me to pursue my destiny."].random();
			break;
			case "guild artisan":
			bond = ["The workshop where I learned my trade is the most important place in the world to me.",
			"I created a great work for someone, and then found them unworthy to receive it; I'm still looking for someone worthy.",
			"I owe my guild a great debt for forging me into the person I am today.",
			"I pursue wealth to secure someone's love.",
			"One day I will return to my guild and prove that I am the greatest artisan of them all.",
			"I will get revenge on the evil forces that destroyed my place of business and ruined my livelihood."].random();
			break;
			case "hermit":
			bond = ["Nothing is more important than the other members of my hermitage, order, or association.",
			"I entered seclusion to hide from the ones who might still be hunting me. I must someday confront them.",
			"I'm still seeking the enlightenment I pursued in my seclusion, and it still eludes me.",
			"I entered seclusion because I loved someone I could not have.",
			"Should my discovery come to light, it could bring ruin to the world.",
			"My isolation gave me great insight into a great evil that only I can destroy."].random();
			break;
			case "noble":
			bond = ["I will face any challenge to win the approval of my family.",
			"My house's alliance with another noble family must be sustained at all costs.",
			"Nothing is more important that the other members of my family.",
			"I am in love with the heir of a family that my family despises.",
			"My loyalty to my sovereign is unwavering.",
			"The common folk must see me as a hero of the people."].random();
			break;
			case "outlander":
			bond = ["My family, clan, or tribe is the most important thing in my life, even when they are far from me.",
			"An injury to the unspoiled wilderness of my home is an injury to me.",
			"I will bring terrible wrath down on the evildoers who destroyed my homeland.",
			"I am the last of my tribe, and it is up to me to ensure their names enter legend.",
			"I suffer awful visions of a coming disaster and will do anything to prevent it.",
			"It is my duty to provide children to sustain my tribe."].random();
			break;
			case "sage":
			bond = ["It is my duty to protect my students.",
			"I have an ancient text that holds terrible secrets that must not fall into the wrong hands.",
			"I work to preserve a library, university, scriptorium, or monastery.",
			"My life's work is a series of tomes related to a specific field of lore.",
			"I've been searching my whole life for the answer to a certain question.",
			"I sold my soul for knowledge; I hope to do great deeds and win it back."].random();
			break;
			case "sailor":
			bond = ["I'm loyal to my captain first, everything else second.",
			"The ship is most important--crewmates and captains come and go.",
			"I'll always remember my first ship.",
			"In a harbor town, I have a paramour whose eyes nearly stole me from the sea.",
			"I was cheated of my fair share of the profits, and I want to get my due.",
			"Ruthless pirates murdered my captain and crewmates, plundered our ship, and left me to die. Vengeance will be mine."].random();
			break;
			case "soldier":
			bond = ["I would lay down my life for the people I served with.",
			"Someone saved my life on the battlefield. To this day, I will never leave a friend behind.",
			"My honor is my life.",
			"I'll never forget the crushing defeat my company suffered or the enemies who dealt it.",
			"Those who fight beside me are those worth dying for.",
			"I fight for those who cannot fight for themselves."].random();
			break;
			case "urchin":
			bond = ["My town or city is my home, and I'll fight to defend it.",
			"I sponsor an orphanage to keep others from enduring what I was forced to endure.",
			"I owe my survival to another urchin who taught me to live on the streets.",
			"I owe a debt I can never repay to the person who took pity on me.",
			"I escaped my life of poverty by robbing an important person, and I'm wanted for it.",
			"No one else is going to have to endure the hardships I've been through."].random();
			break;
}

		var name 					= firstname + " " + lastname;

  return {
      gender        : gender,
			heshe					: heshe,
			himher				: himher,
			himherself		: himherself,
			hisherself		: hisherself,
			hisher				: hisher,
			boygirl				: boygirl,
			manwoman			: manwoman,
			menwomen			: menwomen,
			guygirl				: guygirl,
      race          : race,
      age           : age,
      eyes   			  : eyes,
			racenote			: racenote,
			physicaltrait : physicaltrait,
      racesingular  : racesingular,
      raceplural    : raceplural,
      raceadjective : raceadjective,
      racelanguage  : racelanguage,
			name					: name,
      firstname     : firstname,
      lastname      : lastname,
      height        : height,
      weight        : weight,
			demeanour			: demeanour,
      skinColours   : skinColours.random(),
      haircolour    : haircolour,
      hairtype      : hairtype,
			hair					: hair,
      scar          : scar,
      tattoo        : tattoo,
      dndclass      : dndclass,
			background		: background,
			bond					: bond,
			adventure			: adventure,
      profession    : profession.random(),
      trait         : trait.random(),
      currentmood   : currentmood,
      idle          : idle,
      reading       : reading,
			pockets				: pockets
  };

};
