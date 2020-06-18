import { random } from '../src/random'
import { getUUID } from '../src/utils'
import { Construct, ConstructUtils } from './_common'

interface Goblins extends Construct<'goblins'> {
  business: string;
  symbol: string;
  colour: string;
  lairLocation: string;
  lairType: string;
  target: string;
  currentTarget: string;
  leaderType: string;
  goals: string;
  tactics: string;
  accompaniedBy: string;
  pets: string;
}

export const goblins: ConstructUtils<Goblins> = {
  create: base => ({
    $uuid: getUUID(),
    $type: 'goblins',
    business: random(data.business),
    symbol: random(data.symbol),
    colour: random(data.colour),
    lairLocation: random(data.lairLocation),
    lairType: random(data.lairType),
    target: random(data.target),
    currentTarget: random(data.currentTarget),
    leaderType: random(data.leader),
    goals: random(data.goals),
    tactics: random(data.tactics),
    accompaniedBy: random(data.accompaniedBy),
    pets: random(data.pets),
    ...base
  }),
  readout: goblins => {
    return `These goblins primarily deal with ${goblins.business}. Their symbol is ${goblins.symbol}, and their colours are primarily ${goblins.colour}. Their lair is ${goblins.lairType}, located ${goblins.lairLocation}. Their leader is ${goblins.leaderType}, who wants ${goblins.goals}. They like to target ${goblins.target}, and are currently planning a raid on ${goblins.currentTarget}. They fight with ${goblins.tactics}, and occasionally enlist help from ${goblins.accompaniedBy}. They have some ${goblins.pets} as pets.`
  }
}

const data = {
  business: ['raiding villages and farms', 'burglarizing storehouses and shops', 'harassing anyone who passes through their territory', 'robbing caravans carrying gems, precious metals, and exotic goods', 'holding up traders’ ships or wagons', 'smuggling smokeleaf; a hallucinogenic mushroom', 'smuggling sleepysalt (a downer)', 'smuggling sharpsugar (an upper)', 'smuggling exotic beasts', 'smuggling foreign harlots', 'smuggling fugitives', 'smuggling slaves', 'serving as muscle for evildoers', 'mining and crafting', 'pranks and hijinks'],
  symbol: ['a skull', 'an arrow', 'a dagger', 'the moon', 'a star', 'a snake', 'a spider', 'a rat', 'a wolf', 'a bat'],
  colour: ['black', 'dark brown', 'crimson', 'grey', 'gold', 'khaki', 'dark green', 'white', 'dark green and gold', 'black and gold', 'dark brown and grey', 'grey and white', 'black and grey', 'black and white', 'black and crimson', 'dark brown and crimson', 'crimson and khaki', 'dark brown and khaki', 'khaki and dark green', 'dark green and crimson'],
  lairLocation: ['in a dark and haunted forest', 'in an enchanted forest', 'along a mountain pass', 'high in the mountains', 'beneath a bustling city', 'near a quiet farm village'],
  lairType: ['a series of natural caverns', 'an abandoned mine', 'a mine in which the goblins are actively digging', 'an underground fortress', 'a semi-organized military encampment', 'a crude encampment'],
  target: ['fishermen and sailors', 'beggars and drunks', 'merchants and moneychangers', 'young noblemen', 'young noblewomen', 'old noblewomen', 'gamblers and thieves', 'priests and monks', 'priestesses', 'constables and sheriffs', 'castle or town guards', 'cooks and scullery maids', 'barkeeps and barmaids', 'harlots and madames', 'circus performers', 'foreign travelers and peasant girls', 'young children', 'miners and prospectors', 'elves and rangers', 'dwarves and gnomes'],
  currentTarget: ['the residence of the leader or a senior gangmember', "an artisan's shop or guildhall", "a merchant's office", 'a tavern or inn', 'a brothel', 'a warehouse or shipyard', 'a temple complex or shrine', 'the town hall', 'a shantytown', 'the residence of a wealthy individual or prominent citizen'],
  leader: ['an egotistical goblin warrior', 'a charismatic goblin rogue', 'a mysterious goblin shaman', 'a talented goblin thief', 'a well-known goblin war hero', 'a ruthless goblin hexer', 'a cunning gobliness', 'a brutal hobgoblin warpriest', 'a brilliant hobgoblin warlord', 'a calculating bugbear assassin'],
  goals: ['disruption of the region’s politics', 'disruption of the region’s trade', 'revenge against a specific organization', 'revenge against a rival goblin gang', 'spreading chaos and destruction', 'possession of a powerful artifact'],
  tactics: ['swarm tactics', 'hit-and-run tactics', 'ambush tactics', 'choreographed maneuvers', 'unpredictable maneuvers', 'lots of smiles and jokes', 'lots of fancy footwork', 'lots of screaming and shouting', 'kicking and stomping', 'lots of head-butting', 'lots of biting and scratching', 'laying traps'],
  accompaniedBy: ['hobgoblin mercenaries', 'bugbear thugs', 'ogre savages', 'orc berserkers', 'trolls', 'other goblin gangs'],
  pets: ['wolves', 'wargs', 'giant spiders', 'boars', 'giant bats', 'dire rats']
}
