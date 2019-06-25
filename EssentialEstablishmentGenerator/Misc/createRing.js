setup.ringData = {
  power: {
    'absorb': 'absorb ' + ['fire damage', 'lightning damage', 'memories', 'souls', 'spells', 'water'].random(),
    'attract': 'attract ' + ['birds', 'ghosts', 'members of the opposite sex', 'rats', 'snakes', 'stirges'].random(),
    'avoid': 'avoid ' + ['former lovers', 'sobriety', 'trap triggers', 'trolls', 'vampires', 'werewolves'].random(),
    'bolster': 'avoid ' + ['agility and reflexes', 'awareness and senses', 'confidence and self-esteem', 'health and toughness', 'intellect and problem-solving skills', 'strength and endurance'].random(),
    'cast a spell': 'cast a spell ' + ['at random', "prepared and stored in the ring by the ring's creator'", 'prepared and stored in the ring by you', 'that creates a disguise', 'that restores lost hit points', 'that grants invisibility'].random(),
    'conjure a swarm of': 'conjure a swarm of ' + ['bats', 'parrots', 'ravens', 'rats', 'spiders', 'zombies'].random(),
    'control': 'control ' + ['demons', 'dwarves', 'elves', 'flames', 'human minds', 'weather'].random(),
    'disappear': 'disappear ' + ['into a hole in the earth', 'in a flash of light', 'to a nearby tree', 'in a shimmering mist', 'in a swirl of shadows', 'in a wisp of smoke'].random(),
    'detect the nearest': 'detect the nearest ' + ['corpse', 'dragon', 'piece of gold', 'living creature', 'poisonous plant', 'undead'].random(),
    'move': 'move like a ' + ['dolphin', 'burrowing badger', 'gust of wind', 'jackrabbit', 'ooze', 'spider'].random(),
    'predict': 'predict ' + ['deaths', 'fluctuations in the price of grain', 'future catastrophes', 'military victories', 'storms', 'winning horses'].random(),
    'regain': 'regain ' + ['expended spell slots', 'lost dignity', 'lost hitpoints', 'lost gold', 'lost time', 'used torches', 'used arrows', 'a single small lost item'].random(),
    'resist': 'resist ' + ['diseases', 'mind-affecting charms', 'persuasion', 'poisons', 'psionic powers', 'seduction'].random(),
    'see': 'see ' + ['faraway places', "into others' dreams", 'invisible creatures and objects', 'people dear to you', 'through the eyes of an owl', 'through the eyes of a corpse'].random(),
    'talk to a': 'talk to a ' + ['dear friend or lover', 'long-dead person', 'recently deceased person', 'snake', 'spider', 'wolf'].random(),
    'summon': 'summon ' + ['an angel', 'a demon', 'a devil', 'a djinni', 'an efreet', 'a pack of wolves'].random(),
    'teleport': 'teleport ' + ['up to ten feet', 'to another room nearby', 'to a well-known temple', 'to a previously prepared teleportation circle', 'to the presence of a powerful fiend', 'to an ancient crypt'].random()
  },
  cost: {
    temporary: 'upon activation, it causes temporary ' + ['chills all over', 'fatigue', 'flatulence', 'head-splitting headaches', 'nausea', 'unsightly and rapid hair growth'].random(),
    chronic: 'while attuned, it causes permanent ' + ['blurred vision', 'blindness', 'loss of the power of speech', 'painful scarring and deformity', 'poor wound healing', 'tumorous growths and deformities', 'debilitating nausea'].random(),
    mental: 'it brings on ' + ['anxiety', 'bad dreams', 'compulsive behavior (drinking, smoking, scratching, hygiene, etc.)', 'insomnia', 'a short temper', 'weight gain (stress eating)'].random() + ' while it is being worn',
    attention: 'it attracts the attention of ' + ['aberrations', 'dragons', 'fiends', 'ghosts and wraiths', 'spiders', 'snakes', 'zombies and wights', 'devils', 'demons', 'liches'].random(),
    accompanied: 'activation of its powers is occasionally accompanied by ' + ['a blizzard', 'earthquakes', 'rapid plant growth', 'thick fog', 'thunderstorms', 'volcanic eruptions'].random()
  },
  activation: {
    'on a particular plane': 'when worn in ' + [
      'the celestial realm', 'the fiendish realm', 'the mortal world', 'the realm of death', 'the realm of dreams and magic', 'the realm of shadow and death', 'the etheral plane', 'the astral plane', 'the elemental planes', 'the air elemental plane', 'the fire elemental plane', 'the earth elemental plane', 'the water elemental plane', 'the Upper planes', 'the Lower planes', 'Elysium', 'the Beastlands', 'Bytopia', 'Mount Celestia', 'Arborea', 'Arcadia', 'Ysgard', 'Mechanus', 'Limbo', 'Acheron', 'the Nine Hells', 'Gehenna', 'Hades', 'Carceri', 'the Abyss', 'Pandemonium'
    ].random(),
    'when worn by a': 'when worn by a ' + ['dwarf', 'half-dragon', 'high elf', 'serpentfolk', 'shadowfolk', 'wood elf', 'gnome', 'human', 'half-elf', 'half-orc', 'orc', 'halfling', 'tiefling'].random(),
    'sunlight': ['in full sunlight', "while it's sunny", 'during a sunny day', 'under the light of the sun'].random(),
    'moonlight': 'when worn under a ' + ['full moon', 'half-moon', 'waxing crescent moon', 'waning crescent moon', 'moon', 'moon', 'moon', 'moon', 'blood moon', 'blue moon', 'harvest moon', 'new moon'].random(),
    'underground': ['underground', 'beneath the earth', 'under the ground'].random(),
    'starlight': ['under starlight', 'under the starlight', 'while the stars shine above', 'beneath the stars'].random()
  }
}
setup.createRing = function (base) {
  const ring = Object.assign({
    power: Object.keys(setup.ringData.power).seededrandom(),
    cost: Object.keys(setup.ringData.cost).seededrandom(),
    activation: Object.keys(setup.ringData.activation).seededrandom()
  }, base)
  if (setup.ringData.power[ring.power]) {
  // expand the power description
    ring.power = setup.ringData.power[ring.power]
  }
  if (setup.ringData.cost[ring.cost]) {
  // expand the cost description
    ring.cost = setup.ringData.cost[ring.cost]
  }
  if (setup.ringData.activation[ring.activation]) {
  // expand the activation description
    ring.activation = setup.ringData.activation[ring.activation]
  }
  ring.works = [
    'perfectly, every time',
    'pretty much every time',
    'every time its used',
    'most of the time with infrequent mishaps',
    'almost always, but sometimes with side effects',
    'fairly well, but always has a side effect',
    'as expected about half the time',
    'only half the time',
    'whenever it is fully charged',
    'occasionally, when the proper conditions are met',
    'infrequently, but well when it does',
    'rarely and unpredictably',
    'every couple of times the user tries to activate it',
    'almost never, and only when it feels like it',
    'only the first time the wearer uses the power',
    'whenever the time is right',
    'well, but at a cost'
  ].seededrandom()
  ring.material = [
    'gold',
    'white gold',
    'rose gold',
    'tarnished silver',
    'polished silver',
    'sterling silver',
    'gold-plated silver',
    'gold-plated brass',
    'silver-plated brass',
    'gold-plated steel',
    'silver-plated steel',
    'rhodium',
    'black rhodium',
    'brass',
    'black steel',
    // animal bones
    ['whale', 'rat', 'dog', 'wolf', 'bear', 'bird', 'cougar', 'gorilla', 'lion', 'fox', 'elephant', 'turtle', 'pig', 'tiger', 'horse', 'deer', 'bat', 'rabbit', 'rhino', 'sheep', 'otter', 'goat', 'hippo', 'coyote', 'giant panda', 'skunk', 'cattle', 'bison', 'emu', 'caragor', 'dire wolf', 'boar', 'elk', 'ram', 'mammoth', 'pegasus', 'unicorn'].seededrandom() + ' bone',
    // monster bones
    ['kobold', 'goblin', 'ogre', 'giant', 'merfolk', 'bullywug', 'grimlock', 'lizardfolk', 'hobgoblin', 'orc', 'gnoll', 'cockatrice', 'dragon', 'bugbear', 'harpy', 'hippogriff', 'imp', 'satyr', 'centaur', 'ettercap', 'griffon', 'sea hag', 'wererat', 'werewolf', 'wereboar', 'basilisk', 'hell hound', 'manticore', 'minotaur', 'owlbear', 'ettin', 'lamia', 'barbed devil', 'bulette', 'troll', 'xorn', 'chimera', 'drider', 'medusa', 'wyvern', 'vrock', 'oni', 'chain devil', 'hezrou', 'hydra', 'glabrezu', 'behir', 'roc', 'horned devil', 'marilith', 'sphinx', 'balor', 'pit fiend', 'kraken'].seededrandom() + ' bone',
    ['elephant', 'elephant', 'elephant', 'dire elephant', 'hippo', 'walrus', 'whale', 'hornbill', 'warthog', 'narwhal'].seededrandom() + ' ivory',
    'ebony',
    'mahogany wood',
    'walnut wood',
    'birch wood',
    'maple wood',
    'pine wood',
    'oak wood',
    'ash wood',
    'turquoise',
    'jade',
    'iron',
    'copper',
    'platinum',
    'bronze',
    'tungsten',
    'cobalt',
    'titanium',
    'palladium',
    'zirconium',
    'obsidian',
    'quartz'
  ].seededrandom()
  ring.decoration = [
    'handful of small gemstones arrayed around the band',
    'two small gemstones with a large gemstone in the center',
    ['trio of small ', 'trio of large ', 'group of one large and two small flanking ', 'cluster of small ', 'group of several large ', 'small set of ', 'row of ', 'circle of '].seededrandom() + ['rose', 'princess', 'emerald', 'square', 'baguette', 'taper', 'fancy', 'heart', 'pear', 'marquise', 'oval', 'round', 'mixed', 'buff top', 'mogul', 'old miners', 'star', 'step'].seededrandom() + ' cut gemstones',
    ['single large ', 'huge ', 'single small ', 'tiny ', 'very large ', 'very small '].seededrandom() + ['rose', 'princess', 'emerald', 'square', 'baguette', 'taper', 'fancy', 'heart', 'pear', 'marquise', 'oval', 'round', 'mixed', 'buff top', 'mogul', 'old miners', 'star', 'step'].seededrandom() + ' cut gemstone',
    'cluster of gemstones in the shape of a ' + ['star', 'sun', 'moon', 'heart'].seededrandom(),
    ["snake's", "dragon's", "lion's", "tiger's", "demon's", "devil's", "wolf's", "bear's", "monkey's", "crow's", "eagle's", "hawk's", "vulture's", "fox's", "horse's", "bat's", "rabbit's", "boar's", "medusa's"].seededrandom() + ' head with gemstones set in its eyes',
    ['snake', 'dragon', 'lion', 'tiger', 'demon', 'devil', 'wolf', 'bear', 'monkey', 'crow', 'eagle', 'hawk', 'vulture', 'fox', 'horse', 'bat', 'rabbit', 'boar'].seededrandom() + ' skull with gemstones set in its eyes',
    ['floral', 'leafy', 'thorny', 'hexagonal', 'wavy', 'spider-web', 'cross-hatching', 'vine', 'geometric', 'spiral', 'rune', 'starry', 'swirling'].seededrandom() + ' ' + ['pattern', 'motif', 'design', 'marking', 'ornamentation'].seededrandom(),
    'band like ' + ['twisting vines', 'rough waves', 'stag horns', 'tree branches', 'rose thorns', 'a craggy mountainside', 'the body of a snake', 'a twisting rope'].seededrandom(),
    'phrase written in ' + ['a Dwarvish script', 'an Elvish script', 'an Infernal script', 'a Draconic script', 'a Celestial script', 'a Common script'].seededrandom() + ' wrapping around the band',
    'handful of arcane runes'
  ].seededrandom()
  ring.gemstone = [
    'diamond',
    ['yellow', 'pink', 'champagne', 'green', 'blue', 'orange', 'red', 'chameleon', 'argyle', 'purple', 'violet', 'black', 'gray', 'white'].seededrandom() + ' diamond',
    'ruby',
    ['fire', 'white', 'black', 'yellow', 'fairy', 'pink', 'crystal', 'honey'].seededrandom() + ' opal',
    'emerald',
    'blue sapphire',
    'purple sapphire',
    'orange sapphire',
    'green sapphire',
    'star sapphire',
    'garnet',
    ['white', 'black', 'golden', 'pink', 'lavender', 'blue', 'chocolate'].seededrandom() + ' pearl',
    'amethyst',
    'topaz',
    'polished amber',
    'moonstone',
    'cut onyx',
    'peridot',
    'quartz',
    'aquamarine',
    'citrine',
    'lapis lazuli',
    'spinel',
    'tanzanite',
    'turquoise',
    'zircon',
    ['blue', 'red', 'green', 'yellow', 'pink', 'brown', 'black'].seededrandom() + ' tourmaline'
  ].seededrandom()
  ring.intendedowner = [
    'no one in particular',
    "the ringmaker's " + ['true love', 'best friend', 'favorite patron', 'ruler who he cared deeply for', 'family member', 'wife', 'husband', 'good friend'].seededrandom() + ', but ' + ['they perished long ago', 'they are no longer on this plane', 'it was never delivered', 'the ringmaker perished before it was gifted away', 'they pawned it during times of trouble', "they pawned it after the ringmaker's death", 'it was stolen during the original delivery'].seededrandom(),
    ['a Dwarvish', 'an Elvish', 'a Gnomish', 'a Human', 'a Dragonborn', 'a Half-Orc', 'a Drow', 'a Tiefling', 'a Halfling', 'a Half-Elf', 'a Goblin'].seededrandom() + ' ' + ['king', 'queen', 'princess', 'prince', 'prince', 'noble', 'duke', 'baron', 'lord', 'lady', 'merchant', 'witch of terrible power', 'gemcutter', 'hero from ancient times', 'knight'].seededrandom() + ' who ' + ['used it to gain power', 'used it to gain fame', 'used it to gain wealth', 'used it against their enemies', 'used it to better their town in their time', 'wore it until they died', 'wore it until it was lost during a long journey', 'wore it until it was stolen from them', 'never actually wore the ring', 'gifted it away after a few years'].seededrandom(),
    ['a dark', 'a notorious', 'a legendary', 'a mysterious', 'an ancient', 'a sinister', 'a forgotten', 'a devious', 'an eccentric', 'a powerful', 'a wealthy', 'a conniving', 'an infamous', 'a renowned', 'a famous', 'a heralded', 'a strong-willed', 'a well known', 'a barely known', 'a weak-willed', 'an extremely wealthy'].seededrandom() + ' ' + ['sorceress', 'sorcerer', 'wizard', 'mage', 'witch', 'high priest', 'lich', 'rogue', 'fiend', 'warlord', 'explorer', 'bard', 'performer', 'druid', 'warlock', 'monk', 'warrior', 'knight', 'fighter', 'fortune teller', 'gladiator', 'king', 'queen', 'prince', 'princess', 'lord', 'lady', 'duke', 'monarch', 'prophet', 'spellcaster'].seededrandom() + ' who ' + ['used it to gain power', 'used it to gain fame', 'used it to gain wealth', 'used it against their enemies', 'used it to better their town in their time', 'wore it until they died', 'wore it until it was lost during a long journey', 'wore it until it was stolen from them', 'never actually wore the ring', 'gifted it away after a few years'].seededrandom()
  ].seededrandom()
  ring.importance = [
    'ancient king',
    'elder dragon',
    'powerful fiend',
    'legendary warrior',
    'notorious giant',
    'well known prophet',
    'powerful spellcaster',
    'heir to a fallen noble house',
    'sitting monarch',
    'fiendish prince',
    'elemental lord',
    'forgotten god',
    'ancient evil being'
  ].seededrandom()
  ring.setting = [
    'in the centre is a ',
    'the gemstone in the middle is a ',
    'the focal point of the ring is a ',
    'the gems in this ring are mostly ',
    'it is set with ',
    'it has three gems, two cheap quartz gems flanking a',
    'it is bejeweled with a ',
    'the band of this ring is surrounded with ',
    'in the middle of the ring sits a huge ',
    'the middle of the ring has a large cluster of '
  ].seededrandom()
  ring.cut = [
    'rose',
    'princess',
    'emerald',
    'square',
    'baguette',
    'taper',
    'fancy',
    'heart',
    'pear',
    'marquise',
    'oval',
    'round',
    'mixed',
    'buff top',
    'mogul',
    'old miners',
    'star',
    'step'
  ].seededrandom()
  ring.firstOutputs = ['This ring is made of ' + ring.material + ' which is decorated with a ' + ring.decoration + '. It was intended for ' + ring.intendedowner + '. The ring grants the power to ' + ring.power + '.<blockquote>This ring works ' + ring.works + ', and works best ' + ring.activation + '. It grants the power to ' + ring.power + ', <<print ["but ", "however "].seededrandom()>>' + ring.cost + '.</blockquote>',
    'This ring is made of ' + ring.material + ', and ' + ring.setting + ' ' + ring.cut + ' cut ' + ring.gemstone + '. It was intended for ' + ring.intendedowner + '. The ring grants the power to ' + ring.power + '.<blockquote>This ring works ' + ring.works + ', and works best ' + ring.activation + '. It grants the power to ' + ring.power + ', <<print ["but ", "however "].seededrandom()>>' + ring.cost + '.</blockquote>'
  ].seededrandom()
  ring.secondOutputs = ["This one's made of " + ring.material + ' which is decorated with a ' + ring.decoration + '. It was intended for ' + ring.intendedowner + '. The ring grants the power to ' + ring.power + '.<blockquote>This ring works ' + ring.works + ', and works best ' + ring.activation + '. It grants the power to ' + ring.power + ', <<print ["but ", "however "].seededrandom()>> ' + ring.cost + '.</blockquote>',
    "This one's made of " + ring.material + ', and ' + ring.setting + ' ' + ring.cut + ' cut ' + ring.gemstone + '. It was intended for ' + ring.intendedowner + '. The ring grants the power to ' + ring.power + '.<blockquote>This ring works ' + ring.works + ', and works best ' + ring.activation + '. It grants the power to ' + ring.power + ', <<print ["but ", "however "].seededrandom()>>' + ring.cost + '.</blockquote>'
  ].seededrandom()
  return ring
}
