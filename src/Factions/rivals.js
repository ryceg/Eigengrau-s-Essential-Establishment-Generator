setup.createRivals = function (faction) {
  console.log('accruing enemies...')
  const _sizeRoll = dice(2, 50)
  let group
  const groupList = ['commoners', 'knights', 'politicians', 'thieves', 'merchants', 'wizards', 'rangers', 'seers', 'priests', 'monks', 'assassins', 'artisans', 'nobles', 'bards', 'mercenaries', 'bandits', 'craftsmen', 'scholars']
  const groupSizeModifier = ((_sizeRoll - 50) + ((faction.roll.reputation - 50) + (faction.roll.influence - 50)))
  const rivals = []
  let i

  // this is where weighting different groups happens. Needs updating with each new faction.
  groupList.concat(setup.factionData.type[faction.type].rivalsList)

  if (_sizeRoll >= 90) {
    faction.rivalsDescription = 'managed to become almost universally disliked'
    for (i = 1; i <= 6; ++i) { getRivalGroup(20) }
  } else if (_sizeRoll >= 80) {
    faction.rivalsDescription = 'enemies around every corner'
    for (i = 1; i <= 5; ++i) { getRivalGroup(25) }
  } else if (_sizeRoll >= 70) {
    faction.rivalsDescription = 'some fearsome enemies'
    for (i = 1; i <= 4; ++i) { getRivalGroup(20) }
  } else if (_sizeRoll >= 60) {
    faction.rivalsDescription = 'more enemies than one would expect'
    for (i = 1; i <= 3; ++i) { getRivalGroup(15) }
  } else if (_sizeRoll >= 50) {
    faction.rivalsDescription = 'some enemies'
    for (i = 1; i <= 2; ++i) { getRivalGroup(10) }
  } else if (_sizeRoll >= 40) {
    faction.rivalsDescription = 'a handful of rivals'
    getRivalGroup(10)
    getRivalGroup(-10)
  } else if (_sizeRoll >= 30) {
    faction.rivalsDescription = 'a couple enemies'
    getRivalGroup(-15)
  } else if (_sizeRoll >= 20) {
    faction.rivalsDescription = 'few rivals'
    getRivalGroup(10)
  } else if (_sizeRoll < 20) {
    faction.rivalsDescription = 'barely any rivals'
    getRivalGroup(10)
  }

  function getRivalGroup (bonus) {
    let tempGroup
    const groupSizeRoll = (dice(2, 50)) + (groupSizeModifier + bonus)

    const tempGroupSize = setup.matchFirst.largerThanOrEqualTo(groupSizeRoll, {
      90: 'a guild of ',
      80: 'a veritable army of ',
      70: 'a large number of ',
      60: 'quite a few ',
      50: 'more than a couple ',
      40: 'a couple ',
      30: 'some ',
      20: 'a few',
      10: 'a handful of '
    }, 'three or four ')

    tempGroup = groupList.pluck()
    // console.log('rival tempGroup - ' + tempGroup)
    groupList.delete(tempGroup)
    if (tempGroup === faction.type) {
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
