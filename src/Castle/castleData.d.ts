import { ThresholdTable, Town } from '../../lib/index'
import { NPC } from '../../lib/npc-generation/_common'
import { Castle } from './createCastle'

interface Setup {
  castle: CastleData
  initCastle(): void
  createCastle(town: Town, opts?: Partial<Castle>): Castle
}

interface CastleData {
  name: {
    unique: string[]
    wordNouns: string[]
    nouns: string[]
    adjectives: string[]
    morphemes: {
      prefix: string[]
      suffix: string[]
    }
  }
  location: Record<string, CastleLocation>
  builtBy: string[]
  knownFor: string[]
  ruler: {
    lookingFor: string[]
    getAcquisitionMethod(town: Town, castle: Castle): AquisitionMethod
    types: CastleRulerType
  }
  lookingFor(town: Town): string
  siege: {
    create(town: Town, siege: Siege): Siege
    namePrefix: string[]
    nameAdjective: string[]
    nameNoun: string[]
    causedBy: string[]
    length: string[]
    event: string[]
    result: {
      invadersWin: string[]
      castleWin: string[]
      other: string[]
    }
  }
  rollData: {
    condition: string[]
    age: string[]
    size: ThresholdTable,
    landSize: ThresholdTable
  }
  dungeon: {
    name: {
      unique: string[]
      adjectives: string[]
      nouns: string[]
      verbs: string[]
      wordNoun: string[]
    }
    jailer: {
      types: JailerTypes[]
      base: {
        profession: string
      }
    }
    knownFor: string[]
    secret: string[]
    location: {
      castle: string[]
      standalone: string[]
    }
    age: string[]
    format: string[]
    cells: {
      prisoners: {
        create(town: Town, obj: any): string
        npcs: PrisonerType[]
        treatment: string[]
      }
      condition: string[]
      format: string[]
    }
    rooms: {
      type: string[]
      feature: string[]
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
