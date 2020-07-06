import { random } from './random'
import { keys } from './utils'
import jsonData from './colours.data.json'

type ColourName = keyof typeof jsonData

interface ColourData {
  colour: string[]
  coloured: string[]
  properties: ColourProperties
}

interface ColourProperties {
  isNatural: boolean
  isPlant: boolean
  isMineral: boolean
  isPaint: boolean
}

export const colours: Record<ColourName, ColourData> = jsonData

interface Filters extends Partial<ColourProperties> {
  banned?: string[]
}

export function createColour (filters: Filters = {}) {
  const { banned = [], ...properties } = filters

  const available = keys(colours).filter(colour => {
    if (banned.includes(colour)) {
      return false
    }

    return keys(properties).every(property => {
      return colours[colour].properties[property] === properties[property]
    })
  })

  const selected = colours[random(available)]
  const randomColour = random(selected.colour)
  const randomColoured = random(selected.coloured)

  return random([randomColour, `${randomColoured} coloured`])
}

/**
 * Returns all available colours and variants.
 */
export function getAllColours () {
  return Object.values(colours).reduce((all, colourData) => {
    return all.concat(colourData.colour)
  }, [] as string[])
}
