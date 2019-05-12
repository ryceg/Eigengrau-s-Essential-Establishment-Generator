setup.building = {
  material: {
    'wood': {
      probability: 40,
      variations: {
        'log': {
          probability: 10,
          words: {
            // you come across _ log cabin
            indefiniteArticle: 'a',
            noun: 'log',
            adjective: 'log'
          }
        },
        'split log': {
          probability: 10,
          words: {
            indefiniteArticle: 'a',
            noun: 'split log',
            adjective: 'split log'
          }
        },
        'wood': {
          probability: 10,
          words: {
            indefiniteArticle: 'a',
            noun: 'wood',
            adjective: 'wooden'
          }
        },
        'timber': {
          probability: 10,
          words: {
            indefiniteArticle: 'a',
            noun: 'timber',
            adjective: 'timber'
          }
        },
        'plank': {
          probability: 10,
          words: {
            indefiniteArticle: 'a',
            noun: 'plank',
            adjective: 'plank'
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
        wordNoun: 'terra cotta',
        wordAdjective: 'terra cotta'
      }
    },
    'adobe': {
      probability: 30,
      words: {
        indefiniteArticle: 'an',
        wordNoun: 'adobe',
        wordAdjective: 'adobe'
      }
    },
    'daub': {
      probability: 30,
      words: {
        indefiniteArticle: 'a',
        wordNoun: 'daub',
        wordAdjective: 'daub'
      }
    },
    'cob': {
      probability: 5,
      words: {
        indefiniteArticle: 'a',
        wordNoun: 'cob',
        wordAdjective: 'cob'
      }
    },
    'plaster': {
      probability: 30,
      words: {
        indefiniteArticle: 'a',
        wordNoun: 'plaster',
        wordAdjective: 'plaster'
      }
    },
    'rock': {
      probability: 10,
      words: {
        indefiniteArticle: 'a',
        wordNoun: 'rock',
        wordAdjective: 'rock'
      }
    },
    'straw': {
      probability: 15,
      words: {
        indefiniteArticle: 'a',
        wordNoun: 'straw',
        wordAdjective: 'straw'
      }
    },
    'hewn rock': {
      probability: 5,
      words: {
        indefiniteArticle: 'a',
        wordNoun: 'hewn rock',
        wordAdjective: 'hewn rock'
      }
    },
    'stone': {
      probability: 5,
      words: {
        indefiniteArticle: 'a',
        wordNoun: 'stone',
        wordAdjective: 'stone'
      }
    },
    'brick': {
      probability: 1,
      words: {
        indefiniteArticle: 'a',
        wordNoun: 'brick',
        wordAdjective: 'brick'
      }
    },
    'clay': {
      probability: 5,
      words: {
        indefiniteArticle: 'a',
        wordNoun: 'clay',
        wordAdjective: 'clay'
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
