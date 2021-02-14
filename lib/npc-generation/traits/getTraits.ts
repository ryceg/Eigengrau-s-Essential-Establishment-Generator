import { ThresholdTable } from 'lib/src/rollFromTable'
import { NPC } from '../_common'

interface SanitizedVirtue {
  wasVice: boolean
  virtue: Virtues
}

export const traits = {
  virtueKey: {
    chaste: 'lustful',
    energetic: 'lazy',
    forgiving: 'vengeful',
    generous: 'selfish',
    honest: 'deceitful',
    just: 'arbitrary',
    merciful: 'cruel',
    modest: 'proud',
    pious: 'worldly',
    prudent: 'reckless',
    temperate: 'indulgent',
    trusting: 'suspicious',
    valorous: 'cowardly'
  },
  viceKey: {
    lustful: 'chaste',
    lazy: 'energetic',
    vengeful: 'forgiving',
    selfish: 'generous',
    deceitful: 'honest',
    arbitrary: 'just',
    cruel: 'merciful',
    proud: 'modest',
    worldly: 'pious',
    reckless: 'prudent',
    indulgent: 'temperate',
    suspicious: 'trusting',
    cowardly: 'valorous'
  }
}

export type Virtues = keyof typeof traits['virtueKey']
export type Vices = keyof typeof traits['viceKey']
export type VirtuesVices = Virtues | Vices

/**
 * @usage 'is _____'
 */
export const traitDescriptions: Record<Virtues, ThresholdTable<string>> = {
  chaste: [
    [19, ' '],
    [18, ' '],
    [17, ' '],
    [16, ' '],
    [15, ' '],
    [14, ' '],
    [13, ''],
    [12, ''],
    [11, ''],
    [10, ''],
    [9, ''],
    [8, ''],
    [7, ''],
    [6, ' '],
    [5, ' '],
    [4, ' '],
    [3, ' '],
    [2, ' '],
    [1, ' ']
  ],
  energetic: [
    [19, ' '],
    [18, ' '],
    [17, ' '],
    [16, ' '],
    [15, ' '],
    [14, ' '],
    [13, ''],
    [12, ''],
    [11, ''],
    [10, ''],
    [9, ''],
    [8, ''],
    [7, ''],
    [6, ' '],
    [5, ' '],
    [4, ' '],
    [3, ' '],
    [2, ' '],
    [1, ' ']
  ],
  forgiving: [
    [19, ' '],
    [18, ' '],
    [17, ' '],
    [16, ' '],
    [15, ' '],
    [14, ' '],
    [13, ''],
    [12, ''],
    [11, ''],
    [10, ''],
    [9, ''],
    [8, ''],
    [7, ''],
    [6, ' '],
    [5, ' '],
    [4, ' '],
    [3, ' '],
    [2, ' '],
    [1, ' ']
  ],
  generous: [
    [19, 'generous without limit'],
    [18, 'generous to a fault'],
    [17, 'extremely selfless'],
    [16, 'selfless'],
    [15, 'very generous'],
    [14, 'generous'],
    [13, ''],
    [12, ''],
    [11, ''],
    [10, ''],
    [9, ''],
    [8, ''],
    [7, ''],
    [6, 'selfish'],
    [5, 'self-centered'],
    [4, 'very self centered'],
    [3, 'incredibly selfish'],
    [2, 'narcissistic'],
    [1, 'perfectly narcissistic']
  ],
  honest: [
    [19, ' '],
    [18, ' '],
    [17, ' '],
    [16, ' '],
    [15, ' '],
    [14, ' '],
    [13, ''],
    [12, ''],
    [11, ''],
    [10, ''],
    [9, ''],
    [8, ''],
    [7, ''],
    [6, ' '],
    [5, ' '],
    [4, ' '],
    [3, ' '],
    [2, ' '],
    [1, ' ']
  ],
  just: [
    [19, ' '],
    [18, ' '],
    [17, ' '],
    [16, ' '],
    [15, ' '],
    [14, ' '],
    [13, ''],
    [12, ''],
    [11, ''],
    [10, ''],
    [9, ''],
    [8, ''],
    [7, ''],
    [6, ' '],
    [5, ' '],
    [4, ' '],
    [3, ' '],
    [2, ' '],
    [1, ' ']
  ],
  merciful: [
    [19, ' '],
    [18, ' '],
    [17, ' '],
    [16, ' '],
    [15, ' '],
    [14, ' '],
    [13, ''],
    [12, ''],
    [11, ''],
    [10, ''],
    [9, ''],
    [8, ''],
    [7, ''],
    [6, ' '],
    [5, ' '],
    [4, ' '],
    [3, ' '],
    [2, ' '],
    [1, ' ']
  ],
  modest: [
    [19, ' '],
    [18, ' '],
    [17, ' '],
    [16, ' '],
    [15, ' '],
    [14, ' '],
    [13, ''],
    [12, ''],
    [11, ''],
    [10, ''],
    [9, ''],
    [8, ''],
    [7, ''],
    [6, ' '],
    [5, ' '],
    [4, ' '],
    [3, ' '],
    [2, ' '],
    [1, ' ']
  ],
  pious: [
    [19, 'unshakingly faithful'],
    [18, ' '],
    [17, ' '],
    [16, ' '],
    [15, ' '],
    [14, ' '],
    [13, ''],
    [12, ''],
    [11, ''],
    [10, ''],
    [9, ''],
    [8, ''],
    [7, ''],
    [6, ' '],
    [5, ' '],
    [4, ' '],
    [3, ' '],
    [2, ' '],
    [1, ' ']
  ],
  prudent: [
    [19, ' '],
    [18, ' '],
    [17, ' '],
    [16, ' '],
    [15, ' '],
    [14, ' '],
    [13, ''],
    [12, ''],
    [11, ''],
    [10, ''],
    [9, ''],
    [8, ''],
    [7, ''],
    [6, ' '],
    [5, ' '],
    [4, ' '],
    [3, ' '],
    [2, ' '],
    [1, ' ']
  ],
  temperate: [
    [19, ' '],
    [18, ' '],
    [17, ' '],
    [16, ' '],
    [15, ' '],
    [14, ' '],
    [13, ''],
    [12, ''],
    [11, ''],
    [10, ''],
    [9, ''],
    [8, ''],
    [7, ''],
    [6, ' '],
    [5, ' '],
    [4, ' '],
    [3, ' '],
    [2, ' '],
    [1, ' ']
  ],
  trusting: [
    [19, ' '],
    [18, ' '],
    [17, ' '],
    [16, ' '],
    [15, ' '],
    [14, ' '],
    [13, ''],
    [12, ''],
    [11, ''],
    [10, ''],
    [9, ''],
    [8, ''],
    [7, ''],
    [6, ' '],
    [5, ' '],
    [4, ' '],
    [3, ' '],
    [2, ' '],
    [1, ' ']
  ],
  valorous: [
    [19, ' '],
    [18, ' '],
    [17, ' '],
    [16, ' '],
    [15, ' '],
    [14, ' '],
    [13, ''],
    [12, ''],
    [11, ''],
    [10, ''],
    [9, ''],
    [8, ''],
    [7, ''],
    [6, ' '],
    [5, ' '],
    [4, ' '],
    [3, ' '],
    [2, ' '],
    [1, ' ']
  ]
}

