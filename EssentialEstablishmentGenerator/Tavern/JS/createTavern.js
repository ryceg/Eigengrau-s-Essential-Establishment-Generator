/* global setup */
setup.createTavern = function (town, opts) {
  opts = opts || {}
  var tavern = (opts['newBuilding'] || setup.createBuilding)(town.name, 'tavern')

  tavern.name = setup.createTavernName()
  console.groupCollapsed(tavern.name)
  var bartender = (opts['newBartender'] || setup.createBartender)(town.name, tavern.name)
  var barmaid = setup.createNPC({
    gender: 'woman',
    background: 'commoner',
    hasClass: false,
    profession: 'barmaid'
  })
  tavern.barmaid = barmaid
  tavern.bartender = bartender
  var shortages = ['wine', 'booze', 'grog', 'whiskey', 'mutton', 'lamb', 'carrots', 'mugs', 'forks', 'frogs', 'bread', 'mushrooms', 'salt', 'silver pieces', 'chairs', 'eggs', 'potatoes']

  Object.assign(tavern, {
    passageName: 'TavernOutput',
    wordnoun: ['tavern', 'tavern', 'tavern', 'tavern', 'pub', 'pub', 'pub', 'inn', 'inn', 'bar', 'bar', 'bar', 'watering hole', 'drinkery'].random(),
    shortages: shortages,
    fun: setup.tavernData.fun.random(),
    // entertainment: setup.tavernData.entertainment.random(),
    // patrons: setup.tavernData.patrons.random(),
    game: setup.tavernData.games.random()
    // specialBrew: setup.tavernData.specialBrew.random()
  })
  Object.assign(tavern, setup.getTavernDraws(town, tavern))
  // console.log(tavern)
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
  console.groupEnd()
  return tavern
}
