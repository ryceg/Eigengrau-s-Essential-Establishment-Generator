import { Building, BuildingRolls } from '../buildings/_common'

export interface Alchemist extends Building {
  buildingType: string
  initPassage: string
  priceModifier: number
  roll: BuildingRolls & {
    activity: number
    expertise: number
    reputation: number
  }
}
