setup.createNightmare = function (base) {
  const figures = [
    {
      type: 'boy',
      prefix: 'a',
      gender: 'his'
    },
    {
      type: 'girl',
      prefix: 'a',
      gender: 'her'
    },
    {
      type: 'young man',
      prefix: 'a',
      gender: 'his'
    },
    {
      type: 'young woman',
      prefix: 'a',
      gender: 'her'
    },
    {
      type: 'elderly man',
      prefix: 'an',
      gender: 'his'
    },
    {
      type: 'elderly woman',
      prefix: 'an',
      gender: 'her'
    },
    {
      type: 'copy of yourself',
      prefix: 'a',
      gender: 'his'
    },
    {
      type: 'large dog',
      prefix: 'a',
      gender: 'its'
    },
    {
      type: 'large mangy cat',
      prefix: 'a',
      gender: 'its'
    },
    {
      type: 'father',
      prefix: 'your',
      gender: 'his'
    },
    {
      type: 'mother',
      prefix: 'your',
      gender: 'her'
    },
    {
      type: 'shadowy figure',
      prefix: 'a',
      gender: 'its'
    },
    {
      type: 'small toy',
      prefix: 'a',
      gender: 'its'
    },
    {
      type: 'large wolf standing on its hind legs',
      prefix: 'a',
      gender: 'its'
    }
  ]

  const figure = base.figure || figures[random(0, figures.length)]

  const location = base.location || [
    'a graveyard. A blood-red moon hangs above',
    'the bedroom from your childhood. There is no door to exit the room',
    'the room you fell asleep in',
    'absolute darkness. In the silence you can hear your own heart beat',
    'an open field. Next to you is a dead oak tree with an empty noose swinging in the breeze',
    'a dark forest. In the corner of your eye you can see something is following you',
    'a dark cave. A low, rhythmic chanting echoes around you',
    'a prison cell. The walls are scratched and your fingernails are bloodied',
    "a long hallway with a door at the end. The door doesn't get closer as you approach",
    'knee deep swamp water. You can feel something touching your leg under the surface'
  ].random()

  const descriptor = [
    "has it's eyes and mouth sewn shut",
    `is decaying. ${figure.gender.toUpperFirst()} flesh and hair are falling to the ground`,
    'is wheezing loudly. You can feel your throat drying and it gets harder to breath',
    `has blood slowly trickling from the corners of ${figure.gender} mouth, then eyes, and finally it appears to be sweating blood`,
    `${figure.gender} chest bursts open and maggots and worms tumble out, writhing on the floor`,
    `has ${figure.gender} throat slit. You see the wound open and close slightly with ${figure.gender} breathing`,
    'has mismatching limbs. It looks to be sewn together using mismatching pieces',
    'has the lower body of an arachnid',
    'has fingernails that continue to grow. They look sharp',
    'is starting to crumble away as if made of ash'
  ].random()

  const action = [
    'sprints at you',
    'begins walking slowly toward you',
    `throws ${figure.gender} head back and starts cackling wildly`,
    `tries to speak, but spiders begin pouring out of ${figure.gender} mouth`,
    `catches fire at ${figure.gender} feet and it quickly spreads up ${figure.gender} body`,
    'vanishes and reappears inches from your face',
    `grows double ${figure.gender} size and begins chasing you`,
    'grows horrible, black, leathery wings and begins flying towards you',
    `begins systematically breaking ${figure.gender} fingers while staring you in the eye`,
    `starts ripping the flesh from ${figure.gender} face`
  ].random()

  const wake = [
    `inches from your face is the ${figure.type}`,
    `in the darkness you can see the outline of the ${figure.type}`,
    `the ${figure.type} is sprinting towards you, roll initiative. [Player wakes as soon as the figure reaches them. All spells fail and attacks miss against the monster.]`,
    `the door to the room opens slowly and the ${figure.type} walks in`,
    `the party member closest to them is replaced with the ${figure.type}`,
    `standing over you is the ${figure.type}`,
    `as you are about to go to sleep you blink and the ${figure.type} is in front of you`,
    `the ${figure.type} is walking toward you slowly. You cannot move`,
    `the ${figure.type} is dragging away a party member. It looks up and makes eye contact with you`
  ].random()

  return `You find yourself in ${location}. You see ${figure.prefix} ${figure.type} which ${descriptor}. The ${figure.type} ${action}. You wake up in a cold sweat. ${wake.toUpperFirst()}`
}
