setup.structure = {
  create (town, building, opts) {
    console.groupCollapsed(`Creating the structure for ${setup.articles.output(building.wordNoun || 'building')}`)
    if (!building) {
      building = {}
    }
    building.wordNoun = building.wordNoun || opts.wordNoun || 'building'

    if (!building.structure) {
      building.structure = {
        get descriptor () {
          return this.descriptors.random()
        },
        set descriptorsAdd (description) {
          if (typeof description === 'string') {
            console.log(this.descriptors)
            if (this.descriptors.includes(description)) {
              console.log('Throwing out duplicate description...')
            } else {
              this.descriptors.push(description)
            }
          } else {
            console.log(`Expected a string operand and received ${description}`)
          }
        },
        material: {},
        roof: {}
      }
    }
    if (!building.material) {
      let tempMaterial = lib.weightedRandomFetcher(town, setup.structure.material.types, null, null, 'object')
      if (Object.keys(tempMaterial).includes('variations')) {
        console.log('Building material has variations. ')
        tempMaterial = lib.weightedRandomFetcher(town, tempMaterial.variations, null, null, 'object')
      }
      console.log('tempMaterial')
      console.log(tempMaterial)
      building.structure.material = tempMaterial
    } else {
      building.structure.material = building.material
    }

    building.structure.roof = lib.weightedRandomFetcher(town, setup.structure.roof.types, null, null, 'object')

    if (building.structure.roof.canBeColoured === true) {
      building.structure.roof.colour = setup.structure.data.colour.random()
      building.structure.roof.verb = `${building.structure.roof.colour} ${building.structure.roof.verb}`
      building.structure.roof.noun = `${building.structure.roof.colour} ${building.structure.roof.noun}`
    }

    setup.defineRollDataGetter(building.structure.roof, setup.structure.roof.rollData, 'wealth', 'wealth', '', building.roll)
    setup.defineRollDataGetter(building.structure.material, setup.structure.material.rollData, 'wealth', 'wealth', '', building.roll)

    building.structure.descriptors = [
      `${setup.articles.output(building.structure.material.noun)} ${[building.wordNoun, 'building'].random()} with ${setup.articles.output(building.structure.roof.wealth)} ${building.structure.roof.verb} roof`,
      `${setup.articles.output(building.structure.material.wealth)} ${building.structure.material.noun} ${[building.wordNoun, 'building'].random()} with ${setup.articles.output(building.structure.roof.wealth)} ${building.structure.roof.verb} roof`
    ]

    if (building.size) {
      building.structure.descriptorsAdd(
        `${setup.articles.output(building.size)} and ${building.structure.material.wealth} ${building.structure.material.noun} ${building.wordNoun} with ${setup.articles.output(building.structure.roof.verb)} roof`
      )
    }
    console.log(building.structure)
    console.groupEnd()
    return building
  },
  data: {
    colour: [
      'red',
      'blue',
      'grey',
      'black',
      'white',
      'yellow',
      'orange'
    ],
    rollData: {
      size: [
        [95, 'cavernous'],
        [80, 'huge'],
        [70, 'quite large'],
        [60, 'large'],
        [50, 'spacious'],
        [40, 'average sized'],
        [30, 'somewhat cramped'],
        [20, 'small'],
        [10, 'tiny'],
        [0, 'extremely cramped']
      ]
    }
  },
  material: {
    rollData: {
      wealth: [
        [90, 'solid'],
        [80, 'finely crafted'],
        [70, 'well built'],
        [60, 'decently built'],
        [50, 'ageing'],
        [30, 'poorly made'],
        [20, 'run down'],
        [10, 'crumbling'],
        [0, 'structurally unsound'],
        [-100, 'death-trap tier']
        // FIXME currently defineRollDataGetter.js is mishandling rolls that are lower than any of the items.
      ]
    },
    types: {
      'wood': {
        probability: 40,
        tier: [1, 2],
        variations: {
          'log': {
            probability: 10,
            noun: 'log'
          },
          'split log': {
            probability: 10,
            noun: 'split log'
          },
          'wood': {
            probability: 10,
            noun: 'wood'
          },
          'timber': {
            probability: 10,
            noun: 'timber'
          },
          'plank': {
            probability: 10,
            noun: 'plank'
          }
        }
      },
      'terra cotta': {
        probability: 30,
        tier: [1],
        noun: 'terra cotta'
      },
      'adobe': {
        probability: 30,
        tier: [1],
        noun: 'adobe'
      },
      'daub': {
        probability: 30,
        tier: [1],
        noun: 'daub'
      },
      'cob': {
        probability: 5,
        tier: [1],
        noun: 'cob'
      },
      'plaster': {
        probability: 30,
        tier: [3],
        noun: 'plaster'
      },
      'rock': {
        probability: 10,
        tier: [1],
        noun: 'rock'
      },
      'straw': {
        probability: 15,
        tier: [1],
        noun: 'straw'
      },
      'hewn rock': {
        probability: 5,
        tier: [2],
        noun: 'hewn rock'
      },
      'stone': {
        probability: 5,
        tier: [2],
        noun: 'stone'
      },
      'brick': {
        probability: 1,
        tier: [3],
        noun: 'brick'
      },
      'clay': {
        probability: 5,
        tier: [1],
        noun: 'clay'
      },
      'cobblestone': {
        probability: 5,
        tier: [1],
        noun: 'cobblestone'
      },
      'limestone': {
        probability: 5,
        tier: [3],
        noun: 'limestone'
      },
      'gypsum': {
        probability: 5,
        tier: [3],
        noun: 'gypsum'
      }
    }
  },
  roof: {
    rollData: {
      wealth: [
        [90, 'perfectly maintained'],
        [80, 'well maintained'],
        [60, 'weathered'],
        [40, 'shabby'],
        [30, 'moss covered'],
        [20, 'patchy'],
        [0, 'hole riddled'],
        [-100, 'hole riddled']
      ]
    },
    types: {
      thatch: {
        probability: 40,
        noun: 'thatch',
        verb: 'thatched'
      },
      straw: {
        probability: 30,
        noun: 'straw',
        verb: 'straw'
      },
      plank: {
        probability: 20,
        noun: 'plank',
        verb: 'planked'
      },
      tile: {
        probability: 25,
        canBeColoured: true,
        noun: 'tile',
        verb: 'tiled'
      },
      shingle: {
        probability: 10,
        canBeColoured: true,
        noun: 'shingle',
        verb: 'shingled'
      }
    }
  }
}
