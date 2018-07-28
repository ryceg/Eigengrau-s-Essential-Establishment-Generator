setup.createRivals = function (faction) {
  var sizeRoll = dice(2, 50)
  var group
  var groupList = ['commoners', 'knights', 'politicians', 'thieves', 'merchants', 'wizards', 'rangers', 'seers', 'priests', 'monks', 'assassins', 'artisans', 'nobles', 'bards', 'mercenaries', 'bandits', 'craftsmen', 'scholars']
  var groupSizeModifier = ((sizeRoll - 50) + ((faction.reputationRoll - 50) + (faction.influenceRoll - 50)))
  var alliedGroups = []
  var rivals = []
  var i

  // this is where weighting different groups happens. Needs updating with each new faction.
  setup.createRivalsList(groupList, faction)

  if (sizeRoll >= 90) {
    faction.rivalsDescription = 'managed to become almost universally disliked'
    for (i = 1; i <= 6; ++i) { getGroup(20) }
  } else if (sizeRoll >= 80) {
    faction.rivalsDescription = 'enemies around every corner'
    for (i = 1; i <= 5; ++i) { getGroup(25) }
  } else if (sizeRoll >= 70) {
    faction.rivalsDescription = 'a considerable number of groups that wish them ill'
    for (i = 1; i <= 4; ++i) { getGroup(20) }
  } else if (sizeRoll >= 60) {
    faction.rivalsDescription = 'more enemies than one would expect'
    for (i = 1; i <= 3; ++i) { getGroup(15) }
  } else if (sizeRoll >= 50) {
    faction.rivalsDescription = 'some fearsome enemies'
    for (i = 1; i <= 2; ++i) { getGroup(10) }
  } else if (sizeRoll >= 40) {
    faction.rivalsDescription = 'a handful of rivals'
    getGroup(10)
    getGroup(-10)
  } else if (sizeRoll >= 30) {
    faction.rivalsDescription = 'a couple enemies'
    getGroup(-15)
  } else if (sizeRoll >= 20) {
    faction.rivalsDescription = 'few rivals'
    getGroup(10)
  } else if (sizeRoll < 20) {
    faction.rivalsDescription = 'barely any rivals'
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

    tempGroup = groupList.pluck()
    groupList.delete(tempGroup)

    group = tempGroupSize + tempGroup
    rivals.push(group)
    return rivals
  }
  faction.rivals = rivals
  return faction
}
