import { NPC } from '../npc-generation/_common'

interface DungeonPrisoner {
  probability?: number
  reasonForPunishment: string
  base: Partial<NPC>
}

export const dungeonPrisoners: DungeonPrisoner[] = [
  {
    reasonForPunishment: 'was caught stealing a loaf of bread from a festival.',
    base: {
      socialClass: 'peasantry'
    }
  },
  {
    reasonForPunishment: 'was captured poaching deer.',
    base: {
      profession: 'poacher'
    }
  },
  {
    reasonForPunishment: 'offended the lord with an off-colour joke.',
    base: {
      socialClass: 'peasantry'
    }
  },
  {
    reasonForPunishment: 'offended the lord with a poorly played tune.',
    base: {
      profession: 'musician'
    }
  },
  {
    reasonForPunishment: 'was caught philandering with someone elses wife.',
    base: {
      socialClass: 'commoner'
    }
  },
  {
    reasonForPunishment: 'had too much to drink, and committed a minor crime.',
    base: {
      socialClass: 'peasantry'
    }
  },
  {
    reasonForPunishment: 'is believed to be a spy for the enemy.',
    base: {
      profession: 'spy'
    }
  },
  {
    reasonForPunishment: 'was caught impersonating a noble.',
    base: {
      background: 'charlatan'
    }
  },
  {
    reasonForPunishment: 'was caught impersonating a messenger.',
    base: {
      background: 'charlatan'
    }
  },
  {
    reasonForPunishment: 'was caught dodging taxes.',
    base: {
      socialClass: 'peasantry'
    }
  },
  {
    reasonForPunishment: 'was unable to pay taxes.',
    base: {
      socialClass: 'paupery'
    }
  },
  {
    reasonForPunishment: 'was caught attempting to poison someone.',
    base: {
      socialClass: 'commoner'
    }
  },
  {
    reasonForPunishment: 'was an embarassment with sub-standard cooking at an important feast.',
    base: {
      profession: 'chef'
    }
  },
  {
    reasonForPunishment: 'killed a noble.',
    base: {
      note: 'Was actually framed.'
    }
  },
  {
    reasonForPunishment: 'is an enemy who has been captured and is now being held for ransom.',
    base: {
      socialClass: 'aristocracy'
    }
  },
  {
    probability: 30,
    reasonForPunishment: 'was caught committing criminal acts.',
    base: {
      professionSector: 'crime'
    }
  },
  {
    reasonForPunishment: 'was caught attempting to rescue someone else from jail.',
    base: {
      background: 'criminal'
    }
  },
  {
    reasonForPunishment: "stepped on the tail of the the lord's cat while delivering a package",
    base: {
      profession: 'courier'
    }
  },
  {
    reasonForPunishment: 'was caught attempting to sell a king a rotten cabbage.',
    base: {
      socialClass: 'peasantry'
    }
  },
  {
    reasonForPunishment: 'was caught while crossing the border on a stolen horse.',
    base: {
      socialClass: 'peasantry'
    }
  },
  {
    reasonForPunishment: 'is a prisoner of war.',
    base: {
      socialClass: 'commoner'
    }
  },
  {
    reasonForPunishment: 'was stealing from orphanages.',
    base: {
      background: 'criminal'
    }
  }
]
