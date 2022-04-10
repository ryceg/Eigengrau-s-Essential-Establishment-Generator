/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { Town } from '@lib'
import { profile } from '../Tools/profile'

/**
 * @warn Uses `setup.createDeadNPC`
 */
export const graveStone = {
  create (town: Town) {
    lib.logger.info('setup.graveStone.create called...')
    const grave = {
      shapeSmall: lib.random(gravestoneData.shapeSmall),
      shapeMedium: lib.random(gravestoneData.shapeMedium),
      weaponType: lib.random(gravestoneData.weaponType),
      gravePhrases: lib.random(gravestoneData.gravePhrases),
      graveImages: lib.random(gravestoneData.graveImages)
    }

    // @ts-ignore
    const owner = setup.createDeadNPC(town)
    const material = lib.random(Object.values(gravestoneData.material))

    lib.assign(grave, {
      sentenceStrings: lib.random([
        `a very small, ${gravestoneData.material.wood.secondaryDescriptors.random()}, ${gravestoneData.material.wood.type.random()} grave in the shape of ${lib.articles.output(grave.shapeSmall)}. ${['There are no distinguishing marks on this grave', 'The owner of this grave has been lost to time', 'No name has been left to remember the owner of this grave', 'This appears to be an unmarked grave', `The name ${profile(owner)} has been crudely scrawled across the grave`].random()}.`,
        `a small pile of earth with ${lib.articles.output(lib.random(gravestoneData.material.metal.secondaryDescriptors))} ${gravestoneData.material.metal.type.random()} ${grave.weaponType} stuck into it. ${['A long forgotten solider likely lays here', 'A mighty fallen warrior was likely laid to rest here', 'Surely a strong fighter was laid to rest here', 'Here lays a hero who fell in battle, their name is now forgotten'].random()}.`,
        `${['a small', 'an average sized', 'a modestly sized'].random()}, ${material.secondaryDescriptors.random()}, ${material.type.random()} grave in the shape of ${lib.articles.output(grave.shapeMedium)}. ${[`The grave has the name "${profile(owner)}" ${material.iconPlacement.random()} onto it and nothing else.`, `${['Near the top', 'Near the bottom', 'In the middle'].random()} of the grave, ${material.iconPlacement.random()} onto it are the words "${['Here lies', 'R.I.P.', 'Here is burried'].random()} ${profile(owner)}. ${grave.gravePhrases}."`].random()}${['', '', `${['  Just above the writing', '  Just below the writing', ' On the other side'].random()}, ${material.iconPlacement.random()} onto the grave is an image of ${lib.articles.output(lib.random([grave.graveImages, grave.weaponType]))}.`].random()}`
      ])
    })

    lib.assign(grave, {
      readout: `You come upon ${grave.sentenceStrings}`
    })

    lib.logger.info(grave)
    return grave
  }
}

const gravestoneData = {
  material: {
    metal: {
      type: ['metal', 'iron', 'wrought iron', 'copper', 'bronze', 'steel', 'gold', 'silver', 'brass'],
      secondaryDescriptors: ['rusty looking', 'gleaming', 'rusted', 'dulled', 'corroded', 'old looking', 'new looking', 'shiny', 'dull looking'],
      iconPlacement: ['sculpted', 'engraved', 'carved', 'crudely engraved']
    },
    wood: {
      type: ['wooden', 'oak', 'pine', 'birchwood', 'maple wood', 'cherry wood'],
      secondaryDescriptors: ['dirty looking', 'overgrown', 'old looking', 'new looking', 'battered', 'fine looking', 'splintered', 'mossy', 'weathered', 'waterlogged'],
      iconPlacement: ['cut', 'carved', 'scrawled', 'hacked', 'carefully sculpted', 'crudely branded']
    },
    stone: {
      type: ['granite', 'stone', 'marble', 'obsidian', 'onyx', 'sandstone', 'slate', 'basalt', 'alabaster', 'limestone', 'quartz', 'ivory', 'bone'],
      secondaryDescriptors: ['moss covered', 'chipped up', 'crumbling', 'cracked', 'weathered', 'brittle', 'rough', 'overgrown'],
      iconPlacement: ['chiseled', 'carved', 'crudely chipped', 'sculpted', 'hastily carved']
    }
  },
  shapeSmall: ['cross', 'holy symbol', 'slab', 'plaque', 'monolith', 'obelisk'],
  shapeMedium: ['holy symbol', 'slab', 'common rounded gravestone', 'ornate gothic headstone', 'obelisk', 'monolith', 'ornate rounded gravestone', 'common gothic headstone'],
  weaponType: ['arrow', 'dagger', 'battle hammer', 'battleaxe', 'rapier', 'greatsword', 'sword', 'pike', 'spear', 'halberd', 'mace', 'axe', 'scimitar'],
  gravePhrases: ['May the Gods watch over them', 'Good riddance', 'Gone but not forgotten', 'Gone and hopefully forgotten', 'A good friend indeed', 'A loyal friend in life and death', 'May they rot forever', 'Their generosity was boundless', 'They made scrooge look kind', 'Never forget', 'Coward', 'Hero', 'We miss you', 'You won\'t be missed'],
  graveImages: ['large sturdy looking tree', 'hooded figure', 'setting sun', 'pair of mountains', 'pair of praying hands', 'merchant scale', 'storm cloud', 'rose', 'flower wreath', 'torch', 'holy symbol', 'skull', 'crescent moon', 'full moon', 'large sailing ship', 'field of flowers', 'ocean wave']
}
