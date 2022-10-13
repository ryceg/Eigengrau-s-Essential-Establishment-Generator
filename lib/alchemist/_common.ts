import { Building } from '../buildings/_common'

export interface Alchemist extends Building {
  initPassage: string
  priceModifier: number
}
