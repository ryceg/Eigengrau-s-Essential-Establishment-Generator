setup.building = {
  create: function (town, building, opts) {
    var structure = {}
    var tempMaterial = setup.weightedRandomFetcher(town, setup.building.material, building, 'object')
    if (tempMaterial.variations) {
      var material = setup.weightedRandomFetcher(town, setup.building.material[tempMaterial].variations, building, 'object')
    } else {
      material = tempMaterial
    }
    Object.assign(structure.material, material.words)
    return structure
  },
  material: {
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
    },
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
          verb: 'strawed'
        }
      },
      'plank': {
        words: {
          noun: 'plank',
          verb: 'planked'
        }
      },
      'tile': {
        words: {
          noun: 'tile',
          verb: 'tiled'
        },
        prefix: [
          ''
        ]
      },
      'shingle': {
        words: {
          noun: 'shingle',
          verb: 'shingled'
        }
      }
    }
  }
}
