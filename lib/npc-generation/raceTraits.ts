import { ThresholdTable } from '../src/rollFromTable'
import { GenderName } from '../npc-generation/genderData'
import { dragonborn } from './races/dragonborn'
import { dwarf } from './races/dwarf'
import { elf } from './races/elf'
import { gnome } from './races/gnome'
import { halfElf } from './races/half-elf'
import { halfling } from './races/halfling'
import { halfOrc } from './races/half-orc'
import { human } from './races/human'
import { tiefling } from './races/tiefling'
import { orc } from './races/orc'
import { lizardfolk } from './races/lizardfolk'
import { goblin } from './races/goblin'
import { ratfolk } from './races/ratfolk'
import { kitsune } from './races/kitsune'

export type RaceName = 'dragonborn' | 'dwarf' | 'elf' | 'gnome' | 'half-elf' | 'halfling' | 'half-orc' | 'human' | 'tiefling' | 'goblin' | 'orc' | 'lizardfolk' | 'ratfolk' | 'kitsune'

export interface RaceTrait {
  muscleMass: number
  bmiModifier: number
  viableBreedingPartners?: string[]
  ageTraits: Record<AgeName, AgeTrait> & {
    ageDescriptors: ThresholdTable
  }
  /** @warn Ensure that you use `lib.getGenderTrait()` to access any property that does not have non-binary. */
  genderTraits: Record<GenderName, Partial<GenderTraits>>
  lastName: string[]
  eyes: string[]
  raceWords: {
    raceName: string,
    racePlural: string,
    raceSingular: string,
    raceAdjective: string,
    raceLanguage: string
  },
  knownLanguages: string[]
  beard: string[]
  abilities: Record<string, string>
}

export type AgeName = 'elderly' | 'settled adult' | 'young adult' | 'child'

interface AgeTrait {
  baseAge: number
  ageModifier(): number
}

export interface GenderTraits {
  firstName: string[]
  beardProbability: number
  baseHeight: number
  baseWeight: number
  heightModifier(): number
  weightModifier(): number
}

export const raceTraits: Record<RaceName, RaceTrait> = {
  dragonborn,
  dwarf,
  elf,
  gnome,
  goblin,
  'half-elf': halfElf,
  halfling,
  'half-orc': halfOrc,
  human,
  tiefling,
  orc,
  lizardfolk,
  ratfolk,
  kitsune
}
