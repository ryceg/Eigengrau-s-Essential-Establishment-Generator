import { RoadMaterialType } from '../buildings/structureMaterialData'

interface RoadMaterial {
  type: string
  /** @example `Main Street is a narrow paved street. It is ________` */
  description: string[]
}

export const roadMaterialTypes: Record<RoadMaterialType, RoadMaterial> = {
  dirt: {
    type: 'dirt',
    description: [
      'two thin lines of dirt road with grass growing around and in between them.',
      'well trodden, though slightly muddy.',
      'a desire path, with the grass just gently trodden down.',
      'made of dirt that has been gently packed down.',
      'made of dirt that has been packed down.',
      'made of dirt that has been packed down. Unfortunately, it was done a long time ago, and is deteriorating slightly.'
    ]
  },
  gravel: {
    type: 'gravel',
    description: [
      'made of noisy and shifting gravel. Better watch your footing.',
      'a loose gravel that was taken from a river bed.',
      'made of colourful rocks and pebbles.',
      'made of poorly packed gravel, which shifts around under foot.'
    ]
  },
  pavement: {
    type: 'paved',
    description: [
      'a misshapen and uneven cobblestone.',
      'made of polished marble, intricately paved to form repeating geometric pattern.',
      'made of broad flagstones, hewn perfectly flat and level.',
      'made of rough, slightly uneven stones previously used as ballast in ships.'
    ]
  },
  brick: {
    type: 'brick',
    description: [
      'paved with moss covered bricks, of all different shapes and sizes.',
      'paved with deep red bricks, some stamped with the town seal.',
      'missing several bricks in places. Grass shoots up in the voids, threatening to take over the road.',
      'freshly laid. You can see where the sand is still settling into the cracks to hold them in place.',
      'an arrangement of baked moss and artichoke coloured bricks, made from compressed Gnomegrass and Eldenoak sap mixture.'
    ]
  }
}
