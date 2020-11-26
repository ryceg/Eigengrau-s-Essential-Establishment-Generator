import { Town } from '../town/_common'
import { random } from '../src/random'
import { articles } from '../src/articles'
import { weightedRandomFetcher } from '../src/weightedRandomFetcher'
import { MaterialType, RoofType, structureData } from './structureData'
import { Building } from './_common'

export function createStructure (town: Town, building: Building) {
  const { output } = articles
  console.groupCollapsed(`Creating the structure for ${output(building.wordNoun || 'building')}`)
  building.wordNoun = building.wordNoun || 'building'

  const structure = building.structure || {
    descriptor: '',
    descriptors: [],
    material: {},
    roof: {}
  }

  if (!structure.material.noun) {
    const material = weightedRandomFetcher(town, structureData.material.types, null, undefined, 'object') as MaterialType
    structure.material.noun = material.noun
  }

  const roof = weightedRandomFetcher(town, structureData.roof.types, null, undefined, 'object') as RoofType

  if (roof.canBeColoured) {
    structure.roof.colour = random(structureData.roof.colour)
    structure.roof.verb = `${structure.roof.colour} ${structure.roof.verb}`
    structure.roof.noun = `${structure.roof.colour} ${structure.roof.noun}`
  } else {
    structure.roof.verb = roof.verb
    structure.roof.noun = roof.noun
  }

  console.log('before roof')
  // FIXME: structure.roof does not have a rolls record, and this cannot be used defineRollDataGetter.
  // defineRollDataGetter(structure.roof, structureData.roof.rollData.wealth.rolls, 'wealth', 'wealth', null, building.roll)
  console.log('after roof')
  // FIXME: structure.material does not have a rolls record, and this cannot be used defineRollDataGetter.
  // defineRollDataGetter(structure.material, structureData.material.rollData.wealth.rolls, 'wealth', 'wealth', null, building.roll)
  console.log('after material')
  structure.material.wealth = 'shabby'
  structure.roof.wealth = 'decently built'
  const descriptors = [
    `${output(structure.material.noun)} ${[building.wordNoun, 'building'].random()} with ${output(structure.roof.wealth)} ${structure.roof.verb} roof`,
    `${output(structure.material.wealth)} ${structure.material.noun} ${[building.wordNoun, 'building'].random()} with ${output(structure.roof.wealth)} ${structure.roof.verb} roof`
  ]

  if (building.size) {
    addUniqueDescriptor(descriptors, `${output(building.size)} and ${structure.material.wealth} ${structure.material.noun} ${building.wordNoun} with ${output(structure.roof.verb)} roof`)
  }

  structure.descriptor = random(descriptors)

  console.log(structure)
  console.groupEnd()

  building.structure = structure
}

function addUniqueDescriptor (descriptors: string[], description: string) {
  if (descriptors.includes(description)) {
    console.log('Throwing out duplicate description...')
    return
  }
  descriptors.push(description)
}
