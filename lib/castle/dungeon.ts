
 interface DungeonData {
  knownFor: string[]
  secret: string[]
  location: {
    castle: string[]
    standalone: string[]
  }
  age: string[]
  format: string[]
  cells: {
    prisoners: {
      treatment: string[]
    }
    condition: string[]
    format: string[]
  }
  rooms: {
    type: string[]
    feature: string[]
  }
}

export const dungeon: DungeonData = {
  knownFor: [
    'many prisoners dying in a terrible plague',
    'a mass escape in the past',
    'the escape of a famous criminal',
    'being the final home of a famous criminal',
    'being the final home of a legendary hero',
    'being haunted by vengeful ghosts',
    'its horrific torture pits',
    'never suffering a successful escape',
    'its quirky jailer',
    'the quality of its meals'
  ],
  secret: [
    'a secret tunnel to the outside',
    'the remnants of a long-lost hero',
    'the preserved head of an ancient villain',
    'a terrible beast to which prisoners are fed',
    'a missing lord or lady',
    'a famous jewel by a notorious prisoner',
    'a unique and terrible torture device',
    'the corpse of a deposed king or queen'
  ],
  location: {
    castle: [
      'in a tower set apart from the main castle',
      'beneath the keep',
      'in a flanking tower of the castle',
      'beneath the flanking tower in the castle',
      'in a corner tower of the castle',
      'beneath the corner tower'
    ],
    standalone: [
      'at the bottom of a deep ravine',
      'on top of a cliff with a long drop down',
      'on the inside of a bend in a river',
      'built inside of a tall mountain',
      'surrounded on three sides by mountains',
      'on top of a hill in the middle of a city',
      'suspended off of the underside of an overhang, dangling with a precarious path up to it',
      'in the middle of a salt pan',
      'deep into the steppes, days away from civilization',
      'submerged in the middle of a lake - halfway to the bottom',
      'chiseled into an enormous glacier',
      'buried underneath sand in a desert, with few markers of its location',
      'built into the branches of a series of trees',
      'built inside a hollowed out giant tree',
      'deep underground, near the bottom of a deep system of caverns',
      'clinging on the roof of a giant cave with one set of stairs leading to the top'
    ]
  },
  age: [
    'as part of the original castle',
    'as a later addition',
    'for another purpose originally',
    'long before most of the castle',
    'by the original owner of the castle'
  ],
  format: [
    'a sprawling maze of twisting passages',
    'a sprawling maze of narrow passages',
    'organized into small, neat rows of cells or pits',
    'organized around a large central cell block or pit',
    'only a few rooms',
    'an endless series of long corridors',
    'an endless series of small rooms and staircases',
    'a series of corridors with very low ceilings'
  ],
  cells: {
    prisoners: {
      treatment: [
        'humanely; they receive reasonable meals, some exercise, and healing when needed',
        'like dogs; they receive poor quality meals and enough healing to keep them alive',
        'like rats; they receive terrible meals and are plagued by sickness',
        'like they don’t exist; occasionally they receive food'
      ]
    },
    condition: [
      'well-maintained; the walls are solid',
      'aging, but sturdy; the walls have some cracks',
      'decrepit; the walls are crumbling',
      'so dark it’s difficult to say what condition they are in'
    ],
    format: [
      'individual cells, in complete isolation',
      'individual cells, but they can see and hear other prisoners',
      'individual cells, but they can hear other prisoners',
      'cells that accommodate up to two prisoners',
      'cells that accommodate up to two prisoners, each shackled to the wall',
      'cells that accommodate up to four prisoners',
      'cells that accommodate up to four prisoners, each shackled to the wall',
      'a large chamber with many other prisoners, each shackled to the wall',
      'individual pits or wells, open at the top',
      'one or more huge pit with many other prisoners'
    ]
  },
  rooms: {
    type: [
      'a dungeon cell',
      'another dungeon cell',
      'a passageway connecting cell blocks',
      'a guardroom',
      'the barracks',
      'the jailer’s quarters',
      'a yard or large indoor space for exercise',
      'a small dining room',
      'an interrogation room',
      'a torture chamber'
    ],
    feature: [
      'a wooden door reinforced with steel bands',
      'steel bars where you expected a stone wall',
      'empty manacles along the wall',
      'an empty sconce to hold a torch',
      'distant torchlight',
      'the floor is uneven',
      'a crack in the stone floor',
      'a mouse skittering underfoot',
      'the stench of rotting flesh',
      'the scent of stale urine',
      'a putrid smell',
      'a dank and moldy odor',
      'an uncomfortable groaning',
      'a faint scratching sound',
      'an odd tapping sound',
      'the squeaking of rats',
      'the shouting of distant voices',
      'howls of agony',
      'horrific screams',
      'the clanking of chains',
      'the distinct smell of stale blood'
    ]
  }
}
