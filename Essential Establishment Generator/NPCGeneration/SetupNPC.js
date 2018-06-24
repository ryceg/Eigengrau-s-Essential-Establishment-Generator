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
    var availableLanguages;
    var standardLanguages = ["Common", "Dwarvish", "Elvish", "Gnomish", "Giant", "Goblin", "Halfling", "Orc"];
    var exoticLanguages = ["Abyssal", "Celestial", "Draconic", "Deep Speech", "Infernal", "Primordial", "Sylvan", "Undercommon"];
    var allLanguages = standardLanguages + exoticLanguages;
    var inventory;
    var mundane;
    var isVillain;
    var hasClass;
    var firstname;
    var name;
    var note;
    var owner;

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
        vocalPattern: ["is incoherent except for a few key words", "stutters", "says ‘um’ a lot", "says ‘like’ a lot", "swears", "uses thee's and thou's", "never stops to breathe", "uses short, clipped sentences", "talks in third person", "doesn't conjugate well (‘me make good soup’)", "rolls R’s", "never uses contractions", "is whiny", "obviously has a stuffy nose", "tongue stuck to back of teeth", "does so through clenched teeth", "speaks in a sing-song voice", "likes to rhyme", "spits on every 's' sound", "makes all Th-sounds become Z-sounds", "repeats the last few words of a sentence/thought (‘nice to meet you, meet you’)", "uses full titles or descriptions of how he knows you (‘ellen-farmers-daughter is pretty’)", "strings together adjectives/adverbs for more impact (‘wow, your dress is pretty-pretty!’ ‘I am short-short-short.’)", "all non-proper nouns end with ‘en’/’sen’ (‘may I have some applesen?’ ‘I saw a big moosen!’)", "all L-sounds become w-sounds", "repeats the last word you say before responding", "sings everything", "does the wrong emphasis on the wrong syllables", "pauses often", "has a clipped pattern of speech", "is rather monotonous", "whistles on S-sounds", "spits on Th-sounds and S-sounds (think Sylvester the cat from Looney toons)", "has a light lisp", "makes all r-sounds become w-sounds", "has a severe underbite", "has a severe overbite", "speaks out of the corner of his mouth", "is always pouting", "makes ‘ar/er’ sounds become ‘aye’ sounds (fart will sound like fight, water will sound like watay)", "makes soft letters elongated (‘ssssso, hhhhhhow are you?’)", "slurs words", "always has a full mouth while talking", "sighs after each sentence", "never uses am/is/are/was/were (‘I big.’ ‘She pretty.’)", "responds in the form of questions", "mutters"].random(),
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
        owner: owner,
        title: title,
				reading: reading,
        skinColours: skinColours.random(),
    }, base);
    npc.hair = npc.hairtype + " " + npc.haircolour + " hair";


        if (npc.hasClass === false){
        npc.dndclass = npc.profession;
        }

    setup.createName(npc);
    npc.name = npc.firstname + " " + npc.lastname;

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
                racesingular: "person",
                raceplural: "humans",
                raceadjective: "man",
                racelanguage: "Common",
                knownLanguages: ["Common"],
                height: ["tiny", "short", "slightly below average height", "rather average height", "slightly above average height", "tall", "tall", "tall", "giraffe-like"].random(),
                weight: ["waif-like", "thin", "skinny", "skinny", "wiry", "thin", "stocky", "beefy", "muscular", "slightly underweight", "slightly overweight", "slightly overweight", "round", "tubby", "portly"].random(),
            });
            npc.racenote = npc.height + " " + npc.gender;
            if (npc.gender === "man") {
                if (npc.beardRoll >= 27) {
                  npc.beard = ["scraggly beard", "long, flowing beard", "five o clock shadow", "neckbeard", "well-groomed moustache", "goatee", "well-loved beard, with ornamental beads woven into it", "sideburns", "smattering of hairs on his face", "bit of peach fuzz on his chin", "long, luxurious beard", "long, well-kempt beard", "rather wild, unkempt beard", "dreadful beard"].random();
                }
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

    availableLanguages = [allLanguages - npc.knownLanguages];


    switch (npc.background) {
        case "acolyte":
            npc.knownLanguages = npc.knownLanguages || availableLanguages.push().random();
            npc.backgroundOrigin = npc.backgroundOrigin || ["I ran away from home at a young age, and found refuge in a temple.", "My family gave me to a temple, since they were unable to care for me.", "I grew up in a household with strong religious convictions. Entering the service of the Gods seemed to be the natural progression.", "An impassioned sermon struck a chord deep in me, and compelled me to serve the faith.", "I followed a childhood friend into religious service because we made a pact to never be apart.", "I followed a lover into religious service, but tragically, they were killed. The faith was the only thing that stopped me from ending my own life."].random();
            npc.bond = npc.bond || ["I would die to recover an ancient artifact of my faith that was lost long ago.",
                "I will someday get revenge on the corrupt temple hierarchy who branded me a heretic.",
                "I owe me life to the priest who took me in when my parents died.",
                "Everything I do is for the common people.",
                "I will do anything to protect the temple where I served.",
                "I seek to preserve a sacred text that my enemies consider heretical and seek to destroy."].random();
            break;
        case "charlatan":
            npc.backgroundOrigin = npc.backgroundOrigin || ["As a youngster, I was left to my own devices. My knack for manipulating people helped me survive.", "I learned early on that people are easy to exploit, and are gullible and too trusting.", "I often got into trouble as a youngster, but talked my way out of it.", "I took up cheating as a hobby, then was sort of adopted by a local scam artist. It just sort of became a way of life for me.", "After a charlatan fleeced my family, I decided to learn all the tricks I could so I would never fall for another scam."].random();
            npc.bond = npc.bond || ["I fleeced the wrong person, a lord called <<print $name.man.pluck()>>, and must work to ensure that he never crosses paths with me or those I care about.",
                "I owe everything to my mentor <<print $name.man.pluck()>>--a horrible person who's probably rotting in jail somewhere.",
                "Somewhere out there I have a child, litte <<print $name.man.pluck()>>, who doesn't know me. I'm going to try and make the world better for him.",
                "I come from a noble family, and one day I'll reclaim my lands and title from those who stole them from me.",
                "A powerful person, Lord <<print $name.man.pluck()>>, killed someone I love. Some day soon, I'll have my revenge.",
                "I swindled and ruined a person who didn't deserve it, and now I seek to atone for my misdeeds but might never be able to forgive myself."].random();
            break;
        case "criminal":
            npc.backgroundOrigin = npc.backgroundOrigin || ["I resented authority in my younger days, and I saw a life of crime as a way to get back at those that I thought had wronged me.", "I resented authority as a youngster, and saw a life of crime as the best way to fight back against tyranny and oppression.", "I fell in with a gang of reprobates and ne’er-do- wells, and I learned my specialty from them.", "A relative taught me the trade to prepare me for the family trade.", "I left home at a relatively young age, and found refuge in a thieves' guild.", "I was always bored, so I started committing minor crimes to pass the time. The adrenaline rush was addictive, and soon I was going on to bigger and better heists."].random();
            npc.bond = npc.bond || ["I'm trying to pay off an old debt I owe to a generous benefactor.",
                "My ill-gotten gains go to support my family.",
                "Something important was taken from me, and I aim to steal it back.",
                "I will become the greatest thief that ever lived.",
                "I'm guilty of a terrible crime. I hope I can redeem myself for it.",
                "Someone I loved died because of a mistake I made. That will never happen again."].random();
            break;
        case "entertainer":
            npc.backgroundOrigin = npc.backgroundOrigin || ["Members of my family made ends meet by performing, so it was fitting for me to follow their example", "I always had a keen insight into what made other people laugh and cry. A life as an entertainer seemed to be the natural continuation of that.", "I saw a bard perform once, and it inspired me so much that I decided to follow in his footsteps.", "I ran away from home to join a minstrel troupe.", "I earned extra coin by performing on the streets as a child, and I never seemed to stop.", "A traveling entertainer took me in to teach me the trade, and I learned to love it."].random();
            npc.bond = npc.bond || ["My instrument is my most treasured possession, and it reminds me of someone I love.",
                "Someone stole my precious instrument, and someday I'll get it back.",
                "I want to be famous, whatever it takes.",
                "I idolize a hero of the old tales and measure my deeds against that person's.",
                "I will do anything to prove myself superior to my hated rival.",
                "I would do anything for the other members of my old party."].random();
            break;
        case "folk hero":
            npc.backgroundOrigin = npc.backgroundOrigin || ["I learned what was right and wrong from my family.", "I was always enamored by tales of heroes and wished I could be something more than ordinary.", "I hated my mundane life, so when it was time for someone to step up and do the right thing, I took my chance.", "One of my relatives was an adventurer, and l was inspired by that person’s courage.", "A mad old hermit spoke a prophecy when l was born, saying that I would accomplish great things.", "I have always stood up for those who are weaker than me."].random();
            npc.bond = npc.bond || ["I have a family, but I have no idea where they are.  One day, I hope to see them again.",
                "I worked the land, I love the land, and I will protect the land.",
                "A proud noble once gave me a horrible beating, and I will take my revenge on any bully I encounter.",
                "My tools are symbols of my past life, and I carry them so that I will never forget my roots.",
                "I protect those who cannot protect themselves.",
                "I wish my childhood sweetheart had come with me to pursue my destiny."].random();
            break;
        case "guild artisan":
            npc.backgroundOrigin = npc.backgroundOrigin || ["l was apprenticed to a master who taught me the guild’s business.", "I helped a guild artisan keep a secret, and in return, I was taken on as an apprentice.", "One of my relatives who belonged to the guild made a place for me.", "I was always good with my hands, so I figured that I would make something of it.", "I wanted to get away from my home situation and start a new life, so I learned a trade in secret and ran away one night.", "I learned the essentials from an old mentor, but I had to join a guild to finish my learning once he passed away."].random();
            npc.bond = npc.bond || ["The workshop where I learned my trade is the most important place in the world to me.",
                "I created a great work for someone, and then found them unworthy to receive it; I'm still looking for someone worthy.",
                "I owe my guild a great debt for forging me into the person I am today.",
                "I pursue wealth to secure someone's love.",
                "One day I will return to my guild and prove that I am the greatest artisan of them all.",
                "I will get revenge on the evil forces that destroyed my place of business and ruined my livelihood."].random();
            break;
        case "hermit":
            npc.backgroundOrigin = npc.backgroundOrigin || ["My enemy ruined my reputation, and I had to flee to a life of solitude to escape further disparagement.", "I am comfortable with isolation, as I seek inner peace.", "I find myself in love with nature, and prefer the company of the animals and plants to that of people.", "I never liked the people that I grew up with, so it was easy for me to leave it all behind and strike out a new life, alone.", "I felt compelled to forsake my past, and did so with great reluctane. Even now, I sometimes regret my decisions."].random();
            npc.bond = npc.bond || ["Nothing is more important than the other members of my hermitage, order, or association.",
                "I entered seclusion to hide from the ones who might still be hunting me. I must someday confront them.",
                "I'm still seeking the enlightenment I pursued in my seclusion, and it still eludes me.",
                "I entered seclusion because I loved someone I could not have.",
                "Should my discovery come to light, it could bring ruin to the world.",
                "My isolation gave me great insight into a great evil that only I can destroy."].random();
            break;
        case "noble":
            npc.knownLanguages = npc.knownLanguages || availableLanguages.push().random();
            npc.backgroundOrigin = npc.backgroundOrigin || ["My family has been disgraced, and I intend to restore our once pristine reputation.", "I come from an old and storied family, and it fell to me to preserve the family name.", "My family recently came by its title, and that elevation thrust us into a new and strange world.", "My family has a title, but none of my ancestors have done anything of note.", "My family is filled with remarkable people. I hope to live up to their reputation.", "I hope to increase my family's power and influence."].random();
            npc.bond = npc.bond || ["I will face any challenge to win the approval of my family.",
                "My house's alliance with another noble family must be sustained at all costs.",
                "Nothing is more important that the other members of my family.",
                "I am in love with the heir of a family that my family despises.",
                "My loyalty to my sovereign is unwavering.",
                "The common folk must see me as a hero of the people."].random();
            break;
        case "outlander":
            npc.backgroundOrigin = npc.backgroundOrigin || ["I spent a lot of time in the wilderness as a youngster, and I came to love that way of life.", "From a young age, I couldn't abide the stink of cities, and sought out the wilderness for respite from the chaos of people.", "I came to understand the darkness that lurks in the wilds, and l vowed to combat it.", "My people live on the edges of civilisation, and I learned the methods of survival from my family.", "After a personal tragedy, I retreated to the wilderness to be alone with my thoughts.", "My family moved away from civilisation, and I learnt to adapt with the harsh environment."].random();
            npc.bond = npc.bond || ["My family, clan, or tribe is the most important thing in my life, even when they are far from me.",
                "An injury to the unspoiled wilderness of my home is an injury to me.",
                "I will bring terrible wrath down on the evildoers who destroyed my homeland.",
                "I am the last of my tribe, and it is up to me to ensure their names enter legend.",
                "I suffer awful visions of a coming disaster and will do anything to prevent it.",
                "It is my duty to provide children to sustain my tribe."].random();
            break;
        case "sage":
            npc.knownLanguages = npc.knownLanguages || availableLanguages.push().random();
            npc.backgroundOrigin = npc.backgroundOrigin || ["I was naturally curious, so I packed up and went to a university to learn more about the world.", "My mentor’s teachings opened my mind to new possibilities in that field of study.", "I was always an avid reader, and became a sage to learn more from the thousands of books that I tended to.", "I discovered an old library and pored over the texts I found there. That experience awakened a hunger in me for knowledge that I still seek.", "I impressed a traveling wizard, who told me that I was squandering my talents and that I should seek out an education to take advantage of my gifts.", "My father gave me a basic education which whetted my appetite for more knowledge, and I left home to build on what I knew."].random();
            npc.bond = npc.bond || ["It is my duty to protect my students.",
                "I have an ancient text that holds terrible secrets that must not fall into the wrong hands.",
                "I work to preserve a library, university, scriptorium, or monastery.",
                "My life's work is a series of tomes related to a specific field of lore.",
                "I've been searching my whole life for the answer to a certain question.",
                "I sold my soul for knowledge; I hope to do great deeds and win it back."].random();
            break;
        case "sailor":
            npc.backgroundOrigin = npc.backgroundOrigin || ["I was press-ganged by pirates and forced to serve as a deck-hand on their ship until I could escape from their clutches.", "I wanted to see the world, so I signed on as a deck- hand for a merchant ship.", "One of my relatives was a sailor, and took me to sea when I was young, which inspired a life-long love of the oceans and the water.", "I needed to escape from town quickly, so I stowed away on a ship. They found me out, and force me to work as a deck-hand as payment for my passage.", "Reavers attacked my village, and I found refuge in a ship.", "There were few prospects where I was living, so I hopped on board a boat, to seek my fortunes elsewhere."].random();
            npc.bond = npc.bond || ["I'm loyal to my captain first, everything else second.",
                "The ship is most important--crewmates and captains come and go.",
                "I'll always remember my first ship.",
                "In a harbor town, I have a paramour whose eyes nearly stole me from the sea.",
                "I was cheated of my fair share of the profits, and I want to get my due.",
                "Ruthless pirates murdered my captain and crewmates, plundered our ship, and left me to die. Vengeance will be mine."].random();
            break;
        case "soldier":
            npc.backgroundOrigin = npc.backgroundOrigin || ["I wanted fame and fortune, so I signed up to the militia to prove my mettle. I don't think I knew what I was doing, but my determination carried me through my contract, and I never stopped.", "I wanted to protect my village from monsters, so I learnt swordcraft and how to fight. Then I learnt that you could earn coin for it, too.", "I was forced to enlist in the local militia to fight for my lord. Many of my friends are dead because of him.", "Invaders attacked my village, and I vowed to never let my family be unprotected again, so I picked up the sword.", "I was always playing with a sword as a kid, and it wasn't until a visiting adventurer sparred with me for fun that I realised that I had a real talent."].random();
            npc.bond = npc.bond || ["I would lay down my life for the people I served with.",
                "Someone saved my life on the battlefield. To this day, I will never leave a friend behind.",
                "My honor is my life.",
                "I'll never forget the crushing defeat my company suffered or the enemies who dealt it.",
                "Those who fight beside me are those worth dying for.",
                "I fight for those who cannot fight for themselves."].random();
            break;
        case "urchin":
            npc.backgroundOrigin = npc.backgroundOrigin || ["My parents died, leaving nobody to look after me, so I took care of myself.", "I had to escape my homelife. I lived off crumbs and scraps, but it was better than the alternative.", "Raiders attacked my village when I was a child, leaving me the only survivor. I had to walk for three days to the next town over, and begged to survive.", "My family was swindled, and we lost everything we had. I had to beg on the streets to look after my family.", "A thief took me in, and in exchange for food and shelter, I would keep an eye on the streets while he pulled off heists."].random();
            npc.bond = npc.bond || ["My town or city is my home, and I'll fight to defend it.",
                "I sponsor an orphanage to keep others from enduring what I was forced to endure.",
                "I owe my survival to another urchin who taught me to live on the streets.",
                "I owe a debt I can never repay to the person who took pity on me.",
                "I escaped my life of poverty by robbing an important person, and I'm wanted for it.",
                "No one else is going to have to endure the hardships I've been through."].random();
            break;
        case "commoner":
            npc.backgroundOrigin = npc.backgroundOrigin || ["I was born into poverty. I've slowly worked my way to where I am today.", "I had a bad string of bets which left me with no other choice than to skip town.", "I was born into a lowly family, and that's where I'll likely stay.", "I was a soldier in the army, with a lot of potential. But then, I made a tactical mistake, which led to my dismissal.", "I was found guilty of a crime that I did not commit, and was sentenced to serfdom.", "I grew up in a loving household, but all the love in the world could not pay the debts which we had.", "I was one of seven children, and when I was old enough to work, my parents put me to it.", "I was one of eight children, and had to work from a young age to support my family.", "I was the eldest of four children, but when my father died, I had to leave school and work to support my family."].random();
            npc.bond = npc.bond || ["I am trying to pay off a debt that I inherited from my father.",
                "I was swindled out of a large inheritance, and had to go into hiding to keep my family safe.",
                "I was a nobleman once, but made the wrong man an enemy.",
                "I had to sell a magical heirloom to pay off a debt. Now I want to buy it back.",
                "When wandering through a forest, I found a portal to another realm. When I took others to it, it had disappeared. One day I'll find it again.",
                "I followed my beloved here, and we made a life together, until raiders took them in the night. One day, I'll have my revenge.",
                "A witch-doctor had claimed to be able to cure my baby. The bastard had lied, and he died at just six weeks. I'll find him one day, and make him wish he had never been born.",
                "I live for the sea; nothing gives me more pleasure than fishing off my boat.",
                "My home was a simple one, but it had a certain charm about it. An arsonist burnt it down, and I intend to catch them.",
                "The lord that took my daughter as a guarantee for my debt never intended to return her. I intend to make him.",
                "I love the quiet life. Nothing disturbs me more than a disturbance of the peace.",
                "My friends are my world. If my life consists of working for five days, then going to the tavern with my buddies, I will be content.",
                "I know my lot in life; feudalism dictates that one should serve the other. I disagree, and will fight to my dying breath to change the system.",
                "I can't change the past, but I can change my future. I'll work harder and better to provide a better life for my children.",
                "My father was a drunkard, a gambler, and an abusive man. I will break the cycle.",
                "I want to perfect my craft. Nothing gives me more satisfaction than someone praising my work.",
                "When my mother died, I found a list of men in her possessions. One of them is my father. I'll find him.",
                "When I was young, my parents died, and the church took me in. I'll spread the good word, and the work that they do.",
                "My father taught me how to read. All I want to do in life is to further my knowledge on how the world works.",
                "I never learnt how to read. One day, I will be able to tell my son what the words on parchment mean.",
                "I have a tendency to gamble away my earnings. This is the third town I've moved to to escape debtors.",
                "My livelihood depended on a horse, which an adventurer took off with. I'll make him pay.",
                "I used to fear anyone who didn't look like me until some adventurers from distant lands saved my life. Now I want to see the whole world and the planes beyond.",
                "My lord raised the taxes to absurd levels so he could conscript people as punishment. I broke into my lord's manor one night, took a string of pearls, and sold it. I'll never forget that thrill.",
                "I have a knack for magic but my parents couldn't afford a tutor. I want to become the mage I knew I could be.",
                "I am the fifth child and will not inherit anything. I need to find somewhere I can settle down.",
                "I was a farmer, got conscripted, went off to war, and came back broken. I want my grandchildren to have peaceful lives.",
                "I got really drunk, fell asleep in a box that got loaded on a boat, and wound up in a big city I've never heard of. My village is so small and secluded I don't even know what country it's in! How do I get home?",
                "I was the cook for a band of thieves who lived in a forest and stole from the rich to give to the poor. They all got arrested. I need another job I guess.",
                "I was an ordinary maid in a vampire's castle. Some adventurers staked my former boss. I have to readjust to living with the living.",
                "I was the village priest but lost my church when a charismatic preacher moved in and converted all my worshipers. I need a sign from heaven to restore my faith.",
                "I love haggling, meeting new folks, and helping people find what they need. My dream is to build the finest tavern and shop.",
                "I was petrified 1000 years ago by a medusa while foraging for mushrooms. A wizard found and cured me but left without explaining anything. I must readjust and relearn everything!",
                ].random();
            break;
        default:
            npc.backgroundOrigin = npc.backgroundOrigin || ["I was born into poverty. I've slowly worked my way to where I am today.", "I had a bad string of bets which left me with no other choice than to skip town.", "I was born into a lowly family, and that's where I'll likely stay.", "I was a soldier in the army, with a lot of potential. But then, I made a tactical mistake, which led to my dismissal.", "I was found guilty of a crime that I did not commit, and was sentenced to serfdom.", "I grew up in a loving household, but all the love in the world could not pay the debts which we had.", "I was one of seven children, and when I was old enough to work, my parents put me to it.", "I was one of eight children, and had to work from a young age to support my family.", "I was the eldest of four children, but when my father died, I had to leave school and work to support my family."].random();
            npc.bond = npc.bond || ["I am trying to pay off a debt that I inherited from my father.",
                "I was swindled out of a large inheritance, and had to go into hiding to keep my family safe.",
                "I was a nobleman once, but made the wrong man an enemy.",
                "I had to sell a magical heirloom to pay off a debt. Now I want to buy it back.",
                "When wandering through a forest, I found a portal to another realm. When I took others to it, it had disappeared. One day I'll find it again.",
                "I followed my beloved here, and we made a life together, until raiders took them in the night. One day, I'll have my revenge.",
                "A witch-doctor had claimed to be able to cure my baby. The bastard had lied, and he died at just six weeks. I'll find him one day, and make him wish he had never been born.",
                "I live for the sea; nothing gives me more pleasure than fishing off my boat.",
                "My home was a simple one, but it had a certain charm about it. An arsonist burnt it down, and I intend to catch them.",
                "The lord that took my daughter as a guarantee for my debt never intended to return her. I intend to make him.",
                "I love the quiet life. Nothing disturbs me more than a disturbance of the peace.",
                "My friends are my world. If my life consists of working for five days, then going to the tavern with my buddies, I will be content.",
                "I know my lot in life; feudalism dictates that one should serve the other. I disagree, and will fight to my dying breath to change the system.",
                "I can't change the past, but I can change my future. I'll work harder and better to provide a better life for my children.",
                "My father was a drunkard, a gambler, and an abusive man. I will break the cycle.",
                "I want to perfect my craft. Nothing gives me more satisfaction than someone praising my work.",
                "When my mother died, I found a list of men in her possessions. One of them is my father. I'll find him.",
                "When I was young, my parents died, and the church took me in. I'll spread the good word, and the work that they do.",
                "My father taught me how to read. All I want to do in life is to further my knowledge on how the world works.",
                "I never learnt how to read. One day, I will be able to tell my son what the words on parchment mean.",
                "I have a tendency to gamble away my earnings. This is the third town I've moved to to escape debtors.",
                "My livelihood depended on a horse, which an adventurer took off with. I'll make him pay.",
                "I used to fear anyone who didn't look like me until some adventurers from distant lands saved my life. Now I want to see the whole world and the planes beyond.",
                "My lord raised the taxes to absurd levels so he could conscript people as punishment. I broke into my lord's manor one night, took a string of pearls, and sold it. I'll never forget that thrill.",
                "I have a knack for magic but my parents couldn't afford a tutor. I want to become the mage I knew I could be.",
                "I am the fifth child and will not inherit anything. I need to find somewhere I can settle down.",
                "I was a farmer, got conscripted, went off to war, and came back broken. I want my grandchildren to have peaceful lives.",
                "I got really drunk, fell asleep in a box that got loaded on a boat, and wound up in a big city I've never heard of. My village is so small and secluded I don't even know what country it's in! How do I get home?",
                "I was the cook for a band of thieves who lived in a forest and stole from the rich to give to the poor. They all got arrested. I need another job I guess.",
                "I was an ordinary maid in a vampire's castle. Some adventurers staked my former boss. I have to readjust to living with the living.",
                "I was the village priest but lost my church when a charismatic preacher moved in and converted all my worshipers. I need a sign from heaven to restore my faith.",
                "I love haggling, meeting new folks, and helping people find what they need. My dream is to build the finest tavern and shop.",
                "I was petrified 1000 years ago by a medusa while foraging for mushrooms. A wizard found and cured me but left without explaining anything. I must readjust and relearn everything!",
                ].random();
    }

    State.variables.npcs.set(baseName + ++index, npc);
    return npc;

};
