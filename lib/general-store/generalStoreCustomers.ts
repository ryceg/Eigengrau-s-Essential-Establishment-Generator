import { random } from '../src/random'
import { Customer } from '../customer'
import { GeneralStore } from './_common'

export const generalStoreCustomers: Customer<GeneralStore>[] = [
  {
    relationshipDescription: 'customer',
    relationships: {
      building: {
        relationship: 'customer',
        reciprocalRelationship: ''
      },
      associatedNPC: {
        relationship: 'shopkeep',
        reciprocalRelationship: 'customer'
      }
    },
    description (building, npc) {
      const commodity = random(['herbs', 'vegetables', 'staple foods', 'spices', 'utensils', ''])
      return `${npc.firstName} purchases ${commodity} from ${building.name} for cooking.`
    }
  },
  {
    relationshipDescription: 'former customer',
    relationships: {
      building: {
        relationship: 'former customer',
        reciprocalRelationship: 'boycotter'
      },
      associatedNPC: {
        relationship: 'target of boycott',
        reciprocalRelationship: 'boycotter'
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
    relationshipDescription: 'client',
    relationships: {
      building: {
        relationship: 'client',
        reciprocalRelationship: 'supplier'
      },
      associatedNPC: {
        relationship: 'shopkeep',
        reciprocalRelationship: 'customer'
      }
    },
    base: {
      profession: 'merchant'
    },
    description (building, npc) {
      const commodity = random(['food staples', 'tools', 'luxuries', 'fabrics', 'cleaning supplies'])
      return `${npc.firstName} buys ${commodity} from ${building.name}.`
    }
  },
  {
    relationshipDescription: 'fish supplier',
    relationships: {
      building: {
        relationship: 'fish supplier',
        reciprocalRelationship: 'client'
      },
      associatedNPC: {
        relationship: 'supplier of fish',
        reciprocalRelationship: 'shopkeep'
      }
    },
    base: {
      profession: 'fisherman'
    },
    description (building, npc) {
      return `${npc.firstName} sells ${npc.hisher} fish to ${building.name}.`
    }
  },
  {
    relationshipDescription: 'produce supplier',
    relationships: {
      building: {
        relationship: 'produce supplier',
        reciprocalRelationship: 'client'
      },
      associatedNPC: {
        relationship: 'produce supplier',
        reciprocalRelationship: 'shopkeep'
      }
    },
    base: {
      profession: 'gardener'
    },
    description (building, npc) {
      return `${npc.firstName} sells ${npc.hisher} vegetables to ${building.name}.`
    }
  },
  {
    relationshipDescription: 'milk supplier',
    relationships: {
      building: {
        relationship: 'milk supplier',
        reciprocalRelationship: 'client'
      },
      associatedNPC: {
        relationship: 'shopkeep',
        reciprocalRelationship: 'supplier'
      }
    },
    base: {
      profession: 'dairymaid'
    },
    description (building, npc) {
      return `${npc.firstName} sells milk to ${building.name}.`
    }
  },
  {
    relationshipDescription: 'blacksmith',
    relationships: {
      building: {
        relationship: 'blacksmith',
        reciprocalRelationship: 'client'
      },
      associatedNPC: {
        relationship: 'shopkeep',
        reciprocalRelationship: 'supplier'
      }
    },
    base: {
      profession: 'blacksmith'
    },
    description (building, npc) {
      return `${npc.firstName} sells ${npc.hisher} wares to ${building.name}.`
    }
  }
]
