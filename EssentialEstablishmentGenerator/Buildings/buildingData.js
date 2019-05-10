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
    'plaster': {
      probability: 30,
      words: {
        indefiniteArticle: 'a',
        wordNoun: 'plaster',
        wordAdjective: 'plaster'
      }
    },
    'stone': {
      probability: 1,
      words: {
        indefiniteArticle: 'a',
        wordNoun: 'stone',
        wordAdjective: 'stone'
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
