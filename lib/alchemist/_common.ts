import { Building, BuildingRolls } from '../buildings/_common'

export interface Alchemist extends Building {
  priceModifier: number
  roll: BuildingRolls & {
    activity: number
    expertise: number
    reputation: number
  }
}
