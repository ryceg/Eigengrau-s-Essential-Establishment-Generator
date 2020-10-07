import { Town } from '../town/_common'

export function findBuilding (town: Town, key: string) {
  console.log('Finding a building.')
  return town.buildings.find(building => building.key === key)
}

export function findBuildingIndex (town: Town, key: string) {
  console.log('Finding index of a building.')
  return town.buildings.findIndex(building => building.key === key)
}
