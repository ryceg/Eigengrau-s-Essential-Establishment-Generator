setup.createStructure = (town, building) => {
  console.groupCollapsed(`Creating the structure for ${lib.articles.output(building.wordNoun || 'building')}`)
  building.wordNoun = building.wordNoun || 'building'

  const structure = building.structure || {
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
    structure.material = tempMaterial
  } else {
    structure.material = building.material
  }

  structure.roof = lib.weightedRandomFetcher(town, lib.structureData.roof.types, null, null, 'object')

  if (structure.roof.canBeColoured) {
    structure.roof.colour = lib.structureData.data.colour.random()
    structure.roof.verb = `${structure.roof.colour} ${structure.roof.verb}`
    structure.roof.noun = `${structure.roof.colour} ${structure.roof.noun}`
  }

  lib.defineRollDataGetter(structure.roof, lib.structureData.roof.rollData, 'wealth', 'wealth', undefined, building.roll)
  lib.defineRollDataGetter(structure.material, lib.structureData.material.rollData, 'wealth', 'wealth', undefined, building.roll)

  structure.descriptors = [
    `${lib.articles.output(structure.material.noun)} ${[building.wordNoun, 'building'].random()} with ${lib.articles.output(structure.roof.wealth)} ${structure.roof.verb} roof`,
    `${lib.articles.output(structure.material.wealth)} ${structure.material.noun} ${[building.wordNoun, 'building'].random()} with ${lib.articles.output(structure.roof.wealth)} ${structure.roof.verb} roof`
  ]

  if (building.size) {
    addUniqueDescriptor(structure.descriptors, `${lib.articles.output(building.size)} and ${structure.material.wealth} ${structure.material.noun} ${building.wordNoun} with ${lib.articles.output(structure.roof.verb)} roof`)
  }
  console.log(structure)
  console.groupEnd()

  building.structure = structure
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
