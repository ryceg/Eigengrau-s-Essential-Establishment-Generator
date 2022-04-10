
import { NPC } from '../npc-generation/_common'

interface DungeonJailer {
  type: string
  base: Partial<NPC>
}

interface DungeonJailerData {
  types: DungeonJailer[]
  base: Partial<NPC>
}

export const dungeonJailer: DungeonJailerData = {
  types: [
    {
      type: 'a bright-eyed youth, easily seduced',
      base: {
        ageStage: 'young adult',
        calmTrait: 'gullible'
      }
    },
    {
      type: "a noble's son, punished with the job for misconduct",
      base: {
        ageStage: 'young adult',
        gender: 'man',
        socialClass: 'nobility',
        background: 'noble'
      }
    },
    {
      type: 'a middle-aged woman, loyal to the job because she is providing for her family',
      base: {
        gender: 'woman',
        ageStage: 'settled adult',
        socialClass: 'commoner'
      }
    },
    {
      type: 'a deformed wretch of a person, forced to work in the dungeon to keep them out of the way',
      base: {
        physicalTrait: 'a hideous deformity'
      }
    },
    {
      type: 'a haunted woman who applied to job to ulitmately free their lover, only for them to die before she had the chance',
      base: {
        gender: 'woman',
        calmTrait: 'quiet',
        ageStage: 'settled adult'
      }
    },
    {
      type: 'a blind man who can hear every whispered plot the prisoners make',
      base: {
        gender: 'man',
        ageStage: 'settled adult',
        socialClass: 'commoner',
        physicalTrait: 'two glass eyes that never move',
        eyes: 'glass'
      }
    },
    {
      type: 'an old man who has seen every trick in the book - and has learnt how to stop them',
      base: {
        gender: 'man',
        ageStage: 'elderly',
        socialClass: 'commoner'
      }
    },
    {
      type: 'a holy man whose god demands they bind the wicked',
      base: {
        gender: 'man',
        ageStage: 'settled adult',
        socialClass: 'commoner',
        religion: {
          strength: 'unshakingly devoted believer',
          deity: ''
        }
      }
    },
    {
      type: 'a repentant thief, who made a living jail-breaking, only to release the worst serial killer in the land',
      base: {
        background: 'criminal',
        profession: 'ex-criminal'
      }
    },
    {
      type: "a bard, who sings the worst songs to to the prisoners (who are referred to as 'the audience')",
      base: {
        background: 'entertainer'
      }
    },
    {
      type: 'a wizard, who has been promised both living subjects and cadavers for experimentation',
      base: {
        background: 'sage',
        profession: 'wizard'
      }
    },
    {
      type: 'an alchemist, who keeps the rowdy prisoners dosed with potions',
      base: {
        profession: 'alchemist'
      }
    },
    {
      type: 'an honour-bound warrior, who made a promise to the lord to do their bidding',
      base: {
        profession: 'fighter',
        calmTrait: 'solemnn'
      }
    },
    {
      type: 'a person whose family has been jailers for the past three centuries',
      base: {
        socialClass: 'commoner'
      }
    }
  ],
  base: {
    profession: 'jailer'
  }
}