export const personalityTraitExists = (personalityTrait: string) => {
  return Object.keys(lib.personalityTraits).includes(personalityTrait)
}

const isVice = (trait: VirtuesVices) => {
  const virtues = Object.keys(lib.traits.virtueKey)
  if (virtues.includes(trait)) return false
  return true
}

const getVirtue = (trait: VirtuesVices): SanitizedVirtue => {
  if (!isVice(trait)) return { wasVice: false, virtue: trait as Virtues }
  const correspondingVirtue = getInverseTrait(trait)
  return { wasVice: true, virtue: correspondingVirtue as Virtues }
}

const getInverseTrait = (trait: VirtuesVices) => {
  if (isVice(trait)) return lib.traits.viceKey[trait as Vices] as Virtues
  return lib.traits.virtueKey[trait as Virtues] as Vices
}

export const getTrait = (trait: VirtuesVices, npc: NPC) => {
  const sanitizedVirtue = getVirtue(trait)
  if (sanitizedVirtue.wasVice === false) return sanitizeTraitValues(npc.roll.traits[trait as Virtues])
  const correspondingVirtue = getVirtue(trait)
  return sanitizeTraitValues(npc.roll.traits[correspondingVirtue.virtue])
}

const sanitizeTraitValues = (amount: number, humanized?: boolean) => {
  if (humanized) return Math.clamp(amount / 5, 1, 19)
  return Math.clamp(amount, 5, 95)
}

export const applyFMtoTrait = (trait: VirtuesVices, amount: number, npc: NPC) => {
  if (!isVice(trait)) {
    npc.roll.traits[trait as Virtues] = sanitizeTraitValues(lib.fm(npc.roll.traits[trait as Virtues], amount))
  } else {
    const correspondingVirtue = getInverseTrait(trait) as Virtues
    npc.roll.traits[correspondingVirtue] = sanitizeTraitValues(lib.fm(npc.roll.traits[correspondingVirtue], -amount))
  }
}
