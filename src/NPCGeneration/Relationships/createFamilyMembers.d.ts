import { LifestyleStandardName, RaceName } from '../../../lib/index'
import { NPC, SocialClassName } from '../../../lib/npc-generation/_common'
import { Town } from '../../../lib/town/_common'

interface Setup {
  createRelative(
    town: Town,
    family: Family,
    base?: Partial<NPC>,
    force?: boolean
  ): NPC
  createParentage(
    town: Town,
    family: Family,
    npc: NPC,
    forceFather?: boolean
  ): void
  createChildren(
    town: Town,
    family: Family,
    marriage: Marriage,
    amount: number,
    motherRace?: RaceName,
    fatherRace?: RaceName,
    force?: boolean
  ): any
  createMarriage(
    town: Town,
    family: Family,
    npc: NPC,
    force?: boolean
  ): Marriage
  findParentRaces(npc: NPC): {
    lineage: string
    motherRace: RaceName
    fatherRace: RaceName
  }
}

export interface Family {
  key: string
  members: Record<string, any>
}

export interface Marriage {
  parents: string[]
  children: any[]
  socialClass?: SocialClassName
  lifestyle?: LifestyleStandardName
  familyUnit?: string
  home?: string
}
