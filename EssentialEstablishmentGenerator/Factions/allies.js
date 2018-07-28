setup.createAllies = function (faction) {
  var sizeRoll = dice(2, 50)
  var group
  var groupType = ['commoners', 'knights', 'politicians', 'thieves', 'merchants', 'wizards', 'rangers', 'seers', 'priests', 'monks', 'assassins', 'artisans', 'nobles', 'bards', 'mercenaries', 'bandits', 'craftsmen', 'scholars']
  var groupSizeModifier = ((sizeRoll - 50) + ((faction.reputationRoll - 50) + (faction.sizeRoll - 50)))
  var alliesList = []
  var i

  if (sizeRoll >= 90) {
    faction.alliesDescription = 'an immense number of people to rely on for aid'
    for (i = 1; i <= 6; ++i) { getGroup(20) }
  } else if (sizeRoll >= 80) {
    faction.alliesDescription = 'many allies'
    for (i = 1; i <= 5; ++i) { getGroup(25) }
  } else if (sizeRoll >= 70) {
    faction.alliesDescription = 'a considerable number of allies'
    for (i = 1; i <= 4; ++i) { getGroup(20) }
  } else if (sizeRoll >= 60) {
    faction.alliesDescription = 'a decent number of allies'
    for (i = 1; i <= 3; ++i) { getGroup(15) }
  } else if (sizeRoll >= 50) {
    faction.alliesDescription = 'some strong allies'
    for (i = 1; i <= 2; ++i) { getGroup(10) }
  } else if (sizeRoll >= 40) {
    faction.alliesDescription = 'a handful of trusted allies'
    getGroup(10)
    getGroup(-10)
  } else if (sizeRoll >= 30) {
    faction.alliesDescription = 'a couple trusted allies'
    getGroup(-15)
  } else if (sizeRoll >= 20) {
    faction.alliesDescription = 'few allies'
    getGroup(10)
  } else if (sizeRoll < 20) {
    faction.alliesDescription = 'barely any allies'
    getGroup(10)
  }

  function getGroup (bonus) {
    var tempGroup
    var tempGroupSize
    var groupSizeRoll = (dice(2, 50)).fairmath(groupSizeModifier + bonus)
    if (groupSizeRoll >= 90) {
      tempGroupSize = 'an entire guild of '
    } else if (groupSizeRoll >= 80) {
      tempGroupSize = 'a veritable army of '
    } else if (groupSizeRoll >= 70) {
      tempGroupSize = 'a large number of '
    } else if (groupSizeRoll >= 60) {
      tempGroupSize = 'quite a few '
    } else if (groupSizeRoll >= 50) {
      tempGroupSize = 'more than a couple '
    } else if (groupSizeRoll >= 40) {
      tempGroupSize = 'a couple '
    } else if (groupSizeRoll >= 30) {
      tempGroupSize = 'some '
    } else if (groupSizeRoll >= 20) {
      tempGroupSize = 'a few '
    } else if (groupSizeRoll >= 10) {
      tempGroupSize = 'a handful of '
    } else {
      tempGroupSize = 'three or four '
    }

    tempGroup = groupType.pluck()
    group = tempGroupSize + tempGroup
    alliesList.push(group)
    return alliesList
  }
  faction.allies = alliesList
  return faction
}
