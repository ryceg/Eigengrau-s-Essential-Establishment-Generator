setup.goodsAndServices = {
  bakery: {
    create: function (town, opts) {
      opts = opts || {}
      var building = {
        type: 'bakery',
        BuildingType: 'bakery'
      }
      Object.assign(building, (opts['newBuilding'] || setup.createBuilding)(town, building.type))
      building.owner = setup.createNPC(town, (opts['professionOpts'] || setup.goodsAndServices[building.type].profession.opts))
      building.name = setup.goodsAndServices[building.type].name.function(town, building)
      building.notableFeature = setup.goodsAndServices[building.type].notableFeature.seededrandom()
      building.specialty = setup.goodsAndServices[building.type].specialty.seededrandom()
      building.wordNoun = setup.goodsAndServices[building.type].name.wordNoun.seededrandom()
      return building
    },
    name: {
      function: function (town, building) {
        var name = setup.goodsAndServices[building.type].name
        var unique = name.unique.seededrandom() || 'The ' + town.name + ' ' + name.wordNoun.seededrandom().toUpperFirst()
        return [
          'The ' + name.adjective.seededrandom().toUpperFirst() + ' ' + [name.noun.seededrandom().toUpperFirst(), name.wordNoun.seededrandom().toUpperFirst()],
          'The ' + name.foodAdjective.seededrandom().toUpperFirst() + ' ' + name.noun.seededrandom().toUpperFirst(),
          'The ' + town.name + ' ' + name.wordNoun.seededrandom().toUpperFirst(),
          unique
        ].seededrandom()
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
      'You ' + ['enter', 'walk into', 'open the door to'].random() + ' $building.name. You notice $building.notableFeature',
      'This $building.wordNoun is known for $building.specialty There is a <<profile $building.owner>> currently <<print $building.owner.idle.random()>>. <<print $building.owner.heshe.toUpperFirst()>> welcomes you, and asks what you are after.'
    ],
    profession: {
      name: 'baker',
      opts: {
        profession: 'baker',
        hasClass: false,
        idle: [
          // name is currently _______
          'kneading some dough',
          'serving a customer',
          'boiling a pot of water',
          'pulling something out of the oven',
          'sprinkling some seeds on a loaf'
        ]
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
      // you notice _______
      'the smell of freshly baked bread fills the air.',
      'that a rat scurries away as you enter!',
      'there are no other people inside the bakery.'
    ],
    specialty: [
      // the bakery is known for _______
      'discounted breads at the end of the week.',
      'the delicious pies that they bake daily.',
      'the sweet pastries that they sell.'
    ]
  }
}
