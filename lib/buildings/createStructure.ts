import { Town } from '../town/_common'
import { Building, BuildingStructure } from './_common'
import { MaterialType, RoofType, structureData } from './structureData'
import { articles } from '../src/articles'
import { weightedRandomFetcher } from '../src/weightedRandomFetcher'
import { defineRollDataGetter } from '../src/defineRollDataGetter'

export interface Structure {
  descriptor: string
  descriptors: string[]
  material: {
    noun: string
    wealth: string
  }
  roof: {
    canBeColoured?: boolean
    colour?: string
    verb: string
    noun: string
    wealth: string
  }
}

export function createStructure (town: Town, building: Building) {
  const { output } = articles
  console.groupCollapsed(`Creating the structure for ${output(building.wordNoun || 'building')}`)
  building.wordNoun = building.wordNoun || 'building'

  const structure = building.structure || {
    get descriptor () {
      return this.descriptors.random()
    },
    descriptors: [],
    material: {
    },
    roof: {
    }
  }
  if (!structure.material.noun) {
    const material = weightedRandomFetcher(town, structureData.material.types, null, null, 'object') as MaterialType
    structure.material.noun = material.noun as string
  }

  const roof = weightedRandomFetcher(town, structureData.roof.types, null, null, 'object') as RoofType

  if (roof.canBeColoured) {
    structure.roof.colour = structureData.roof.colour.random() as string
    structure.roof.verb = `${structure.roof.colour} ${structure.roof.verb}`
    structure.roof.noun = `${structure.roof.colour} ${structure.roof.noun}`
  } else {
    structure.roof.verb = roof.verb as string
    structure.roof.noun = roof.noun as string
  }

  console.log('before roof')
  defineRollDataGetter(structure.roof, structureData.roof.rollData.wealth.rolls, 'wealth', 'wealth', undefined, building.roll)
  console.log('after roof')
  defineRollDataGetter(structure.material, structureData.material.rollData.wealth.rolls, 'wealth', 'wealth', undefined, building.roll)
  console.log('after material')

  structure.descriptors = [
    `${output(structure.material.noun)} ${[building.wordNoun, 'building'].random()} with ${output(structure.roof.wealth)} ${structure.roof.verb} roof`,
    `${output(structure.material.wealth)} ${structure.material.noun} ${[building.wordNoun, 'building'].random()} with ${output(structure.roof.wealth)} ${structure.roof.verb} roof`
  ]

  if (building.size) {
    addUniqueDescriptor(structure.descriptors, `${output(building.size)} and ${structure.material.wealth} ${structure.material.noun} ${building.wordNoun} with ${output(structure.roof.verb)} roof`)
  }
  console.log(structure)
  console.groupEnd()

  building.structure = structure as BuildingStructure
  return building
}

function addUniqueDescriptor (descriptors: string[], description: string) {
  if (descriptors.includes(description)) {
    console.log('Throwing out duplicate description...')
    return
  }
  descriptors.push(description)
}
