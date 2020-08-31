import { random } from './random'
import { assign } from './utils'

interface MagicTrinket {
  type: string
  name: string
  prefixTrinket: string
  suffixTrinket: string
  prefixProperty: string
  suffixProperty: string
  description: string
}

export function createMagicTrinket (): MagicTrinket {
  const prefixTrinketRoll = random(properties.length - 1)
  const suffixTrinketRoll = random(properties.length - 1)

  const trinket = {
    type: random(types),
    prefixTrinket: properties[prefixTrinketRoll].prefix,
    suffixTrinket: properties[suffixTrinketRoll].suffix,
    prefixProperty: properties[prefixTrinketRoll].property,
    suffixProperty: properties[suffixTrinketRoll].property
  }

  assign(trinket, {
    description: `${trinket.prefixProperty} ${trinket.suffixProperty}`,
    name: `${trinket.prefixTrinket} ${trinket.type} ${trinket.suffixTrinket}`
  })

  return trinket
}

const types = [
  'Belt',
  'Bracers',
  'Circlet',
  'Gauntlets',
  'Amulet',
  'Boots',
  'Hat',
  'Helm',
  'Scabbard',
  'Orb',
  'Cap',
  'Amulet',
  'Pendant',
  'Medallion',
  'Mask',
  'Cloak',
  'Ring',
  'Quiver',
  'Tiara',
  'Collar',
  'Gloves',
  'Candlestick',
  'Brooch',
  'Decorative Dagger',
  'Mirror',
  'Jade Pyramid',
  'Bronze Figurine',
  'Dragon Fang Pendant',
  'Pawn',
  'Puzzlebox',
  'Linen Handkerchief',
  'Iron Key',
  'Cloth Doll',
  'Oil Lamp',
  'Ale Stine',
  "Imp's Skull",
  'Walking Stick',
  'Ingot',
  'Meteor Stone Fragment',
  'Torch',
  'Silver Bell',
  'Coin',
  'Leather Pouch',
  'Quill Pen',
  'Scales',
  'Gaming Die',
  'Small Brass Cage',
  'Chime',
  'Iron Ring',
  'Amulet',
  'Emblem',
  'Hourglass',
  'Padlock',
  'Magnifying glass',
  'Manacles',
  'Perfume Vial',
  "Miner's Pick",
  'Pouch',
  'Robes',
  'Shovel',
  'Signal Whistle',
  'Spyglass',
  'Vial',
  'Waterskin',
  'Abacus',
  'Crystal',
  'Staff',
  'Wand',
  'Book',
  'Glass Bottle',
  'Crowbar',
  'Totem',
  'Flask',
  'Tankard',
  'Instrument',
  'Playing Card Set'
]

