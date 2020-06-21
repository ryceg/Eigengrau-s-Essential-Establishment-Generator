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

  const joiningFeeRoll = dice(2, 50)

  if (joiningFeeRoll > 95) {
    faction.joiningFee = 'a single copper, as a show of faith'
  } else if (joiningFeeRoll > 90) {
    faction.joiningFee = 'a single gold piece'
  } else if (joiningFeeRoll > 80) {
    faction.joiningFee = 'ten gold pieces'
  } else if (joiningFeeRoll > 70) {
    faction.joiningFee = 'twenty gold pieces'
  } else if (joiningFeeRoll > 60) {
    faction.joiningFee = 'fifty gold pieces'
  } else if (joiningFeeRoll > 55) {
    faction.joiningFee = 'a hundred gold pieces'
  } else if (joiningFeeRoll > 50) {
    faction.joiningFee = 'two hundred gold pieces'
  } else if (joiningFeeRoll > 45) {
    faction.joiningFee = "two hundred gold pieces, provided there's an empty slot"
  } else if (joiningFeeRoll > 40) {
    faction.joiningFee = "three hundred gold pieces, provided there's an empty slot"
  } else if (joiningFeeRoll > 30) {
    faction.joiningFee = 'five hundred gold pieces'
  } else if (joiningFeeRoll > 20) {
    faction.joiningFee = "five hundred gold pieces, provided there's an empty slot"
  } else if (joiningFeeRoll > 10) {
    faction.joiningFee = 'five hundred gold pieces, plus a tremendous task'
  } else {
    faction.joiningFee = `absolutely anything; they could demand two thousand gold, or ${random(['a frog named Roberta', 'an egg from a rooster', "a sparrow's tooth", 'the head of a king', 'a hair off your head', 'a toenail', "your lover's dreams", 'the leaf of a forgotten tree', 'an eyelash from a badger'])}`
  }
}
