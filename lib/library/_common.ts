import { Building } from '../buildings/_common'

export interface Library extends Building {
  notableFeature: string
  roll: {
    expertise: number
    cleanliness: number
    wealth: number
    size: number
  }
}
