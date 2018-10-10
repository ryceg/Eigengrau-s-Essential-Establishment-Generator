setup.createAlchemistName = function () {
  var alchemistNameRoll = dice(1, 5)
  var adjective = ['Bubbling', 'Spicy', 'Soggy', 'Fizzy', 'Liquid', 'Fluorescent', 'Clear', 'Alcoholic', 'Abyssal', 'Angelic', 'Elven', 'Measured', 'Marked', 'Glass', 'Glass', 'Copper', 'Corked', 'Burning', 'Red', 'Blue', 'Green', 'Gold', 'Yellow', 'Vile', 'Genuine', 'Original'].random()
  var noun = ['Potion', 'Liquid', 'Fumes', 'Bottle', 'Vial', 'Firewater', 'Mortar and Pestle', 'Lab', 'Laboratory', 'Chemist', 'Alchemist', 'Brewer', 'Lotion', 'Wishes'].random()
  var adjective2 = ['Bubbling', 'Spicy', 'Soggy', 'Fizzy', 'Liquid', 'Fluorescent', 'Clear', 'Alcoholic', 'Abyssal', 'Angelic', 'Elven', 'Measured', 'Marked', 'Glass', 'Glass', 'Copper', 'Corked', 'Burning', 'Red', 'Blue', 'Green', 'Gold', 'Yellow', 'Vile', 'Genuine', 'Original'].random()
  var rider = ['Chemist', 'Alchemist', 'Potion Shop', 'Potionery', 'Ointmentary', 'Juice Bar', 'Lab', 'Laboratory', 'Secret Lair'].random()
  switch (alchemistNameRoll) {
    case 1:
      alchemist.name = 'The ' + adjective + ' ' + noun
      break
    case 2:
      // alchemist.name = chemist.firstName + ' and ' + adjective2
      alchemist.name = 'The ' + adjective + ' ' + noun
      break
    case 3:
      alchemist.name = 'The ' + noun + ' and ' + adjective2
      break
    case 4:
      alchemist.name = 'The ' + adjective + ' ' + rider
      break
    case 5:
      alchemist.name = adjective + ' ' + noun
      break
    default:
      alchemist.name = 'The ' + adjective + ' Alchemist'
  }
  return alchemist.name
}
