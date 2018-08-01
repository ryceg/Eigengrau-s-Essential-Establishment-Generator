setup.createRivals = function (faction) {
  let sizeRoll = dice(2, 50)
  let group
  let groupList = ['commoners', 'knights', 'politicians', 'thieves', 'merchants', 'wizards', 'rangers', 'seers', 'priests', 'monks', 'assassins', 'artisans', 'nobles', 'bards', 'mercenaries', 'bandits', 'craftsmen', 'scholars']
  let groupSizeModifier = ((sizeRoll - 50) + ((faction.reputationRoll - 50) + (faction.influenceRoll - 50)))
  let rivals = []
  let type = faction.type
  let i

  // this is where weighting different groups happens. Needs updating with each new faction.
  groupList.concat(factionData.type[type].rivalsList)

  if (sizeRoll >= 90) {
    faction.rivalsDescription = 'managed to become almost universally disliked'
    for (i = 1; i <= 6; ++i) { getRivalGroup(20) }
  } else if (sizeRoll >= 80) {
    faction.rivalsDescription = 'enemies around every corner'
    for (i = 1; i <= 5; ++i) { getRivalGroup(25) }
  } else if (sizeRoll >= 70) {
    faction.rivalsDescription = 'some fearsome enemies'
    for (i = 1; i <= 4; ++i) { getRivalGroup(20) }
  } else if (sizeRoll >= 60) {
    faction.rivalsDescription = 'more enemies than one would expect'
    for (i = 1; i <= 3; ++i) { getRivalGroup(15) }
  } else if (sizeRoll >= 50) {
    faction.rivalsDescription = 'some enemies'
    for (i = 1; i <= 2; ++i) { getRivalGroup(10) }
  } else if (sizeRoll >= 40) {
    faction.rivalsDescription = 'a handful of rivals'
    getRivalGroup(10)
    getRivalGroup(-10)
  } else if (sizeRoll >= 30) {
    faction.rivalsDescription = 'a couple enemies'
    getRivalGroup(-15)
  } else if (sizeRoll >= 20) {
    faction.rivalsDescription = 'few rivals'
    getRivalGroup(10)
  } else if (sizeRoll < 20) {
    faction.rivalsDescription = 'barely any rivals'
    getRivalGroup(10)
  }

  function getRivalGroup (bonus) {
    let tempGroup
    let tempGroupSize
    let groupSizeRoll = (dice(2, 50)) + (groupSizeModifier + bonus)
    if (groupSizeRoll >= 90) {
      tempGroupSize = 'a guild of '
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
    // console.log('rival tempGroup - ' + tempGroup)
    groupList.delete(tempGroup)
    if (tempGroup == faction.type) {
      tempGroup = 'rival ' + tempGroup
    }
    group = tempGroupSize + tempGroup
    // console.log('rival group - ' + group)
    rivals.push(group)
    // console.log('rivals - ' + rivals)
    return rivals
  }
  faction.rivals = rivals
  return faction
}
