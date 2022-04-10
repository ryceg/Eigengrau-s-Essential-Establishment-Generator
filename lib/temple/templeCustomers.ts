import { toUpperFirst } from '../src/toTitleCase'
import { Building } from '../buildings/_common'
import { Customer } from '../customer'

export const templeCustomers: Customer<Building>[] = [
  {
    relationshipDescription: 'regular attendee',
    relationships: {
      building: {
        relationship: 'regular attendee',
        reciprocalRelationship: 'place of worship'
      },
      associatedNPC: {
        relationship: 'pastor',
        reciprocalRelationship: 'member of flock'
      }
    },
    base: {
      religion: {
        deity: '',
        strength: 'quiet true believer'
      }
    },
    description (building, npc) {
      return `${npc.firstName} attends ${building.name} for a weekly sermon.`
    }
  },
  {
    relationshipDescription: 'fanatical worshiper',
    relationships: {
      building: {
        relationship: 'fanatical worshiper',
        reciprocalRelationship: 'beloved place of worship'
      },
      associatedNPC: {
        relationship: 'pastor',
        reciprocalRelationship: 'valued member of flock'
      }
    },
    base: {
      religion: {
        deity: '',
        strength: 'unshakingly devoted believer'
      }
    },
    description (building, npc) {
      return `${npc.firstName} is the second person to arrive, after the priest, and always participates in any and every church event.`
    }
  },
  {
    relationshipDescription: 'superstitious peasant',
    relationships: {
      building: {
        relationship: 'superstitious peasant',
        reciprocalRelationship: 'place of worship'
      },
      associatedNPC: {
        relationship: 'pastor',
        reciprocalRelationship: 'member of flock'
      }
    },
    base: {
      socialClass: 'peasantry',
      religion: {
        deity: '',
        strength: 'conspicuously faithful believer'
      }
    },
    description (building, npc) {
      return `${npc.firstName} buys cold iron from ${building.name} to ward off evil spirits. ${toUpperFirst(npc.heshe)} attends every ceremony that ${npc.heshe} can.`
    }
  },
  {
    relationshipDescription: 'frequent attendee',
    relationships: {
      building: {
        relationship: 'frequent attendee',
        reciprocalRelationship: 'place of worship'
      },
      associatedNPC: {
        relationship: 'pastor',
        reciprocalRelationship: 'member of flock'
      }
    },
    base: {
      religion: {
        deity: '',
        strength: 'outspoken believer'
      }
    },
    description (building, npc) {
      return `${npc.firstName} loves attending ${building.name}, and tries to attend as many services as ${npc.heshe} can.`
    }
  },
  {
    relationshipDescription: 'frequent and critical attendee',
    relationships: {
      building: {
        relationship: 'frequent and critical attendee',
        reciprocalRelationship: 'place of worship'
      },
      associatedNPC: {
        relationship: 'pastor',
        reciprocalRelationship: 'annoying member of flock'
      }
    },
    base: {
      religion: {
        deity: '',
        strength: 'open-minded seeker'
      }
    },
    description (building, npc) {
      return `${npc.firstName} participates in the discussions of the teachings with gusto, frequently challenging the more controversial parts.`
    }
  },
  {
    relationshipDescription: 'quiet attendee',
    relationships: {
      building: {
        relationship: 'quiet attendee',
        reciprocalRelationship: 'place of worship'
      },
      associatedNPC: {
        relationship: 'pastor',
        reciprocalRelationship: 'member of flock'
      }
    },
    base: {
      religion: {
        deity: '',
        strength: 'cautious listener'
      }
    },
    description (building, npc) {
      return `${npc.firstName} seems to attend services once in a blue moon, but never offers up ${npc.hisher} own thoughts on the teachings.`
    }
  },
  {
    relationshipDescription: 'noble attendee',
    relationships: {
      building: {
        relationship: 'noble attendee',
        reciprocalRelationship: 'place of worship'
      },
      associatedNPC: {
        relationship: 'pastor',
        reciprocalRelationship: 'member of flock'
      }
    },
    base: {
      socialClass: 'nobility',
      religion: {
        deity: '',
        strength: 'conspicuously faithful believer'
      }
    },
    description (building, npc) {
      return `${npc.firstName} makes sure to attend ${building.name} regularly, to uphold ${npc.hisher} image.`
    }
  },
  {
    relationshipDescription: 'reluctant attendee',
    relationships: {
      building: {
        relationship: 'reluctant attendee',
        reciprocalRelationship: 'place of worship'
      },
      associatedNPC: {
        relationship: 'pastor',
        reciprocalRelationship: 'member of flock'
      }
    },
    base: {
      religion: {
        deity: '',
        strength: 'critical student'
      }
    },
    description (building, npc) {
      return `${npc.firstName} attends ${building.name}, but doesn't seem to enjoy it.`
    }
  },
  {
    relationshipDescription: 'frequent agitant',
    relationships: {
      building: {
        relationship: 'frequent agitant',
        reciprocalRelationship: 'place of worship'
      },
      associatedNPC: {
        relationship: 'pastor',
        reciprocalRelationship: 'irritating member of flock'
      }
    },
    base: {
      religion: {
        deity: '',
        strength: 'outspoken cynic'
      }
    },
    description (building, npc) {
      return `${npc.firstName} sometimes attends ${building.name}, but frequently causes a huge scene when ${npc.heshe} does. Most people would rather that ${npc.heshe} didn't attend.`
    }
  },
  {
    relationshipDescription: 'heretic',
    relationships: {
      building: {
        relationship: 'heretic',
        reciprocalRelationship: 'former place of worship'
      },
      associatedNPC: {
        relationship: 'pastor',
        reciprocalRelationship: 'former member of flock'
      }
    },
    base: {
      religion: {
        deity: '',
        strength: 'broken heretic'
      }
    },
    description (building, npc) {
      return `${npc.firstName} attended ${building.name}, but was banned for blaspheme.`
    }
  },
  {
    relationshipDescription: 'non-attendee',
    relationships: {
      building: {
        relationship: 'non-attendee',
        reciprocalRelationship: 'one-time place of worship'
      },
      associatedNPC: {
        relationship: 'pastor',
        reciprocalRelationship: 'one-time sermon attendee'
      }
    },
    base: {
      religion: {
        deity: '',
        strength: 'critical student'
      }
    },
    description (building, npc) {
      return `${npc.firstName} attended ${building.name} once, but never returned.`
    }
  }
]
