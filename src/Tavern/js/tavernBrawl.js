
// uses setup.createNPC
setup.tavernBrawl = function (town, tavern) {
  const guardRoll = random(1, 100)
  let brawlRoll = random(1, 100)
  let tavernGuard

  if (guardRoll >= 50) {
    tavern.guardPresent = true
    brawlRoll -= 20
    tavernGuard = setup.createNPC(town, { isShallow: true, profession: 'fighter', background: 'soldier', gender: ['man', 'man', 'man', 'woman'].random() })
  } else {
    tavern.guardPresent = false
  }

  if (tavern.roll.activity > 80) {
    brawlRoll += 15
  } else if (tavern.roll.activity > 70) {
    brawlRoll += 13
  } else if (tavern.roll.activity > 60) {
    brawlRoll += 11
  } else if (tavern.roll.activity > 55) {
    brawlRoll += 8
  } else if (tavern.roll.activity > 50) {
    brawlRoll += 0
  } else if (tavern.roll.activity > 40) {
    brawlRoll -= 5
  } else if (tavern.roll.activity > 30) {
    brawlRoll -= 15
  } else if (tavern.roll.activity > 20) {
    brawlRoll -= 20
  } else if (tavern.roll.activity <= 20) {
    brawlRoll -= 40
  }

  if (tavern.roll.roughness > 80) {
    brawlRoll += 15
  } else if (tavern.roll.roughness > 70) {
    brawlRoll += 13
  } else if (tavern.roll.roughness > 60) {
    brawlRoll += 11
  } else if (tavern.roll.roughness > 55) {
    brawlRoll += 8
  } else if (tavern.roll.roughness > 50) {
    brawlRoll += 0
  } else if (tavern.roll.roughness > 40) {
    brawlRoll -= 5
  } else if (tavern.roll.roughness > 30) {
    brawlRoll -= 15
  } else if (tavern.roll.roughness > 20) {
    brawlRoll -= 20
  } else if (tavern.roll.roughness <= 20) {
    brawlRoll -= 40
  }

  if (brawlRoll > 50) {
    tavern.hasBrawl = true
    const brawlInstigator = setup.createNPC(town, { isShallow: true, gender: ['man', 'man', 'man', 'woman'].random() })
    const brawlResponder = setup.createNPC(town, { isShallow: true, gender: ['man', 'man', 'man', 'woman'].random() })
    tavern.brawl = {
      start: [
        `It seems that the ${brawlInstigator.descriptor} that is currently wrestling with the ${brawlResponder.descriptor} because of `,
        `A ${brawlInstigator.descriptor} has a ${brawlResponder.descriptor} in a headlock. The cause seems to be `,
        `There's some shouting, and then a ${brawlInstigator.descriptor} throws a punch at a ${brawlResponder.descriptor}, shouting that the  ${brawlInstigator.descriptor} is a bastard. The cause seems to be `
      ].random(),
      reason: [
        'some silly misunderstanding between the two. ',
        'a statement about a sports team that the other disagreed with. ',
        'a botched bet',
        'a business deal',
        'a secret affair has come out. ',
        'a joke was taken way too far. ',
        `a joke was misunderstood, much to the ${brawlResponder.descriptor}'s dismay. `
      ].random()
    }
    if (tavern.guardPresent === true) {
      tavern.brawlEnd = [
        `A ${tavernGuard.descriptor} wearing a uniform of <<profile $town.guard>> is currently pulling the ${brawlInstigator.descriptor} off the ${brawlResponder.descriptor}.`,
        'A member of <<profile $town.guard>> is currently trying to pull the two apart.'
      ].random()
    } else {
      tavern.brawlEnd = [
        `It seems that the ${brawlInstigator.descriptor} is winning.`,
        `It seems that the ${brawlResponder.descriptor} is winning.`
      ].random()
    }
  } else {
    tavern.hasBrawl = false
  }

  return tavern
}
