import { keys } from '../src/utils'
import { Town } from './_common'

export function setMaterialProbability (town: Town, possibleMaterials: string[]) {
  for (const material of keys(town.materialProbability)) {
    for (const possibleMaterial of possibleMaterials) {
      if (possibleMaterial !== material) {
        town.materialProbability[possibleMaterial].probability = 0
      }
    }
  }
}
