setup.createRing = (function() {
    const powers = {
        "absorb": () => "absorb " + ["fire damage", "lightning damage", "memories", "souls", "spells", "water"].random(),
        "attract": () => "attract " + ["birds", "ghosts", "members of the opposite sex", "rats", "snakes", "stirges"].random(),
        "avoid": () => "avoid " + ["former lovers", "sobriety", "trap triggers", "trolls", "vampires", "werewolves"].random(),
        "bolster": () => "bolster " + ["agility and reflexes", "awareness and senses", "confidence and self-esteem", "health and toughness", "intellect and problem-solving skills", "strength and endurance"].random(),
        "cast a spell": () => "cast a spell " + ["at random", "prepared and stored in the ring by the ring's creator", "prepared and stored in the ring by you", "that creates a disguise", "that restores lost hit points", "that grants invisibility"].random(),
        "conjure a swarm of": () => "conjure a swarm of " + ["bats", "parrots", "ravens", "rats", "spiders", "zombies"].random(),
        "control": () => "control " + ["demons", "dwarves", "elves", "flames", "human minds", "weather"].random(),
        "disappear": () => "disappear " + ["into a hole in the earth", "in a flash of light", "to a nearby tree", "in a shimmering mist", "in a swirl of shadows", "in a wisp of smoke"].random(),
        "detect the nearest": () => "detect the nearest " + ["corpse", "dragon", "piece of gold", "living creature", "poisonous plant", "undead"].random(),
        "move like a": () => "move like a  " + ["dolphin", "burrowing badger", "gust of wind", "jackrabbit", "ooze", "spider"].random(),
        "predict": () => "predict " + ["deaths", "fluctuations in the price of grain", "future catastrophes", "military victories", "storms", "winning horses"].random(),
        "regain": () => "regain " + ["expended spell slots", "lost dignity", "lost hitpoints", "lost gold", "lost time", "used torches"].random(),
        "resist": () => "resist " + ["diseases", "mind-affecting charms", "persuasion", "poisons", "psionic powers", "seduction"].random(),
        "see": () => "see " + ["faraway places", "into others' dreams", "invisible creatures and objects", "people dear to you", "through the eyes of an owl", "through the eyes of a corpse"].random(),
        "talk to a": () => "talk to a " + ["dear friend or lover", "long-dead person", "recently deceased person", "snake", "spider", "wolf"].random(),
        "summon": () => "summon " + ["an angel", "a demon", "a devil", "a djinni", "an efreet", "a pack of wolves"].random(),
        "teleport": () => "teleport " + ["up to ten feet", "to another room nearby", "to a well-known temple", "to a previously prepared teleportation circle", "to the presence of a powerful fiend", "to an ancient crypt"].random(),
    };
    const cost = {
        "temporary": () => "upon activation, it causes temporary " + ["chills all over", "fatigue", "flatulence", "head-splitting headaches", "nausea", "unsightly and rapid hair growth"].random(),
        "chronic": () => "while attuned, it causes permanent " + ["blurred vision", "blindness", "loss of the power of speech", "painful scarring and deformity", "poor wound healing", "tumorous growths and deformities", "debilitating nausea"].random(),
        "mental": () => "it brings on " + ["anxiety", "bad dreams", "compulsive behavior (drinking, smoking, scratching, hygiene, etc.)", "insomnia", "a short temper", "weight gain (stress eating)"].random() + " while it is being worn",
        "attention": () => "it attracts the attention of " + ["aberrations", "dragons", "fiends", "ghosts and wraiths", "spiders", "snakes", "zombies and wights"].random(),
        "accompanied": () => "activation of its powers is occasionally accompanied by " + ["a blizzard", "earthquakes", "rapid plant growth", "thick fog", "thunderstorms", "volcanic eruptions"].random(),
    };
    const activation = {
      "on a particular plane": () => "in the " + ["celestial realm", "fiendish realm", "mortal world", "realm of death", "realm of dreams and magic", "realm of shadow and death"].random(),
      "when worn by a": () => "when worn by a " + ["dwarf", "half-dragon", "high elf", "serpentfolk", "shadowfolk", "wood elf", "littlefolk"].random(),
      "sunlight": () => "when worn in " + ["sunlight", "the shade"].random(),
      "moonlight": () => "when worn under a " + ["full moon", "half-moon", "crescent moon", "moon", "moon", "moon"].random(),
      "underground": () => "underground",
      "starlight": () => "under starlight",
    };
    const materials = [
        "gold",
        "white gold",
        "tarnished silver",
        "polished silver",
        "gold-plated brass",
        "silver-plated brass",
        "gold-plated steel",
        "silver-plated steel",
        "brass",
        "black steel",
        "bone",
        "ivory",
        "ebony",
        "mahogany",
        "walnut",
        "turquoise",
        "jade",
        "iron",
        "copper",
        "platinum"
    ];
    const decorations = [
        "handful of small gemstones arrayed around the band",
        "trio of small gemstones",
        "single small gemstone",
        "single large gemstone",
        "large gemstone with flanking smaller stones",
        "snake's head with a gemstone set in its eyes",
        "dragon's head with a gemstone set in its eyes",
        "fiend with gemstones set in its eyes",
        "skull with gemstones set in its eyes",
        "floral pattern",
        "leafy motif",
        "deer motif",
        "thorny motif",
        "hexagonal pattern",
        "wavy pattern",
        "spider-web motif",
        "cross-hatching pattern",
        "phrase written in a Dwarvish script",
        "phrase written in an Elvish script",
        "handful of arcane runes"
    ];
    const gemstones = [
        "diamond",
        "blue diamond",
        "pink diamond",
        "yelllow diamond",
        "ruby",
        "fire opal",
        "white opal",
        "black opal",
        "yellow opal",
        "green opal",
        "emerald",
        "blue sapphire",
        "purple sapphire",
        "pink sapphire",
        "star sapphire",
        "garnet",
        "pearl",
        "black pearl",
        "amethyst",
        "topaz"
    ];
    const intendedowner = [
        "a Dwarvish king",
        "an Elvish prince",
        "a terrifying elf-witch",
        "a Gnomish gemcutter",
        "an ancient hero",
        "a dark sorceress",
        "a notorious witch",
        "a legendary mage",
        "a high priest",
        "a mysterious knight",
        "a sinister lich",
        "a devious rogue",
        "an eccentric wizard",
        "a powerful queen",
        "a beautiful princess",
        "a wealthy lord",
        "a conniving fiend",
        "an infamous warlord",
        "a renowned explorer",
        "a famous singer"
    ];
    const importance = [
        "ancient king",
        "elder dragon",
        "powerful fiend",
        "legendary warrior",
        "notorious giant",
        "well known prophet",
        "powerful spellcaster",
        "heir to a fallen noble house",
        "sitting monarch",
        "fiendish prince",
        "elemental lord",
        "forgotten god",
        "ancient evil being"
    ];
    const works = [
        "perfectly, every time",
        "most of the time with infrequent mishaps",
        "as expected about half the time",
        "occasionally, when the proper conditions are met",
        "rarely and unpredictably",
        "only the first time the wearer uses the power",
        "well, but at a cost"
    ];


    return function(base) {
        var ring = Object.assign({
            power         : Object.keys(powers).random(),
            cost          : Object.keys(cost).random(),
            activation    : Object.keys(activation).random(),
            material      : materials.random(),
            decoration    : decorations.random(),
            gemstone      : gemstones.random(),
            intendedowner : intendedowner.random(),
            importance    : importance.random(),
            works         : works.random()
        }, base);
        if(powers[ring.power]) {
            // expand the power description
            ring.power = powers[ring.power]();
        }
        if(cost[ring.cost]) {
            // expand the cost description
            ring.cost = cost[ring.cost]();
        }
        if(activation[ring.activation]) {
            // expand the activation description
            ring.activation = activation[ring.activation]();
        }
        return ring;
    };
})();
