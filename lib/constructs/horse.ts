import { random } from '../src/random'
import { getUUID } from '../src/utils'
import { Construct, ConstructUtils } from './_common'

interface Horse extends Construct<'horse'> {
  gender: string
  eyes: string
  type: string
  quality: string
  colour: string
  flaw: string
  flawSeverity: string
  feature: string
  personality: string
  behaviour: string
}

export const horse: ConstructUtils<Horse> = {
  create: base => ({
    $uuid: getUUID(),
    $type: 'horse',
    gender: random(data.gender),
    eyes: random(data.eyes),
    type: random(data.type),
    quality: random(data.quality),
    colour: random(data.colour),
    flaw: random(data.flaw),
    flawSeverity: random(data.flawSeverity),
    feature: random(data.feature),
    personality: random(data.personality),
    behaviour: random(data.behaviour),
    ...base
  }),
  readout: horse => {
    return `This horse is ${horse.gender} ${horse.type}, and is ${horse.quality}. It has a ${horse.colour} coat, with ${horse.feature} and ${horse.eyes}. It is ${horse.flaw}, which is ${horse.flawSeverity}. It is ${horse.personality}, and ${horse.behaviour}.`
  }
}

const data = {
  type: ['pony; stout and suitable for small riders and narrow trails', 'dray; reliable and suitable for pulling plows and wagons', 'garron; hardy and well-suited for harsh weather and terrain', 'palfrey; tireless and well-suited for long journeys', 'rounsey; medium-sized and suitable for riding or for battle', 'courser; swift and well-suited for hunting or for battle', 'a charger; solid and suitable for jousting or for battle', 'destrier; huge and well-suited for jousting or for battle'],
  gender: ['a colt', 'a young gelding', 'an old gelding', 'a stallion', 'a yearling', 'a filly', 'a young mare', 'an old mare'],
  quality: ['a stot; this animal is completely useless', 'a canner; this animal is good for nothing but meat', 'a hack; this animal is mediocre, but useful', 'a hard keeper; this animal requires extra food to maintain its strength and endurance .', 'an easy keeper; this animal requires little food to maintain its strength and endurance', 'of middling quality; acceptable for its breed', 'of high quality; a very good animal for its breed', 'of the highest quality; a paragon of its breed'],
  colour: ['bay', 'black', 'buckskin', 'chestnut', 'gray', 'piebald', 'roan', 'white'],
  eyes: ['light brown eyes', 'brown eyes', 'dark brown eyes', 'green eyes', 'hazel eyes', 'amber eyes', 'brown and blue eyes', 'blue eyes'],
  flaw: ['pigeon toed', 'splay footed', 'mule footed (narrow feet)', 'mushroom footed (large feet)', 'barrel chested', 'narrow chested', 'steep rumped', 'slab sided'],
  flawSeverity: ['imperceptible to all but the most expert horsemasters and riders', 'barely noticeable', "not a hindrance to the horse's performance", 'something the horse can make up for with its other qualities', 'something that sufficient training can overcome', 'something that makes riding the horse a little difficult', 'something that makes riding the horse a little embarrassing', "a severe hindrance to the horse's performance"],
  feature: ['one eye that is blind or nearly blind', 'pig eyes (small eyes)', 'large ears', 'small ears', 'a wry tail (tail carried to one side)', 'a clipped tail', 'a scar above one forehoof', 'a shaggy mane'],
  personality: ['eager to please', 'social', 'gentle', 'aloof', 'unimpressed', 'fearful', 'challenging', 'foul-tempered'],
  behaviour: ['nickers when anxious', 'whinnies when anxious', 'bucks when impatient', 'stamps when impatient', 'froths when tired', 'snorts when tired', 'stamps when content', 'snorts when content']
}
