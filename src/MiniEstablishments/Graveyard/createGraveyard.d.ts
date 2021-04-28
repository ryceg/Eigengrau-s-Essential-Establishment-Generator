import { Building } from '../../../lib/buildings/_common'
import { NPC } from '../../../lib/npc-generation/_common'
import { Town } from '../../../lib/town/_common'

type Tree = import('../../../lib/constructs/tree').Tree

interface Setup {
  createGraveyard(town: Town, opts?: Partial<Options>): Graveyard
}

interface Options {
  newBuilding(town: Town, type?: string): Building
  npc: Partial<NPC>
}

interface Graveyard {
  initPassage: string
  passageName: string
  buildingType: string
  name: string
  wordNoun: string
  needsWordNoun: boolean
  size: string
  tree: Tree
  feature: string
  location: string
  cleanliness: string
  namePrefix: string
  nameSuffix: string
  associatedNPC: NPC
  gravediggerLook: string
  gravediggerChat: string
  pairOf: string
  entrance: string
  tippyDescription: string
}
