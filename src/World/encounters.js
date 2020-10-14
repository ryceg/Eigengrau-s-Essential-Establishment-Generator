setup.initMiscEncounters = () => {
  setup.misc.encounters = [
    {
      summary: 'a group of bandits operating a toll road',
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
      function: () => {
        const bandits = lib.bandits.create()
        const readout = lib.bandits.readout(bandits)
        return `${lib.createTippyFull(readout, 'a party of raiders')}.`
      }
    },
    {
      summary: 'a pair of outlaws',
      function: (town) => {
        const npc = setup.createNPC(town, {
          background: 'criminal',
          isThrowaway: true
        })
        const secondNpc = setup.createNPC(town, {
          background: 'criminal',
          isThrowaway: true
        })
        return `a pair of two outlaws; one ${setup.profile(npc, npc.descriptor)} and a ${setup.profile(secondNpc, secondNpc.descriptor)}`
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
        const mercenaries = setup.createMercenaries(town)
        return `a military company, armed to the teeth with ${mercenaries.weapon}, wearing ${mercenaries.colours} livery over their ${mercenaries.armour} with an insignia of ${mercenaries.insignia}. They are ${mercenaries.attitude} towards their <<profile \`$npcs[${JSON.stringify(mercenaries.captain.key)}]\` commander>>, who is ${mercenaries.commanderTrait}. They specialise in ${mercenaries.specializes}, and are notorious for ${mercenaries.notorious}. They are famous for their ${mercenaries.tactics}, and are currently ${mercenaries.currently}.`
      }
    },
    {
      summary: 'a rowdy mercenary troop',
      function: (town) => {
        const mercenaries = setup.createMercenaries(town)
        return `a mercenary troop, armed to the teeth with ${mercenaries.weapon}, wearing ${mercenaries.colours} livery over their ${mercenaries.armour} with an insignia of ${mercenaries.insignia}. They are ${mercenaries.attitude} towards their <<profile \`$npcs[${JSON.stringify(mercenaries.captain.key)}]\` commander>>, who is ${mercenaries.commanderTrait}. They specialise in ${mercenaries.specializes}, and are notorious for ${mercenaries.notorious}. They are famous for their ${mercenaries.tactics}, and are currently ${mercenaries.currently}.`
      }
    },
    {
      summary: 'a band of mercenaries',
      function: (town) => {
        const mercenaries = setup.createMercenaries(town)
        return `a mercenary troop, armed to the teeth with ${mercenaries.weapon}, wearing ${mercenaries.colours} livery over their ${mercenaries.armour} with an insignia of ${mercenaries.insignia}. They are ${mercenaries.attitude} towards their <<profile \`$npcs[${JSON.stringify(mercenaries.captain.key)}]\` commander>>, who is ${mercenaries.commanderTrait}. They specialise in ${mercenaries.specializes}, and are notorious for ${mercenaries.notorious}. They are famous for their ${mercenaries.tactics}, and are currently ${mercenaries.currently}.`
      }
    },
    {
      summary: 'a marching army',
      function: (town) => {
        const mercenaries = setup.createMercenaries(town)
        return `a small army, armed to the teeth with ${mercenaries.weapon}, wearing ${mercenaries.colours} livery over their ${mercenaries.armour} with an insignia of ${mercenaries.insignia}. They are ${mercenaries.attitude} towards their <<profile \`$npcs[${JSON.stringify(mercenaries.captain.key)}]\` commander>>, who is ${mercenaries.commanderTrait}. They specialise in ${mercenaries.specializes}, and are notorious for ${mercenaries.notorious}. They are famous for their ${mercenaries.tactics}, and are currently ${mercenaries.currently}.`
      }
    },
    {
      summary: 'a small merchant caravan',
      function: (town) => {
        const caravan = setup.misc.caravan.create(town)
        return `a small merchant caravan. ${caravan.readout}`
      }
    },
    {
      summary: 'a merchant caravan',
      function: (town) => {
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
      function: () => {
        const orcs = lib.orcs.create()
        const readout = lib.orcs.readout(orcs)
        return `several ${lib.createTippyFull(readout, 'orc raiders')}.`
      }
    },
    {
      summary: 'an orkish war band',
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
      summary: 'a pair of goblin scouts'
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
      function: () => {
        const spider = lib.createAutoTippy(lib.spider)('spiders')
        return `several giant ${spider}.`
      }
    },
    {
      summary: 'a pack of wolves',
      function: () => {
        const wolves = lib.createAutoTippy(lib.wolf)('wolves')
        return `a pack of ${wolves}`
      }
    },
    {
      summary: 'a lone wolf',
      function: () => {
        const wolf = lib.createAutoTippy(lib.wolf)('wolf')
        return `a lone ${wolf}.`
      }
    },
    {
      summary: 'a hunting cat',
      function: () => {
        const cat = lib.createAutoTippy(lib.cat)('cat')
        return `a hunting ${cat}.`
      }
    },
    {
      summary: 'an itinerant priest',
      function: (town) => {
        const npc = setup.createNPC(town, {
          hasClass: false,
          background: 'acolyte',
          profession: 'priest',
          isThrowaway: true
        })
        return `an itinerant ${setup.profile(npc, 'priest')}`
      }
    },
    {
      summary: 'a hermit',
      function: (town) => {
        const npc = setup.createNPC(town, {
          hasClass: false,
          background: 'hermit',
          isThrowaway: true
        })
        return `a ${setup.profile(npc, 'hermit')}`
      }
    },
    {
      summary: 'a solitary hunter',
      function: (town) => {
        const npc = setup.createNPC(town, {
          profession: 'hunter',
          background: 'outlander',
          isThrowaway: true
        })
        return `a solitary ${setup.profile(npc, 'hunter')}`
      }
    },
    {
      summary: 'a solitary bandit',
      function: (town) => {
        const npc = setup.createNPC(town, {
          profession: 'bandit',
          background: 'criminal',
          isThrowaway: true
        })
        return `a solitary ${setup.profile(npc, 'bandit')}`
      }
    },
    {
      summary: 'an injured knight',
      function: (town) => {
        const npc = setup.createNPC(town, {
          profession: ['fighter', 'knight', 'paladin'].random(),
          background: ['noble', 'soldier', 'soldier'].random(),
          isThrowaway: true
        })
        return `an injured ${setup.profile(npc, 'knight')}`
      }
    },
    {
      summary: 'a ranger',
      function: (town) => {
        const npc = setup.createNPC(town, {
          profession: 'ranger',
          background: 'outlander',
          isThrowaway: true
        })
        return `a solitary ${setup.profile(npc, 'hunter')}`
      }
    },
    {
      summary: 'a diseased animal corpse'
    },
    {
      summary: 'a dead body'
    },
    {
      summary: 'a group of dwarves'
    },
    {
      summary: 'a handful of farmers'
    },
    {
      summary: 'the border patrol'
    },
    {
      summary: 'a travelling peddler'
    },
    {
      summary: 'a hunting party'
    },
    {
      summary: 'another adventuring party'
    },
    {
      summary: 'some escaped convicts'
    },
    {
      summary: 'some herdsmen'
    },
    {
      summary: 'some particularly dense overgrowth'
    },
    {
      summary: 'some tribesmen'
    },
    {
      summary: 'the undead'
    },
    {
      summary: '[monster encounter]'
    },
    {
      summary: 'a traveling peddler',
      function: (town) => {
        const npc = setup.createNPC(town, {
          hasClass: false,
          background: 'urchin',
          profession: 'merchant',
          isThrowaway: true
        })
        return `a traveling ${setup.profile(npc, 'peddler')}`
      }
    },
    {
      summary: 'a solitary minstrel',
      function: (town) => {
        const npc = setup.createNPC(town, {
          hasClass: false,
          background: 'entertainer',
          profession: 'minstrel',
          isThrowaway: true
        })
        return `a solitary ${setup.profile(npc, 'troubador')}`
      }
    },
    {
      summary: 'an adventurer on a horse',
      function: (town) => {
        const horse = lib.createAutoTippy(lib.horse)('horse')
        const npc = setup.createNPC(town, {
          profession: ['fighter', 'fighter', 'paladin'].random(),
          background: ['noble', 'soldier', 'soldier'].random(),
          isThrowaway: true
        })
        return `an ${setup.profile(npc, 'adventurer')} on a ${horse}`
      }
    },
    {
      summary: 'a mounted messenger',
      function: (town) => {
        const npc = setup.createNPC(town, {
          hasClass: false,
          profession: 'messenger',
          isThrowaway: true
        })
        return `a mounted ${setup.profile(npc, 'messenger')}`
      }
    },
    {
      summary: 'a work gang heading home'
    },
    {
      summary: 'the road wardens'
    },
    {
      summary: 'some of the local militia'
    },
    {
      summary: 'a pair of travelling clerics'
    },
    {
      summary: 'some graverobbers'
    },
    {
      summary: 'some farmers'
    },
    {
      summary: 'a plague-infested cabin',
      function: () => {
        const cabin = lib.createAutoTippy(lib.cabin)('cabin')
        return `a plague-infested ${cabin}.`
      }
    },
    {
      summary: 'some beserkers'
    },
    {
      summary: 'a caravan of gypsies'
    },
    {
      summary: 'a knight errant',
      function: (town) => {
        const npc = setup.createNPC(town, {
          profession: 'knight',
          background: ['noble', 'soldier', 'soldier'].random(),
          isThrowaway: true
        })
        return `a ${setup.profile(npc, 'knight errant')}`
      }
    },
    {
      summary: 'a wounded knight',
      function: (town) => {
        const npc = setup.createNPC(town, {
          profession: ['fighter', 'fighter', 'paladin'].random(),
          background: ['noble', 'soldier', 'soldier'].random(),
          isThrowaway: true
        })
        return `an injured ${setup.profile(npc, 'knight')}`
      }
    },
    {
      summary: 'a traveling lady',
      function: (town) => {
        const npc = setup.createNPC(town, {
          hasClass: false,
          background: 'noble',
          isThrowaway: true,
          gender: 'woman'
        })
        return `a traveling ${setup.profile(npc, 'lady')}`
      }
    },
    {
      summary: 'a courier',
      function: (town) => {
        const npc = setup.createNPC(town, {
          hasClass: false,
          profession: 'courier',
          isThrowaway: true
        })
        return `a ${setup.profile(npc, 'courier')}`
      }
    },
    {
      summary: 'a wedding party'
    },
    {
      summary: 'a group of pilgrims'
    },
    {
      summary: 'a funeral procession'
    },
    {
      summary: 'a plague cart'
    },
    {
      summary: 'a lone horse, trotting the other way',
      function: () => {
        const horse = lib.createAutoTippy(lib.horse)('horse')
        return `a lone ${horse}, trotting the other way`
      }
    },
    {
      summary: 'a traveling theatre troupe'
    },
    {
      summary: 'some beggars'
    },
    {
      summary: 'a caravan of slavers'
    },
    {
      summary: 'a lone zombie'
    },
    {
      summary: 'a strange hermit',
      function: (town) => {
        const npc = setup.createNPC(town, {
          background: 'hermit'
        })
        return `a strange ${setup.profile(npc, 'hermit')}`
      }
    },
    {
      summary: 'a lost traveler',
      function: (town) => {
        const npc = setup.createNPC(town, {
          background: 'outlander',
          profession: 'pilgrim',
          note: 'This person is very lost.',
          isThrowaway: true,
          canBeCustom: true
        })
        return `a lost ${setup.profile(npc, 'traveler')}`
      }
    },
    {
      summary: 'a poor refugee',
      function: (town) => {
        const npc = setup.createNPC(town, {
          hasClass: false,
          background: 'commoner',
          profession: 'refugee',
          isThrowaway: true
        })
        return `a poor ${setup.profile(npc, 'nomad')}`
      }
    },
    {
      summary: 'a suspicious miner',
      function: (town) => {
        const npc = setup.createNPC(town, {
          hasClass: false,
          profession: 'miner',
          calmTrait: 'suspicious',
          note: 'This person is hiding something.',
          isThrowaway: true
        })
        return `a suspicious ${setup.profile(npc, 'miner')}`
      }
    },
    {
      summary: 'a barbarian hunter',
      function: (town) => {
        const npc = setup.createNPC(town, {
          background: 'outlander',
          profession: 'barbarian',
          isThrowaway: true
        })
        return `a barbarian ${setup.profile(npc, 'hunter')}`
      }
    },
    {
      summary: 'a mounted barbarian scout',
      function: (town) => {
        const npc = setup.createNPC(town, {
          profession: 'barbarian',
          background: 'outlander',
          isThrowaway: true
        })
        return `a mounted barbarian ${setup.profile(npc, 'scout')}`
      }
    },
    {
      summary: 'the ghost of a traveler',
      function: () => {
        const ghost = lib.ghost.create()
        const readout = lib.ghost.readout(ghost)
        return `the ${lib.createTippyFull(readout, 'ghost')} of a traveler. `
      }
    },
    {
      summary: 'a poisonous snake'
    },
    {
      summary: 'a giant spider',
      function: () => {
        const spider = lib.createAutoTippy(lib.spider)('spider')
        return `a giant ${spider}`
      }
    },
    {
      summary: 'a giant scorpion'
    },
    {
      summary: 'a giant centipede'
    },
    {
      summary: 'a pack of jackals'
    },
    {
      summary: 'a hungry jackalwere'
    },
    {
      summary: 'a giant lizard'
    },
    {
      summary: 'a pair of gnolls'
    },
    {
      summary: 'a pair of bandits'
    },
    {
      summary: 'an hobgoblin scout'
    },
    {
      summary: 'a roc on the wing'
    },
    {
      summary: 'a wyvern on the wing'
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
        const npc = setup.createNPC(town, {
          background: 'acolyte',
          profession: 'prophet',
          note: 'This prophet is as crazy as can be.',
          isThrowaway: true
        })
        return `a half-mad ${setup.profile(npc, 'prophet')}`
      }
    },
    {
      summary: 'a reclusive sorcerer',
      function: (town) => {
        const npc = setup.createNPC(town, {
          profession: 'sorcerer',
          background: 'acolyte',
          calmTrait: 'withdrawn',
          isThrowaway: true
        })
        return `a reclusive ${setup.profile(npc, 'sorcerer')}`
      }
    },
    {
      summary: 'a merchant of exotic goods',
      function: (town) => {
        const npc = setup.createNPC(town, {
          background: 'noble',
          profession: 'spice merchant',
          hasClass: false,
          isThrowaway: true
        })
        return `a strange ${setup.profile(npc, 'merchant')} of exotic goods`
      }
    },
    {
      summary: 'a misanthropic shapeshifter',
      function: (town) => {
        const npc = setup.createNPC(town, {
          background: 'hermit',
          profession: 'fugitive',
          calmTrait: 'misanthropic',
          stressTrait: 'murderous',
          note: 'Hates everyone. Is a shapeshifter.',
          hasClass: false,
          isThrowaway: true
        })
        return `a misanthropic ${setup.profile(npc, 'shapeshifter')}`
      }
    },
    {
      summary: 'an eccentric monk',
      function: (town) => {
        const npc = setup.createNPC(town, {
          background: 'hermit',
          calmTrait: 'kinda weird',
          hasClass: true,
          profession: 'monk',
          isThrowaway: true
        })
        return `an eccentric ${setup.profile(npc, 'monk')}`
      }
    },
    {
      summary: 'a nomadic herder',
      function: (town) => {
        const npc = setup.createNPC(town, {
          background: 'outlander',
          profession: 'herder',
          hasClass: false,
          isThrowaway: true
        })
        return `a nomadic ${setup.profile(npc, 'herder')}`
      }
    },
    {
      summary: 'a nomadic warrior',
      function: (town) => {
        const npc = setup.createNPC(town, {
          background: 'outlander',
          profession: 'fighter',
          isThrowaway: true
        })
        return `a nomadic ${setup.profile(npc, 'warrior')}`
      }
    },
    {
      summary: 'an outcast elf',
      function: (town) => {
        const npc = setup.createNPC(town, {
          background: 'outlander',
          profession: 'hermit',
          note: 'Is an outcast.',
          hasClass: false,
          race: 'elf',
          isThrowaway: true
        })
        return `an outcast ${setup.profile(npc, 'elf')}`
      }
    },
    {
      summary: 'a reclusive scholar',
      function: (town) => {
        const npc = setup.createNPC(town, {
          hasClass: false,
          background: 'hermit',
          profession: 'scholar',
          calmTrait: 'withdrawn',
          isThrowaway: true
        })
        return `a reclusive ${setup.profile(npc, 'scholar')}`
      }
    },
    {
      summary: 'an eccentric healer',
      function: (town) => {
        const npc = setup.createNPC(town, {
          profession: 'cleric',
          background: 'acolyte',
          note: 'This healer is rather odd.',
          isThrowaway: true
        })
        return `an eccentric ${setup.profile(npc, 'healer')}`
      }
    },
    {
      summary: 'a poor cowherd',
      function: (town) => {
        const npc = setup.createNPC(town, {
          hasClass: false,
          background: 'hermit',
          profession: 'cowherd',
          note: 'This cowherd is very poor, but knows the area well.',
          isThrowaway: true
        })
        return `a poor ${setup.profile(npc, 'cowherd')}`
      }
    },
    {
      summary: 'a mining prospector',
      function: (town) => {
        const npc = setup.createNPC(town, {
          hasClass: false,
          background: 'commoner',
          profession: 'prospector',
          isThrowaway: true
        })
        return `a mining ${setup.profile(npc, 'prospector')}`
      }
    },
    {
      summary: 'a religious fanatic with his many wives',
      function: (town) => {
        const npc = setup.createNPC(town, {
          background: 'outlander',
          profession: 'heretic',
          note: 'Has multiple wives.',
          isThrowaway: true
        })
        return `a religious ${setup.profile(
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
        const npc = setup.createNPC(town, {
          background: 'hermit',
          profession: 'sorcerer',
          calmTrait: 'paranoid',
          stressTrait: 'murderous',
          note: 'This person is totally mad.',
          isThrowaway: true
        })
        return `a mad ${setup.profile(npc, 'sorcerer')}`
      }
    },
    {
      summary: 'a paranoid shapeshifter',
      function: (town) => {
        const npc = setup.createNPC(town, {
          background: 'hermit',
          hasClass: false,
          profession: 'hermit',
          calmTrait: 'paranoid',
          stressTrait: 'murderous',
          note: 'This person is a paranoid shapeshifter.',
          isThrowaway: true
        })
        return `a paranoid ${setup.profile(npc, 'shapeshifter')}`
      }
    },
    {
      summary: 'a reclusive shapeshifter',
      function: (town) => {
        const npc = setup.createNPC(town, {
          background: 'hermit',
          profession: 'shapeshifter',
          note: 'This person is a shapeshifter.',
          isThrowaway: true
        })
        return `a reclusive ${setup.profile(npc, 'shapeshifter')}`
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
        const npc = setup.createNPC(town, {
          profession: 'fugitive',
          calmTrait: 'paranoid',
          stressTrait: 'murderous',
          note: 'This person is a wanted criminal for high treason against the crown.',
          isThrowaway: true
        })
        return `a dangerous ${setup.profile(npc, 'fugitive')}`
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
        const npc = setup.createNPC(town, {
          background: 'criminal',
          profession: 'adventurer',
          calmTrait: 'adventurous',
          stressTrait: 'excited',
          note: 'This person loves the thrill of a treasure hunt, and is about to go on a quest.',
          isThrowaway: true,
          canBeCustom: true
        })
        const map = lib.treasureMap.create()
        return `a ${setup.profile(npc, 'treasure-hunter')} with a ${
          map.tippyWord
        }`
      }
    },
    {
      summary: 'a wasteland druid',
      function: (town) => {
        const npc = setup.createNPC(town, {
          background: 'acolyte',
          profession: 'druid',
          calmTrait: 'understanding',
          isThrowaway: true
        })
        return `a wasteland ${setup.profile(npc, 'druid')}`
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
        const npc = setup.createNPC(town, {
          gender: 'woman',
          background: 'hermit',
          profession: 'witch',
          note: 'This witch is as mad as a cut snake.',
          isThrowaway: true
        })
        return `a mad ${setup.profile(npc, 'witch')}`
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
        const npc = setup.createNPC(town, {
          race: 'half-orc',
          background: 'hermit',
          note: 'This person is either an orc that was outcast, or a half orc. Hard to tell.',
          isThrowaway: true
        })
        return `a reclusive ${setup.profile(npc, 'shapeshifter')}`
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
      function: (town) => {
        const npc = setup.createNPC(town, {
          background: 'outlander',
          profession: 'prospector',
          note: 'This person is very lost.',
          isThrowaway: true
        })
        return `a lost ${setup.profile(npc, 'prospector')}`
      }
    },
    {
      summary: 'a solemn warrior',
      function: (town) => {
        const npc = setup.createNPC(town, {
          profession: 'fighter',
          calmTrait: 'solemn',
          stressTrait: 'determined',
          isThrowaway: true
        })
        return `a solemn looking ${setup.profile(npc, 'warrior')}`
      }
    },
    {
      summary: 'a seasoned mountaineer',
      function: (town) => {
        const npc = setup.createNPC(town, {
          background: 'outlander',
          profession: 'mountaineer',
          note: 'Never gets lost.',
          isThrowaway: true
        })
        return `a seasoned ${setup.profile(npc, 'mountaineer')}`
      }
    },
    {
      summary: 'an eccentric witch',
      function: (town) => {
        const npc = setup.createNPC(town, {
          gender: 'woman',
          background: 'hermit',
          profession: 'witch',
          note: 'This witch is as crazy as a cut snake.',
          isThrowaway: true
        })
        return `an eccentric ${setup.profile(npc, 'witch')}`
      }
    },
    {
      summary: 'a contemplative monk',
      function: (town) => {
        const npc = setup.createNPC(town, {
          background: 'acolyte',
          profession: 'monk',
          calmTrait: 'contemplative',
          stressTrait: 'determined',
          isThrowaway: true
        })
        return `a contemplative ${setup.profile(npc, 'monk')}`
      }
    },
    {
      summary: 'a hunting peryton'
    },
    {
      summary: 'a mountain lion'
    },
    {
      summary: 'a pair of harpies'
    },
    {
      summary: 'a flock of ravens'
    },
    {
      summary: 'several homeless dwarves'
    },
    {
      summary: 'an angry wraith'
    },
    {
      summary: 'a malevolent ghost',
      function: () => {
        const ghost = lib.ghost.create({ reaction: 'murderous and cruel' })
        const readout = lib.ghost.readout(ghost)
        return `a malevolent ${lib.createTippyFull(readout, 'ghost')}`
      }
    },
    {
      summary: 'a mated pair of manticores'
    },
    {
      summary: 'a trio of monstrous trolls'
    },
    {
      summary: 'a clan of stone giants at rest'
    },
    {
      summary: 'a roc tearing apart some prey'
    },
    {
      summary: 'a beggarly bandit',
      function: (town) => {
        const npc = setup.createNPC(town, {
          background: 'criminal',
          profession: ['fighter', 'rogue', 'rogue'].random(),
          isThrowaway: true
        })
        return `a beggarly ${setup.profile(npc, 'bandit')}`
      }
    },
    {
      summary: 'an old witch',
      function: (town) => {
        const npc = setup.createNPC(town, {
          profession: 'sorcerer',
          gender: 'woman',
          background: 'acolyte',
          ageStage: 'elderly',
          isThrowaway: true
        })
        return `an old ${setup.profile(npc, 'witch')}`
      }
    },
    {
      summary: 'a curious herbalist',
      function: (town) => {
        const npc = setup.createNPC(town, {
          hasClass: false,
          background: 'acolyte',
          profession: 'herbalist',
          isThrowaway: true
        })
        return `a curious ${setup.profile(npc, 'herbalist')}`
      }
    },
    {
      summary: 'a lost child',
      function: (town) => {
        const npc = setup.createNPC(town, {
          ageStage: 'child',
          isThrowaway: true
        })
        return `a lost ${setup.profile(npc, 'child')}`
      }
    },
    {
      summary: 'a woodcutter busy with the day’s work',
      function: (town) => {
        const npc = setup.createNPC(town, {
          hasClass: false,
          gender: 'man',
          profession: 'forester',
          isThrowaway: true
        })
        return `a ${setup.profile(npc, 'woodcutter')}, busy with the day's work`
      }
    },
    {
      summary: 'an intrepid hunter',
      function: (town) => {
        const npc = setup.createNPC(town, {
          profession: 'ranger',
          background: 'outlander',
          isThrowaway: true
        })
        return `an intrepid ${setup.profile(npc, 'hunter')}`
      }
    },
    {
      summary: 'an elvish ranger',
      function: (town) => {
        const npc = setup.createNPC(town, {
          profession: 'ranger',
          race: 'elf',
          background: 'outlander',
          isThrowaway: true
        })
        return `an elvish ${setup.profile(npc, 'ranger')}`
      }
    },
    {
      summary: 'a large bear'
    },
    {
      summary: 'a bear cub'
    },
    {
      summary: 'a wailing ghost',
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
        const npc = setup.createNPC(town, {
          gender: 'woman',
          background: 'hermit',
          ageStage: 'elderly',
          calmTrait: 'quiet',
          isThrowaway: true
        })
        return `a lonely old ${setup.profile(npc, 'woman')}`
      }
    },
    {
      summary: 'a beautiful witch',
      function: (town) => {
        const npc = setup.createNPC(town, {
          profession: 'sorcerer',
          gender: 'woman',
          background: 'acolyte',
          note: 'This witch is very beautiful.',
          isThrowaway: true
        })
        return `a beautiful ${setup.profile(npc, 'witch')}`
      }
    },
    {
      summary: 'a horrible witch',
      function: (town) => {
        const npc = setup.createNPC(town, {
          profession: 'sorcerer',
          gender: 'woman',
          background: 'acolyte',
          calmTrait: 'mean',
          stressTrait: 'cruel',
          isThrowaway: true
        })
        return `a horrible ${setup.profile(npc, 'witch')}`
      }
    },
    {
      summary: 'an outcast dwarf',
      function: (town) => {
        const npc = setup.createNPC(town, {
          race: 'dwarf',
          background: 'hermit',
          hasClass: false,
          calmTrait: 'quiet',
          isThrowaway: true
        })
        return `an outcast ${setup.profile(npc, 'dwarf')}`
      }
    },
    {
      summary: 'a dwarf prospector',
      function: (town) => {
        const npc = setup.createNPC(town, {
          hasClass: false,
          race: 'dwarf',
          background: 'commoner',
          profession: 'prospector',
          isThrowaway: true
        })
        return `a mining ${setup.profile(npc, 'prospector')}`
      }
    },
    {
      summary: 'a wood elf druid',
      function: (town) => {
        const npc = setup.createNPC(town, {
          profession: 'druid',
          background: 'outlander',
          race: 'elf',
          isThrowaway: true
        })
        return `a wood elf ${setup.profile(npc, 'druid')}`
      }
    },
    {
      summary: 'some irritable trolls'
    }
  ]
}
