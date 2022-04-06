import { Customer } from '../customer'
import { Guardhouse } from './_common'

export const guardhouseCustomers: Customer<Guardhouse>[] = [
  {
    relationshipDescription: 'guard',
    relationships: {
      building: {
        relationship: 'guard',
        reciprocalRelationship: 'place of work'
      },
      associatedNPC: {
        relationship: 'peer'
      }
    },
    base: {
      profession: 'guard'
    },
    description (building, npc) {
      return `${npc.firstName} works in ${building.name}.`
    }
  },
  {
    relationshipDescription: 'prisoner',
    relationships: {
      building: {
        relationship: 'prisoner',
        reciprocalRelationship: 'place of imprisonment'
      },
      associatedNPC: {
        relationship: 'captor'
      }
    },
    base: {
      professionSector: 'crime'
    },
    description (building, npc) {
      return `${npc.firstName} is a captured criminal being held in ${building.name} awaiting trial.`
    }
  },
  {
    relationshipDescription: 'investigator',
    relationships: {
      building: {
        relationship: 'investigator',
        reciprocalRelationship: 'place of work'
      },
      associatedNPC: {
        relationship: 'peer'
      }
    },
    base: {
      profession: 'investigator'
    },
    description (building, npc) {
      return `${npc.firstName} works on cases in ${building.name}.`
    }
  },
  {
    relationshipDescription: 'kidnapper',
    relationships: {
      building: {
        relationship: 'kidnapper',
        reciprocalRelationship: 'sends letters of demand'
      },
      associatedNPC: {
        relationship: 'contact point'
      }
    },
    base: {
      profession: 'kidnapper'
    },
    description (building, npc) {
      return `${npc.firstName} is kidnapping children, and sending ransom letters to ${building.name}.`
    }
  },
  {
    relationshipDescription: 'fugitive',
    relationships: {
      building: {
        relationship: 'fugitive',
        reciprocalRelationship: 'pursuant body'
      },
      associatedNPC: {
        relationship: 'lead investigator'
      }
    },
    base: {
      profession: 'fugitive'
    },
    description (building, npc) {
      return `${npc.firstName} is a dangerous fugitive being hunted down by ${building.name}.`
    }
  },
  {
    relationshipDescription: 'wanted criminal',
    relationships: {
      building: {
        relationship: 'wanted criminal',
        reciprocalRelationship: 'pursuant body'
      },
      associatedNPC: {
        relationship: 'lead investigator'
      }
    },
    base: {
      professionSector: 'crime'
    },
    description (building, npc) {
      return `${npc.firstName} is a wanted criminal being hunted down by ${building.name}.`
    }
  },
  {
    relationshipDescription: 'informant',
    relationships: {
      building: {
        relationship: 'informant',
        reciprocalRelationship: 'informee'
      },
      associatedNPC: {
        relationship: 'lead investigator'
      }
    },
    base: {
      professionSector: 'crime'
    },
    description (building, npc) {
      return `${npc.firstName} is an informant who is assisting ${building.name} with their investigations.`
    }
  }
]
