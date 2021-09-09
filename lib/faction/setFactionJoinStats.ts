import { assign } from '../src/utils'
import { random } from '../src/random'
import { Faction } from './_common'
import { factionData } from './factionData'
import { sumWeights, weightRandom } from '../src/weightRandom'

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

  const defaultWeightedJoiningInitiation = {
    'a mission': 1,
    'a secret ritual': 1,
    'a secret task': 1,
    'a simple form to be filled': 1,
    'an oath to be taken': 1,
    'nothing particularly interesting': 1
  }

  // TODO: Create tasks for each type of guild, plus requirement
  const weightedJoiningRequirement = sumWeights(defaultWeightedJoiningRequirement, factionData.types[faction.type].joiningRequirement)

  const weightedJoiningInitiation = sumWeights(defaultWeightedJoiningInitiation, factionData.types[faction.type].joiningInitiation)

  if (!faction.joiningRequirement) {
    assign(faction, {
      joiningRequirement: weightRandom(weightedJoiningRequirement),
      joiningInitiation: weightRandom(weightedJoiningInitiation)
    })
  }
  faction.joiningFee = getJoiningFee(faction.roll.joiningFee)
}

function getJoiningFee (roll: number): string {
  if (roll > 95) return `absolutely anything; they could demand two thousand gold, or ${random(['a frog named Roberta', 'an egg from a rooster', "a sparrow's tooth", 'the head of a king', 'a hair off your head', 'a toenail', "your lover's dreams", 'the leaf of a forgotten tree', 'an eyelash from a badger'])}`
  if (roll > 90) return 'five hundred gold pieces, plus a tremendous task'
  if (roll > 80) return "five hundred gold pieces, provided there's an empty slot"
  if (roll > 70) return 'five hundred gold pieces'
  if (roll > 60) return "three hundred gold pieces, provided there's an empty slot"
  if (roll > 55) return "two hundred gold pieces, provided there's an empty slot"
  if (roll > 50) return 'two hundred gold pieces'
  if (roll > 45) return 'a hundred gold pieces'
  if (roll > 40) return 'fifty gold pieces'
  if (roll > 30) return 'twenty gold pieces'
  if (roll > 20) return 'ten gold pieces'
  if (roll > 10) return 'a single gold piece'
  return 'a single copper, as a show of faith'
}
