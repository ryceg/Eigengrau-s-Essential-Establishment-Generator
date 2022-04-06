import { random } from '../src/random'
import { Customer } from '../customer'
import { Tavern } from './_common'

export const tavernCustomers: Customer<Tavern>[] = [
  {
    relationshipDescription: 'regular',
    relationships: {
      building: {
        relationship: 'regular',
        reciprocalRelationship: 'regular'
      },
      associatedNPC: {
        relationship: 'bartender',
        reciprocalRelationship: 'regular'
      }
    },
    description (building, npc) {
      return `${npc.firstName} is a regular at ${building.name}.`
    }
  },
  {
    relationshipDescription: 'former customer',
    relationships: {
      building: {
        relationship: 'former customer',
        reciprocalRelationship: 'former customer'
      },
      associatedNPC: {
        relationship: 'bartender',
        reciprocalRelationship: 'bloody git'
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
    relationshipDescription: 'wine supplier',
    relationships: {
      building: {
        relationship: 'wine supplier',
        reciprocalRelationship: 'client'
      },
      associatedNPC: {
        relationship: 'bartender',
        reciprocalRelationship: 'wine supplier'
      }
    },
    base: {
      profession: 'vintner'
    },
    description (building, npc) {
      return `${npc.firstName} sells wine to ${building.name}.`
    }
  },
  {
    relationshipDescription: 'beer supplier',
    relationships: {
      building: {
        relationship: 'beer supplier',
        reciprocalRelationship: 'client'
      },
      associatedNPC: {
        relationship: 'bartender',
        reciprocalRelationship: 'beer supplier'
      }
    },
    base: {
      profession: 'draper'
    },
    description (building, npc) {
      return `${npc.firstName} sells alcohol to ${building.name}.`
    }
  },
  {
    relationshipDescription: 'butcher',
    relationships: {
      building: {
        relationship: 'butcher',
        reciprocalRelationship: 'client'
      },
      associatedNPC: {
        relationship: 'bartender',
        reciprocalRelationship: 'meat supplier'
      }
    },
    base: {
      profession: 'butcher'
    },
    description (building, npc) {
      return `${npc.firstName} sells meat cuts to ${building.name}.`
    }
  },
  {
    relationshipDescription: 'bard',
    relationships: {
      building: {
        relationship: 'bard',
        reciprocalRelationship: 'client'
      },
      associatedNPC: {
        relationship: 'bartender',
        reciprocalRelationship: 'tavern entertainment'
      }
    },
    base: {
      profession: 'bard'
    },
    description (building, npc) {
      return `${npc.firstName} plays music in ${building.name}.`
    }
  },
  {
    relationshipDescription: 'exterminator',
    relationships: {
      building: {
        relationship: 'exterminator',
        reciprocalRelationship: 'client'
      },
      associatedNPC: {
        relationship: 'bartender',
        reciprocalRelationship: 'exterminator'
      }
    },
    base: {
      profession: 'exterminator'
    },
    description (building, npc) {
      return `${npc.firstName} kills pests that reside in ${building.name}.`
    }
  },
  {
    relationshipDescription: 'gongfarmer',
    relationships: {
      building: {
        relationship: 'gongfarmer',
        reciprocalRelationship: 'client'
      },
      associatedNPC: {
        relationship: 'bartender',
        reciprocalRelationship: 'gongfarmer'
      }
    },
    base: {
      profession: 'gongfarmer'
    },
    description (building, npc) {
      return `${npc.firstName} cleans the lavatories of ${building.name}.`
    }
  },
  {
    relationshipDescription: 'barmaid',
    relationships: {
      building: {
        relationship: 'barmaid',
        reciprocalRelationship: 'place of employment'
      },
      associatedNPC: {
        relationship: 'bartender',
        reciprocalRelationship: 'employee'
      }
    },
    base: {
      profession: 'barmaid'
    },
    description (building, npc) {
      return `${npc.firstName} serves drinks in ${building.name}.`
    }
  },
  {
    relationshipDescription: 'cook',
    relationships: {
      building: {
        relationship: 'cook',
        reciprocalRelationship: 'place of employment'
      },
      associatedNPC: {
        relationship: 'bartender',
        reciprocalRelationship: 'employee'
      }
    },
    base: {
      profession: 'cook'
    },
    description (building, npc) {
      return `${npc.firstName} works in the kitchen of ${building.name}.`
    }
  }
]
