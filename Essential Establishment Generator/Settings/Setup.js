setup.createBuilding = function() {
    var material = ["wooden", "wooden", "wooden", "wooden", "wooden", "stone", "stone", "stone", "stone", "hewn rock", "chiseled stone"];
    var purpose = ["home", "barber", "alchemist's shop", "blacksmithery", "temple", "tannery", "butchery", "library"];
    var outside = ["a horse grazing on the bushes nearby", "a rusted shovel near a somewhat overgrown flowerbed", "a well with an old rope, but no bucket to go on the end", "a dog panting by the door", "a cat lazily lounging in the shade", "a muddy pair of boots by the door", "a sign from the local paper which reads '$newspaperheadline'"];
    var disrepair = ["dilapidated", "ruined", "old", "somewhat rickety", "well-loved", "well-kept", "brand new"];

    return {
        material : material.random(),
        purpose : purpose.random(),
        outside : outside.random(),
        disrepair : disrepair.random()
    };
};

setup.createNPC = function () {
	var gender = ["man", "woman"],
  var race = ["human", "human", "human", "human", "human", "human", "half-elf", "half-elf", "elf", "elf", "dwarf", "dwarf", "gnome", "halfling", "half-orc", "dragonborn", "tiefling"];
	var age =  ["childlike", "rather young", "eighteen year old", "surprisingly young", "relatively young", "relatively young", "middle aged", "middle aged", "middle aged", "middle aged", "mid aged", "relatively old", "sun wizened", "quite old", "ancient"];
	var height = ["tiny", "short", "slightly below average height", "rather average height", "slightly above average height", "tall", "tall", "tall", "giraffe-like"];
	var weight = ["waif-like", "thin", "skinny", "skinny", "wiry", "thin", "stocky", "beefy", "muscular", "slightly underweight", "slightly overweight", "slightly overweight", "round", "tubby", "portly"];
	var haircolour = ["brunette", "brunette", "brown", "brownish", "muddy", "blonde", "blonde", "white", "black", "black"];
	var hairtype = ["thick", "wispy", "straight", "straight", "wavy", "wavy", "curly", "wiry", "oily", "lush", "poofy", "long", "braided", "very long", "greasy", "unruly", "unusually styled", "short cropped hair", "a shaved head"];
	var scar = ["a jagged scar", "a dark purple scar", "an angry red scar", "a long, thin scar running up the arm", "a scar on the eye", "a scar around the neck", "a scar on the throat", "a fiery red scar", "a finger missing", "two fingers missing"];
	var tattoo = ["a dagger tattoo", "an arrow tattoo", "an anchor tattoo", "a skull tattoo", "a pair of crossed bones tattoo", "a snake tattoo", "a scorpion tattoo", "a spider web tattoo", "a heart tattoo", "a ring of thorns tattoo", "a mermaid tattoo", "a dragon tattoo"];
	var dndclass = ["barbarian", "bard", "cleric", "druid", "fighter", "monk", "rogue", "ranger", "paladin", "sorcerer", "warlock", "wizard"];
	var profession = ["Actor", "Advocate", "Advisor", "Animal handler", "Apothecary", "Architect", "Archivist", "Armorer", "Astrologer", "Baker", "Banker", "Barber", "Barkeep", "Blacksmith", "Bookseller", "Brewer", "Bricklayer", "Brothel keeper", "Buccaneer", "Butcher", "Caravanner", "Carpenter", "Cartographer", "Chandler", "Chef", "Clock maker", "Cobbler", "Cook", "Counselor", "Courtesan", "Courtier", "Cowherd", "Dancer", "Diplomat", "Distiller", "Diver", "Farmer", "Fisherman", "Fishmonger", "Gardener", "General", "Gladiator", "Glovemaker", "Goldsmith", "Grocer", "Guardsman", "Guildmaster", "Hatmaker", "Healer", "Herald", "Herbalist", "Hermit", "Historian", "Hunter", "Ice seller", "Innkeeper", "Inventor", "Jailer", "Jester", "Jeweler", "Judge", "Knight", "Lady", "Leatherworker", "Librarian", "Linguist", "Locksmith", "Lord", "Lumberjack", "Mason", "Masseur", "Merchant", "Messenger", "Midwife", "Miller", "Miner", "Minister", "Minstrel", "Monk", "Mortician", "Necromancer", "Noble", "Nun", "Nurse", "Officer", "Painter", "Patissier", "Perfumer", "Philosopher", "Physician", "Pilgrim", "Potter", "Priest", "Privateer", "Professor", "Roofer", "Ropemaker", "Rugmaker", "Saddler", "Sailor", "Scabbard maker", "Sculptor", "Scavenger", "Scholar", "Seamstress", "Servant", "Shaman", "Shepherd", "Ship's captain", "Silversmith", "Slave", "Slaver", "Smith", "Soldier", "Spice Merchant", "Squire", "Stablehand", "Stevedore", "Stonemason", "Steward", "Street seller", "Street sweeper", "Student", "Surgeon", "Surveyor", "Sailor", "Tanner", "Tavernkeeper", "Tax collector", "Teacher", "Thatcher", "Thief", "Torturer", "Town crier", "Toymaker", "Vendor", "Veterinarian", "Vintner", "Weaver", "Wetnurse", "Woodcarver", "Wood seller", "Wrestler", "Writer"];
	var trait = ["fidgets", "drinks too much", "eats too much", "swears often", "has poor hygiene", "cannot resist flirting", "cannot stop staring at you", "sweats profusely and easily", "is a habitual liar", "embellishes the truth", "exaggerates details", "has a short temper", "is melodramatic", "gossips about the most mundane things", "cannot resist a juicy secret", "chews with an open mouth", "often sniffs audibly", "is incredibly gullible", "is skeptical of everything", "paces about incessantly", "makes poor eye contact"];
	var currentmood = ["annoyed", "scared", "relaxed", "concerned", "bemused", "stressed", "amused", "content", "distracted"];
	var idle = ["sitting, with a piece of bread in hand", "sitting, mug in hand", "poring over some map", "reading some letter intently", "reading a book", "shuffling a pack of cards", "chewing on a piece of hay", "sharpening a knife", "buffing a piece of armour", "polishing a shield", "sharpening the blade on a fearsome looking dagger", "cutting an apple into bite sized pieces", "biting into an apple", "eating an apple while looking at some book", "eating a hunk of cheese while reading a book", "sipping out of a huge mug while reading a book", "reading a book titled '<<print $book.pun.pluck()>>'", "reading a book titled '<<print $book.pun.pluck()>>'", "reading a book titled '<<print $book.pun.pluck()>>'"];
	var reading = ["a piece of history- my forefather's journal, detailing his life in $town.name when it was just a settlement.", "my journal, from many years ago.", "my mother's journal, from just before she disappeared", "a document which I received by postboy two days ago... I believe it is in code, and somebody is trying to tell me something.", "a traitor's memoirs, extremely rare... I thought it would be a good laugh, but some of what he says is concerningly accurate.", "some sort of spell, though I don't know how to read it.", "a document I bought at the flea market; it looks to be a set of instructions on how to make a golem.", "a book which I bought, believing it to be blank, and suitable for a journal. However, now there's this strange foreign script that I can't read in it.", "a book that I bought as a gift for my mother, who loves beautiful covers, despite not being able to read.", "a supposedly blank book but every time I open it different words appear in a strange language."];

  return {
      race : race.random(),
      gender  : gender.random()
    };

  switch (race) {

    case "human":
		 var racesingular = "person";
  	 var raceplural = "humans";
  	 var raceadjective = "man";
  	 var racelanguage = "Common";
  	 //var height = random("tiny", "short", "slightly below average height", "rather average height", "slightly above average height", "tall", "tall", "tall", "giraffe-like"),
  	 //var weight = random("waif-like", "thin", "skinny", "skinny", "wiry", "thin", "stocky", "beefy", "muscular", "slightly underweight", "slightly overweight", "slightly overweight", "round", "tubby", "portly")
  	 if (gender === "man") {
  			var firstname = State.variables.name.man.pluck()}
      else if (gender === "woman"){
  			var firstname = State.variables.name.woman.pluck()
      }
    break;

  	case "elf":
  		var racesingular = "elf";
  		var raceplural = "elves";
  		var raceadjective = "elfish";
  		var racelanguage = "Elven";
  		var height = ["rather average height", "slightly above average height", "tall", "tall", "tall"];
      var weight = ["waif-like", "thin", "skinny", "skinny", "wiry", "thin", "stocky", "slightly underweight"];
  		if (gender === "man"){
  				var firstname = State.variables.name.maleelf.pluck()}
  			  else if (gender === "woman"){
  				 var firstname = State.variables.name.femaleelf.pluck()
  		}
      break;

  	case "dwarf":
  		 var racesingular = "dwarf";
  		var raceplural = "dwarves";
  		var raceadjective = "dwarven";
  		var racelanguage = "Dwarven";
  		var height = ["short", "squat"];
      var weight = ["stocky", "beefy", "muscular", "slightly underweight", "slightly overweight", "slightly overweight", "round", "tubby", "portly"];
  		if (gender === "man"){
  				 var firstname = State.variables.name.maledwarf.pluck()}
  			  else if (gender === "woman"){
  				 var firstname = State.variables.name.femaledwarf.pluck()
  		}
      break;

  	case "halfling":
  		 var racesingular = "halfling";
  		var raceplural = "hobbits";
  		var raceadjective = "halfling";
  		var racelanguage = "Halfling";
  		var height = ["short", "tiny", "diminuitive", "little"];
      var weight = ["waif-like", "thin", "skinny", "skinny", "wiry", "thin", "stocky", "beefy", "muscular", "slightly underweight"];
      break;
  	case "half-orc":
  		 var racesingular = "half-orc";
  		var raceplural = "half-orcs";
  		var raceadjective = "orcish";
  		var racelanguage = "Orcish";
  		var height = ["rather average height", "slightly above average height", "tall", "tall", "intimidatingly tall"];
  		var weight = ["slightly underweight", "stocky", "beefy", "muscular", "extremely muscular", "slightly overweight"];
  		if (gender === "man"){
  				 var firstname = State.variables.name.maleorc.pluck()}
  			  else if (gender === "woman"){
  				 var firstname = State.variables.name.femaleorc.pluck()
  		}
      break;

  	case "dragonborn":
  		 var racesingular = "drake";
  		var raceplural = "drakes";
  		var raceadjective = "draconian";
  		var racelanguage = "Draconic";
  		var height = ["rather average height", "slightly above average height", "tall", "tall", "tall"];
      var weight = ["stocky", "beefy", "muscular", "slightly underweight", "extremely muscular", "slightly overweight"];
      break;
  	case "tiefling":
  		 var racesingular = "tiefling";
  		var raceplural = "tieflings";
  		var raceadjective = "devilish";
  		var racelanguage = "Demonic";
  		var height = ["tiny", "short", "slightly below average height", "rather average height", "slightly above average height", "tall", "tall", "tall", "giraffe-like"];
  		var weight = ["waif-like", "thin", "skinny", "skinny", "wiry", "thin", "stocky", "beefy", "muscular", "slightly underweight"];
  		if (gender === "man"){
  				 var firstname = State.variables.name.maletiefling.pluck()}
  			  else if (gender === "woman"){
  				 var firstname = State.variables.name.femaletiefling.pluck()
  		}
      break;

  	case "half-elf":
  		 var racesingular = "half-elf";
  		var raceplural = "half-elves";
  		var raceadjective = "elfish";
  		var racelanguage = "Elven";
  		var height = ["rather average height", "slightly above average height", "tall", "tall", "tall"];
      var weight = ["waif-like", "thin", "skinny", "skinny", "wiry", "thin", "stocky", "beefy", "muscular", "slightly underweight"];
      if (gender === "man"){
  				 var firstname = [State.variables.name.man.pluck(), State.variables.name.maleelf.pluck()]}
  			  else if (gender === "woman"){
  				 var firstname = [State.variables.name.woman.pluck(), State.variables.name.femaleelf.pluck()]
  		}
      break;

  	case "gnome":
  		 var racesingular = "gnome";
  		var raceplural = "gnomes";
  		var raceadjective = "gnomish";
  		var racelanguage = "Gnomish";
  		var height = ["short", "tiny"];
  		var weight = ["slightly underweight", "stocky", "beefy", "slightly overweight", "slightly overweight", "round", "tubby"];
      if (gender === "man"){
           var firstname = State.variables.name.maledwarf.pluck()}
          else if (gender === "woman"){
           var firstname = State.variables.name.femaledwarf.pluck()
      }
      break;
}
  return {
      gender : gender.random(),
      race : race.random(),
      height : height.random(),
      weight : weight.random(),
      haircolour : haircolour.random(),
      hairtype : hairtype.random(),
      scar : scar.random(),
      tattoo : tattoo.random(),
      dndclass : dndclass.random(),
      profession : profession.random(),
      trait : trait.random(),
      weight : weight.random(),
      haircolour : haircolour.random(),
  };

};
