import { PartialRecord } from '../../types'
import { applyFMtoTrait, Virtues, traitsData } from './getTraits'
import { dice } from '../../src/dice'
import { random } from '../../src/random'
import { assign, keys } from '../../src/utils'
import { NPC } from '../_common'

export function createPersonality (npc: Partial<NPC>) {
  for (const trait of keys(traitsData.virtueKey)) {
    if (npc.roll) {
      npc.roll.traits[trait] = dice(5, 19)
    }
  }

  assign(npc, {
    trait: npc.trait || random(traits),
    calmTrait: npc.calmTrait || random(calmTraits),
    stressTrait: npc.stressTrait || random(stressTraits)
  })

  if (npc.calmTrait in personalityTraits) {
    const calmTrait = personalityTraits[npc.calmTrait]
    for (const trait of keys(calmTrait.traits)) {
      applyFMtoTrait(trait, calmTrait.traits[trait] as number, npc as NPC)
    }
  }

  if (npc.stressTrait in personalityTraits) {
    const stressTrait = personalityTraits[npc.stressTrait]
    for (const trait of keys(stressTrait.traits)) {
      applyFMtoTrait(trait, stressTrait.traits[trait] as number, npc as NPC)
    }
  }

  if (!npc.vocalPattern) {
    if (dice(2, 50) >= 75) {
      assign(npc, {
        vocalPattern: random(vocalPatterns)
      })
    }
  }
}

const traits: string[] = ['fidgets', 'drinks too much', 'eats too much', 'swears often', 'has poor hygiene', 'cannot resist flirting', 'cannot stop staring at you', 'sweats profusely and easily', 'is a habitual liar', 'embellishes the truth', 'exaggerates details', 'has a short temper', 'is melodramatic', 'gossips about the most mundane things', 'cannot resist a juicy secret', 'chews with an open mouth', 'often sniffs audibly', 'is incredibly gullible', 'is skeptical of everything', 'paces about incessantly', 'makes poor eye contact', 'is a know it all', "corrects people's grammar when they speak", 'blinks constantly', 'bobs head back and forth when speaking', 'is often sarcastic', 'cannot resist making snide comments', 'loses train of thought easily', 'is always shaking']

const calmTraits: string[] = ['compassionate', 'cheerful', 'reserved', 'outspoken', 'uninterested', 'gruff', 'eager', 'deceitful', 'foolish', 'strict', 'agreeable', 'mischeivous', 'angry', 'fearful', 'manipulative', 'devout', 'greedy', 'funny', 'dour', 'fun-loving', 'lazy', 'driven', 'boastful', 'artistic', 'assertive', 'carefree', 'cautious', 'confident', 'thoughtful', 'loyal', 'sophisticated', 'weak-willed']

const stressTraits: string[] = ['withdrawn', 'murderous', 'obsessive', 'authoritarian', 'determined', 'brave', 'spiteful', 'belligerent', 'caustic', 'reckless', 'argumentative', 'gluttonous', 'overly protective', 'angry', 'cowardly', 'meticulous', 'sarcastic', 'stubborn', 'destructive', 'practical', 'pushy', 'fanatical', 'secretive', 'scornful', 'courageous', 'impractical', 'calculating', 'industrious', 'manipulative', 'destructive', 'compulsive', 'intolerant']

type TraitType = 'calm' | 'stress'

interface Traits {
  /** This should be the same as the key. */
  key: string,
  /**
   * Probability for the trait being drawn.
   * @default 10
   */
  probability?: number
  /**
   * Whether the trait manifests when the NPC is calm or stressed.
   */
  type: TraitType[]
  /**
   * List of the traits, which are used as Fairmath modifiers.
   */
  traits: PartialRecord<Virtues, number>
}

