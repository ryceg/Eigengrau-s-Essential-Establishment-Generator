import { random } from '../src/random'
import { Customer } from '../customer'
import { Alchemist } from './_common'
import { alchemistData } from './alchemistData'

export const alchemistCustomers: Customer<Alchemist>[] = [
  {
    relationshipDescription: 'customer',
    relationships: {
      building: {
        relationship: 'customer'
      },
      associatedNPC: {
        relationship: 'client',
        reciprocalRelationship: 'alchemist'
      }
    },
    description (building, npc) {
      const ingredient = random(['herbs', 'some rare herbs', 'some reagents', 'salt', 'some spices', 'spices typically used in alchemy'])
      return `${npc.firstName} purchases ${ingredient} from ${building.name} for cooking.`
    }
  },
  {
    relationshipDescription: 'weight-loss customer',
    relationships: {
      building: {
        relationship: 'weight-loss customer'
      },
      associatedNPC: {
        relationship: 'client',
        reciprocalRelationship: 'supplier of weight-loss medication'
      }
    },
    base: {
      weight: 'fat',
      note: '$currentNPC.firstName is trying to lose weight.'
    },
    description (building, npc) {
      const commodity = random(['herbs', 'some rare herbs', 'some reagents', 'salt', 'some spices', 'literal snake oil'])
      const effects = random(['doesn\'t seem to be working.', 'seems to be working?', 'is too early to tell if it is working or not.', 'is very clearly a scam.'])
      return `${npc.firstName} purchases ${commodity} from ${building.name} for weight loss purposes. It ${effects}`
    }
  },
  {
    relationshipDescription: 'discrete customer',
    relationships: {
      building: {
        relationship: 'discrete customer'
      },
      associatedNPC: {
        relationship: 'client',
        reciprocalRelationship: 'alchemist'
      }
    },
    description (building, npc) {
      const commodity = random(['poison', 'some rare herbs used for poison', 'some reagents', 'unnamed powders', 'some things that could be considered dangerous', 'strange potions', 'potions', 'unnamed potions', 'glassware', 'glassware and alchemical reagents'])
      return `${npc.firstName} secretly purchases ${commodity} from ${building.name}.`
    }
  },
  {
    relationshipDescription: 'lovestruck customer',
    relationships: {
      building: {
        relationship: 'lovestruck customer'
      },
      associatedNPC: {
        relationship: 'client',
        reciprocalRelationship: 'love potion supplier'
      }
    },
    description (building, npc) {
      return `${npc.firstName} secretly purchases ${random(['love potions', 'potions purported to beguile the imbiber', 'potions meant to make the drinker fall in love'])} from ${building.name}.`
    }
  },
  {
    relationshipDescription: 'detractor',
    relationships: {
      building: {
        relationship: 'detractor',
        reciprocalRelationship: 'target of ire'
      },
      associatedNPC: {
        relationship: 'target of ire',
        reciprocalRelationship: 'detractor'
      }
    },
    base: {
      background: 'acolyte'
    },
    description (building, npc) {
      return `${npc.firstName} is an outspoken detractor of ${building.name}, believing alchemy to be an abomination.`
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
        relationship: 'alchemist',
        reciprocalRelationship: 'client'
      }
    },
    base: {
      profession: 'merchant'
    },
    description (building, npc) {
      const ingredient = random(['herbs', 'some rare herbs', 'some reagents', random(alchemistData.ingredients)])
      return `${npc.firstName} supplies ${ingredient} to ${building.name}.`
    }
  }
]
