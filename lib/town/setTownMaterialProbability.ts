import { MaterialTypes, structureData } from '../buildings/structureData'
import { keys } from '../src/utils'
import { Town } from './_common'

export function setMaterialProbability (town: Town, possibleMaterials: MaterialTypes[]) {
  for (const material of keys(structureData.material.types)) {
    for (const possibleMaterial of possibleMaterials) {
      if (possibleMaterial !== material && !structureData.material.types[possibleMaterial].alwaysAvailable) {
        town.materialProbability[possibleMaterial].probability = 0
      }
    }
  }
}
