import { random } from '../src/random'
import { getUUID } from '../src/utils'
import { Construct, ConstructUtils } from './_common'

interface Orcs extends Construct<'orcs'> {
  type: string
  symbol: string
  value: string
  meat: string
  fear: string
  notorious: string
  knownFor: string
  attitude: string
  leader: string
  goals: string
  tactics: string
  pets: string
  slaves: string
  weapons: string
}

export const orcs: ConstructUtils<Orcs> = {
  create: base => ({
    $uuid: getUUID(),
    $type: 'orcs',
    type: random(data.type),
    symbol: random(data.symbol),
    value: random(data.value),
    meat: random(data.meat),
    fear: random(data.fear),
    notorious: random(data.notorious),
    knownFor: random(data.knownFor),
    attitude: random(data.attitude),
    leader: random(data.leader),
    goals: random(data.goals),
    tactics: random(data.tactics),
    pets: random(data.pets),
    slaves: random(data.slaves),
    weapons: random(data.weapons),
    ...base
  }),
  readout: orcs => {
    return `These orcs are ${orcs.type}, known for ${orcs.knownFor}. Their symbol is ${orcs.symbol}, and they value ${orcs.value}. Their favourite food is is ${orcs.meat}, and they fear ${orcs.fear}. Their leader is ${orcs.leader}, who wants ${orcs.goals}. They are ${orcs.attitude}, and are notorious for ${orcs.notorious}. They fight with ${orcs.weapons}, with ${orcs.tactics}. They have pet ${orcs.pets}, and keep some ${orcs.slaves} as slaves.`
  }
}

const data = {
  type: ['nomadic hunters, following game', 'raiders displaced from their native lands', 'in exile from their native lands', 'in the service of a sovereign warlord', 'a loose confederacy of tribes and families related by blood', 'degenerate survivors from a broken army', 'disorganizes; a clan of competing warriors', 'a tight-knit war band', 'bent on sowing chaos and mayhem', 'raiders after supplies and slaves', 'marching to war under the leadership of a great chief', 'on an errand for an evil wizard or other powerful being'],
  value: ['bravery', 'strength', 'wisdom', 'virility', 'honoring the gods', 'honoring their ancestors', 'battle-scars', 'survival', 'kill counts', 'scalps', 'steel', 'meat'],
  symbol: ['bats', 'blood', 'bones', 'corpses', 'crows', 'flames', 'ghosts', 'scorpions', 'skulls', 'vultures', 'clouds', 'lightning', 'moon', 'snow', 'stars', 'sun', 'arrows', 'axes', 'fists', 'spears', 'stones', 'swords', 'bears', 'boars', 'eagles', 'horses', 'lions', 'owls', 'snakes', 'wolves'],
  leader: ['a well-respected chief', 'a charismatic warlord', 'a mysterious shaman', 'a descendent of an honored hero', 'a ruthless killer', 'a brutish thug', 'an impatient young warrior', 'a wise old chief', 'a celebrated war hero', 'a prolific lover'],
  meat: ['dwarves and halflings', 'beggars and thieves', 'merchants and caravan guards', 'noblemen', 'noblewomen', 'priests and priestesses', 'slaves', 'circusfolk and minstrels', 'foreign travelers', 'peasant women', 'young children', 'elves and pixies'],
  fear: ['men armored in steel', 'human women', 'spellcasters', 'dwarves', 'elves', 'goblinoids', 'reptilian humanoids', 'blizzards', 'earthquakes', 'floods', 'thunderstorms', 'volcanoes', 'typhoons', 'the gods', 'aberrant evils', 'dragons'],
  notorious: ['never leaving survivors', 'feeding prisoners to wild beasts', 'tattooing or branding prisoners', 'scalping enemies', 'flaying enemies', 'raiding and burning villages', 'plundering merchant caravans', 'eating prisoners raw', 'claiming prisoners as slaves', 'taking prisoners as wives, concubines, or catamites'],
  knownFor: ['screaming and shouting during battle', 'convening with ghosts and spirits', 'ritual animal sacrifice under the new moon', 'ritual humanoid sacrifice deep within the earth', 'ritualistic blood-letting', 'ritualistic sexual acts under the full moon', 'eating unusually-prepared meats', 'prolific amounts of drinking', 'never cutting their hair', 'shaving their heads and bodies', 'wearing long top-knots or braids', 'bathing and perfuming their bodies'],
  attitude: ['rowdy and festive', 'joyful and eager to fight', 'relaxed and carefree', 'frightened and suspicious', 'hostile and suspicious', 'hostile and eager to fight'],
  goals: ['upheaval of the region’s politics', 'disruption of the region’s trade', 'revenge against another civilization', 'revenge against a rival orkish clan', 'spreading chaos and destruction', 'possession of a powerful artifact'],
  tactics: ['hit-and-run tactics', 'ambush tactics', 'unpredictable maneuvers', 'lots of screaming and shouting', 'kicking and stomping', 'lots of head-butting', 'lots of biting and scratching', 'eating', 'looting corpses', 're-forming ranks', 'arguing among themselves'],
  pets: ['boars', 'dire rats', 'giant lizards', 'ogres', 'wargs', 'wolves'],
  slaves: ['dwarves', 'gnomes', 'goblins', 'halflings', 'humans', 'kobolds', 'undead servitors', 'nothing; the orcs eat any captives they take', 'nothing; the orcs leave no survivors', 'nothing; the orcs believe in freedom for all beings'],
  weapons: ['spears and large hunting knives', 'spears and javelins', 'exotic, curved blades and several bolas', 'huge, curved blades', 'exotic, curved blades and blowguns', 'pikes and shortswords', 'pikes and short bows', 'battleaxes and throwing axes', 'battleaxes and longbows', 'longswords and longbows', 'jagged greatswords and shortbows', 'greataxes and javelins']
}
