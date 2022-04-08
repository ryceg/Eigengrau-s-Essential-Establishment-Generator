import { Customer } from '../customer'
import { Brothel } from './_common'

export const brothelCustomers: Customer<Brothel>[] = [
  {
    relationshipDescription: 'regular',
    relationships: {
      building: {
        relationship: 'regular'
      },
      associatedNPC: {
        relationship: 'acquaintance'
      }
    },
    base: {
      socialClass: 'commoner',
      gender: 'man'
    },
    description: (building, npc) => `${npc.firstName} is a regular at ${building.name}.`
  },
  {
    relationshipDescription: 'discrete regular',
    relationships: {
      building: {
        relationship: 'discrete regular'
      },
      associatedNPC: {
        relationship: 'acquaintance'
      }
    },
    base: {
      socialClass: 'nobility',
      gender: 'man'
    },
    description: (building, npc) => `${npc.firstName} is a regular at ${building.name}, though would prefer that that be kept a secret.`
  },
  {
    relationshipDescription: 'pest',
    relationships: {
      building: {
        relationship: 'pest'
      },
      associatedNPC: {
        relationship: 'acquaintance',
        reciprocalRelationship: 'annoyance'
      }
    },
    base: {
      socialClass: 'commoner',
      gender: 'man'
    },
    description: (building, npc) => `${npc.firstName} is an annoying pest who fancies one of the workers of ${building.name} a little too much.`
  },
  {
    relationshipDescription: 'detractor',
    relationships: {
      building: {
        relationship: 'detractor',
        reciprocalRelationship: 'target of ire'
      },
      associatedNPC: {
        relationship: 'enemy',
        reciprocalRelationship: 'irritant'
      }
    },
    base: {
      socialClass: 'commoner'
    },
    description: (building, npc) => `${npc.firstName} is constantly campaigning to get rid of ${building.name}.`
  },
  {
    relationshipDescription: 'ex-employee',
    relationships: {
      building: {
        relationship: 'ex-employee',
        reciprocalRelationship: 'former place of employment'
      },
      associatedNPC: {
        relationship: 'former boss',
        reciprocalRelationship: 'former employee'
      }
    },
    base: {
      profession: 'prostitute',
      gender: 'woman'
    },
    description: (building, npc) => `${npc.firstName} is an ex-employee of ${building.name} after ${['deciding that the line of work wasn\'t for her', 'getting fed up with being mistreated by the customers', 'being mistreated', 'finding religion', 'finding a lover', 'getting pregnant'].random()}.`
  }
]
