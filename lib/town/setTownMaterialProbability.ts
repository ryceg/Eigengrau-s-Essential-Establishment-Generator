import { MaterialTypes, structureMaterialData } from '../buildings/structureMaterialData'
import { keys } from '../src/utils'
import { Town } from './_common'

export function setMaterialProbability (town: Town, possibleMaterials: MaterialTypes[]) {
  for (const material of keys(town.materialProbability)) {
    for (const possibleMaterial of possibleMaterials) {
      if (possibleMaterial !== material && !structureMaterialData.types[possibleMaterial].alwaysAvailable) {
        town.materialProbability[possibleMaterial] = {
          ...town.materialProbability[possibleMaterial],
          probability: 0
        }
      }
    }
  }
}
