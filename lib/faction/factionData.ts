import { BackgroundName } from '../npc-generation/backgroundTraits'
import { ClassName } from '../npc-generation/classTraits'
import { ProfessionName } from '../npc-generation/professions'
import { ThresholdTable } from '../src/rollFromTable'
import { WeightRecord } from '../types'
import { artisans } from './factions/artisans'
import { assassins } from './factions/assassins'
import { bandits } from './factions/bandits'
import { bards } from './factions/bards'
import { clergy } from './factions/clergy'
import { commoners } from './factions/commoners'
import { craftsmen } from './factions/craftsmen'
import { druids } from './factions/druids'
import { foreigners } from './factions/foreigners'
import { guards } from './factions/guards'
import { mercenaries } from './factions/mercenaries'
import { merchants } from './factions/merchants'
import { military } from './factions/military'
import { monks } from './factions/monks'
import { nobles } from './factions/nobles'
import { priests } from './factions/priests'
import { rangers } from './factions/rangers'
import { scholars } from './factions/scholars'
import { seers } from './factions/seers'
import { thieves } from './factions/thieves'
import { wizards } from './factions/wizards'

interface FactionData {
  rollData: {
    reputation: {
      rolls: ThresholdTable
    }
    resources: {
      rolls: ThresholdTable
    }
  }
  resources: {
    forms: Record<FactionResourceForms, ResourceForm>
    types: Record<InternalFactionResource, ResourceType>
  }
  types: Record<FactionType, FactionTypeData>
}

export interface ResourceType {
    probability?: number
    isDefault?: boolean
    isMagic?: boolean
    isArt?: boolean
    isReligious?: boolean
    form: FactionResourceForms
}

interface ResourceForm {
  rolls: ThresholdTable
}

export interface FactionTypeData {
  leader: Leader
  type: string
  wordNoun: string
  probability: number
  livery?: {
    colours: {
      primary: string[]
      secondary: string[]
    }
    insignia: string[]
  }
  alliesList: WeightRecord<string>
  rivalsList: WeightRecord<string>
  joiningRequirement: WeightRecord<string>
  joiningInitiation: WeightRecord<string>
  members: Members
  membersTrait: WeightRecord<string>
  names: {
    main: string[]
    adjective: string[]
    alternateAdjective?: string[]
    group: string[]
    unique: string[]
  }
  motivation: WeightRecord<string>
  resources: WeightRecord<InternalFactionResource>
}

interface Leader {
  format: WeightRecord<string>
  qualification: WeightRecord<string>
  base: LeaderTraits
}

interface Members {
  membershipIsMutuallyExclusive: boolean
  membershipIsTotallyExclusive: boolean
  professions: ProfessionName[]
}

interface LeaderTraits {
  title?: string
  hasClass: boolean
  dndClass?: ClassName[]
  profession?: ProfessionName
  background?: BackgroundName | BackgroundName[]
}

export type FactionType =
  | 'artisans'
  | 'assassins'
  | 'bandits'
  | 'bards'
  | 'clergy'
  | 'commoners'
  | 'craftsmen'
  | 'druids'
  | 'foreigners'
  | 'guards'
  | 'mercenaries'
  | 'merchants'
  | 'military'
  | 'monks'
  | 'nobles'
  | 'priests'
  | 'rangers'
  | 'scholars'
  | 'seers'
  | 'thieves'
  | 'wizards'

type InternalFactionResource =
  | 'artifacts'
  | 'blackmail material'
  | 'gold'
  | 'contacts'
  | 'favours'
  | 'debtors'
  | 'gems'
  | 'magic scrolls'
  | 'magical trinkets'
  | 'magical weapons'
  | 'magical instruments'
  | 'magical contraptions'
  | 'old favours'
  | 'trade goods'
  | 'masterpieces'
  | 'stolen goods'
  | 'important manuscripts'
  | 'political influence'
  | 'foreign goods'
  | 'holy relics'
  | 'sacred texts'
  | 'tame animals'

type FactionResourceForms =
  | 'physical'
  | 'paper'
  | 'knowledge'
  | 'people'
  | 'animal'
  | 'money'

export type FactionResource = keyof typeof factionData.resources.types

