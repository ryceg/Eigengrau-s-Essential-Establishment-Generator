setup.goodsAndServices = {
  bakery: {
    // the bakery can be used as the scaffolding for others.
    create: function (town, opts) {
      opts = opts || {}
      var building = {
        type: 'bakery',
        BuildingType: 'bakery',
        passageName: 'GenericPassage',
        initPassage: 'GenericPassage'
      }
      Object.assign(building, (opts['newBuilding'] || setup.createBuilding)(town, building.type))
      building.owner = setup.createNPC(town, (opts['professionOpts'] || setup.goodsAndServices[building.type].profession.opts))
      building.name = setup.goodsAndServices[building.type].name.function(town, building)
      building.notableFeature = setup.goodsAndServices[building.type].notableFeature.seededrandom()
      building.specialty = setup.goodsAndServices[building.type].specialty.seededrandom()
      building.wordNoun = setup.goodsAndServices[building.type].name.wordNoun.seededrandom()
      building.PassageFormat = setup.goodsAndServices[building.type].PassageFormat
      building.tippyDescription = 'A ' + building.type + ' on ' + building.road + '. Their specialty is ' + building.specialty + '.'
      return building
    },
    name: {
      function: function (town, building) {
        var name = setup.goodsAndServices[building.type].name
        var unique = name.unique.seededrandom() || 'The ' + town.name + ' ' + name.wordNoun.seededrandom().toUpperFirst()
        return [
          'The ' + name.adjective.seededrandom().toUpperFirst() + ' ' + [name.noun.seededrandom().toUpperFirst(), name.wordNoun.seededrandom().toUpperFirst()].seededrandom(),
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
    PassageFormat: [
      // each array string will be a new line.
      // this will be evaluated by SugarCube; use *SugarCube syntax* for functions.
      'You ' + ['enter', 'walk into', 'open the door to'].random() + ' $building.name. You notice $building.notableFeature',
      '',
      'This $building.wordNoun is known for $building.specialty There is a <<profile $owner $owner.descriptor>> currently <<print $building.owner.idle.random()>>. <<print $building.owner.heshe.toUpperFirst()>> welcomes you, and asks what you are after.',
      '<<goods $building setup.goodsAndServices[$building.type].goods>>'
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
        // cost: in copper pieces. The <<money>> macro handles currency conversion.
        cost: 15,
        // description: used in tooltip.
        description: 'A loaf of rye bread.',
        // exclusions for testing whether it is available. Can be ommitted if it is always available.
        exclusions: function (town, building) {
          if (town.wealth < 20 && building.roll.wealth < 40) {
            return false
          } else {
            return true
          }
        }
      },
      'unleavened bread': {
        cost: 4,
        description: 'A dense and difficult to digest loaf. Typically used as a plate for meats, with the juices soaking into the bread to make it more palatable.'
      },
      'loaf of barley bread': {
        cost: 18,
        description: 'A loaf of barley bread.',
        exclusions: function (town, building) {
          if (town.wealth < 20 && building.roll.wealth < 40) {
            return false
          } else {
            return true
          }
        }
      },
      'stale bread': {
        cost: 2,
        description: 'A stale loaf. Not very appetizing.'
      },
      'biscuit loaf': {
        cost: 13,
        description: 'A loaf sliced and then baked a second time, biscuits last for a long time.'
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
