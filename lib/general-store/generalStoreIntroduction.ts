import { Town } from '../town/_common'
import { createTippyFull } from '../src/tippy'
import { GeneralStore } from './_common'

export function getGeneralStoreIntroduction (town: Town, building: GeneralStore) {
  const result: string[] = []

  if (typeof building.structure === 'undefined') {
    throw new Error('generalStoreIntroduction: $building.structure is undefined')
  }

  const road = town.roads[building.road]

  result.push(`You make your way down ${createTippyFull(road.description, road.name)}, and enter ${building.structure.descriptor} and see that inside, the ${building.size} building is ${building.cleanliness}.`)

  result.push(getGeneralStoreCrud(building))

  result.push(`You notice ${building.note}.`)

  result.push(`The store's shopkeep is currently ${building.idle}.`)

  return result.join(' ')
}

function getGeneralStoreCrud (building: GeneralStore) {
  if (building.roll.cleanliness <= 8) {
    return `The store has a lot of ${building.crud} laying about.`
  }

  if (building.roll.cleanliness <= 16) {
    return `The front counter is cluttered with ${building.crud}.`
  }

  if (building.roll.cleanliness <= 24) {
    return `The store has a lot of ${building.crud} laying about.`
  }

  if (building.roll.cleanliness <= 32) {
    return `Several bins seemed to be cluttered with ${building.crud}.`
  }

  if (building.roll.cleanliness <= 40) {
    return `In one corner of the store there is a large pile of ${building.crud}.`
  }

  return ''
}
