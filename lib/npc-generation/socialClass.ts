import { NPC } from './_common'

export const socialClass = {
  'aristocracy': {
    landRate: 3, // landRate is a multiple
    lifestyle: ['aristocratic'],
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
    ]
  },
  'commoner': {
    landRate: 1,
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
    ]
  },
  'peasantry': {
    landRate: 0.5,
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
    ]
  },
  'paupery': {
    landRate: 0,
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
    ]
  },
  'indentured servitude': {
    landRate: 0,
    lifestyle: ['squalid', 'wretched'],
    relationships: (npc: NPC, otherNpc: NPC) => [
      {
        relationship: 'fellow slave',
        description: `${npc.firstName} helped ${otherNpc.firstName} learn the ropes, and stop ${otherNpc.hisher} feet from bleeding so much.`
      }
    ]
  }
}
