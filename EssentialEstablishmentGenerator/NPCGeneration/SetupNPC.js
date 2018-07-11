setup.createNPC = function(base) {
    // Tables used later
    var index = State.variables.npcs.size;
    var baseName = "NPC";
    var skinColours   = ["translucent", "white", "pale", "fair", "light", "light tan", "tan", "pale", "fair", "light", "light tan", "tan", "dark tan", "brown"];
    var profession    = ["actor", "advocate", "advisor", "animal handler", "apothecary", "architect", "archivist", "armorer", "astrologer", "baker", "banker", "barber", "barkeep", "blacksmith", "bookseller", "brewer", "bricklayer", "brothel keeper", "buccaneer", "butcher", "caravanner", "carpenter", "cartographer", "chandler", "chef", "clock maker", "cobbler", "cook", "counselor", "courtesan", "courtier", "cowherd", "dancer", "diplomat", "distiller", "diver", "farmer", "fisherman", "fishmonger", "gardener", "general", "gladiator", "glovemaker", "goldsmith", "grocer", "guardsman", "guildmaster", "hatmaker", "healer", "herald", "herbalist", "hermit", "historian", "hunter", "ice seller", "innkeeper", "inventor", "jailer", "jester", "jeweler", "judge", "knight", "lady", "leatherworker", "librarian", "linguist", "locksmith", "lord", "lumberjack", "mason", "masseur", "merchant", "messenger", "midwife", "miller", "miner", "minister", "minstrel", "monk", "mortician", "necromancer", "noble", "nun", "nurse", "officer", "painter", "patissier", "perfumer", "philosopher", "physician", "pilgrim", "potter", "priest", "privateer", "professor", "roofer", "ropemaker", "rugmaker", "saddler", "sailor", "scabbard maker", "sculptor", "scavenger", "scholar", "seamstress", "servant", "shaman", "shepherd", "ship's captain", "silversmith", "slave", "slaver", "smith", "soldier", "spice merchant", "squire", "stablehand", "stevedore", "stonemason", "steward", "street seller", "street sweeper", "student", "surgeon", "surveyor", "sailor", "tanner", "tavernkeeper", "tax collector", "teacher", "thatcher", "thief", "torturer", "town crier", "toymaker", "vendor", "veterinarian", "vintner", "weaver", "wetnurse", "woodcarver", "wood seller", "wrestler", "writer"];
    var trait       = ["fidgets", "drinks too much", "eats too much", "swears often", "has poor hygiene", "cannot resist flirting", "cannot stop staring at you", "sweats profusely and easily", "is a habitual liar", "embellishes the truth", "exaggerates details", "has a short temper", "is melodramatic", "gossips about the most mundane things", "cannot resist a juicy secret", "chews with an open mouth", "often sniffs audibly", "is incredibly gullible", "is skeptical of everything", "paces about incessantly", "makes poor eye contact"];
    var idle        = ["sitting, with a piece of bread in hand", "sitting, mug in hand", "poring over some map", "reading some letter intently", "reading a book", "shuffling a pack of cards", "chewing on a piece of hay", "sharpening a knife", "buffing a piece of armour", "polishing a shield", "sharpening the blade on a fearsome looking dagger", "cutting an apple into bite sized pieces", "biting into an apple", "eating an apple while looking at some book", "eating a hunk of cheese while reading a book", "sipping out of a huge mug while reading a book", "reading a book titled '<<print $book.pun.pluck()>>'", "reading a book titled '<<print $book.pun.pluck()>>'", "reading a book titled '<<print $book.pun.pluck()>>'"];
    var reading     = ["a piece of history- my forefather's journal, detailing his life in $town.name when it was just a settlement.", "my journal, from many years ago.", "my mother's journal, from just before she disappeared", "a document which I received by postboy two days ago... I believe it is in code, and somebody is trying to tell me something.", "a traitor's memoirs, extremely rare... I thought it would be a good laugh, but some of what he says is concerningly accurate.", "some sort of spell, though I don't know how to read it.", "a document I bought at the flea market; it looks to be a set of instructions on how to make a golem.", "a book which I bought, believing it to be blank, and suitable for a journal. However, now there's this strange foreign script that I can't read in it.", "a book that I bought as a gift for my mother, who loves beautiful covers, despite not being able to read."];
    var currentmood = ["annoyed", "scared", "relaxed", "concerned", "bemused", "stressed", "amused", "content", "distracted"];
    var scar = ["a jagged scar", "a dark purple scar", "an angry red scar", "a long, thin scar running up the arm", "a scar on the eye", "a scar around the neck", "a scar on the throat", "a fiery red scar", "a finger missing", "two fingers missing"];
    var tattoo = ["a dagger tattoo", "an arrow tattoo", "an anchor tattoo", "a skull tattoo", "a pair of crossed bones tattoo", "a snake tattoo", "a scorpion tattoo", "a spider web tattoo", "a heart tattoo", "a ring of thorns tattoo", "a mermaid tattoo", "a dragon tattoo"];
    var beard;
    var beardRoll   = random(1, 99);
    var currentproject;
    var knownLanguages;
    var vocalPattern;
    var descriptor;
    var availableLanguages;
    var standardLanguages = ["Common", "Dwarvish", "Elvish", "Gnomish", "Giant", "Goblin", "Halfling", "Orc"];
    var exoticLanguages = ["Abyssal", "Celestial", "Draconic", "Deep Speech", "Infernal", "Primordial", "Sylvan", "Undercommon"];
    var allLanguages = standardLanguages + exoticLanguages;
    var inventory;
    var mundane;
    var isVillain;
    var title;
    var hasClass;
    var wealth = random(6, 26);
    var isThrowaway;
    var firstname;
    var name;
    var note;
    var owner;
    var pubRumour = setup.createPubRumour();

    // Base random variables first - those that don't depend on others
    var npc = Object.assign({
        gender: ["man", "woman"].random(),
        race: ["human", "human", "human", "human", "human", "human", "half-elf", "half-elf", "elf", "elf", "dwarf", "dwarf", "gnome", "halfling", "half-orc", "dragonborn", "tiefling"].random(),
        firstname: firstname,
        lastname: State.variables.name.last.random(),
        age: ["childlike", "rather young", "eighteen year old", "surprisingly young", "relatively young", "relatively young", "middle aged", "middle aged", "middle aged", "middle aged", "middle aged", "relatively old", "sun wizened", "quite old", "ancient"].random(),
        /*currentmood: ["annoyed", "scared", "relaxed", "concerned", "bemused", "stressed", "amused", "content", "distracted"],*/
        demeanour: ["calm", "moody", "kind", "conceited", "cruel", "mean", "careful", "polite", "happy"].random(),
        calmtrait: ["compassionate", "cheerful", "reserved", "outspoken", "uninterested", "gruff", "eager", "deceitful", "foolish", "strict", "agreeable", "mischeivious", "angry", "fearful", "manipulative", "devout", "greedy", "funny", "dour", "fun-loving", "lazy", "driven", "boastful", "artistic", "assertive", "carefree", "cautious", "confident", "thoughtful", "loyal", "sophisticated", "weak-willed"].random(),
        stresstrait: ["withdrawn", "murderous", "obsessive", "authoritarian", "determined", "brave", "spiteful", "belligerent", "caustic", "reckless", "argumentative", "gluttonous", "overly protective", "angry", "cowardly", "meticulous", "sarcastic", "stubborn", "destructive", "practical", "pushy", "fanatical", "secretive", "scornful", "courageous", "impractical", "calculating", "industrious", "manipulative", "destructive", "compulsive", "intolerant"].random(),
        vocalPattern: vocalPattern,
        adventure: ["retired from adventuring", "currently looking for an adventure", "looking for assistance", "recuperating from an adventure", "on a holiday from adventuring", "taking a short break from adventuring"].random(),
        haircolour: ["brunette", "brunette", "brown", "brownish", "auburn", "amber", "hazel", "redhead", "dark redhead", "blonde", "dark blonde", "white", "platinum", "black", "black"].random(),
        hairtype: ["thick", "wispy", "straight", "straight", "wavy", "wavy", "curly", "wiry", "oily", "lush", "poofy", "long", "braided", "very long", "greasy", "unruly", "unusually styled", "short cropped hair"].random(),
        dndclass: ["barbarian", "bard", "cleric", "druid", "fighter", "monk", "rogue", "ranger", "paladin", "sorcerer", "warlock", "wizard"].random(),
        background: ["acolyte", "charlatan", "criminal", "entertainer", "folk hero", "guild artisan", "hermit", "noble", "outlander", "sage", "sailor", "soldier", "urchin"].random(),
        pockets: ["5 cp", "6 cp", "15 cp", "22 cp", "27 cp", "5 sp", "5 sp", "6 sp", "7 sp", "2 gp", "34 cp and 4 sp", "12 sp and 7 gp", "a clove of garlic", "a vial of ink worth 8sp", "hardtack", "an explosive rune, dealing 2d4 fire damage", "a palm-sized glass sphere", "a wooden comb", "fragments of a shattered sword", "a deck of tarot cards", "map of a nearby castle", "map of the local area", "a tin spoon", "a mess kit", "lacy undergarments", "spectacles worth 5gp", "a spool of thread", "a piece of chalk", "a necklace of animal teeth", "a headhunter's contract", "a list of people in a nearby city", "a worn leather strap", "a ring of iron keys", "a flask full of salt water", "a box of candles", "a vial of quicksilver", "a traveller's journal", "a lead amulet", "a signet ring for a noble house", "a list of local taverns", "a golden yellow topaz gem worth 50gp", "a page torn from a spellbook", "scraps of bad poetry", "a pair of bloodstained gloves", "thirteen mouse teeth", "a pouch full of dried berries", "an invitation to a wedding that happened a few weeks ago", "a brass ring", "a shopping list", "the cork from a wine bottle", "a scrap of paper with uninteligible writing on it", "a smoking pipe", "a pouch of ruby powder", "a deed to a ruined tower", "a bottle of honey", "a sling with 10 bullets", "a broken buckle", "a knot of silk ribbons", "a silver pearl worth 10gp", "a potion of Polymorph Self worth 350gp", "1pp wrapped in a crude map", "pocket sand", "a wedge of cheese", "a string of wooden prayer beads", "a lock of hair", "a dead mouse", "a compass", "an empty flask", "85gp", "three diamonds worth 30gp each", "a black pearl worth 50gp", "a black opal worth 100gp"].random(),
        profession: profession.random(),
        trait: trait.random(),
				currentmood: currentmood.random(),
				idle: idle,
        currentproject: currentproject,
        mundane: mundane,
        hasClass: hasClass,
        isVillain: isVillain,
        isThrowaway: isThrowaway,
        descriptor: descriptor,
        owner: owner,
        title: title,
        wealth: wealth,
				reading: reading,
        skinColours: skinColours.random(),
        pubRumour: pubRumour,
    }, base);
    npc.hair = npc.hairtype + " " + npc.haircolour + " hair";


        if (npc.hasClass === false){
          npc.dndclass = npc.profession;
        }

        if (random(1, 100) >= 60){
          npc.vocalPattern = ["is incoherent except for a few key words", "stutters", "says ‘um’ a lot", "says ‘like’ a lot", "swears", "uses thee's and thou's", "never stops to breathe", "uses short, clipped sentences", "talks in third person", "doesn't conjugate well (‘me make good soup’)", "rolls R’s", "never uses contractions", "is whiny", "obviously has a stuffy nose", "tongue stuck to back of teeth", "does so through clenched teeth", "speaks in a sing-song voice", "likes to rhyme", "spits on every 's' sound", "makes all Th-sounds become Z-sounds", "repeats the last few words of a sentence/thought (‘nice to meet you, meet you’)", "uses full titles or descriptions of how he knows you (‘ellen-farmers-daughter is pretty’)", "strings together adjectives/adverbs for more impact (‘wow, your dress is pretty-pretty!’ ‘I am short-short-short.’)", "all non-proper nouns end with ‘en’/’sen’ (‘may I have some applesen?’ ‘I saw a big moosen!’)", "all L-sounds become w-sounds", "repeats the last word you say before responding", "sings everything", "does the wrong emphasis on the wrong syllables", "pauses often", "has a clipped pattern of speech", "is rather monotonous", "whistles on S-sounds", "spits on Th-sounds and S-sounds (think Sylvester the cat from Looney toons)", "has a light lisp", "makes all r-sounds become w-sounds", "has a severe underbite", "has a severe overbite", "speaks out of the corner of his mouth", "is always pouting", "makes ‘ar/er’ sounds become ‘aye’ sounds (fart will sound like fight, water will sound like watay)", "makes soft letters elongated (‘ssssso, hhhhhhow are you?’)", "slurs words", "always has a full mouth while talking", "sighs after each sentence", "never uses am/is/are/was/were (‘I big.’ ‘She pretty.’)", "responds in the form of questions", "mutters"].random();
        }

    setup.createName(npc);
    npc.name = npc.firstname + " " + npc.lastname;
    setup.createHistory(npc);

    switch (npc.gender) {
        case "man":
            Object.assign(npc, {
                heshe: "he",
                himher: "him",
                himherself: "himself",
                hisher: "his",
                hisherself: "hisself",
                boygirl: "boy",
                manwoman: "man",
                menwomen: "men",
                malefemale: "male",
                guygirl: "guy",
            });
            break;
        case "woman":
            Object.assign(npc, {
                heshe: "she",
                himher: "her",
                himherself: "herself",
                hisher: "her",
                hisherself: "herself",
                boygirl: "girl",
                manwoman: "woman",
                menwomen: "women",
                malefemale: "female",
                guygirl: "girl",
            });
            break;
        case "nonbinary":
            Object.assign(npc, {
                heshe: "they",
                himher: "their",
                himherself: "themself",
                hisher: "their",
                hisherself: "theirself",
                boygirl: "child",
                manwoman: "person",
                menwomen: "people",
                malefemale: "person",
                guygirl: "child",
            });
            break;
    }

    var physicaltraitroll = Math.floor(Math.random() * 10) + 1;
    if (physicaltraitroll > 8)
    {
        npc.physicaltrait = scar.random();
    }
    else if (physicaltraitroll > 6)
    {
        npc.physicaltrait = tattoo.random();
    }
    else if (physicaltraitroll <= 6)
    {
        npc.physicaltrait = npc.hair;
    }


    switch (npc.race) {
        case "human":
            Object.assign(npc, {
                eyes: ["yellow", "amber", "brown", "hazel", "green", "blue", "gray", "aqua", "brown", "hazel", "green", "blue", "gray", "aqua", "purple", "pale brown", "pale blue", "pale green", "ash gray"].random(),
                raceplural: "humans",
                raceadjective: "human",
                racelanguage: "Common",
                knownLanguages: ["Common"],
                height: ["tiny", "short", "short", "slightly below average height", "rather average height", "slightly above average height", "tall", "tall", "tall", "giraffe-like"].random(),
                weight: ["waif-like", "thin", "skinny", "skinny", "wiry", "thin", "stocky", "beefy", "muscular", "slightly underweight", "slightly overweight", "slightly overweight", "round", "tubby", "portly"].random(),
            });
            npc.racenote = npc.height + " " + npc.gender;
            if (npc.gender === "man") {
              npc.racesingular = "man";
                if (npc.beardRoll >= 27) {
                  npc.beard = ["scraggly beard", "long, flowing beard", "five o clock shadow", "neckbeard", "well-groomed moustache", "goatee", "well-loved beard, with ornamental beads woven into it", "sideburns", "smattering of hairs on his face", "bit of peach fuzz on his chin", "long, luxurious beard", "long, well-kempt beard", "rather wild, unkempt beard", "dreadful beard"].random();
                }
              }
              else {
              npc.racesingular = "woman";
              }
            break;
        case "elf":
            Object.assign(npc, {
                eyes: ["yellow", "amber", "brown", "hazel", "green", "blue", "gray", "aqua", "purple", "pale brown", "pale blue", "pale green", "ash gray"].random(),
                racesingular: "elf",
                raceplural: "elves",
                raceadjective: "elfish",
                racelanguage: "Elvish",
                knownLanguages: ["Common", "Elvish"],
                height: ["rather average height", "slightly above average height", "tall", "tall", "tall"].random(),
                weight: ["waif-like", "thin", "skinny", "skinny", "wiry", "thin", "stocky", "slightly underweight"].random(),
            });
            npc.racenote = npc.race;
            if (npc.gender === "man") {
                if (npc.beardRoll >= 87) {
                  npc.beard = ["scraggly beard", "long, flowing beard", "five o clock shadow", "neckbeard", "well-groomed moustache", "goatee", "well-loved beard, with ornamental beads woven into it", "sideburns", "smattering of hairs on his face", "bit of peach fuzz on his chin", "long, luxurious beard", "long, well-kempt beard", "rather wild, unkempt beard", "dreadful beard"].random();
                }
              }
            break;
        case "dwarf":
            Object.assign(npc, {
                eyes: ["yellow", "amber", "brown", "dark brown", "hazel", "green", "blue", "gray", "brown", "dark brown", "hazel", "green", "blue", "gray", "aqua"].random(),
                racesingular: "dwarf",
                raceplural: "dwarves",
                raceadjective: "dwarven",
                racelanguage: "Dwarven",
                knownLanguages: ["Common", "Dwarvish"],
                height: ["short", "squat"].random(),
                weight: ["stocky", "beefy", "muscular", "slightly underweight", "slightly overweight", "slightly overweight", "round", "tubby", "portly"].random(),
            });
            npc.racenote = npc.race;
            if (npc.gender === "man") {
                if (npc.beardRoll >= 2) {
                  npc.beard = ["scraggly beard", "long, flowing beard", "well-groomed beard going down to his chest", "goatee", "goatee that seems to be trying to level up into a beard", "well-loved beard, with ornamental beads woven into it", "sideburns", "long, luxurious beard", "long, well-kempt beard", "rather wild, unkempt beard", "dreadful beard"].random();
                }
            }
            break;
        case "halfling":
            Object.assign(npc, {
                eyes: ["yellow", "amber", "brown", "hazel", "green", "blue", "gray", "aqua", "red", "purple", "pale brown", "pale blue", "pale green", "ash gray"].random(),
                racesingular: "halfling",
                raceplural: "hobbits",
                raceadjective: "halfling",
                racelanguage: "Halfling",
                knownLanguages: ["Common", "Halfling"],
                height: ["short", "tiny", "diminuitive", "little"].random(),
                weight: ["waif-like", "thin", "skinny", "skinny", "wiry", "thin", "stocky", "beefy", "muscular", "slightly underweight"].random(),
            });
            npc.racenote = npc.race;
            if (npc.gender === "man") {
                if (npc.beardRoll >= 92) {
                  npc.beard = ["scraggly beard", "long, flowing beard", "five o clock shadow", "neckbeard", "well-groomed moustache", "goatee", "well-loved beard, with ornamental beads woven into it", "sideburns", "smattering of hairs on his face", "bit of peach fuzz on his chin", "long, luxurious beard", "long, well-kempt beard", "rather wild, unkempt beard", "dreadful beard"].random();
                }
            }
            break;
        case "half-orc":
            Object.assign(npc, {
                eyes: ["yellow", "amber", "orange", "brown", "hazel", "yellow", "amber", "orange", "brown", "hazel", "green", "blue", "gray", "aqua", "red"].random(),
                racesingular: "half-orc",
                raceplural: "half-orcs",
                raceadjective: "orcish", /* not "demiorcish"? */
                racelanguage: "Orcish",
                knownLanguages: ["Common", "Orc"],
                height: ["rather average height", "slightly above average height", "tall", "tall", "intimidatingly tall"].random(),
                weight: ["slightly underweight", "stocky", "beefy", "muscular", "extremely muscular", "slightly overweight"].random(),
            });
            npc.racenote = npc.race;
            if (npc.gender === "man") {
                if (npc.beardRoll >= 75) {
                  npc.beard = ["scraggly beard", "long, flowing beard", "five o clock shadow", "neckbeard", "well-groomed moustache", "goatee", "well-loved beard, with ornamental beads woven into it", "sideburns", "smattering of hairs on his face", "bit of peach fuzz on his chin", "long, luxurious beard", "long, well-kempt beard", "rather wild, unkempt beard", "dreadful beard"].random();
                }
            }
            break;
        case "dragonborn":
            Object.assign(npc, {
                eyes: ["yellow", "amber", "yellow", "amber", "brown", "hazel", "green", "blue", "gray", "aqua", "red", "purple", "aqua", "red", "purple", "gold", "gold"].random(),
                racesingular: "drake",
                raceplural: "drakes",
                raceadjective: "draconian",
                racelanguage: "Draconic",
                knownLanguages: ["Common", "Draconic"],
                height: ["rather average height", "slightly above average height", "tall", "tall", "tall"].random(),
                weight: ["stocky", "beefy", "muscular", "slightly underweight", "extremely muscular", "slightly overweight"].random(),
            });
            npc.racenote = npc.race;

            Object.assign(npc, {
              note: [[npc.firstname + "is covered in glimmering red scales, which seem to turn a slight orange color in the sunlight.",
                    npc.firstname + "has several scales missing and a long gash running along " + npc.hisher + " face.",
                    npc.firstname + "has two long, spined and membranous ears.",
                    npc.firstname + "has a slightly off-center snout, akin to a poorly-reset broken nose.",
                    npc.firstname + "has two small bony nubs at " + npc.hisher + " shoulder blades- vestigial wings.",
                    npc.firstname + "has poor control over " + npc.hisher + " breath weapon, and when " + npc.sheshe + " is agitated, " + npc.hisher + " nostrils and mouth crackle with lightning/exude a green gas/smoke like chimneys drip green acid/breath puffs of frosty white air.",
                    npc.firstname + "has highly acidic saliva.",
                    npc.firstname + "has long overly curled horns.",
                    npc.firstname + "has a heart that glows bright enough to be seen beneath the scales.",
                    npc.firstname + "has spines that stick out from every joint.",
                    "Smoke is always slowly rising from " + npc.firstname + "’s nose and mouth.",
                    npc.firstname + "'s scales are prismatic.",
                    npc.firstname + "has a tiny pair of unusable wings.",
                    npc.firstname + "has 2 inch retractable nail/talons on " + npc.hisher + " fingers and toes.",
                    npc.firstname + "has eyes that change color depending on " + npc.hisher + " emotions.",
                    npc.firstname + "appears to have had " + npc.hisher + " claws torn off, so a leather bound brace of daggers serves as their replacement.",
                    npc.firstname + "has random different colored scales glistening blue and white.",
                    npc.firstname + "has a crest of multicolored feathers atop " + npc.hisher + " head, resembling a hairdo.",
                    npc.firstname + "is branded on " + npc.hisher + " forehead with a strange, unknown symbol.",
                    npc.firstname + "only refers to themselves by a number emblazoned on " + npc.hisher + " gear (necklace, scabbard, belt, etc.).",
                    npc.firstname + "'s acid breath clearly went wrong, as the flesh on the right side of " + npc.hisher + " face, from the middle of " + npc.hisher + " neck to the top of " + npc.hisher + " mouth is burned off.",
                    npc.firstname + "is missing all of " + npc.hisher + " scales, revealing the pale skin beneath. The colour is only identified by a small patch of scales on " + npc.hisher + " cheek.",
                    npc.firstname + "has one or more hidden paths on " + npc.hisher + " skin where scales never developed.",
                    npc.firstname + "has traces of another colour (for example, little splotches of black scales on a green dragonborn).",
                    npc.firstname + "‘s voice seems to come from within, rather than from " + npc.hisher + " lips and mouth moving when " + npc.sheshe + " talks.",
                    npc.firstname + "'s eyes gleam red while in combat.",
                    npc.firstname + "is constantly drawn to live as a dragon and hoard all the loot.. for safe keeping of course.",
                    npc.firstname + "'s fangs grow in the presents of injured enemies.",
                    npc.firstname + "has a cracked or broken snout horn.",
                    npc.firstname + "has a fake, steel nose horn.",
                    npc.firstname + "has transluscent or transparent patches of scales.",
                    npc.firstname + "has a frill running down the chin and neck.",
                    npc.firstname + "has a frill running up the snout, head, and the back of the neck.",
                    npc.firstname + "has 3 eyelids: 2 normal ones, and a thin, almost transparent one underneath that moves in a perpendicular direction to the other two.",
                    npc.firstname + "tends to hiss when speaking.",
                    npc.firstname + "has shiny blue scales. The darkness of the color is determined by the temperature.",
                    npc.firstname + "'s breath weapon is always accompanied by a horrific, sickly sweet stench.",
                    npc.firstname + "has two large (possibly colorful) frills instead of horns.",
                    npc.firstname + "has albinism, making it hard to tell what exact kind of dragonborn " + npc.sheshe + " is.",
                    npc.firstname + "has a small patch of scales etched with scratches. It’s become a nervous habit to trace over them or scratch even more.",
                    npc.firstname + "'s breath weapon is unusually colored (blue fire, red acid, green lightning, etc).",
                    npc.firstname + "'s horns originate in the back of " + npc.hisher + " head and curl around to face forward.",
                    npc.firstname + "has ears. They look elven in nature.",
                    npc.firstname + "'s eyes have two pupils, with different colored irises.",
                    npc.firstname + "has a habit of chewing on gemstones, jewelry, and precious metals.",
                    npc.firstname + "has pits in " + npc.hisher + " face instead of an actual nose, similar to a snake’s.",
                    npc.firstname + "'s scales are a dull, matte color.",
                    npc.firstname + "has 5 fingers and 5 toes, as opposed to the standard 3.",
                    npc.firstname + "has a long, serpentine tongue.",
                    npc.firstname + "'s scales are bumpy, thick, and loose on " + npc.hisher + " skin (think a gila monster).",
                    npc.firstname + "'s scales are sleek and uniform, like a snake.",
                    npc.firstname + "'s scales are incredibly uneven. Some are huge, others are tiny. This isn’t uncomfortable, just making interesting patterns on " + npc.hisher + " skin.",
                    npc.firstname + "has a third eye. Doesn’t actually see but can distinguish changing levels of light above them.",
                    npc.firstname + "'s mouth is brimming with bacteria that can kill in 5-7 days without treatment from a bite.",
                    npc.firstname + "has tail spikes like a stegosaurus.",
                    npc.firstname + "'s scales are a dull faded red color, but glow bright red when " + npc.sheshe + " is aroused or in love.",
                    npc.firstname + "has the power to make " + npc.hisher + " scales shine with bright neon colors on command.",
                    npc.firstname + "'s singing voice is the exact opposite tone of " + npc.hisher + " speaking voice (for example, if " + npc.firstname + " is female and has a higher voice, " + npc.sheshe + " will sing in a deep bass-baritone). It’s always a beautiful voice regardless, making them better performers.",
                    npc.firstname + "'s scales are incredibly flexible, allowing " + npc.himher + " to bend in near impossible positions (think contortionist).",
                    npc.firstname + "'s hiccups are powerful bursts of freezing air.",
                    npc.firstname + "'s scales shimmer like a rainbow in moonlight.",
                    npc.firstname + "has flaps of skin under " + npc.hisher + " armpits, almost like wings but they don’t do anything.",
                    npc.firstname + "has two frills on top of his head. Keeps " + npc.himher + " cool in hot temperatures.",
                    npc.firstname + "has scaly human-like ears.",
                    npc.firstname + "'s breath weapon is incredibly uncomfortable, even painful, like puking. A few dry heaves beforehand, with a bit of tears and snot afterwards.",
                    npc.firstname + "'s form was not made for the human world. Clawed fingers get in the way of delicate tasks; a head bumped on a low doorway will take some effort in order to pull the horns out. ",
                    npc.firstname + "has an above average sized tail to compensate for " + npc.hisher + " vestigial legs.",
                    npc.firstname + "has shorn horn stubs on the side of " + npc.hisher + " head- the horns were stolen by alchemists.",
                    npc.firstname + "has an odd scale discoloration that looks eerily similar to the crest of a very well known Elven god.",
                    npc.firstname + "can clean " + npc.hisher + " eyelids with " + npc.hisher + " forked tongue, but only does this as a party trick.",
                    npc.firstname + "can gallop quadrupedally by using " + npc.hisher + " tail for balance, and are also an effective climber.",
                    npc.firstname + "has impressive face whiskers like a carp.",
                    npc.firstname + "hates sweets, but is fond of anything that makes a satisfying loud crunch. Bananas are only tolerated with the peel still on.",
                    npc.firstname + "is patient to a fault and sometimes forgets that children and grandchildren cannot be judged by the actions of their parents.",
                    npc.firstname + "has a colorful dewlap on " + npc.hisher + " chin and neck.",
                    npc.firstname + "can move " + npc.hisher + " eyes independently of one another.",
                    npc.firstname + "'s scales are of a much lighter tone than the skin, making them stand out even more.",
                    npc.firstname + "is overly formal and insists you call " + npc.himher + " by " + npc.hisher + " full name and title at all times.",
                    npc.firstname + "is covered in a sparkly paint that magically changes colour every few minutes, making it impossible to tell what " + npc.hisher + " natural colour is. " + npc.firstname + " is not particularly clever and has covered " + npc.himherself + " in glitter thinking it will make " + npc.himher + " look metallic.",
                    npc.firstname + "only speaks draconic, but has a pet talking lizard that sits on " + npc.hisher + " shoulder and translates for them.",
                    npc.firstname + "treats all other species like biological specimens that should be studied and are taking extensive notes on " + npc.hisher + " observations.",
                    npc.firstname + "is overly vain about " + npc.hisher + " scales and teeth and spend a long time every morning polishing and shining them.",
                    npc.firstname + "takes great pride in " + npc.hisher + " claws, and has intricate designs painted on them.",
                    npc.firstname + "is very elitist in terms of colour and classify other races into the dragon colour categories by hair colour, treating them accordingly.",
                    npc.firstname + "has a cold and keeps accidentally setting off a mild version of " + npc.hisher + " breath weapon every time " + npc.sheshe + " sneezes, which is often.",
                    "Whenever " + npc.sheshe + " uses " + npc.hisher + " breath attack, " + npc.hisher + " eyes shine bright white.",
                    npc.firstname + "has weak and useless vestigial wings coming out of " + npc.hisher + " shoulders that " + npc.sheshe + " tries to keep hidden.",
                    "When sleeping, " + npc.sheshe + " exhale harmless clouds of smoke from " + npc.hisher + " nostrils.",
                    npc.firstname + "refuses to eat any meat that isn’t cooked past well done.",
                    npc.firstname + "likes to cover themselves in mud constantly ‘to fight parasites’.",
                    npc.firstname + "has a bifurcated nose horn.",
                    npc.firstname + "has tiny useless T-Rex arms on " + npc.hisher + " shoulder blades."
                  ].random()],
            });
            break;
        case "tiefling":
            Object.assign(npc, {
                eyes: ["yellow", "amber", "brown", "hazel", "green", "blue", "aqua", "red", "purple", "pale brown", "pale blue", "pale green", "ash gray", "violet red", "aquamarine", "deep blue", "spring green", "sea green", "emerald green"].random(),
                racesingular: "tiefling",
                raceplural: "tieflings",
                raceadjective: "devilish",
                racelanguage: "Infernal",
                knownLanguages: ["Common", "Infernal"],
                height: ["tiny", "short", "slightly below average height", "rather average height", "slightly above average height", "tall", "tall", "tall", "giraffe-like"].random(),
                weight: ["waif-like", "thin", "skinny", "skinny", "wiry", "thin", "stocky", "beefy", "muscular", "slightly underweight"].random(),
            });
            npc.racenote = npc.race;
            if (npc.gender === "man") {
                if (npc.beardRoll >= 70) {
                  npc.beard = ["scraggly beard", "long, flowing beard", "five o clock shadow", "neckbeard", "well-groomed moustache", "goatee", "well-loved beard, with ornamental beads woven into it", "sideburns", "smattering of hairs on his face", "bit of peach fuzz on his chin", "long, luxurious beard", "long, well-kempt beard", "rather wild, unkempt beard", "dreadful beard"].random();
                }
            }
            break;
        case "half-elf":
            Object.assign(npc, {
                eyes: ["yellow", "amber", "brown", "hazel", "green", "blue", "gray", "aqua", "red", "purple", "pale brown", "pale blue", "pale green", "ash gray"].random(),
                racesingular: "half-elf",
                raceplural: "half-elves",
                raceadjective: "elfish",
                racelanguage: "Elven",
                knownLanguages: ["Common", "Elvish"],
                height: ["rather average height", "slightly above average height", "tall", "tall", "tall"].random(),
                weight: ["waif-like", "thin", "skinny", "skinny", "wiry", "thin", "stocky", "beefy", "muscular", "slightly underweight"].random(),
            });
            npc.racenote = npc.race;
            if (npc.gender === "man") {
                if (npc.beardRoll >= 57) {
                  npc.beard = ["scraggly beard", "long, flowing beard", "five o clock shadow", "neckbeard", "well-groomed moustache", "goatee", "well-loved beard, with ornamental beads woven into it", "sideburns", "smattering of hairs on his face", "bit of peach fuzz on his chin", "long, luxurious beard", "long, well-kempt beard", "rather wild, unkempt beard", "dreadful beard"].random();
                }
              }
            break;
        case "gnome":
            Object.assign(npc, {
                eyes: ["yellow", "amber", "brown", "hazel", "green", "blue", "gray", "aqua", "red", "purple", "pale brown", "pale blue", "pale green", "ash gray"].random(),
                racesingular: "gnome",
                raceplural: "gnomes",
                raceadjective: "gnomish",
                racelanguage: "Gnomish",
                knownLanguages: ["Common", "Gnomish"],
                height: ["short", "tiny"].random(),
                weight: ["slightly underweight", "stocky", "beefy", "slightly overweight", "slightly overweight", "round", "tubby"].random(),
            });
            npc.racenote = npc.race;
            if (npc.gender === "man") {
                if (npc.beardRoll >= 37) {
                  npc.beard = ["scraggly beard", "long, flowing beard", "five o clock shadow", "neckbeard", "well-groomed moustache", "goatee", "well-loved beard, with ornamental beads woven into it", "sideburns", "smattering of hairs on his face", "bit of peach fuzz on his chin", "long, luxurious beard", "long, well-kempt beard", "rather wild, unkempt beard", "dreadful beard"].random();
                }
            }
            break;
        default:
            Object.assign(npc, {
                eyes: ["yellow", "amber", "brown", "hazel", "green", "blue", "gray", "aqua", "brown", "hazel", "green", "blue", "gray", "aqua", "purple", "pale brown", "pale blue", "pale green", "ash gray"].random(),
                racesingular: "person",
                raceplural: "humans",
                raceadjective: "man",
                racelanguage: "Common",
                height: ["tiny", "short", "slightly below average height", "rather average height", "slightly above average height", "tall", "tall", "tall", "giraffe-like"].random(),
                weight: ["waif-like", "thin", "skinny", "skinny", "wiry", "thin", "stocky", "beefy", "muscular", "slightly underweight", "slightly overweight", "slightly overweight", "round", "tubby", "portly"].random(),
            });
            npc.racenote = npc.height + " " + npc.gender;
            if (npc.gender === "man") {
                if (npc.beardRoll >= 27) {
                  npc.beard = ["scraggly beard", "long, flowing beard", "five o clock shadow", "neckbeard", "well-groomed moustache", "goatee", "well-loved beard, with ornamental beads woven into it", "sideburns", "smattering of hairs on his face", "bit of peach fuzz on his chin", "long, luxurious beard", "long, well-kempt beard", "rather wild, unkempt beard", "dreadful beard"].random();
                }
              }
    }


    setup.createClass(npc);

    // switch (npc.dndclass) {
    //     case "barbarian":
    //         npc.dndclassOrigin = npc.dndclassOrigin || ["My devotion to my people lifted me in battle, and I learned to control my bloodlust.", "The spirits of my ancestors called out to me to complete a task, so I took up the way of the barbarian.", "I lost control in battle one day, as if something else was guiding me as I slaughtered my enemies.", "I went on a spiritual journey to find myself, and discovered the inner rage that I had could be tamed, used, and controlled.", "I was struck by lightning, but miraculously lived. Ever since that day, I've been stronger, faster, and able to push through any struggle.", "I needed an outlet to channel my anger, otherwise I would have snapped, and killed an innocent person."].random();
    //         npc.background = npc.background || ["charlatan", "criminal", "folk hero", "hermit", "hermit", "hermit", "hermit", "hermit", "outlander", "outlander", "outlander", "outlander", "outlander", "sailor", "soldier", "soldier", "soldier", "urchin"].random();
    //         npc.weapon = npc.weapon || ["a huge greataxe", "a battleaxe", "a greatsword", "two handaxes", "two warhammers"].random();
    //         break;
    //     case "bard":
    //         npc.dndclassOrigin = npc.dndclassOrigin || ["I awakened my latent bardic abilities through trial and error.", "I was a gifted performer, and eventually attracted the attention of a legendary bard, who decided to teach me to further my talents into the realm of magic.", "I joined a society of scholars and orators, who helped teach me how to harness my music and turn it into magic.", "I felt a great calling to recount the tales of heros past, and bring them alive through song and stories.", "I joined one of the great colleges to learn old lore, and did music as an elective.", "I picked up an instrument one day, and found that I could play it perfectly."].random();
    //         npc.background = npc.background || ["charlatan", "charlatan", "criminal", "entertainer", "entertainer", "entertainer", "entertainer", "entertainer", "entertainer", "folk hero", "folk hero", "guild artisan", "guild artisan", "noble", "outlander", "sailor", "soldier", "urchin"].random();
    //         npc.weapon = npc.weapon || ["a crossbow", "a longsword", "a longsword", "a longsword", "a long bow", "two daggers"].random();
    //         break;
    //     case "cleric":
    //         npc.dndclassOrigin = npc.dndclassOrigin || ["My god called on me to serve the faith as a cleric, so I abandoned my previous life, and set out for the nearest temple.", "I saw the injustice and horrors of the world, and felt that I couldn't live without trying to do something about it.", "My god gave me a sign that I was needed to do something important, some time in the future. I'm still waiting for my time to serve, but when it happens, I'll be ready.", "I've always been devout, but it wasn't until I completed a pilgrimage to a sacred site that I found my true calling.", "I used to serve in the beauracracy of the church, but found the work unrewarding. Being able to spread the message to the farthest corners of the land is much more satisfying work."].random();
    //         npc.background = npc.background || ["acolyte", "acolyte", "acolyte", "acolyte", "acolyte", "charlatan", "criminal", "entertainer", "folk hero", "folk hero", "folk hero", "guild artisan", "guild artisan", "hermit", "hermit", "noble", "noble", "noble", "sage", "sage", "sage", "sage", "sailor", "soldier", "urchin"].random();
    //         npc.weapon = npc.weapon || ["a mace", "a mace", "a morning star", "a club", "a quarterstaff", "a crossbow"].random();
    //         break;
    //     case "druid":
    //         npc.dndclassOrigin = npc.dndclassOrigin || ["I found a place among a group of druids after I fled a catastrophe.", "I saw too much devastation in the wilds where I used to play for days as a child, and decided to protect the wilderness.", "I have always had an affinity with animals, so I decided to explore it, and found that I had a gift to converse with them.", "I befriended a druid that frequented an old pub, and he convinced me that the world needed me to carry on his work as a druid.", "Whiie l was growing up, I saw spirits all around me— entities no one else could perceive. I sought out the druids to help me understand the visions, and communicate with these beings."].random();
    //         npc.background = npc.background || ["acolyte", "acolyte", "acolyte", "charlatan", "folk hero", "folk hero", "folk hero", "hermit", "hermit", "hermit", "hermit", "hermit", "noble", "noble", "outlander", "outlander", "outlander", "outlander", "sage", "sage", "sage", "sailor", "soldier", "urchin"].random();
    //         npc.weapon = npc.weapon || ["a mace", "a mace", "a morning star", "a club", "a quarterstaff", "a crossbow", "a longbow", "a longbow"].random();
    //         npc.knownLanguages = npc.knownLanguages || ["Druidic"].push();
    //         break;
    //     case "fighter":
    //         npc.dndclassOrigin = npc.dndclassOrigin || ["i wanted to hone my combat skills, and so I joined a war college", "I  grew up fighting, and I refined my talents by defending myself against people who crossed me.", "I squired for a knight, who taught me how to fight, care for my steed, and conduct myself with honor. I decided to take up that path for myself.", "Monster attacks led me to believe that there was no other way for me to be able to defend my family.", "I joined the army, and learnt how to fight in a group as a team against a common enemy.", "I always had a knack for just about any weapon which I picked up."].random();
    //         npc.background = npc.background || ["acolyte", "charlatan", "criminal", "criminal", "criminal", "entertainer", "folk hero", "folk hero", "folk hero", "guild artisan", "hermit", "noble", "outlander", "outlander", "sage", "sailor", "sailor", "sailor", "soldier", "soldier", "soldier", "soldier", "soldier", "soldier", "urchin"].random();
    //         npc.weapon = npc.weapon || ["a huge greataxe", "a battleaxe", "a greatsword", "a long sword", "a long sword", "a long sword", "a long sword", "a long bow", "a short sword", "a war pick", "a falcheon", "a halberdier"].random();
    //         break;
    //     case "monk":
    //         npc.dndclassOrigin = npc.dndclassOrigin || ["I stumbled into a portal and took refuge in a strange monastery, where I learned how to defend mysel fagainst the forces of darkness.", "I was chosen to study at a secluded monastery, where I learnt the fundamental techniques to set me on the path to eventual mastery.", "I sought out the instruction of a monk to gain a greater understanding of my world, and my purpose in it.", "I was overwhelmed with grief when I lost my sister, and found solace in meditation with the monks.", "I always felt a power within me, and sought out an order of monks to help me understand it and harness that energy for good.", "I was wild, and undisciplined as a child, until I realised the error of my ways. I sought out the monks to atone for my sins."].random();
    //         npc.background = npc.background || ["acolyte", "acolyte", "acolyte", "acolyte", "charlatan", "criminal", "folk hero", "guild artisan", "hermit", "hermit", "hermit", "noble", "noble", "outlander", "sage", "sage", "sage", "soldier", "urchin"].random();
    //         npc.weapon = npc.weapon || ["fists", "fists", "fists", "a quarterstaff", "a quarterstaff"].random();
    //         break;
    //     case "paladin":
    //         npc.dndclassOrigin = npc.dndclassOrigin || ["A magical being appeared before me, and called on me to undertake a holy quest.", "One of my ancestors left a holy quest unfulfilled, so I seek to rectify this.", "The world is a dark and terrible place. I seek to be a beacon of hope for those that may not have the courage to go on otherwise.", "I served as a paladin's squire, and admired his honesty and conduct. I decided to follow in his footsteps, and champion the good and decency that he represented.", "Evil must be opposed on all fronts, and I decided to be the first line of defense against such scum.", "Becoming a paladin was a natural consequence of my unwavering faith. I saw the need for the faith to be protected with sword and shield."].random();
    //         npc.background = npc.background || ["acolyte", "acolyte", "acolyte", "acolyte", "charlatan", "criminal", "entertainer", "folk hero", "folk hero", "folk hero", "folk hero", "guild artisan", "hermit", "noble", "noble", "noble", "noble", "noble", "outlander", "sage", "sailor", "soldier", "soldier", "soldier", "soldier", "soldier", "urchin", "urchin", "urchin", "urchin"].random();
    //         npc.weapon = npc.weapon || ["a greatsword", "a long sword", "a long sword", "a long sword", "a short sword", "a war pick", "a falcheon", "a halberdier"].random();
    //         break;
    //     case "rogue":
    //         npc.dndclassOrigin = npc.dndclassOrigin || ["I've always been nimble and quick of wit, so I decided to use those talents to help me make my way in the world.", "A thief wronged me, so I focused my training on mastering those skills to better combat foes of that sort.", "Know thy enemy. I aim to learn everything there is to know about the Thieves' guild, and then I'll bring it all tumbling down.", "An experienced rogue saw something in me, and taught me several useful tricks.", "I took up with a group of ruffians, that taught me how to get what I want without direct confrontation.", "I'm a sucker for a shiny bauble or bag of coins, as long as I can get it without risking life and limb.", "I just love the thrill of the heist. There's nothing that makes me feel more alive than taking something from right under someone's nose."].random();
    //         npc.background = npc.background || ["charlatan", "charlatan", "charlatan", "criminal", "criminal", "criminal", "criminal", "criminal", "criminal", "folk hero", "folk hero", "guild artisan", "guild artisan", "hermit", "noble", "noble", "outlander", "sailor", "soldier", "urchin", "urchin", "urchin", "urchin", "urchin"].random();
    //         npc.weapon = npc.weapon || ["a long sword", "a long sword", "two daggers", "two daggers", "two daggers", "two daggers", "a crossbow", "a crossbow", "a crossbow"].random();
    //         break;
    //     case "ranger":
    //         npc.dndclassOrigin = npc.dndclassOrigin || ["I always had a way with animals, and was able to calm them with a gentle touch and soothing word.", "I found purpose while I was honing my hunting skills by bringing dangerous beasts down from the outskirts of civilisation.", "I suffer from wanderlust, so I found the life of the ranger to be freeing; to me, wandering without a fixed home is freeing.", "I met a grizzled ranger who taught me the secrets of woodcraft and surviving in the wild.", "I served in the army, and led my division by scouting ahead, blazing trails and tracking our enemies."].random();
    //         npc.background = npc.background || ["acolyte", "acolyte", "charlatan", "criminal", "entertainer", "folk hero", "folk hero", "folk hero", "folk hero", "guild artisan", "hermit", "hermit", "hermit", "hermit", "outlander", "outlander", "outlander", "outlander", "sage", "sailor", "soldier", "soldier", "soldier", "urchin"].random();
    //         npc.weapon = npc.weapon || ["a crossbow", "a longsword", "a longsword", "a longsword", "a long bow", "a long bow", "a long bow", "two daggers"].random();
    //         break;
    //     case "sorcerer":
    //         npc.dndclassOrigin = npc.dndclassOrigin || ["When I was born, all of the milk turned to cheese. My family is convinced that it was a harbinger for my powers.", "I suffered a terrible strain, which brought forth my dormant powers. I have fought to control it ever since.", "My immediate family never spoke of my ancestors, and when I asked, they would change the subject. It wasn't until I started displaying strange talents that the full truth of my heritage came out.", "A monster attacked one of my friends when I was younger, and I lashed out in a burst of energy, saving my friend, but unlocking the torrent of power which I still struggle to control.", "After a magical conflagration, I realised that while I was unharmed, I had been fundamentally changed by the outburst of magical energy. I'm only just beginning to understand what has happened to me."].random();
    //         npc.background = npc.background || ["acolyte", "acolyte", "acolyte", "acolyte", "charlatan", "charlatan", "charlatan", "charlatan", "criminal", "entertainer", "entertainer", "folk hero", "folk hero", "guild artisan", "hermit", "noble", "noble", "noble", "outlander", "sage", "sage", "sage", "sailor", "soldier", "urchin"].random();
    //         npc.weapon = npc.weapon || ["a crossbow", "a longsword", "a longsword", "a longsword", "a long bow", "two daggers", "a dagger", "a dagger"].random();
    //         break;
    //     case "warlock":
    //         npc.dndclassOrigin = npc.dndclassOrigin || ["I was examining a strange tome I found in an abandoned library when the entity that would become my patron suddenly appeared before me.", "While wandering through a forbidden place, I came across a magical entity, which offered to form a pact with me.", "I stumbled into the clutches of my patron after I accidentally stepped through a magical doorway.", "During a crisis, I prayed for any being to help me. The creature that answered was my patron.", "My future patron visited me in my dreams, and offered great power in exchange for my servie.", "One of my ancestors had a pact with my patron, which bound me to the same fate."].random();
    //         npc.background = npc.background || ["acolyte", "acolyte", "acolyte", "acolyte", "acolyte", "acolyte", "charlatan", "criminal", "entertainer", "folk hero", "guild artisan", "hermit", "hermit", "hermit", "hermit", "hermit", "hermit", "noble", "noble", "noble", "outlander", "sage", "sage", "sage", "sage", "sage", "sailor", "soldier", "urchin"].random();
    //         npc.weapon = npc.weapon || ["a crossbow", "a quarterstaff", "a quarterstaff", "a quarterstaff", "a longsword", "a dagger", "a dagger", "a dagger"].random();
    //         break;
    //     case "wizard":
    //         npc.dndclassOrigin = npc.dndclassOrigin || ["An old wizard chose me from among several candidates to serve an apprenticeship.", "When I became lost in a magical forest, a hedge wizard took me in, and taught me the fundamentals of magic so that I could navigate my way out.", "I grew up listening to tales of great wizards that could change reality with a flick of their hand. I knew from a young age that I wanted to hold that sort of power.", "One of my relatives was an accomplished wizard in their own right, and they recognised the same potential in me that their mentor saw in them.", "While exploring the restricted section of a library, I came across a magical tome, which sparked the interest in me.", "I was a prodigy that demonstrated mastery of the arcane arts at a very young age. When I became old enough to set out on my own, I did so to continue my studies and expand my powers."].random();
    //         npc.background = npc.background || ["acolyte", "acolyte", "acolyte", "acolyte", "acolyte", "acolyte", "charlatan", "criminal", "entertainer", "folk hero", "guild artisan", "hermit", "hermit", "hermit", "hermit", "hermit", "hermit", "noble", "noble", "noble", "outlander", "sage", "sage", "sage", "sage", "sage", "sailor", "soldier", "urchin"].random();
    //         npc.weapon = npc.weapon || ["a crossbow", "a quarterstaff", "a quarterstaff", "a quarterstaff", "a longsword", "a longsword", "a longsword", "a dagger"].random();
    //         break;
    //     case "bartender":
    //         npc.dndclassOrigin = npc.dndclassOrigin || ["I came across $tavern.name as a youngster, and spent many a night here drinking with my buddies. When the old owner died, it went to auction, and I tried to kep the dream alive by buying it. One by one all my friends grew out of it, or moved away.", "Before I ran $tavern.name, it was my dad's. I kept the family business going to support him in his old age.", "When I first got to $town.name, it was practically a ghost town. We built $tavern.name as a social hub for the folk, and it's now what it is today.", "The old owner was a problem gambler, and when they auctioned off $tavern.name, I jumped at it.", "The old owner thought that $tavern.name wasn't profitable. In the first six months of my stewardship, I turned it around, and have made it the best bloody pub in $town.name!", "Running $tavern.name was the family business, and it was always going to be my lot in life. I'm not angry or disappointed or anything, but I would like to see the world one day, and it stops me from doing that.", "I was just a kitchen hand when this place started. The owner and I worked through thick and thin, and when his daughter died, he had nobody to leave it to, except for me.", "My parents bought this place as an investment. I don't know what they were thinking- when have you ever heard of a pub being profitable?"].random();
    //         npc.background = npc.background || ["urchin", "urchin", "urchin", "commoner", "commoner", "commoner", "commoner", "commoner", "commoner", "commoner", "commoner", "noble", "noble", "noble"].random();
    //         npc.weapon = npc.weapon || ["a crossbow", "a longsword", "a longsword", "a longsword", "a dagger"].random();
    //         break;
    //     case "blacksmith":
    //         npc.dndclassOrigin = npc.dndclassOrigin || ["I was an apprentice in $smithy.name, and took up the title when my old master passed on.", "I was a tinkerer, and just drifted from town to town doing odd jobs for people until I came to $town.name. I fell in love with the place, and then settled here.", "I followed my love here, set up shop, and now we're happily married, with a steady job and a roof over our heads.", "My father was a blacksmith before me, and then I took up the trade to make him proud. Or at least, I hope I've made him proud. He passed before I opened up shop.", "I was an apprentice, and my old master bitterly despised me because my father married his love. I worked so hard to perfect my craft to impress him thinking that the issue was with me, and then the bastard had a heart attack. Left everything to her. What's my mum gonna do with a smithy?!", "I spent a lot of time in the mountains with the Dwarves, and they taught me a thing or two while I was there."].random();
    //         npc.background = npc.background || ["urchin", "urchin", "urchin", "commoner", "commoner", "commoner", "commoner", "commoner", "commoner", "commoner", "commoner", "noble", "noble", "noble"].random();
    //         npc.weapon = npc.weapon || ["a crossbow", "a longsword", "a longsword", "a longsword", "a dagger"].random();
    //         break;
    //     case "commoner":
    //         npc.dndclassOrigin = npc.dndclassOrigin || ["I was born into poverty. I've slowly worked my way to where I am today.", "I had a bad string of bets which left me with no other choice than to skip town.", "I was born into a lowly family, and that's where I'll likely stay.", "I was a soldier in the army, with a lot of potential. But then, I made a tactical mistake, which led to my dismissal.", "I was found guilty of a crime that I did not commit, and was sentenced to serfdom.", "I grew up in a loving household, but all the love in the world could not pay the debts which we had.", "I was one of seven children, and when I was old enough to work, my parents put me to it.", "I was one of eight children, and had to work from a young age to support my family.", "I was the eldest of four children, but when my father died, I had to leave school and work to support my family."].random();
    //         npc.background = npc.background || ["urchin", "urchin", "urchin", "commoner", "commoner", "commoner", "commoner", "commoner", "commoner", "commoner", "commoner", "noble", "noble", "noble"].random();
    //         npc.weapon = npc.weapon || ["a crossbow", "a quarterstaff", "a quarterstaff", "a longsword", "a dagger", "a dagger", "a dagger", "a dagger", "a dagger", "a dagger", "a dagger"].random();
    //         break;
    //     default:
    //         npc.dndclassOrigin = npc.dndclassOrigin || ["I was born into poverty. I've slowly worked my way to where I am today.", "I had a bad string of bets which left me with no other choice than to skip town.", "I was born into a lowly family, and that's where I'll likely stay.", "I was a soldier in the army, with a lot of potential. But then, I made a tactical mistake, which led to my dismissal.", "I was found guilty of a crime that I did not commit, and was sentenced to serfdom.", "I grew up in a loving household, but all the love in the world could not pay the debts which we had.", "I was one of seven children, and when I was old enough to work, my parents put me to it.", "I was one of eight children, and had to work from a young age to support my family.", "I was the eldest of four children, but when my father died, I had to leave school and work to support my family."].random();
    //         npc.background = npc.background || ["urchin", "urchin", "urchin", "commoner", "commoner", "commoner", "commoner", "commoner", "commoner", "commoner", "commoner", "noble", "noble", "noble"].random();
    //         npc.weapon = npc.weapon || ["a crossbow", "a quarterstaff", "a quarterstaff", "a longsword", "a dagger", "a dagger", "a dagger", "a dagger", "a dagger", "a dagger", "a dagger"].random();
    // }

    availableLanguages = [allLanguages - npc.knownLanguages];

    setup.createBackground(npc);

    npc.descriptor = [npc.age + " " + npc.racesingular, npc.height + " " + npc.racesingular, npc.weight + " " + npc.racesingular, npc.height + " " + npc.gender + " with " + npc.physicaltrait];
    if (typeof beard !== 'undefined') {
      npc.descriptor.push(npc.racesingular + " with a " + npc.beard);
    }

    if (npc.hasClass === true) {
      npc.descriptor.push(npc.dndclass);
    }

    if (npc.isThrowaway == 'undefined') {
    State.variables.npcs.set(baseName + ++index, npc);
    }
    return npc;

};
