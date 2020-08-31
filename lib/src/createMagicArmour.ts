import { random } from './random'
import { assign } from './utils'

interface MagicArmour {
  type: string
  name: string
  prefixArmour: string
  suffixArmour: string
  prefixProperty: string
  suffixProperty: string
  description: string
}

export function createMagicArmour (): MagicArmour {
  const prefixArmourRoll = random(properties.length - 1)
  const suffixArmourRoll = random(properties.length - 1)

  const armour = {
    type: random(types),
    prefixArmour: properties[prefixArmourRoll].prefix,
    suffixArmour: properties[suffixArmourRoll].suffix,
    prefixProperty: properties[prefixArmourRoll].property,
    suffixProperty: properties[suffixArmourRoll].property
  }

  assign(armour, {
    description: `${armour.prefixProperty}. ${armour.suffixProperty}`,
    name: `${armour.prefixArmour} ${armour.type} ${armour.suffixArmour}`
  })

  return armour
}

const types = ['Padded Armour', 'Leather Armour', 'Studded leather Armour', 'Hide Armour', 'Chain shirt', 'Scale mail', 'Breastplate', 'Half plate', 'Ring mail', 'Chain mail', 'Splint Armour', 'Plate Armour', 'Shield']
const properties = [
  {
    prefix: "Acolyte's",
    suffix: 'of the Acolyte',
    property: 'The bearer gains a +1 bonus to Wisdom (Religion) checks'
  }, {
    prefix: 'Amethyst',
    suffix: 'of Amethyst',
    property: 'Reduces psychic damage to the bearer by 2'
  }, {
    prefix: 'Arboreal',
    suffix: 'of the Woodlands',
    property: 'Treat as a +1 armor after the bearer has taken a long rest in a forest. If the bearer leaves the forest, this property becomes temporarily inert'
  }, {
    prefix: 'Arid',
    suffix: 'of the Wastelands',
    property: 'Treat as a +1 armor after the bearer has taken a long rest in a desert. If the bearer leaves the desert, this property becomes temporarily inert'
  }, {
    prefix: 'Astute',
    suffix: 'of the Astute',
    property: 'It takes half the time to don or doff this armor than a normal armor of this type'
  }, {
    prefix: 'Arctic',
    suffix: 'of the North',
    property: 'The bearer suffers no harm in temperature as cold as -20 degrees Fahrenheit'
  }, {
    prefix: "Artisan's",
    suffix: 'of the Artisan',
    property: "This armor is a swiss army knife of enchanted appendages that can take the form of any artisan's tools, from Alchemist's and Brewer's supplies to Weaver's and Woodcarver's tools (see p. 154 of the PHB for a complete set of artisan's tools)"
  }, {
    prefix: "Barbarian's",
    suffix: 'of the Barbarian',
    property: 'The bearer gains a +1 bonus to Strength (Athletics) checks'
  }, {
    prefix: "Bard's",
    suffix: 'of the Bard',
    property: 'The bearer gains +1 to Charisma (Performance) checks'
  }, {
    prefix: 'Blessed',
    suffix: 'of Blessings',
    property: 'Whenever bearer of this item receives divine healing, they gain an additional 1d4 hit points'
  }, {
    prefix: 'Bloodthirsty',
    suffix: 'of Bloodthirst',
    property: 'The bearer can expend a hit die to turn this into a +1 armor for 1d4 turns'
  }, {
    prefix: "Burglar's",
    suffix: 'of the Burglar',
    property: 'The bearer gains +1 to Dexterity (Sleight of Hand) checks'
  }, {
    prefix: 'Cavernous',
    suffix: 'of the Underdark',
    property: 'Treat as a +1 armor after the bearer has taken a long rest in a cave. If the bearer leaves the cave, this property becomes temporarily inert'
  }, {
    prefix: 'Cardinal',
    suffix: 'of the Lodestone',
    property: 'The wielder can use an action to learn which way is north'
  }, {
    prefix: 'Cerulean',
    suffix: 'of Storms',
    property: 'Reduces lightning damage to the bearer by 2'
  }, {
    prefix: 'Channelling',
    suffix: 'of Channelling',
    property: 'Once per day, the bearer may ignore the Verbal and/or Somatic components of a spell they are casting'
  }, {
    prefix: 'Charitable',
    suffix: 'of Charity',
    property: 'If the bearer donates 100gp or more to a temple of a goodly deity, this becomes a +1 armor for the next 24 hours. If they go longer than a month without making any such donations, they gain a -1 AC penalty until a suitable donation is made'
  }, {
    prefix: 'Civilized',
    suffix: 'of the Hearth',
    property: 'Treat as a +1 armor after the bearer has taken a long rest in an living urban environment. If the bearer leaves the city, this property becomes temporarily inert'
  }, {
    prefix: "Climber's",
    suffix: 'of the Climber',
    property: 'This armor is suited with harnesses, rope, and other climbing tools are readily in reach. The bearer may treat this armor as a climbing kit'
  }, {
    prefix: 'Concealing',
    suffix: 'of Concealment',
    property: 'The bearer may spend one action assembling components of this armor into a dagger. A person searching the bearer for weapons must make a DC 20 Intelligence (Investigation) check to discover this property'
  }, {
    prefix: 'Consecrated',
    suffix: 'of Consecration',
    property: 'Treat this as a +1 armor when the bearer is being attacked by Undead'
  }, {
    prefix: 'Crystalline',
    suffix: 'of Crystal',
    property: 'Treat as +1 armor until the bearer takes a critical hit, at which point it then loses this property'
  }, {
    prefix: "Dancer's",
    suffix: 'of the Dancer',
    property: 'The bearer gains a +1 bonus to Dexterity (Acrobatics) checks'
  }, {
    prefix: 'Dazzling',
    suffix: 'of Dazzling',
    property: 'Once per day, the bearer may spend an action to ignite the magic in this armor, causing it to flare brilliantly. Any creature within a 10 foot radius must use their reaction to shield their eyes or be blinded until the end of their next turn'
  }, {
    prefix: "Debtor's",
    suffix: 'of Debts',
    property: 'The first 1 bludgeoning, piercing, or slashing damage from any source is negated. However, the total amount of damage prevented from that day acts as a negative modifier on death saving throws. So, if the armor prevented 5 points of damage that day, the bearer has a -5 penalty on death saving throws'
  }, {
    prefix: 'Defensive',
    suffix: 'of Defence',
    property: 'Whenever the bearer takes a dodge action, they may move an additional 5 feet'
  }, {
    prefix: 'Deflecting',
    suffix: 'of Deflection',
    property: 'The bearer may spend their reaction to treat this as +1 armor vs. ranged weapon attacks until the beginning of their next turn'
  }, {
    prefix: "Delver's",
    suffix: 'of the Delver',
    property: "While underground, the bearer of this item always knows the item's depth below the surface and the direction to the nearest staircase, ramp, or other path leading upward"
  }, {
    prefix: 'Diplomatic',
    suffix: 'of Diplomacy',
    property: "The bearer gains proficiency in a language of the DM's choice"
  }, {
    prefix: "Druid's",
    suffix: 'of the Druid',
    property: 'The bearer gains a +1 bonus to Intelligence (Nature) checks'
  }, {
    prefix: 'Ephemeral',
    suffix: 'of Transience',
    property: 'Once per day, the bearer may spend their reaction to gain their Wisdom modifier to their AC until the beginning of their next turn'
  }, {
    prefix: 'Evasive',
    suffix: 'of Evasion',
    property: 'Whenever the wearer takes a dodge action, they gain +1 AC until the end of the turn'
  }, {
    prefix: 'Fair-weather',
    suffix: 'of Fair-weather',
    property: 'The bearer may treat this as +1 armor if the bearer has more than half of their maximum hit points'
  }, {
    prefix: 'Lying',
    suffix: 'of Falsehoods',
    property: 'The bearer gains a +1 bonus to Charisma (Deception) checks'
  }, {
    prefix: 'Favored',
    suffix: 'of the Favored',
    property: 'Once per day, the bearer may roll a saving throw with advantage'
  }, {
    prefix: 'Feinting',
    suffix: 'of Feinting',
    property: 'Whenever the bearer uses the help action in combat, they may treat this as a +1 armor until the beginning of their next turn'
  }, {
    prefix: 'Fen',
    suffix: 'of the Glade',
    property: 'Treat as a +1 armor after the bearer has taken a long rest in a swamp. If the bearer leaves the swamp, this property becomes temporarily inert'
  }, {
    prefix: 'Flanked',
    suffix: 'of the Flanked',
    property: 'The wearer may treat this as +1 armor if two or more enemies are adjacent to them'
  }, {
    prefix: 'First',
    suffix: 'of Reflexes',
    property: 'The bearer gain a +1 bonus to initiative rolls'
  }, {
    prefix: 'Fresh',
    suffix: 'of Cleansing',
    property: 'This armor never gets dirty and remains odorless, even in the most filthy dungeon'
  }, {
    prefix: 'Forgotten',
    suffix: 'of the Forgotten',
    property: 'The bearer may spend an action to attempt to ignite the old magic in this armor with a DC 13 Charisma check. If successful, treat this as a +1 armor as long as the bearer maintains concentration on this effect, maximum 10 minutes'
  }, {
    prefix: 'Furious',
    suffix: 'of Fury',
    property: 'Treat as a +1 armor when the bearer is raging'
  }, {
    prefix: 'Garnet',
    suffix: 'of Garnet',
    property: 'Reduces fire damage to the bearer by 2'
  }, {
    prefix: 'Glass',
    suffix: 'of Glass',
    property: 'The bearer may treat this as +1 armor as long as the bearer is at full health'
  }, {
    prefix: 'Granite',
    suffix: 'of the Mountain',
    property: 'Any effect that would move the bearer against their will is reduced in distance by 5 feet'
  }, {
    prefix: 'Grim',
    suffix: 'of Coercion',
    property: 'The bearer gains a +1 bonus to Charisma (Intimidation) checks if their armor is visible'
  }, {
    prefix: 'Harmonious',
    suffix: 'of Harmony',
    property: 'Attuning to this item takes only 1 minute'
  }, {
    prefix: 'Heroic',
    suffix: 'of Heroes',
    property: 'The bearer has advantage on saving throws vs. fear'
  }, {
    prefix: 'Histrionic',
    suffix: 'of Histrionics',
    property: 'the bearer gains +1 to Charisma (Performance) checks'
  }, {
    prefix: 'Holy',
    suffix: 'of Faith',
    property: 'When the bearer of this item rolls hit dice, they can choose to re-roll them and take the second result'
  }, {
    prefix: "Inquisitor's",
    suffix: 'of the Inquisitor',
    property: 'The bearer gains a +1 bonus to Intelligence (Investigation) checks'
  }, {
    prefix: 'Inspired',
    suffix: 'of Inspiration',
    property: 'The bearer regains their Constitution modifier in temporary hit points whenever they gain or use inspiration'
  }, {
    prefix: 'Invisible',
    suffix: 'of Invisibility',
    property: 'Once worn, this armor turns invisible (although not the wearer)'
  }, {
    prefix: 'Lightweight',
    suffix: 'of Mobility',
    property: 'This armor is 10% lighter than normal armor of this type. If it has a Strength requirement to use, it is reduced by 1'
  }, {
    prefix: 'Loquacious',
    suffix: 'of the Silver Tongue',
    property: 'The bearer gains +1 to Charisma (Persuasion) checks'
  }, {
    prefix: "Mage Killer's",
    suffix: 'of the Mage Killer',
    property: 'The bearer may spend their reaction to treat this as +1 armor vs. spell attacks until the beginning of their next turn'
  }, {
    prefix: 'Malachite',
    suffix: 'of Malachite',
    property: 'Reduces poison damage to the bearer by 2'
  }, {
    prefix: 'Masquarading',
    suffix: 'of the Masquarade',
    property: 'The bearer has advantage on skill checks involving disguise kits'
  }, {
    prefix: "Medic's",
    suffix: 'of the Caduceus',
    property: "Lined with pockets and compartments and stocked with medical supplies, the bearer may treat this armor as a healer's kit"
  }, {
    prefix: 'Moonlit',
    suffix: 'of the Moon',
    property: 'The bearer may treat this as +1 armor when moonlight is shining directly on this armor'
  }, {
    prefix: "Mortals'",
    suffix: 'of Mortals',
    property: 'At the end of a turn where the bearer failed a death saving throw, the magic within this armor will attempt to stabilize the bearer. It rolls a Wisdom (Medicine) check with a +3 modifier'
  }, {
    prefix: 'Mournful',
    suffix: 'of Sorrow',
    property: 'When an ally falls unconscious in battle, the bearer gains a +1 AC bonus for the next 10 minutes. If that ally stabilizes or awakens, the bearer loses this bonus'
  }, {
    prefix: 'Obsidian',
    suffix: 'of Obsidian',
    property: 'Reduces acid damage to the bearer by 2'
  }, {
    prefix: 'Opal',
    suffix: 'of Opal',
    property: 'Reduces cold damage to the bearer by 2'
  }, {
    prefix: 'Pious',
    suffix: 'of the Pious',
    property: 'Whenever the bearer shaves their head, treat this as a +1 armor until the end of the day. They must wait a week until they have long enough hair to re-enact this ritual'
  }, {
    prefix: 'Prairie',
    suffix: 'of the Plains',
    property: 'Treat as a +1 armor after the bearer has taken a long rest in a grassland. If the bearer leaves the grassland, this property becomes temporarily inert'
  }, {
    prefix: "Preacher's",
    suffix: 'of the Preacher',
    property: 'The bearer may extend the range of their Channel Divinity by 5 feet'
  }, {
    prefix: 'Precipice',
    suffix: 'of the Crags',
    property: 'Treat as a +1 armor after the bearer has taken a long rest in the mountains. If the bearer leaves the mountain, this property becomes temporarily inert'
  }, {
    prefix: 'Primeval',
    suffix: 'of the Jungle',
    property: 'Treat as a +1 armor after the bearer has taken a long rest in a jungle. If the bearer leaves the jungle, this property becomes temporarily inert'
  }, {
    prefix: 'Reflexive',
    suffix: 'of Reflexes',
    property: 'If the bearer is first in initiative order, treat this as +1 armor for 1 minute'
  }, {
    prefix: 'Renaissance',
    suffix: 'of the Renaissance',
    property: 'Once per day, the bearer may gain +1 to any skill check'
  }, {
    prefix: 'Resonant',
    suffix: 'of Resonance',
    property: 'The bearer can spend an action and 1 ki point to treat this as +1 armor for 1 minute'
  }, {
    prefix: 'Righteous',
    suffix: 'of Righteousness',
    property: 'Treat this as +1 armor during the day when attuned to a good aligned character'
  }, {
    prefix: 'Regal',
    suffix: 'of Royalty',
    property: 'This armor is richly decorated and fashionable. Although it retains a hint of the ruggedness of a military garment, it could function as well in a ballroom as the battlefield. To the outside observer, you appear to be keeping an Aristocratic lifestyle expense'
  }, {
    prefix: 'Runic',
    suffix: 'of Runes',
    property: 'Whenever bearer casts a spell, treat this as +1 armor until the beginning of their next turn'
  }, {
    prefix: 'Sacred',
    suffix: 'of the Sacred',
    property: 'The bearer may increase their Lay on Hands hit point pool by 5'
  }, {
    prefix: 'Sagacious',
    suffix: 'of Acumen',
    property: 'The bearer gains +1 to Wisdom (Insight) checks'
  }, {
    prefix: "Sage's",
    suffix: 'of the Sage',
    property: 'The bearer gains a +1 bonus to Intelligence (History) checks'
  }, {
    prefix: "Sailor's",
    suffix: 'of the Sea',
    property: 'Treat as a +1 armor after the bearer has taken a long rest on the high seas. If the bearer leaves the ocean, this property becomes temporarily inert'
  }, {
    prefix: "Scribe's",
    suffix: 'of the Scribe',
    property: "This armor unfolds to reveal animated appendages that are equipped with writing implements, magnifying glasses, and book stands. The armor aids the bearer in transcription tasks: it knows 3 languages of the DM's choice and halves the amount of time it takes the bearer to copy any text, including spells into spellbooks"
  }, {
    prefix: 'Shading',
    suffix: 'of Shade',
    property: 'The bearer suffers no harm in temperatures as high as 120 degrees Fahrenheit'
  }, {
    prefix: 'Shadow',
    suffix: 'of Shadows',
    property: 'Treat as a +1 armor when in dim light'
  }, {
    prefix: "Shepherd's",
    suffix: 'of the Shepherd',
    property: 'The bearer gains a +1 bonus to (Wisdom) Animal Handling checks'
  }, {
    prefix: 'Shifting',
    suffix: 'of Shifting',
    property: 'The bearer may change minor aspects of the physical appearance of this item'
  }, {
    prefix: 'Silent',
    suffix: 'of the Night',
    property: 'If this armor imposed disadvantage to stealth, it no longer does. Otherwise, the bearer gains a +1 bonus to Dexterity (Stealth) checks'
  }, {
    prefix: 'Solar',
    suffix: 'of the Sun',
    property: 'The bearer may treat this as +1 armor when in direct sunlight'
  }, {
    prefix: 'Spiked',
    suffix: 'of Teeth',
    property: 'Whenever a creature begins their turn grappling or being grappled by the bearer, they take 1d4 piercing damage'
  }, {
    prefix: 'Spiritual',
    suffix: 'of the Divine',
    property: "This armor is naught but a prayer written on a scrap of vellum, decorated with religious motifs of a particular god. Once per day, the bearer may spend 1 minute to read the prayer out loud, and at the end this armor will manifest and encase the bearer. The armor disappears if you act in any way that is not in accordance to the god's teachings"
  }, {
    prefix: 'Subtle',
    suffix: 'of Subtleties',
    property: "The bearer gains proficiency in Thieves' Cant"
  }, {
    prefix: "Surgeon's",
    suffix: 'of the Surgeon',
    property: 'The bearer gains a +1 bonus to Wisdom (Medicine) checks'
  }, {
    prefix: 'Tenacious',
    suffix: 'of the Tenacious',
    property: 'When the bearer takes a long rest, they gain back one additional hit die'
  }, {
    prefix: "Tracker's",
    suffix: 'of the Tracker',
    property: 'The bearer gains a +1 to Wisdom (Survival) checks'
  }, {
    prefix: 'Trusty',
    suffix: 'of Resurgence',
    property: 'Treat this as +1 armor if the bearer has half their maximum hit points or less'
  }, {
    prefix: 'Turquoise',
    suffix: 'of Turquoise',
    property: 'Reduces thunder damage to the bearer by 2'
  }, {
    prefix: 'Twilight',
    suffix: 'of Twilight',
    property: 'Within 1 hour before or after the rising and setting of the sun, or during a solar eclipse, the armor comes alive with magic and the bearer may treat this as +1 armor'
  }, {
    prefix: "Undertaker's",
    suffix: 'of the Undertaker',
    property: 'Once deceased, the body wearing this armor cannot be animated or raised from the dead'
  }, {
    prefix: 'Unyielding',
    suffix: 'of the Unyielding',
    property: 'The bearer may treat this as +1 armor if they have taken damage since the beginning of their last turn. This effect ends at the beginning of their next turn'
  }, {
    prefix: 'Vanguard',
    suffix: 'of the Vanguard',
    property: 'The bearer may spend their reaction to gain a +1 AC bonus vs. melee weapon attacks until the beginning of their next turn'
  }, {
    prefix: 'Veiled',
    suffix: 'of the Veil',
    property: 'The wearer gains a +1 bonus to Dexterity (Stealth) checks when taking a hide action'
  }, {
    prefix: 'Victorious',
    suffix: 'of Victory',
    property: "Whenever the bearer kills a creature while wearing this amror, they gain temporary hit points equal to the creature's CR"
  }, {
    prefix: 'Vigilant',
    suffix: 'of Vigilance',
    property: 'The bearer gains +2 to their Passive Perception'
  }, {
    prefix: 'Vile',
    suffix: 'of Villains',
    property: 'Treat this as +1 armor at night when attuned to an evil aligned character'
  }, {
    prefix: 'Violent',
    suffix: 'of Violence',
    property: 'The bearer may choose to treat the heavy metal gauntlets of this armor as a Mace'
  }, {
    prefix: "War Leader's",
    suffix: 'of the War Leader',
    property: 'The bearer can use an action to amplify their voice so that it clearly carries for up to 300 feet'
  }, {
    prefix: 'Warded',
    suffix: 'of Wards',
    property: 'The wearer cannot be possessed while wearing this armor'
  }, {
    prefix: "Watcher's",
    suffix: 'of the Watcher',
    property: 'Treat as +1 armor during surprise rounds'
  }, {
    prefix: 'Waterborne',
    suffix: 'of the Sea',
    property: 'The item floats on water or other liquids. Its bearer has advantage on Strength (Athletics) checks to swim'
  }, {
    prefix: 'Winged',
    suffix: 'of Wings',
    property: 'The bearer gains +5 speed'
  }, {
    prefix: "Wizard's",
    suffix: 'of the Wizard',
    property: 'The bearer gains a +1 to Intelligence (Arcana) checks'
  }, {
    prefix: 'Zen',
    suffix: 'of Zen',
    property: 'Treat this as +1 armor for one minute after meditating with it for one minute'
  }, {
    prefix: 'Zircon',
    suffix: 'of Zircon',
    property: 'Reduces force damage to the bearer by 2'
  }, {
    prefix: 'Abyssal',
    suffix: 'of the Abyss',
    property: 'When on the plane of the Abyss, the bearer has advantage on saving throws against Abyssal Corruption. (DMG p. 62)'
  }, {
    prefix: 'Alarming',
    suffix: 'of Alarms',
    property: 'Contains 1d4 unreplenishable charges of the Alarm spell (1st level)'
  }, {
    prefix: 'Arborean',
    suffix: 'of Arborea',
    property: 'When on the plane of Arborea, the bearer has advantage on saving throws against the effects of Intense Yearning. (DMG p. 61)'
  }, {
    prefix: 'Arcadian',
    suffix: 'of Arcadia',
    property: 'When on the plane of Arcardia, the bearer is unaffected by Planar Vitality (DMG p. 67)'
  }, {
    prefix: 'Astral',
    suffix: 'of the Astral Sea',
    property: 'When travelling the Astral Sea, it takes half the number of hours to locate a Color Pool to a specific plane. You have advantage on saving throws vs. the effects of Psychic Wind (DMG p. 47-48)'
  }, {
    prefix: 'Beastial',
    suffix: 'of the Beastlands',
    property: 'When on the plane of The Beastlands, the bearer has advantage on saving throws vs. Beast Transformation (DMG p. 60)'
  }, {
    prefix: "Beastspeaker's",
    suffix: 'of Beastspeakers',
    property: 'Contains 1d4 unreplenishable charges of the Speak with Animals spell (1st level)'
  }, {
    prefix: 'Benedictine',
    suffix: 'of Benediction',
    property: 'Contains 1d4 unreplenishable charges of the Healing Word spell (1st level)'
  }, {
    prefix: 'Blasted',
    suffix: 'of Blasting',
    property: 'Contains 1d4 unreplenishable charges of the Fire Bolt spell (1st level)'
  }, {
    prefix: 'Bold',
    suffix: 'of Boldness',
    property: 'Contains 1d4 unreplenishable charges of the Heroism spell (1st level)'
  }, {
    prefix: 'Bountiful',
    suffix: 'of Bounty',
    property: 'Contains 1d4 unreplenishable charges of the Goodberry spell (1st level)'
  }, {
    prefix: 'Bytopian',
    suffix: 'of Bytopia',
    property: 'When on the plane of Bytopia, the bearer has advantage on saving throws against Pervasive Goodwill. (DMG p. 59-60)'
  }, {
    prefix: 'Carcerian',
    suffix: 'of Carceri',
    property: 'When on the plane of Carceri, the bearer knows the direction to the closest secret exit from this prison plane. (DMG p. 63)'
  }, {
    prefix: 'Cartographic',
    suffix: 'of Cartography',
    property: 'On its own volition, the item records a map of the environments that the bearer is exploring, and can magically project it for the bearer to see'
  }, {
    prefix: 'Chill',
    suffix: 'of Chills',
    property: 'Contains 1d4 unreplenishable charges of the Ray of Frost spell (1st level)'
  }, {
    prefix: 'Clockwork',
    suffix: 'of Gears',
    property: 'When on the plane of Mechanus, the bearer has advantage on saving throws against Imposing Order (DMG p. 66)'
  }, {
    prefix: 'Cloy',
    suffix: 'of Cloying',
    property: 'The bearer may cast Friends once per day'
  }, {
    prefix: 'Compassionate',
    suffix: 'of Compassion',
    property: 'Contains 1d4 unreplenishable charges of the Cure Wounds spell (1st level)'
  }, {
    prefix: 'Concordant',
    suffix: 'of Concordance',
    property: 'The bearer has advantage on saving throws vs. Psychic Dissonance when travelling the Outer Planes. (DMG p. 59)'
  }, {
    prefix: "Conjurer's",
    suffix: 'of the Conjurer',
    property: 'The bearer may cast Prestidigitation once per day'
  }, {
    prefix: 'Corrosive',
    suffix: 'of Dissolving',
    property: 'Contains 1d4 unreplenishable charges of the Acid Splash spell (1st level)'
  }, {
    prefix: 'Crawling',
    suffix: 'of Vermin',
    property: 'The crawling things of the earth, such as insects, snakes, and vermin, are attracted to this item. When placed on the ground, such creatures will scurry toward the item like moths drawn to the flame'
  }, {
    prefix: "Drunkard's",
    suffix: 'of Taverns',
    property: 'The bearer always knows the direction to the closest alcoholic beverage'
  }, {
    prefix: 'Elysian',
    suffix: 'of Elysium',
    property: 'When on the plane of Elysium, the bearer has advantage on saving throws against the effects of Overwhelming Joy (DMG p. 60)'
  }, {
    prefix: 'Etherbound',
    suffix: 'of Ethereal Shores',
    property: "The bearer can see creatures in the Border Ethereal that overlap with their plane as clearly as if they were fully in the bearer's plane. Such creatures appear as apparitions or ghosts"
  }, {
    prefix: 'Exalting',
    suffix: 'of Exaltation',
    property: 'Contains 1d4 unreplenishable charges of the Bless spell (1st level)'
  }, {
    prefix: 'Expeditious',
    suffix: 'of Expedience',
    property: 'Contains 1d4 unreplenishable charges of the Expeditious Retreat spell'
  }, {
    prefix: 'Fathoming',
    suffix: 'of Tongues',
    property: 'Contains 1d4 unreplenishable charges of the Comprehend Languages spell'
  }, {
    prefix: 'Feathered',
    suffix: 'of Feathers',
    property: 'Contains 1d4 unreplenishable charges of the Feather Fall spell (1st level)'
  }, {
    prefix: 'Feybound',
    suffix: 'of the Fey',
    property: 'The bearer knows the general direction to the closest Fey Crossing within a 60 mile radius. (DMG p. 50)'
  }, {
    prefix: 'Forgiven',
    suffix: 'of Forgiveness',
    property: 'When on the plane of Mount Celestia, the bearer of this item can receive the benefits of Blessed Beneficence regardless of their alignment'
  }, {
    prefix: "Fortune Teller's",
    suffix: 'of the Fortune Teller',
    property: 'Every time you hit by a monster, you glimpse a random image of its future or past'
  }, {
    prefix: 'Friendly',
    suffix: 'of Friendship',
    property: 'Contains 1d4 unreplenishable charges of the Animal Friendship spell (1st level)'
  }, {
    prefix: 'Gehennan',
    suffix: 'of Gehenna',
    property: 'When on the plane of Gehenna, the bearer has advantage on saving throws against Cruel Hindrance. (DMG p. 63)'
  }, {
    prefix: 'Gracious',
    suffix: 'of Grace',
    property: 'The bearer may cast Spare the Dying once per day'
  }, {
    prefix: 'Hadean',
    suffix: 'of Hades',
    property: 'When on the plane of Hades, the bearer has advantage on saving throws against Vile Transformation. (DMG p. 63)'
  }, {
    prefix: 'Healing',
    suffix: 'of Healing',
    property: 'This item contains 4 weak healing nodes. As an action, a character can use one node to heal 1d4 hit points at touch range. The item regains 1d4 charges at sunrise'
  }, {
    prefix: 'Hellish',
    suffix: 'of the Nine Hells',
    property: 'When in the Nine Hells, the bearer has advantage on saving throws against Pervasive Evil. (DMG p. 64)'
  }, {
    prefix: 'Desperate',
    suffix: 'of Last Chances',
    property: 'The bearer has advantage on perception checks when searching for items long lost in the the Swamp of Oblivion on the Plane of Earth. (DMG p. 54)'
  }, {
    prefix: 'Leaping',
    suffix: 'of Leaping',
    property: 'Contains 1d4 unreplenishable charges of the Jump spell (1st level)'
  }, {
    prefix: "Liar's",
    suffix: 'of Lies',
    property: 'Contains 1d4 unreplenishable charges of the Silent Image spell (1st level)'
  }, {
    prefix: 'Limbo',
    suffix: 'of Limbo',
    property: 'When on the plane of Limbo, the bearer has advantage to Intelligence checks to alter or move non-magical objects within the plane. (DMG p. 61-62)'
  }, {
    prefix: 'Locating',
    suffix: 'of Locating',
    property: 'Once attuned, the bearer always knows the exact location of this item'
  }, {
    prefix: 'Malediction',
    suffix: 'of Malediction',
    property: 'Contains 1d4 unreplenishable charges of the Bane spell(1st level)'
  }, {
    prefix: 'Manipulating',
    suffix: 'of Manipulation',
    property: 'The bearer may cast Mage Hand once per day'
  }, {
    prefix: "Master's",
    suffix: 'of Servants',
    property: 'Contains 1d4 unreplenishable charges of the Unseen Servant spell (1st level)'
  }, {
    prefix: 'Maverick',
    suffix: 'of the Maverick',
    property: 'The bearer has a +1 bonus to any skill check involving gambling and games of chance (Insight, Sleight of Hand, Investigation, etc)'
  }, {
    prefix: 'Messenger',
    suffix: 'of Messages',
    property: 'The bearer may cast Message once per day'
  }, {
    prefix: 'Meteoric',
    suffix: 'of Falling Stars',
    property: 'Contains 1 unreplenishable charge of Scorching Ray cast at 2nd level'
  }, {
    prefix: 'Miraculous',
    suffix: 'of Miracles',
    property: 'The bearer may cast Thaumaturgy once per day'
  }, {
    prefix: 'Mocking',
    suffix: 'of Mockery',
    property: 'The bearer may cast Vicious Mockery once per day'
  }, {
    prefix: 'Natural',
    suffix: 'of Nature',
    property: 'Contains 1d4 unreplenishable charges of the Locate Animals or Plants spell (1st level)'
  }, {
    prefix: 'Neutralizing',
    suffix: 'of Neutrality',
    property: 'Contains 1d4 unreplenishable charges of the Protection from Good and Evil spell (1st level)'
  }, {
    prefix: 'Nourishing',
    suffix: 'of Nourishment',
    property: 'The bearer rarely feels hungry, and only needs to consume one-fifth the usual amount of food'
  }, {
    prefix: 'Pandemonium',
    suffix: 'of Pandemonium',
    property: 'When on the plane of Pandemonium, the bearer has advantage on saving throws against the Mad Winds. (DMG p. 62)'
  }, {
    prefix: 'Projecting',
    suffix: 'of Projection',
    property: 'The bearer can send messages mentally to willing characters within 30 feet. This communication is one-way only'
  }, {
    prefix: 'Protective',
    suffix: 'of Protection',
    property: 'The bearer may cast Blade Ward once per day'
  }, {
    prefix: 'Revealing',
    suffix: 'of Revelation',
    property: 'Contains 1d4 unreplenishable charges of the Detect Magic spell (1st level)'
  }, {
    prefix: 'Riutal',
    suffix: 'of Rituals',
    property: 'Whenever the bearer is casting a spell as a ritual, they have advantage to maintain concentration during the ritual'
  }, {
    prefix: "Sailor's",
    suffix: 'of the Sea',
    property: 'Treat as a +1 weapon after the bearer has taken a long rest at sea. If the bearer steps on dry land, this property becomes temporarily inert'
  }, {
    prefix: 'Secret',
    suffix: 'of Secrets',
    property: 'Contains 1d4 unreplenishable charges of the Illusory Script spell (1st level)'
  }, {
    prefix: 'Shadowbound',
    suffix: 'of the Shadowfell',
    property: 'The bearer knows the general direction to the closest Shadow Crossing within a 60 mile radius. They have advantage on saving throws vs. Shadowfell Dispair (DMG p. 51-52)'
  }, {
    prefix: 'Shielding',
    suffix: 'of Shielding',
    property: 'This item contains 1d4 unreplenishable charges of the Shield spell'
  }, {
    prefix: "Smith's",
    suffix: 'of Reparations',
    property: 'The bearer may cast Mending once per day'
  }, {
    prefix: 'Sparkling',
    suffix: 'of Lights',
    property: 'The bearer may cast Dancing Lights once per day'
  }, {
    prefix: 'Striding',
    suffix: 'of Strides',
    property: 'Contains 1d4 unreplenishable charges of the Longstrider spell (1st level)'
  }, {
    prefix: 'Translucent',
    suffix: 'of Translucence',
    property: 'The bearer gains an extra level one spell slot, which recovers only after a full moon rises'
  }, {
    prefix: "Trickster's",
    suffix: 'of Trickery',
    property: 'The bearer may cast Minor Illusion once per day'
  }, {
    prefix: 'Accurate',
    suffix: 'of Truth',
    property: 'The bearer may cast True Strike once per day'
  }, {
    prefix: 'Verdant',
    suffix: 'of Druidcraft',
    property: 'The bearer may cast Druidcraft once per day'
  }, {
    prefix: 'Windborne',
    suffix: 'of the Labyrinth Wind',
    property: 'When in the Plane of Air, the bearer can navigate the Labyrinth Wind intuitively, and knows the path to the nearest Earth Mote within 60 miles'
  }, {
    prefix: 'Wrathful',
    suffix: 'of Ysgard',
    property: 'When on the plane of Ysgard, the bearer is unaffected by Immortal Wrath. (DMG p. 61)'
  }, {
    prefix: 'Thunderous',
    suffix: 'of the Rolling Thunder',
    property: 'Contains 1 unreplenishable charge of Shatter cast at 2nd level'
  }, {
    prefix: 'Chained',
    suffix: 'of Chains',
    property: 'Contains 1 unreplenishable charge of Hold Person cast at 2nd level'
  }, {
    prefix: "Spider's",
    suffix: 'of the Spider',
    property: 'Contains 1 unreplenishable charge of Web cast at 2nd level'
  }, {
    prefix: 'Heliacal',
    suffix: 'of the Sun',
    property: 'Contains 1 unreplenishable charge of Flaming Sphere cast at 2nd level'
  }, {
    prefix: 'Crippling',
    suffix: 'of Crippling',
    property: 'Contains 1 unreplenishable charge of Ray of Enfeeblement cast at 2nd level'
  }, {
    prefix: 'Lunar',
    suffix: 'of the Moon',
    property: 'Contains 1 unreplenishable charge of Moonbeam cast at 2nd level'
  }, {
    prefix: "Fatespinner's",
    suffix: 'of the Fates',
    property: 'Contains 1 unreplenishable charge of Augury cast at 2nd level'
  }, {
    prefix: 'Rooting',
    suffix: 'of Roots',
    property: 'Contains 1 unreplenishable charge of Entanglement cast at 2nd level'
  }, {
    prefix: 'Mirrored',
    suffix: 'of Mirrors',
    property: 'Contains 1 unreplenishable charge of Mirror Image cast at 2nd level'
  }, {
    prefix: 'Vulpine',
    suffix: 'of the Fox',
    property: 'Characters trying to track the bearer have a -1 penalty to their skill checks'
  }, {
    prefix: 'Submerged',
    suffix: 'of the Depths',
    property: 'Treat as a +1 armor when completely submerged in water'
  }, {
    prefix: 'Comforting',
    suffix: 'of Comfort',
    property: 'Treat as a +1 armor if the bearer has any levels of exhaustion'
  }, {
    prefix: "Brawler's",
    suffix: 'of Brawling',
    property: "Whenever a bearer makes an attack with an improvised weapon, treat as a +1 armor until the beginning of the bearer's next turn"
  }, {
    prefix: 'Eagle-eye',
    suffix: 'of the Eagle',
    property: 'The bearer can clearly see twice as far and gains advantage on Wisdom (perception) checks that use sight'
  }, {
    prefix: 'Lupine',
    suffix: 'of the Wolf',
    property: 'The bearer can detect and distinguish scents like a wolf and gains advantage on Wisdom (Perception) checks that use smell'
  }, {
    prefix: 'Chiropteran',
    suffix: 'of the Bat',
    property: 'The bearer can hear a pin drop in a crowded room and gains advantage on Wisdom (Perception) checks that use hearing'
  }, {
    prefix: 'Black',
    suffix: 'of Darkness',
    property: 'Contains 1 unreplenishable charge of Darkness cast at 2nd level.'
  }
]
