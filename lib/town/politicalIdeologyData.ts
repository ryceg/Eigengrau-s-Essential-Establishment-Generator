import { PartialRecord } from '../types'
import { FactionType } from '../faction/factionData'
import { NPC } from '../npc-generation/_common'
import { PoliticalIdeology } from './townData'
import { TownRolls } from './_common'

export const politicalIdeologyData: {
  [key in PoliticalIdeology]: {
    leaderTraits: () => Partial<NPC>
    modifiers: PartialRecord<TownRolls, number>
    data: {
      isFaction: boolean
      leaderType: string
      governmentType: FactionType
      politicalIdeologyIC: string
      description: string
    }
  }
} = {
  autocracy: {
    leaderTraits: () => ({
      hasClass: false,
      profession: 'lord',
      background: 'noble',
      title: 'Lord',
      socialClass: 'nobility'
    }),
    modifiers: {
      economics: 45,
      welfare: -25,
      law: 15,
      military: 25,
      arcana: -5
    },
    data: {
      isFaction: false,
      leaderType: 'the supreme leader',
      governmentType: 'nobles',
      politicalIdeologyIC: 'autocratic',
      description: 'Governed by one person.'
    }
  },
  meritocracy: {
    leaderTraits: () => ({
      hasClass: false,
      background: 'noble',
      title: 'Lord',
      socialClass: 'nobility'
    }),
    modifiers: {
      economics: 15,
      welfare: 5,
      law: -5,
      military: -5,
      arcana: 15,
      equality: 25
    },
    data: {
      isFaction: false,
      leaderType: 'the competent',
      governmentType: 'commoners',
      politicalIdeologyIC: 'meritocratic',
      description: 'Governed by the best.'
    }
  },
  democracy: {
    leaderTraits: () => ({
      hasClass: false,
      profession: 'prime minister',
      background: 'commoner',
      title: 'Lord',
      socialClass: 'nobility'
    }),
    modifiers: {
      economics: -15,
      welfare: 25,
      law: 15,
      military: -5,
      arcana: 15,
      equality: 25
    },
    data: {
      isFaction: false,
      leaderType: 'the people',
      governmentType: 'commoners',
      politicalIdeologyIC: 'democratic',
      description: 'Governed by the elected.'
    }
  },
  kleptocracy: {
    leaderTraits: () => ({
      hasClass: true,
      profession: 'rogue',
      background: 'criminal',
      title: 'High Thief',
      socialClass: 'nobility'
    }),
    modifiers: {
      economics: -35,
      welfare: -25,
      law: -30,
      military: -5,
      arcana: 15
    },
    data: {
      isFaction: true,
      leaderType: "the Thieves' Guild",
      governmentType: 'thieves',
      politicalIdeologyIC: 'kleptocratic',
      description: 'Governed by the thieves.'
    }
  },
  magocracy: {
    leaderTraits: () => ({
      hasClass: true,
      profession: 'wizard',
      background: 'sage',
      title: 'Archchancellor',
      socialClass: 'nobility'
    }),
    modifiers: {
      economics: 2,
      welfare: 5,
      law: -5,
      military: -5,
      arcana: 50
    },
    data: {
      isFaction: true,
      leaderType: 'the wizards',
      governmentType: 'wizards',
      politicalIdeologyIC: 'magocratic',
      description: 'Governed by the wizards.'
    }
  },
  militocracy: {
    leaderTraits: () => ({
      hasClass: true,
      profession: 'fighter',
      background: 'soldier',
      title: 'Commander',
      socialClass: 'nobility'
    }),
    modifiers: {
      economics: 25,
      welfare: -5,
      law: 30,
      military: 50,
      arcana: -15,
      equality: -25
    },
    data: {
      isFaction: true,
      leaderType: 'the military',
      governmentType: 'military',
      politicalIdeologyIC: 'militocratic',
      description: 'Governed by the military.'
    }
  },
  oligarchy: {
    leaderTraits: () => ({
      hasClass: false,
      profession: 'noble',
      background: 'noble',
      title: 'Lord',
      socialClass: 'nobility'
    }),
    modifiers: {
      economics: 15,
      welfare: -15,
      law: 5,
      military: 5,
      arcana: -5
    },
    data: {
      isFaction: false,
      leaderType: 'the powerful few',
      governmentType: 'nobles',
      politicalIdeologyIC: 'oligarchic',
      description: 'Governed by the powerful few.'
    }
  },
  sophocracy: {
    leaderTraits: () => ({
      hasClass: false,
      profession: lib.random(['scholar', 'philosopher', 'horologist', 'mathematician']),
      background: 'sage',
      title: 'Sir',
      socialClass: 'nobility'
    }),
    modifiers: {
      economics: 15,
      welfare: 50,
      law: -5,
      military: -5,
      arcana: 15,
      equality: 25
    },
    data: {
      isFaction: true,
      leaderType: 'the scholars',
      governmentType: 'scholars',
      politicalIdeologyIC: 'sophocratic',
      description: 'Governed by the scholars.'
    }
  },
  theocracy: {
    leaderTraits: () => ({
      hasClass: true,
      profession: 'cleric',
      background: 'acolyte',
      title: 'High Priest',
      gender: 'man',
      socialClass: 'nobility'
    }),
    modifiers: {
      economics: 15,
      welfare: 30,
      law: 15,
      military: -15,
      arcana: 35
    },
    data: {
      isFaction: true,
      leaderType: 'the holy',
      governmentType: 'priests',
      politicalIdeologyIC: 'theocratic',
      description: 'Governed by the church.'
    }
  },
  technocracy: {
    leaderTraits: () => ({
      hasClass: false,
      profession: 'architect',
      background: 'guild artisan',
      title: 'Architect',
      socialClass: 'nobility'
    }),
    modifiers: {
      economics: 35,
      welfare: 15,
      law: -15,
      military: -5,
      arcana: 25
    },
    data: {
      isFaction: false,
      leaderType: 'the engineers',
      governmentType: 'craftsmen',
      politicalIdeologyIC: 'technocratic',
      description: 'Governed by the engineers.'
    }
  }
}
