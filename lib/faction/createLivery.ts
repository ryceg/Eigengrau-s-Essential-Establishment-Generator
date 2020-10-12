import { factionData } from './factionData'
import { Faction } from './_common'
import { random } from '../src/random'

interface Livery {
    colours: {
      primary: string
      secondary: string
    }
    insignia: string
    readout: string
}

export function createLivery (faction: Faction): void {
  const livery: Livery = {
    colours: {
      primary: random(factionData.type[faction.type].livery.colours.primary),
      secondary: random(factionData.type[faction.type].livery.colours.secondary)
    },
    insignia: random(factionData.type[faction.type].livery.insignia),
    readout: `${faction.livery.colours.primary} and ${faction.livery.colours.secondary} livery adorned with an image of ${faction.livery.insignia}`
  }
  faction.livery = livery
}
