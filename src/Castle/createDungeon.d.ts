import { Building, DeadNPC, Namesake, NPC, Town } from '@lib'

interface Setup {
  createDungeon(town: Town, opts: any): Dungeon
  createDungeonName(town: Town, dungeon: Dungeon, namesake?: Namesake): string
}

export interface Dungeon extends Building {
  namesake?: Namesake | DeadNPC
  knownFor: string
  secret: string
  age: string
  format: string
  wordNoun: string
  passageName: string
  initPassage: string
  tippyDescription: string
  cells: {
    prisoners: {
      treatment: string
    },
    condition: string
    format: string
  }
  jailerType: string
  associatedNPC: NPC
  location: string
}
