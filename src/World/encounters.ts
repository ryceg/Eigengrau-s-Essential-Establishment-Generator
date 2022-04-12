/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { Town } from '@lib'
import { profile } from '../Tools/profile'
import { createNPC } from '../NPCGeneration/createNPC'
import { BiomeName } from './locations'

export interface Encounter {
  summary: string
  available?: BiomeName[]
  function?(town: Town, biome: BiomeName): string
}

/**
 * @warn Uses profile
 * @warn Uses setup.misc
 * @warn Uses setup.createMercenaries
 */
export const encounters: Encounter[] = [
  {
    summary: 'a group of bandits operating a toll road',
    available: ['trail'],
    function: () => {
      const bandits = lib.bandits.create({
        business: 'scamming people into paying a toll to use the trail (despite it clearly not being crown-maintained)'
      })
      const readout = lib.bandits.readout(bandits)
      return `a group of ${lib.createTippyFull(readout, 'bandits')} operating a toll road. `
    }
  },
  {
    summary: 'a band of robbers',
    available: ['trail'],
    function: () => {
      const bandits = lib.bandits.create({
        business: 'attacking people using the trail'
      })
      const readout = lib.bandits.readout(bandits)
      return `${lib.createTippyFull(readout, 'a band of robbers')}.`
    }
  },
  {
    summary: 'some robbers',
    available: ['path', 'road'],
    function: () => {
      const bandits = lib.bandits.create({
        business: 'attacking people using the trail'
      })
      const readout = lib.bandits.readout(bandits)
      return `${lib.createTippyFull(readout, 'some robbers')}.`
    }
  },
  {
    summary: 'a party of raiders',
    available: ['trail'],
    function: () => {
      const bandits = lib.bandits.create()
      const readout = lib.bandits.readout(bandits)
      return `${lib.createTippyFull(readout, 'a party of raiders')}.`
    }
  },
  {
    summary: 'a pair of outlaws',
    available: ['forest'],
    function: (town) => {
      const npc = createNPC(town, {
        background: 'criminal',
        isThrowaway: true
      })
      const secondNpc = createNPC(town, {
        background: 'criminal',
        isThrowaway: true
      })
      return `a pair of two outlaws; one ${profile(npc, npc.descriptor)} and a ${profile(secondNpc, secondNpc.descriptor)}`
    }
  },
  {
    summary: 'a band of desperate outlaws',
    function: () => {
      const bandits = lib.bandits.create()
      const readout = lib.bandits.readout(bandits)
      return `${lib.createTippyFull(readout, 'a band of desperate outlaws')}.`
    }
  },
  {
    summary: 'some bandits',
    available: ['mountain', 'path'],
    function: () => {
      const bandits = lib.bandits.create({
        business: 'attacking people using the trail'
      })
      const readout = lib.bandits.readout(bandits)
      return `${lib.createTippyFull(readout, 'some bandits')}.`
    }
  },
  {
    summary: 'some outlaws’ hideout',
    function: () => {
      const bandits = lib.bandits.create()
      const readout = lib.bandits.readout(bandits)
      return `a hideout belonging to ${lib.createTippyFull(readout, 'some outlaws')}.`
    }
  },
  {
    summary: 'a disciplined military company',
    function: (town) => {
      // @ts-ignore
      const mercenaries = setup.createMercenaries(town)
      return `a military company, armed to the teeth with ${mercenaries.weapon}, wearing ${mercenaries.colours} livery over their ${mercenaries.armour} with an insignia of ${mercenaries.insignia}. They are ${mercenaries.attitude} towards their <<profile \`$npcs[${JSON.stringify(mercenaries.captain.key)}]\` commander>>, who is ${mercenaries.commanderTrait}. They specialise in ${mercenaries.specializes}, and are notorious for ${mercenaries.notorious}. They are famous for their ${mercenaries.tactics}, and are currently ${mercenaries.currently}.`
    }
  },
  {
    summary: 'a rowdy mercenary troop',
    function: (town) => {
      // @ts-ignore
      const mercenaries = setup.createMercenaries(town)
      return `a mercenary troop, armed to the teeth with ${mercenaries.weapon}, wearing ${mercenaries.colours} livery over their ${mercenaries.armour} with an insignia of ${mercenaries.insignia}. They are ${mercenaries.attitude} towards their <<profile \`$npcs[${JSON.stringify(mercenaries.captain.key)}]\` commander>>, who is ${mercenaries.commanderTrait}. They specialise in ${mercenaries.specializes}, and are notorious for ${mercenaries.notorious}. They are famous for their ${mercenaries.tactics}, and are currently ${mercenaries.currently}.`
    }
  },
  {
    summary: 'a band of mercenaries',
    available: ['path', 'road'],
    function: (town) => {
      // @ts-ignore
      const mercenaries = setup.createMercenaries(town)
      return `a mercenary troop, armed to the teeth with ${mercenaries.weapon}, wearing ${mercenaries.colours} livery over their ${mercenaries.armour} with an insignia of ${mercenaries.insignia}. They are ${mercenaries.attitude} towards their <<profile \`$npcs[${JSON.stringify(mercenaries.captain.key)}]\` commander>>, who is ${mercenaries.commanderTrait}. They specialise in ${mercenaries.specializes}, and are notorious for ${mercenaries.notorious}. They are famous for their ${mercenaries.tactics}, and are currently ${mercenaries.currently}.`
    }
  },
  {
    summary: 'a marching army',
    available: ['road'],
    function: (town) => {
      // @ts-ignore
      const mercenaries = setup.createMercenaries(town)
      return `a small army, armed to the teeth with ${mercenaries.weapon}, wearing ${mercenaries.colours} livery over their ${mercenaries.armour} with an insignia of ${mercenaries.insignia}. They are ${mercenaries.attitude} towards their <<profile \`$npcs[${JSON.stringify(mercenaries.captain.key)}]\` commander>>, who is ${mercenaries.commanderTrait}. They specialise in ${mercenaries.specializes}, and are notorious for ${mercenaries.notorious}. They are famous for their ${mercenaries.tactics}, and are currently ${mercenaries.currently}.`
    }
  },
  {
    summary: 'a small merchant caravan',
    available: ['trail'],
    function: (town) => {
      // @ts-ignore
      const caravan = setup.misc.caravan.create(town)
      return `a small merchant caravan. ${caravan.readout}`
    }
  },
  {
    summary: 'a merchant caravan',
    available: ['path', 'road'],
    function: (town) => {
      // @ts-ignore
      const caravan = setup.misc.caravan.create(town)
      return `a merchant caravan. ${caravan.readout}`
    }
  },
  {
    summary: 'a clan of orcs',
    function: () => {
      const orcs = lib.orcs.create()
      const readout = lib.orcs.readout(orcs)
      return `a clan of ${lib.createTippyFull(readout, 'orcs')}.`
    }
  },
  {
    summary: 'several orc raiders',
    available: ['mountain'],
    function: () => {
      const orcs = lib.orcs.create()
      const readout = lib.orcs.readout(orcs)
      return `several ${lib.createTippyFull(readout, 'orc raiders')}.`
    }
  },
  {
    summary: 'an orkish war band',
    available: ['desert'],
    function: () => {
      const orcs = lib.orcs.create()
      const readout = lib.orcs.readout(orcs)
      return `an ${lib.createTippyFull(readout, 'orkish war band')}.`
    }
  },
  {
    summary: 'an orc war band',
    function: () => {
      const orcs = lib.orcs.create()
      const readout = lib.orcs.readout(orcs)
      return `an ${lib.createTippyFull(readout, 'orc war band')}.`
    }
  },
  {
    summary: 'a handful of ogres',
    function: () => {
      const ogre = lib.createAutoTippy(lib.ogre)('ogre')
      return `a handful of ${ogre}s`
    }
  },
  {
    summary: 'an ogre',
    available: ['forest'],
    function: () => {
      const ogre = lib.createAutoTippy(lib.ogre)('ogre')
      return `a lone ${ogre}`
    }
  },
  {
    summary: "an ogre's lair",
    function: () => {
      const ogre = lib.createAutoTippy(lib.ogre)('ogre')
      return `a lair belonging to an ${ogre}`
    }
  },
  {
    summary: "some goblins' hideout",
    function: () => {
      const goblins = lib.goblins.create()
      const readout = lib.goblins.readout(goblins)
      return `a goblin hideout. ${readout}`
    }
  },
  {
    summary: 'a pair of goblin scouts',
    available: ['forest']
  },
  {
    summary: 'a lone goblin',
    function: () => {
      const goblin = lib.goblin.create()
      const readout = lib.goblin.readout(goblin)
      return `a lone ${lib.createTippyFull(readout, 'goblin')} ${[
          'trying to hide from you.',
          'lying in wait for you.',
          'lying down, asleep.',
          'crawling away from you, clearly bleeding.'
        ].random()}`
    }
  },
  {
    summary: 'a goblin war party',
    function: () => {
      const goblins = lib.goblins.create()
      const readout = lib.goblins.readout(goblins)
      return `a goblin war party. ${readout}`
    }
  },
  {
    summary: 'a goblin patrol',
    available: ['forest'],
    function: () =>
        `a goblin patrol ${[
          'lying in ambush.',
          'squabbling over something.',
          'in the middle of a meal.',
          'arguing amongst themselves over something.',
          'jumping up and down, for some reason.'
        ].random()}`
  },
  {
    summary: 'several giant spiders',
    available: ['forest'],
    function: () => {
      const spider = lib.createAutoTippy(lib.spider)('spiders')
      return `several giant ${spider}.`
    }
  },
  {
    summary: 'a pack of wolves',
    available: ['forest'],
    function: () => {
      const wolves = lib.createAutoTippy(lib.wolf)('wolves')
      return `a pack of ${wolves}`
    }
  },
  {
    summary: 'a lone wolf',
    available: ['forest'],
    function: () => {
      const wolf = lib.createAutoTippy(lib.wolf)('wolf')
      return `a lone ${wolf}.`
    }
  },
  {
    summary: 'a hunting cat',
    available: ['forest'],
    function: () => {
      const cat = lib.createAutoTippy(lib.cat)('cat')
      return `a hunting ${cat}.`
    }
  },
  {
    summary: 'an itinerant priest',
    available: ['trail'],
    function: (town) => {
      const npc = createNPC(town, {
        hasClass: false,
        background: 'acolyte',
        profession: 'priest',
        isThrowaway: true
      })
      return `an itinerant ${profile(npc, 'priest')}`
    }
  },
  {
    summary: 'a hermit',
    available: ['trail'],
    function: (town) => {
      const npc = createNPC(town, {
        hasClass: false,
        background: 'hermit',
        isThrowaway: true
      })
      return `a ${profile(npc, 'hermit')}`
    }
  },
  {
    summary: 'a solitary hunter',
    available: ['trail'],
    function: (town) => {
      const npc = createNPC(town, {
        profession: 'hunter',
        background: 'outlander',
        isThrowaway: true
      })
      return `a solitary ${profile(npc, 'hunter')}`
    }
  },
  {
    summary: 'a solitary bandit',
    available: ['trail'],
    function: (town) => {
      // @ts-ignore
      const npc = createNPC(town, {
        profession: 'bandit',
        background: 'criminal',
        isThrowaway: true
      })
      return `a solitary ${profile(npc, 'bandit')}`
    }
  },
  {
    summary: 'an injured knight',
    available: ['trail'],
    function: (town) => {
      const npc = createNPC(town, {
        profession: lib.random(['fighter', 'knight', 'paladin']),
        background: lib.random(['noble', 'soldier', 'soldier']),
        isThrowaway: true
      })
      return `an injured ${profile(npc, 'knight')}`
    }
  },
  {
    summary: 'a ranger',
    available: ['trail'],
    function: (town) => {
      const npc = createNPC(town, {
        profession: 'ranger',
        background: 'outlander',
        isThrowaway: true
      })
      return `a solitary ${profile(npc, 'hunter')}`
    }
  },
  {
    summary: 'a diseased animal corpse',
    available: ['trail']
  },
  {
    summary: 'a dead body',
    available: ['trail']
  },
  {
    summary: 'a group of dwarves',
    available: ['trail']
  },
  {
    summary: 'a handful of farmers',
    available: ['trail']
  },
  {
    summary: 'the border patrol',
    available: ['trail']
  },
  {
    summary: 'a travelling peddler',
    available: ['trail']
  },
  {
    summary: 'a hunting party',
    available: ['trail', 'path']
  },
  {
    summary: 'another adventuring party',
    available: ['trail', 'path', 'road']
  },
  {
    summary: 'some escaped convicts',
    available: ['trail', 'path', 'road']
  },
  {
    summary: 'some herdsmen',
    available: ['trail']
  },
  {
    summary: 'some particularly dense overgrowth',
    available: ['trail']
  },
  {
    summary: 'some tribesmen',
    available: ['trail', 'path']
  },
  {
    summary: 'the undead',
    available: ['trail', 'path']
  },
  {
    summary: '[monster encounter]',
    available: ['trail', 'path']
  },
  {
    summary: 'a traveling peddler',
    available: ['path'],
    function: (town) => {
      const npc = createNPC(town, {
        hasClass: false,
        background: 'urchin',
        profession: 'merchant',
        isThrowaway: true
      })
      return `a traveling ${profile(npc, 'peddler')}`
    }
  },
  {
    summary: 'a solitary minstrel',
    function: (town) => {
      const npc = createNPC(town, {
        hasClass: false,
        background: 'entertainer',
        profession: 'minstrel',
        isThrowaway: true
      })
      return `a solitary ${profile(npc, 'troubador')}`
    }
  },
  {
    summary: 'an adventurer on a horse',
    available: ['path'],
    function: (town) => {
      const horse = lib.createAutoTippy(lib.horse)('horse')
      const npc = createNPC(town, {
        profession: lib.random(['fighter', 'fighter', 'paladin']),
        background: lib.random(['noble', 'soldier', 'soldier']),
        isThrowaway: true
      })
      return `an ${profile(npc, 'adventurer')} on a ${horse}`
    }
  },
  {
    summary: 'a mounted messenger',
    available: ['path'],
    function: (town) => {
      const npc = createNPC(town, {
        hasClass: false,
        profession: 'messenger',
        isThrowaway: true
      })
      return `a mounted ${profile(npc, 'messenger')}`
    }
  },
  {
    summary: 'a work gang heading home',
    available: ['path']
  },
  {
    summary: 'the road wardens',
    available: ['path']
  },
  {
    summary: 'some of the local militia',
    available: ['path']
  },
  {
    summary: 'a pair of travelling clerics',
    available: ['path']
  },
  {
    summary: 'some graverobbers',
    available: ['path']
  },
  {
    summary: 'some farmers',
    available: ['path', 'road']
  },
  {
    summary: 'a plague-infested cabin',
    available: ['path'],
    function: () => {
      const cabin = lib.createAutoTippy(lib.cabin)('cabin')
      return `a plague-infested ${cabin}.`
    }
  },
  {
    summary: 'some beserkers',
    available: ['path']
  },
  {
    summary: 'a caravan of gypsies',
    available: ['path', 'road']
  },
  {
    summary: 'a knight errant',
    available: ['road'],
    function: (town) => {
      const npc = createNPC(town, {
        profession: 'knight',
        background: lib.random(['noble', 'soldier', 'soldier']),
        isThrowaway: true
      })
      return `a ${profile(npc, 'knight errant')}`
    }
  },
  {
    summary: 'a wounded knight',
    available: ['road'],
    function: (town) => {
      const npc = createNPC(town, {
        profession: lib.random(['fighter', 'fighter', 'paladin']),
        background: lib.random(['noble', 'soldier', 'soldier']),
        isThrowaway: true
      })
      return `an injured ${profile(npc, 'knight')}`
    }
  },
  {
    summary: 'a traveling lady',
    available: ['road'],
    function: (town) => {
      const npc = createNPC(town, {
        hasClass: false,
        background: 'noble',
        isThrowaway: true,
        gender: 'woman'
      })
      return `a traveling ${profile(npc, 'lady')}`
    }
  },
  {
    summary: 'a courier',
    available: ['road'],
    function: (town) => {
      const npc = createNPC(town, {
        hasClass: false,
        profession: 'courier',
        isThrowaway: true
      })
      return `a ${profile(npc, 'courier')}`
    }
  },
  {
    summary: 'a wedding party',
    available: ['road']
  },
  {
    summary: 'a group of pilgrims'

  },
  {
    summary: 'a funeral procession',
    available: ['road']
  },
  {
    summary: 'a plague cart',
    available: ['road']
  },
  {
    summary: 'a lone horse, trotting the other way',
    available: ['road'],
    function: () => {
      const horse = lib.createAutoTippy(lib.horse)('horse')
      return `a lone ${horse}, trotting the other way`
    }
  },
  {
    summary: 'a traveling theatre troupe',
    available: ['road']
  },
  {
    summary: 'some beggars',
    available: ['road']
  },
  {
    summary: 'a caravan of slavers',
    available: ['road']
  },
  {
    summary: 'a lone zombie',
    available: ['road']
  },
  {
    summary: 'a strange hermit',
    available: ['desert'],
    function: (town) => {
      const npc = createNPC(town, {
        background: 'hermit'
      })
      return `a strange ${profile(npc, 'hermit')}`
    }
  },
  {
    summary: 'a lost traveler',
    available: ['desert'],
    function: (town) => {
      const npc = createNPC(town, {
        background: 'outlander',
        profession: 'pilgrim',
        note: 'This person is very lost.',
        isThrowaway: true,
        canBeCustom: true
      })
      return `a lost ${profile(npc, 'traveler')}`
    }
  },
  {
    summary: 'a poor refugee',
    function: (town) => {
      const npc = createNPC(town, {
        hasClass: false,
        background: 'commoner',
        profession: 'refugee',
        isThrowaway: true
      })
      return `a poor ${profile(npc, 'nomad')}`
    }
  },
  {
    summary: 'a suspicious miner',
    available: ['desert'],
    function: (town) => {
      const npc = createNPC(town, {
        hasClass: false,
        profession: 'miner',
        calmTrait: 'suspicious',
        note: 'This person is hiding something.',
        isThrowaway: true
      })
      return `a suspicious ${profile(npc, 'miner')}`
    }
  },
  {
    summary: 'a barbarian hunter',
    available: ['desert'],
    function: (town) => {
      const npc = createNPC(town, {
        background: 'outlander',
        profession: 'barbarian',
        isThrowaway: true
      })
      return `a barbarian ${profile(npc, 'hunter')}`
    }
  },
  {
    summary: 'a mounted barbarian scout',
    available: ['desert'],
    function: (town) => {
      const npc = createNPC(town, {
        profession: 'barbarian',
        background: 'outlander',
        isThrowaway: true
      })
      return `a mounted barbarian ${profile(npc, 'scout')}`
    }
  },
  {
    summary: 'the ghost of a traveler',
    available: ['desert'],
    function: () => {
      const ghost = lib.ghost.create()
      const readout = lib.ghost.readout(ghost)
      return `the ${lib.createTippyFull(readout, 'ghost')} of a traveler. `
    }
  },
  {
    summary: 'a poisonous snake',
    available: ['desert']
  },
  {
    summary: 'a giant spider',
    available: ['desert', 'forest'],
    function: () => {
      const spider = lib.createAutoTippy(lib.spider)('spider')
      return `a giant ${spider}`
    }
  },
  {
    summary: 'a giant scorpion',
    available: ['desert']
  },
  {
    summary: 'a giant centipede',
    available: ['desert']
  },
  {
    summary: 'a pack of jackals',
    available: ['desert']
  },
  {
    summary: 'a hungry jackalwere',
    available: ['desert']
  },
  {
    summary: 'a giant lizard',
    available: ['desert']
  },
  {
    summary: 'a pair of gnolls',
    available: ['desert']
  },
  {
    summary: 'a pair of bandits',
    available: ['desert']
  },
  {
    summary: 'an hobgoblin scout',
    available: ['desert']
  },
  {
    summary: 'a roc on the wing',
    available: ['desert']
  },
  {
    summary: 'a wyvern on the wing',
    available: ['desert']
  },
  {
    summary: 'lots of bats'
  },
  {
    summary: 'many spider webs'
  },
  {
    summary: "a troll's stash"
  },
  {
    summary: 'some abandoned mining equipment'
  },
  {
    summary: 'bare rock'
  },
  {
    summary: 'a potable spring'
  },
  {
    summary: 'mummified remains',
    function: () => 'some mummified remains'
  },
  {
    summary: 'a band of dwarvish refugees'
  },
  {
    summary: 'a swarm of beetles'
  },
  {
    summary: 'a half mad prophet',
    function: (town) => {
      const npc = createNPC(town, {
        background: 'acolyte',
        profession: 'prophet',
        note: 'This prophet is as crazy as can be.',
        isThrowaway: true
      })
      return `a half-mad ${profile(npc, 'prophet')}`
    }
  },
  {
    summary: 'a reclusive sorcerer',
    function: (town) => {
      const npc = createNPC(town, {
        profession: 'sorcerer',
        background: 'acolyte',
        calmTrait: 'withdrawn',
        isThrowaway: true
      })
      return `a reclusive ${profile(npc, 'sorcerer')}`
    }
  },
  {
    summary: 'a merchant of exotic goods',
    function: (town) => {
      const npc = createNPC(town, {
        background: 'noble',
        profession: 'spice merchant',
        hasClass: false,
        isThrowaway: true
      })
      return `a strange ${profile(npc, 'merchant')} of exotic goods`
    }
  },
  {
    summary: 'a misanthropic shapeshifter',
    function: (town) => {
      const npc = createNPC(town, {
        background: 'hermit',
        profession: 'fugitive',
        calmTrait: 'misanthropic',
        stressTrait: 'murderous',
        note: 'Hates everyone. Is a shapeshifter.',
        hasClass: false,
        isThrowaway: true
      })
      return `a misanthropic ${profile(npc, 'shapeshifter')}`
    }
  },
  {
    summary: 'an eccentric monk',
    function: (town) => {
      const npc = createNPC(town, {
        background: 'hermit',
        calmTrait: 'kinda weird',
        hasClass: true,
        profession: 'monk',
        isThrowaway: true
      })
      return `an eccentric ${profile(npc, 'monk')}`
    }
  },
  {
    summary: 'a nomadic herder',
    function: (town) => {
      const npc = createNPC(town, {
        background: 'outlander',
        profession: 'herder',
        hasClass: false,
        isThrowaway: true
      })
      return `a nomadic ${profile(npc, 'herder')}`
    }
  },
  {
    summary: 'a nomadic warrior',
    function: (town) => {
      const npc = createNPC(town, {
        background: 'outlander',
        profession: 'fighter',
        isThrowaway: true
      })
      return `a nomadic ${profile(npc, 'warrior')}`
    }
  },
  {
    summary: 'an outcast elf',
    function: (town) => {
      const npc = createNPC(town, {
        background: 'outlander',
        profession: 'hermit',
        note: 'Is an outcast.',
        hasClass: false,
        race: 'elf',
        isThrowaway: true
      })
      return `an outcast ${profile(npc, 'elf')}`
    }
  },
  {
    summary: 'a reclusive scholar',
    function: (town) => {
      const npc = createNPC(town, {
        hasClass: false,
        background: 'hermit',
        profession: 'scholar',
        calmTrait: 'withdrawn',
        isThrowaway: true
      })
      return `a reclusive ${profile(npc, 'scholar')}`
    }
  },
  {
    summary: 'an eccentric healer',
    function: (town) => {
      const npc = createNPC(town, {
        profession: 'cleric',
        background: 'acolyte',
        note: 'This healer is rather odd.',
        isThrowaway: true
      })
      return `an eccentric ${profile(npc, 'healer')}`
    }
  },
  {
    summary: 'a poor cowherd',
    function: (town) => {
      const npc = createNPC(town, {
        hasClass: false,
        background: 'hermit',
        profession: 'cowherd',
        note: 'This cowherd is very poor, but knows the area well.',
        isThrowaway: true
      })
      return `a poor ${profile(npc, 'cowherd')}`
    }
  },
  {
    summary: 'a mining prospector',
    function: (town) => {
      const npc = createNPC(town, {
        hasClass: false,
        background: 'commoner',
        profession: 'prospector',
        isThrowaway: true
      })
      return `a mining ${profile(npc, 'prospector')}`
    }
  },
  {
    summary: 'a religious fanatic with his many wives',
    function: (town) => {
      const npc = createNPC(town, {
        background: 'outlander',
        profession: 'heretic',
        note: 'Has multiple wives.',
        isThrowaway: true
      })
      return `a religious ${profile(
          npc,
          'fanatic'
        )} with his many wives`
    }
  },
  {
    summary: 'poisonous snakes'
  },
  {
    summary: 'a pair of orcs'
  },
  {
    summary: 'a mad sorcerer',
    function: (town) => {
      const npc = createNPC(town, {
        background: 'hermit',
        profession: 'sorcerer',
        calmTrait: 'paranoid',
        stressTrait: 'murderous',
        note: 'This person is totally mad.',
        isThrowaway: true
      })
      return `a mad ${profile(npc, 'sorcerer')}`
    }
  },
  {
    summary: 'a paranoid shapeshifter',
    available: ['mountain'],
    function: (town) => {
      const npc = createNPC(town, {
        background: 'hermit',
        hasClass: false,
        profession: 'hermit',
        calmTrait: 'paranoid',
        stressTrait: 'murderous',
        note: 'This person is a paranoid shapeshifter.',
        isThrowaway: true
      })
      return `a paranoid ${profile(npc, 'shapeshifter')}`
    }
  },
  {
    summary: 'a reclusive shapeshifter',
    function: (town) => {
      const npc = createNPC(town, {
        background: 'hermit',
        profession: 'shapeshifter',
        note: 'This person is a shapeshifter.',
        isThrowaway: true
      })
      return `a reclusive ${profile(npc, 'shapeshifter')}`
    }
  },
  {
    summary: 'a restless ghost',
    function: () => {
      const ghost = lib.ghost.create()
      const readout = lib.ghost.readout(ghost)
      return `a restless ${lib.createTippyFull(readout, 'ghost')}`
    }
  },
  {
    summary: 'a dangerous fugitive',
    function: (town) => {
      const npc = createNPC(town, {
        profession: 'fugitive',
        calmTrait: 'paranoid',
        stressTrait: 'murderous',
        note: 'This person is a wanted criminal for high treason against the crown.',
        isThrowaway: true
      })
      return `a dangerous ${profile(npc, 'fugitive')}`
    }
  },
  {
    summary: 'spiders and rats',
    function: () => {
      const spiders = lib.createAutoTippy(lib.spider)('spiders')
      return `${spiders} and rats`
    }
  },
  {
    summary: 'a treasure hunter',
    function: (town) => {
      const npc = createNPC(town, {
        background: 'criminal',
        profession: 'adventurer',
        calmTrait: 'adventurous',
        stressTrait: 'excited',
        note: 'This person loves the thrill of a treasure hunt, and is about to go on a quest.',
        isThrowaway: true,
        canBeCustom: true
      })
      const map = lib.treasureMap.create()
      return `a ${profile(npc, 'treasure-hunter')} with a ${map.tippyWord}`
    }
  },
  {
    summary: 'a wasteland druid',
    function: (town) => {
      const npc = createNPC(town, {
        background: 'acolyte',
        profession: 'druid',
        calmTrait: 'understanding',
        isThrowaway: true
      })
      return `a wasteland ${profile(npc, 'druid')}`
    }
  },
  {
    summary: 'cursed mummies'
  },
  {
    summary: 'a hobgoblin warlord'
  },
  {
    summary: 'an orcish war chief'
  },
  {
    summary: 'a tribe of kobolds'
  },
  {
    summary: 'a territorial griffon'
  },
  {
    summary: 'a pair of manticores'
  },
  {
    summary: 'slavering gnolls'
  },
  {
    summary: 'a mountain lion’s den'
  },
  {
    summary: 'unidentifiable remains',
    function: () => 'some unidentifiable remains'
  },
  {
    summary: 'a hungry ettin'
  },
  {
    summary: 'a griffon’s nest'
  },
  {
    summary: 'a manticore’s den'
  },
  {
    summary: 'a basilisk’s lair'
  },
  {
    summary: 'a wyvern’s nest'
  },
  {
    summary: 'a clan of stone giants'
  },
  {
    summary: 'a dragon'
  },
  {
    summary: 'a sleeping dragon'
  },
  {
    summary: 'a mad witch',
    function: (town) => {
      const npc = createNPC(town, {
        gender: 'woman',
        background: 'hermit',
        profession: 'witch',
        note: 'This witch is as mad as a cut snake.',
        isThrowaway: true
      })
      return `a mad ${profile(npc, 'witch')}`
    }
  },
  {
    summary: 'restless ghosts',
    function: () => {
      const ghost = lib.ghost.create()
      const readout = lib.ghost.readout(ghost)
      return `a restless ${lib.createTippyFull(readout, 'ghost')}`
    }
  },
  {
    summary: 'an outcast orc',
    function: (town) => {
      const npc = createNPC(town, {
        race: 'half-orc',
        background: 'hermit',
        note: 'This person is either an orc that was outcast, or a half orc. Hard to tell.',
        isThrowaway: true
      })
      return `a reclusive ${profile(npc, 'shapeshifter')}`
    }
  },
  {
    summary: 'an owlbear'
  },
  {
    summary: 'a troll'
  },
  {
    summary: 'several harpies'
  },
  {
    summary: 'a handful of dwarves'
  },
  {
    summary: 'ghostly warriors'
  },
  {
    summary: 'a lost prospector',
    available: ['mountain'],
    function: (town) => {
      const npc = createNPC(town, {
        background: 'outlander',
        profession: 'prospector',
        note: 'This person is very lost.',
        isThrowaway: true
      })
      return `a lost ${profile(npc, 'prospector')}`
    }
  },
  {
    summary: 'a solemn warrior',
    available: ['mountain'],
    function: (town) => {
      const npc = createNPC(town, {
        profession: 'fighter',
        calmTrait: 'solemn',
        stressTrait: 'determined',
        isThrowaway: true
      })
      return `a solemn looking ${profile(npc, 'warrior')}`
    }
  },
  {
    summary: 'a seasoned mountaineer',
    available: ['mountain'],
    function: (town) => {
      const npc = createNPC(town, {
        background: 'outlander',
        profession: 'mountaineer',
        note: 'Never gets lost.',
        isThrowaway: true
      })
      return `a seasoned ${profile(npc, 'mountaineer')}`
    }
  },
  {
    summary: 'an eccentric witch',
    available: ['mountain'],
    function: (town) => {
      const npc = createNPC(town, {
        gender: 'woman',
        background: 'hermit',
        profession: 'witch',
        note: 'This witch is as crazy as a cut snake.',
        isThrowaway: true
      })
      return `an eccentric ${profile(npc, 'witch')}`
    }
  },
  {
    summary: 'a contemplative monk',
    available: ['mountain'],
    function: (town) => {
      const npc = createNPC(town, {
        background: 'acolyte',
        profession: 'monk',
        calmTrait: 'contemplative',
        stressTrait: 'determined',
        isThrowaway: true
      })
      return `a contemplative ${profile(npc, 'monk')}`
    }
  },
  {
    summary: 'a hunting peryton',
    available: ['mountain']
  },
  {
    summary: 'a mountain lion',
    available: ['mountain']
  },
  {
    summary: 'a pair of harpies',
    available: ['mountain']
  },
  {
    summary: 'a flock of ravens',
    available: ['mountain']
  },
  {
    summary: 'several homeless dwarves',
    available: ['mountain']
  },
  {
    summary: 'an angry wraith',
    available: ['mountain']
  },
  {
    summary: 'a malevolent ghost',
    available: ['forest', 'mountain'],
    function: () => {
      const ghost = lib.ghost.create({ reaction: 'murderous and cruel' })
      const readout = lib.ghost.readout(ghost)
      return `a malevolent ${lib.createTippyFull(readout, 'ghost')}`
    }
  },
  {
    summary: 'a mated pair of manticores',
    available: ['mountain']
  },
  {
    summary: 'a trio of monstrous trolls',
    available: ['mountain']
  },
  {
    summary: 'a clan of stone giants at rest',
    available: ['mountain']
  },
  {
    summary: 'a roc tearing apart some prey',
    available: ['mountain']
  },
  {
    summary: 'a beggarly bandit',
    available: ['forest'],
    function: (town) => {
      const npc = createNPC(town, {
        background: 'criminal',
        profession: ['fighter', 'rogue', 'rogue'].random(),
        isThrowaway: true
      })
      return `a beggarly ${profile(npc, 'bandit')}`
    }
  },
  {
    summary: 'an old witch',
    available: ['forest'],
    function: (town) => {
      const npc = createNPC(town, {
        profession: 'sorcerer',
        gender: 'woman',
        background: 'acolyte',
        ageStage: 'elderly',
        isThrowaway: true
      })
      return `an old ${profile(npc, 'witch')}`
    }
  },
  {
    summary: 'a curious herbalist',
    available: ['forest'],
    function: (town) => {
      const npc = createNPC(town, {
        hasClass: false,
        background: 'acolyte',
        profession: 'herbalist',
        isThrowaway: true
      })
      return `a curious ${profile(npc, 'herbalist')}`
    }
  },
  {
    summary: 'a lost child',
    available: ['forest'],
    function: (town) => {
      const npc = createNPC(town, {
        ageStage: 'child',
        isThrowaway: true
      })
      return `a lost ${profile(npc, 'child')}`
    }
  },
  {
    summary: 'a woodcutter busy with the day’s work',
    available: ['forest'],
    function: (town) => {
      const npc = createNPC(town, {
        hasClass: false,
        gender: 'man',
        profession: 'forester',
        isThrowaway: true
      })
      return `a ${profile(npc, 'woodcutter')}, busy with the day's work`
    }
  },
  {
    summary: 'an intrepid hunter',
    available: ['forest'],
    function: (town) => {
      const npc = createNPC(town, {
        profession: 'ranger',
        background: 'outlander',
        isThrowaway: true
      })
      return `an intrepid ${profile(npc, 'hunter')}`
    }
  },
  {
    summary: 'an elvish ranger',
    available: ['forest'],
    function: (town) => {
      const npc = createNPC(town, {
        profession: 'ranger',
        race: 'elf',
        background: 'outlander',
        isThrowaway: true
      })
      return `an elvish ${profile(npc, 'ranger')}`
    }
  },
  {
    summary: 'a large bear',
    available: ['forest']
  },
  {
    summary: 'a bear cub',
    available: ['forest']
  },
  {
    summary: 'a wailing ghost',
    available: ['forest'],
    function: () => {
      const ghost = lib.ghost.create()
      const readout = lib.ghost.readout(ghost)
      return `a wailing ${lib.createTippyFull(readout, 'ghost')}`
    }
  },
  {
    summary: 'giant spiders',
    function: () => {
      const spiders = lib.createAutoTippy(lib.spider)('spiders')
      return `giant ${spiders}`
    }
  },
  {
    summary: 'hungry zombies'
  },
  {
    summary: 'a lonely old woman',
    function: (town) => {
      const npc = createNPC(town, {
        gender: 'woman',
        background: 'hermit',
        ageStage: 'elderly',
        calmTrait: 'quiet',
        isThrowaway: true
      })
      return `a lonely old ${profile(npc, 'woman')}`
    }
  },
  {
    summary: 'a beautiful witch',
    function: (town) => {
      const npc = createNPC(town, {
        profession: 'sorcerer',
        gender: 'woman',
        background: 'acolyte',
        note: 'This witch is very beautiful.',
        isThrowaway: true
      })
      return `a beautiful ${profile(npc, 'witch')}`
    }
  },
  {
    summary: 'a horrible witch',
    function: (town) => {
      const npc = createNPC(town, {
        profession: 'sorcerer',
        gender: 'woman',
        background: 'acolyte',
        calmTrait: 'mean',
        stressTrait: 'cruel',
        isThrowaway: true
      })
      return `a horrible ${profile(npc, 'witch')}`
    }
  },
  {
    summary: 'an outcast dwarf',
    function: (town) => {
      const npc = createNPC(town, {
        race: 'dwarf',
        background: 'hermit',
        hasClass: false,
        calmTrait: 'quiet',
        isThrowaway: true
      })
      return `an outcast ${profile(npc, 'dwarf')}`
    }
  },
  {
    summary: 'a dwarf prospector',
    function: (town) => {
      const npc = createNPC(town, {
        hasClass: false,
        race: 'dwarf',
        background: 'commoner',
        profession: 'prospector',
        isThrowaway: true
      })
      return `a mining ${profile(npc, 'prospector')}`
    }
  },
  {
    summary: 'a wood elf druid',
    function: (town) => {
      const npc = createNPC(town, {
        profession: 'druid',
        background: 'outlander',
        race: 'elf',
        isThrowaway: true
      })
      return `a wood elf ${profile(npc, 'druid')}`
    }
  },
  {
    summary: 'some irritable trolls'
  }
]
