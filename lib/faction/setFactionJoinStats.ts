import { assign } from '../src/utils'
import { dice } from '../src/dice'
import { random } from '../src/random'
import { Faction } from './_common'
import { factionData } from './factionData'

export function setFactionJoinStats (faction: Faction) {
  console.log('determining joining stats...')

  const joiningRequirement = ['some social status', 'an excellent reputation', 'a favour to be done', 'to be called on for a favour', 'referral by an existing member', 'referral by several members', 'endorsement by the current leader', 'a display of loyalty', 'a display of skill', 'a display of bravery']
  const joiningInitiation = ['a secret task', 'a mission', 'a secret ritual', 'a simple form to be filled', 'nothing particularly interesting', 'an oath to be taken']

  // TODO: Create tasks for each type of guild, plus requirement
  joiningRequirement.push(...factionData.type[faction.type].joiningRequirement)
  joiningInitiation.push(...factionData.type[faction.type].joiningInitiation)

  assign(faction, {
    joiningRequirement: random(joiningRequirement),
    joiningInitiation: random(joiningInitiation)
  })

  faction.joiningFee = getJoiningFee(dice(2, 50))
}

function getJoiningFee (roll: number) {
  if (roll > 95) return 'a single copper, as a show of faith'
  if (roll > 90) return 'a single gold piece'
  if (roll > 80) return 'ten gold pieces'
  if (roll > 70) return 'twenty gold pieces'
  if (roll > 60) return 'fifty gold pieces'
  if (roll > 55) return 'a hundred gold pieces'
  if (roll > 50) return 'two hundred gold pieces'
  if (roll > 45) return "two hundred gold pieces, provided there's an empty slot"
  if (roll > 40) return "three hundred gold pieces, provided there's an empty slot"
  if (roll > 30) return 'five hundred gold pieces'
  if (roll > 20) return "five hundred gold pieces, provided there's an empty slot"
  if (roll > 10) return 'five hundred gold pieces, plus a tremendous task'
  return `absolutely anything; they could demand two thousand gold, or ${random(['a frog named Roberta', 'an egg from a rooster', "a sparrow's tooth", 'the head of a king', 'a hair off your head', 'a toenail', "your lover's dreams", 'the leaf of a forgotten tree', 'an eyelash from a badger'])}`
}
