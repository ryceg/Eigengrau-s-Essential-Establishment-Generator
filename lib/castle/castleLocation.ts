import { constrainRecord } from '../src/constrainRecord'

export interface CastleLocation {
  vignette: string[]
  defenseReason: string[]
}

export const castleLocation = constrainRecord<CastleLocation>()({
  'seashore': {
    vignette: [
      'a hint of brine and seaweed is carried by the wind to your nose'
    ],
    defenseReason: [
      'the nearby harbor is important for trade',
      'the tactical advantage of its position by the sea is incredibly important'
    ]
  },
  'forest': {
    vignette: [
      'a hare dashes about, seemingly lost, unaware how to escape the confines of the castle',
      'A squirrel seems to be watching you from a nearby tree'
    ],
    defenseReason: [
      'the surrounding land is excellent for growing crops',
      'the surrounding land is excellent for grazing livestock'
    ]
  },
  'hills': {
    vignette: [
      'a cart rolls by, with the scent of livestock thick on it'
    ],
    defenseReason: [
      'the nearby mines are rich in ores or gems',
      'the nearby pass is the easiest way to cross the mountains',
      'the surrounding land is excellent for growing crops',
      'the surrounding land is excellent for grazing livestock'
    ]
  },
  'plains': {
    vignette: [
      'a cart rolls by, with the scent of livestock thick on it'
    ],
    defenseReason: [
      'the surrounding land is excellent for growing crops',
      'the surrounding land is excellent for grazing livestock',
      'it is an important reststop for armies'
    ]
  },
  'mountains': {
    vignette: [
      'an eagle flies in the distance, rising suddenly as it finds an updraft, soon flying well above the mountains that the castle is built on'
    ],
    defenseReason: [
      'the nearby mines are rich in ores or gems',
      'the nearby pass is the easiest way to cross the mountains',
      'the surrounding land is excellent for growing crops',
      'the surrounding land is excellent for grazing livestock'
    ]
  },
  'river coast': {
    vignette: [
      'a child walks along, drenched from playing in the river'
    ],
    defenseReason: [
      'the nearby river is important for trade',
      'the surrounding land is excellent for growing crops',
      'the surrounding land is excellent for grazing livestock'
    ]
  },
  'seacoast': {
    vignette: [
      'the scent of brine fills your noses, accompanied by the gentle lull of the waves'
    ],
    defenseReason: [
      'the nearby harbor is important for trade',
      'the tactical advantage of its position by the sea is incredibly important'
    ]
  },
  'jungle': {
    vignette: [
      'the buzz of mosquitos in the air fills your ears; even in this corner of civilisation in the jungle, nobody is safe from the tiny bloodsuckers.'
    ],
    defenseReason: [
      'the surrounding land is excellent for growing crops',
      'the nearby source of freshwater is precious is in this region',
      'the cleared area in the jungle renders an incredible tactical advantage'
    ]
  },
  'volcanic field': {
    vignette: [
      'the stench of sulphur seeps into your nostrils; it does not seem to bother any of the locals, but to your noses, this volcanic field stinks.'
    ],
    defenseReason: [
      'the nearby mines are rich in ores or gems',
      'the nearby pass is the easiest way to cross the mountains',
      'the volcanic field poses makes it difficult to attack',
      'the volcanic field is believed to be sacred',
      'the nearby source of freshwater is precious is in this region'
    ]
  },
  'wasteland': {
    vignette: [
      'a single bird flies overhead, and you see a man trying to take aim with a bow.'
    ],
    defenseReason: [
      'the nearby source of freshwater is precious in this region',
      'the wild lands beyond are full of threats',
      'the wasteland it is built upon used to be full of life',
      'the wasteland is dangerous, posing a tactical advantage for the defenders'
    ]
  },
  'oasis': {
    vignette: [
      'there is a woman carrying a jug of water, moving carefully so as to not spill anything.'
    ],
    defenseReason: [
      'the oasis provides incredibly precious water in the region',
      'the oasis renders long-term sieges incredibly difficult'
    ]
  },
  'desert': {
    vignette: [
      'there is a condensation trap set up, which a man is checking; a few precious drops have been collected.'
    ],
    defenseReason: [
      'the desert is a valuable tactical chokepoint'
    ]
  },
  'tundra': {
    vignette: [
      'you can see a man carrying a single hare, a seemingly inconsequential hunt, though the man is beaming from ear to ear.'
    ],
    defenseReason: [
      'the wild lands beyond are full of threats',
      'the fortified walls are an important tactical component'
    ]
  },
  'ice sheet': {
    vignette: [
      'you see a group of men huddling around a fire, warming their hands, complaining about the cold.'
    ],
    defenseReason: [
      'the nearby source of freshwater is precious in this region',
      'the nearby harbor is important for trade',
      'it is the only point of absolute safety amongst the ice sheets'
    ]
  }
})
