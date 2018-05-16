setup.createRing = (function() {
    const powers = {
        "absorb": () => "absorb " + ["fire damage", "lightning damage", "memories", "souls", "spells", "water"].random(),
        "attract": () => "attract " + ["birds", "ghosts", "members of the opposite sex", "rats", "snakes", "stirges"].random(),
        "avoid": () => "avoid " + ["former lovers", "sobriety", "trap triggers", "trolls", "vampires", "werewolves"].random(),
        "bolster": () => "bolster " + ["agility and reflexes", "awareness and senses", "confidence and self-esteem", "health and toughness", "intellect and problem-solving skills", "strength and endurance"].random(),
        "cast a spell": () => "cast a spell " + ["at random", "prepared and stored in the ring by the ring's creator", "prepared and stored in the ring by you", "that creates a disguise", "that restores lost hit points", "that grants invisibility"].random(),
        "conjure a swarm of": () => "conjure a swarm of " + ["bats", "parrots", "ravens", "rats", "spiders", "zombies"].random(),
        "control": () => "control " + ["demons", "dwarves", "elves", "flames", "human minds", "weather"].random(),
        "detect": () => "detect",
        "disappear": () => "disappear " + ["into a hole in the earth", "in a flash of light", "to a nearby tree", "in a shimmering mist", "in a swirl of shadows", "in a wisp of smoke"].random(),
        "detect the nearest": () => "detect the nearest " + ["corpse", "dragon", "gold", "living creature", "poisonous plant", "undead"].random(),
        "move like a": () => "move like a  " + ["dolphin", "burrowing badger", "gust of wind", "jackrabbit", "ooze", "spider"].random(),
        "predict": () => "predict " + ["deaths", "fluctuations in the price of grain", "future catastrophes", "military victories", "storms", "winning horses"].random(),
        "regain": () => "regain " + ["expended spell slots", "lost dignity", "lost hitpoints", "lost gold", "lost time", "used torches"].random(),
        "resist": () => "resist " + ["diseases", "mind-affecting charms", "persuasion", "poisons", "psionic powers", "seduction"].random(),
        "see": () => "see " + ["faraway places", "into others' dreams", "invisible creatures and objects", "people dear to you", "through the eyes of an owl", "through the eyes of a corpse"].random(),
        "talk to a": () => "talk to a " + ["dear friend or lover", "long-dead person", "recently deceased person", "snake", "spider", "wolf"].random(),
        "summon": () => "summon " + ["an angel", "a demon", "a devil", "a djinni", "an efreet", "a pack of wolves"].random(),
        "teleport": () => "tele " + ["up to ten feet", "to another room nearby", "to a well-known temple", "to a previously prepared teleportation circle", "to the presence of a powerful fiend", "to an ancient crypt"].random(),
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
        "platinum"];
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
        "handful of arcane runes"];
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
        "topaz"];
    const owners = [
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
        "a famous singer"];

    return function(base) {
        var ring = Object.assign({
            power: Object.keys(powers).random(),
            material: materials.random(),
            decoration: decorations.random(),
            gemstone: gemstones.random(),
            intendedowner: owners.random(),
        }, base);
        if(powers[ring.power]) {
            // expand the power description
            ring.power = powers[ring.power]();
        }
        return ring;
    };
})();

/*

d6 Activation/amplification: The ring's special power or special property activates or amplifies…

On a particular plane (d6): 1. celestial realm; 2. fiendish realm; 3. mortal world; 4. realm of death; 5. realm of dreams and magic; 6. realm of shadow and death.
When worn by a member of a specific race (d6): 1. dwarf; 2. half-dragon; 3. high elf; 4. serpentfolk; 5. shadowfolk; 6. wood elf.
In sunlight.
In moonlight.
Underground.
Under starlight.
d6 Reliability and costs: The ring's special power...

Works =
"perfectly, every time",
"most of the time with infrequent mishaps",
"as expected about half the time",
"occasionally, when the proper conditions are met",
"rarely and unpredictably",
"only the first time the wearer uses the power",

Comes at a temporary or acute health cost (d6): 1. chills; 2. fatigue; 3. flatulence; 4. headaches; 5. nausea; 6. unsightly and rapid hair growth.
Comes at a chronic or permanent health cost (d6): 1. blurred vision or blindness; 2. loss of the power of speech; 3. painful scarring and deformity; 4. poor wound healing; 5. tumorous growths and deformity; 6. wasting sickness.
Brings on mental distress (d6): 1. anxiety; 2. bad dreams; 3. compulsive behavior (drinking, smoking, scratching, hygiene, etc.); 4. insomnia; 5. short temper (irritability); 6. weight gain (stress eating).
Attracts the attention of malevolent creatures (d6): 1. aberrations; 2. dragons; 3. fiends; 4. ghosts and wraiths; 5. spiders or snakes; 6. zombies and wights.
Is occasionally accompanied by (d6): 1. blizzards; 2. earthquakes; 3. rapid plant growth; 4. thick fog; 5. thunderstorms; 6. volcanic eruptions.
d6 Importance: The ring is rumored to be important to a/an...

Quirky individual who claims to be descended from a/an (d6): 1. ancient king or queen; 2. dragon; 3. fiend; 4. legendary warrior; 5. notorious giant; 6. well-known prophet.
Powerful spellcaster (d6): 1. arch-lich; 2. master conjurer or illusionist; 3. high priest or priestess; 4. shadow-witch or warlock; 5. dark sorcerer or sorceress; 6. druid or woods-witch.
Heir to a fallen noble house.
Sitting monarch.
Fiendish prince or elemental lord.
Forgotten god or ancient evil.
d6 Purpose: The ring is rumored to be important because its wearer could...

Sell it for an unimaginable fortune.
Gain the cooperation of a world leader (d6): 1. brutal warlord; 2. high priest or priestess; 3. infamous pirate captain or outlaw; 4. king or queen; 5. merchant-prince; 6. vampire lord.
Unlock ancient knowledge and secrets.
Gain immense wealth and influence.
Conquer the world.
Open portals to other realms.
*/
