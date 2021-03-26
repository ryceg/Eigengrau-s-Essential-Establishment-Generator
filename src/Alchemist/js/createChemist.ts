/* eslint-disable @typescript-eslint/ban-ts-comment */

import type { NPC, Town } from '@lib'

interface Options {
  npc: Partial<NPC>
}

/**
 * Can be simplified into a data thing as part of alchemistData
 */
export const createChemist = (town: Town, opts: Partial<Options> = {}): NPC => {
  return setup.createNPC(town, {
    profession: lib.random(['alchemist', 'alchemist', 'alchemist', 'alchemist', 'alchemist', 'wizard', 'wizard', 'druid', 'druid', 'cleric', 'warlock']),
    background: lib.random(['sage', 'sage', 'sage', 'guild artisan', 'guild artisan', 'guild artisan', 'commoner', 'commoner', 'commoner']),
    idle: [
      'talking with a customer',
      'picking $associatedNPC.hisher nose',
      'playing a card game by $associatedNPC.himherself',
      'looking over a recipe book',
      'carefully putting ingredients into a vial',
      'pouring ingredients into a tube',
      'throwing herbs into a cauldron',
      'taking a drink from a glass',
      'taking a drink from a glass of water',
      'stirring a pot which is bubbling happily',
      'stirring a cauldron which bubbles menacingly',
      'stirring a small pot with a glass spoon carefully',
      'staring off at nothing while slowly rapping their fingers on the counter',
      'crushing up some sort of herb with a pestle very gently',
      'mashing up herbs with a pestle frantically',
      'pouring a thick blue liquid into a small bottle',
      'pouring a bright green sludge into a glass bottle',
      'sprinkling what looks like gold shavings into a large copper pot',
      'rearranging a shelf full of alchemical tomes',
      'restocking shelves with new potions'
    ],
    owner: [
      'owner',
      'caretaker',
      'proud owner',
      'proprietor',
      'current owner',
      'chief owner',
      'master chemist',
      'chief researcher',
      'head alchemist',
      'sole owner',
      'new owner'
    ].random(),
    greeting: [
      'nods at you',
      'looks suspiciously at your hair, and then smiles, and welcomes you warmly',
      'looks at your eyes intently, and then smiles, and welcomes you',
      'welcomes you warmly',
      'smiles and greets you',
      'raises a gloved hand with a wave',
      'sizes you up, before $associatedNPC.heshe nods at you',
      'checks you out for just a moment before smiling at you',
      'glances up from what $associatedNPC.heshe is doing and smiles your way',
      'eyes you somewhat suspiciously'
    ],
    chitchat: [
      'talks about a new potion that $associatedNPC.heshe is brewing up',
      'whines about a late shipment of glassware, which is overdue',
      'talks about the weather as $associatedNPC.heshe carefully measures out ingredients for a new potion',
      'discusses the latest developments in alchemy, almost all of which are either over your head, or totally boring',
      'talks about how $associatedNPC.hisher latest batch of potions are disappearing mysteriously',
      'chats with you all about $associatedNPC.hisher newest stock, none of which is particularly out of the ordinary',
      'talks about the many uses for <<print lib.alchemistData.ingredients.random()>>, which $associatedNPC.heshe seems somewhat obsessed with',
      'tries to push various products on you all as you look about the shop'
    ],
    ...opts.npc
  })
}
