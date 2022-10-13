import { roads } from './roads'
import { RoadData, roadTypes } from './roadTypes'

export function getRoadFeatures (type: RoadData): string {
  const roadType = roadTypes[type.name]
  if (roadType.features && lib.random(100) > 50) {
    return lib.random(roadType.features)
  }
  return lib.random(roads.features)
}
