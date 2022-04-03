import { Town } from '../town/_common'

export function findBuilding (town: Town, key: string) {
  console.log('Finding a building;', key)
  return town.buildings.find(building => building.key === key)
}
