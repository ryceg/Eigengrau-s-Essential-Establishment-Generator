setup.createTownMaterial = function (startLocationMaterials, wealth, size) {
  if (!startLocationMaterials) {
    console.error('Main town building material has not initialised!')
    startLocationMaterials = lib.terrain.temperate.location.plains.possibleMaterials
  }
  const filterArrayMaterial = (material) => {
    return startLocationMaterials.includes(material)
  }
  const highTierMaterials = ['plaster', 'brick', 'limestone', 'gypsum'].filter(filterArrayMaterial)
  const midTierMaterials = ['hewn rock', 'stone', 'cobblestone', 'wood'].filter(filterArrayMaterial)
  const lowTierMaterials = ['wood', 'adobe', 'daub', 'cob', 'straw', 'rock', 'terra cotta', 'clay', 'cobblestone'].filter(filterArrayMaterial)
  const materialDecider = wealth + (size * 0.1)
  if (materialDecider > 70) {
    return highTierMaterials.random()
  } else if (materialDecider > 50) {
    return midTierMaterials.random()
  } else {
    return lowTierMaterials.random()
  }
}
