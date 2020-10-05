import { randomFloat } from '../src/randomFloat'
import { keys } from '../src/utils'
import { Town } from '../town/_common'

interface SaveLoc {
  raceRoll?: number
}

export function fetchRace (town: Town, saveLoc: SaveLoc = {}) {
  console.log('Fetching race...')
  const races = keys(town.baseDemographics)

  // Calculate the sum of the raw demographic values.
  const sum = races
    .map(race => town._baseDemographics[race])
    .reduce((acc, cur) => acc + cur, 0)

  // Calculate the demographic percentages.
  for (const race of races) {
    town._demographicPercentile[race] = town._baseDemographics[race] / sum * 100
  }

  const args = town._demographicPercentile
  console.log(args)
  const pool = []
  const namePool = keys(args)
  let totalWeight = 0

  for (const arg of keys(args)) {
    pool.push(args[arg])
    totalWeight += args[arg]
  }

  saveLoc.raceRoll = saveLoc.raceRoll || Math.floor(randomFloat(1) * totalWeight)
  let random = saveLoc.raceRoll

  let index = 0
  for (; index < pool.length; index++) {
    random -= pool[index]
    if (random < 0) break
  }

  return namePool[index]
}
