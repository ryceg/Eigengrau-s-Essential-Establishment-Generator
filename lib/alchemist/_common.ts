import { Building } from '../buildings/_common'

export interface Alchemist extends Building {
  buildingType: string
  initPassage: string
  priceModifier: number
}
