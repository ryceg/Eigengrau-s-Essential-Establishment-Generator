setup.resourcesFaction = function (faction) {
  var resourcesList = ['old favours', 'chests of gold', 'gems', 'contacts', 'shinies', 'debtors', 'trade goods', 'artifacts', 'magic trinkets', 'magic weapons', 'magic scrolls', 'bits of blackmail material']
  var groupSizeModifier = ((faction.resourcesRoll - 50) + ((faction.reputationRoll - 50) + (faction.sizeRoll - 50)) / 2)
  var resources = []
  var i
  // this is where weighting different groups happens. Needs updating with each new faction.
  resourcesList.concat(setup.factionData.type[faction.type].resources)

  if (faction.ageRoll > 95) {
    faction.resourcesRoll += Math.fm(faction.resourcesRoll, 15)
  } else if (faction.ageRoll > 90) {
    faction.resourcesRoll += Math.fm(faction.resourcesRoll, 10)
  } else if (faction.ageRoll > 80) {
    faction.resourcesRoll += Math.fm(faction.resourcesRoll, 8)
  } else if (faction.ageRoll > 70) {
    faction.resourcesRoll += Math.fm(faction.resourcesRoll, 6)
  } else if (faction.ageRoll > 60) {
    faction.resourcesRoll += Math.fm(faction.resourcesRoll, 4)
  } else if (faction.ageRoll > 55) {
    faction.resourcesRoll += Math.fm(faction.resourcesRoll, 2)
  } else if (faction.ageRoll > 50) {
    faction.resourcesRoll += Math.fm(faction.resourcesRoll, 1)
  } else if (faction.ageRoll > 45) {
    faction.resourcesRoll += Math.fm(faction.resourcesRoll, -1)
  } else if (faction.ageRoll > 40) {
    faction.resourcesRoll += Math.fm(faction.resourcesRoll, -2)
  } else if (faction.ageRoll > 30) {
    faction.resourcesRoll += Math.fm(faction.resourcesRoll, -4)
  } else if (faction.ageRoll > 20) {
    faction.resourcesRoll += Math.fm(faction.resourcesRoll, -6)
  } else if (faction.ageRoll > 10) {
    faction.resourcesRoll += Math.fm(faction.resourcesRoll, -8)
  } else if (faction.ageRoll <= 5) {
    faction.resourcesRoll += Math.fm(faction.resourcesRoll, -10)
  } else {
    faction.resourcesRoll += Math.fm(faction.resourcesRoll, 10)
  }

  // if (faction.ageRoll > 95) {
  //   faction.resourcesRoll += 15
  // } else if (faction.ageRoll > 90) {
  //   faction.resourcesRoll += 10
  // } else if (faction.ageRoll > 80) {
  //   faction.resourcesRoll += 8
  // } else if (faction.ageRoll > 70) {
  //   faction.resourcesRoll += 6
  // } else if (faction.ageRoll > 60) {
  //   faction.resourcesRoll += 4
  // } else if (faction.ageRoll > 55) {
  //   faction.resourcesRoll += 2
  // } else if (faction.ageRoll > 50) {
  //   faction.resourcesRoll += 1
  // } else if (faction.ageRoll > 45) {
  //   faction.resourcesRoll += -1
  // } else if (faction.ageRoll > 40) {
  //   faction.resourcesRoll += -2
  // } else if (faction.ageRoll > 30) {
  //   faction.resourcesRoll += -4
  // } else if (faction.ageRoll > 20) {
  //   faction.resourcesRoll += -6
  // } else if (faction.ageRoll > 10) {
  //   faction.resourcesRoll += -8
  // } else if (faction.ageRoll <= 5) {
  //   faction.resourcesRoll += -10
  // } else {
  //   faction.resourcesRoll += 10
  // }

  if (faction.resourcesRoll > 95) {
    faction.resourcesDescription = 'limitless'
    for (i = 1; i <= 5; ++i) { getResources(random(-10, 15)) }
  } else if (faction.resourcesRoll > 90) {
    faction.resourcesDescription = 'near limitless'
    for (i = 1; i <= 4; ++i) { getResources(random(-10, 10)) }
  } else if (faction.resourcesRoll > 80) {
    faction.resourcesDescription = 'extensive'
    for (i = 1; i <= 4; ++i) { getResources(random(-15, 5)) }
  } else if (faction.resourcesRoll > 70) {
    faction.resourcesDescription = 'significant'
    for (i = 1; i <= 4; ++i) { getResources(random(-20, 5)) }
  } else if (faction.resourcesRoll > 60) {
    faction.resourcesDescription = 'many'
    for (i = 1; i <= 3; ++i) { getResources(random(-10, 5)) }
  } else if (faction.resourcesRoll > 55) {
    faction.resourcesDescription = 'decent'
    for (i = 1; i <= 3; ++i) { getResources(random(-15, 5)) }
  } else if (faction.resourcesRoll > 50) {
    faction.resourcesDescription = 'average'
    for (i = 1; i <= 3; ++i) { getResources(random(-20, 5)) }
  } else if (faction.resourcesRoll > 45) {
    faction.resourcesDescription = 'slightly below average'
    getResources(random(10, 15))
    getResources(random(-20, 5))
    getResources(random(-20, -5))
  } else if (faction.resourcesRoll > 40) {
    faction.resourcesDescription = 'somewhat limited'
    getResources(random(5, 15))
    getResources(random(-20, 0))
  } else if (faction.resourcesRoll > 30) {
    faction.resourcesDescription = 'limited'
    getResources(random(5, 10))
    getResources(random(-20, 0))
  } else if (faction.resourcesRoll > 20) {
    faction.resourcesDescription = 'quite poor'
    getResources(random(5, 15))
    getResources(random(-20, 0))
  } else if (faction.resourcesRoll > 10) {
    faction.resourcesDescription = 'extremely poor'
    getResources(random(-15, 5))
    getResources(random(-20, 0))
  } else if (faction.resourcesRoll <= 5) {
    faction.resourcesDescription = 'destitute'
    getResources(random(-20, -10))
    getResources(random(-30, -10))
  } else {
    faction.resourcesDescription = 'average'
  }

  function getResources (bonus) {
    var tempGroup
    var tempGroupSize
    var groupSizeRoll = (dice(2, 50)) + (groupSizeModifier + bonus)
    if (groupSizeRoll >= 90) {
      tempGroupSize = 'an enormous amount of '
    } else if (groupSizeRoll >= 80) {
      tempGroupSize = 'more than enough '
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
      tempGroupSize = 'some '
    }

    tempGroup = resourcesList.pluck()
    // console.log('resources tempGroup - ' + tempGroup)
    resourcesList.delete(tempGroup)

    var group = tempGroupSize + tempGroup
    // console.log('resources group - ' + group)
    resources.push(group)
    // console.log('resourcess - ' + resourcess)
    return resources
  }
  faction.resources = resources
  return faction
}
