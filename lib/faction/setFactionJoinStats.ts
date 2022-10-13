import { logger } from '../logger'
import { assert, assign, sumWeights } from '../src/utils'
import { random } from '../src/random'
import { Faction } from './_common'
import { factionData } from './factionData'
import { weightRandom } from '../src/weightRandom'
import { getRolledFromTable, ThresholdTable } from '../src/rollFromTable'
import { WeightRecord } from '../types'

export function setFactionJoinStats (faction: Faction): void {
  logger.info('Determining joining stats...')

  const defaultWeightedJoiningRequirement: WeightRecord<string> = {
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

  const defaultWeightedJoiningInitiation: WeightRecord<string> = {
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
  const crazyRequests: string[] = ['a frog named Roberta', 'an egg from a rooster', "a sparrow's tooth", 'the head of a king', 'a hair off your head', 'a toenail', "your lover's dreams", 'the leaf of a forgotten tree', 'an eyelash from a badger']
  const joiningFees: ThresholdTable = [
    [95, `absolutely anything; they could demand two thousand gold, or ${random(crazyRequests)}`],
    [90, 'five hundred gold pieces, plus a tremendous task'],
    [80, "five hundred gold pieces, provided there's an empty slot"],
    [70, 'five hundred gold pieces'],
    [60, "three hundred gold pieces, provided there's an empty slot"],
    [55, "two hundred gold pieces, provided there's an empty slot"],
    [50, 'two hundred gold pieces'],
    [45, 'a hundred gold pieces'],
    [40, 'fifty gold pieces'],
    [30, 'twenty gold pieces'],
    [20, 'ten gold pieces'],
    [10, 'a single gold piece'],
    [0, 'a single copper, as a show of faith']
  ]
  const result = getRolledFromTable(joiningFees, roll)
  assert(typeof result === 'string')
  return result
}
