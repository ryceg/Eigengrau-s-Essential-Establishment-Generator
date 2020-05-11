
setup.createTavern = function (town, opts) {
  opts = opts || {}
  const tavern = (opts['newBuilding'] || setup.createBuilding)(town, 'tavern')

  tavern.name = setup.createTavernName()
  console.groupCollapsed(tavern.name)
  tavern.bartender = (opts['newBartender'] || setup.createBartender)(town, tavern.name)
  tavern.barmaid = setup.createNPC(town, {
    isShallow: true,
    gender: 'woman',
    background: 'commoner',
    hasClass: false,
    profession: 'barmaid'
  })
  setup.createRelationship(town, tavern.bartender, tavern.barmaid, 'employee', 'employer')

  Object.assign(tavern, {
    passageName: 'TavernOutput',
    initPassage: 'InitTavern',
    buildingType: 'tavern',
    stageDescriptor: setup.tavern.stageDescriptor.seededrandom(),
    wordNoun: ['tavern', 'tavern', 'tavern', 'tavern', 'pub', 'pub', 'pub', 'inn', 'inn', 'bar', 'bar', 'bar', 'watering hole', 'drinkery'].seededrandom(),
    shortages: ['wine', 'booze', 'grog', 'whiskey', 'mutton', 'lamb', 'carrots', 'mugs', 'forks', 'frogs', 'bread', 'mushrooms', 'salt', 'silver pieces', 'chairs', 'eggs', 'potatoes'],
    fun: setup.tavern.fun.seededrandom(),
    type: [
      'quiet and low-key bar',
      'regular',
      'regular',
      'regular',
      'regular',
      'raucous dive',
      'raucous dive',
      'raucous dive',
      'raucous dive',
      "thieves' guild hangout",
      'gathering place for a secret society',
      'high-end dining club',
      'high-end dining club',
      'gambling den',
      'gambling den',
      tavern.bartender.race + ' only club',
      "guild-member's only club",
      "guild-member's only club",
      'members-only club',
      'brothel',
      'brothel'
    ].seededrandom(),
    // patrons: setup.tavern.patrons.seededrandom(),
    game: setup.tavern.games.seededrandom()
  })
  tavern.roll.bedCleanliness = random(1, 100)

  Object.assign(tavern, setup.tavern.get.draws(town, tavern))

  if (tavern.draw === 'proximity to the church') {
    if (tavern.type.indexOf(['gambling den', 'proximity to the brothel', 'raucous dive']) !== -1) {
      tavern.draw = 'proximity to the brothel'
    } else if (tavern.type === 'brothel') {
      tavern.draw = 'cheap prices for customers'
      tavern.hasBrothel = true
    }
  }
  switch (tavern.draw) {
    case "tavern.reputation + ' atmosphere'":
      tavern.notableFeature = 'its ' + tavern.reputation + ' atmosphere'
      break
    default:
      tavern.notableFeature = 'its ' + tavern.draw
  }
  setup.tavernModifiers(town, tavern)
  tavern.wealth = ''
  tavern.size = ''
  tavern.cleanliness = ''
  tavern.expertise = ''
  tavern.lodging = ''
  tavern.sin = ''
  tavern.food = ''
  tavern.colour1 = [setup.colours.yellow.colour.seededrandom(), setup.colours.orange.colour.seededrandom(), setup.colours.red.colour.seededrandom(), setup.colours.purple.colour.seededrandom(), setup.colours.blue.colour.seededrandom(), setup.colours.green.colour.seededrandom(), setup.colours.brown.colour.seededrandom(), setup.colours.black.colour.seededrandom(), setup.colours.white.colour.seededrandom()].seededrandom()
  tavern.colour2 = [setup.colours.yellow.colour.seededrandom(), setup.colours.orange.colour.seededrandom(), setup.colours.red.colour.seededrandom(), setup.colours.purple.colour.seededrandom(), setup.colours.blue.colour.seededrandom(), setup.colours.green.colour.seededrandom(), setup.colours.brown.colour.seededrandom(), setup.colours.black.colour.seededrandom(), setup.colours.white.colour.seededrandom()].seededrandom()
  tavern.bedCleanliness = ''
  // Define entertainment if large enough
  if (tavern.roll.size >= 30) {
    tavern.entertainment = setup.tavern.get.entertainment(tavern)
  } else tavern.entertainment = ''
  // Define tavern feature based on wealth
  if (tavern.roll.wealth <= 35) {
    tavern.feature = setup.tavern.get.cheapFeature(tavern)
  } else if (tavern.roll.wealth <= 65) {
    tavern.feature = setup.tavern.get.averageFeature(tavern)
  } else if (tavern.roll.wealth > 65) {
    tavern.feature = setup.tavern.get.wealthyFeature(tavern)
  }
  // Sets up building structure and creates building description
  setup.structure.create(town, tavern)
  tavern.structure.tavernDescriptor = tavern.structure.material.wealth + ' ' + tavern.structure.material.noun + ' ' + tavern.wordNoun + ' with a ' + tavern.structure.roof.verb + ' roof'
  const rollData = setup.tavern.rollData

  Object.defineProperty(tavern, 'lodging', {
    get () {
      console.log('Fetching ' + tavern.name + ' lodging.')
      let lodging = rollData.wealth.find(function (descriptor) {
        return descriptor[0] <= this.roll.wealth
      }, this)
      if (lodging === undefined) {
        lodging = rollData.wealth[rollData.wealth.length - 1]
      }
      this._lodging = lodging[2]
      return this._lodging
    }
  })
  Object.defineProperty(tavern, 'food', {
    get () {
      console.log('Fetching ' + tavern.name + ' food.')
      let food = rollData.wealth.find(function (descriptor) {
        return descriptor[0] <= this.roll.wealth
      }, this)
      if (food === undefined) {
        food = rollData.wealth[rollData.wealth.length - 1]
      }
      this._food = food[2]
      return this._food
    }
  })
  Object.defineProperty(tavern, 'bedCleanliness', {
    get () {
      console.log('Fetching ' + tavern.name + ' bed cleanliness.')
      let bedCleanliness = rollData.cleanliness.find(function (descriptor) {
        return descriptor[0] <= this.roll.bedCleanliness
      }, this)
      if (bedCleanliness === undefined) {
        bedCleanliness = rollData.cleanliness[rollData.cleanliness.length - 1]
      }
      this._bedCleanliness = bedCleanliness[1]
      return this._bedCleanliness
    }
  })
  Object.defineProperty(tavern, 'sin', {
    get () {
      console.log('Fetching ' + tavern.name + ' sin.')
      if (this.roll.sin > 80) {
        this._sin = 'corrupt'
      } else if (this.roll.sin > 70) {
        this._sin = 'venal'
      } else if (this.roll.sin > 60) {
        this._sin = 'sleazy'
      } else if (this.roll.sin > 50) {
        this._sin = 'seedy'
      } else if (this.roll.sin > 40 && this.roll.reputation > 60) {
        this._sin = 'surprisingly trustworthy'
      } else if (this.roll.sin > 40) {
        this._sin = 'trustworthy'
      } else if (this.roll.sin > 30 && this.roll.reputation > 60) {
        this._sin = 'surprisingly reliable'
      } else if (this.roll.sin > 30) {
        this._sin = 'reliable'
      } else if (this.roll.sin <= 20 && this.roll.reputation > 60) {
        this._sin = 'surprisingly honest'
      } else if (this.roll.sin <= 20) {
        this._sin = 'honest'
      } else {
        this._sin = 'reasonably trustworthy'
      }
      return this._sin
    }
  })

  const rollDataVariables = ['wealth', 'size', 'cleanliness', 'roughness', 'reputation']
  for (const propName of rollDataVariables) {
    setup.defineRollDataGetter(tavern, setup.tavern.rollData, propName)
  }
  // setup.tavernRender(tavern)
  // setup.townBinder(town, tavern, 'tavern')
  tavern.tippyDescription = 'A ' + tavern.size + ' ' + tavern.wordNoun + " that's " + tavern.cleanliness + ', and is known for ' + tavern.notableFeature + '.'
  console.log(tavern)
  console.groupEnd()
  return tavern
}
