// TODO: convert
setup.createNightmare = base => {
  if (!base) { base = {} }
  base.figure = base.figure || [
    {
      type: 'boy',
      whoWhich: 'who',
      gender: 'his'
    },
    {
      type: 'girl',
      whoWhich: 'who',
      gender: 'her'
    },
    {
      type: 'young man',
      whoWhich: 'who',
      gender: 'his'
    },
    {
      type: 'young woman',
      whoWhich: 'who',
      gender: 'her'
    },
    {
      type: 'elderly man',
      whoWhich: 'who',
      gender: 'his'
    },
    {
      type: 'elderly woman',
      whoWhich: 'who',
      gender: 'her'
    },
    {
      type: 'copy of yourself',
      whoWhich: 'who',
      gender: 'his'
    },
    {
      type: 'large dog',
      gender: 'its'
    },
    {
      type: 'large mangy cat',
      gender: 'its'
    },
    {
      type: 'father',
      whoWhich: 'who',
      prefix: 'your',
      gender: 'his'
    },
    {
      type: 'mother',
      whoWhich: 'who',
      prefix: 'your',
      gender: 'her'
    },
    {
      type: 'shadowy figure',
      whoWhich: 'who',
      gender: 'its'
    },
    {
      type: 'small toy',
      gender: 'its'
    },
    {
      type: 'large wolf standing on its hind legs',
      gender: 'its'
    }
  ].random()

  base.location = base.location || [
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

  base.descriptor = base.descriptor || [
    `has ${base.figure.gender} eyes and mouth sewn shut`,
    `is decaying. ${base.figure.gender.toUpperFirst()} flesh and hair are falling to the ground`,
    'is wheezing loudly. You can feel your throat drying and it gets harder to breath',
    `has blood slowly trickling from the corners of ${base.figure.gender} mouth, then eyes, and finally it appears to be sweating blood`,
    `stands there. Then, ${base.figure.gender} chest bursts open and maggots and worms tumble out, writhing on the floor`,
    `has ${base.figure.gender} throat slit. You see the wound open and close slightly with ${base.figure.gender} breathing`,
    'has mismatching limbs. It looks to be sewn together using mismatching pieces',
    'has the lower body of an arachnid',
    'has fingernails that continue to grow. They look sharp',
    'is starting to crumble away as if made of ash'
  ].random()

  base.action = base.action || [
    'sprints at you',
    'begins walking slowly toward you',
    `throws ${base.figure.gender} head back and starts cackling wildly`,
    `tries to speak, but spiders begin pouring out of ${base.figure.gender} mouth`,
    `catches fire at ${base.figure.gender} feet, which quickly spreads up ${base.figure.gender} body`,
    'vanishes for a second, and then reappears inches from your face',
    `grows double ${base.figure.gender} size and begins chasing you`,
    'grows horrible, black, leathery wings and begins flying towards you',
    `begins systematically breaking ${base.figure.gender} fingers while staring you in the eye`,
    `starts ripping the flesh from ${base.figure.gender} face`
  ].random()

  base.wake = base.wake || [
    `inches from your face is the ${base.figure.type}`,
    `in the darkness you can see the outline of the ${base.figure.type}`,
    `the ${base.figure.type} is sprinting towards you, roll initiative. [Player wakes as soon as the figure reaches them. All spells fail and attacks miss against the monster.]`,
    `the door to the room opens slowly and the ${base.figure.type} walks in`,
    `the party member closest to them is replaced with the ${base.figure.type}`,
    `standing over you is the ${base.figure.type}`,
    `as you are about to go to sleep you blink and the ${base.figure.type} is in front of you`,
    `the ${base.figure.type} is walking toward you slowly. You cannot move`,
    `the ${base.figure.type} is dragging away a party member. It looks up and makes eye contact with you`
  ].random()

  return `You find yourself in ${base.location}. You see ${base.figure.prefix || lib.articles.find(base.figure.type)} ${base.figure.type} ${base.figure.whoWhich || 'which'} ${base.descriptor}. The ${base.figure.type} ${base.action}. You wake up in a cold sweat. ${base.wake.toUpperFirst()}`
}