export const personalityTraits: Record<string, Traits> = {
  'compassionate': {
    key: 'compassionate',
    type: ['calm'],
    traits: {
      merciful: 70,
      trusting: 60,
      forgiving: 65,
      generous: 80
    }
  },
  'cheerful': {
    key: 'cheerful',
    type: ['calm'],
    traits: {
      trusting: 70,
      energetic: 80,
      prudent: -30,
      temperate: -20
    }
  },
  'reserved': {
    key: 'reserved',
    type: ['calm'],
    traits: {
      generous: -20,
      just: 30,
      // pious: 30,
      temperate: 70,
      trusting: -20,
      valorous: -10
    }
  },
  'outspoken': {
    key: 'outspoken',
    type: ['calm'],
    traits: {
      energetic: 30,
      modest: -40,
      prudent: -30,
      temperate: -20,
      valorous: 30
    }
  },
  'uninterested': {
    key: 'uninterested',
    type: ['calm'],
    traits: {
      energetic: -30,
      modest: 20,
      temperate: 20,
      valorous: -10
    }
  },
  'gruff': {
    key: 'gruff',
    type: ['calm'],
    traits: {
      forgiving: -10,
      generous: -30,
      prudent: 20,
      trusting: -30
    }
  },
  'eager': {
    key: 'eager',
    type: ['calm'],
    traits: {
      energetic: 80,
      trusting: 40,
      valorous: 30
    }
  },
  'deceitful': {
    key: 'deceitful',
    type: ['calm'],
    traits: {
      honest: -80,
      valorous: -20,
      generous: -20
    }
  },
  'foolish': {
    key: 'foolish',
    type: ['calm', 'stress'],
    traits: {
      honest: 20,
      prudent: -80,
      temperate: -30,
      trusting: 50,
      valorous: 30
    }
  },
  'strict': {
    key: 'strict',
    type: ['calm'],
    traits: {
      just: 60,
      modest: -40,
      prudent: 80,
      trusting: -30,
      // pious: 40,
      chaste: 30
    }
  },
  'agreeable': {
    key: 'agreeable',
    type: ['calm'],
    traits: {
      chaste: -30,
      forgiving: 30,
      generous: 40
    }
  },
  'mischeivous': {
    key: 'mischeivous',
    type: ['calm'],
    traits: {
      chaste: -40,
      just: -30,
      generous: -20,
      temperate: -30
    }
  },
  'fearful': {
    key: 'fearful',
    type: ['calm'],
    traits: {
      valorous: -90,
      trusting: -60,
      prudent: 60,
      temperate: 20
    }
  },
  'manipulative': {
    key: 'manipulative',
    type: ['calm', 'stress'],
    traits: {
      valorous: -30,
      trusting: -30,
      generous: -30,
      merciful: -20,
      forgiving: -20
    }
  },
  'devout': {
    key: 'devout',
    type: ['calm'],
    traits: {
      // pious: 80,
      chaste: 50,
      temperate: 40,
      modest: 40
    }
  },
  'greedy': {
    key: 'greedy',
    type: ['calm'],
    traits: {
      generous: -40,
      temperate: -90
    }
  },
  'funny': {
    key: 'funny',
    type: ['calm'],
    traits: {
      energetic: 30,
      generous: 10
    }
  },
  'dour': {
    key: 'dour',
    type: ['calm'],
    traits: {
      // pious: -20,
      generous: -10,
      energetic: -20,
      trusting: -20
    }
  },
  'fun-loving': {
    key: 'fun-loving',
    type: ['calm'],
    traits: {
      chaste: -50,
      energetic: 50,
      generous: -10,
      prudent: -20,
      trusting: 10
    }
  },
  'lazy': {
    key: 'lazy',
    type: ['calm'],
    traits: {
      energetic: -60,
      generous: -10,
      temperate: -20
    }
  },
  'driven': {
    key: 'driven',
    type: ['calm'],
    traits: {
      energetic: 50,
      modest: -10,
      // pious: 10,
      generous: -10
    }
  },
  'boastful': {
    key: 'boastful',
    type: ['calm'],
    traits: {
      generous: -10,
      modest: -90,
      valorous: 40
    }
  },
  'artistic': {
    key: 'artistic',
    type: ['calm'],
    traits: {
      chaste: -20
      // pious: -40
    }
  },
  'assertive': {
    key: 'assertive',
    type: ['calm'],
    traits: {
      energetic: 40,
      generous: -10,
      // pious: 20,
      temperate: -10,
      trusting: -10,
      valorous: 30
    }
  },
  'carefree': {
    key: 'carefree',
    type: ['calm'],
    traits: {
      energetic: 40,
      just: -20,
      prudent: -70,
      trusting: 60,
      forgiving: 50,
      chaste: -40
    }
  },
  'cautious': {
    key: 'cautious',
    type: ['calm'],
    traits: {
      trusting: -60,
      generous: -10,
      prudent: 90,
      temperate: 60,
      valorous: -50
    }
  },
  'confident': {
    key: 'confident',
    type: ['calm'],
    traits: {
      valorous: 60,
      prudent: -10,
      energetic: 30
    }
  },
  'thoughtful': {
    key: 'thoughtful',
    type: ['calm'],
    traits: {
      // pious: 10,
      merciful: 40,
      generous: 30,
      forgiving: 20
    }
  },
  'loyal': {
    key: 'loyal',
    type: ['calm'],
    traits: {
      trusting: 60,
      prudent: -10,
      merciful: 20,
      forgiving: 10
    }
  },
  'sophisticated': {
    key: 'sophisticated',
    type: ['calm'],
    traits: {
      modest: -40,
      // pious: 30,
      honest: -10,
      forgiving: -10,
      temperate: -10
    }
  },
  'weak-willed': {
    key: 'weak-willed',
    type: ['calm'],
    traits: {
      temperate: -60,
      chaste: -50,
      valorous: -10
    }
  },
  'withdrawn': {
    key: 'withdrawn',
    type: ['stress'],
    traits: {
      energetic: -30,
      just: -10
      // pious: 30
    }
  },
  'murderous': {
    key: 'murderous',
    type: ['stress'],
    traits: {
      forgiving: -50,
      merciful: -50,
      trusting: -10
    }
  },
  'obsessive': {
    key: 'obsessive',
    type: ['stress'],
    traits: {
      trusting: -80,
      honest: -30,
      // pious: 40,
      prudent: 30
    }
  },
  'authoritarian': {
    key: 'authoritarian',
    type: ['stress'],
    traits: {
      honest: -20,
      modest: -40,
      // pious: 10,
      forgiving: -20,
      generous: -10
    }
  },
  'determined': {
    key: 'determined',
    type: ['stress'],
    traits: {
      prudent: 50,
      just: 40,
      energetic: 20,
      valorous: 60
    }
  },
  'brave': {
    key: 'brave',
    type: ['stress'],
    traits: {
      generous: 40,
      just: 30,
      modest: 20,
      valorous: 60
    }
  },
  'spiteful': {
    key: 'spiteful',
    type: ['stress'],
    traits: {
      forgiving: -40,
      generous: -30,
      trusting: -30
    }
  },
  'belligerent': {
    key: 'belligerent',
    type: ['stress'],
    traits: {
      forgiving: -30,
      honest: -20,
      modest: -10
    }
  },
  'caustic': {
    key: 'caustic',
    type: ['stress'],
    traits: {
      modest: -10,
      forgiving: -40,
      prudent: -10,
      temperate: -10
    }
  },
  'reckless': {
    key: 'reckless',
    type: ['stress'],
    traits: {
      prudent: -70,
      temperate: -20,
      just: -20
    }
  },
  'argumentative': {
    key: 'argumentative',
    type: ['stress'],
    traits: {
      generous: -10,
      merciful: -20,
      honest: -20
    }
  },
  'gluttonous': {
    key: 'gluttonous',
    type: ['stress'],
    traits: {
      generous: -40,
      energetic: -50
    }
  },
  'overly protective': {
    key: 'overly protective',
    type: ['stress'],
    traits: {
      prudent: 50,
      // pious: 20,
      generous: 30,
      forgiving: -20,
      trusting: -30
    }
  },
  'angry': {
    key: 'angry',
    type: ['stress', 'calm'],
    traits: {
      temperate: -40,
      merciful: -40,
      prudent: -10,
      forgiving: -30
    }
  },
  'cowardly': {
    key: 'cowardly',
    type: ['stress'],
    traits: {
      valorous: -70,
      trusting: -20,
      generous: -10
    }
  },
  'meticulous': {
    key: 'meticulous',
    type: ['stress'],
    traits: {
      prudent: 60,
      trusting: -30,
      just: 40
    }
  },
  'sarcastic': {
    key: 'sarcastic',
    type: ['stress'],
    traits: {
      merciful: -20,
      modest: -20,
      temperate: -10
    }
  },
  'stubborn': {
    key: 'stubborn',
    type: ['stress'],
    traits: {
      modest: -30,
      prudent: -30,
      trusting: -30
    }
  },
  'destructive': {
    key: 'destructive',
    type: ['stress'],
    traits: {
      merciful: -30,
      just: -60,
      prudent: -50
    }
  },
  'practical': {
    key: 'practical',
    type: ['stress'],
    traits: {
      prudent: 70,
      energetic: 10,
      just: 20
    }
  },
  'pushy': {
    key: 'pushy',
    type: ['stress'],
    traits: {
      energetic: 10,
      modest: -30,
      temperate: -10,
      just: -30
    }
  },
  'fanatical': {
    key: 'fanatical',
    type: ['stress'],
    traits: {
      just: -50,
      prudent: -50,
      energetic: 30
      // pious: 30
    }
  },
  'secretive': {
    key: 'secretive',
    type: ['stress'],
    traits: {
      trusting: -40,
      honest: -70
    }
  },
  'scornful': {
    key: 'scornful',
    type: ['stress'],
    traits: {
      merciful: -30,
      just: -20
    }
  },
  'courageous': {
    key: 'courageous',
    type: ['stress'],
    traits: {
      generous: 30,
      prudent: -30,
      valorous: 50
    }
  },
  'impractical': {
    key: 'impractical',
    type: ['stress'],
    traits: {
      prudent: -60,
      // pious: 30,
      just: -10
    }
  },
  'calculating': {
    key: 'calculating',
    type: ['stress'],
    traits: {
      just: 30,
      honest: -20,
      trusting: -10,
      modest: -10
    }
  },
  'industrious': {
    key: 'industrious',
    type: ['stress'],
    traits: {
      energetic: 40,
      modest: 30,
      prudent: 10,
      temperate: 40
    }
  },
  'compulsive': {
    key: 'compulsive',
    type: ['stress'],
    traits: {
      just: -40,
      generous: -10,
      prudent: -60
    }
  },
  'intolerant': {
    key: 'intolerant',
    type: ['stress'],
    traits: {
      // pious: 40,
      trusting: -40,
      forgiving: -30
    }
  }
}

