import { assign, sumWeights } from '../src/utils'
import { dice } from '../src/dice'
import { random } from '../src/random'
import { Faction } from './_common'
import { factionData } from './factionData'
import { weightRandom } from '../src/weightRandom'

export function setFactionJoinStats (faction: Faction): void {
  console.log('determining joining stats...')

  const defaultWeightedJoiningRequirement = {
    'a display of bravery': 1,
    'a display of loyalty': 1,
    'a display of skill': 1,
    'a favour to be done': 1,
    'an excellent reputation': 1,
    'endorsement by the current leader': 1,
    'referral by an existing member': 1,
    'referral by several members': 1,
    'some social status': 1,
    'to be called on for a favour': 1
  }

  const joiningInitiation = ['a secret task', 'a mission', 'a secret ritual', 'a simple form to be filled', 'nothing particularly interesting', 'an oath to be taken']

  // TODO: Create tasks for each type of guild, plus requirement
  const weightedJoiningRequirement = sumWeights(defaultWeightedJoiningRequirement, factionData.type[faction.type].joiningRequirement)

  joiningInitiation.push(...factionData.type[faction.type].joiningInitiation)

  assign(faction, {
    joiningRequirement: weightRandom(weightedJoiningRequirement),
    joiningInitiation: random(joiningInitiation)
  })

  faction.joiningFee = getJoiningFee(dice(2, 50))
}

function getJoiningFee (roll: number): string {
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
