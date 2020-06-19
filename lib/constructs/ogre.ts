import { random } from '../src/random'
import { getUUID } from '../src/utils'
import { Construct, ConstructUtils } from './_common'

interface Ogre extends Construct<'ogre'> {
  hair: string
  type: string
  eyes: string
  skill: string
  quirk: string
  carry: string
  look: string
  misfortune: string
}

export const ogre: ConstructUtils<Ogre> = {
  create: base => ({
    $uuid: getUUID(),
    $type: 'ogre',
    hair: random(data.hair),
    type: random(data.type),
    eyes: random(data.eyes),
    skill: random(data.skill),
    quirk: random(data.quirk),
    carry: random(data.carry),
    look: random(data.look),
    misfortune: random(data.misfortune),
    ...base
  }),
  readout: ogre => {
    return `This ogre is a ${ogre.type}, and carries ${ogre.carry}. It's hair is ${ogre.hair}, and its eyes are ${ogre.eyes}. It is particularly good at ${ogre.skill}, and frequently ${ogre.quirk}. A long time ago, it was ${ogre.misfortune}. Currently, it is looking for a ${ogre.look}`
  }
}

const data = {
  hair: ['long and stringy', 'wispy and thin', 'dark and matted', 'a tangled mess', 'cut unevenly', 'gone; the ogre is bald'],
  eyes: ['mismatched colors', 'mismatched sizes', 'dark and menacing', 'wide and vacant', 'scarred; one eye is missing', 'crossed'],
  type: ['berserker', 'chanter', 'hunter', 'scavenger', 'thug', 'warrior'],
  skill: ['crushing skulls', 'breaking wooden doors', 'bending metal bars', 'roasting meat', 'frightening people', 'sitting very, very still'],
  quirk: ['scratches itself', 'gets distracted by food', 'guffaws', 'loses its temper', 'picks its teeth', 'yawns'],
  carry: ['a sharp spear', 'a heavy club', 'a spiked club', 'a sackful of trinkets', 'a necklace of bones', 'a string of severed ears'],
  look: ['easy meal', 'fatty meal', 'steady meal ticket', 'fight it can win', 'shiny bauble', 'object its chief asked for, but the ogre can’t remember what it was'],
  misfortune: ['pressed into service in an orkish army', 'tricked into doing some dirty work by some goblins', 'charmed by a witch', 'badly burned in a fire', 'imprisoned in a cold, dark cell', 'bested by a rival for the affections of another ogre']
}
