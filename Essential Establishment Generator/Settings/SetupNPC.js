setup.createNPC = function(base) {
    // Tables used later
    var skinColours   = ["translucent", "white", "pale", "fair", "light", "light tan", "tan", "pale", "fair", "light", "light tan", "tan", "dark tan", "brown"];
    var profession    = ["actor", "advocate", "advisor", "animal handler", "apothecary", "architect", "archivist", "armorer", "astrologer", "baker", "banker", "barber", "barkeep", "blacksmith", "bookseller", "brewer", "bricklayer", "brothel keeper", "buccaneer", "butcher", "caravanner", "carpenter", "cartographer", "chandler", "chef", "clock maker", "cobbler", "cook", "counselor", "courtesan", "courtier", "cowherd", "dancer", "diplomat", "distiller", "diver", "farmer", "fisherman", "fishmonger", "gardener", "general", "gladiator", "glovemaker", "goldsmith", "grocer", "guardsman", "guildmaster", "hatmaker", "healer", "herald", "herbalist", "hermit", "historian", "hunter", "ice seller", "innkeeper", "inventor", "jailer", "jester", "jeweler", "judge", "knight", "lady", "leatherworker", "librarian", "linguist", "locksmith", "lord", "lumberjack", "mason", "masseur", "merchant", "messenger", "midwife", "miller", "miner", "minister", "minstrel", "monk", "mortician", "necromancer", "noble", "nun", "nurse", "officer", "painter", "patissier", "perfumer", "philosopher", "physician", "pilgrim", "potter", "priest", "privateer", "professor", "roofer", "ropemaker", "rugmaker", "saddler", "sailor", "scabbard maker", "sculptor", "scavenger", "scholar", "seamstress", "servant", "shaman", "shepherd", "ship's captain", "silversmith", "slave", "slaver", "smith", "soldier", "spice merchant", "squire", "stablehand", "stevedore", "stonemason", "steward", "street seller", "street sweeper", "student", "surgeon", "surveyor", "sailor", "tanner", "tavernkeeper", "tax collector", "teacher", "thatcher", "thief", "torturer", "town crier", "toymaker", "vendor", "veterinarian", "vintner", "weaver", "wetnurse", "woodcarver", "wood seller", "wrestler", "writer"];
    var trait       = ["fidgets", "drinks too much", "eats too much", "swears often", "has poor hygiene", "cannot resist flirting", "cannot stop staring at you", "sweats profusely and easily", "is a habitual liar", "embellishes the truth", "exaggerates details", "has a short temper", "is melodramatic", "gossips about the most mundane things", "cannot resist a juicy secret", "chews with an open mouth", "often sniffs audibly", "is incredibly gullible", "is skeptical of everything", "paces about incessantly", "makes poor eye contact"];
    var currentmood = ["annoyed", "scared", "relaxed", "concerned", "bemused", "stressed", "amused", "content", "distracted"];
    var idle        = ["sitting, with a piece of bread in hand", "sitting, mug in hand", "poring over some map", "reading some letter intently", "reading a book", "shuffling a pack of cards", "chewing on a piece of hay", "sharpening a knife", "buffing a piece of armour", "polishing a shield", "sharpening the blade on a fearsome looking dagger", "cutting an apple into bite sized pieces", "biting into an apple", "eating an apple while looking at some book", "eating a hunk of cheese while reading a book", "sipping out of a huge mug while reading a book", "reading a book titled '<<print $book.pun.pluck()>>'", "reading a book titled '<<print $book.pun.pluck()>>'", "reading a book titled '<<print $book.pun.pluck()>>'"];
    var reading     = ["a piece of history- my forefather's journal, detailing his life in $town.name when it was just a settlement.", "my journal, from many years ago.", "my mother's journal, from just before she disappeared", "a document which I received by postboy two days ago... I believe it is in code, and somebody is trying to tell me something.", "a traitor's memoirs, extremely rare... I thought it would be a good laugh, but some of what he says is concerningly accurate.", "some sort of spell, though I don't know how to read it.", "a document I bought at the flea market; it looks to be a set of instructions on how to make a golem.", "a book which I bought, believing it to be blank, and suitable for a journal. However, now there's this strange foreign script that I can't read in it.", "a book that I bought as a gift for my mother, who loves beautiful covers, despite not being able to read."];

    // Base random variables first - those that don't depend on others
    var npc = Object.assign({
        gender: ["man", "woman"].random(),
        race: ["human", "human", "human", "human", "human", "human", "half-elf", "half-elf", "elf", "elf", "dwarf", "dwarf", "gnome", "halfling", "half-orc", "dragonborn", "tiefling"].random(),
        lastname: State.variables.name.last.random(),
        age: ["childlike", "rather young", "eighteen year old", "surprisingly young", "relatively young", "relatively young", "middle aged", "middle aged", "middle aged", "middle aged", "middle aged", "relatively old", "sun wizened", "quite old", "ancient"].random(),
        demeanour: ["calm", "moody", "kind", "conceited", "cruel", "mean", "careful", "polite", "happy"].random(),
        adventure: ["retired from adventuring", "currently looking for an adventure", "looking for assistance", "recuperating from an adventure", "on a holiday from adventuring", "taking a short break from adventuring"].random(),
        haircolour: ["brunette", "brunette", "brown", "brownish", "auburn", "amber", "hazel", "redhead", "dark redhead", "blonde", "dark blonde", "white", "platinum", "black", "black"].random(),
        hairtype: ["thick", "wispy", "straight", "straight", "wavy", "wavy", "curly", "wiry", "oily", "lush", "poofy", "long", "braided", "very long", "greasy", "unruly", "unusually styled", "short cropped hair"].random(),
        scar: ["a jagged scar", "a dark purple scar", "an angry red scar", "a long, thin scar running up the arm", "a scar on the eye", "a scar around the neck", "a scar on the throat", "a fiery red scar", "a finger missing", "two fingers missing"].random(),
        tattoo: ["a dagger tattoo", "an arrow tattoo", "an anchor tattoo", "a skull tattoo", "a pair of crossed bones tattoo", "a snake tattoo", "a scorpion tattoo", "a spider web tattoo", "a heart tattoo", "a ring of thorns tattoo", "a mermaid tattoo", "a dragon tattoo"].random(),
        dndclass: ["barbarian", "bard", "cleric", "druid", "fighter", "monk", "rogue", "ranger", "paladin", "sorcerer", "warlock", "wizard"].random(),
        background: ["acolyte", "charlatan", "criminal", "entertainer", "folk hero", "guild artisan", "hermit", "noble", "outlander", "sage", "sailor", "soldier", "urchin"].random(),
        pockets: ["5 cp", "6 cp", "15 cp", "22 cp", "27 cp", "5 sp"/*, "5 sp", "6 sp", "7 sp", "2 gp", "34 cp and 4 sp", "12 sp and 7 gp", "a clove of garlic", "a vial of ink worth 8sp", "hardtack", "an explosive rune, dealing 2d4 fire damage", "a palm-sized glass sphere", "a wooden comb", "fragments of a shattered sword", "a deck of tarot cards", "map of a nearby castle", "map of the local area", "a tin spoon", "a mess kit", "lacy undergarments", "spectacles worth 5gp", "a spool of thread", "a piece of chalk", "a necklace of animal teeth", "a headhunter's contract", "a list of people in a nearby city", "a worn leather strap", "a ring of iron keys", "a flask full of salt water", "a box of candles", "a vial of quicksilver", "a traveller's journal", "a lead amulet", "a signet ring for a noble house", "a list of local taverns", "a golden yellow topaz gem worth 50gp", "a page torn from a spellbook", "scraps of bad poetry", "a pair of bloodstained gloves", "thirteen mouse teeth", "a pouch full of dried berries", "an invitation to a wedding that happened a few weeks ago", "a brass ring", "a shopping list", "the cork from a wine bottle", "a scrap of paper with uninteligible writing on it", "a smoking pipe", "a pouch of ruby powder", "a deed to a ruined tower", "a bottle of honey", "a sling with 10 bullets", "a broken buckle", "a knot of silk ribbons", "a silver pearl worth 10gp", "a potion of Polymorph Self worth 350gp", "1pp wrapped in a crude map", "pocket sand", "a wedge of cheese", "a string of wooden prayer beads", "a lock of hair", "a dead mouse", "a compass", "an empty flask", "85gp", "three diamonds worth 30gp each", "a black pearl worth 50gp", "a black opal worth 100gp"*/].random(),
        profession: profession.random(),
        trait: trait.random(),
				currentmood: currentmood,
				idle: idle,
				reading: reading,
        skinColours: skinColours.random(),
    }, base);
    npc.hair = npc.hairtype + " " + npc.haircolour + " hair";
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
                guygirl: "girl",
            });
            break;
    }

    var physicaltraitroll = Math.floor(Math.random() * 10) + 1;
    if (physicaltraitroll > 8)
    {
        npc.physicaltrait = npc.scar;
    }
    else if (physicaltraitroll > 6)
    {
        npc.physicaltrait = npc.tattoo;
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
                height: ["tiny", "short", "slightly below average height", "rather average height", "slightly above average height", "tall", "tall", "tall", "giraffe-like"].random(),
                weight: ["waif-like", "thin", "skinny", "skinny", "wiry", "thin", "stocky", "beefy", "muscular", "slightly underweight", "slightly overweight", "slightly overweight", "round", "tubby", "portly"].random(),
            });
            npc.racenote = npc.height + " " + npc.gender;
            if (npc.gender === "man") {
                npc.firstname = ["Aaryn", "Aaro", "Aarus", "Abramus", "Abrahm", "Abyl", "Abelus", "Adannius", "Adanno", "Aedam", "Adym", "Adamus", "Aedrian", "Aedrio", "Aedyn", "Aidyn", "Aelijah", "Elyjah", "Aendro", "Androe", "Aenry", "Hynroe", "Hynrus", "Aethan", "Aethyn", "Aevan", "Evyn", "Evanus", "Alecks", "Alyx", "Alexandyr", "Xandyr", "Alyn", "Alaen", "Andrus", "Aendrus", "Anglo", "Aenglo", "Anglus", "Antony", "Antonyr", "Astyn", "Astinus", "Axelus", "Axyl", "Benjamyn", "Benjamyr", "Braidyn", "Brydus", "Braddeus", "Brandyn", "Braendyn", "Bryus", "Bryne", "Bryn", "Branus", "Caeleb", "Caelyb", "Caerlos", "Carlus", "Cameryn", "Camerus", "Cartus", "Caertero", "Charlus", "Chaerles", "Chyrles", "Christophyr", "Christo", "Chrystian", "Chrystan", "Connorus", "Connyr", "Daemian", "Damyan", "Daenyel", "Danyel", "Davyd", "Daevo", "Dominac", "Dylaen", "Dylus", "Elius", "Aeli", "Elyas", "Helius", "Helian", "Emilyan", "Emilanus", "Emmanus", "Emynwell", "Ericus", "Eryc", "Eryck", "Ezekius", "Zeckus", "Ezekio", "Ezrus", "Yzra", "Gabrael", "Gaebriel", "Gael", "Gayl", "Gayel", "Gaeus", "Gavyn", "Gaevyn", "Goshwa", "Joshoe", "Graysus", "Graysen", "Gwann", "Ewan", "Gwyllam", "Gwyllem", "Haddeus", "Hudsyn", "Haesoe", "Haesys", "Haesus", "Handus", "Handyr", "Hantus", "Huntyr", "Haroldus", "Haryld", "Horgus", "Horus", "Horys", "Horyce", "Hosea", "Hosius", "Iaen", "Yan", "Ianus", "Ivaen", "Yvan", "Jaecoby", "Jaecob", "Jaeden", "Jaedyn", "Jaeremiah", "Jeremus", "Jasyn", "Jaesen", "Jaxon", "Jaxyn", "Jaxus", "Johnus", "Jonus", "Jonaeth", "Jonathyn", "Jordus", "Jordyn", "Josaeth", "Josephus", "Josaeus", "Josayah", "Jovanus", "Giovan", "Julyan", "Julyo", "Jyck", "Jaeck", "Jacus", "Kaevin", "Kevyn", "Vinkus", "Laevi", "Levy", "Levius", "Landyn", "Laendus", "Leo", "Leonus", "Leonaerdo", "Leonyrdo", "Lynardus", "Lincon", "Lyncon", "Linconus", "Logaen", "Logus", "Louis", "Lucius", "Lucae", "Lucaen", "Lucaes", "Lucoe", "Lucus", "Lyam", "Maeson", "Masyn", "Maetho", "Mathoe", "Matteus", "Matto", "Maxus", "Maximus", "Maximo", "Maxymer", "Mychael", "Mygwell", "Miglus", "Mythro", "Mithrus", "Naemo", "Naethyn", "Nathanus", "Naethynel", "Nicholaes", "Nycholas", "Nicholys", "Nicolus", "Nolyn", "Nolanus", "Olivyr", "Alivyr", "Olivus", "Oscarus", "Oscoe", "Raen", "Ryn", "Robertus", "Robett", "Bertus", "Romyn", "Romanus", "Ryderus", "Ridyr", "Samwell", "Saemuel", "Santegus", "Santaegus", "Sybasten", "Bastyen", "Tago", "Aemo", "Tagus", "Theodorus", "Theodus", "Thaeodore", "Thomys", "Thomas", "Tommus", "Tylus", "Tilyr", "Uwyn", "Oewyn", "Victor", "Victyr", "Victorus", "Vincynt", "Vyncent", "Vincentus", "Wyttus", "Wyaett", "Xavius", "Havius", "Xavyer", "Yago", "Tyago", "Tyego", "Ysaac", "Aisaac", "Ysaiah", "Aisiah", "Siahus", "Zacharus", "Zachar", "Zachaery"].random();
            } else if (npc.gender === "woman") {
                npc.firstname = ["Abigayl", "Aebria", "Aeobreia", "Breia", "Aedria", "Aodreia", "Dreia", "Aeliya", "Aliya", "Aella", "Aemilya", "Aemma", "Aemy", "Amy", "Ami", "Aeria", "Arya", "Aeva", "Aevelyn", "Evylann", "Alaexa", "Alyxa", "Alina", "Aelina", "Aelinea", "Allisann", "Allysann", "Alyce", "Alys", "Alysea", "Alyssia", "Aelyssa", "Amelya", "Maelya", "Andreya", "Aendrea", "Arianna", "Aryanna", "Arielle", "Aryell", "Ariella", "Ashlena", "Aurora", "Avaery", "Avyrie", "Bella", "Baella", "Brooklinea", "Bryanna", "Brynna", "Brinna", "Caemila", "Chloe", "Chloeia", "Claira", "Clayre", "Clayra", "Delyla", "Dalyla", "Elisybeth", "Aelisabeth", "Ellia", "Ellya", "Elyana", "Eliana", "Eva", "Falyne", "Genaesis", "Genaesys", "Gianna", "Jianna", "Janna", "Graece", "Grassa", "Haenna", "Hanna", "Halya", "Harperia", "Peria", "Hazyl", "Hazel", "Jasmyne", "Jasmine", "Jocelyne", "Joceline", "Celine", "Kaelia", "Kaelya", "Kathryne", "Kathrine", "Kayla", "Kaila", "Kymber", "Kimbera", "Layla", "Laylanna", "Leia", "Leya", "Leah", "Lilia", "Lylia", "Luna", "Maedisa", "Maelania", "Melania", "Maya", "Mya", "Myla", "Milae", "Naomi", "Naome", "Natalya", "Talya", "Nathylie", "Nataliae", "Thalia", "Nicola", "Nikola", "Nycola", "Olivya", "Alivya", "Penelope", "Paenelope", "Pynelope", "Rianna", "Ryanna", "Ruby", "Ryla", "Samaentha", "Samytha", "Sara", "Sarah", "Savannia", "Scarletta", "Sharlotta", "Caerlotta", "Sophya", "Stella", "Stylla", "Valentyna", "Valerya", "Valeria", "Valia", "Valea", "Victorya", "Vilettia", "Ximena", "Imaena", "Ysabel", "Zoe", "Zoeia", "Zoea", "Zoesia"].random();
            }
            break;
        case "elf":
            Object.assign(npc, {
                eyes: ["yellow", "amber", "brown", "hazel", "green", "blue", "gray", "aqua", "purple", "pale brown", "pale blue", "pale green", "ash gray"].random(),
                racesingular: "elf",
                raceplural: "elves",
                raceadjective: "elfish",
                racelanguage: "Elven",
                height: ["rather average height", "slightly above average height", "tall", "tall", "tall"].random(),
                weight: ["waif-like", "thin", "skinny", "skinny", "wiry", "thin", "stocky", "slightly underweight"].random(),
            });
            npc.racenote = npc.race;
            if (npc.gender === "man") {
                npc.firstname = ["Adran", "Aelar", "Aerdeth", "Ahvain", "Aramil", "Arannis", "Aust", "Azaki", "Beiro", "Berrian", "Caeldrim", "Carric", "Dayereth", "Dreali", "Efieril", "Eiravel", "Enialis", "Erdan", "Erevan", "Fivin", "Galinndan", "Gennal", "Hadarai", "Halimath", "Heian", "Himo", "Immeral",
							"Ivellios", "Korfel", "Lamlis", "Laucian", "Lucan", "Mindartis", "Naal", "Nutae", "Paelias", "Peren", "Quarion", "Riardon", "Rolen",
							"Soveliss", "Suhnae", "Thamior", "Tharivol", "Theren", "Theriatis", "Thervan", "Uthemar", "Vanuath", "Varis"].random();
            } else if (npc.gender === "woman") {
                npc.firstname = ["Adria", "Ahinar", "Althaea", "Anastrianna", "Andraste", "Antinua", "Arara", "Baelitae", "Bethrynna", "Birel", "Caelynn", "Chaedi", "Claira", "Dara", "Drusilia", "Elama", "Enna", "Faral", "Felosial", "Hatae", "Ielenia", "Ilanis", "Irann", "Jarsali", "Jelenneth", "Keyleth", "Leshanna", "Lia", "Maiathah", "Malquis", "Meriele", "Mialee", "Myathethil", "Naivara", "Quelenna", "Quillathe", "Ridaro", "Sariel", "Shanairla", "Shava", "Silaqui", "Sumnes", "Theirastra", "Thiala", "Tiaathque", "Traulam", "Vadania", "Valanthe", "Valna", "Xanaphia"].random();
            }
            break;
        case "dwarf":
            Object.assign(npc, {
                eyes: ["yellow", "amber", "brown", "dark brown", "hazel", "green", "blue", "gray", "brown", "dark brown", "hazel", "green", "blue", "gray", "aqua"].random(),
                racesingular: "dwarf",
                raceplural: "dwarves",
                raceadjective: "dwarven",
                racelanguage: "Dwarven",
                height: ["short", "squat"].random(),
                weight: ["stocky", "beefy", "muscular", "slightly underweight", "slightly overweight", "slightly overweight", "round", "tubby", "portly"].random(),
            });
            npc.racenote = npc.race;
            if (npc.gender === "man") {
                npc.firstname = ["Adrik", "Alberich", "Baern", "Barendd", "Beloril", "Brottor", "Dain", "Dalgal", "Darrak", "Delg", "Duergath", "Dworic", "Eberk", "Einkil", "Elaim", "Erias", "Fallond", "Fargrim", "Gardain", "Garur", "Gimgen", "Gimurt", "Harbek", "Kildrak", "Kilvar", "Morgran", "Morkral", "Nalral", "Nordak", "Nuraval", "Oloric", "Olunt", "Orsik", "Oskar", "Rangfim", "Reirak", "Rurik", "Taklinn", "Thoradin", "Thorin", "Thradal", "Tordek", "Traubon", "Travok", "Ulfgar", "Urain", "Veit", "Vonbin", "Vondal", "Whurbin"].random();
            } else if (npc.gender === "woman") {
                npc.firstname = ["Anbera", "Artin", "Audhild", "Balifra", "Barbena", "Bardryn", "Bolhild", "Dagnal", "Dafifi", "Delre", "Diesa", "Hdeth", "Eridred", "Falkrann", "Fallthra", "Finelien", "Gillydd", "Gunnloa", "Gurdis", "Helgret", "Helja", "Hihna", "Illde", "Jarana", "Kathra", "Kilia", "Kristryd", "Liftrasa", "Marastyr", "Mardred", "Morana", "Nalaed", "Nora", "Nurkara", "Orifi", "Ovina", "Riswynn", "Sannl", "Therlin", "Thodris", "Torbera", "Tordrid", "Torgga", "Urshar", "Valida", "Vistra", "Vonana", "Werydd", "Whurdred", "Yurgunn"].random();
            }
            break;
        case "halfling":
            Object.assign(npc, {
                eyes: ["yellow", "amber", "brown", "hazel", "green", "blue", "gray", "aqua", "red", "purple", "pale brown", "pale blue", "pale green", "ash gray"].random(),
                racesingular: "halfling",
                raceplural: "hobbits",
                raceadjective: "halfling",
                racelanguage: "Halfling",
                height: ["short", "tiny", "diminuitive", "little"].random(),
                weight: ["waif-like", "thin", "skinny", "skinny", "wiry", "thin", "stocky", "beefy", "muscular", "slightly underweight"].random(),
            });
            npc.racenote = npc.race;
            if (npc.gender === "man") {
                npc.firstname = ["Alton", "Ander", "Bernie", "Bobbin", "Cade", "Callus", "Corrin", "Dannad", "Danniel", "Eddie", "Egart", "Eldon", "Errich", "Fildo", "Finnan", "Franklin", "Garret", "Garth", "Gilbert", "Gob", "Harol", "Igor", "Jasper", "Keith", "Kevin", "Lazam", "Lerry", "Lindal", "Lyle", "Merric", "Mican", "Milo", "Morrin", "Nebin", "Nevil", "Osborn", "Ostran", "Oswalt", "Perrin", "Poppy", "Reed", "Roscoe", "Sam", "Shardon", "Tye", "Ulmo", "Wellby", "Wendel", "Wenner", "Wes"].random();
            } else if (npc.gender === "woman") {
                npc.firstname = ["Alain", "Andry", "Anne", "Bella", "Blossom", "Bree", "Callie", "Chenna", "Cora", "Dee", "Dell", "Eida", "Eran", "Euphamia", "Georgina", "Gynnie", "Harriet", "Jasmine", "Jillian", "Jo", "Kithri", "Lavinia", "Lidda", "Maegan", "Marigold", "Merla", "Myria", "Nedda", "Nikki", "Nora", "Olivia", "Paela", "Pearl", "Pennie", "Philomena", "Portia", "Robbie", "Rose", "Saral", "Seraphina", "Shaena", "Stacee", "Tawna", "Thea", "Trym", "Tyna", "Vani", "Verna", "Wella", "Willow"].random();
            }
            break;
        case "half-orc":
            Object.assign(npc, {
                eyes: ["yellow", "amber", "orange", "brown", "hazel", "yellow", "amber", "orange", "brown", "hazel", "green", "blue", "gray", "aqua", "red"].random(),
                racesingular: "half-orc",
                raceplural: "half-orcs",
                raceadjective: "orcish", /* not "demiorcish"? */
                racelanguage: "Orcish",
                height: ["rather average height", "slightly above average height", "tall", "tall", "intimidatingly tall"].random(),
                weight: ["slightly underweight", "stocky", "beefy", "muscular", "extremely muscular", "slightly overweight"].random(),
            });
            npc.racenote = npc.race;
            if (npc.gender === "man") {
                npc.firstname = ["Argran", "Braak", "Brug", "Cagak", "Dench", "Dorn", "Dren", "Druuk", "Feng", "Gell", "Gnarsh", "Grurnbar", "Gubrash", "Hagren", "Henk", "Hogar", "Holg", "Imsh", "Karash", "Karg", "Keth", "Korag", "Krusk", "Lubash", "Megged", "Mhurren", "Mhflord", "Morg", "Nil", "Nybarg", "Odorr", "Ohr", "Rendar", "Resh", "Ront", "Rrath", "Sark", "Scrag", "Sheggen", "Shump", "Tanglar", "Tarak", "Thrag", "Thokk", "Trag", "Ugarth", "Varg", "Vilberg", "Yurk", "Zed"].random();
            } else if (npc.gender === "woman") {
                npc.firstname = ["Arha", "Baggi", "Bendoo", "Bilga", "Brakka", "Creega", "Drenna", "Ekk", "Emen", "Engong", "Fistula", "Gaaki", "Gorga", "Grai", "Greeba", "Grigi", "Gynk", "Hrathy", "Huru", "Ilga", "Kabbarg", "Kansif", "Lagazi", "Lexre", "Murgen", "Murook", "Myev", "Nagarette", "Neega", "Nella", "Nogu", "Oolah", "Ootah", "Ovak", "Ownka", "Puyet", "Reeza", "Shautha", "Silgre", "Sutha", "Tagga", "Tawar", "Tomph", "Ubada", "Vanchu", "Vola", "Volen", "Vorka", "Yevelda", "Zagga"].random();
            }
            break;
        case "dragonborn":
            Object.assign(npc, {
                eyes: ["yellow", "amber", "yellow", "amber", "brown", "hazel", "green", "blue", "gray", "aqua", "red", "purple", "aqua", "red", "purple", "gold", "gold"].random(),
                racesingular: "drake",
                raceplural: "drakes",
                raceadjective: "draconian",
                racelanguage: "Draconic",
                height: ["rather average height", "slightly above average height", "tall", "tall", "tall"].random(),
                weight: ["stocky", "beefy", "muscular", "slightly underweight", "extremely muscular", "slightly overweight"].random(),
            });
            npc.racenote = npc.race;
            if (npc.gender === "man") {
                npc.firstname = ["Adrex", "Arjhan", "Azzakh", "Balasar", "Baradad", "Bharash", "Bidreked", "Dadalan", "Dazzazn", "Direcris", "Donaar", "Fax", "Gargax", "Ghesh", "Gorbundus", "Greethen", "Heskan", "Hirrathak", "Illdrex", "Kaladan", "Kerkad", "Kiirith", "Kriv", "Maagog", "Medrash", "Mehen", "Mozikth", "Mreksh", "Mugrunden", "Nadarr", "Nithther", "Norkruuth", "Nykkan", "Pandjed", "Patrin", "Pijjink", "Quarethon", "Rathkran", "Rhogar", "Rivaan", "Sethrekar", "Shamash", "Shedinn", "Srorthen", "Tarhun", "Torinn", "Trynnicus", "Valorean", "Vrondiss", "Zedaar"].random();
            } else if (npc.gender === "woman") {
                npc.firstname = ["Akra", "Aasathra", "Antrara", "Arava", "Biri", "Blendaeth", "Burana", "Chassath", "Daar", "Dentratha", "Doudra", "Driindar", "Eggren", "Farideh", "Findex", "Furrele", "Gesrethe", "Gilkass", "Harann", "Havilar", "Hethress", "Hillanot", "Jaxi", "Jezean", "Jheri", "Kadana", "Kava", "Koflnn", "Megren", "Mijira", "Mishann", "Nala", "Nuthra", "Perra", "Pogranix", "Pyxrin", "Quespa", "Raiann", "Rezena", "Ruloth", "Saphara", "Savaran", "Sora", "Surina", "Synthrin", "Tatyan", "Thava", "Uadflt", "Vezera", "Zykrofl"].random();
            }
            break;
        case "tiefling":
            Object.assign(npc, {
                eyes: ["yellow", "amber", "brown", "hazel", "green", "blue", "aqua", "red", "purple", "pale brown", "pale blue", "pale green", "ash gray", "violet red", "aquamarine", "deep blue", "spring green", "sea green", "emerald green"].random(),
                racesingular: "tiefling",
                raceplural: "tieflings",
                raceadjective: "devilish",
                racelanguage: "Demonic",
                height: ["tiny", "short", "slightly below average height", "rather average height", "slightly above average height", "tall", "tall", "tall", "giraffe-like"].random(),
                weight: ["waif-like", "thin", "skinny", "skinny", "wiry", "thin", "stocky", "beefy", "muscular", "slightly underweight"].random(),
            });
            npc.racenote = npc.race;
            if (npc.gender === "man") {
                npc.firstname = ["Abad", "Ahrun", "Akwmn", "Anmon", "Andram", "Astar", "Bmam", "Barakas", "Bathin", "Cann", "Chem", "Chner", "Cressel", "Danmkos", "Ekmnon", "Euron", "Fennz", "Forcas", "Habor", "Iados", "Kauon", "Leucs", "Manmen", "Mantus", "Marbas", "Melech", "Merihim", "Modean", "Mordai", "Mormo", "Morthos", "Nicor", "Nirgel", "Oriax", "Paynon", "Pelaios", "Purson", "Qemud", "Raam", "Rimmon", "Sammal", "Skamos", "Tethren", "Thamuz", "Therai", "Valafar", "Vassago", "Xappan", "Zepar", "Zephan"].random();
            } else if (npc.gender === "woman") {
                npc.firstname = ["Akta", "Anakis", "Armara", "Astaro", "Aym", "Azza", "Beleth", "Bryseis", "Bune", "Criella", "Damaia", "Decarabia", "Ea", "Gadreel", "Gomory", "Hecat", "Ishte", "Jezebeth", "Kali", "Kalista", "Kasdeya", "Lerissa", "Lilith", "Makaria", "Manea", "Markosian", "Mastema", "Namnah", "Nemem", "Nija", "Orianna", "Osah", "Phelaia", "Prosperine", "Purah", "Pyra", "Pyranna", "Ronobe", "Ronwe", "Seddit", "Seere", "Sekhmet", "Semyaza", "Shava", "Shax", "Sorath", "Uzza", "Vapula", "Vepar", "Verin"].random();
            }
            break;
        case "half-elf":
            Object.assign(npc, {
                eyes: ["yellow", "amber", "brown", "hazel", "green", "blue", "gray", "aqua", "red", "purple", "pale brown", "pale blue", "pale green", "ash gray"].random(),
                racesingular: "half-elf",
                raceplural: "half-elves",
                raceadjective: "elfish",
                racelanguage: "Elven",
                height: ["rather average height", "slightly above average height", "tall", "tall", "tall"].random(),
                weight: ["waif-like", "thin", "skinny", "skinny", "wiry", "thin", "stocky", "beefy", "muscular", "slightly underweight"].random(),
            });
            npc.racenote = npc.race;
            if (npc.gender === "man") {
                npc.firstname = [["Adran", "Aelar", "Aerdeth", "Ahvain", "Aramil", "Arannis", "Aust", "Azaki", "Beiro", "Berrian", "Caeldrim", "Carric", "Dayereth", "Dreali", "Efieril", "Eiravel", "Enialis", "Erdan", "Erevan", "Fivin", "Galinndan", "Gennal", "Hadarai", "Halimath", "Heian", "Himo", "Immeral",
							"Ivellios", "Korfel", "Lamlis", "Laucian", "Lucan", "Mindartis", "Naal", "Nutae", "Paelias", "Peren", "Quarion", "Riardon", "Rolen",
							"Soveliss", "Suhnae", "Thamior", "Tharivol", "Theren", "Theriatis", "Thervan", "Uthemar", "Vanuath", "Varis"].random(), ["Aaryn", "Aaro", "Aarus", "Abramus", "Abrahm", "Abyl", "Abelus", "Adannius", "Adanno", "Aedam", "Adym", "Adamus", "Aedrian", "Aedrio", "Aedyn", "Aidyn", "Aelijah", "Elyjah", "Aendro", "Androe", "Aenry", "Hynroe", "Hynrus", "Aethan", "Aethyn", "Aevan", "Evyn", "Evanus", "Alecks", "Alyx", "Alexandyr", "Xandyr", "Alyn", "Alaen", "Andrus", "Aendrus", "Anglo", "Aenglo", "Anglus", "Antony", "Antonyr", "Astyn", "Astinus", "Axelus", "Axyl", "Benjamyn", "Benjamyr", "Braidyn", "Brydus", "Braddeus", "Brandyn", "Braendyn", "Bryus", "Bryne", "Bryn", "Branus", "Caeleb", "Caelyb", "Caerlos", "Carlus", "Cameryn", "Camerus", "Cartus", "Caertero", "Charlus", "Chaerles", "Chyrles", "Christophyr", "Christo", "Chrystian", "Chrystan", "Connorus", "Connyr", "Daemian", "Damyan", "Daenyel", "Danyel", "Davyd", "Daevo", "Dominac", "Dylaen", "Dylus", "Elius", "Aeli", "Elyas", "Helius", "Helian", "Emilyan", "Emilanus", "Emmanus", "Emynwell", "Ericus", "Eryc", "Eryck", "Ezekius", "Zeckus", "Ezekio", "Ezrus", "Yzra", "Gabrael", "Gaebriel", "Gael", "Gayl", "Gayel", "Gaeus", "Gavyn", "Gaevyn", "Goshwa", "Joshoe", "Graysus", "Graysen", "Gwann", "Ewan", "Gwyllam", "Gwyllem", "Haddeus", "Hudsyn", "Haesoe", "Haesys", "Haesus", "Handus", "Handyr", "Hantus", "Huntyr", "Haroldus", "Haryld", "Horgus", "Horus", "Horys", "Horyce", "Hosea", "Hosius", "Iaen", "Yan", "Ianus", "Ivaen", "Yvan", "Jaecoby", "Jaecob", "Jaeden", "Jaedyn", "Jaeremiah", "Jeremus", "Jasyn", "Jaesen", "Jaxon", "Jaxyn", "Jaxus", "Johnus", "Jonus", "Jonaeth", "Jonathyn", "Jordus", "Jordyn", "Josaeth", "Josephus", "Josaeus", "Josayah", "Jovanus", "Giovan", "Julyan", "Julyo", "Jyck", "Jaeck", "Jacus", "Kaevin", "Kevyn", "Vinkus", "Laevi", "Levy", "Levius", "Landyn", "Laendus", "Leo", "Leonus", "Leonaerdo", "Leonyrdo", "Lynardus", "Lincon", "Lyncon", "Linconus", "Logaen", "Logus", "Louis", "Lucius", "Lucae", "Lucaen", "Lucaes", "Lucoe", "Lucus", "Lyam", "Maeson", "Masyn", "Maetho", "Mathoe", "Matteus", "Matto", "Maxus", "Maximus", "Maximo", "Maxymer", "Mychael", "Mygwell", "Miglus", "Mythro", "Mithrus", "Naemo", "Naethyn", "Nathanus", "Naethynel", "Nicholaes", "Nycholas", "Nicholys", "Nicolus", "Nolyn", "Nolanus", "Olivyr", "Alivyr", "Olivus", "Oscarus", "Oscoe", "Raen", "Ryn", "Robertus", "Robett", "Bertus", "Romyn", "Romanus", "Ryderus", "Ridyr", "Samwell", "Saemuel", "Santegus", "Santaegus", "Sybasten", "Bastyen", "Tago", "Aemo", "Tagus", "Theodorus", "Theodus", "Thaeodore", "Thomys", "Thomas", "Tommus", "Tylus", "Tilyr", "Uwyn", "Oewyn", "Victor", "Victyr", "Victorus", "Vincynt", "Vyncent", "Vincentus", "Wyttus", "Wyaett", "Xavius", "Havius", "Xavyer", "Yago", "Tyago", "Tyego", "Ysaac", "Aisaac", "Ysaiah", "Aisiah", "Siahus", "Zacharus", "Zachar", "Zachaery"].random()].random();
            } else if (npc.gender === "woman") {
                npc.firstname = [["Abigayl", "Aebria", "Aeobreia", "Breia", "Aedria", "Aodreia", "Dreia", "Aeliya", "Aliya", "Aella", "Aemilya", "Aemma", "Aemy", "Amy", "Ami", "Aeria", "Arya", "Aeva", "Aevelyn", "Evylann", "Alaexa", "Alyxa", "Alina", "Aelina", "Aelinea", "Allisann", "Allysann", "Alyce", "Alys", "Alysea", "Alyssia", "Aelyssa", "Amelya", "Maelya", "Andreya", "Aendrea", "Arianna", "Aryanna", "Arielle", "Aryell", "Ariella", "Ashlena", "Aurora", "Avaery", "Avyrie", "Bella", "Baella", "Brooklinea", "Bryanna", "Brynna", "Brinna", "Caemila", "Chloe", "Chloeia", "Claira", "Clayre", "Clayra", "Delyla", "Dalyla", "Elisybeth", "Aelisabeth", "Ellia", "Ellya", "Elyana", "Eliana", "Eva", "Falyne", "Genaesis", "Genaesys", "Gianna", "Jianna", "Janna", "Graece", "Grassa", "Haenna", "Hanna", "Halya", "Harperia", "Peria", "Hazyl", "Hazel", "Jasmyne", "Jasmine", "Jocelyne", "Joceline", "Celine", "Kaelia", "Kaelya", "Kathryne", "Kathrine", "Kayla", "Kaila", "Kymber", "Kimbera", "Layla", "Laylanna", "Leia", "Leya", "Leah", "Lilia", "Lylia", "Luna", "Maedisa", "Maelania", "Melania", "Maya", "Mya", "Myla", "Milae", "Naomi", "Naome", "Natalya", "Talya", "Nathylie", "Nataliae", "Thalia", "Nicola", "Nikola", "Nycola", "Olivya", "Alivya", "Penelope", "Paenelope", "Pynelope", "Rianna", "Ryanna", "Ruby", "Ryla", "Samaentha", "Samytha", "Sara", "Sarah", "Savannia", "Scarletta", "Sharlotta", "Caerlotta", "Sophya", "Stella", "Stylla", "Valentyna", "Valerya", "Valeria", "Valia", "Valea", "Victorya", "Vilettia", "Ximena", "Imaena", "Ysabel", "Zoe", "Zoeia", "Zoea", "Zoesia"].random(), ["Adria", "Ahinar", "Althaea", "Anastrianna", "Andraste", "Antinua", "Arara", "Baelitae", "Bethrynna", "Birel", "Caelynn", "Chaedi", "Claira", "Dara", "Drusilia", "Elama", "Enna", "Faral", "Felosial", "Hatae", "Ielenia", "Ilanis", "Irann", "Jarsali", "Jelenneth", "Keyleth", "Leshanna", "Lia", "Maiathah", "Malquis", "Meriele", "Mialee", "Myathethil", "Naivara", "Quelenna", "Quillathe", "Ridaro", "Sariel", "Shanairla", "Shava", "Silaqui", "Sumnes", "Theirastra", "Thiala", "Tiaathque", "Traulam", "Vadania", "Valanthe", "Valna", "Xanaphia"].random()].random();
            }
            break;
        case "gnome":
            Object.assign(npc, {
                eyes: ["yellow", "amber", "brown", "hazel", "green", "blue", "gray", "aqua", "red", "purple", "pale brown", "pale blue", "pale green", "ash gray"].random(),
                racesingular: "gnome",
                raceplural: "gnomes",
                raceadjective: "gnomish",
                racelanguage: "Gnomish",
                height: ["short", "tiny"].random(),
                weight: ["slightly underweight", "stocky", "beefy", "slightly overweight", "slightly overweight", "round", "tubby"].random(),
            });
            npc.racenote = npc.race;
            if (npc.gender === "man") {
                npc.firstname = ["Alston", "Alvyn", "Anverth", "Arumawann", "Bilbron", "Boddynock", "Brocc", "Burgell", "Cockaby", "Crampernap", "Dabbledob", "Delebean", "Dimble", "Eberdeb", "Eldon", "Erky", "Fablen", "Fibblestib", "Fonkin", "Frouse", "Frug", "Gerbo", "Gimble", "Glim", "lgden", "Jabble", "Jebeddo", "Kellen", "Kipper", "Namfoodle", "Oppleby", "Orryn", "Paggen", "PaHabar", "Pog", "Qualen", "Ribbles", "Rimple", "Roondar", "Sappw", "Seebo", "Senteq", "Sindri", "Umpen", "Warryn", "Wiggens", "Wobbles", "Wrenn", "Zaffrab", "Zook"].random();
            } else if (npc.gender === "woman") {
                npc.firstname = ["Abalaba", "Bimpnottin", "Breena", "Buvvie", "Callybon", "Caramip", "Carlin", "Cumpen", "Dalaba", "Donella", "Duvamil", "Ella", "Ellyjoybell", "Ellywick", "Enidda", "Lilli", "Loopmottin", "Lorilla", "Luthra", "Mardnab", "Meena", "Menny", "Mumpena", "Nissa", "Numba", "Nyx", "Oda", "Oppah", "Orla", "Panana", "Pynfle", "Quilla", "Ranala", "Reddlepop", "Roywyn", "Salanop", "Shamil", "Sifiress", "Symma", "Tana", "Tenena", "Tervaround", "Tippletoe", "Ulia", "Unvera", "Veloptima", "Virra", "Waywocket", "Yebe", "Zanna"].random();
            }
            break;
    }

    switch (npc.dndclass) {
        case "barbarian":
            npc.background = npc.background || ["charlatan", "criminal", "folk hero", "hermit", "hermit", "hermit", "hermit", "hermit", "outlander", "outlander", "outlander", "outlander", "outlander", "sailor", "soldier", "soldier", "soldier", "urchin"].random();
            break;
        case "bard":
            npc.background = npc.background || ["charlatan", "charlatan", "criminal", "entertainer", "entertainer", "entertainer", "entertainer", "entertainer", "entertainer", "folk hero", "folk hero", "guild artisan", "guild artisan", "noble", "outlander", "sailor", "soldier", "urchin"].random();
            break;
        case "cleric":
            npc.background = npc.background || ["acolyte", "acolyte", "acolyte", "acolyte", "acolyte", "charlatan", "criminal", "entertainer", "folk hero", "folk hero", "folk hero", "guild artisan", "guild artisan", "hermit", "hermit", "noble", "noble", "noble", "sage", "sage", "sage", "sage", "sailor", "soldier", "urchin"].random();
            break;
        case "druid":
            npc.background = npc.background || ["acolyte", "acolyte", "acolyte", "charlatan", "folk hero", "folk hero", "folk hero", "hermit", "hermit", "hermit", "hermit", "hermit", "noble", "noble", "outlander", "outlander", "outlander", "outlander", "sage", "sage", "sage", "sailor", "soldier", "urchin"].random();
            break;
        case "fighter":
            npc.background = npc.background || ["acolyte", "charlatan", "criminal", "criminal", "criminal", "entertainer", "folk hero", "folk hero", "folk hero", "guild artisan", "hermit", "noble", "outlander", "outlander", "sage", "sailor", "sailor", "sailor", "soldier", "soldier", "soldier", "soldier", "soldier", "soldier", "urchin"].random();
            break;
        case "monk":
            npc.background = npc.background || ["acolyte", "acolyte", "acolyte", "acolyte", "charlatan", "criminal", "folk hero", "guild artisan", "hermit", "hermit", "hermit", "noble", "noble", "outlander", "sage", "sage", "sage", "soldier", "urchin"].random();
            break;
        case "rogue":
            npc.background = npc.background || ["charlatan", "charlatan", "charlatan", "criminal", "criminal", "criminal", "criminal", "criminal", "criminal", "folk hero", "folk hero", "guild artisan", "guild artisan", "hermit", "noble", "noble", "outlander", "sailor", "soldier", "urchin", "urchin", "urchin", "urchin", "urchin"].random();
            break;
        case "ranger":
            npc.background = npc.background || ["acolyte", "acolyte", "charlatan", "criminal", "entertainer", "folk hero", "folk hero", "folk hero", "folk hero", "guild artisan", "hermit", "hermit", "hermit", "hermit", "outlander", "outlander", "outlander", "outlander", "sage", "sailor", "soldier", "soldier", "soldier", "urchin"].random();
            break;
        case "paladin":
            npc.background = npc.background || ["acolyte", "acolyte", "acolyte", "acolyte", "charlatan", "criminal", "entertainer", "folk hero", "folk hero", "folk hero", "folk hero", "guild artisan", "hermit", "noble", "noble", "noble", "noble", "noble", "outlander", "sage", "sailor", "soldier", "soldier", "soldier", "soldier", "soldier", "urchin", "urchin", "urchin", "urchin"].random();
            break;
        case "sorcerer":
            npc.background = npc.background || ["acolyte", "acolyte", "acolyte", "acolyte", "charlatan", "charlatan", "charlatan", "charlatan", "criminal", "entertainer", "entertainer", "folk hero", "folk hero", "guild artisan", "hermit", "noble", "noble", "noble", "outlander", "sage", "sage", "sage", "sailor", "soldier", "urchin"].random();
            break;
        case "warlock":
            npc.background = npc.background || ["acolyte", "acolyte", "acolyte", "acolyte", "acolyte", "acolyte", "charlatan", "criminal", "entertainer", "folk hero", "guild artisan", "hermit", "hermit", "hermit", "hermit", "hermit", "hermit", "noble", "noble", "noble", "outlander", "sage", "sage", "sage", "sage", "sage", "sailor", "soldier", "urchin"].random();
            break;
        case "wizard":
            npc.background = npc.background || ["acolyte", "acolyte", "acolyte", "acolyte", "acolyte", "acolyte", "charlatan", "criminal", "entertainer", "folk hero", "guild artisan", "hermit", "hermit", "hermit", "hermit", "hermit", "hermit", "noble", "noble", "noble", "outlander", "sage", "sage", "sage", "sage", "sage", "sailor", "soldier", "urchin"].random();
            break;
    }


    switch (npc.background) {
        case "acolyte":
            npc.bond = npc.bond || ["I would die to recover an ancient artifact of my faith that was lost long ago.",
                "I will someday get revenge on the corrupt temple hierarchy who branded me a heretic.",
                "I owe me life to the priest <<print $name.man.pluck()>> who took me in when my parents died.",
                "Everything I do is for the common people.",
                "I will do anything to protect the temple where I served.",
                "I seek to preserve a sacred text that my enemies consider heretical and seek to destroy."].random();
            break;
        case "charlatan":
            npc.bond = npc.bond || ["I fleeced the wrong person, a lord called <<print $name.man.pluck()>>, and must work to ensure that he never crosses paths with me or those I care about.",
                "I owe everything to my mentor <<print $name.man.pluck()>>--a horrible person who's probably rotting in jail somewhere.",
                "Somewhere out there I have a child, litte <<print $name.man.pluck()>>, who doesn't know me. I'm going to try and make the world better for him.",
                "I come from a noble family, and one day I'll reclaim my lands and title from those who stole them from me.",
                "A powerful person, Lord <<print $name.man.pluck()>>, killed someone I love. Some day soon, I'll have my revenge.",
                "I swindled and ruined a person who didn't deserve it, and now I seek to atone for my misdeeds but might never be able to forgive myself."].random();
            break;
        case "criminal":
            npc.bond = npc.bond || ["I'm trying to pay off an old debt I owe to a generous benefactor.",
                "My ill-gotten gains go to support my family.",
                "Something important was taken from me, and I aim to steal it back.",
                "I will become the greatest thief that ever lived.",
                "I'm guilty of a terrible crime. I hope I can redeem myself for it.",
                "Someone I loved died because of a mistake I made. That will never happen again."].random();
            break;
        case "entertainer":
            npc.bond = npc.bond || ["My instrument is my most treasured possession, and it reminds me of someone I love.",
                "Someone stole my precious instrument, and someday I'll get it back.",
                "I want to be famous, whatever it takes.",
                "I idolize a hero of the old tales and measure my deeds against that person's.",
                "I will do anything to prove myself superior to my hated rival.",
                "I would do anything for the other members of my old party."].random();
            break;
        case "folk hero":
            npc.bond = npc.bond || ["I have a family, but I have no idea where they are.  One day, I hope to see them again.",
                "I worked the land, I love the land, and I will protect the land.",
                "A proud noble once gave me a horrible beating, and I will take my revenge on any bully I encounter.",
                "My tools are symbols of my past life, and I carry them so that I will never forget my roots.",
                "I protect those who cannot protect themselves.",
                "I wish my childhood sweetheart had come with me to pursue my destiny."].random();
            break;
        case "guild artisan":
            npc.bond = npc.bond || ["The workshop where I learned my trade is the most important place in the world to me.",
                "I created a great work for someone, and then found them unworthy to receive it; I'm still looking for someone worthy.",
                "I owe my guild a great debt for forging me into the person I am today.",
                "I pursue wealth to secure someone's love.",
                "One day I will return to my guild and prove that I am the greatest artisan of them all.",
                "I will get revenge on the evil forces that destroyed my place of business and ruined my livelihood."].random();
            break;
        case "hermit":
            npc.bond = npc.bond || ["Nothing is more important than the other members of my hermitage, order, or association.",
                "I entered seclusion to hide from the ones who might still be hunting me. I must someday confront them.",
                "I'm still seeking the enlightenment I pursued in my seclusion, and it still eludes me.",
                "I entered seclusion because I loved someone I could not have.",
                "Should my discovery come to light, it could bring ruin to the world.",
                "My isolation gave me great insight into a great evil that only I can destroy."].random();
            break;
        case "noble":
            npc.bond = npc.bond || ["I will face any challenge to win the approval of my family.",
                "My house's alliance with another noble family must be sustained at all costs.",
                "Nothing is more important that the other members of my family.",
                "I am in love with the heir of a family that my family despises.",
                "My loyalty to my sovereign is unwavering.",
                "The common folk must see me as a hero of the people."].random();
            break;
        case "outlander":
            npc.bond = npc.bond || ["My family, clan, or tribe is the most important thing in my life, even when they are far from me.",
                "An injury to the unspoiled wilderness of my home is an injury to me.",
                "I will bring terrible wrath down on the evildoers who destroyed my homeland.",
                "I am the last of my tribe, and it is up to me to ensure their names enter legend.",
                "I suffer awful visions of a coming disaster and will do anything to prevent it.",
                "It is my duty to provide children to sustain my tribe."].random();
            break;
        case "sage":
            npc.bond = npc.bond || ["It is my duty to protect my students.",
                "I have an ancient text that holds terrible secrets that must not fall into the wrong hands.",
                "I work to preserve a library, university, scriptorium, or monastery.",
                "My life's work is a series of tomes related to a specific field of lore.",
                "I've been searching my whole life for the answer to a certain question.",
                "I sold my soul for knowledge; I hope to do great deeds and win it back."].random();
            break;
        case "sailor":
            npc.bond = npc.bond || ["I'm loyal to my captain first, everything else second.",
                "The ship is most important--crewmates and captains come and go.",
                "I'll always remember my first ship.",
                "In a harbor town, I have a paramour whose eyes nearly stole me from the sea.",
                "I was cheated of my fair share of the profits, and I want to get my due.",
                "Ruthless pirates murdered my captain and crewmates, plundered our ship, and left me to die. Vengeance will be mine."].random();
            break;
        case "soldier":
            npc.bond = npc.bond || ["I would lay down my life for the people I served with.",
                "Someone saved my life on the battlefield. To this day, I will never leave a friend behind.",
                "My honor is my life.",
                "I'll never forget the crushing defeat my company suffered or the enemies who dealt it.",
                "Those who fight beside me are those worth dying for.",
                "I fight for those who cannot fight for themselves."].random();
            break;
        case "urchin":
            npc.bond = npc.bond || ["My town or city is my home, and I'll fight to defend it.",
                "I sponsor an orphanage to keep others from enduring what I was forced to endure.",
                "I owe my survival to another urchin who taught me to live on the streets.",
                "I owe a debt I can never repay to the person who took pity on me.",
                "I escaped my life of poverty by robbing an important person, and I'm wanted for it.",
                "No one else is going to have to endure the hardships I've been through."].random();
            break;
    }

    npc.name = npc.firstname + " " + npc.lastname;

    return npc;
};
