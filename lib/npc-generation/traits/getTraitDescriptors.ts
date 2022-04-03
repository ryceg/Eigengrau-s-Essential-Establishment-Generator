import { keys } from '../../src/utils'
import { NPC } from '../../npc-generation/_common'
import { getRolledFromTable, ThresholdTable } from '../../src/rollFromTable'
import { getTrait, Virtues } from './getTraits'

/**
 * @usage 'is _____'
 */
export const traitDescriptions: Record<Virtues, ThresholdTable<string>> = {
  chaste: [
    [19, 'totally asexual'],
    [18, 'asexual'],
    [17, 'pure of thought'],
    [16, 'relatively pure of thought'],
    [15, 'chaste'],
    [14, 'mostly chaste'],
    [13, ''],
    [12, ''],
    [11, ''],
    [10, ''],
    [9, ''],
    [8, ''],
    [7, ''],
    [6, 'prone to lust'],
    [5, 'sometimes lustful'],
    [4, 'often lustful'],
    [3, 'constantly thinking lusty thoughts'],
    [2, 'unable to avoid lusty thoughts'],
    [1, 'totally beholden to lust']
  ],
  energetic: [
    [19, 'a veritable never-ending fountain of energy'],
    [18, 'full of energy'],
    [17, 'bright and energetic'],
    [16, 'energetic'],
    [15, 'perky'],
    [14, 'switched-on'],
    [13, ''],
    [12, ''],
    [11, ''],
    [10, ''],
    [9, 'un-energetic'],
    [8, 'listless'],
    [7, 'lethargic'],
    [6, 'work-shy'],
    [5, 'languid'],
    [4, 'slothful'],
    [3, 'lazy'],
    [2, 'torpid'],
    [1, 'virtually catatonic']
  ],
  forgiving: [
    [19, 'clement'],
    [18, 'forgiving'],
    [17, 'lenient'],
    [16, 'pitying'],
    [15, 'compassionate'],
    [14, 'soft-hearted'],
    [13, ''],
    [12, ''],
    [11, ''],
    [10, ''],
    [9, ''],
    [8, ''],
    [7, ''],
    [6, 'implacable'],
    [5, 'resentful'],
    [4, 'blame-prone'],
    [3, 'always eager to lay blame'],
    [2, 'unforgiving'],
    [1, 'vengeful']
  ],
  generous: [
    [19, 'magnanimous'],
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
    [19, 'incapable of telling a lie'],
    [18, 'authentic'],
    [17, 'honest'],
    [16, 'sincere'],
    [15, 'forthright'],
    [14, 'straightforward'],
    [13, ''],
    [12, ''],
    [11, ''],
    [10, ''],
    [9, ''],
    [8, ''],
    [7, ''],
    [6, 'prone to lying'],
    [5, 'underhanded'],
    [4, 'untruthful'],
    [3, 'deceptive'],
    [2, 'deceitful'],
    [1, 'able to lie as readily as breathe']
  ],
  just: [
    [19, 'totally fair'],
    [18, 'just'],
    [17, 'equitable'],
    [16, 'fair-minded'],
    [15, 'fair'],
    [14, 'nondiscriminatory'],
    [13, ''],
    [12, ''],
    [11, ''],
    [10, ''],
    [9, ''],
    [8, ''],
    [7, ''],
    [6, 'inconsistent'],
    [5, 'erratic'],
    [4, 'subjective'],
    [3, 'irresponsible'],
    [2, 'willful'],
    [1, 'capricious']
  ],
  merciful: [
    [19, 'a veritable bleeding heart'],
    [18, 'tenderhearted'],
    [17, 'merciful'],
    [16, 'lenient'],
    [15, 'charitable'],
    [14, 'not prone to any sort of cruelty'],
    [13, ''],
    [12, ''],
    [11, ''],
    [10, ''],
    [9, ''],
    [8, ''],
    [7, ''],
    [6, 'unkind'],
    [5, 'callous'],
    [4, 'merciless'],
    [3, 'cruel'],
    [2, 'wickedly cruel'],
    [1, 'cold-blooded']
  ],
  modest: [
    [19, 'totally humble'],
    [18, 'content to not be the centre of attention'],
    [17, 'simple and unassuming'],
    [16, 'modest'],
    [15, 'bashful in the face of praise'],
    [14, 'unpretentious'],
    [13, ''],
    [12, ''],
    [11, ''],
    [10, ''],
    [9, ''],
    [8, 'pretentious'],
    [7, 'cavalier'],
    [6, 'prone to boasting'],
    [5, 'self-important'],
    [4, 'boastful'],
    [3, 'proud'],
    [2, 'conceited'],
    [1, 'narcissistic']
  ],
  // pious: [
  //   [19, 'a true born-again'],
  //   [18, 'sanctimonious'],
  //   [17, 'unshakingly faithful'],
  //   [16, 'saintly'],
  //   [15, 'devout'],
  //   [14, 'pious'],
  //   [13, ''],
  //   [12, ''],
  //   [11, ''],
  //   [10, ''],
  //   [9, ''],
  //   [8, ''],
  //   [7, ''],
  //   [6, 'agnostic'],
  //   [5, 'atheistic'],
  //   [4, 'impious'],
  //   [3, 'worldly'],
  //   [2, 'ungodly'],
  //   [1, 'blasphemous']
  // ],
  prudent: [
    [19, 'always thinking twice'],
    [18, 'vigilant'],
    [17, 'prudent'],
    [16, 'cautious'],
    [15, 'careful'],
    [14, 'shrewd'],
    [13, ''],
    [12, ''],
    [11, ''],
    [10, ''],
    [9, ''],
    [8, ''],
    [7, ''],
    [6, 'carefree'],
    [5, 'careless'],
    [4, 'imprudent'],
    [3, 'brash'],
    [2, 'reckless'],
    [1, 'foolhardy']
  ],
  temperate: [
    [19, 'able to withstand any temptation'],
    [18, 'unlikely to give in to temptation'],
    [17, 'temperate'],
    [16, 'restrained'],
    [15, 'controlled and sober'],
    [14, 'moderate'],
    [13, ''],
    [12, ''],
    [11, ''],
    [10, ''],
    [9, ''],
    [8, ''],
    [7, ''],
    [6, 'prone to indulging'],
    [5, 'somewhat hedonistic'],
    [4, 'indulgent'],
    [3, 'self-indulgent'],
    [2, 'hedonistic'],
    [1, 'unable to control any urges']
  ],
  trusting: [
    [19, 'like a puppy, instantly trusting'],
    [18, 'unlikely to doubt'],
    [17, 'trusting'],
    [16, 'quick to believe'],
    [15, 'always assuming the best of people'],
    [14, 'not prone to suspicion'],
    [13, ''],
    [12, ''],
    [11, ''],
    [10, ''],
    [9, ''],
    [8, ''],
    [7, ''],
    [6, 'leery and watchful'],
    [5, 'mistrustful'],
    [4, 'prone to suspicion'],
    [3, 'always doubting people'],
    [2, 'slow to believe in people'],
    [1, 'suspicious of people']
  ],
  valorous: [
    [19, 'the epitome of bravery'],
    [18, 'valorous'],
    [17, 'brave'],
    [16, 'courageous'],
    [15, 'fearless'],
    [14, 'gallant'],
    [13, 'confident'],
    [12, ''],
    [11, ''],
    [10, ''],
    [9, ''],
    [8, ''],
    [7, ''],
    [6, 'apprehensive'],
    [5, 'lily-livered'],
    [4, 'fainthearted'],
    [3, 'spineless'],
    [2, 'cowardly'],
    [1, 'craven']
  ]
}

