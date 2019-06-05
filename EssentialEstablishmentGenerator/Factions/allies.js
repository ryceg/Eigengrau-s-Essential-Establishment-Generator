
setup.createAllies = function (faction) {
  console.log('finding allies...')
  const _sizeRoll = dice(2, 50)
  let group
  const groupList = ['commoners', 'knights', 'politicians', 'thieves', 'merchants', 'wizards', 'rangers', 'seers', 'priests', 'monks', 'assassins', 'artisans', 'nobles', 'bards', 'mercenaries', 'bandits', 'craftsmen', 'scholars']
  const groupSizeModifier = ((_sizeRoll - 50) + ((faction.roll.reputation - 50) + (faction.roll.size - 50)))
  const allies = []
  let i

  // this is where weighting different groups happens. Needs updating with each new faction.
  groupList.concat(setup.factionData.type[faction.type].alliesList)

  if (_sizeRoll >= 90) {
    faction.alliesDescription = 'an immense number of people to rely on for aid'
    for (i = 1; i <= 6; ++i) { getAllyGroup(random(-10, 15)) }
  } else if (_sizeRoll >= 80) {
    faction.alliesDescription = 'many allies'
    for (i = 1; i <= 5; ++i) { getAllyGroup(random(-15, 15)) }
  } else if (_sizeRoll >= 70) {
    faction.alliesDescription = 'a considerable number of allies'
    for (i = 1; i <= 4; ++i) { getAllyGroup(random(-20, 15)) }
  } else if (_sizeRoll >= 60) {
    faction.alliesDescription = 'a decent number of allies'
    for (i = 1; i <= 3; ++i) { getAllyGroup(15) }
  } else if (_sizeRoll >= 50) {
    faction.alliesDescription = 'some strong allies'
    for (i = 1; i <= 2; ++i) { getAllyGroup(10) }
  } else if (_sizeRoll >= 40) {
    faction.alliesDescription = 'a handful of trusted allies'
    getAllyGroup(10)
    getAllyGroup(-10)
  } else if (_sizeRoll >= 30) {
    faction.alliesDescription = 'a couple trusted allies'
    getAllyGroup(-15)
  } else if (_sizeRoll >= 20) {
    faction.alliesDescription = 'few allies'
    getAllyGroup(10)
  } else if (_sizeRoll < 20) {
    faction.alliesDescription = 'barely any allies'
    getAllyGroup(10)
  }

  function getAllyGroup (bonus) {
    let tempGroup
    let tempGroupSize
    const groupSizeRoll = (dice(2, 50)) + (groupSizeModifier + bonus)
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
    // console.log('tempGroup - ' + tempGroup)
    groupList.delete(tempGroup)
    if (tempGroup === faction.type) {
      tempGroup = 'fellow ' + tempGroup
    }
    // while (alliedGroups.indexOf(tempGroup) !== -1) {
    //   tempGroup = groupList.pluck()
    // }
    // alliedGroups.push(tempGroup)
    group = tempGroupSize + tempGroup
    // console.log('group - ' + group)
    allies.push(group)
    // console.log('allies - ' + allies)
    return allies
  }
  faction.allies = allies
  return faction
}
