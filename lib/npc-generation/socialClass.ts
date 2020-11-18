import { NPC } from './_common'
import { WeightRecord } from '../types'
import { BackgroundName } from './backgroundTraits'
interface SocialClass {
  landRate: number
  socialClassRollThreshold: number
  probability: number
  lifestyle: string[]
  defaultBackground: WeightRecord<BackgroundName>
  relationships(npc: NPC, otherNpc: NPC): Customer[]
}

interface Customer {
  relationship: string
  description: string
}

export const socialClass: Record<string, SocialClass> = {
  'aristocracy': {
    landRate: 3, // landRate is a multiple
    socialClassRollThreshold: 95,
    probability: 10,
    lifestyle: ['aristocratic'],
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
}
