import { random } from './random'
import { assign } from './utils'

interface Trap {
  type: string
  trigger: string
  signal: string
  payload: string
}

export function createTrap (): Trap {
  const types = ['mechanical', 'arcane', 'mechanical', 'arcane', 'indirect']

  const trap = {
    type: random(types)
  }

  assign(trap, getTrapTypeAttributes(trap.type))

  assign(trap, {
    description: `${random(['This trap is activated by', 'This trap is triggered by'])} ${trap.trigger}. When activated, ${trap.signal}. ${random(['The trap then delivers its payload:', 'Then,', 'And then,'])} ${trap.payload}.`
  })

  return trap
}

interface TrapTypeAttributes {
  trigger: string
  signal: string
  payload: string
}

function getTrapTypeAttributes (type: string): TrapTypeAttributes {
  switch (type) {
    case 'mechanical':
      return {
        trigger: random([
          'trip wire',
          'pressure plate',
          'opening a door',
          'lifting the lid on a chest',
          'grabbing a certain rung of a ladder',
          'removing an object from it’s resting place',
          'touching anything in the room, including the floor',
          'breaking the beam of a light source',
          'disturbing a source of water in the room',
          'pulling on a suspicious looking rope hanging from the ceiling'
        ]),
        signal: random([
          'gears can be heard grinding from inside the walls',
          'a low boom is heard that echoes out through the dungeon',
          'a high pitched whirring can be heard',
          'various ticking sounds are heard',
          'a quick release of steam followed by a bang',
          'a low rumbling that shakes the room for a moment',
          'a single click emanates from the trap',
          'the sound of chains sliding across stone',
          'a thumping sound that starts slow and begins picking up speed',
          'nothing. There’s just silence'
        ]),
        payload: random([
          'the floor opens downward into a 40 foot pit',
          'from unseen slits in the wall, poisoned needles fly out',
          'a wall opens revealing a golem to ambush the party',
          'a large log swings down from the ceiling',
          'the parts of the dungeon begin collapsing, blocking off areas',
          'vents on the ceiling begin emptying noxious fumes into the room',
          'a large blade swings horizontally across the room attempting to decapitate',
          'the room begins filling with water after the doors slam shut',
          'the walls slowly begin closing inwards',
          'a large rolling boulder drops from the ceiling towards the party'
        ])
      }
    case 'arcane':
      return {
        trigger: random([
          'an arcane rune on the floor',
          'arcane markings around a door frame',
          'a pillar that has a low hum to it',
          'a jeweled eye that scans the room',
          'a stone statue that has glowing red eyes',
          'a mysterious green fog that rolls around the base of the room',
          'a very dimly lit candle that could be extinguished with the faintest breath',
          'a phrase scrawled on the wall that activates when said out loud',
          'failing to cast any spell on a dull crystal floating in the center of the room',
          'lighting a rather inviting looking torch in the center of the room'
        ]),
        signal: random([
          'a low hum is heard',
          'a very unnatural light begins glowing brightly from an unknown source',
          'any runes in the room begin glowing a bright red',
          'the room suddenly drops drastically in temperature',
          'the room gets uncomfortably hot',
          'a soft hiss is heard',
          'a fizzling sound is heard',
          'a high pitched hum rings out',
          'a crackling of energy is heard through the room',
          'one can hear a deathly silence'
        ]),
        payload: random([
          'sleep is cast on the room',
          'victim must resist being petrified',
          'a fireball explodes throughout the room',
          'all surfaces of the room begin to become too hot to touch (effectively heat metal)',
          'fumes begin materializing as if stinking cloud was cast',
          'a wall of lightning races towards the victim and any others in its way',
          'all people in the room have blindness cast on them',
          'the victim is sent to the astral plane for one minute',
          'everything in the room begins to levitate, no save',
          'the spell confusion is cast on everyone'
        ])
      }
    case 'indirect':
      return {
        trigger: random([
          'trip wire',
          'pressure plate',
          'opening a door',
          'lifting the lid on a chest',
          'grabbing a certain rung of a ladder',
          'removing an object from it’s resting place',
          'touching anything in the room, including the floor',
          'breaking the beam of a light source',
          'disturbing a source of water in the room',
          'pulling on a suspicious looking rope hanging from the ceiling'
        ]),
        signal: random([
          'gears can be heard grinding from inside the walls',
          'a low boom is heard that echoes out through the dungeon',
          'a high pitched whirring can be heard',
          'various ticking sounds are heard',
          'a quick release of steam followed by a bang',
          'a low rumbling that shakes the room for a moment',
          'a single click emanates from the trap',
          'the sound of chains sliding across stone',
          'a thumping sound that starts slow and begins picking up speed',
          'nothing. There’s just silence'
        ]),
        payload: random([
          'a torch is lit in another room, alerting enemies',
          'a door in another room closes, hiding a secret passage',
          'chests in the dungeon lock up',
          'a dangerous enemy is freed that could normally be avoided',
          'all other traps that have already been triggered get reset',
          'all lights are extinguished',
          'golems begin patrolling the dungeon',
          'all doors in the dungeon lock themselves',
          'an alarm bell begins ringing alerting all enemies of the party',
          'another more sinister trap is set in another room'
        ])
      }
    default:
      return {
        trigger: random([
          'trip wire',
          'pressure plate',
          'opening a door',
          'lifting the lid on a chest',
          'grabbing a certain rung of a ladder',
          'removing an object from it’s resting place',
          'touching anything in the room, including the floor',
          'breaking the beam of a light source',
          'disturbing a source of water in the room',
          'pulling on a suspicious looking rope hanging from the ceiling'
        ]),
        signal: random([
          'gears can be heard grinding from inside the walls',
          'a low boom is heard that echoes out through the dungeon',
          'a high pitched whirring can be heard',
          'various ticking sounds are heard',
          'a quick release of steam followed by a bang',
          'a low rumbling that shakes the room for a moment',
          'a single click emanates from the trap',
          'the sound of chains sliding across stone',
          'a thumping sound that starts slow and begins picking up speed',
          'nothing. There’s just silence'
        ]),
        payload: random([
          'the floor opens downward into a 40 foot pit',
          'from unseen slits in the wall, poisoned needles fly out',
          'a wall opens revealing a golem to ambush the party',
          'a large log swings down from the ceiling',
          'the parts of the dungeon begin collapsing, blocking off areas',
          'vents on the ceiling begin emptying noxious fumes into the room',
          'a large blade swings horizontally across the room attempting to decapitate',
          'the room begins filling with water after the doors slam shut',
          'the walls slowly begin closing inwards',
          'a large rolling boulder drops from the ceiling towards the party'
        ])
      }
  }
}
