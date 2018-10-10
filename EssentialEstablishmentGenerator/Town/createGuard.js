setup.createGuard = function (town) {
  var guard = {
    captain: setup.createNPC({
      dndClass: 'fighter',
      background: 'soldier',
      gender: ['man', 'man', 'man', 'woman'].random()
    }),
    passageName: 'GuardOutput',
    primaryColours: [
      'black',
      'red',
      'scarlet',
      'forest green',
      'royal blue',
      'light blue',
      'magenta',
      'pale yellow',
      'brown',
      'dark grey',
      'gunmetal',
      'maroon',
      'navy blue',
      'steel',
      'olive green'].random(),
    secondaryColours: [
      'black',
      'gold',
      'silver',
      'white',
      'pearl white',
      'purple'].random(),
    insignia: [
      'a skull',
      'a bow & arrow',
      'an eagle',
      'a star',
      'an axe',
      'a set of crossed spears',
      'a shield',
      'a ghost',
      'a clenched fist',
      'a flame',
      'an arrow',
      'a dagger',
      'a sword',
      'a hammer',
      'the sun',
      'the moon',
      'a bat',
      'a bull',
      'a dragon',
      'a falcon',
      'a lion',
      'a raven',
      'a scorpion',
      'a snake',
      'a vulture',
      'a wolf'].random()
  }
  guard.livery = guard.primaryColours + ' and ' + guard.secondaryColours + ' livery adorned with an image of ' + guard.insignia

  var guardnameA = ['Regiment', 'Guard', 'Officers', 'Guardsmen', 'Protectors', 'Protectorate', 'Defenders', 'Watch', 'Watchers', 'Watchmen', 'Police', 'Peacemen', 'Axemen', 'Swordsmen', 'Pikesmen', 'Squad', 'Batallion', 'Battlesquad', 'Fighters', 'Keepers'].random()
  var guardnameB = ['Justice', 'Righteousness', 'Law', 'Order', 'Safety', 'Strength', town.name, town.name, town.name].random()
  var guardnameC = ['Black', 'White', 'Shining', 'Just', 'Tall', 'Impenetrable', 'Unbreakable', 'Brass', 'Bronze', 'Blue', 'Strong', 'Mighty', 'Lawful'].random()
  var guardnameD = ['Hand', 'Fist', 'Gauntlet', 'Glove', 'Hammer', 'Shield', 'Cloak', 'Dagger', 'Mace', 'Sword'].random()

  var guardnameRoll = random(1, 6)
  switch (guardnameRoll) {
    case 1:
      guard.name = 'The ' + guardnameA + ' of ' + town.name
      break
    case 2:
      guard.name = 'The ' + town.name + ' ' + guardnameA
      break
    case 3:
      guard.name = 'The ' + guardnameA + ' of ' + guardnameB
      break
    case 4:
      guard.name = 'The ' + guardnameC + ' ' + guardnameA
      break
    case 5:
      guard.name = 'The ' + guardnameC + ' ' + guardnameD
      break
    default:
      guard.name = 'The ' + guardnameC + ' ' + guardnameD + ' of ' + guardnameB
  }
  return guard
}
