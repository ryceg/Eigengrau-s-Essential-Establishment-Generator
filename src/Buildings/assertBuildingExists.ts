import { Building } from '@lib'

export function assertBuildingExists (building: Building): asserts building is Building {
  if (!building) throw new Error('Building does not exist!')
}
