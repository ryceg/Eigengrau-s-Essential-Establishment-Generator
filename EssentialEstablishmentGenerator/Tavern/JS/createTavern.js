setup.createTavern = function (town) {
  var tavern = setup.createBuilding(town, 'tavern')
  tavern.name = setup.createTavernNameGen()
  tavern.bartender = setup.createBartender(town, tavern.name)
  var bartender = tavern.bartender
  var barmaid = setup.createNPC({
    gender: 'woman',
    background: 'commoner',
    hasClass: false,
    profession: 'barmaid'
  })
  tavern.barmaid = barmaid
  var shortages = ['wine', 'booze', 'grog', 'whiskey', 'mutton', 'lamb', 'carrots', 'mugs', 'forks', 'frogs', 'bread', 'mushrooms', 'salt', 'silver pieces', 'chairs', 'eggs', 'potatoes']

  Object.assign(tavern, {
    passageName: 'TavernOutput',
    wordnoun: ['tavern', 'tavern', 'tavern', 'tavern', 'pub', 'pub', 'pub', 'inn', 'inn', 'bar', 'bar', 'bar', 'watering hole', 'drinkery'].random(),
    shortages: shortages,
    fun: setup.tavernFun,
    entertainment: setup.tavernEntertainment,
    patrons: setup.tavernPatrons
  })


  Object.assign(tavern, setup.getTavernDraws(town, tavern))
  // tavern.draw = 'the incredible view'
  // tavern.drawFeature = 'the really incredible view'
  tavern.type = [
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
    bartender.race + ' only club',
    "guild-member's only club",
    "guild-member's only club",
    'members-only club',
    'brothel',
    'brothel'
  ].random()

  if (tavern.draw === 'proximity to the church') {
    if (tavern.type.indexOf(['gambling den', 'proximity to the brothel', 'raucous dive']) !== -1) {
      tavern.draw = 'proximity to the brothel'
    } else if (tavern.type === 'brothel') {
      tavern.draw = 'cheap prices for customers'
      tavern.hasBrothel = true
    }
  }
  setup.tavernModifiers(town, tavern)
  setup.tavernRender(tavern)
  return tavern
}
