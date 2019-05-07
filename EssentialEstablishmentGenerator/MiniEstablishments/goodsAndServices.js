setup.goodsAndServices = {
  bakery: {
    create: function (town, opts) {
      opts = opts || {}
      var building = {
        type: 'bakery'
      }
      Object.assign(building, (opts['newBuilding'] || setup.createBuilding)(town, building.type))
      building.owner = setup.createNPC(town, (opts['professionOpts'] || setup.goodsAndServices[building.type].profession.opts))
      building.name = setup.goodsAndServices[building.type].name.function(town, building)
      return building
    },
    name: {
      function: function (town, building) {
        var name = setup.goodsAndServices[building.type].name
        var unique = name.unique.random() || 'The ' + town.name + ' ' + name.wordNoun.random().toUpperFirst()
        return [
          'The ' + name.adjective.random().toUpperFirst() + ' ' + [name.noun.random().toUpperFirst(), name.wordNoun.random().toUpperFirst()],
          'The ' + name.foodAdjective.random().toUpperFirst() + ' ' + name.noun.random().toUpperFirst(),
          'The ' + town.name + ' ' + name.wordNoun.random().toUpperFirst(),
          unique
        ].random()
      },
      unique: [
        'The Really Good Bakery',
        'Warm Angry Rabbits'
      ],
      noun: [
        'pie',
        'bread',
        'loaf',
        'crust',
        'pan',
        'crumb'
      ],
      adjective: [
        'inscrutable',
        'indominatable',
        'cheery',
        'happy',
        'hopeful',
        'morning',
        'waking'

      ],
      foodAdjective: [
        'delicious',
        'delectable',
        'stale',
        'hot',
        'fresh'
      ],
      wordNoun: [
        'bakery',
        'bakeshop',
        'patisserie',
        'biscuit factory',
        'boulangerie',
        'bakehouse'
      ]
    },
    passageFormat: [
      // each array string will be a new line.
      'You ' + ['enter', 'walk into', 'open the door to'] + ' $currentPassage.name'
    ],
    profession: {
      name: 'baker',
      opts: {
        profession: 'baker',
        hasClass: false
      }
    },
    goods: {
      'loaf of rye bread': {
        cost: 5
      },
      'loaf of barley bread': {
        cost: 8
      },
      'stale bread': {
        cost: 2
      }
    },
    type: 'bakery',
    notableFeature: [
      // you notice ...
      'the smell of freshly baked bread fills the air.',
      'that a rat scurries away as you enter!',
      'there are no other people inside the bakery.'
    ],
    specialty: [
      'discounted breads at the end of the week.',
      'the delicious pies that they bake daily.',
      'the sweet pastries that they sell.'
    ]
  }
}
