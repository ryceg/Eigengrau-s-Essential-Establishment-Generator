// import { assign, clampRolls, generateBuildingMaterial, getBuildingRoad, getUUID, Town } from '.'
import { NPC } from '../npc-generation/_common'

export type ObjectTypeName =
| 'location'
| 'structure'
| 'building'
| 'ship'
| 'npc'
| 'item'
| 'room'
| 'faction'
| 'relationship'
| 'town'
| 'event'
| 'actor'

export type BuildingTypeName =
| 'alchemist'
| 'bakery'
| 'barber'
| 'brothel'
| 'butcher'
| 'castle'
| 'cobbler'
| 'confectionery'
| 'docks'
| 'dungeon'
| 'fletcher'
| 'florist'
| 'generalStore'
| 'graveyard'
| 'guardhouse'
| 'jeweller'
| 'market'
| 'smithy'
| 'tailor'
| 'tavern'
| 'temple'
| 'townSquare'

// export class CLocation implements Location {
//   constructor (base: Partial<Location> = {}) {
//     lib.assign(this, base)
//     this.key ??= getUUID()
//     this.objectType ??= 'location'
//     this.buildingType ??= null
//     this.type = this.buildingType
//     this.passageName ??= 'GenericPassage'
//   }

//   key: string
//   /** 'building', 'faction', 'npc', or 'room'. */
//   objectType: ObjectTypeName
//   /** The type of building- 'castle', 'townSquare', 'generalStore', etc. */
//   type: BuildingTypeName | null
//   buildingType: BuildingTypeName | null
//   passageName: string
//   parentKey?: string
//   name?: string
//   wordNoun?: string
//   needsWordNoun?: boolean
//   description?: string
//   associatedNPC?: NPC
//   tippyDescription?: string
//   isOffRoad?: boolean
// }

// export class CStructure extends CLocation implements Structure {
//   constructor (base: Partial<Structure> = {}) {
//     super(base)
//     lib.assign(this, base)
//     this.objectType = 'building'
//     this.type = this.buildingType
//     this.passageName = this.passageName !== 'GenericPassage' ? this.passageName : 'GenericPassage'
//   }
// }

// export class CBuilding extends CStructure implements Building {
//   constructor (town: Town, type: string, base: Partial<Building>) {
//     super()
//     this.type = type
//     lib.assign(this, base)
//     this.roll = {
//       magic: Math.floor(randomFloat(1) * 80) + 20,
//       size: Math.floor(randomFloat(1) * 80) + 20,
//       diversity: Math.floor(randomFloat(1) * 80) + 20,
//       wealth: random(1, 100),
//       population: random(1, 100),
//       reputation: random(1, 100),
//       sin: random(1, 100),
//       roughness: random(1, 100),
//       cleanliness: random(1, 100),
//       expertise: random(1, 100),
//       activity: random(1, 100)
//     }
//     // Not sure why we need to typecast this.
//     clampRolls(this.roll)
//     if (base.road) {
//       console.log('Road defined!')
//       lib.roads.addBuilding(town, town.roads[base.road], this)
//     }
//     if (!this.road) this.road = getBuildingRoad(this, town).key
//     assign(this, {
//       material: generateBuildingMaterial(town, town.townMaterial, this.roll.wealth)
//     })
//   }

//   key = getUUID()
//   objectType = 'building'
//   type: BuildingName
//   road: string
//   roll: {
//     magic: number
//     size: number
//     diversity: number
//     wealth: number
//     population: number
//     reputation: number
//     sin: number
//     roughness: number
//     cleanliness: number
//     expertise: number
//     activity: number
//   }

//   priceModifier = getPriceModifier()
//   material!: {
//     noun: string
//     probability: number
//   }
// }

export interface Location {
  key: string
  /** 'building', 'faction', 'npc', or 'room'. */
  objectType: ObjectTypeName
  /** The type of building- 'castle', 'townSquare', 'generalStore', etc. */
  type: BuildingTypeName
  buildingType: BuildingTypeName
  passageName?: string
  parentKey?: string
  name?: string
  wordNoun?: string
  needsWordNoun?: boolean
  description?: string
  associatedNPC?: NPC
  tippyDescription?: string
  isOffRoad?: boolean
}

export interface Structure extends Location {
  structure?: BuildingStructure
  roadSizeRequirement?: number
  material: {
    noun: string
    probability: number
  }
  road: string
  owner?: string
}

export interface Building extends Structure {
  passageName: string
  initPassage: string
  localImage: string
  buildingType: BuildingTypeName
  PassageFormat?: string
  name: string
  priceModifier: number
  wealth?: string
  size?: string
  activity?: string
  roughness?: string
  sin?: string
  cleanliness?: string
  diversity?: string
  reputation?: string
  notableFeature?: string
  specialty?: string
  roll: BuildingRollsDefault
}

export interface BuildingStructure {
  descriptor: string
  descriptors: string[]
  material: BuildingMaterial
  roof: BuildingRoof
}

export interface BuildingRoof {
  canBeColoured: boolean
  colour: string
  wealth: string
  verb: string
  noun: string
}

export interface BuildingMaterial {
  noun: string
  wealth: string
}

export interface BuildingRollsDefault {
  wealth: number
  cleanliness: number
  activity: number
  diversity: number
  population: number
  reputation: number
  roughness: number
  sin: number
  size: number
  expertise: number
  magic: number
}

export interface ReciprocalRelationship {
  key: string
  otherKey: string
  npcKey: string
  relationship: string
  reciprocalRelationship: string
  description: string | null
}
