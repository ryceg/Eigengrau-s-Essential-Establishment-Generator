setup.createBartender = function (town, associatedBuilding) {
  const bartender = setup.createNPC(town, {
    // associatedBuilding: associatedBuilding,
    associatedTown: town.name,
    owner: ['owner', 'caretaker', 'proud owner', 'proprietor', 'current owner', 'manager', 'manager', 'acting manager'].seededrandom(),
    dndClass: ['bartender', 'bartender', 'bartender', 'bartender', 'bartender', 'bartender', 'bartender', 'bartender', 'bartender', 'bartender', 'bartender', 'bartender', 'bartender', 'barbarian', 'bard', 'cleric', 'druid', 'fighter', 'monk', 'rogue', 'ranger', 'paladin', 'sorcerer', 'warlock', 'wizard'].seededrandom(),
    profession: 'bartender'
  })
  Object.assign(bartender, {
    greeting: [
      'nods at you',
      'welcomes you warmly',
      'smiles and greets you',
      'raises a hand with a wave',
      'sizes you up, before ' + bartender.heshe + ' nods at you',
      'checks you out for just a moment before smiling at you'],
    idle: [
      'polishing a glass with $bartender.hisher hands',
      'reading a newspaper which says <<print $newspaperheadline>>',
      'pouring a drink for a customer',
      'taking an order from a customer',
      'taking an order from a customer',
      'talking with a customer',
      'picking ' + bartender.hisher + ' nose',
      'scratching ' + bartender.hisher + ['buttocks', 'bum', 'nose'].seededrandom(),
      'playing a card game by ' + bartender.himherself,
      'checking the stock levels of the beer on tap',
      'shouting into the kitchen, annoyed',
      'yelling instructions into the kitchen',
      'leaning against a stool, surveying the work of one of the barmaids',
      'pouring a beer from one of the taps',
      'zoned out staring at a wall',
      'lighting some candles on the bar',
      'handing a customer their food',
      'barking orders at one of the barmaids',
      'breaking up a fight in front of the bar']
  })
  return bartender
}
