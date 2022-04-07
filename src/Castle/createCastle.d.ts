import { Building, DeadNPC, Namesake, NPC, Town } from '@lib'
import { Dungeon } from './createDungeon'

interface Setup {
  createCastle(town: Town, opts?: Partial<Options>): Castle
}

interface Options {
  newBuilding(town: Town, type?: string): Building
  npc: Partial<NPC>
}

export interface Castle extends Building {
  initPassage: string
  passageName: string
  buildingType: 'castle'
  name: string
  associatedNPC: NPC
  namesake: Namesake | DeadNPC
  wordNoun: string
  needsWordNoun: boolean
  defense: {
    reason: string
    innerWalls: string
    outerWalls: string
  }
  lookingFor: string
  notableFeature?: string
  wealth: string
  age: string
  condition: string
  landSize: string
  size: string
  cleanliness: string
  tippyDescription?: string
  dungeon: Dungeon
}
