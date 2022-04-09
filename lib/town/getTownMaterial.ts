import { logger } from '../logger'
import { random } from '../src/random'
import { terrain } from '../src/terrain'

export function getTownMaterial (startLocationMaterials: string[], wealth: number, size: number): string {
  if (!startLocationMaterials) {
    logger.error('Main town building material has not initialized!')
    startLocationMaterials = terrain.temperate.location.plains.possibleMaterials
  }

  const isPossibleMaterial = (material: string) => {
    return startLocationMaterials.includes(material)
  }

  const materialDecider = wealth + (size * 0.1)

  if (materialDecider > 70) {
    return getHighTierMaterial(isPossibleMaterial)
  }

  if (materialDecider > 50) {
    return getMidTierMaterial(isPossibleMaterial)
  }

  return getLowTierMaterial(isPossibleMaterial)
}

type MaterialFilterFn = (material: string) => boolean

function getHighTierMaterial (filterFn: MaterialFilterFn) {
  const materials = ['plaster', 'brick', 'limestone', 'gypsum']
  return random(materials.filter(filterFn))
}

function getMidTierMaterial (filterFn: MaterialFilterFn) {
  const materials = ['hewn rock', 'stone', 'cobblestone', 'wood']
  return random(materials.filter(filterFn))
}

function getLowTierMaterial (filterFn: MaterialFilterFn) {
  const materials = ['wood', 'adobe', 'daub', 'cob', 'straw', 'rock', 'terra cotta', 'clay', 'cobblestone']
  return random(materials.filter(filterFn))
}
