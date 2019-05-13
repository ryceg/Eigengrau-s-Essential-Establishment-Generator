/* global setup */
setup.building = {
  create: function (town, building, opts) {
    if (!building) {
      building = {}
    }
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
    var tempMaterial = setup.weightedRandomFetcher(town, setup.building.material, '', '', 'object')
    if (Object.keys(tempMaterial).includes('variations')) {
      console.log('Has variations. ')
      tempMaterial = setup.weightedRandomFetcher(town, tempMaterial.variations, '', '', 'object')
      // tempMaterial = temp2
      console.log(tempMaterial.words)
    }
    building.structure.material = tempMaterial.words

    var tempRoof = setup.weightedRandomFetcher(town, setup.building.roof.material, '', '', 'object')
    if (Object.keys(tempRoof).includes('variations')) {
      console.log('Has variations. ')
      tempRoof = setup.weightedRandomFetcher(town, tempMaterial.variations, '', '', 'object')
      // tempMaterial = temp2
      console.log(tempRoof.words)
    }
    if (tempRoof.canBeColoured === true) {
      var colour = setup.building.data.colour.seededrandom()
      Object.keys(tempRoof.words).forEach(function (roof) {
        tempRoof.words[roof] = colour + ' ' + tempRoof.words[roof]
      })
    }
    building.wordNoun = building.wordNoun || 'building'
    building.structure.roof = tempRoof.words
    building.structure.roof.wealth = ''
    building.structure.material.wealth = ''
    setup.defineRollDataGetter(building.structure.roof, setup.building.roof.rollData, 'wealth', 'wealth', '', building.roll)
    setup.defineRollDataGetter(building.structure.material, setup.building.material.rollData, 'wealth', 'wealth', '', building.roll)
    building.structure.descriptors = [
      'a ' + building.size + ' and ' + building.structure.material.wealth + ' ' + building.structure.material.noun + ' ' + building.wordNoun + ' with a ' + building.structure.roof.verb + ' roof.',
      building.structure.material.indefiniteArticle + ' ' + building.structure.material.noun + ' ' + building.wordNoun + ' with a ' + building.structure.roof.wealth + ' ' + building.structure.roof.verb + ' roof.',
      'a ' + building.structure.material.wealth + ' ' + building.structure.material.noun + ' ' + building.wordNoun + ' with a ' + building.structure.roof.verb + ' roof.'
    ]
    console.log(building.structure)
    return building
  },
  data: {
    colour: [
      'red',
      'red',
      'blue',
      'grey',
      'grey',
      'black',
      'white',
      'white',
      'yellow',
      'orange'
    ]
  },
  material: {
    rollData: {
      'wealth': [
        [90, 'solid'],
        [70, 'well built'],
        [50, ''],
        [30, 'poorly made'],
        [20, 'run down'],
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
        },
        exclusion: function (town, building) {
          if (building.exclusions.material.includes('wood')) {
            return false
          } else {
            return true
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
    }
  },
  roof: {
    material: {
      'thatch': {
        words: {
          noun: 'thatch',
          verb: 'thatched'
        }
      },
      'straw': {
        words: {
          noun: 'straw',
          verb: 'straw'
        }
      },
      'plank': {
        words: {
          noun: 'plank',
          verb: 'planked'
        }
      },
      'tile': {
        canBeColoured: true,
        words: {
          noun: 'tile',
          verb: 'tiled'
        }
      },
      'shingle': {
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
        [60, ''],
        [40, 'somewhat shabby'],
        [30, 'moss covered'],
        [20, 'patchy'],
        [0, 'hole riddled']
      ]
    }
  }
}
