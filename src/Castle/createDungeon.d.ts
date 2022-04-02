import { DeadNPC } from 'src/NPCGeneration/setupDeath'
import { Building } from 'src/setup'
import { Namesake, NPC } from '../../lib/npc-generation/_common'
import { Town } from '../../lib/town/_common'

interface Setup {
  createDungeon(town: Town, opts: any): Dungeon
  createDungeonName(town: Town, dungeon: Dungeon, namesake: any): string
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
