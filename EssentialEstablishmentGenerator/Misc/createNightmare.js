setup.createNightmare = function (base) {
  var location = ['a graveyard. A blood-red moon hangs above',
    'the bedroom from your childhood. There is no door to exit the room',
    'the room you fell asleep in',
    'absolute darkness. In the silence you can hear your own heart beat',
    'an open field. Next to you is a dead oak tree with an empty noose swinging in the breeze',
    'a dark forest. In the corner of your eye you can see something is following you',
    'a dark cave. A low, rhythmic chanting echoes around you',
    'a prison cell. The walls are scratched and your fingernails are bloodied',
    "a long hallway with a door at the end. The door doesn't get closer as you approach",
    'knee deep swamp water. You can feel something touching your leg under the surface' ]
  var figure = {
    'boy': {
      type: 'boy',
      prefix: 'a',
      gender: 'his'
    },
    'girl': {
      type: 'girl',
      prefix: 'a',
      gender: 'her'
    },
    'young man': {
      type: 'young man',
      prefix: 'a',
      gender: 'his'
    },
    'young woman': {
      type: 'young woman',
      prefix: 'a',
      gender: 'her'
    },
    'elderly man': {
      type: 'elderly man',
      prefix: 'an',
      gender: 'his'
    },
    'elderly woman': {
      type: 'elderly woman',
      prefix: 'an',
      gender: 'her'
    },
    'copy of yourself': {
      type: 'copy of yourself',
      prefix: 'a',
      gender: 'his'
    },
    'large dog': {
      type: 'large dog',
      prefix: 'a',
      gender: 'its'
    },
    'large mangy cat': {
      type: 'large mangy cat',
      prefix: 'a',
      gender: 'its'
    },
    'father': {
      type: 'father',
      prefix: 'your',
      gender: 'his'
    },
    'mother': {
      type: 'mother',
      prefix: 'your',
      gender: 'her'
    },
    'shadowy figure': {
      type: 'shadowy figure',
      prefix: 'a',
      gender: 'its'
    },
    'small toy doll': {
      type: 'small toy',
      prefix: 'a',
      gender: 'its'
    },
    'large wolf standing on its hind legs': {
      type: 'large wolf standing on its hind legs',
      prefix: 'a',
      gender: 'its'
    }
  }

  var figureKey = Object.keys(figure)
  var nightmare = Object.assign({
    location: location.seededrandom(),
    figure: figure[figureKey[random(0, figureKey.length)]]
  }, base)

  Object.assign(nightmare, {
    descriptor: [
      "has it's eyes and mouth sewn shut",
      'is decaying. ' + nightmare.figure.gender.toUpperFirst() + ' flesh and hair are falling to the ground',
      'is wheezing loudly. You can feel your throat drying and it gets harder to breath',
      'has blood slowly trickling from the corners of ' + nightmare.figure.gender + ' mouth, then eyes, and finally it appears to be sweating blood',
      nightmare.figure.gender + ' chest bursts open and maggots and worms tumble out, writhing on the floor',
      'has ' + nightmare.figure.gender + ' throat slit. You see the wound open and close slightly with ' + nightmare.figure.gender + ' breathing',
      'has mismatching limbs. It looks to be sewn together using mismatching pieces',
      'has the lower body of an arachnid',
      'has fingernails that continue to grow. They look sharp',
      'is starting to crumble away as if made of ash' ].seededrandom(),
    action: [
      'sprints at you',
      'begins walking slowly toward you',
      'throws ' + nightmare.figure.gender + ' head back and starts cackling wildly',
      'tries to speak, but spiders begin pouring out of ' + nightmare.figure.gender + ' mouth',
      'catches fire at ' + nightmare.figure.gender + ' feet and it quickly spreads up ' + nightmare.figure.gender + ' body',
      'vanishes and reappears inches from your face',
      'grows double ' + nightmare.figure.gender + ' size and begins chasing you',
      'grows horrible, black, leathery wings and begins flying towards you',
      'begins systematically breaking ' + nightmare.figure.gender + ' fingers while staring you in the eye',
      'starts ripping the flesh from ' + nightmare.figure.gender + ' face'].seededrandom(),
    wake: [
      'inches from your face is the ' + nightmare.figure.type,
      'in the darkness you can see the outline of the ' + nightmare.figure.type,
      'the ' + nightmare.figure.type + ' is sprinting towards you, roll initiative. [Player wakes as soon as the figure reaches them. All spells fail and attacks miss against the monster.]',
      'the door to the room opens slowly and the ' + nightmare.figure.type + ' walks in',
      'the party member closest to them is replaced with the ' + nightmare.figure.type,
      'standing over you is the ' + nightmare.figure.type,
      'as you are about to go to sleep you blink and the ' + nightmare.figure.type + ' is in front of you',
      'the ' + nightmare.figure.type + ' is walking toward you slowly. You cannot move',
      'the ' + nightmare.figure.type + ' is dragging away a party member. It looks up and makes eye contact with you'].seededrandom()
  })

  nightmare.readout = 'You find yourself in ' + nightmare.location + '. You see ' + nightmare.figure.prefix + ' ' + nightmare.figure.type + ' which ' + nightmare.descriptor + '. The ' + nightmare.figure.type + ' ' + nightmare.action + '. You wake up in a cold sweat. ' + nightmare.wake.toUpperFirst()

  return nightmare.readout
}
