import { random } from './random'
import { assign } from './utils'

interface MagicWeapon {
  type: string
  name: string
  prefixWeapon: string
  suffixWeapon: string
  prefixProperty: string
  suffixProperty: string
  description: string
}

export function createMagicWeapon (): MagicWeapon {
  const prefixWeaponRoll = random(properties.length - 1)
  const suffixWeaponRoll = random(properties.length - 1)

  const weapon = {
    type: random(types),
    prefixWeapon: properties[prefixWeaponRoll].prefix,
    suffixWeapon: properties[suffixWeaponRoll].suffix,
    prefixProperty: properties[prefixWeaponRoll].property,
    suffixProperty: properties[suffixWeaponRoll].property
  }

  assign(weapon, {
    description: `${weapon.prefixProperty} ${weapon.suffixProperty}`,
    name: `${weapon.prefixWeapon} ${weapon.type} ${weapon.suffixWeapon}`
  })

  return weapon
}

const types = ['Club', 'Dagger', 'Greatclub', 'Handaxe', 'Javelin', 'Light Hammer', 'Mace', 'Quarterstaff', 'Sickle', 'Spear', 'Crossbow, Light', 'Dart', 'Shortbow', 'Sling', 'Battleaxe', 'Flail', 'Glaive', 'Greataxe', 'Greatsword', 'Halberd', 'Lance', 'Longsword', 'Maul', 'Morningstar', 'Pike', 'Rapier', 'Scimitar', 'Shortsword', 'Trident', 'War Pick', 'Warhammer', 'Whip', 'Blowgun', 'Crossbow, Hand', 'Crossbow, Heavy', 'Longbow', 'Net']
const properties = [
  {
    prefix: "Aberrant Slayer's",
    suffix: 'of Aberration Slaying',
    property: 'This weapon gains a +1 bonus to damage rolls against aberrations.'
  }, {
    prefix: 'Adamantine',
    suffix: 'of Adamantine',
    property: 'This item is indestructible.'
  }, {
    prefix: 'Acidic',
    suffix: 'of Acid',
    property: "As an action you can cast acid splash. You gain a +5 bonus to the spell's attack roll. You cannot use this ability again until you complete a short or long rest."
  }, {
    prefix: 'Alien',
    suffix: 'of Lunacy',
    property: 'Once attuned, the bearer constantly hears the ongoing, utterly insane mutterings of an alien intelligence trapped inside this weapon. Should this weapon be destroyed, the being will be released.'
  }, {
    prefix: 'Amorphous',
    suffix: 'of Ooze Detection',
    property: 'The weapon sheds 30 feet of bright green light and another 30 feet of dim light after that whenever an ooze is within 100 feet of it.'
  }, {
    prefix: 'Ancient',
    suffix: 'of Old',
    property: 'This worn weapon inscribed with ancient runes can be used as a Spellcasting Focus'
  }, {
    prefix: 'Anomalous',
    suffix: 'of Aberration Detection',
    property: 'The weapon sheds 30 feet of bright purple light and another 30 feet of dim light after that whenever an aberration is within 100 feet of it.'
  }, {
    prefix: 'Antikytheran',
    suffix: 'of Mechanisms',
    property: 'An ancient mechanism is housed within this weapon that never configures the same way twice. Once per long rest the bearer can spend one minute to attempt a DC 20 investigation check to configure the device. If successful, the weapon becomes a +1 weapon until the end of the next long rest.'
  }, {
    prefix: 'Arcane',
    suffix: 'of Arcana',
    property: 'This weapon can project a spectral tome suspended in mid-air that the bearer can interact with like a physical book. This tome can be used as a spellbook and may contain some spells from its previous bearer.'
  }, {
    prefix: 'Arctic',
    suffix: 'of Snow',
    property: 'Icy wind and snowflakes bluster around this weapon, even in warm environments. The bearer can walk on the surface of the lightest snow, leaving no footprints.'
  }, {
    prefix: "Artist's",
    suffix: 'of the Artist',
    property: 'The bearer may use this weapon to make colored marks on any surface. The marks will fade away in 24 hours.'
  }, {
    prefix: "Assassin's",
    suffix: 'of the Assassin',
    property: 'The bearer may add 1d4 poison damage to all attacks made during surprise rounds.'
  }, {
    prefix: 'Autumn',
    suffix: 'of Falling Leaves',
    property: "The weapon contains a reservoir of natural magic that can a sustain a cascade of falling leaves for up to 30 seconds. The bearer may use an action to plant this weapon in the ground and release this magic. While planted and undepleted, creatures within 10 feet of this weapon have half cover. A long rest restores 1d6 sconds of energy to the weapon's resevoir."
  }, {
    prefix: 'Barbed',
    suffix: 'of Barbs',
    property: 'After an attack roll, the bearer may use their reaction to add 1d4 to the damage roll and take 1d4 damage.'
  }, {
    prefix: "Beast's",
    suffix: 'of Beast Senses',
    property: 'While carrying this weapon you have advantage on Wisdom (Perception) checks that rely on smell.'
  }, {
    prefix: "Beast Slayer's",
    suffix: 'of Beast Slaying',
    property: 'This weapon gains a +1 bonus to damage rolls against beasts.'
  }, {
    prefix: 'Binding',
    suffix: 'of Binding',
    property: 'When you hit a creature with this weapon, the ground beneath binds to its feet, slowing its speed by 5 feet until the end of its next turn. This has no effect on creatures that are flying or swimming.'
  }, {
    prefix: 'Blasted',
    suffix: 'of Detonation',
    property: "The bearer may use a bonus action to activate destructive magic withing this weapon. It begins to glow with white-hot intensely, and at the beginning of the bearer's next turn, the weapon casts a level 1 Shatter spell (DC 12) centered on the weapon. The weapon then loses this property."
  }, {
    prefix: 'Blessed',
    suffix: 'of Parables',
    property: 'Whenever the bearer of this item receives magical healing from a spell on the Cleric’s spell list, they gain an additional amount of hit points equal to their Wisdom (Religion) skill.'
  }, {
    prefix: 'Blind',
    suffix: 'of Eyes',
    property: 'Garrish eyes are painted on this weapon. The bearer can use an action to see/unsee through the eyes, even if their own senses are compromised.'
  }, {
    prefix: "Blind Man's",
    suffix: 'of Missing',
    property: 'When an attack roll made with this weapon results in a miss, you gain 1 temporary hit point.'
  }, {
    prefix: 'Blithe',
    suffix: 'of Mirth',
    property: 'The bearer is filled with inexplicable joy. All charisma skill and saving throw rolls gain a +1 bonus, but all wisdom skill and saving throw rolls gain a -1 penalty.'
  }, {
    prefix: 'Bloodthirsty',
    suffix: 'of Bloodthirst',
    property: 'The bearer of this weapon spend a bonus action and a hit die to turn this weapon into a +1 magic weapon for 1d4 turns.'
  }, {
    prefix: "Bogwalker's",
    suffix: 'of Undead Detection',
    property: 'The weapon sheds 30 feet of bright light and another 30 feet of dim light after that whenever an undead is within 100 feet of it.'
  }, {
    prefix: 'Bonded',
    suffix: 'of Twins',
    property: 'This item is part of a pair of identical items. The bearer of either knows the location of the other at all times.'
  }, {
    prefix: 'Booming',
    suffix: 'of Thunder',
    property: 'The bearer may choose to deal Thunder damage with this weapon and gain a +1 bonus to damage.'
  }, {
    prefix: 'Braided',
    suffix: 'of Knots',
    property: 'The bearer may use their action to cause the weapon to become a 50 ft length of hemp rope at will.'
  }, {
    prefix: 'Brutal',
    suffix: 'of Brutality',
    property: 'Critical hits made with this weapon deal 2 extra damage of the weapon’s type.'
  }, {
    prefix: 'Deep',
    suffix: 'of the Deep',
    property: 'The bearer can hold their breath for 5 minutes before the onset of asphyxiation.'
  }, {
    prefix: 'Broken',
    suffix: 'of Shards',
    property: 'This weapon is badly damaged. It is a testament to its former power that it is still serviceable. If reforged, it might regain its former power.'
  }, {
    prefix: 'Captivating',
    suffix: 'of Saving Graces',
    property: 'While the bearer is at 0 hp, they begin to hear the most beautiful music they have ever heard. The bearer has advantage on death saving throws and cannot recall details about the music if they wake.'
  }, {
    prefix: 'Capricious',
    suffix: 'of Chance',
    property: 'If the weapon is attuned to a Chaotic aligned character, they may roll a die after completing a long rest. If the result was an even number, treat this as a +1 magic weapon until they finish a long rest.'
  }, {
    prefix: 'Cardinal',
    suffix: 'of the Lodestone',
    property: 'The bearer always knows which way is north and has advantage on Wisdom (Survival) checks for land navigation.'
  }, {
    prefix: 'Caustic',
    suffix: 'of Corrosion',
    property: 'The bearer may choose to deal Acid damage with this weapon and gain a +1 bonus to damage.'
  }, {
    prefix: 'Celestial',
    suffix: 'of Celestial Detection',
    property: 'The weapon sheds 30 feet of bright light and another 30 feet of dim light after that whenever a celestial is within 100 feet of it.'
  }, {
    prefix: 'Chained',
    suffix: 'of Chains',
    property: 'The bearer can spend an action to mystically bind or unbind themselves to this weapon. While bound, the bearer can no longer be disarmed but cannot switch out or throw this weapon.'
  }, {
    prefix: 'Charged',
    suffix: 'of Lightning',
    property: 'The bearer may choose to deal Lightning damage with this weapon and gain a +1 bonus to damage.'
  }, {
    prefix: 'Chill',
    suffix: 'of Chills',
    property: "The air around the bearer of this weapon is always unnaturally cold. One's breath becomes visible, and frost continually forms on the surface of the bearer's hair, weapons, and armor. The bearer suffers no ill effect from being in extremely cold environments."
  }, {
    prefix: 'Civilized',
    suffix: 'of the Capital',
    property: 'The bearer gains +1 to intelligence saving thows.'
  }, {
    prefix: "Cobra's",
    suffix: 'of Acid Spitting',
    property: 'As an action you can cast poison spray (spell save DC 13). You cannot use this ability again until you complete a short or long rest.'
  }, {
    prefix: 'Compassionate',
    suffix: 'of Compassion',
    property: 'Wounds inflicted with this weapon cause no pain.'
  }, {
    prefix: 'Consecrated',
    suffix: 'of Consecration',
    property: 'Treat as a +1 magic weapon when attacking Undead. Any creature slain with this weapon cannot be raised as undead.'
  }, {
    prefix: 'Concentrated',
    suffix: 'of Concentration',
    property: 'As a action you gain advantage on your next ability check made before the end of your next turn. You cannot use this ability again until you complete a short or long rest.'
  }, {
    prefix: 'Corrosive',
    suffix: 'of Dissolving',
    property: 'When the bearer hits a creature with this weapon, they may deal their proficiency bonus in acid damage to a different creature within 5 feet of the target.'
  }, {
    prefix: "Courser's",
    suffix: 'of the Hostler',
    property: 'The bearer can placate and calm any mount not under the influence of a spell or possession.'
  }, {
    prefix: 'Crashing',
    suffix: 'of the Crashing Waves',
    property: 'Whenever the bearer deals damage to a hostile creature, this weapon gains a charge. As a bonus action, the bearer can use any number of charges to deal that much extra lightning damage on their next attack. If a round (6 seconds) goes by and the weapon has not struck a foe, it loses all charges.'
  }, {
    prefix: 'Crawling',
    suffix: 'of Vermin',
    property: 'The crawling things of the earth, such as insects, snakes, and vermin, are attracted to this item. When placed on the ground, such creatures will scurry toward the item like moths drawn to the flame.'
  }, {
    prefix: 'Cruel',
    suffix: 'of Cruelty',
    property: 'The bearer may re-roll damage from critical hits scored with this weapon and take the second result.'
  }, {
    prefix: 'Dancing',
    suffix: 'of Strings',
    property: 'The bearer may spend an action to permanently animate this weapon. Use the Flying Sword stat block from the Monster Manual p. 20. Also, the weapon retains any other magical properties. Once the animated weapon is reduced to 0 hp or unattuned, the weapon shatters like glass.'
  }, {
    prefix: 'Dark',
    suffix: 'of Darkness',
    property: 'The bearer may choose to deal Necrotic damage with this weapon and gain a +1 bonus to damage.'
  }, {
    prefix: 'Dead',
    suffix: 'of Rigor Mortis',
    property: 'If this weapon is entombed within a corpse for 8 hours, the bearer may treat it as a +1 magic weapon until the end of their next long rest'
  }, {
    prefix: 'Deceptive',
    suffix: 'of Deception',
    property: 'When the bearer attunes this item, choose a harmless object within sight such as a tea cup, a ball of yarn, or a hairpin. If the bearer is touching the item, they may use an action to transform the weapon in or out of this form.'
  }, {
    prefix: 'Defensive',
    suffix: 'of Defense',
    property: 'Whenever the bearer takes a dodge or disengage action, they may move an additional 5 feet that round.'
  }, {
    prefix: "Delver's",
    suffix: 'of the Delver',
    property: "While underground, the bearer of this item always knows the item's depth below the surface and the direction to the nearest path leading upward."
  }, {
    prefix: 'Desperate',
    suffix: 'of Desperation',
    property: 'The bearer may use an action to release divine magic within, equivalent to a level 1 Cure Wounds spell being cast on all creatures (friend or foe) within 5 feet of the bearer. The weapon is destroyed and loses all magical properties.'
  }, {
    prefix: 'Disguized',
    suffix: 'of Many Appearances',
    property: 'As an action you make this weapon appear to others as a similarly shaped and sized object of your choice. Anyone interacting with the weapon instantly realizes its true nature and if you make an attack with the weapon others see it for what it truly is. With another action you can make it appear to be a weapon again.'
  }, {
    prefix: "Dissassembler's",
    suffix: 'of Dissassembly',
    property: 'This weapon gains a +1 bonus to damage rolls against constructs.'
  }, {
    prefix: 'Diplomatic',
    suffix: 'of Diplomacy',
    property: 'The bearer gains one language proficiency chosen by the DM.'
  }, {
    prefix: 'Dowsing',
    suffix: 'of Dowsing',
    property: 'As an action you command the weapon to point in the direction of the closest source of water.'
  }, {
    prefix: 'Draconic',
    suffix: 'of Dragons',
    property: 'Treat as a +1 weapon when attacking Dragons.'
  }, {
    prefix: 'Draining',
    suffix: 'of Draining',
    property: 'When the bearer makes a successful attack with this weapon, they gain 10% of the damage as temporary hit points (round down, minimum of 1).'
  }, {
    prefix: "Dreamscribe's",
    suffix: 'of the Dreamscribe',
    property: 'The bearer can read books they are touching while sleeping.'
  }, {
    prefix: "Drunkard's",
    suffix: 'of Taverns',
    property: 'The bearer always knows the direction to the nearest tavern in a 60 mile radius.'
  }, {
    prefix: "Dryad's",
    suffix: 'of the Dryad',
    property: 'When the bearer is outdoors, harmless creatures such as squirrels and birds flock to them when they sing songs for a minute or longer.'
  }, {
    prefix: 'Eager',
    suffix: 'of Yearning',
    property: 'The bearer does not require an interaction to draw or sheath this weapon'
  }, {
    prefix: 'Earthen',
    suffix: 'of Rooting',
    property: 'The bearer of this weapon is firmly rooted to the ground. When standing on solid earth or stone, if an effect would move the bearer against his will the distance is reduced by 5 feet.'
  }, {
    prefix: 'Eastern',
    suffix: 'of the East',
    property: 'The bearer gains +1 to wisdom saving throws.'
  }, {
    prefix: 'Effortless',
    suffix: 'of Ease',
    property: 'This weapon takes only one minute to attune.'
  }, {
    prefix: 'Effulgent',
    suffix: 'of Light',
    property: 'The bearer can use this item to cast the Light cantrip on itself at will. While lit, it deals radiant damage instead of its usual damage type.'
  }, {
    prefix: 'Eidolic',
    suffix: 'of Apparitions',
    property: "Dark apparitions bound to this weapon haunt the edges of the bearer's peripheral vision, becoming hideously visible to devour the bodies of beings slain by this weapon. Once 666 bodies have been devoured, the apparitions will be released to prey upon our world and the sword becomes a permanent +3 weapon. So far, the weapon has eaten 1d6 x 100 + 3d20 bodies."
  }, {
    prefix: 'Elemental',
    suffix: 'of Elemental Detection',
    property: 'The weapon sheds 30 feet of bright light and another 30 feet of dim light after that whenever an elemental is within 100 feet of it.'
  }, {
    prefix: "Elementalist's",
    suffix: 'of Elemental Slaying',
    property: 'This weapon gains a +1 bonus to damage rolls against elementals.'
  }, {
    prefix: 'Enchanting',
    suffix: 'of the Enchantress',
    property: 'Treat this as a +1 weapon as long as the bearer is enchanted by a spell from the enchantment school of magic.'
  }, {
    prefix: 'Enervating',
    suffix: 'of Inner Strength',
    property: "Once per long rest, the bearer may spend one minute contemplating the patterns etched on this weapon's surface and regain 1 expended ki point."
  }, {
    prefix: 'Epistemological',
    suffix: 'of Truth',
    property: 'The bearer has advantage on investigation checks to see through illusions. In addition the bearer can gains advantage on an Insight check to check if someone is lying and disadvantage on all Deception checks.'
  }, {
    prefix: 'Equanimeous',
    suffix: 'of Balance',
    property: 'When attuned to neutral aligned characters, this weapon has a +1 attack bonus during the day and a +1 damage bonus at night.'
  }, {
    prefix: 'Etched',
    suffix: 'of Allegories',
    property: "Ancient glyphs adorn the surface of this weapon, telling a story with a moral of the player's choosing (such as 'One good turn deserves another' or 'United we stand, divided we fall'). While attuning to this weapon, the glyphs spread across the entire skin of the bearer and the moral of the story becomes a bond trait for this character."
  }, {
    prefix: 'Expanding',
    suffix: 'of Expansion',
    property: 'You may add 1d10 to a damage roll made with this weapon. You cannot use this ability again until you complete a long rest.'
  }, {
    prefix: 'Exuberant',
    suffix: 'of Expertise',
    property: 'As a bonus action you may gain advantage on your next attack roll made before the end of your next turn. You cannot use this ability again until you complete a long rest.'
  }, {
    prefix: 'Fabricated',
    suffix: 'of Construct Detection',
    property: 'The weapon sheds 30 feet of bright light and another 30 feet of dim light after that whenever a construct is within 100 feet of it.'
  }, {
    prefix: 'Faceless',
    suffix: 'of Many Identities',
    property: 'As an action you can cast disguise self (spell save DC 13). You cannot use this ability again until you complete a long rest.'
  }, {
    prefix: 'Fairweather',
    suffix: 'of Fairweather',
    property: 'Treat this as a +1 weapon if the bearer has more than half of their maximum hit points'
  }, {
    prefix: 'Fatespun',
    suffix: 'of Intertwined Fates',
    property: 'Once per short rest, when the bearer crits with this weapon they gain inspiration.'
  }, {
    prefix: 'Favored',
    suffix: 'of the Favored',
    property: 'Once per long rest, the bearer may roll a saving throw with advantage.'
  }, {
    prefix: 'Feathered',
    suffix: 'of Feathers',
    property: 'The bearer may use their reaction to reduce fall damage by 1d6 until the end of turn. They cannot use this feature again until completing a long rest.'
  }, {
    prefix: 'Feeding',
    suffix: 'of Food',
    property: 'As an action the weapon can turn a small, worthless, unattended, organic object (such as a clump of dirt) into a bland, edible substance. This substance provides enough food to feed a Small or Medium sized creature for one day. You cannot use this ability again until you complete a long rest.'
  }, {
    prefix: 'Feindish',
    suffix: 'of Fiend Detection',
    property: 'The weapon sheds 30 feet of bright red light and another 30 feet of dim light after that whenever a fiend is within 100 feet of it.'
  }, {
    prefix: "Feind-Slayer's",
    suffix: 'of Fiend Slaying',
    property: 'This weapon gains a +1 bonus to damage rolls against fiends.'
  }, {
    prefix: 'Final',
    suffix: 'of Last Hope',
    property: 'The bearer may spend an action beseaching the spirits within this weapon. Roll a DC 20 Persuasion check or make a sufficiently impassioned plea. If successful, the spirits will sacrifice themselves so that for the next minute the next attack with this weapon will be a crit. The weapon then loses this property forever.'
  }, {
    prefix: 'First',
    suffix: 'of Speed',
    property: 'The bearer gains a +1 bonus to initiative rolls. As long as the bearer is first in the initiative order, their speed increases by 5 feet.'
  }, {
    prefix: 'Flickering',
    suffix: 'of Candlelight',
    property: 'As an action you can make the weapon shed bright light in a 10-foot radius and dim light in another 10 feet. You can use another action to make the weapon stop shedding light.'
  }, {
    prefix: 'Focused',
    suffix: 'of Focus',
    property: 'As a bonus action you gain advantage on your next ability check made before the end of your next turn. You cannot use this ability again until you complete a long rest.'
  }, {
    prefix: 'Focusing',
    suffix: 'of Concentrating',
    property: 'As a action you may gain advantage on your next attack roll made before the end of your next turn. You cannot use this ability again until you complete a short rest.'
  }, {
    prefix: 'Force',
    suffix: 'of Force',
    property: 'The bearer may choose to deal Force damage with this weapon and gain a +1 bonus to damage.'
  }, {
    prefix: 'Forgotten',
    suffix: 'of the Forgotten',
    property: 'The bearer may spend an action to attempt to ignite the old magic in this weapon with a DC 13 Charisma check. If successful, treat the weapon as a +1 weapon as long as the bearer maintains concentration on this effect, maximum 10 minutes.'
  }, {
    prefix: 'Friendly',
    suffix: 'of Friendship',
    property: 'Contains 1d4 unreplenishable charges of the Animal Friendship spell (1st level).'
  }, {
    prefix: 'Frozen',
    suffix: 'of Ice',
    property: 'The bearer may choose to deal Cold damage with this weapon and gain a +1 bonus to damage.'
  }, {
    prefix: 'Furious',
    suffix: 'of Fury',
    property: 'Treat as a +1 magic weapon when the bearer is raging.'
  }, {
    prefix: 'Ghost-Tipped',
    suffix: 'of the Ranks',
    property: 'Whenever the bearer crits with this weapon, it gains the reach property (10 ft) for 1 minute. If it already had the reach property, increase its reach by 5 ft.'
  }, {
    prefix: 'Ghost-Touched',
    suffix: 'of Remembered Glory',
    property: 'This weapon can be wielded by a missing limb. If so, it becomes a +1 weapon.'
  }, {
    prefix: "Giant Slayer's",
    suffix: 'of Giant Slaying',
    property: 'This weapon gains a +1 bonus to damage rolls against giants.'
  }, {
    prefix: 'Glorious',
    suffix: 'of Glory',
    property: 'The bearer may choose to change the damage type of weapon to Radiant and its damage roll gains a +1 bonus.'
  }, {
    prefix: 'Goading',
    suffix: 'of Duels',
    property: 'Once per short rest, when the bearer crits with this weapon it casts Compelled Duel on the creature it hit, DC 12.'
  }, {
    prefix: "Graverobber's",
    suffix: 'of Undead Slaying',
    property: 'This weapon gains a +1 bonus to damage rolls against undead.'
  }, {
    prefix: 'Guardian',
    suffix: 'of Protection',
    property: 'When the bearer attunes this weapon they must choose a being in their mind. Henceforth, if the bearer is within 5 feet of the chosen being they may use their reaction to impose disadvantage on an attack roll against that creature. They cannot do this again until they have finished a short or long rest.'
  }, {
    prefix: "Halfling's",
    suffix: 'of Giant Detection',
    property: 'The weapon sheds 30 feet of bright light and another 30 feet of dim light after that whenever a giant is within 100 feet of it.'
  }, {
    prefix: 'Halucinating',
    suffix: 'of Halucinations',
    property: 'As an action you can cast minor illusion (spell save DC 13). You cannot use this ability again until you complete a short or long rest.'
  }, {
    prefix: 'Harkening',
    suffix: 'of Eavesdropping',
    property: 'As long as it is on the same plane of existence, the bearer can hear through this weapon as if they were present.'
  }, {
    prefix: 'Haunted',
    suffix: 'of Vengeful Spirits',
    property: 'Smoke rises from this weapon revealing the apparitions that haunt it. They lash out at living targets every time the bearer scores a hit, doing an additional +2 necrotic damage.'
  }, {
    prefix: "Healer's",
    suffix: 'of Health',
    property: 'As an action you can heal 1d4+1 hit points. You cannot use this ability again until you complete a long rest.'
  }, {
    prefix: 'Healing',
    suffix: 'of Healing',
    property: 'This item contains a healing node. Once per long rest the bearer can use the node and an action to heal 1d4 hit points at touch range.'
  }, {
    prefix: 'Heroic',
    suffix: 'of Heroes',
    property: 'Ancient heroes have wielded this weapon throughout the ages, and their courage still lingers. The bearer has advantage on saving throws vs. fear effects.'
  }, {
    prefix: 'Holy',
    suffix: 'of Faith',
    property: 'When the bearer of this item rolls hit dice, they can choose to re-roll them and take the second result.'
  }, {
    prefix: 'Icy',
    suffix: 'of Icicles',
    property: "As an action you can cast ray of frost. You gain a +5 bonus to the spell's attack roll. You cannot use this ability again until you complete a short or long rest."
  }, {
    prefix: 'Iconic',
    suffix: 'of Symbols',
    property: "The weapon is inscribed with holy symbols of the God of the DM's choice. A cleric or paladin that serves that god may use this weapon as a divine focus."
  }, {
    prefix: 'Illuminating',
    suffix: 'of Illumination',
    property: 'As an action you can cast light. You cannot use this ability again until you complete a short or long rest.'
  }, {
    prefix: 'Imaginary',
    suffix: 'of the Imagination',
    property: "Once attuned, this weapon exists only in the bearer's imagination until held with intent to do harm. It becomes imaginary again after a short rest."
  }, {
    prefix: 'Impact',
    suffix: 'of Impact',
    property: 'Once per long rest, the bearer may spend an action to activate an ancient mechanism within the weapon. Gears turn and parts shift as the weapon reconfigures itself into a more menacing version of the original. For 1 minute, attacks made with this weapon ignore resistances (but not immunities).'
  }, {
    prefix: 'Indifferent',
    suffix: 'of Indifference',
    property: 'The bearer no longer feels emotions. They have immunity to fear effects but disadvantage on Insight and Performance checks, and cannot Rage.'
  }, {
    prefix: 'Indomitable',
    suffix: 'of Surging Strength',
    property: 'When the bearer is grappled by multiple targets, they may choose to break the strongest grapple. If they succeed, then all grapples are broken.'
  }, {
    prefix: 'Inspired',
    suffix: 'of Inspiration',
    property: 'The bearer gains their Constitution modifier in temporary hit points whenever they gain or use inspiration.'
  }, {
    prefix: 'Jagged',
    suffix: 'of Teeth',
    property: 'Once hit by this weapon, the victim cannot regain hit points until the beginning of their next turn.'
  }, {
    prefix: "Jester's",
    suffix: 'of Madness',
    property: 'Once per short rest, when the bearer crits with this weapon it casts Crown of Madness on the creature it hit, DC 12'
  }, {
    prefix: "Jumper's",
    suffix: 'of Jumping',
    property: 'As an action you can cast jump on yourself. You cannot use this ability again until you complete a long rest.'
  }, {
    prefix: 'Leaping',
    suffix: 'of Leaping',
    property: 'Contains 1d4 unreplenishable charges of the Jump spell (1st level).'
  }, {
    prefix: "Liar's",
    suffix: 'of Lies',
    property: 'Contains 1d4 unreplenishable charges of the Silent Image spell (1st level).'
  }, {
    prefix: 'Lifting',
    suffix: 'of Lifting',
    property: 'As an action you can cast mage hand. You cannot use this ability again until you complete a short or long rest.'
  }, {
    prefix: 'Lightfooted',
    suffix: 'of Dodging',
    property: 'As a reaction you may gain a +1 bonus to AC which lasts until the start of your next turn. You cannot use this ability again until you complete a short or long rest.'
  }, {
    prefix: "Gambler's",
    suffix: 'of Luck',
    property: 'You can reroll a natural 1 rolled on a d20 for an ability check, attack roll, or saving throw. You cannot use this ability again until you complete a long rest.'
  }, {
    prefix: "Mage Killer's",
    suffix: 'of the Mage Killer',
    property: 'Ignores the AC bonuses given by spells such as Mage Armor and Shield.'
  }, {
    prefix: 'Malediction',
    suffix: 'of Malediction',
    property: 'Contains 1d4 unreplenishable charges of the Bane spell(1st level).'
  }, {
    prefix: 'Maligning',
    suffix: 'of Maligning',
    property: 'This weapon does an additional 1d4 damage on attacks of opportunity.'
  }, {
    prefix: "Marquis'",
    suffix: 'of the Maquis',
    property: "Once per short rest, when you crit with this weapon it casts Command on its target with the word 'grovel', DC 12"
  }, {
    prefix: 'Masked',
    suffix: 'of Still Winds',
    property: 'The bearer and all of their possessions are completely odorless.'
  }, {
    prefix: "Master's",
    suffix: 'of Servants',
    property: 'Contains 1d4 unreplenishable charges of the Unseen Servant spell (1st level).'
  }, {
    prefix: 'Meadowforged',
    suffix: 'of the Meadow',
    property: 'A gentle kaleidoscope of butterflies always accompanies this weapon. The bearer has advantage on persuasion checks with Fae creatures less than CR 3.'
  }, {
    prefix: 'Memorial',
    suffix: 'of Memories',
    property: 'When the bearer kills a monster with this weapon, treat this weapon as a +1 weapon whenever you fight another monster of this kind. When the weapon is unattuned, it loses its memory.'
  }, {
    prefix: 'Merciful',
    suffix: 'of Mercy',
    property: 'As an action you can cast spare the dying. You cannot use this ability again until you complete a short or long rest.'
  }, {
    prefix: 'Messaging',
    suffix: 'of Sending',
    property: 'As an action you can cast message. You cannot use this ability again until you complete a short or long rest.'
  }, {
    prefix: 'Mimicking',
    suffix: 'of Mimicry',
    property: "When the bearer places this weapon beside another melee weapon for 1 minute, this weapon changes weapon type, size, and physical qualities to become an exact replica of the other weapon. It does not gain any of the other weapon's magical properties."
  }, {
    prefix: 'Mindscour',
    suffix: 'of Countermeasures',
    property: 'This weapon disrupts all telepathic communication within 20 feet. Psychic attacks are not affected.'
  }, {
    prefix: "Mind's Eye",
    suffix: "of the Mind's Eye",
    property: 'The bearer may choose to deal Psychic damage with this weapon and gain a +1 bonus to damage'
  }, {
    prefix: "Monster Hunter's",
    suffix: 'of Monstrosity Detection',
    property: 'The weapon sheds 30 feet of bright light and another 30 feet of dim light after that whenever a monstrosity is within 100 feet of it.'
  }, {
    prefix: 'Monster-Killing',
    suffix: 'of Monster Killing',
    property: 'This weapon gains a +1 bonus to damage rolls against monstrosities.'
  }, {
    prefix: 'Mortuary',
    suffix: 'of the Mortal Coil',
    property: "The bearer's vital signs, such as a pulse and breathing, are masked by this weapon and are undetectable by non-magical inspection."
  }, {
    prefix: "Mourner's",
    suffix: 'of Last Words',
    property: 'Contains one charge of the Speak With Dead spell. It regains the charge when the bearer dies.'
  }, {
    prefix: 'Murderous',
    suffix: 'of Slaughter',
    property: 'When the bearer reduces a creature to zero hit points they may use a bonus action to move half their movement speed towards another hostile creature.'
  }, {
    prefix: 'Northern',
    suffix: 'of the North',
    property: 'The bearer gains +1 to constitution saving throws'
  }, {
    prefix: 'Nourishing',
    suffix: 'of Comfort',
    property: "Once per long rest, the bearer may lay this weapon beside a bowl of water. After a moment, the bowl of water will begin to boil and after a minute it will transform into a hot meal of special significance to the bearer (Their mother's noodle soup or father's elk stew). Eating this delicious meal is so satisfying that it counts as nourishment for an entire day and restores 1d4 hit points. To anyone other than the bearer, the bowl and its contents appears unchanged."
  }, {
    prefix: 'Nullifying',
    suffix: 'of Nullification',
    property: 'Any spell of 1st level or lower that includes the bearer as a target has a 10% chance to fail, cast by both friendly and enemy spellcasters.'
  }, {
    prefix: "Ooze Hunter's",
    suffix: 'of Ooze Slaying',
    property: 'This weapon gains a +1 bonus to damage rolls against oozes.'
  }, {
    prefix: 'Painstrike',
    suffix: 'of Pain',
    property: 'Treat this as a +1 weapon for 1 minute if the bearer takes 13 or more damage in a single round of combat.'
  }, {
    prefix: 'Paranoid',
    suffix: 'of Paranoia',
    property: 'As an action you can cast detect magic. You cannot use this ability again until you complete a long rest.'
  }, {
    prefix: 'Parrying',
    suffix: 'of Parrying',
    property: 'The bearer may use their reaction to gain a +1 AC bonus until the end of the turn.'
  }, {
    prefix: 'Patient',
    suffix: 'of Patience',
    property: 'Whenever the bearer readies an action, they have advantage on constitution saving throws to maintain concentration.'
  }, {
    prefix: 'Pernicious',
    suffix: 'of the Snake',
    property: 'The bearer may choose to deal Poison damage with this weapon and gain a +1 bonus to damage.'
  }, {
    prefix: 'Phantom',
    suffix: 'of the Phantasm',
    property: 'Damage inflicted with this weapon leaves no physical sign of injury, such as cuts and bruises, and draws no blood.'
  }, {
    prefix: 'Pious',
    suffix: 'of the Pious',
    property: 'The bearer may spend ten minutes paying honor to the spirits that govern this weapon, shaving their head in tribute. Once the ceremony is finished, it becomes a +1 weapon until the end of the next long rest. They must wait 10 days until they have long enough hair to re-enact this ritual.'
  }, {
    prefix: "Prospecter's",
    suffix: 'of Gem Detection',
    property: 'As an action you command the weapon to point in the direction of the closest gem worth 50 gp or more.'
  }, {
    prefix: "Preacher's",
    suffix: 'of the Preacher',
    property: "This weapon increases the bearer's Channel Divinity range by 5 feet."
  }, {
    prefix: "Pyromancer's",
    suffix: 'of Pyromancy',
    property: 'As an action you can control flames. You cannot use this ability again until you complete a short or long rest.'
  }, {
    prefix: 'Quantum',
    suffix: 'of Uncertainty',
    property: 'Every time the bearer takes a long rest, this weapon changes in appearance and function. It retains this property but any other properties are lost. However, it gains a new random ability from this chart.'
  }, {
    prefix: 'Quicksilver',
    suffix: 'of Quicksilver',
    property: 'The bearer may use a bonus action to change the form of the weapon to any other simple or martial melee weapon. It always counts as a silvered weapon no matter what form it takes.'
  }, {
    prefix: 'Rainbow',
    suffix: 'of Rainbows',
    property: 'The bearer may change the damage type of a spell they cast once per long rest.'
  }, {
    prefix: "Reader's",
    suffix: 'of Literacy',
    property: 'As an action you can cast comprehend languages. You cannot use this ability again until you complete a long rest.'
  }, {
    prefix: 'Refined',
    suffix: 'of Quality',
    property: 'This weapon is so finely constructed it never needs maintenance, cannot rust or tarnish, and gains a +1 to damage rolls.'
  }, {
    prefix: 'Reliable',
    suffix: 'of Reliance',
    property: 'When attacking with this weapon, crit fails (rolling 1) on attack rolls do not automatically miss the target.'
  }, {
    prefix: 'Renaissance',
    suffix: 'of the Renaissance',
    property: 'Once per long rest, the bearer may gain +1 to any skill check.'
  }, {
    prefix: 'Repairing',
    suffix: 'of Repairs',
    property: 'As an action you can cast mending. You cannot use this ability again until you complete a short or long rest.'
  }, {
    prefix: 'Resisting',
    suffix: 'of Resistances',
    property: 'As an action you can gain resistance to all damage types until the end of your next turn. You cannot use this ability again until you complete a long rest.'
  }, {
    prefix: 'Resonant',
    suffix: 'of Resonance',
    property: 'The bearer can spend an action and 1 ki point to treat this as a +1 weapon for 1 minute.'
  }, {
    prefix: 'Restrained',
    suffix: 'of Subdual',
    property: 'This weapon only deals non-lethal damage to living targets'
  }, {
    prefix: 'Righteous',
    suffix: 'of Righteousness',
    property: 'Treat this as a +1 weapon during the day when attuned to a good aligned character.'
  }, {
    prefix: 'Rosen',
    suffix: 'of Roses',
    property: 'A ruby worth 30gp is the center stone in a rose-shaped setting on the weapon. If the bearer removes the ruby, the weapon grows a new one at the end of the month. The weapon always smells of roses while the ruby is in its setting.'
  }, {
    prefix: 'Runic',
    suffix: 'of Runes',
    property: 'Whenever bearer casts a spell, treat this weapon as a +1 weapon until the beginning of their next turn.'
  }, {
    prefix: 'Saving',
    suffix: 'of Saves',
    property: 'You gain advantage on a saving throw. You cannot use this ability again until you complete a long rest.'
  }, {
    prefix: 'Scarlet',
    suffix: 'of Bleeding',
    property: "This weapon perpetually drips the blood of a monstrous race, chosen by the DM. The bearer can speak that race's language and has advantage on intimidation checks against monsters of that race when the weapon is revealed."
  }, {
    prefix: 'Seige',
    suffix: 'of Sieges',
    property: 'This weapon does maximum damage against man-made, inanimate objects.'
  }, {
    prefix: 'Serrated',
    suffix: 'of Serration',
    property: 'You may add 1d4 to a damage roll made with this weapon. You cannot use this ability again until you complete a short or long rest.'
  }, {
    prefix: 'Shading',
    suffix: 'of Shade',
    property: 'The bearer suffers no harm or discomfort in temperatures as high as 120 degrees Fahrenheit.'
  }, {
    prefix: 'Shadow',
    suffix: 'of Shadows',
    property: 'Treat as a +1 magic weapon when in dim light.'
  }, {
    prefix: 'Shamanic',
    suffix: 'of Rituals',
    property: 'Whenever the bearer is casting a spell as a ritual, they have advantage to maintain concentration during the ritual.'
  }, {
    prefix: 'Shaming',
    suffix: 'of Disgrace',
    property: 'Any humanoid creature hit with this weapon loses all of the hair on their head and face.'
  }, {
    prefix: "Shieldmaden's",
    suffix: 'of the Targe',
    property: 'As a reaction you may gain a +1d4 bonus to AC that lasts until the start of your next turn. You cannot use this ability again until you complete a long rest.'
  }, {
    prefix: 'Shielding',
    suffix: 'of Shielding',
    property: 'This item contains 1d4 unreplenishable charges of the Shield spell.'
  }, {
    prefix: 'Singing',
    suffix: 'of Singes',
    property: "As an action you can cast fire bolt. You gain a +5 bonus to the spell's attack roll. You cannot use this ability again until you complete a short or long rest."
  }, {
    prefix: 'Skyward',
    suffix: 'of Unusual Gravity',
    property: 'This weapon falls up instead of down. Its weight does not contribute towards encumberance.'
  }, {
    prefix: "Slayer's",
    suffix: 'of Slaying',
    property: 'Treat as a +1 weapon when attacking Demons and Devils.'
  }, {
    prefix: 'Smoldering',
    suffix: 'of Flame',
    property: 'The bearer may choose to deal Fire damage with this weapon and gain a +1 bonus to damage.'
  }, {
    prefix: "Smuggler's",
    suffix: 'of Smuggling',
    property: 'This weapon contains a small, secret compartment. A character must succeed on a DC 20 Wisdom (Perception) check to reveal the compartment when searching the bearer.'
  }, {
    prefix: "Sojourner's",
    suffix: 'of the Sojourner',
    property: 'A poem, story, or map that describes a long-forgotten treasure that will make this weapon more powerful is etched on the surface of the weapon.'
  }, {
    prefix: 'Solemn',
    suffix: 'of Solemnity',
    property: 'The bearer may spend an action to stabilize a dying creature within 5 feet. They cannot do so again until they have completed a long rest.'
  }, {
    prefix: 'Soulbound',
    suffix: 'of Imprisonment',
    property: "A powerful malevolent being is bound within this weapon and it will be released upon the weapon's destruction."
  }, {
    prefix: 'Southern',
    suffix: 'of the South',
    property: 'The bearer gains +1 to dexterity saving throws.'
  }, {
    prefix: 'Spring',
    suffix: 'of Spring Rain',
    property: "The weapon contains a pool of healing energy that can restore up to 30 hp. The bearer may use an action to plant this weapon in the ground and release this energy. While planted and undepleted, creatures that end their turn within 10 feet of the weapon are showered in warm rain that restores 1 hp per round. A long rest restores 1d6 hp of energy to the weapon's pool."
  }, {
    prefix: 'Staunch',
    suffix: 'of Security',
    property: "Anyone except the bearer must attempt a DC 10+x Charisma check to pick up this weapon, where x is the bearer's level. Any attack made with this weapon against the bearer has disadvantage."
  }, {
    prefix: 'Stepping',
    suffix: 'of Misty Step',
    property: 'As an action you teleport 10 feet to a space you can see. You cannot use this ability again until you complete a long rest.'
  }, {
    prefix: 'Strange',
    suffix: 'of the Far Realm',
    property: 'Treat this as a +1 weapon when attacking Aboleths and other creatures from the Far Realm'
  }, {
    prefix: 'Strapping',
    suffix: 'of the Undaunted',
    property: 'Whenever the bearer breaks a grapple, they may choose to push the grappler up to 10 feet away from them as a bonus action.'
  }, {
    prefix: 'Striding',
    suffix: 'of Strides',
    property: 'Contains 1d4 unreplenishable charges of the Longstrider spell (1st level).'
  }, {
    prefix: 'Summer',
    suffix: 'of the Scorching Sun',
    property: "The weapon contains a reservoir of scorching light that can deal up to 30 hp of radiant damage. The bearer may use an action to plant this weapon in the ground and release this energy. While planted and undepleted, creatures that end their turn within 10 feet of the weapon are brightly illuminated and seared for 1 radiant damage per round. A long rest restores 1d6 hp of energy to the weapon's resevoir."
  }, {
    prefix: "Surgeon's",
    suffix: 'of the Surgeon',
    property: 'The bearer may use a bonus action to gain advantage to Wisdom (Medicine) checks for the rest of the turn.'
  }, {
    prefix: 'Swift',
    suffix: 'of Reflexes',
    property: 'If the bearer is first in the initiative order, they may treat this as a +1 weapon.'
  }, {
    prefix: 'Tenacious',
    suffix: 'of the Tenacious',
    property: 'When the bearer takes a long rest, they gain back one additional hit die.'
  }, {
    prefix: 'Tithing',
    suffix: 'of Tithes',
    property: "The bearer may lay 10 gold coins along the surface of the weapon and pray to a God of their choice for 10 minutes. At the end of this ritual, the weapon becomes a +1 weapon until the next long rest and the 10 gold coins are permanently gone. This boon will be lost if the bearer acts in a way that is contradictory to that deity's teachings."
  }, {
    prefix: "Trailblazer's",
    suffix: 'of the Lost',
    property: 'As an action you can command the weapon to point in the direction of the closest settlement of humanoids with a population over 100.'
  }, {
    prefix: 'Transient',
    suffix: 'of the Breaking Seal',
    property: 'Over the course of a long rest, the bearer may transfer the other magic properties of this weapon to a melee weapon of their choosing. This weapon then loses those properties.'
  }, {
    prefix: 'Translucent',
    suffix: 'of Translucence',
    property: 'The bearer gains an extra level one spell slot, which recovers only after a full moon rises.'
  }, {
    prefix: 'Trusty',
    suffix: 'of Resurgence',
    property: 'Treat this as a +1 weapon if the bearer has half their maximum hit points or less.'
  }, {
    prefix: 'Tsunami',
    suffix: 'of Crashing Waves',
    property: 'Once per short rest, when the bearer crits with this weapon, all creatures other than the bearer within 5 feet of the target (including the target) must roll a DC 12 constitution saving throw or be knocked prone by a wave of concussive force.'
  }, {
    prefix: "Twilight's",
    suffix: 'of the Setting Sun',
    property: "Once per short rest, when you crit with this weapon it casts Hex on the target. Roll a d6 to determine which of the target's attributes is weakened. The bearer cannot transfer the curse to another creature."
  }, {
    prefix: 'Unity',
    suffix: 'of Unity',
    property: 'Whenever the bearer of this weapon takes a help action in combat, the aided ally may treat their weapon as a +1 magic weapon until the end of their next turn.'
  }, {
    prefix: 'Victorious',
    suffix: 'of Victory',
    property: "Whenever the bearer kills a creature with this weapon, they gain temporary hit points equal to the creature's CR (minimum of 1)."
  }, {
    prefix: 'Vigilant',
    suffix: 'of Vigilance',
    property: 'The bearer gains +1 to their Passive Perception.'
  }, {
    prefix: 'Vile',
    suffix: 'of Villains',
    property: 'Treat this as a +1 weapon at night when attuned to an evil aligned character.'
  }, {
    prefix: 'Violent',
    suffix: 'of Violence',
    property: 'Every time you crit with this weapon, it gains 1 charge. As a bonus action, use a charge to make this a +1 weapon for 1 minute. All charges are lost at the end of a long rest.'
  }, {
    prefix: 'Visionary',
    suffix: 'of the Visionary',
    property: "The weapon does an additional 1 elemental damage based on the color of the bearer's eyes: (amber: lightning, black: necrotic, blue: cold, brown: acid, green: force, gray: thunder, hazel: poison, purple: psychic, red: fire, white: radiant)"
  }, {
    prefix: 'Vital',
    suffix: 'of Vitality',
    property: "The bearer's maximum hit points increases by their constitution modifier while attuned to this item. These hit points are lost when the bearer unattunes the item."
  }, {
    prefix: 'Voidstone',
    suffix: 'of the Void',
    property: "This weapon cannot be detected by the 'Detect Magic' spell unless the caster touches the weapon."
  }, {
    prefix: 'Voltaic',
    suffix: 'of Conduits',
    property: 'Whenever the bearer deals damage to a creature, this weapon gains a charge. As a bonus action, the bearer can use any number of charges to deal that much extra lightning damage on their next attack. If a round (6 seconds) goes by and the weapon has not struck a foe, it loses all charges.'
  }, {
    prefix: "War Leader's",
    suffix: 'of the War Leader',
    property: 'The bearer can use an action to amplify their voice three times louder than normal.'
  }, {
    prefix: 'Warded',
    suffix: 'of Warding',
    property: 'Once per long rest the bearer may draw a 20 foot line in the ground with this weapon that lasts for 1 minute. The Undead must succeed on a DC 12 wisdom saving throw to move across this line. If they fail, they cannot move again until their next turn.'
  }, {
    prefix: 'Waterborne',
    suffix: 'of the Sea',
    property: 'of Exuberance'
  }, {
    prefix: 'Weave-touched',
    suffix: 'of the Weave',
    property: "Whenever the bearer casts a spell, this weapon gains charges equal to the spell's level. The bearer can use a bonus action to remove 13 charges and make this a +1 weapon until the start of the next round. All charges are lost during a long rest."
  }, {
    prefix: 'Western',
    suffix: 'of the West',
    property: 'The bearer gains +1 to charisma saving throws.'
  }, {
    prefix: 'Windy',
    suffix: 'of the Winds',
    property: 'As an action you can cast gust (spell save DC 13). You cannot use this ability again until you complete a short or long rest.'
  }, {
    prefix: 'Wild',
    suffix: 'of the Wilds',
    property: 'The bearer gains +1 to strength saving throws.'
  }, {
    prefix: 'Winged',
    suffix: 'of Wings',
    property: 'Once per long rest, the bearer may use an action to transform this weapon into a magical raven that can deliver a message to anyone in a 50 mile radius, provided the bearer knows their name and face. When the raven returns, it reverts into its weapon form. If the bird should die en route, it reverts into weapon form and unattunes from the bearer.'
  }, {
    prefix: 'Winter',
    suffix: 'of Winter Ice',
    property: "The weapon contains a reservoir of ice magic that can a freeze the ground for up to 30 seconds. The bearer may use an action to plant this weapon in the ground and release the ice magic within. While planted and undepleted, the ground in a 10 foot radius of this weapon becomes difficult terrain. A long rest restores 1d6 seconds of energy to the weapon's resevoir."
  }, {
    prefix: "Woodsman's",
    suffix: 'of Felling',
    property: 'This weapon does maximum damage against plant creatures.'
  }, {
    prefix: "Wyrmling Hunter's",
    suffix: 'of Wyrmling Slaying',
    property: 'This weapon gains a +1 bonus to damage rolls against dragons.'
  }, {
    prefix: 'Wyrm-like',
    suffix: 'of Wyrm Detection',
    property: 'The weapon sheds 30 feet of bright light and another 30 feet of dim light after that whenever a dragon is within 100 feet of it.'
  }, {
    prefix: 'Zen',
    suffix: 'of Zen',
    property: 'Treat this as a +1 weapon for 1 minute after meditating with it for 1 minute.'
  }
]
