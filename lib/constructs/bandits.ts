import { random } from '../src/random'
import { getUUID } from '../src/utils'
import { Construct, ConstructUtils } from './_common'

interface Bandits extends Construct<'bandits'> {
  business: string
  colours: string
  symbol: string
  leader: string
  type: string
  goals: string
  weapons: string
  lair: string
  fearedBy: string
}

export const bandits: ConstructUtils<Bandits> = {
  create: base => ({
    $uuid: getUUID(),
    $type: 'bandits',
    business: random(data.business),
    colours: random(data.colours),
    symbol: random(data.symbol),
    leader: random(data.leader),
    type: random(data.type),
    goals: random(data.goals),
    weapons: random(data.weapons),
    lair: random(data.lair),
    fearedBy: random(data.fearedBy),
    ...base
  }),
  readout: bandits => {
    return `These bandits are ${bandits.type} whose primary business is ${bandits.business}. Their leader is ${bandits.leader}, who wants ${bandits.goals}. Their symbol is ${bandits.symbol} on a ${bandits.colours} background. They are feared by ${bandits.fearedBy}, and they use ${bandits.weapons}. Their base of operations is ${bandits.lair}`
  }
}

const data = {
  business: ["poaching from the sovereign's preserve or a prominent noble’s lands", 'harboring fugitives', 'harassing government officials and nobles who pass along the road', 'robbing caravans carrying gems, precious metals, and exotic goods', 'holding up incoming or outgoing ships or wagons', 'smuggling smokeleaf; a hallucinogenic mushroom', 'smuggling sleepysalt (a downer)', 'smuggling sharpsugar (an upper)', 'smuggling rare antiquities', 'smuggling stolen goods', 'smuggling exotic beasts', 'smuggling foreign harlots', 'smuggling fugitives', 'smuggling slaves', 'serving as muscle for shady merchants and/or brothel-keepers'],
  colours: ['black', 'gold', 'forest green', 'bronze', 'tan', 'khaki', 'brown', 'beaver', 'dark grey', 'gunmetal', 'maroon', 'dark brown', 'chocolate', 'olive green'],
  symbol: ['a skull', 'an arrow', 'a dagger', 'a goblet', 'the moon', 'a star', 'a snake', 'a badger', 'a spider', 'a rat'],
  leader: ['a dangerous megalomaniac', 'a charismatic demagogue', 'a mysterious foreigner', 'a talented thief', 'a member of a prominent family', 'a ruthless killer', 'a femme fatale', 'a charming rogue', 'a dashing swashbuckler', 'a brutish thug'],
  type: ['out-of-work artisans', 'displaced peasants', 'desperate peasants', 'escaped slaves', 'combat veterans', 'foreign refugees', 'goals', 'domination of the region’s trade'],
  goals: ['domination of the region’s trade', 'sabotage of the region’s trade', 'revenge against a rival band of outlaws', 'revenge against the region’s elite', 'a rebellion against the region’s elite', 'equality and freedom for all', 'a wealthy and peaceful retirement', 'violence to slake their bloodlust'],
  weapons: ['wooden clubs', 'over-sized daggers', 'shortbows and arrows', 'longbows and arrows', 'daggers and crossbows', 'axes and knives', 'sticks and stones', 'shortswords', 'brass knuckles', 'daggers and sling shots'],
  lair: ['the residence of a prominent noble', 'the village’s market square', 'a wayside inn', 'a tavern', 'a brothel', 'an old lighthouse', 'an abandoned cabin', 'a waterfall', 'a cave', 'a dense forest'],
  fearedBy: ['ambassadors and tax collectors', 'merchants and peddlers', 'politicians and magistrates', 'guards and sheriffs', 'soldiers and warriors', 'nobles and wealthy travelers', 'knights and loyalists', 'peasants and farmers', 'priests and sages', 'women and children']
}
