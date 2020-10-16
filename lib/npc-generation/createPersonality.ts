import { dice } from '../src/dice'
import { random } from '../src/random'
import { assign } from '../src/utils'
import { NPC } from './_common'

export function createPersonality (npc: Partial<NPC>) {
  assign(npc, {
    trait: npc.trait || random(traits),
    calmTrait: npc.calmTrait || random(calmTraits),
    stressTrait: npc.stressTrait || random(stressTraits)
  })

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

const vocalPatterns: string[] = ['is incoherent except for a few key words', 'stutters', 'says ‘um’ a lot', 'says ‘like’ a lot', 'swears', "uses thee's and thou's", 'never stops to breathe', 'uses short, clipped sentences', 'talks in third person', "doesn't conjugate well (‘me make good soup’)", 'rolls R’s', 'never uses contractions', 'is whiny', 'obviously has a stuffy nose', 'tongue stuck to back of teeth', 'does so through clenched teeth', 'speaks in a sing-song voice', 'likes to rhyme', "spits on every 's' sound", 'makes all Th-sounds become Z-sounds', 'repeats the last few words of a sentence/thought (‘nice to meet you, meet you’)', 'uses full titles or descriptions of how he knows you (‘ellen-farmers-daughter is pretty’)', 'strings together adjectives/adverbs for more impact (‘wow, your dress is pretty-pretty!’ ‘I am short-short-short.’)', 'appends all non-proper nouns end with ‘en’/’sen’ (‘may I have some applesen?’ ‘I saw a big moosen!’)', 'speaks in such a way that all L-sounds become w-sounds', 'repeats the last word you say before responding', 'sings everything', 'does the wrong emphasis on the wrong syllables', 'pauses often', 'has a clipped pattern of speech', 'is rather monotonous', 'whistles on S-sounds', 'spits on Th-sounds and S-sounds (think Sylvester the cat from Looney toons)', 'has a light lisp', 'makes all r-sounds become w-sounds', 'has a severe underbite', 'has a severe overbite', 'speaks out of the corner of his mouth', 'is always pouting', 'makes ‘ar/er’ sounds become ‘aye’ sounds (fart will sound like fight, water will sound like watay)', 'makes soft letters elongated (‘ssssso, hhhhhhow are you?’)', 'slurs words', 'always has a full mouth while talking', 'sighs after each sentence', 'never uses am/is/are/was/were (‘I big.’ ‘She pretty.’)}', 'responds in the form of questions', 'mutters']