const properties = [
  {
    prefix: 'Abyssal',
    suffix: 'of the Abyss',
    property: 'When on the plane of the Abyss, the bearer has advantage on saving throws against Abyssal Corruption. (DMG p. 62)'
  }, {
    prefix: "Acolyte's",
    suffix: 'of the Acolyte',
    property: 'The bearer gains a +1 bonus to Wisdom (Religion) checks.'
  }, {
    prefix: 'Adamantine',
    suffix: 'of Adamantine',
    property: 'The item is indestructible.'
  }, {
    prefix: 'Adroit',
    suffix: 'of Intellect',
    property: 'The bearer gains +1 bonus to Intelligence saving throws.'
  }, {
    prefix: 'Alarming',
    suffix: 'of Alarms',
    property: 'Contains 1d4 unreplenishable charges of the Alarm spell (1st level).'
  }, {
    prefix: 'Arborean',
    suffix: 'of Arborea',
    property: 'When on the plane of Arborea, the bearer has advantage on saving throws against the effects of Intense Yearning. (DMG p. 61)'
  }, {
    prefix: 'Arcadian',
    suffix: 'of Arcadia',
    property: 'When on the plane of Arcardia, the bearer is unaffected by Planar Vitality (DMG p. 67)'
  }, {
    prefix: 'Arctic',
    suffix: 'of the North',
    property: 'The bearer suffers no harm in temperature as cold as -20 degrees Fahrenheit.'
  }, {
    prefix: 'Arresting',
    suffix: 'of Safety',
    property: 'Once per day, the bearer may use their reaction to reduce fall damage by 1d6 until the end of turn.'
  }, {
    prefix: "Assassin's",
    suffix: 'of the Assassin',
    property: 'The bearer may add their proficiency bonus to damage rolls dealt during surprise rounds.'
  }, {
    prefix: 'Astral',
    suffix: 'of the Astral Sea',
    property: 'When travelling the Astral Sea, it takes half the number of hours to locate a Color Pool to a specific plane. You have advantage on saving throws vs. the effects of Psychic Wind (DMG p. 47-48)'
  }, {
    prefix: "Barbarian's",
    suffix: 'of the Barbarian',
    property: 'The bearer gains a +1 bonus to Strength (Athletics) checks.'
  }, {
    prefix: "Bard's",
    suffix: 'of the Bard',
    property: 'The bearer gains +1 to Charisma (Performance) checks.'
  }, {
    prefix: 'Beastial',
    suffix: 'of the Beastlands',
    property: 'When on the plane of The Beastlands, the bearer has advantage on saving throws vs. Beast Transformation (DMG p. 60)'
  }, {
    prefix: "Beastspeaker's",
    suffix: 'of Beastspeakers',
    property: 'Contains 1d4 unreplenishable charges of the Speak with Animals spell (1st level).'
  }, {
    prefix: 'Benedictine',
    suffix: 'of Benediction',
    property: 'Contains 1d4 unreplenishable charges of the Healing Word spell (1st level).'
  }, {
    prefix: 'Blasted',
    suffix: 'of Blasting',
    property: 'Contains 1d4 unreplenishable charges of the Fire Bolt spell (1st level).'
  }, {
    prefix: 'Blessed',
    suffix: 'of Blessings',
    property: 'Whenever bearer of this item receives divine healing, they gain an additional 1d4 hit points.'
  }, {
    prefix: 'Bold',
    suffix: 'of Boldness',
    property: 'Contains 1d4 unreplenishable charges of the Heroism spell (1st level).'
  }, {
    prefix: 'Bountiful',
    suffix: 'of Bounty',
    property: 'Contains 1d4 unreplenishable charges of the Goodberry spell (1st level).'
  }, {
    prefix: "Burglar's",
    suffix: 'of the Burglar',
    property: 'The bearer gains +1 to Dexterity (Sleight of Hand) checks.'
  }, {
    prefix: 'Bytopian',
    suffix: 'of Bytopia',
    property: 'When on the plane of Bytopia, the bearer has advantage on saving throws against Pervasive Goodwill. (DMG p. 59-60)'
  }, {
    prefix: 'Carcerian',
    suffix: 'of Carceri',
    property: 'When on the plane of Carceri, the bearer knows the direction to the closest secret exit from this prison plane. (DMG p. 63)'
  }, {
    prefix: 'Cardinal',
    suffix: 'of the Lodestone',
    property: 'The wielder can use an action to learn which way is north.'
  }, {
    prefix: 'Cartographic',
    suffix: 'of Cartography',
    property: 'On its own volition, the item records a map of the environments that the bearer is exploring, and can magically project it for the bearer to see.'
  }, {
    prefix: 'Channelling',
    suffix: 'of Channelling',
    property: 'Once per day, the bearer may ignore the Verbal and/or Somatic components of a spell they are casting.'
  }, {
    prefix: 'Chill',
    suffix: 'of Chills',
    property: 'Contains 1d4 unreplenishable charges of the Ray of Frost spell (1st level).'
  }, {
    prefix: 'Clockwork',
    suffix: 'of Gears',
    property: 'When on the plane of Mechanus, the bearer has advantage on saving throws against Imposing Order (DMG p. 66)'
  }, {
    prefix: 'Cloy',
    suffix: 'of Cloying',
    property: 'The bearer may cast Friends once per day.'
  }, {
    prefix: 'Compassionate',
    suffix: 'of Compassion',
    property: 'Contains 1d4 unreplenishable charges of the Cure Wounds spell (1st level).'
  }, {
    prefix: 'Concordant',
    suffix: 'of Concordance',
    property: 'The bearer has advantage on saving throws vs. Psychic Dissonance when travelling the Outer Planes. (DMG p. 59)'
  }, {
    prefix: "Conjurer's",
    suffix: 'of the Conjurer',
    property: 'The bearer may cast Prestidigitation once per day.'
  }, {
    prefix: 'Corrosive',
    suffix: 'of Dissolving',
    property: 'Contains 1d4 unreplenishable charges of the Acid Splash spell (1st level).'
  }, {
    prefix: 'Crawling',
    suffix: 'of Vermin',
    property: 'The crawling things of the earth, such as insects, snakes, and vermin, are attracted to this item. When placed on the ground, such creatures will scurry toward the item like moths drawn to the flame.'
  }, {
    prefix: "Dancer's",
    suffix: 'of the Dancer',
    property: 'The bearer gains a +1 bonus to Dexterity (Acrobatics) checks.'
  }, {
    prefix: 'Defensive',
    suffix: 'of Defence',
    property: 'Whenever the bearer takes a dodge action, they may move an additional 5 feet.'
  }, {
    prefix: "Delver's",
    suffix: 'of the Delver',
    property: "While underground, the bearer of this item always knows the item's depth below the surface and the direction to the nearest staircase, ramp, or other path leading upward."
  }, {
    prefix: 'Desperate',
    suffix: 'of Last Chances',
    property: 'The bearer has advantage on perception checks when searching for items long lost in the the Swamp of Oblivion on the Plane of Earth. (DMG p. 54)'
  }, {
    prefix: "Druid's",
    suffix: 'of the Druid',
    property: 'The bearer gains a +1 bonus to Intelligence (Nature) checks.'
  }, {
    prefix: "Drunkard's",
    suffix: 'of Taverns',
    property: 'The bearer always knows the direction to the closest alcoholic beverage.'
  }, {
    prefix: 'Dynamic',
    suffix: 'of the Dynamo',
    property: 'The bearer has +1 to Charisma saving throws.'
  }, {
    prefix: "Eavesdropper's",
    suffix: 'of Eavesdropping',
    property: 'As long as it is on the same plane, the bearer can hear through this item as if they were present.'
  }, {
    prefix: 'Elysian',
    suffix: 'of Elysium',
    property: 'When on the plane of Elysium, the bearer has advantage on saving throws against the effects of Overwhelming Joy (DMG p. 60)'
  }, {
    prefix: 'Etherbound',
    suffix: 'of Ethereal Shores',
    property: "The bearer can see creatures in the Border Ethereal that overlap with their plane as clearly as if they were fully in the bearer's plane. Such creatures appear as apparitions or ghosts."
  }, {
    prefix: 'Exalting',
    suffix: 'of Exaltation',
    property: 'Contains 1d4 unreplenishable charges of the Bless spell (1st level).'
  }, {
    prefix: 'Expeditious',
    suffix: 'of Expedience',
    property: 'Contains 1d4 unreplenishable charges of the Expeditious Retreat spell.'
  }, {
    prefix: 'Inaccurate',
    suffix: 'of Falsehoods',
    property: 'The bearer gains a +1 bonus to Charisma (Deception) checks.'
  }, {
    prefix: 'Fathoming',
    suffix: 'of Tongues',
    property: 'Contains 1d4 unreplenishable charges of the Comprehend Languages spell.'
  }, {
    prefix: 'Favored',
    suffix: 'of the Favored',
    property: 'Once per day, the bearer may roll a saving throw with advantage.'
  }, {
    prefix: 'Feathered',
    suffix: 'of Feathers',
    property: 'Contains 1d4 unreplenishable charges of the Feather Fall spell (1st level).'
  }, {
    prefix: 'Feybound',
    suffix: 'of the Fey',
    property: 'The bearer knows the general direction to the closest Fey Crossing within a 60 mile radius. (DMG p. 50)'
  }, {
    prefix: 'First',
    suffix: 'of Speed',
    property: 'The bearer gain a +1 bonus to initiative rolls'
  }, {
    prefix: 'Forgiven',
    suffix: 'of Forgiveness',
    property: 'When on the plane of Mount Celestia, the bearer of this item can receive the benefits of Blessed Beneficence regardless of their alignment.'
  }, {
    prefix: "Fortune Teller's",
    suffix: 'of the Fortune Teller',
    property: 'Every time you are hit by a monster, you glimpse a random image of its future or past.'
  }, {
    prefix: 'Friendly',
    suffix: 'of Friendship',
    property: 'Contains 1d4 unreplenishable charges of the Animal Friendship spell (1st level).'
  }, {
    prefix: 'Gehennan',
    suffix: 'of Gehenna',
    property: 'When on the plane of Gehenna, the bearer has advantage on saving throws against Cruel Hindrance. (DMG p. 63)'
  }, {
    prefix: 'Gracious',
    suffix: 'of Grace',
    property: 'The bearer may cast Spare the Dying once per day.'
  }, {
    prefix: 'Grim',
    suffix: 'of Coercion',
    property: 'The bearer gains a +1 bonus to Charisma (Intimidation) checks if the target can see this item.'
  }, {
    prefix: 'Hadean',
    suffix: 'of Hades',
    property: 'When on the plane of Hades, the bearer has advantage on saving throws against Vile Transformation. (DMG p. 63)'
  }, {
    prefix: 'Harmonious',
    suffix: 'of Harmony',
    property: 'Attuning to this item takes only 1 minute.'
  }, {
    prefix: 'Healing',
    suffix: 'of Healing',
    property: 'This item contains 4 weak healing nodes. As an action, a character can use one node to heal 1d4 hit points at touch range. The item regains 1d4 charges at sunrise.'
  }, {
    prefix: 'Hellish',
    suffix: 'of the Nine Hells',
    property: 'When in the Nine Hells, the bearer has advantage on saving throws against Pervasive Evil. (DMG p. 64)'
  }, {
    prefix: 'Heroic',
    suffix: 'of Heroes',
    property: 'The bearer has advantage on saving throws vs. fear.'
  }, {
    prefix: 'Histrionic',
    suffix: 'of Histrionics',
    property: 'the bearer gains +1 to Charisma (Performance) checks.'
  }, {
    prefix: 'Holy',
    suffix: 'of Faith',
    property: 'When the bearer of this item rolls hit dice, they can choose to re-roll them and take the second result.'
  }, {
    prefix: 'Iconic',
    suffix: 'of Symbols',
    property: "The item is inscribed with holy symbols of the God of the DM's choice. A cleric or paladin that serves that god may use this item as a divine focus."
  }, {
    prefix: "Inquisitor's",
    suffix: 'of the Inquisitor',
    property: 'The bearer gains a +1 bonus to Intelligence (Investigation) checks.'
  }, {
    prefix: 'Inspired',
    suffix: 'of Inspiration',
    property: 'The bearer regains their Constitution modifier in temporary hit points whenever they gain or use inspiration.'
  }, {
    prefix: 'Leaping',
    suffix: 'of Leaping',
    property: 'Contains 1d4 unreplenishable charges of the Jump spell (1st level).'
  }, {
    prefix: "Liar's",
    suffix: 'of Lies',
    property: 'Contains 1d4 unreplenishable charges of the Silent Image spell (1st level).'
  }, {
    prefix: 'Limbo',
    suffix: 'of Limbo',
    property: 'When on the plane of Limbo, the bearer has advantage to Intelligence checks to alter or move non-magical objects within the plane. (DMG p. 61-62)'
  }, {
    prefix: 'Locating',
    suffix: 'of Locating',
    property: 'Once attuned, the bearer always knows the exact location of this item'
  }, {
    prefix: 'Loquacious',
    suffix: 'of the Silver Tongue',
    property: 'The bearer gains +1 to Charisma (Persuasion) checks.'
  }, {
    prefix: 'Malediction',
    suffix: 'of Malediction',
    property: 'Contains 1d4 unreplenishable charges of the Bane spell(1st level).'
  }, {
    prefix: 'Manipulating',
    suffix: 'of Manipulation',
    property: 'The bearer may cast Mage Hand once per day.'
  }, {
    prefix: "Master's",
    suffix: 'of Servants',
    property: 'Contains 1d4 unreplenishable charges of the Unseen Servant spell (1st level).'
  }, {
    prefix: 'Maverick',
    suffix: 'of the Maverick',
    property: 'The bearer has a +1 bonus to any skill check involving gambling and games of chance (Insight, Sleight of Hand, Investigation, etc).'
  }, {
    prefix: 'Messenger',
    suffix: 'of Messages',
    property: 'The bearer may cast Message once per day.'
  }, {
    prefix: 'Meteoric',
    suffix: 'of Falling Stars',
    property: 'Contains 1 unreplenishable charge of Scorching Ray (1st level).'
  }, {
    prefix: 'Mindful',
    suffix: 'of Mindfulness',
    property: 'The bearer gains a +1 bonus to Wisdom saving throws.'
  }, {
    prefix: 'Miraculous',
    suffix: 'of Miracles',
    property: 'The bearer may cast Thaumaturgy once per day.'
  }, {
    prefix: 'Mocking',
    suffix: 'of Mockery',
    property: 'The bearer may cast Vicious Mockery once per day.'
  }, {
    prefix: 'Natural',
    suffix: 'of Nature',
    property: 'Contains 1d4 unreplenishable charges of the Locate Animals or Plants spell (1st level).'
  }, {
    prefix: 'Neutralizing',
    suffix: 'of Neutrality',
    property: 'Contains 1d4 unreplenishable charges of the Protection from Good and Evil spell (1st level).'
  }, {
    prefix: 'Nimble',
    suffix: 'of Agility',
    property: 'The bearer gains a +1 bonus to Dexterity saving throws.'
  }, {
    prefix: 'Nourishing',
    suffix: 'of Nourishment',
    property: 'The bearer rarely feels hungry, and only needs to consume one-fifth the usual amount of food.'
  }, {
    prefix: 'Pandemonium',
    suffix: 'of Pandemonium',
    property: 'When on the plane of Pandemonium, the bearer has advantage on saving throws against the Mad Winds. (DMG p. 62)'
  }, {
    prefix: "Preacher's",
    suffix: 'of the Preacher',
    property: 'The bearer may extend the range of their Channel Divinity by 5 feet.'
  }, {
    prefix: 'Projecting',
    suffix: 'of Projection',
    property: 'The bearer can send messages mentally to willing characters within 30 feet. This communication is one-way only.'
  }, {
    prefix: 'Protective',
    suffix: 'of Protection',
    property: 'The bearer may cast Blade Ward once per day.'
  }, {
    prefix: "Reaper's",
    suffix: 'of the Reaper',
    property: 'The bearer has advantage on death saving throws.'
  }, {
    prefix: 'Renaissance',
    suffix: 'of the Renaissance',
    property: 'Once per day, the bearer may gain +1 to any skill check.'
  }, {
    prefix: 'Revealing',
    suffix: 'of Revelation',
    property: 'Contains 1d4 unreplenishable charges of the Detect Magic spell (1st level).'
  }, {
    prefix: 'Riutal',
    suffix: 'of Rituals',
    property: 'Whenever the bearer casts a spell as a ritual, they have advantage to maintain concentration during the ritual.'
  }, {
    prefix: 'Sacred',
    suffix: 'of the Sacred',
    property: 'The bearer may increase their Lay on Hands hit point pool by 5.'
  }, {
    prefix: 'Sagacious',
    suffix: 'of Acumen',
    property: 'The bearer gains +1 to Wisdom (Insight) checks.'
  }, {
    prefix: "Sage's",
    suffix: 'of the Sage',
    property: 'The bearer gains a +1 bonus to Intelligence (History) checks.'
  }, {
    prefix: 'Secret',
    suffix: 'of Secrets',
    property: 'Contains 1d4 unreplenishable charges of the Illusory Script spell (1st level).'
  }, {
    prefix: 'Sentinel',
    suffix: 'of the Sentinel',
    property: 'Faintly glows when creatures of a certain race (DMs choice) are within a 100 foot radius.'
  }, {
    prefix: 'Shading',
    suffix: 'of Shade',
    property: 'The bearer suffers no harm in temperatures as high as 120 degrees Fahrenheit.'
  }, {
    prefix: 'Shadowbound',
    suffix: 'of the Shadowfell',
    property: 'The bearer knows the general direction to the closest Shadow Crossing within a 60 mile radius. They have advantage on saving throws vs. Shadowfell Dispair (DMG p. 51-52)'
  }, {
    prefix: "Shepherd's",
    suffix: 'of the Shepherd',
    property: 'The bearer gains a +1 bonus to (Wisdom) Animal Handling checks.'
  }, {
    prefix: 'Shielding',
    suffix: 'of Shielding',
    property: 'This item contains 1d4 unreplenishable charges of the Shield spell.'
  }, {
    prefix: 'Shifting',
    suffix: 'of Shifting',
    property: 'The bearer may change minor aspects of the physical appearance of this item.'
  }, {
    prefix: 'Silent',
    suffix: 'of the Night',
    property: 'The bearer gains a +1 bonus to Dexterity (Stealth) checks.'
  }, {
    prefix: "Smith's",
    suffix: 'of Reparations',
    property: 'The bearer may cast Mending once per day.'
  }, {
    prefix: "Sojourner's",
    suffix: 'of the Sojouner',
    property: 'A poem, story, or map that describes a long-forgotten treasure is etched on the surface of the item.'
  }, {
    prefix: 'Solemn',
    suffix: 'of Solemnity',
    property: 'The bearer may spend an action removing all the failed death saving throws from a target within 5 feet of them. The target is still not stabilized.'
  }, {
    prefix: 'Sparkling',
    suffix: 'of Lights',
    property: 'The bearer may cast Dancing Lights once per day.'
  }, {
    prefix: 'Striding',
    suffix: 'of Strides',
    property: 'Contains 1d4 unreplenishable charges of the Longstrider spell (1st level).'
  }, {
    prefix: "Surgeon's",
    suffix: 'of the Surgeon',
    property: 'The bearer gains a +1 bonus to Wisdom (Medicine) checks.'
  }, {
    prefix: 'Tenacious',
    suffix: 'of the Tenacious',
    property: 'When the bearer takes a long rest, they gain back one additional hit die.'
  }, {
    prefix: "Tracker's",
    suffix: 'of the Tracker',
    property: 'The bearer gains a +1 to Wisdom (Survival) checks.'
  }, {
    prefix: 'Translucent',
    suffix: 'of Translucence',
    property: 'The bearer gains an extra level one spell slot, which recovers only after a full moon rises.'
  }, {
    prefix: "Trickster's",
    suffix: 'of Trickery',
    property: 'The bearer may cast Minor Illusion once per day.'
  }, {
    prefix: 'Accurate',
    suffix: 'of Truth',
    property: 'The bearer may cast True Strike once per day.'
  }, {
    prefix: 'Unbroken',
    suffix: 'of Heart',
    property: 'The bearer gains a +1 bonus to Constitution saving throws.'
  }, {
    prefix: 'Verdant',
    suffix: 'of Druidcraft',
    property: 'The bearer may cast Druidcraft once per day.'
  }, {
    prefix: 'Victorious',
    suffix: 'of Victory',
    property: "Whenever the bearer kills a creature they gain temporary hit points equal to the creature's CR."
  }, {
    prefix: 'Vigilant',
    suffix: 'of Vigilance',
    property: 'The bearer gains +2 to their Passive Perception.'
  }, {
    prefix: 'Vigorous',
    suffix: 'of Vigor',
    property: 'The bearer gains a +1 bonus to Strength saving throws.'
  }, {
    prefix: 'Vital',
    suffix: 'of Vitality',
    property: "The bearer's maximum hit points increases by their constitution modifier while attuned to this item. These hit points are lost when the bearer unattunes the item."
  }, {
    prefix: "War Leader's",
    suffix: 'of the War Leader',
    property: 'The bearer can use an action to amplify their voice so that it clearly carries for up to 300 feet.'
  }, {
    prefix: 'Waterborne',
    suffix: 'of the Sea',
    property: 'The item floats on water or other liquids. Its bearer has advantage on Strength (Athletics) checks to swim.'
  }, {
    prefix: 'Windborne',
    suffix: 'of the Labyrinth Wind',
    property: 'When in the Plane of Air, the bearer can navigate the Labyrinth Wind intuitively, and knows the path to the nearest Earth Mote within 60 miles.'
  }, {
    prefix: "Wizard's",
    suffix: 'of the Wizard',
    property: 'The bearer gains a +1 to Intelligence (Arcana) checks.'
  }, {
    prefix: 'Wrathful',
    suffix: 'of Ysgard',
    property: 'When on the plane of Ysgard, the bearer is unaffected by Immortal Wrath. (DMG p. 61)'
  }
]
