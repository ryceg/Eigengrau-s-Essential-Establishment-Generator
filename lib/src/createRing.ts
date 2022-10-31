import { articles } from './articles'
import { MagicItem } from './createMagic'
import { getRandomValue } from './getRandomValue'
import { random } from './random'
import { assign } from './utils'

interface Options {
  power: string
  cost: string
  activation: string
}

interface MagicRing extends MagicItem {
  works: string
  material: string
  decoration: string
  gemstone: string
  intendedowner: string
  importance: string
  setting: string
  cut: string
  power: string
  cost: string
  activation: string
}

export function createRing (base?: Partial<Options>): MagicRing {
  const ringData = createRingData()

  const ring = {
    power: getRandomValue(ringData.power),
    cost: getRandomValue(ringData.cost),
    activation: getRandomValue(ringData.activation),
    ...base
  }

  assign(ring, {
    works: random([
      // This ring works...
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
    ]),
    material: random([
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
      `${random(['whale', 'rat', 'dog', 'wolf', 'bear', 'bird', 'cougar', 'gorilla', 'lion', 'fox', 'elephant', 'turtle', 'pig', 'tiger', 'horse', 'deer', 'bat', 'rabbit', 'rhino', 'sheep', 'otter', 'goat', 'hippo', 'coyote', 'giant panda', 'skunk', 'cattle', 'bison', 'emu', 'caragor', 'dire wolf', 'boar', 'elk', 'ram', 'mammoth', 'pegasus', 'unicorn'])} bone`,
      // monster bones
      `${random(['kobold', 'goblin', 'ogre', 'giant', 'merfolk', 'bullywug', 'grimlock', 'lizardfolk', 'hobgoblin', 'orc', 'gnoll', 'cockatrice', 'dragon', 'bugbear', 'harpy', 'hippogriff', 'imp', 'satyr', 'centaur', 'ettercap', 'griffon', 'sea hag', 'wererat', 'werewolf', 'wereboar', 'basilisk', 'hell hound', 'manticore', 'minotaur', 'owlbear', 'ettin', 'lamia', 'barbed devil', 'bulette', 'troll', 'xorn', 'chimera', 'drider', 'medusa', 'wyvern', 'vrock', 'oni', 'chain devil', 'hezrou', 'hydra', 'glabrezu', 'behir', 'roc', 'horned devil', 'marilith', 'sphinx', 'balor', 'pit fiend', 'kraken'])} bone`,
      // ivory
      `${random(['elephant', 'elephant', 'elephant', 'dire elephant', 'hippo', 'walrus', 'whale', 'hornbill', 'warthog', 'narwhal'])} ivory`,
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
    ]),
    decoration: random([
      'handful of small gemstones arrayed around the band',
      'two small gemstones with a large gemstone in the center',
      `${random(['trio of small ', 'trio of large ', 'group of one large and two small flanking ', 'cluster of small ', 'group of several large ', 'small set of ', 'row of ', 'circle of ']) + random(['rose', 'princess', 'emerald', 'square', 'baguette', 'taper', 'fancy', 'heart', 'pear', 'marquise', 'oval', 'round', 'mixed', 'buff top', 'mogul', 'old miners', 'star', 'step'])} cut gemstones`,
      `${random(['single large ', 'huge ', 'single small ', 'tiny ', 'very large ', 'very small ']) + random(['rose', 'princess', 'emerald', 'square', 'baguette', 'taper', 'fancy', 'heart', 'pear', 'marquise', 'oval', 'round', 'mixed', 'buff top', 'mogul', 'old miners', 'star', 'step'])} cut gemstone`,
      `cluster of gemstones in the shape of a ${random(['star', 'sun', 'moon', 'heart'])}`,
      `${random(["snake's", "dragon's", "lion's", "tiger's", "demon's", "devil's", "wolf's", "bear's", "monkey's", "crow's", "eagle's", "hawk's", "vulture's", "fox's", "horse's", "bat's", "rabbit's", "boar's", "medusa's"])} head with gemstones set in its eyes`,
      `${random(['snake', 'dragon', 'lion', 'tiger', 'demon', 'devil', 'wolf', 'bear', 'monkey', 'crow', 'eagle', 'hawk', 'vulture', 'fox', 'horse', 'bat', 'rabbit', 'boar'])} skull with gemstones set in its eyes`,
      `${random(['floral', 'leafy', 'thorny', 'hexagonal', 'wavy', 'spider-web', 'cross-hatching', 'vine', 'geometric', 'spiral', 'rune', 'starry', 'swirling'])} ${random(['pattern', 'motif', 'design', 'marking', 'ornamentation'])}`,
      `band like ${random(['twisting vines', 'rough waves', 'stag horns', 'tree branches', 'rose thorns', 'a craggy mountainside', 'the body of a snake', 'a twisting rope'])}`,
      `phrase written in ${random(['a Dwarvish script', 'an Elvish script', 'an Infernal script', 'a Draconic script', 'a Celestial script', 'a Common script'])} wrapping around the band`,
      'handful of arcane runes'
    ]),
    gemstone: random([
      'diamond',
      `${random(['yellow', 'pink', 'champagne', 'green', 'blue', 'orange', 'red', 'chameleon', 'argyle', 'purple', 'violet', 'black', 'gray', 'white'])} diamond`,
      'ruby',
      `${random(['fire', 'white', 'black', 'yellow', 'fairy', 'pink', 'crystal', 'honey'])} opal`,
      'emerald',
      'blue sapphire',
      'purple sapphire',
      'orange sapphire',
      'green sapphire',
      'star sapphire',
      'garnet',
      `${random(['white', 'black', 'golden', 'pink', 'lavender', 'blue', 'chocolate'])} pearl`,
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
      `${random(['blue', 'red', 'green', 'yellow', 'pink', 'brown', 'black'])} tourmaline`
    ]),
    intendedowner: random([
      'no one in particular',
      `the ringmaker's ${random(['true love', 'best friend', 'favorite patron', 'ruler who he cared deeply for', 'family member', 'wife', 'husband', 'good friend'])}, but ${random(['they perished long ago', 'they are no longer on this plane', 'it was never delivered', 'the ringmaker perished before it was gifted away', 'they pawned it during times of trouble', "they pawned it after the ringmaker's death", 'it was stolen during the original delivery'])}`,
      `${random(['a Dwarvish', 'an Elvish', 'a Gnomish', 'a Human', 'a Dragonborn', 'a Half-Orc', 'a Drow', 'a Tiefling', 'a Halfling', 'a Half-Elf', 'a Goblin', 'a Lizardfolk', 'a Ratfolk', 'a Kitsune'])} ${random(['king', 'queen', 'princess', 'prince', 'prince', 'noble', 'duke', 'baron', 'lord', 'lady', 'merchant', 'witch of terrible power', 'gemcutter', 'hero from ancient times', 'knight'])} who ${random(['used it to gain power', 'used it to gain fame', 'used it to gain wealth', 'used it against their enemies', 'used it to better their town while they were alive', 'wore it until they died', 'wore it until it was lost during a long journey', 'wore it until it was stolen from them', 'never actually wore the ring', 'gifted it away after a few years'])}`,
      `${random(['a dark', 'a notorious', 'a legendary', 'a mysterious', 'an ancient', 'a sinister', 'a forgotten', 'a devious', 'an eccentric', 'a powerful', 'a wealthy', 'a conniving', 'an infamous', 'a renowned', 'a famous', 'a heralded', 'a strong-willed', 'a well known', 'a barely known', 'a weak-willed', 'an extremely wealthy'])} ${random(['sorceress', 'sorcerer', 'wizard', 'mage', 'witch', 'high priest', 'lich', 'rogue', 'fiend', 'warlord', 'explorer', 'bard', 'performer', 'druid', 'warlock', 'monk', 'warrior', 'knight', 'fighter', 'fortune teller', 'gladiator', 'king', 'queen', 'prince', 'princess', 'lord', 'lady', 'duke', 'monarch', 'prophet', 'spellcaster', 'hag'])} who ${random(['used it to gain power', 'used it to gain fame', 'used it to gain wealth', 'used it against their enemies', 'used it to better their town in their time', 'wore it until they died', 'wore it until it was lost during a long journey', 'wore it until it was stolen from them', 'never actually wore the ring', 'gifted it away after a few years'])}`
    ]),
    importance: random([
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
      'ancient evil being',
      'dreadful hag'
    ]),
    setting: random([
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
    ]),
    cut: random([
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
    ])
  })

  assign(ring, {
    firstOutputs: random([
      `This ring is made of ${ring.material} which is decorated with ${articles.output(ring.decoration)}. It was intended for ${ring.intendedowner}. The ring grants the power to ${ring.power}.<blockquote>This ring works ${ring.works}, and works best ${ring.activation}. It grants the power to ${ring.power}, ${random(['but', 'however'])} ${ring.cost}.</blockquote>`,
      `This ring is made of ${ring.material}, and ${ring.setting} ${ring.cut} cut ${ring.gemstone}. It was intended for ${ring.intendedowner}. The ring grants the power to ${ring.power}.<blockquote>This ring works ${ring.works}, and works best ${ring.activation}. It grants the power to ${ring.power}, ${random(['but', 'however'])} ${ring.cost}.</blockquote>`
    ]),
    secondOutputs: random([
      `This one's made of ${ring.material} which is decorated with ${articles.output(ring.decoration)}. It was intended for ${ring.intendedowner}. The ring grants the power to ${ring.power}.<blockquote>This ring works ${ring.works}, and works best ${ring.activation}. It grants the power to ${ring.power}, ${random(['but', 'however'])} ${ring.cost}.</blockquote>`,
      `This one's made of ${ring.material}, and ${ring.setting} ${ring.cut} cut ${ring.gemstone}. It was intended for ${ring.intendedowner}. The ring grants the power to ${ring.power}.<blockquote>This ring works ${ring.works}, and works best ${ring.activation}. It grants the power to ${ring.power}, ${random(['but', 'however'])} ${ring.cost}.</blockquote>`
    ])
  })

  assign(ring, {
    type: 'ring',
    name: `${ring.gemstone} Ring`,
    description: ring.firstOutputs
  })
  return ring
}

