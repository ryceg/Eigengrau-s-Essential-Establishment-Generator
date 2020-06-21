import { randomFloat } from '../src/randomFloat'
import { keys } from '../src/utils'

interface Town {
  baseDemographics: Record<string, number>
  _demographicPercentile: Record<string, number>
}

interface SaveLoc {
  raceRoll: number
}

export function fetchRace (town: Town, saveLoc: SaveLoc) {
  console.log('Fetching race...')

  // FIXME upon migration to React, reimplement getters and setters.
  const races = Object.keys(town.baseDemographics)

  // Calculate the sum of the raw demographic values.
  const sum = races
    .map(race => town.baseDemographics[race])
    .reduce((acc, cur) => acc + cur, 0)

  // Calculate the demographic percentages.
  for (const race of races) {
    town._demographicPercentile[race] = town.baseDemographics[race] / sum * 100
  }

  const args = town._demographicPercentile
  console.log(args)
  const pool = []
  const namePool = Object.keys(args)
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
