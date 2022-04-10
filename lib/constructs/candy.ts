import { keys, assign, getUUID } from '../src/utils'
import { random } from '../src/random'

import { ConstructUtils, Construct } from './_common'

interface Candy extends Construct<'candy'>{
  type: string
  size: string
  quality1: Quality
  quality2: Quality
  synonym?: string
  accoutrement?: string
  precedingWord: string
}

export const candy: ConstructUtils<Candy> = {
  create: base => {
    const type = random(keys(types))
    const typeData = types[type]

    const candy = {
      $type: 'candy' as const,
      $uuid: getUUID(),
      size: random(typeData.size),
      type,
      precedingWord: random(typeData.precedingWord),
      quality1: random(typeData.qualities),
      quality2: random(typeData.qualities)
    }

    // Replace the secondary quality
    // if it's the same as the primary one.
    if (candy.quality1 === candy.quality2) {
      for (const quality of typeData.qualities) {
        if (quality !== candy.quality1) {
          assign(candy, { quality2: quality })
          break
        }
      }
    }

    assign(candy, {
      accoutrement: getAccoutrement(typeData.qualities)
    })

    if (typeData.synonyms) {
      assign(candy, {
        synonym: random(typeData.synonyms)
      })
    }

    if (base) {
      assign(candy, base)
    }

    return candy
  },
  readout: candy => {
    const quality1 = random(descriptors.quality[candy.quality1])
    const quality2 = random(descriptors.quality[candy.quality2])
    return `This ${candy.size} ${candy.precedingWord} ${candy.synonym || candy.type} is ${quality1} and ${quality2}.`
  }
}

function getAccoutrement (qualities: CandyGoodType['qualities']) {
  if (qualities.includes('sweet') && qualities.includes('savoury')) {
    const quality = random(['sweet', 'savoury'] as const)
    return random(descriptors.accoutrements[quality])
  }
  if (qualities.includes('sweet')) {
    return random(descriptors.accoutrements.sweet)
  }
  if (qualities.includes('savoury')) {
    return random(descriptors.accoutrements.savoury)
  }
}

const descriptors = {
  quality: {
    // this [type] is ______ and _____
    sweet: ['cloyingly sweet', 'sweet', 'tastefully sweet', 'deliciously sweet', 'honeyed', 'honey and toffee flavoured', 'decadent', 'treacly'],
    airy: ['pillowy', 'airy', 'light', 'melt-in-your-mouth', 'delicate', 'tasteful'],
    savoury: ['salted', 'lightly salted', 'very rich', 'made with a browned butter', 'cooked with brown butter', 'bitter'],
    nourishing: ['hearty', 'apparently very tasty', 'substantial', 'filling', 'nourishing', 'healthy', 'nutritious', 'solid', 'generously portioned'],
    sour: ['tart', 'sour', 'lemony', 'sharp', 'acetic', 'flavoured with lemons', 'citrus flavoured']
  },
  accoutrements: {
    // it is served with ____
    sweet: ['jelly', 'marshmellow', 'mint', 'honey', 'marzipan'],
    savoury: ['rasin', 'toffee', 'custard', 'caramel']
  }
}

type Quality = keyof typeof descriptors['quality']

interface CandyGoodType {
  synonyms?: string[]
  qualities: Quality[]
  precedingWord: string[]
  size: string[]
}
const types: Record<string, CandyGoodType> = {
  // this [type] is [qualityDescriptor] and [qualityDescriptor]. It costs [cost]( and is served with an [accoutrement])
  chocolate: {
    size: ['large', 'medium', 'small'],
    qualities: ['nourishing', 'savoury', 'sweet'],
    precedingWord: ['nut', 'liquorice', 'butterscotch', 'marshmellow', 'caramel', 'peppermint', 'vanilla', 'chocolate', 'lemon', 'cocoa', 'peanut butter']
  },
  candy: {
    size: ['large', 'medium', 'small'],
    qualities: ['savoury', 'airy', 'sweet', 'sour'],
    precedingWord: ['chocolate', 'nut', 'liquorice', 'butterscotch', 'marshmellow', 'caramel', 'peppermint', 'vanilla', 'marzipan', 'lemon', 'cocoa', 'peanut butter']
  },
  nougat: {
    size: ['large', 'medium', 'small'],
    qualities: ['savoury', 'sweet', 'nourishing'],
    precedingWord: ['lemon', 'vanilla', 'fruit', 'raisin', 'cocoa', 'peanut butter']
  },
  brittle: {
    size: ['large', 'medium', 'small'],
    qualities: ['savoury', 'sweet', 'nourishing'],
    precedingWord: ['chocolate', 'nut', 'liquorice', 'butterscotch', 'marshmellow', 'caramel', 'peppermint', 'vanilla', 'marzipan', 'lemon', 'cocoa', 'peanut butter']
  },
  brownie: {
    size: ['large', 'medium', 'small'],
    qualities: ['savoury', 'sweet', 'nourishing'],
    precedingWord: ['chocolate', 'nut', 'liquorice', 'butterscotch', 'marshmellow', 'caramel', 'peppermint', 'vanilla', 'marzipan', 'lemon', 'cocoa', 'peanut butter']
  }
}
