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
  var figure = [
    'boy',
    'girl',
    'young man',
    'young woman',
    'elderly man',
    'elderly woman',
    'copy of yourself',
    'large dog',
    'large mangy cat',
    'father',
    'mother',
    'shadowy figure',
    'small toy doll',
    'large wolf standing on its hind legs']
  var figurePrefix = ['a ', 'a ', 'a ', 'a ', 'an ', 'an ', '', 'a ', 'a ', 'your ', 'your ', 'a ', 'a ', 'a ']
  var nightmare = Object.assign({
    location: location.random()
  }, base)

  var figureRoll = random(1, figure.length)
  Object.assign(nightmare, {
    figure: figure[figureRoll],
    figurePrefix: figurePrefix[figureRoll]
  })

  switch (nightmare.figure) {
    case 'boy':
    case 'young man':
    case 'elderly man':
    case 'father':
      Object.assign(nightmare, {
        figureGender: 'his'
      })
      break
    case 'girl':
    case 'young woman':
    case 'elderly woman':
    case 'mother':
      Object.assign(nightmare, {
        figureGender: 'her'
      })
      break
    default:
      Object.assign(nightmare, {
        figureGender: 'its'
      })
  }

  Object.assign(nightmare, {
    descriptor: [
      "has it's eyes and mouth sewn shut",
      'is decaying. ' + nightmare.figureGender.toUpperFirst() + ' flesh and hair are falling to the ground',
      'is wheezing loudly. You can feel your throat drying and it gets harder to breath',
      'has blood slowly trickling from the corners of ' + nightmare.figureGender + ' mouth, then eyes, and finally it appears to be sweating blood',
      nightmare.figureGender + ' chest bursts open and maggots and worms tumble out, writhing on the floor',
      'has ' + nightmare.figureGender + ' throat slit. You see the wound open and close slightly with ' + nightmare.figureGender + ' breathing',
      'has mismatching limbs. It looks to be sewn together using mismatching pieces',
      'has the lower body of an arachnid',
      'has fingernails that continue to grow. They look sharp',
      'is starting to crumble away as if made of ash' ].random(),
    action: [
      'sprints at you',
      'begins walking slowly toward you',
      'throws ' + nightmare.figureGender + ' head back and starts cackling wildly',
      'tries to speak, but spiders begin pouring out of ' + nightmare.figureGender + ' mouth',
      'catches fire at ' + nightmare.figureGender + ' feet and it quickly spreads up ' + nightmare.figureGender + ' body',
      'vanishes and reappears inches from your face',
      'grows double ' + nightmare.figureGender + ' size and begins chasing you',
      'grows horrible, black, leathery wings and begins flying towards you',
      'begins systematically breaking ' + nightmare.figureGender + ' fingers while staring you in the eye',
      'starts ripping the flesh from ' + nightmare.figureGender + ' face'].random(),
    wake: [
      'inches from your face is the ' + nightmare.figure,
      'in the darkness you can see the outline of the ' + nightmare.figure,
      'the ' + nightmare.figure + ' is sprinting towards you, roll initiative. [Player wakes as soon as the figure reaches them. All spells fail and attacks miss against the monster.]',
      'the door to the room opens slowly and the ' + nightmare.figure + ' walks in',
      'the party member closest to them is replaced with the ' + nightmare.figure,
      'standing over you is the ' + nightmare.figure,
      'as you are about to go to sleep you blink and the ' + nightmare.figure + ' is in front of you',
      'the ' + nightmare.figure + ' is walking toward you slowly. You cannot move',
      'the ' + nightmare.figure + ' is dragging away a party member. It looks up and makes eye contact with you'].random()
  })

  nightmare.readout = 'You find yourself in ' + nightmare.location + '. You see ' + nightmare.figurePrefix + nightmare.figure + ' which ' + nightmare.descriptor + '. The ' + nightmare.figure + ' ' + nightmare.action + '. You wake up in a cold sweat. ' + nightmare.wake.toUpperFirst()

  return nightmare.readout
}
