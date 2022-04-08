import { Customer } from '../customer'
import { Docks } from './_common'

export const docksCustomers: Customer<Docks>[] = [
  {
    relationshipDescription: 'regular',
    relationships: {
      building: {
        relationship: 'regular',
        reciprocalRelationship: 'place of work'
      },
      associatedNPC: {
        relationship: 'acquaintance'
      }
    },
    base: {
      professionSector: 'naval'
    },
    description (building, npc) {
      return `${npc.firstName} works with ships.`
    }
  },
  {
    relationshipDescription: 'shipwright',
    relationships: {
      building: {
        relationship: 'shipwright',
        reciprocalRelationship: 'place of work'
      },
      associatedNPC: {
        relationship: 'acquaintance'
      }
    },
    base: {
      profession: 'shipwright'
    },
    description (building, npc) {
      return `${npc.firstName} constructs and repairs ships in ${building.name}.`
    }
  },
  {
    relationshipDescription: 'bosun',
    relationships: {
      building: {
        relationship: 'bosun',
        reciprocalRelationship: 'place of work'
      },
      associatedNPC: {
        relationship: 'acquaintance'
      }
    },
    base: {
      profession: 'bosun'
    },
    description (building, npc) {
      return `${npc.firstName} works to organise equipment to be loaded off ${building.name} and onto ${npc.hisher} ship.`
    }
  },
  {
    relationshipDescription: 'stevedore',
    relationships: {
      building: {
        relationship: 'stevedore',
        reciprocalRelationship: 'place of work'
      },
      associatedNPC: {
        relationship: 'acquaintance'
      }
    },
    base: {
      profession: 'stevedore'
    },
    description (building, npc) {
      return `${npc.firstName} hauls stuff off ships and onto ${building.name}.`
    }
  }
]
