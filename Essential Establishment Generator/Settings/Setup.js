setup.createBuilding = function () {
    var material = ["wooden", "wooden", "wooden", "wooden", "wooden", "stone", "stone", "stone", "stone", "hewn rock", "chiseled stone"];
    var purpose = ["home", "barber", "alchemist's shop", "blacksmithery", "temple", "tannery", "butchery", "library"];
    var outside: ["a horse grazing on the bushes nearby", "a rusted shovel near a somewhat overgrown flowerbed", "a well with an old rope, but no bucket to go on the end", "a dog panting by the door", "a cat lazily lounging in the shade", "a muddy pair of boots by the door", "a sign from the local paper which reads '$newspaperheadline'"],
    disrepair: ["dilapidated", "ruined", "old", "somewhat rickety", "well-loved", "well-kept", "brand new"];

    return {
        material : material.random(),
        purpose  : purpose.random(),
        outside  : outside.random(),
        disrepair  : disrepair.random(),
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
	currentmood = ["annoyed", "scared", "relaxed", "concerned", "bemused", "stressed", "amused", "content", "distracted"];
	var idle = ["sitting, with a piece of bread in hand", "sitting, mug in hand", "poring over some map", "reading some letter intently", "reading a book", "shuffling a pack of cards", "chewing on a piece of hay", "sharpening a knife", "buffing a piece of armour", "polishing a shield", "sharpening the blade on a fearsome looking dagger", "cutting an apple into bite sized pieces", "biting into an apple", "eating an apple while looking at some book", "eating a hunk of cheese while reading a book", "sipping out of a huge mug while reading a book", "reading a book titled '<<print $book.pun.pluck()>>'", "reading a book titled '<<print $book.pun.pluck()>>'", "reading a book titled '<<print $book.pun.pluck()>>'"];
	var reading = ["a piece of history- my forefather's journal, detailing his life in $town.name when it was just a settlement.", "my journal, from many years ago.", "my mother's journal, from just before she disappeared", "a document which I received by postboy two days ago... I believe it is in code, and somebody is trying to tell me something.", "a traitor's memoirs, extremely rare... I thought it would be a good laugh, but some of what he says is concerningly accurate.", "some sort of spell, though I don't know how to read it.", "a document I bought at the flea market; it looks to be a set of instructions on how to make a golem.", "a book which I bought, believing it to be blank, and suitable for a journal. However, now there's this strange foreign script that I can't read in it.", "a book that I bought as a gift for my mother, who loves beautiful covers, despite not being able to read.", "a supposedly blank book but every time I open it different words appear in a strange language."];

  switch $npc.race {
  	case "human":
  		<<set $npc.racesingular to "person",
  	$npc.raceplural to "humans",
  	$npc.raceadjective to "man",
  	$npc.racelanguage to "Common",
  	$npc.height to either("tiny", "short", "slightly below average height", "rather average height", "slightly above average height", "tall", "tall", "tall", "giraffe-like"),
  	$npc.weight to either("waif-like", "thin", "skinny", "skinny", "wiry", "thin", "stocky", "beefy", "muscular", "slightly underweight", "slightly overweight", "slightly overweight", "round", "tubby", "portly")>>
  	<<if $npc.gender is "man">>
  			<<set $npc.firstname to $name.man.pluck()>>
  		<<elseif $npc.gender is "woman">>
  			<<set $npc.firstname to $name.woman.pluck()>>
  	<</if>>
      break;
  	case "elf":
  		<<set $npc.racesingular to "elf",
  		$npc.raceplural to "elves",
  		$npc.raceadjective to "elfish",
  		$npc.racelanguage to "Elven",
  		$npc.height to either("rather average height", "slightly above average height", "tall", "tall", "tall"), $npc.weight to either("waif-like", "thin", "skinny", "skinny", "wiry", "thin", "stocky", "slightly underweight")>>
  		<<if $npc.gender is "man">>
  				<<set $npc.firstname to $name.maleelf.pluck()>>
  			<<elseif $npc.gender is "woman">>
  				<<set $npc.firstname to $name.femaleelf.pluck()>>
  		<</if>>
      break;
  	case "dwarf":
  		<<set $npc.racesingular to "dwarf",
  		$npc.raceplural to "dwarves",
  		$npc.raceadjective to "dwarven",
  		$npc.racelanguage to "Dwarven",
  		$npc.height to either("short", "squat"), $npc.weight to either("stocky", "beefy", "muscular", "slightly underweight", "slightly overweight", "slightly overweight", "round", "tubby", "portly")>>
  		<<if $npc.gender is "man">>
  				<<set $npc.firstname to $name.maledwarf.pluck()>>
  			<<elseif $npc.gender is "woman">>
  				<<set $npc.firstname to $name.femaledwarf.pluck()>>
  		<</if>>
      break;
  	case "halfling":
  		<<set $npc.racesingular to "halfling",
  		$npc.raceplural to "hobbits",
  		$npc.raceadjective to "halfling",
  		$npc.racelanguage to "Halfling",
  		$npc.height to either("short", "tiny", "diminuitive", "little"),
      $npc.weight to either("waif-like", "thin", "skinny", "skinny", "wiry", "thin", "stocky", "beefy", "muscular", "slightly underweight")>>
      break;
  	case "half-orc":
  		<<set $npc.racesingular to "half-orc",
  		$npc.raceplural to "half-orcs",
  		$npc.raceadjective to "orcish",
  		$npc.racelanguage to "Orcish",
  		$npc.height to either("rather average height", "slightly above average height", "tall", "tall", "intimidatingly tall"),
  		$npc.weight to either("slightly underweight", "stocky", "beefy", "muscular", "extremely muscular", "slightly overweight")>>
  		<<if $npc.gender is "man">>
  				<<set $npc.firstname to $name.maleorc.pluck()>>
  			<<elseif $npc.gender is "woman">>
  				<<set $npc.firstname to $name.femaleorc.pluck()>>
  		<</if>>
      break;
  	case "dragonborn":
  		<<set $npc.racesingular to "drake",
  		$npc.raceplural to "drakes",
  		$npc.raceadjective to "draconian",
  		$npc.racelanguage to "Draconic",
  		$npc.height to either("rather average height", "slightly above average height", "tall", "tall", "tall"),
      $npc.weight to either("stocky", "beefy", "muscular", "slightly underweight", "extremely muscular", "slightly overweight")>>
      break;
  	case "tiefling":
  		<<set $npc.racesingular to "tiefling",
  		$npc.raceplural to "tieflings",
  		$npc.raceadjective to "devilish",
  		$npc.racelanguage to "Demonic",
  		$npc.height to either("tiny", "short", "slightly below average height", "rather average height", "slightly above average height", "tall", "tall", "tall", "giraffe-like"),
  		$npc.weight to either("waif-like", "thin", "skinny", "skinny", "wiry", "thin", "stocky", "beefy", "muscular", "slightly underweight")>>
  		<<if $npc.gender is "man">>
  				<<set $npc.firstname to $name.maletiefling.pluck()>>
  			<<elseif $npc.gender is "woman">>
  				<<set $npc.firstname to $name.femaletiefling.pluck()>>
  		<</if>>
      break;
  	case "half-elf":
  		<<set $npc.racesingular to "half-elf",
  		$npc.raceplural to "half-elves",
  		$npc.raceadjective to "elfish",
  		$npc.racelanguage to "Elven",
  		$npc.height to either("rather average height", "slightly above average height", "tall", "tall", "tall"),
      $npc.weight to either("waif-like", "thin", "skinny", "skinny", "wiry", "thin", "stocky", "beefy", "muscular", "slightly underweight")>>
      break;
  	case "gnome":
  		<<set $npc.racesingular to "gnome",
  		$npc.raceplural to "gnomes",
  		$npc.raceadjective to "gnomish",
  		$npc.racelanguage to "Gnomish",
  		$npc.height to either("short", "tiny"),
  		$npc.weight to either("slightly underweight", "stocky", "beefy", "slightly overweight", "slightly overweight", "round", "tubby")>>
  		<<if $npc.gender is "man">>
  				<<set $npc.firstname to either($name.man.pluck(), $name.maleelf.pluck())>>
  			<<elseif $npc.gender is "woman">>
  				<<set $npc.firstname to either($name.woman.pluck(), $name.femaleelf.pluck())>>
  		<</if>>
      break;
  <</switch>>

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