interface TraitDescriptions {
  trait: Virtues
  result: string
  roll: number
}

const getTraitPositiveOrNegative = (firstTrait: number, secondTrait: number) => {
  if (Math.abs(firstTrait - secondTrait) > 9) return 'but'
  return 'and'
}

const getTraitDescription = (trait: Virtues, roll: number) => {
  return getRolledFromTable(traitDescriptions[trait], roll)
}

const getAllTraits = (npc: NPC) => {
  const traitDescriptions: TraitDescriptions[] = []
  for (const trait of keys(npc.roll.traits)) {
    const roll = getTrait(trait, npc, true)
    // const roll = Math.clamp(npc.roll.traits[trait] / 5, 1, 19)
    const result = getTraitDescription(trait, roll)
    if (result) {
      traitDescriptions.push({ trait, roll, result })
    }
  }
  return traitDescriptions
}

const parseTraitIntoTop = (npc: NPC, traits: TraitDescriptions[], targetLength = 4) => {
  let result = ''
  if (traits.length < targetLength) targetLength = traits.length
  if (targetLength === 0) return ''
  if (targetLength < 4) return `${lib.makeList(traits.slice(0, targetLength).map(trait => trait.result))}.`
  for (let i = 0; i < targetLength - 1; i++) {
    let and
    if (i > 0) and = getTraitPositiveOrNegative(traits[i - 1].roll, traits[i].roll)
    if (i < targetLength - 2) {
      if (and === 'and') {
        result += `${traits[i]?.result}, `
      } else if (and === 'but') {
        result += `but is ${traits[i]?.result}`
        if (i < targetLength - 3) {
          result += `. ${npc.heshe.toUpperFirst()} also is `
        } else {
          result += ', '
        }
      } else {
        result += `${traits[i]?.result}, `
      }
    } else if (i < targetLength - 3) {
      if (and === 'but') {
        result += `but is ${traits[i]?.result}`
      } else if (and === 'and') {
        result += `${traits[i]?.result}, and `
      } else {
        result += `${traits[i]?.result}, and `
      }
    }
  }
  if (traits[targetLength].result) result += traits[targetLength].result
  result += '.'
  return result
}

const filterTraits = (traits: TraitDescriptions[]) => {
  return traits.filter(trait => Math.abs(trait.roll - 10) > 5)
}

const sortTraitListByMostExtreme = (traits: TraitDescriptions[]) => {
  const middlePoint = 10
  return traits.sort((a, b) => Math.abs(a.roll - middlePoint) - Math.abs(b.roll - middlePoint))
}

export const getTraitsReadout = (npc: NPC) => {
  const traitDescriptions = filterTraits(sortTraitListByMostExtreme(getAllTraits(npc)))
  return parseTraitIntoTop(npc, traitDescriptions)
}
