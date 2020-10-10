setup.createStructure = (town, building = {}) => {
  console.groupCollapsed(`Creating the structure for ${lib.articles.output(building.wordNoun || 'building')}`)
  building.wordNoun = building.wordNoun || 'building'

  building.structure = building.structure || {
    get descriptor () {
      return this.descriptors.random()
    },
    descriptors: [],
    material: {},
    roof: {}
  }

  if (!building.material) {
    let tempMaterial = lib.weightedRandomFetcher(town, lib.structureData.material.types, null, null, 'object')
    if (tempMaterial.variations) {
      console.log('Building material has variations. ')
      tempMaterial = lib.weightedRandomFetcher(town, tempMaterial.variations, null, null, 'object')
    }
    console.log('tempMaterial', tempMaterial)
    building.structure.material = tempMaterial
  } else {
    building.structure.material = building.material
  }

  building.structure.roof = lib.weightedRandomFetcher(town, lib.structureData.roof.types, null, null, 'object')

  if (building.structure.roof.canBeColoured) {
    building.structure.roof.colour = lib.structureData.data.colour.random()
    building.structure.roof.verb = `${building.structure.roof.colour} ${building.structure.roof.verb}`
    building.structure.roof.noun = `${building.structure.roof.colour} ${building.structure.roof.noun}`
  }

  lib.defineRollDataGetter(building.structure.roof, lib.structureData.roof.rollData, 'wealth', 'wealth', undefined, building.roll)
  lib.defineRollDataGetter(building.structure.material, lib.structureData.material.rollData, 'wealth', 'wealth', undefined, building.roll)

  building.structure.descriptors = [
    `${lib.articles.output(building.structure.material.noun)} ${[building.wordNoun, 'building'].random()} with ${lib.articles.output(building.structure.roof.wealth)} ${building.structure.roof.verb} roof`,
    `${lib.articles.output(building.structure.material.wealth)} ${building.structure.material.noun} ${[building.wordNoun, 'building'].random()} with ${lib.articles.output(building.structure.roof.wealth)} ${building.structure.roof.verb} roof`
  ]

  if (building.size) {
    addUniqueDescriptor(building.structure.descriptors, `${lib.articles.output(building.size)} and ${building.structure.material.wealth} ${building.structure.material.noun} ${building.wordNoun} with ${lib.articles.output(building.structure.roof.verb)} roof`)
  }
  console.log(building.structure)
  console.groupEnd()
  return building
}

function addUniqueDescriptor (descriptors, description) {
  if (typeof description !== 'string') {
    console.error(`Expected a string operand and received "${description}".`)
  }
  if (descriptors.includes(description)) {
    console.log('Throwing out duplicate description...')
    return
  }
  descriptors.push(description)
}