const vocalPatterns: string[] = ['is incoherent except for a few key words', 'stutters', 'says ‘um’ a lot', 'says ‘like’ a lot', 'swears', "uses thee's and thou's", 'never stops to breathe', 'uses short, clipped sentences', 'talks in third person', "doesn't conjugate well (‘me make good soup’)", 'rolls R’s', 'never uses contractions', 'is whiny', 'obviously has a stuffy nose', 'tongue stuck to back of teeth', 'does so through clenched teeth', 'speaks in a sing-song voice', 'likes to rhyme', "spits on every 's' sound", 'makes all Th-sounds become Z-sounds', 'repeats the last few words of a sentence/thought (‘nice to meet you, meet you’)', 'uses full titles or descriptions of how he knows you (‘ellen-farmers-daughter is pretty’)', 'strings together adjectives/adverbs for more impact (‘wow, your dress is pretty-pretty!’ ‘I am short-short-short.’)', 'appends all non-proper nouns end with ‘en’/’sen’ (‘may I have some applesen?’ ‘I saw a big moosen!’)', 'speaks in such a way that all L-sounds become w-sounds', 'repeats the last word you say before responding', 'sings everything', 'does the wrong emphasis on the wrong syllables', 'pauses often', 'has a clipped pattern of speech', 'is rather monotonous', 'whistles on S-sounds', 'spits on Th-sounds and S-sounds (think Sylvester the cat from Looney toons)', 'has a light lisp', 'makes all r-sounds become w-sounds', 'has a severe underbite', 'has a severe overbite', 'speaks out of the corner of his mouth', 'is always pouting', 'makes ‘ar/er’ sounds become ‘aye’ sounds (fart will sound like fight, water will sound like watay)', 'makes soft letters elongated (‘ssssso, hhhhhhow are you?’)', 'slurs words', 'always has a full mouth while talking', 'sighs after each sentence', 'never uses am/is/are/was/were (‘I big.’ ‘She pretty.’)}', 'responds in the form of questions', 'mutters']
