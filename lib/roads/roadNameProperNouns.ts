import { ProperNoun } from './roads'

export const roadNameProperNouns: Record<string, ProperNoun & { probability?: number; }> = {
  main: {
    prefix: 'main',
    isUnique: true,
    probability: 20,
    isBuilding: false
  },
  keep: {
    prefix: 'keep',
    isUnique: false,
    isBuilding: false
  },
  king: {
    prefix: 'king',
    canBePossessive: true,
    isUnique: false,
    isBuilding: false
  },
  queen: {
    prefix: 'queen',
    canBePossessive: true,
    isUnique: false,
    isBuilding: false
  },
  prince: {
    prefix: 'prince',
    canBePossessive: true,
    isUnique: false,
    isBuilding: false
  },
  princess: {
    prefix: 'princess',
    canBePossessive: true,
    isUnique: false,
    isBuilding: false
  },
  lord: {
    prefix: 'lord',
    isUnique: false,
    isBuilding: false
  },
  ladies: {
    prefix: 'ladies',
    isUnique: false,
    isBuilding: false
  },
  noble: {
    prefix: 'noble',
    canBePossessive: true,
    isUnique: false,
    isBuilding: false
  },
  duke: {
    prefix: 'duke',
    canBePossessive: true,
    isUnique: false,
    isBuilding: false
  },
  duchess: {
    prefix: 'duchess',
    canBePossessive: true,
    isUnique: false,
    isBuilding: false
  },
  rogue: {
    prefix: 'rogue',
    canBePossessive: true,
    isUnique: false,
    isBuilding: false
  },
  priest: {
    prefix: 'priest',
    canBePossessive: true,
    isUnique: false,
    isBuilding: false
  },
  abbott: {
    prefix: 'abbott',
    canBePossessive: true,
    isUnique: false,
    isBuilding: false
  },
  pope: {
    prefix: 'pope',
    isUnique: false,
    isBuilding: false
  },
  spring: {
    prefix: 'spring',
    canBePossessive: true,
    isUnique: false,
    isBuilding: false
  },
  winter: {
    prefix: 'winter',
    canBePossessive: true,
    isUnique: false,
    isBuilding: false
  },
  summer: {
    prefix: 'summer',
    canBePossessive: true,
    isUnique: false,
    isBuilding: false
  },
  autumn: {
    prefix: 'autumn',
    canBePossessive: true,
    isUnique: false,
    isBuilding: false
  },
  castle: {
    prefix: 'castle',
    isBuilding: 'castle',
    isUnique: false
  },
  butcher: {
    prefix: 'butcher',
    isBuilding: 'butcher',
    canBePossessive: true,
    probability: 20,
    isUnique: false
  },
  tailor: {
    prefix: 'tailor',
    isBuilding: 'tailor',
    canBePossessive: true,
    probability: 20,
    isUnique: false
  },
  smith: {
    prefix: 'smith',
    isBuilding: 'smithy',
    canBePossessive: true,
    probability: 20,
    isUnique: false
  },
  potter: {
    prefix: 'potter',
    isBuilding: 'potter',
    canBePossessive: true,
    probability: 20,
    isUnique: false
  },
  baker: {
    prefix: 'baker',
    isBuilding: 'bakery',
    canBePossessive: true,
    probability: 20,
    isUnique: false
  },
  farrier: {
    prefix: 'farrier',
    isBuilding: 'smithy',
    canBePossessive: true,
    probability: 20,
    isUnique: false
  },
  fisher: {
    prefix: 'fisher',
    canBePossessive: true,
    probability: 20,
    isUnique: false,
    isBuilding: false
  },
  old: {
    prefix: 'old',
    probability: 20,
    isUnique: false,
    isBuilding: false
  },
  new: {
    prefix: 'new',
    probability: 20,
    isUnique: false,
    isBuilding: false
  },
  common: {
    prefix: 'common',
    probability: 20,
    isUnique: false,
    isBuilding: false
  },
  high: {
    prefix: 'high',
    probability: 20,
    isUnique: false,
    isBuilding: false
  },
  low: {
    prefix: 'low',
    probability: 20,
    isUnique: false,
    isBuilding: false
  },
  north: {
    prefix: 'north',
    isUnique: false,
    isBuilding: false
  },
  south: {
    prefix: 'south',
    isUnique: false,
    isBuilding: false
  },
  west: {
    prefix: 'west',
    isUnique: false,
    isBuilding: false
  },
  east: {
    prefix: 'east',
    isUnique: false,
    isBuilding: false
  }
}