export const factionData: FactionData = {
  rollData: {
    reputation: {
      rolls: [
        [95, 'excellent'],
        [90, 'very good'],
        [80, 'quite good'],
        [70, 'good'],
        [60, 'above average'],
        [55, 'slightly above average'],
        [50, 'average'],
        [45, 'slightly below average'],
        [40, 'poor'],
        [30, 'quite poor'],
        [20, 'very poor'],
        [10, 'extremely poor']
      ]
    },
    resources: {
      rolls: [
        [95, 'limitless'],
        [90, 'near limitless'],
        [80, 'extensive'],
        [70, 'significant'],
        [60, 'many'],
        [55, 'decent'],
        [50, 'average'],
        [45, 'slightly below average'],
        [40, 'somewhat limited'],
        [30, 'limited'],
        [20, 'quite poor'],
        [10, 'extremely poor'],
        [0, 'destitute']
      ]
    }
  },
  resources: {

    forms: {
      physical: {
        // They have _____ ${resource}
        rolls: [
          [90, 'veritable warehouses full of'],
          [70, 'a room full of'],
          [50, 'a significant number of'],
          [30, 'a handful of'],
          [0, 'one or two valuable']
        ]
      },
      money: {
        // They have _____ ${resource}
        rolls: [
          [90, 'a bank full of'],
          [70, 'chests full of'],
          [50, 'a chest of'],
          [30, 'a couple pouches of'],
          [0, 'barely enough']
        ]
      },
      paper: {
        rolls: [
          [90, 'shelves upon shelves of'],
          [70, 'binders full of'],
          [50, 'sheafs of'],
          [30, 'a drawer of'],
          [0, 'a handful of']
        ]
      },
      knowledge: {
        rolls: [
          [90, 'an almost omniscient knowledge of'],
          [70, 'some extremely rare'],
          [50, 'some rare'],
          [30, 'some secret'],
          [0, 'some relatively easy to discover']
        ]
      },
      people: {
        rolls: [
          [90, 'scores upon scores of'],
          [70, 'a crowd of'],
          [50, 'a fair few'],
          [30, 'a handful of'],
          [0, 'one or two']
        ]
      },
      animal: {
        rolls: [
          [90, "a damn zoo's worth of"],
          [70, 'a menagerie'],
          [50, 'a couple'],
          [30, 'three'],
          [0, 'one or two']
        ]
      }
    },
    types: {
      'artifacts': {
        isDefault: true,
        form: 'physical'
      },
      'blackmail material': {
        isDefault: true,
        form: 'paper'
      },
      'gold': {
        isDefault: true,
        form: 'money'
      },
      'contacts': {
        isDefault: true,
        form: 'people'
      },
      'favours': {
        isDefault: true,
        form: 'people'
      },
      'debtors': {
        isDefault: true,
        form: 'people'
      },
      'gems': {
        isDefault: true,
        form: 'physical'
      },
      'magic scrolls': {
        isMagic: true,
        isDefault: true,
        form: 'paper'
      },
      'magical trinkets': {
        isMagic: true,
        isDefault: true,
        form: 'physical'
      },
      'magical weapons': {
        isMagic: true,
        isDefault: true,
        form: 'physical'
      },
      'magical instruments': {
        isMagic: true,
        isArt: true,
        form: 'physical'
      },
      'magical contraptions': {
        isMagic: true,
        form: 'physical'
      },
      'old favours': {
        isDefault: true,
        form: 'people'
      },
      'trade goods': {
        isDefault: true,
        form: 'physical'
      },
      'masterpieces': {
        isArt: true,
        form: 'physical'
      },
      'stolen goods': {
        form: 'physical'
      },
      'important manuscripts': {
        form: 'paper'
      },
      'political influence': {
        form: 'people'
      },
      'foreign goods': {
        form: 'physical'
      },
      'holy relics': {
        isReligious: true,
        form: 'physical'
      },
      'sacred texts': {
        isReligious: true,
        form: 'paper'
      },
      'tame animals': {
        form: 'animal'
      }
    }
  },
  types: {
    artisans,
    assassins,
    bandits,
    bards,
    clergy,
    commoners,
    craftsmen,
    druids,
    foreigners,
    guards,
    mercenaries,
    merchants,
    military,
    monks,
    nobles,
    priests,
    rangers,
    scholars,
    seers,
    thieves,
    wizards
  }
}
