setup.createTownMaterial = function (startLocationMaterials, wealth, size) {
  const filterArrayMaterial = (material) => {
    return startLocationMaterials.includes(material)
  }
  const highTierMaterials = ['plaster', 'brick', 'limestone', 'gypsum'].filter(filterArrayMaterial)
  const midTierMaterials = ['hewn rock', 'stone', 'cobblestone', 'wood'].filter(filterArrayMaterial)
  const lowTierMaterials = ['wood', 'adobe', 'daub', 'cob', 'straw', 'rock', 'terra cotta', 'clay', 'cobblestone'].filter(filterArrayMaterial)
  const materialDecider = wealth + (size * 0.1)
  if (materialDecider >= 70) {
    return highTierMaterials.seededrandom()
  } else if (materialDecider >= 50 && materialDecider < 70) {
    return midTierMaterials.seededrandom()
  } else if (materialDecider <= 49) {
    return lowTierMaterials.seededrandom()
  }
}

setup.setMaterialProbability = function (town) {
  Object.keys(town.materialProbability).forEach((material) => {
    town.possibleMaterials.forEach(possibleMaterial => {
      if (possibleMaterial !== material) {
        town.materialProbability[possibleMaterial].probability = 0
      }
    })
  })
}
