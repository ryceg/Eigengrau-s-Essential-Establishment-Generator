import { NPC } from './_common'
import { WeightRecord } from '../types'
import { BackgroundName } from './backgroundTraits'
import { ThresholdTable } from '../src/rollFromTable'
import { LifestyleStandardName } from './lifestyleStandards'

interface SocialClass {
  /** landRate is a multiple, used in taxation. */
  landRate: number
  socialClassRollThreshold: number
  probability: number
  lifestyle: string[]
  lifestyleStandards: ThresholdTable<LifestyleStandardName>
  defaultBackground: WeightRecord<BackgroundName>
  relationships(npc: NPC, otherNpc: NPC): Customer[]
}

interface Customer {
  relationship: string
  description: string
}

function buildSocialClass<T extends Record<string, SocialClass>> (t: T) { return t }
export const socialClass = buildSocialClass({
  'aristocracy': {
    landRate: 3,
    socialClassRollThreshold: 95,
    probability: 10,
    lifestyle: ['aristocratic'],
    lifestyleStandards: [
      [5, 'comfortable'],
      [15, 'wealthy'],
      [80, 'aristocratic']
    ],
    defaultBackground: {
      noble: 10,
      knight: 2,
      acolyte: 1
    },
    // this will be more interesting when the relationships are no longer just key pairs
    relationships: (npc: NPC, otherNpc: NPC) => [
      {
        relationship: 'fellow wine lover',
        description: `${npc.firstName} introduced ${otherNpc.firstName} to the delightful world of merlots and other delectable alcohols.`
      },
      {
        relationship: 'auction house competitor',
        description: `${npc.firstName} and ${otherNpc.firstName} are constantly finding themselves bidding over the same items..`
      },
      {
        relationship: 'dinner guest',
        description: `${npc.firstName} had ${otherNpc.firstName} as a dinner guest many moons ago, and ${otherNpc.heshe} quickly returned the favour.`
      },
      {
        relationship: 'fellow art lover',
        description: `${npc.firstName} and ${otherNpc.firstName} frequently attend art exhibits and plays together.`
      }
    ]
  },
  'nobility': {
    landRate: 2,
    socialClassRollThreshold: 80,
    probability: 20,
    lifestyle: ['aristocratic', 'wealthy', 'comfortable'],
    lifestyleStandards: [
      [5, 'modest'],
      [30, 'comfortable'],
      [60, 'wealthy'],
      [5, 'aristocratic']
    ],
    relationships: (npc: NPC, otherNpc: NPC) => [
      {
        relationship: 'fellow wine lover',
        description: `${npc.firstName} introduced ${otherNpc.firstName} to the delightful world of merlots and other delectable alcohols.`
      },
      {
        relationship: 'liesure game competitor',
        description: `${npc.firstName} and ${otherNpc.firstName} are friendly rivals in liesure games such as golf and boules.`
      },
      {
        relationship: 'dinner guest',
        description: `${npc.firstName} had ${otherNpc.firstName} as a dinner guest many moons ago, and ${otherNpc.heshe} quickly returned the favour.`
      },
      {
        relationship: 'fellow art lover',
        description: `${npc.firstName} and ${otherNpc.firstName} frequently attend art exhibits and plays together.`
      }
    ],
    defaultBackground: {
      'noble': 10,
      'knight': 2,
      'acolyte': 4,
      'guild artisan': 3,
      'sage': 4,
      'soldier': 2
    }
  },
  'commoner': {
    landRate: 1,
    socialClassRollThreshold: 60,
    probability: 50,
    lifestyle: ['comfortable', 'modest', 'poor'],
    lifestyleStandards: [
      [5, 'poor'],
      [45, 'modest'],
      [45, 'comfortable'],
      [5, 'wealthy']
    ],
    relationships: (npc: NPC, otherNpc: NPC) => [
      {
        relationship: 'fellow wine lover',
        description: `${npc.firstName} introduced ${otherNpc.firstName} to the delightful world of merlots and other delectable alcohols.`
      },
      {
        relationship: 'fellow cat owner',
        description: `${npc.firstName} and ${otherNpc.firstName} are both cat owners, which they bond over.`
      },
      {
        relationship: 'dinner guest',
        description: `${npc.firstName} had ${otherNpc.firstName} as a dinner guest many moons ago, and ${otherNpc.heshe} quickly returned the favour.`
      },
      {
        relationship: 'fellow theatre lover',
        description: `${npc.firstName} and ${otherNpc.firstName} frequently attend plays together.`
      }
    ],
    defaultBackground: {
      'acolyte': 4,
      'guild artisan': 3,
      'sage': 4,
      'urchin': 3,
      'outlander': 2,
      'merchant': 3,
      'hermit': 1,
      'gladiator': 2,
      'folk hero': 1,
      'criminal': 1,
      'charlatan': 2,
      'soldier': 5,
      'peasant': 10
    }
  },
  'peasantry': {
    landRate: 0.5,
    socialClassRollThreshold: 20,
    probability: 80,
    lifestyle: ['modest', 'poor', 'squalid'],
    lifestyleStandards: [
      [5, 'squalid'],
      [60, 'poor'],
      [30, 'modest'],
      [5, 'comfortable']
    ],
    relationships: (npc: NPC, otherNpc: NPC) => [
      {
        relationship: 'fellow peasant',
        description: `${npc.firstName} and ${otherNpc.firstName} share little in common, save for their poor financial circumstances and low social class.`
      },
      {
        relationship: 'has the same landlord',
        description: `${npc.firstName} and ${otherNpc.firstName} have the same landlord.`
      }
    ],
    defaultBackground: {
      'acolyte': 4,
      'sage': 4,
      'urchin': 5,
      'outlander': 3,
      'merchant': 2,
      'hermit': 2,
      'gladiator': 2,
      'folk hero': 1,
      'criminal': 2,
      'charlatan': 3,
      'soldier': 6,
      'peasant': 15
    }
  },
  'paupery': {
    landRate: 0,
    socialClassRollThreshold: 10,
    probability: 30,
    lifestyle: ['poor', 'squalid', 'wretched'],
    lifestyleStandards: [
      [5, 'wretched'],
      [75, 'squalid'],
      [15, 'poor'],
      [5, 'modest']
    ],
    relationships: (npc: NPC, otherNpc: NPC) => [
      {
        relationship: 'fellow wretch',
        description: `${npc.firstName} and ${otherNpc.firstName} occasionally help each other out, pooling their resources to scrounge together a meagre stew.`
      },
      {
        relationship: 'same landlord',
        description: `${npc.firstName} and ${otherNpc.firstName} have the same landlord.`
      }
    ],
    defaultBackground: {
      acolyte: 1,
      sage: 1,
      urchin: 10,
      outlander: 3,
      merchant: 2,
      hermit: 6,
      gladiator: 2,
      criminal: 5,
      charlatan: 4,
      soldier: 6,
      peasant: 15
    }
  },
  'indentured servitude': {
    landRate: 0,
    socialClassRollThreshold: 10,
    probability: 5,
    lifestyle: ['squalid', 'wretched'],
    lifestyleStandards: [
      [95, 'wretched'],
      [5, 'squalid']
    ],
    relationships: (npc: NPC, otherNpc: NPC) => [
      {
        relationship: 'fellow slave',
        description: `${npc.firstName} helped ${otherNpc.firstName} learn the ropes, and stop ${otherNpc.hisher} feet from bleeding so much.`
      }
    ],
    defaultBackground: {
      urchin: 15,
      outlander: 5,
      hermit: 10,
      gladiator: 1,
      criminal: 10,
      charlatan: 8,
      soldier: 3,
      peasant: 8
    }
  }
})

export type SocialClassName = keyof typeof socialClass
