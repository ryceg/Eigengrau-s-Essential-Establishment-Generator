import { MaterialTypes, structureMaterialData } from '../buildings/structureData'
import { keys } from '../src/utils'
import { Town } from './_common'

export function setMaterialProbability (town: Town, possibleMaterials: MaterialTypes[]) {
  for (const material of keys(structureMaterialData.types)) {
    for (const possibleMaterial of possibleMaterials) {
      if (possibleMaterial !== material && !structureMaterialData.types[possibleMaterial].alwaysAvailable) {
        town.materialProbability[possibleMaterial].probability = 0
      }
    }
  }
}
