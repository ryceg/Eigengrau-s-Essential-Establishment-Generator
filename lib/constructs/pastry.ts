import { articles } from '../src/articles'
import { keys, assign, getUUID } from '../src/utils'
import { random } from '../src/random'

import { ConstructUtils, Construct } from './_common'

interface Pastry extends Construct<'pastry'>{
  type: string
  aroma: string
  cooking: Cooking
  quality1: Quality
  quality2: Quality
  synonym?: string
  accoutrement?: string
  precedingWord: string
  cookingDescriptor: string
}

export const pastry: ConstructUtils<Pastry> = {
  create: base => {
    const type = random(keys(types))
    const typeData = types[type]

    const pastry = {
      $type: 'pastry' as const,
      $uuid: getUUID(),
      type,
      precedingWord: random(typeData.precedingWord),
      cooking: random(typeData.cooking),
      quality1: random(typeData.qualities),
      quality2: random(typeData.qualities)
    }

    // Replace the secondary quality
    // if it's the same as the primary one.
    if (pastry.quality1 === pastry.quality2) {
      for (const quality of typeData.qualities) {
        if (quality !== pastry.quality1) {
          assign(pastry, { quality2: quality })
          break
        }
      }
    }

    assign(pastry, {
      accoutrement: getAccoutrement(typeData.qualities),
      aroma: random(descriptors.aroma[pastry.quality1]),
      cookingDescriptor: random(descriptors.cooking[pastry.cooking])
    })

    if (typeData.synonyms) {
      assign(pastry, {
        synonym: random(typeData.synonyms)
      })
    }

    if (base) {
      assign(pastry, base)
    }

    return pastry
  },
  readout: pastry => {
    const quality1 = random(descriptors.quality[pastry.quality1])
    const quality2 = random(descriptors.quality[pastry.quality2])
    return `This ${pastry.precedingWord} ${pastry.synonym || pastry.type} is ${quality1} and ${quality2}. ${pastry.cookingDescriptor} and ${pastry.aroma}. ${random(['', '', `It is served with ${articles.output(pastry.accoutrement || 'jam')}.`])}`
  }
}

function getAccoutrement (qualities: BakedGoodTypeData['qualities']) {
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
    savoury: ['aromatic', 'salted', 'lightly salted', 'infused with olive oil', 'made with a browned butter', 'cooked with brown butter'],
    nourishing: ['hearty', 'apparently very tasty', 'substantial', 'filling', 'nourishing', 'healthy', 'nutritious', 'solid', 'generously portioned'],
    sour: ['tart', 'sour', 'lemony', 'sharp', 'acetic', 'flavoured with lemons', 'citrus flavoured']
  },
  cooking: {
    // [cookingDescriptor] and [aroma]
    sticky: ['The glaze on top has an appetising sheen', 'It glistens in the sun', 'It sparkles with sticky sugary goodness'],
    icing: ['The icing has been generously applied on the top', 'There is a healthy layer of icing on the top', 'The icing has hardened slightly and has formed a sugary shell', 'The icing is rich and smooth', 'The icing is decorated in a nice pattern', 'The icing looks a little gritty'],
    baked: ["It's a pleasant brown colour", 'It looks perfectly cooked', "It's a pale blonde colour", 'It has a poofy-ness to it that is quite appetizing'],
    crust: ["There's a gorgeous brown crust on the bottom", 'Looking at the crust, it appears to be slightly underdone', 'The crust looks to be thin and delicate,']
  },
  aroma: {
    // [cookingDescriptor] and [aroma]
    sweet: ['smells faintly of brown butter', 'smells of brown sugar', 'smells faintly of molasses', 'smells of some spice', 'the scent of honey fills your nose as you smell it', 'smells like honey', 'smells like caramel', 'smells sugary'],
    airy: ['smells of vanilla', 'smells like a summer breeze', 'smells of wild flowers', 'smells of delicious fruit'],
    savoury: ['smells nutty', 'smells like home', 'smells like a nice warm fire'],
    nourishing: ['smells of deeply complex spices', 'the scent of vanilla fills your nose', 'smells like olives and herbs', 'has a pleasant aroma to it', "has a 'freshly baked' scent", 'the scent of it fills your nose, since it has been baked fresh'],
    sour: ['you can smell lemons in the air', 'the scent of citrus fills your nostrils', 'smells sweeter the closer you get', 'has a floral scent to it', 'has a lovely fresh scent', 'has a delightfully lemony smell']
  },
  accoutrements: {
    // it is served with ____
    sweet: ['dollop of whipped cream', 'tiny little marshmallow on the side', 'tiny chocolate mint', 'spoonful of honey'],
    savoury: ['cup of tea', 'biscuit', 'edible flower', 'bread']
  }
}

type Quality = keyof typeof descriptors['quality']

type Cooking = keyof typeof descriptors['cooking']

interface BakedGoodTypeData {
  synonyms?: string[]
  qualities: Quality[]
  cooking: Cooking[]
  precedingWord: string[]
}

const types: Record<string, BakedGoodTypeData> = {
  // this [type] is [qualityDescriptor] and [qualityDescriptor]. [cookingDescriptor] and [aroma]. It costs [cost]( and is served with an [accoutrement])
  bread: {
    qualities: ['nourishing', 'savoury'],
    precedingWord: ['nut', 'unleavened', 'sourdough', 'date', 'walnut', 'pecan', 'oat'],
    cooking: ['baked', 'crust']
  },
  cake: {
    qualities: ['sweet', 'airy'],
    cooking: ['icing'],
    precedingWord: ['chocolate', 'vanilla', 'yellow', 'sponge', 'bundt', 'carrot', '']
  },
  fruitcake: {
    synonyms: ['cake'],
    qualities: ['sour', 'airy'],
    cooking: ['icing'],
    precedingWord: ['lemon', 'vanilla', 'fruit', 'raisin']
  },
  cookie: {
    qualities: ['savoury', 'sweet', 'nourishing'],
    precedingWord: ['chocolate', 'lemon', 'oat', 'cocoa', 'oatmeal', 'peanut butter', 'vanilla', 'biscotti', 'tea', 'shortbread', 'snickerdoodle'],
    cooking: ['baked', 'icing']
  },
  tart: {
    qualities: ['sweet', 'sour'],
    precedingWord: ['lemon', 'raspberry', 'blackberry', 'orange', 'treacle', 'citrus', 'apple', 'berry', 'cherry', 'egg'],
    cooking: ['sticky', 'baked', 'crust']
  },
  pie: {
    qualities: ['sweet', 'sour'],
    precedingWord: ['lemon', 'blackberry', 'apple and blackberry', 'apple and raspberry', 'raspberry', 'rhubarb', 'strawberry', 'sugar', 'walnut', 'pumpkin', 'citrus', 'apple', 'berry', 'cherry', 'pecan'],
    cooking: ['sticky', 'baked', 'crust']
  }
}
