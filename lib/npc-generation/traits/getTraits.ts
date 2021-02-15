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

export const getTrait = (trait: VirtuesVices, npc: NPC, humanized?: boolean) => {
  const sanitizedVirtue = getVirtue(trait)
  if (sanitizedVirtue.wasVice === false) return sanitizeTraitValues(npc.roll.traits[trait as Virtues])
  const correspondingVirtue = getVirtue(trait)
  return sanitizeTraitValues(npc.roll.traits[correspondingVirtue.virtue], humanized)
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
