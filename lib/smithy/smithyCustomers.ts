import { random } from '../src/random'
import { Customer } from '../customer'
import { Smithy } from './_common'

export const smithyCustomers: Customer<Smithy>[] = [
  {
    relationshipDescription: 'regular',
    relationships: {
      building: {
        relationship: 'regular'
      },
      associatedNPC: {
        relationship: 'blacksmith',
        reciprocalRelationship: 'client'
      }
    },
    base: {
      professionType: 'labourer'
    },
    description (building, npc) {
      return `${npc.firstName} regularly gets tools repaired.`
    }
  },
  {
    relationshipDescription: 'buyer',
    relationships: {
      building: {
        relationship: 'buyer'
      },
      associatedNPC: {
        relationship: 'blacksmith',
        reciprocalRelationship: 'client'
      }
    },
    base: {
      profession: 'wagoner'
    },
    description (building, npc) {
      return `${npc.firstName} buys horse shoes regularly.`
    }
  },
  {
    relationshipDescription: 'former customer',
    relationships: {
      building: {
        relationship: 'former customer'
      },
      associatedNPC: {
        relationship: 'target of boycott',
        reciprocalRelationship: 'former client'
      }
    },
    description (building, npc) {
      const reason = random([
        'the prices were too high',
        'of a perceived insult',
        'the goods were cheaper elsewhere',
        `${npc.heshe} believes that ${building.associatedNPC.firstName} was rude.`,
        `${building.associatedNPC.firstName} was rude to ${npc.himher}`
      ])
      return `${npc.firstName} no longer buys anything from ${building.name} because ${reason}.`
    }
  },
  {
    relationshipDescription: 'carpenter',
    relationships: {
      building: {
        relationship: 'carpenter',
        reciprocalRelationship: 'client'
      },
      associatedNPC: {
        relationship: 'blacksmith',
        reciprocalRelationship: 'client'
      }
    },
    base: {
      profession: 'carpenter'
    },
    description (building, npc) {
      return `${npc.firstName} sells wine to ${building.name}.`
    }
  },
  {
    relationshipDescription: 'patron',
    relationships: {
      building: {
        relationship: 'patron',
        reciprocalRelationship: 'client'
      },
      associatedNPC: {
        relationship: 'blacksmith',
        reciprocalRelationship: 'client'
      }
    },
    base: {
      socialClass: 'nobility'
    },
    description (building, npc) {
      return `${npc.firstName} commissions expensive weaponry and armor from ${building.name}.`
    }
  },
  {
    relationshipDescription: 'superstitious peasant',
    relationships: {
      building: {
        relationship: 'superstitious peasant',
        reciprocalRelationship: 'client'
      },
      associatedNPC: {
        relationship: 'blacksmith',
        reciprocalRelationship: 'client'
      }
    },
    base: {
      socialClass: 'peasantry'
    },
    description (building, npc) {
      return `${npc.firstName} buys cold iron from ${building.name} to ward off evil spirits.`
    }
  }
]
