setup.resourcesFaction = function (faction) {
  console.log('assigning resources...')
  const resourcesList = ['old favours', 'chests of gold', 'gems', 'contacts', 'shinies', 'debtors', 'trade goods', 'artifacts', 'magic trinkets', 'magic weapons', 'magic scrolls', 'bits of blackmail material']
  const groupSizeModifier = ((faction.roll.resources - 50) + ((faction.roll.reputation - 50) + (faction.roll.size - 50)) / 2)
  const resources = []
  let i
  // this is where weighting different groups happens. Needs updating with each new faction.
  resourcesList.concat(setup.factionData.type[faction.type].resources)

  if (faction.roll.age > 95) {
    faction.roll.resources += Math.fm(faction.roll.resources, 15)
  } else if (faction.roll.age > 90) {
    faction.roll.resources += Math.fm(faction.roll.resources, 10)
  } else if (faction.roll.age > 80) {
    faction.roll.resources += Math.fm(faction.roll.resources, 8)
  } else if (faction.roll.age > 70) {
    faction.roll.resources += Math.fm(faction.roll.resources, 6)
  } else if (faction.roll.age > 60) {
    faction.roll.resources += Math.fm(faction.roll.resources, 4)
  } else if (faction.roll.age > 55) {
    faction.roll.resources += Math.fm(faction.roll.resources, 2)
  } else if (faction.roll.age > 50) {
    faction.roll.resources += Math.fm(faction.roll.resources, 1)
  } else if (faction.roll.age > 45) {
    faction.roll.resources += Math.fm(faction.roll.resources, -1)
  } else if (faction.roll.age > 40) {
    faction.roll.resources += Math.fm(faction.roll.resources, -2)
  } else if (faction.roll.age > 30) {
    faction.roll.resources += Math.fm(faction.roll.resources, -4)
  } else if (faction.roll.age > 20) {
    faction.roll.resources += Math.fm(faction.roll.resources, -6)
  } else if (faction.roll.age > 10) {
    faction.roll.resources += Math.fm(faction.roll.resources, -8)
  } else if (faction.roll.age <= 5) {
    faction.roll.resources += Math.fm(faction.roll.resources, -10)
  } else {
    faction.roll.resources += Math.fm(faction.roll.resources, 10)
  }

  // if (faction.roll.age > 95) {
  //   faction.roll.resources += 15
  // } else if (faction.roll.age > 90) {
  //   faction.roll.resources += 10
  // } else if (faction.roll.age > 80) {
  //   faction.roll.resources += 8
  // } else if (faction.roll.age > 70) {
  //   faction.roll.resources += 6
  // } else if (faction.roll.age > 60) {
  //   faction.roll.resources += 4
  // } else if (faction.roll.age > 55) {
  //   faction.roll.resources += 2
  // } else if (faction.roll.age > 50) {
  //   faction.roll.resources += 1
  // } else if (faction.roll.age > 45) {
  //   faction.roll.resources += -1
  // } else if (faction.roll.age > 40) {
  //   faction.roll.resources += -2
  // } else if (faction.roll.age > 30) {
  //   faction.roll.resources += -4
  // } else if (faction.roll.age > 20) {
  //   faction.roll.resources += -6
  // } else if (faction.roll.age > 10) {
  //   faction.roll.resources += -8
  // } else if (faction.roll.age <= 5) {
  //   faction.roll.resources += -10
  // } else {
  //   faction.roll.resources += 10
  // }

  if (faction.roll.resources > 95) {
    faction.resourcesDescription = 'limitless'
    for (i = 1; i <= 5; ++i) { getResources(random(-10, 15)) }
  } else if (faction.roll.resources > 90) {
    faction.resourcesDescription = 'near limitless'
    for (i = 1; i <= 4; ++i) { getResources(random(-10, 10)) }
  } else if (faction.roll.resources > 80) {
    faction.resourcesDescription = 'extensive'
    for (i = 1; i <= 4; ++i) { getResources(random(-15, 5)) }
  } else if (faction.roll.resources > 70) {
    faction.resourcesDescription = 'significant'
    for (i = 1; i <= 4; ++i) { getResources(random(-20, 5)) }
  } else if (faction.roll.resources > 60) {
    faction.resourcesDescription = 'many'
    for (i = 1; i <= 3; ++i) { getResources(random(-10, 5)) }
  } else if (faction.roll.resources > 55) {
    faction.resourcesDescription = 'decent'
    for (i = 1; i <= 3; ++i) { getResources(random(-15, 5)) }
  } else if (faction.roll.resources > 50) {
    faction.resourcesDescription = 'average'
    for (i = 1; i <= 3; ++i) { getResources(random(-20, 5)) }
  } else if (faction.roll.resources > 45) {
    faction.resourcesDescription = 'slightly below average'
    getResources(random(10, 15))
    getResources(random(-20, 5))
    getResources(random(-20, -5))
  } else if (faction.roll.resources > 40) {
    faction.resourcesDescription = 'somewhat limited'
    getResources(random(5, 15))
    getResources(random(-20, 0))
  } else if (faction.roll.resources > 30) {
    faction.resourcesDescription = 'limited'
    getResources(random(5, 10))
    getResources(random(-20, 0))
  } else if (faction.roll.resources > 20) {
    faction.resourcesDescription = 'quite poor'
    getResources(random(5, 15))
    getResources(random(-20, 0))
  } else if (faction.roll.resources > 10) {
    faction.resourcesDescription = 'extremely poor'
    getResources(random(-15, 5))
    getResources(random(-20, 0))
  } else if (faction.roll.resources <= 5) {
    faction.resourcesDescription = 'destitute'
    getResources(random(-20, -10))
    getResources(random(-30, -10))
  } else {
    faction.resourcesDescription = 'average'
  }

  function getResources (bonus) {
    let tempGroup
    let tempGroupSize
    const groupSizeRoll = (dice(2, 50)) + (groupSizeModifier + bonus)
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

    const group = tempGroupSize + tempGroup
    // console.log('resources group - ' + group)
    resources.push(group)
    // console.log('resourcess - ' + resourcess)
    return resources
  }
  faction.resources = resources
  return faction
}
