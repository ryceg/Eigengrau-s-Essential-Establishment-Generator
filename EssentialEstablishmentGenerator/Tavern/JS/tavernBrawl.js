setup.tavernBrawl = function (tavern) {
  var guardRoll = random(1, 100)
  var brawlRoll = random(1, 100)

  /* if ($guard.population > 20
guardRoll += 10
  elesif ($guard.population > 15
guardRoll += 5
  else if ($guard.population > 10
guardRoll += 1
  else if ($guard.population > 5 && $tavern.sizeRoll > 60
guardRoll -= 7
  else if ($guard.population > 5
guardRoll -= 5
  else if ($guard.population <= 5 && $tavern.sizeRoll > 60
guardRoll -= 15
  else if ($guard.population <= 5
guardRoll -= 10
  /if */

  if (guardRoll >= 50) {
    tavern.guardPresent = true
    brawlRoll -= 20
    var tavernGuard = setup.createShallow({dndClass: 'fighter', background: 'soldier', gender: ['man', 'man', 'man', 'woman'].random()})
  } else {
    tavern.guardPresent = false
  }

  if (tavern.populationRoll > 80) {
    brawlRoll += 15
  } else if (tavern.populationRoll > 70) {
    brawlRoll += 13
  } else if (tavern.populationRoll > 60) {
    brawlRoll += 11
  } else if (tavern.populationRoll > 55) {
    brawlRoll += 8
  } else if (tavern.populationRoll > 50) {
    brawlRoll += 0
  } else if (tavern.populationRoll > 40) {
    brawlRoll -= 5
  } else if (tavern.populationRoll > 30) {
    brawlRoll -= 15
  } else if (tavern.populationRoll > 20) {
    brawlRoll -= 20
  } else if (tavern.populationRoll <= 20) {
    brawlRoll -= 40
  }

  if (tavern.roughnessRoll > 80) {
    brawlRoll += 15
  } else if (tavern.roughnessRoll > 70) {
    brawlRoll += 13
  } else if (tavern.roughnessRoll > 60) {
    brawlRoll += 11
  } else if (tavern.roughnessRoll > 55) {
    brawlRoll += 8
  } else if (tavern.roughnessRoll > 50) {
    brawlRoll += 0
  } else if (tavern.roughnessRoll > 40) {
    brawlRoll -= 5
  } else if (tavern.roughnessRoll > 30) {
    brawlRoll -= 15
  } else if (tavern.roughnessRoll > 20) {
    brawlRoll -= 20
  } else if (tavern.roughnessRoll <= 20) {
    brawlRoll -= 40
  }

  if (brawlRoll > 50) {
    tavern.hasBrawl = true
    var brawlInstigator = setup.createShallow({gender: ['man', 'man', 'man', 'woman'].random()})
    var brawlResponder = setup.createShallow({gender: ['man', 'man', 'man', 'woman'].random()})
    tavern.brawl = {
      start: [
        'It seems that the ' + brawlInstigator.descriptor.random() + ' that is currently wrestling with the ' + brawlResponder.descriptor.random() + ' because of ',
        'A ' + brawlInstigator.descriptor.random() + ' has a ' + brawlResponder.descriptor.random() + ' in a headlock. The cause seems to be ',
        "There's some shouting, and then a " + brawlInstigator.descriptor.random() + ' throws a punch at a ' + brawlResponder.descriptor.random() + ', shouting that the  ' + brawlInstigator.descriptor.random() + ' is a bastard. The cause seems to be '
      ].random(),
      reason: [
        'some silly misunderstanding between the two. ',
        'a statement about a sports team that the other disagreed with. ',
        'a botched bet',
        'a business deal',
        'a secret affair has come out. ',
        'a joke was taken way too far. ',
        'a joke was misunderstood, much to the ' + brawlResponder.descriptor.random() + "'s dismay. "
      ].random()
    }
    if (tavern.guardPresent === true) {
      tavern.brawlEnd = [
        'A ' + tavernGuard.descriptor.random() + ' wearing the $guard.livery signifying that they are a member of <<guard $guard>> is currently pulling the ' + brawlInstigator.descriptor.random() + ' off the ' + brawlResponder.descriptor.random() + '.',
        'A member of <<guard $guard>> is currently trying to pull the two apart.'
      ].random()
    } else {
      tavern.brawlEnd = [
        'It seems that the ' + brawlInstigator.descriptor.random() + ' is winning.',
        'It seems that the ' + brawlResponder.descriptor.random() + ' is winning.'
      ].random()
    }
  } else {
    tavern.hasBrawl = false
  }

  return tavern
}
