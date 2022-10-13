import { Town, NPC } from '@lib'
import { Castle } from './createCastle'

interface Setup {
  castle: CastleData
  initCastle(): void
  createCastle(town: Town, opts?: Partial<Castle>): Castle
}

interface CastleData {
  location: Record<string, CastleLocation>
  builtBy: string[]
  knownFor: string[]
  ruler: {
    lookingFor: string[]
    getAcquisitionMethod(town: Town, castle: Castle): AquisitionMethod
    types: CastleRulerType
  }
  lookingFor(town: Town): string
  dungeon: {
    jailer: {
      base: {
        profession: string
      }
    }
    cells: {
      prisoners: {
        create(town: Town, obj: any): string
      }
    }
  }
}

interface PrisonerType {
  reasonForPunishment: string
  base?: Partial<NPC>
}
interface JailerTypes {
  type?: string
  base?: Partial<NPC>
}

interface CastleRulerType {
  probability?: number
  type?: string
  lookingFor?: string[]
  acquisitionMethod?: string
  base?: Partial<NPC>
}

interface Siege {
  causedBy: string
  length: string
  event: string
  result: string
  namePrefix: string
  nameAdjective: string
  nameNoun: string
  name: string
  readout: string
}

interface CastleLocation {
  vignette: string[]
  defenseReason: string[]
}

interface AquisitionMethod {
  acquisitionMethod: string
}
