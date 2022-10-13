import { logger } from '../logger'
import { Town } from '../town/_common'
import { assign } from '../src/utils'
import { random } from '../src/random'
import { articles } from '../src/articles'
import { weightedRandomFetcher } from '../src/weightedRandomFetcher'
import { MaterialType, structureMaterialData } from './structureMaterialData'
import { RoofType, roofData } from './roofData'
import { Building } from './_common'

export function createStructure (town: Town, building: Building) {
  const { output } = articles
  logger.openGroup(`Creating the structure for ${output(building.wordNoun || 'building')}`)
  building.wordNoun = building.wordNoun || 'building'

  const structure = building.structure || {
    descriptor: '',
    descriptors: [],
    material: {
      noun: ''
    },
    roof: {}
  }

  if (!structure.material.noun) {
    const material = weightedRandomFetcher(town, structureMaterialData.types, null, undefined, 'object') as MaterialType
    structure.material.noun = material.noun
  }

  const roof = weightedRandomFetcher(town, roofData.types, null, undefined, 'object') as RoofType

  if (roof.canBeColoured) {
    const colour = random(roofData.colour)
    assign(structure.roof, {
      colour,
      verb: `${colour} ${roof.verb}`,
      noun: `${colour} ${roof.noun}`
    })
  } else {
    assign(structure.roof, {
      verb: roof.verb,
      noun: roof.noun
    })
  }

  // FIXME: structure.roof does not have a rolls record, and this cannot be used defineRollDataGetter.
  // defineRollDataGetter(structure.roof, structureData.roof.rollData.wealth.rolls, 'wealth', 'wealth', null, building.roll)

  // FIXME: structure.material does not have a rolls record, and this cannot be used defineRollDataGetter.
  // defineRollDataGetter(structure.material, structureData.material.rollData.wealth.rolls, 'wealth', 'wealth', null, building.roll)

  assign(structure.material, {
    wealth: 'shabby'
  })
  assign(structure.roof, {
    wealth: 'decently built'
  })

  const descriptors = [
    `${output(structure.material.noun)} ${random([building.wordNoun, 'building'])} with ${output(structure.roof.wealth)} ${structure.roof.verb} roof`,
    `${output(structure.material.wealth)} ${structure.material.noun} ${random([building.wordNoun, 'building'])} with ${output(structure.roof.wealth)} ${structure.roof.verb} roof`
  ]

  if (building.size) {
    addUniqueDescriptor(descriptors, `${output(building.size)} and ${structure.material.wealth} ${structure.material.noun} ${building.wordNoun} with ${output(structure.roof.verb)} roof`)
  }

  structure.descriptor = random(descriptors)

  logger.info(structure)
  logger.closeGroup()

  assign(building, {
    structure
  })
}

function addUniqueDescriptor (descriptors: string[], description: string) {
  if (descriptors.includes(description)) {
    logger.warn('Throwing out duplicate description...')
    return
  }
  descriptors.push(description)
}
