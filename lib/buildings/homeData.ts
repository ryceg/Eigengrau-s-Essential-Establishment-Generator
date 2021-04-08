// interface LandUse {
//   acreage: number
//   recreational: number
//   structureFootprint: number
// }

// export type HomeStructures =
//   'apartment'
// | 'building'
// | 'manor'

// interface Home {
//   structureType: HomeStructures
//   type: 'building' | 'room'
//   rooms: Room[]
//   floors: number
//   egresses: number
// }

// type HomeRoomPurposes =
//   'bedroom'
// | 'living room'
// | 'dining room'
// | 'toilet'
// | 'kitchen'
// | 'stable room'
// | 'workshop'
// | 'recreation room'
// | 'nursery'

// interface Room {
//   purpose: string[]
//   floorMaterial: string
//   wallMaterial: string
//   doorsTo: string[]
//   doorsFrom: string[]
//   windows: number
//   lightSource: string[]
//   heatSource: string[]
// }

export const homeData = {
  types: {
    apartment: {
      type: 'room'
    },
    house: {
      type: 'building'
    },
    manor: {
      type: 'building'
    }
  }
}
