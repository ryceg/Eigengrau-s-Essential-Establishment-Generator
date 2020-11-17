import { Building, BuildingRolls } from '../buildings/_common'

export interface Tavern extends Building {
  draw: string
  roll: BuildingRolls & {
    bedCleanliness: number
  }
  priceModifier: number
  lodging: number
  stageDescriptor: string
  colour1: string
  colour2: string
  lighting: string
}
