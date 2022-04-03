import { fm } from '../../src/dice'
import { NPC } from '../_common'

export const traitsData = {
  virtueKey: {
    chaste: 'lustful',
    energetic: 'lazy',
    forgiving: 'vengeful',
    generous: 'selfish',
    honest: 'deceitful',
    just: 'arbitrary',
    merciful: 'cruel',
    modest: 'proud',
    // pious: 'worldly',
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
    // worldly: 'pious',
    reckless: 'prudent',
    indulgent: 'temperate',
    suspicious: 'trusting',
    cowardly: 'valorous'
  }
}

export type Virtues = keyof typeof traitsData['virtueKey']

export type Vices = keyof typeof traitsData['viceKey']

type Trait = Virtues | Vices

export function getTrait (trait: Trait, npc: NPC, humanized?: boolean) {
  if (isVice(trait)) {
    const virtue = getInverseTrait(trait) as Virtues
    return sanitizeTraitValues(npc.roll.traits[virtue], humanized)
  }
  return sanitizeTraitValues(npc.roll.traits[trait], humanized)
}

export function applyFMtoTrait (trait: Trait, amount: number, npc: NPC) {
  if (isVice(trait)) {
    const virtue = getInverseTrait(trait) as Virtues
    npc.roll.traits[virtue] = sanitizeTraitValues(fm(npc.roll.traits[virtue], -amount))
  } else {
    npc.roll.traits[trait] = sanitizeTraitValues(fm(npc.roll.traits[trait], amount))
  }
}

function isVice (trait: Trait): trait is Vices {
  return trait in traitsData.viceKey
}

function getInverseTrait (trait: Trait) {
  if (isVice(trait)) {
    return traitsData.viceKey[trait]
  }
  return traitsData.virtueKey[trait]
}

function sanitizeTraitValues (amount: number, humanized?: boolean) {
  if (humanized) {
    return Math.clamp(amount / 5, 1, 19)
  }
  return Math.clamp(amount, 5, 95)
}
