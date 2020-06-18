import { random } from '../src/random'
import { getUUID } from '../src/utils'
import { Construct, ConstructUtils } from './_common'

interface Bunny extends Construct<'bunny'> {
  size: string
  coat: string
  favouriteFood: string
  markings: string
}

export const bunny: ConstructUtils<Bunny> = {
  create: base => ({
    $uuid: getUUID(),
    $type: 'bunny',
    size: random(data.size),
    coat: random(data.coat),
    favouriteFood: random(data.favouriteFood),
    markings: random(data.markings),
    ...base
  }),
  readout: bunny => {
    return `This bunny is ${bunny.size}, and has a ${bunny.coat} coat, with ${bunny.markings}. It loves ${bunny.favouriteFood}.`
  }
}

const data = {
  size: ['all skin and bones', 'a little scrawny', 'pretty average in size', 'a little long and lanky', 'fat', 'extremely fat', 'teacup size', 'twice the normal size', 'absolutely massive'],
  coat: ['fluffy white', 'short and black', 'solid grey', 'grey and black spotted', 'chocolate', 'dappled grey', 'chocolate tortiseshell', 'grey tortiseshell', 'cream colored', 'dappled brown', 'frosted pearl', 'gray', 'sable', 'sandy', 'pearly'],
  favouriteFood: ['kale', 'arugula', 'rhubarb', 'carrots', 'celery', 'broccoli', 'lettuce', 'apple slices', 'onion leaves', 'potato leaves', 'asparagus'],
  markings: ['black toes on one foot', 'white toes on one foot', 'extremely long ears', 'a white tail', 'a black tail', 'no left ear', 'a scarred ear', 'a patch of missing fur', 'a twitchy pink nose', 'a black nose', 'a pink and black nose']
}