const createRingData = () => ({
  power: {
    // The ring grants the power to...
    'absorb': `absorb ${random(['fire damage', 'lightning damage', 'memories', 'souls', 'spells', 'water', 'poison damage', 'ice damage'])}`,
    'attract': `attract ${random(['birds', 'ghosts', 'members of the opposite sex', 'rats', 'snakes', 'stirges', 'fiends', 'undead', 'flies'])}`,
    'avoid': `avoid ${random(['former lovers', 'sobriety', 'trap triggers', 'trolls', 'vampires', 'werewolves'])}`,
    'bolster': `avoid ${random(['agility and reflexes', 'awareness and senses', 'confidence and self-esteem', 'health and toughness', 'intellect and problem-solving skills', 'strength and endurance'])}`,
    'cast a spell': `cast a spell ${random(['at random', "prepared and stored in the ring by the ring's creator'", 'prepared and stored in the ring by you', 'that creates a disguise', 'that restores lost hit points', 'that grants invisibility'])}`,
    'conjure a swarm of': `conjure a swarm of ${random(['bats', 'parrots', 'ravens', 'rats', 'spiders', 'zombies', 'gnats', 'lemurs', 'locust'])}`,
    'control': `control ${random(['demons', 'dwarves', 'elves', 'flames', 'human minds', 'weather'])}`,
    'disappear': `disappear ${random(['into a hole in the earth', 'in a flash of light', 'to a nearby tree', 'in a shimmering mist', 'in a swirl of shadows', 'in a wisp of smoke'])}`,
    'detect the nearest': `detect the nearest ${random(['corpse', 'dragon', 'piece of gold', 'living creature', 'poisonous plant', 'undead', 'unbroken pot', 'unopened chest'])}`,
    'move': `move like a ${random(['dolphin', 'burrowing badger', 'gust of wind', 'jackrabbit', 'ooze', 'spider', 'jaguar'])}`,
    'predict': `predict ${random(['deaths', 'fluctuations in the price of grain', 'future catastrophes', 'military victories', 'storms', 'winning horses'])}`,
    'regain': `regain ${random(['expended spell slots', 'lost dignity', 'lost hitpoints', 'lost gold', 'lost time', 'used torches', 'used arrows', 'a single small lost item'])}`,
    'resist': `resist ${random(['diseases', 'mind-affecting charms', 'persuasion', 'poisons', 'psionic powers', 'seduction', 'temptation'])}`,
    'see': `see ${random(['faraway places', "into others' dreams", 'invisible creatures and objects', 'people dear to you', 'through the eyes of an owl', 'through the eyes of a corpse', "people's deepest desires"])}`,
    'talk to a': `talk to a ${random(['dear friend or lover', 'long-dead person', 'recently deceased person', 'snake', 'spider', 'wolf', 'horse', 'dragon', 'demon', 'random deity'])}`,
    'summon': `summon ${random(['an angel', 'a demon', 'a devil', 'a djinni', 'an efreet', 'a pack of wolves', 'an imp', 'a random takling bird', 'a well bred horse'])}`,
    'teleport': `teleport ${random(['up to ten feet', 'to another room nearby', 'to a well-known temple', 'to a previously prepared teleportation circle', 'to the presence of a powerful fiend', 'to an ancient crypt'])}`,
    'alchemy': `turn ${random(['water into mead', 'mead into wine', 'coal into gold', 'oak wood into copper ore', 'feathers into lead', 'water into ink', 'blood into oil', 'oil into water'])}`,
    'utility': `${random(['light small campfires', 'untie any simple knot', 'always know which way is north', 'conjure a loaf of bread once per day', 'become invisible to any hostile creature', 'always know the correct time of day', 'see 10ft clearly in the dark', 'keep dry in the rain'])}`
  },
  cost: {
    // The ring grants x power, but...
    temporary: `upon activation, it causes temporary ${random(['chills all over', 'fatigue', 'flatulence', 'head-splitting headaches', 'nausea', 'unsightly and rapid hair growth', 'blindness', 'uncontrollable bowel movements', 'deafness', 'feebleness', 'coughing fits', 'madness'])}`,
    chronic: `while attuned, it causes permanent ${random(['blurred vision', 'blindness', 'loss of the power of speech', 'painful scarring and deformity', 'poor wound healing', 'tumorous growths and deformities', 'debilitating nausea', 'deafness', 'coughing fits', 'athletes foot', 'rashes all over the skin', 'scurvy'])}`,
    mental: `it brings on ${random(['anxiety', 'bad dreams', 'compulsive behavior (drinking, smoking, scratching, hygiene, etc.)', 'insomnia', 'a short temper', 'weight gain (stress eating)', 'feelings of existential dread'])} while it is being worn`,
    attention: `it attracts the attention of ${random(['aberrations', 'dragons', 'fiends', 'ghosts and wraiths', 'spiders', 'snakes', 'zombies and wights', 'devils', 'demons', 'liches'])}`,
    accompanied: `activation of its powers is occasionally accompanied by ${random(['a blizzard', 'earthquakes', 'rapid plant growth', 'thick fog', 'thunderstorms', 'volcanic eruptions', 'torrential downpours', 'tornadoes', 'strong gusts of wind'])}`,
    physical: `when in use, it causes the wearer to ${random(['lose control of all their limbs', 'lose control of their speech', 'experience searing pain throughout their body', 'scream uncontrollably', 'burst into a heavy cold sweat', 'feel as if their fingernails are being pulled off', 'have their legs go completely limp', 'be unable to breath', 'completely lose their sight', 'scratch at their skin uncontrollably', 'age rapidly'])}`
  },
  activation: {
    // the ring works best...
    'on a particular plane': `when worn in ${random(['the celestial realm', 'the fiendish realm', 'the mortal world', 'the realm of death', 'the realm of dreams and magic', 'the realm of shadow and death', 'the ethereal plane', 'the astral plane', 'the elemental planes', 'the air elemental plane', 'the fire elemental plane', 'the earth elemental plane', 'the water elemental plane', 'the Upper planes', 'the Lower planes', 'Elysium', 'the Beastlands', 'Bytopia', 'Mount Celestia', 'Arborea', 'Arcadia', 'Ysgard', 'Mechanus', 'Limbo', 'Acheron', 'the Nine Hells', 'Gehenna', 'Hades', 'Carceri', 'the Abyss', 'Pandemonium'])}`,
    'when worn by a': `when worn by a ${random(['dwarf', 'half-dragon', 'high elf', 'serpentfolk', 'shadowfolk', 'wood elf', 'gnome', 'human', 'half-elf', 'half-orc', 'orc', 'halfling', 'tiefling'])}`,
    'sunlight': random(['in full sunlight', "while it's sunny", 'during a sunny day', 'under the light of the sun']),
    'moonlight': `when worn under a ${random(['full moon', 'half-moon', 'waxing crescent moon', 'waning crescent moon', 'moon', 'moon', 'moon', 'moon', 'blood moon', 'blue moon', 'harvest moon', 'new moon'])}`,
    'underground': random(['underground', 'beneath the earth', 'under the ground']),
    'starlight': random(['under starlight', 'under the starlight', 'while the stars shine above', 'beneath the stars']),
    'weather': `when worn in ${random(['slightly cloudy', 'overcast', 'extremely windy', 'very sunny', 'cloudless', 'stormy', 'rainy', 'warm', 'cold', 'moderate', 'bad', 'good'])} weather`,
    'feelings': `when the wearer is feeling ${random(['extremely angry', 'incredibly sad', 'a deep meloncholy', 'an unquenchable rage', 'a lust for revenge', 'completely hopeless', 'utterly betrayed', 'joyous', 'incredibly euphoric', 'very hungry', 'alone in the world', 'lustful'])}`
  }
})
