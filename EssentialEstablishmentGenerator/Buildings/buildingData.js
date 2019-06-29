
setup.structure = {
  create (town, building, opts) {
    console.groupCollapsed('Creating the structure for a ' + (building.wordNoun || 'building'))
    if (!building) {
      building = {}
    }
    building.wordNoun = building.wordNoun || opts.wordNoun || 'building'

    if (!building.structure) {
      building.structure = {
        get descriptor () {
          return this.descriptors.seededrandom()
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
            console.log('Expected a string operand and received ' + description)
          }
        },
        material: {},
        roof: {}
      }
    }
    let tempMaterial = setup.weightedRandomFetcher(town, setup.structure.material, '', '', 'object')
    if (Object.keys(tempMaterial).includes('variations')) {
      console.log('Building material has variations. ')
      tempMaterial = setup.weightedRandomFetcher(town, tempMaterial.variations, '', '', 'object')
    }
    console.log('tempMaterial')
    console.log(tempMaterial)
    building.structure.material = tempMaterial.words

    let tempRoof = setup.weightedRandomFetcher(town, setup.structure.roof.material, '', '', 'object')
    if (Object.keys(tempRoof).includes('variations')) {
      console.log('Building roof has variations.')
      tempRoof = setup.weightedRandomFetcher(town, tempMaterial.variations, '', '', 'object')
      // tempMaterial = temp2
      console.log(tempRoof.words)
    }
    if (tempRoof.canBeColoured === true) {
      const colour = setup.structure.data.colour.seededrandom()
      Object.keys(tempRoof.words).forEach(function (roof) {
        tempRoof.words[roof] = `${colour} ${tempRoof.words[roof]}`
      })
    }
    building.structure.roof = tempRoof.words
    console.log(`Got up to here`)
    console.log({ building })

    console.log('Roof getter:')
    setup.defineRollDataGetter(building.structure.roof, setup.structure.roof.rollData, 'wealth', 'wealth', '', building.roll)
    console.log('Material getter:')
    setup.defineRollDataGetter(building.structure.material, setup.structure.material.rollData, 'wealth', 'wealth', '', building.roll)

    building.structure.descriptors = [
      `${building.structure.material.indefiniteArticle} ${building.structure.material.noun} ${[building.wordNoun, 'building'].random()} with a ${building.structure.roof.wealth} ${building.structure.roof.verb} roof'`,
      `a ${building.structure.material.wealth} ${building.structure.material.noun} ${[building.wordNoun, 'building'].random()} with a ${building.structure.roof.verb} roof`
    ]

    if (building.size) {
      building.structure.descriptorsAdd('a ' + building.size + ' and ' + building.structure.material.wealth + ' ' + building.structure.material.noun + ' ' + building.wordNoun + ' with a ' + building.structure.roof.verb + ' roof')
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
    'rollData': {
      // exclusions is necessary to avoid rollData being included in the weightedRandomFetcher
      exclusions () { return false },
      wealth: [
        [90, 'solid'],
        [80, 'finely crafted'],
        [70, 'well built'],
        [60, 'decently built'],
        [50, 'ageing'],
        [30, 'poorly made'],
        [20, 'run down'],
        [10, 'crumbling'],
        [0, 'structurally unsound']
      ]
    },
    'wood': {
      probability: 40,
      variations: {
        'log': {
          probability: 10,
          words: {
            // you come across _ log cabin
            indefiniteArticle: 'a',
            noun: 'log'
          }
        },
        'split log': {
          probability: 10,
          words: {
            indefiniteArticle: 'a',
            noun: 'split log'
          }
        },
        'wood': {
          probability: 10,
          words: {
            indefiniteArticle: 'a',
            noun: 'wood'
          }
        },
        'timber': {
          probability: 10,
          words: {
            indefiniteArticle: 'a',
            noun: 'timber'
          }
        },
        'plank': {
          probability: 10,
          words: {
            indefiniteArticle: 'a',
            noun: 'plank'
          }
        }
      }
    },
    'terra cotta': {
      probability: 30,
      words: {
        indefiniteArticle: 'a',
        noun: 'terra cotta'
      }
    },
    'adobe': {
      probability: 30,
      words: {
        indefiniteArticle: 'an',
        noun: 'adobe'
      }
    },
    'daub': {
      probability: 30,
      words: {
        indefiniteArticle: 'a',
        noun: 'daub'
      }
    },
    'cob': {
      probability: 5,
      words: {
        indefiniteArticle: 'a',
        noun: 'cob'
      }
    },
    'plaster': {
      probability: 30,
      words: {
        indefiniteArticle: 'a',
        noun: 'plaster'
      }
    },
    'rock': {
      probability: 10,
      words: {
        indefiniteArticle: 'a',
        noun: 'rock'
      }
    },
    'straw': {
      probability: 15,
      words: {
        indefiniteArticle: 'a',
        noun: 'straw'
      }
    },
    'hewn rock': {
      probability: 5,
      words: {
        indefiniteArticle: 'a',
        noun: 'hewn rock'
      }
    },
    'stone': {
      probability: 5,
      words: {
        indefiniteArticle: 'a',
        noun: 'stone'
      }
    },
    'brick': {
      probability: 1,
      words: {
        indefiniteArticle: 'a',
        noun: 'brick'
      }
    },
    'clay': {
      probability: 5,
      words: {
        indefiniteArticle: 'a',
        noun: 'clay'
      }
    },
    'cobblestone': {
      probability: 5,
      words: {
        indefiniteArticle: 'a',
        noun: 'cobblestone'
      }
    },
    'limestone': {
      probability: 5,
      words: {
        indefiniteArticle: 'a',
        noun: 'limestone'
      }
    },
    'gypsum': {
      probability: 5,
      words: {
        indefiniteArticle: 'a',
        noun: 'gypsum'
      }
    }
  },
  roof: {
    material: {
      thatch: {
        words: {
          noun: 'thatch',
          verb: 'thatched'
        }
      },
      straw: {
        words: {
          noun: 'straw',
          verb: 'straw'
        }
      },
      plank: {
        words: {
          noun: 'plank',
          verb: 'planked'
        }
      },
      tile: {
        canBeColoured: true,
        words: {
          noun: 'tile',
          verb: 'tiled'
        }
      },
      shingle: {
        canBeColoured: true,
        words: {
          noun: 'shingle',
          verb: 'shingled'
        }
      }
    },
    rollData: {
      wealth: [
        [90, 'perfectly maintained'],
        [80, 'well maintained'],
        [60, 'weathered'],
        [40, 'shabby'],
        [30, 'moss covered'],
        [20, 'patchy'],
        [0, 'hole riddled']
      ]
    }
  }
}
