if(!setup.misc)
    setup.misc = {}
setup.misc.encounters = {
    'a group of bandits operating a toll road': town => {
      let bandits = setup.misc.bandits.create(town, { business: 'scamming people into paying a toll to use the trail (despite it clearly not being crown-maintained)' })
      return 'a group of ' + bandits.tippyWord + ' operating a toll road. '
    },
    'a band of robbers': town => {
      let bandits = setup.misc.bandits.create(town, { business: 'attacking people using the trail' })
      return bandits.tippy + '<b>a band of robbers.</b></span>'
    },
    'some robbers': town => {
      let bandits = setup.misc.bandits.create(town, { business: 'attacking people using the trail' })
      return bandits.tippy + '<b>some robbers.</b></span>'
    },
    'a party of raiders': town => {
      let bandits = setup.misc.bandits.create(town)
      return bandits.tippy + '<b>a party of raiders.</b></span>'
    },
    'a pair of outlaws': town => {
      let npc = setup.createNPC(town, {
        background: 'criminal',
        isThrowaway: true
      })
      let secondNpc = setup.createNPC(town, {
        background: 'criminal',
        isThrowaway: true
      })
      return 'a pair of two outlaws; one ' + setup.profile(npc, npc.descriptor) + ' and a ' + setup.profile(secondNpc, secondNpc.descriptor)
    },
    'a band of desperate outlaws': town => {
      let bandits = setup.misc.bandits.create(town)
      return bandits.tippy + '<b>a band of desperate outlaws.</b></span>'
    },
    'some bandits': town => {
      let bandits = setup.misc.bandits.create(town, { business: 'attacking people using the trail' })
      return bandits.tippy + '<b>some bandits.</b></span>'
    },
    'some outlaws’ hideout': town => {
      let bandits = setup.misc.bandits.create(town)
      return bandits.tippy + 'a hideout belonging to <b>some outlaws</b></span>'
    },
    'a disciplined military company': town => {
      let mercenaries = setup.createMercenaries(town)
      return 'a military company, armed to the teeth with ' + mercenaries.weapon + ', wearing ' + mercenaries.colours + ' livery over their ' + mercenaries.armour + ' with an insignia of ' + mercenaries.insignia + '. They are ' + mercenaries.attitude + ' towards their <<profile `$npcs[' + JSON.stringify(mercenaries.captain.key) + ']` commander>>, who is ' + mercenaries.commanderTrait + '. They specialise in ' + mercenaries.specializes + ', and are notorious for ' + mercenaries.notorious + '. They are famous for their ' + mercenaries.tactics + ', and are currently ' + mercenaries.currently + '.'
    },
    'a rowdy mercenary troop': town => {
      let mercenaries = setup.createMercenaries(town)
      return 'a mercenary troop, armed to the teeth with ' + mercenaries.weapon + ', wearing ' + mercenaries.colours + ' livery over their ' + mercenaries.armour + ' with an insignia of ' + mercenaries.insignia + '. They are ' + mercenaries.attitude + ' towards their <<profile `$npcs[' + JSON.stringify(mercenaries.captain.key) + ']` commander>>, who is ' + mercenaries.commanderTrait + '. They specialise in ' + mercenaries.specializes + ', and are notorious for ' + mercenaries.notorious + '. They are famous for their ' + mercenaries.tactics + ', and are currently ' + mercenaries.currently + '.'
    },
    'a band of mercenaries': town => {
      let mercenaries = setup.createMercenaries(town)
      return 'a mercenary troop, armed to the teeth with ' + mercenaries.weapon + ', wearing ' + mercenaries.colours + ' livery over their ' + mercenaries.armour + ' with an insignia of ' + mercenaries.insignia + '. They are ' + mercenaries.attitude + ' towards their <<profile `$npcs[' + JSON.stringify(mercenaries.captain.key) + ']` commander>>, who is ' + mercenaries.commanderTrait + '. They specialise in ' + mercenaries.specializes + ', and are notorious for ' + mercenaries.notorious + '. They are famous for their ' + mercenaries.tactics + ', and are currently ' + mercenaries.currently + '.'
    },
    'a marching army': town => {
      let mercenaries = setup.createMercenaries(town)
      return 'a small army, armed to the teeth with ' + mercenaries.weapon + ', wearing ' + mercenaries.colours + ' livery over their ' + mercenaries.armour + ' with an insignia of ' + mercenaries.insignia + '. They are ' + mercenaries.attitude + ' towards their <<profile `$npcs[' + JSON.stringify(mercenaries.captain.key) + ']` commander>>, who is ' + mercenaries.commanderTrait + '. They specialise in ' + mercenaries.specializes + ', and are notorious for ' + mercenaries.notorious + '. They are famous for their ' + mercenaries.tactics + ', and are currently ' + mercenaries.currently + '.'
    },
    'a small merchant caravan': town => {
      let caravan = setup.misc.caravan.create(town)
      return 'a small merchant caravan. ' + caravan.readout
    },
    'a merchant caravan': town => {
      let caravan = setup.misc.caravan.create(town)
      return 'a merchant caravan. ' + caravan.readout
    },
    'a clan of orcs': town => {
      let orcs = setup.misc.orcs.create()
      return 'a clan of orcs. ' + orcs.readout
    },
    'several orc raiders': town => {
      let orcs = setup.misc.orcs.create()
      return 'several orc raiders. ' + orcs.readout
    },
    'an orkish war band': () => {
      let orcs = setup.misc.orcs.create()
      return 'an orc war band. ' + orcs.readout
    },
    'an orc war band': town => {
      let orcs = setup.misc.orcs.create(town)
      return 'an orc war band. ' + orcs.readout
    },
    'a handful of ogres': () => {
      let ogre = setup.misc.ogre.create()
      return 'a handful of ' + ogre.tippyWord + 's.'
    },
    'an ogre': () => {
      let ogre = setup.misc.ogre.create()
      return 'a lone ' + ogre.tippyWord + '.'
    },
    "an ogre's lair": () => {
      let ogre = setup.misc.ogre.create()
      return 'a lair belonging to an ' + ogre.tippyWord
    },
    "some goblins' hideout": town => {
      let goblins = setup.misc.goblins.create(town)
      return 'a goblin hideout. ' + goblins.readout
    },
    'a pair of goblin scouts': () => 'a pair of goblin scouts',
    'a lone goblin': () => {
      let goblin = setup.misc.goblin.create()
      return 'a lone ' + goblin.tippyWord + ' ' + ['trying to hide from you.', 'lying in wait for you.', 'lying down, asleep.', 'crawling away from you, clearly bleeding.'].seededrandom()
    },
    'a goblin war party': town => {
      let goblins = setup.misc.goblins.create()
      return 'a goblin war party. ' + goblins.readout
    },
    'a goblin patrol': () => 'a goblin patrol ' + ['lying in ambush.', 'squabbling over something.', 'in the middle of a meal.', 'arguing amongst themselves over something.', 'jumping up and down, for some reason.'].seededrandom(),
    'several giant spiders': () => {
      let spider = setup.misc.spider.create()
      return 'several giant ' + spider.tippyWord + '<b>s</b>.'
    },
    'a pack of wolves': () => {
      let wolf = setup.misc.wolf.create()
      let wolves = wolf.tippy + '<b>wolves</b></span>.'
      return 'a pack of ' + wolves
    },
    'a lone wolf': () => {
      let wolf = setup.misc.wolf.create()
      return 'a lone ' + wolf.tippyWord + '.'
    },
    'a hunting cat': () => {
      let cat = setup.misc.cat.create()
      return 'a hunting ' + cat.tippyWord + '.'
    },
    'an itinerant priest': town => {
      let npc = setup.createNPC(town, {
        hasClass: false,
        background: 'acolyte',
        profession: 'priest',
        isThrowaway: true
      })
      return 'an itinerant ' + setup.profile(npc, 'priest')
    },
    'a hermit': town => {
      let npc = setup.createNPC(town, {
        hasClass: false,
        background: 'hermit',
        profession: 'hermit',
        isThrowaway: true
      })
      return 'a ' + setup.profile(npc, 'hermit')
    },
    'a solitary hunter': town => {
      let npc = setup.createNPC(town, {
        dndClass: 'ranger',
        background: 'outlander',
        isThrowaway: true
      })
      return 'a solitary ' + setup.profile(npc, 'hunter')
    },
    'a solitary bandit': town => {
      let npc = setup.createNPC(town, {
        dndClass: 'rogue',
        background: 'criminal',
        isThrowaway: true
      })
      return 'a solitary ' + setup.profile(npc, 'bandit')
    },
    'an injured knight': town => {
      let npc = setup.createNPC(town, {
        dndClass: ['fighter', 'fighter', 'paladin'].seededrandom(),
        background: ['noble', 'soldier', 'soldier'].seededrandom(),
        isThrowaway: true
      })
      return 'an injured ' + setup.profile(npc, 'knight')
    },
    'a ranger': town => {
      let npc = setup.createNPC(town, {
        dndClass: 'ranger',
        background: 'outlander',
        isThrowaway: true
      })
      return 'a solitary ' + setup.profile(npc, 'hunter')
    },
    'a diseased animal corpse': () => 'a diseased animal corpse',
    'a dead body': () => 'a dead body',
    'a group of dwarves': () => 'a group of dwarves',
    'a handful of farmers': () => 'a handful of farmers',
    'the border patrol': () => 'the border patrol',
    'a travelling peddler': () => 'a travelling peddler',
    'a hunting party': () => 'a hunting party',
    'another adventuring party': () => 'another adventuring party',
    'some escaped convicts': () => 'some escaped convicts',
    'some herdsmen': () => 'some herdsmen',
    'some particularly dense overgrowth': () => 'some particularly dense overgrowth',
    'some tribesmen': () => 'some tribesmen',
    'the undead': () => 'the undead',
    '[monster encounter]': () => '[monster encounter]',
    'a traveling peddler': town => {
      let npc = setup.createNPC(town, {
        hasClass: false,
        background: 'urchin',
        profession: 'merchant',
        isThrowaway: true
      })
      return 'a traveling ' + setup.profile(npc, 'peddler')
    },
    'a solitary troubador': town => {
      let npc = setup.createNPC(town, {
        hasClass: false,
        background: 'entertainer',
        profession: 'troubador',
        isThrowaway: true
      })
      return 'a solitary ' + setup.profile(npc, 'troubador')
    },
    'an adventurer on a horse': town => {
      let horse = setup.misc.horse.create()
      let npc = setup.createNPC(town, {
        dndClass: ['fighter', 'fighter', 'paladin'].seededrandom(),
        background: ['noble', 'soldier', 'soldier'].seededrandom(),
        isThrowaway: true
      })
      return 'an ' + setup.profile(npc, 'adventurer') + ' on a ' + horse.tippyWord
    },
    'a mounted messenger': town => {
      let npc = setup.createNPC(town, {
        hasClass: false,
        profession: 'messenger',
        isThrowaway: true
      })
      return 'a mounted ' + setup.profile(npc, 'messenger')
    },
    'a work gang heading home': () => 'a work gang heading home',
    'the road wardens': () => 'the road wardens',
    'some of the local militia': () => 'some of the local militia',
    'a pair of travelling clerics': () => 'a pair of travelling clerics',
    'some graverobbers': () => 'some graverobbers',
    'some farmers': () => 'some farmers',
    'a plague-infested cabin': () => {
      let cabin = setup.misc.cabin.create()
      return 'a plague-infested ' + cabin.tippyWord + '.'
    },
    'some beserkers': () => 'some beserkers',
    'a caravan of gypsies': () => 'a caravan of gypsies',
    'a knight errant': town => {
      let npc = setup.createNPC(town, {
        dndClass: 'paladin',
        background: ['noble', 'soldier', 'soldier'].seededrandom(),
        isThrowaway: true
      })
      return 'a ' + setup.profile(npc, 'knight errant')
    },
    'a wounded knight': town => {
      let npc = setup.createNPC(town, {
        dndClass: ['fighter', 'fighter', 'paladin'].seededrandom(),
        background: ['noble', 'soldier', 'soldier'].seededrandom(),
        isThrowaway: true
      })
      return 'an injured ' + setup.profile(npc, 'knight')
    },
    'a traveling lady': town => {
      let npc = setup.createNPC(town, {
        hasClass: false,
        background: 'noble',
        isThrowaway: true
      })
      return 'a traveling ' + setup.profile(npc, 'lady')
    },
    'a courier': town => {
      let npc = setup.createNPC(town, {
        hasClass: false,
        profession: 'courier',
        isThrowaway: true
      })
      return 'a ' + setup.profile(npc, 'courier')
    },
    'a wedding party': () => 'a wedding party',
    'a group of pilgrims': () => 'a group of pilgrims',
    'a funeral procession': () => 'a funeral procession',
    'a plague cart': () => 'a plague cart',
    'a lone horse, trotting the other way': () => {
      let horse = setup.misc.horse.create()
      return 'a lone ' + horse.tippyWord + ', trotting the other way'
    },
    'a traveling theatre troupe': () => 'a traveling theatre troupe',
    'some beggars': () => 'some beggars',
    'a caravan of slavers': () => 'a caravan of slavers',
    'a lone zombie': () => 'a lone zombie',
    'a strange hermit': town => {
      let npc = setup.createNPC(town, {
        background: 'hermit',
        isThrowaway: true,
        canBeCustom: true
      })
      return 'a strange ' + setup.profile(npc, 'hermit')
    },
    'a lost traveler': town => {
      let npc = setup.createNPC(town, {
        background: 'outlander',
        profession: 'traveler',
        note: 'This person is very lost.',
        isThrowaway: true,
        canBeCustom: true
      })
      return 'a lost ' + setup.profile(npc, 'traveler')
    },
    'a poor nomad': town => {
      let npc = setup.createNPC(town, {
        hasClass: false,
        background: 'commoner',
        profession: 'nomad',
        isThrowaway: true
      })
      return 'a poor ' + setup.profile(npc, 'nomad')
    },
    'a suspicious miner': town => {
      let npc = setup.createNPC(town, {
        hasClass: false,
        profession: 'miner',
        calmTrait: 'suspicious',
        note: 'This person is hiding something.',
        isThrowaway: true
      })
      return 'a suspicious ' + setup.profile(npc, 'miner')
    },
    'a barbarian hunter': town => {
      let npc = setup.createNPC(town, {
        dndClass: 'barbarian',
        background: 'outlander',
        profession: 'hunter',
        isThrowaway: true
      })
      return 'a barbarian ' + setup.profile(npc, 'hunter')
    },
    'a mounted barbarian scout': town => {
      let npc = setup.createNPC(town, {
        dndClass: 'barbarian',
        background: 'outlander',
        profession: 'scout',
        isThrowaway: true
      })
      return 'a mounted barbarian ' + setup.profile(npc, 'scout')
    },
    'the ghost of a traveler': () => {
      let ghost = setup.misc.ghost.create()
      return 'the ' + ghost.tippyWord + ' of a traveler. '
    },
    'a poisonous snake': () => 'a poisonous snake',
    'a giant spider': () => {
      let spider = setup.misc.spider.create()
      return 'a giant ' + spider.tippyWord
    },
    'a giant scorpion': () => 'a giant scorpion',
    'a giant centipede': () => 'a giant centipede',
    'a pack of jackals': () => 'a pack of jackals',
    'a hungry jackalwere': () => 'a hungry jackalwere',
    'a giant lizard': () => 'a giant lizard',
    'a pair of gnolls': () => 'a pair of gnolls',
    'a pair of bandits': () => 'a pair of bandits',
    'an hobgoblin scout': () => 'an hobgoblin scout',
    'a roc on the wing': () => 'a roc on the wing',
    'a wyvern on the wing': () => 'a wyvern on the wing',
    'lots of bats': town => 'lots of bats',
    'many spider webs': town => 'many spider webs',
    "a troll's stash.": town => { return "a troll's stash." },
    'some abandoned mining equipment': town => 'some abandoned mining equipment',
    'bare rock': town => 'bare rock',
    'a potable spring': town => 'a potable spring',
    'mummified remains': town => 'some mummified remains',
    'a band of dwarvish refugees': town => 'a band of dwarvish refugees',
    'a swarm of beetles': town => 'a swarm of beetles',
    'a half mad prophet': town => {
      let npc = setup.createNPC(town, {
        dndClass: 'sorcerer',
        background: 'acolyte',
        profession: 'prophet',
        note: 'This prophet is as crazy as can be.',
        isThrowaway: true
      })
      return 'a half-mad ' + setup.profile(npc, 'prophet')
    },
    'a reclusive sorcerer': town => {
      let npc = setup.createNPC(town, {
        dndClass: 'sorcerer',
        background: 'acolyte',
        calmTrait: 'withdrawn',
        isThrowaway: true
      })
      return 'a reclusive ' + setup.profile(npc, 'sorcerer')
    },
    'a merchant of exotic goods': town => {
      let npc = setup.createNPC(town, {
        background: 'noble',
        profession: 'merchant',
        hasClass: false,
        isThrowaway: true
      })
      return 'a strange ' + setup.profile(npc, 'merchant') + ' of exotic goods'
    },
    'a misanthropic shapeshifter': town => {
      let npc = setup.createNPC(town, {
        background: 'hermit',
        profession: 'hermit',
        calmTrait: 'misanthropic',
        stressTrait: 'murderous',
        note: 'Hates everyone. Is a shapeshifter.',
        hasClass: false,
        isThrowaway: true
      })
      return 'a misanthropic ' + setup.profile(npc, 'shapeshifter')
    },
    'an eccentric monk': town => {
      let npc = setup.createNPC(town, {
        background: 'hermit',
        profession: 'hermit',
        calmTrait: 'kinda weird',
        hasClass: true,
        dndClass: 'monk',
        isThrowaway: true
      })
      return 'an eccentric ' + setup.profile(npc, 'monk')
    },
    'a nomadic herder': town => {
      let npc = setup.createNPC(town, {
        background: 'outlander',
        profession: 'herder',
        hasClass: false,
        isThrowaway: true
      })
      return 'a nomadic ' + setup.profile(npc, 'herder')
    },
    'a nomadic warrior': town => {
      let npc = setup.createNPC(town, {
        background: 'outlander',
        profession: 'warrior',
        dndClass: 'fighter',
        isThrowaway: true
      })
      return 'a nomadic ' + setup.profile(npc, 'warrior')
    },
    'an outcast elf': town => {
      let npc = setup.createNPC(town, {
        background: 'outlander',
        profession: 'hermit',
        note: 'Is an outcast.',
        hasClass: false,
        race: 'elf',
        isThrowaway: true
      })
      return 'an outcast ' + setup.profile(npc, 'elf')
    },
    'a reclusive scholar': town => {
      let npc = setup.createNPC(town, {
        hasClass: false,
        background: 'hermit',
        profession: 'scholar',
        calmTrait: 'withdrawn',
        isThrowaway: true
      })
      return 'a reclusive ' + setup.profile(npc, 'scholar')
    },
    'an eccentric healer': town => {
      let npc = setup.createNPC(town, {
        dndClass: 'cleric',
        background: 'acolyte',
        note: 'This healer is rather odd.',
        isThrowaway: true
      })
      return 'an eccentric ' + setup.profile(npc, 'healer')
    },
    'a poor goatherder': town => {
      let npc = setup.createNPC(town, {
        hasClass: false,
        background: 'hermit',
        profession: 'goatherder',
        note: 'This goatherder is very poor, but knows the area well.',
        isThrowaway: true
      })
      return 'a poor ' + setup.profile(npc, 'goatherder')
    },
    'a mining prospector': town => {
      let npc = setup.createNPC(town, {
        hasClass: false,
        background: 'commoner',
        profession: 'prospector',
        isThrowaway: true
      })
      return 'a mining ' + setup.profile(npc, 'prospector')
    },
    'a religious fanatic with his many wives': town => {
      let npc = setup.createNPC(town, {
        background: 'outlander',
        profession: 'religious fanatic',
        note: 'Has multiple wives.',
        isThrowaway: true
      })
      return 'a religious ' + setup.profile(npc, 'fanatic') + ' with his many wives'
    },
    'poisonous snakes': town => 'poisonous snakes',
    'a pair of orcs': town => 'a pair of orcs',
    'a mad sorcerer': town => {
      let npc = setup.createNPC(town, {
        background: 'hermit',
        dndClass: 'sorcerer',
        calmTrait: 'paranoid',
        stressTrait: 'murderous',
        note: 'This person is totally mad.',
        isThrowaway: true
      })
      return 'a mad ' + setup.profile(npc, 'sorcerer')
    },
    'a paranoid shapeshifter': town => {
      let npc = setup.createNPC(town, {
        background: 'hermit',
        hasClass: false,
        profession: 'hermit',
        calmTrait: 'paranoid',
        stressTrait: 'murderous',
        note: 'This person is a paranoid shapeshifter.',
        isThrowaway: true
      })
      return 'a paranoid ' + setup.profile(npc, 'shapeshifter')
    },
    'a reclusive shapeshifter': town => {
      let npc = setup.createNPC(town, {
        dndClass: 'sorcerer',
        background: 'hermit',
        profession: 'shapeshifter',
        note: 'This person is a shapeshifter.',
        isThrowaway: true
      })
      return 'a reclusive ' + setup.profile(npc, 'shapeshifter')
    },
    'a restless ghost': () => {
      let ghost = setup.misc.ghost.create()
      return 'a restless ' + ghost.tippyWord
    },
    'a dangerous fugitive': town => {
      let npc = setup.createNPC(town, {
        background: 'criminal',
        profession: 'criminal',
        dndClass: 'rogue',
        calmTrait: 'paranoid',
        stressTrait: 'murderous',
        note: 'This person is a wanted criminal for high treason against the crown.',
        isThrowaway: true
      })
      return 'a dangerous ' + setup.profile(npc, 'fugitive')
    },
    'spiders and rats': () => {
      let spider = setup.misc.spider.create()
      return spider.tippyWord + '<b>s</b>' + ' and rats'
    },
    'a treasure hunter': town => {
      let npc = setup.createNPC(town, {
        background: 'criminal',
        profession: 'treasure hunter',
        dndClass: 'rogue',
        calmTrait: 'adventurous',
        stressTrait: 'excited',
        note: 'This person loves the thrill of a treasure hunt, and is about to go on a quest.',
        isThrowaway: true,
        canBeCustom: true
      })
      let map = setup.misc.treasureMap.create()
      return 'a ' + setup.profile(npc, 'treasure-hunter') + ' with a ' + map.tippyWord
    },
    'a wasteland druid': town => {
      let npc = setup.createNPC(town, {
        background: 'acolyte',
        profession: 'druid',
        dndClass: 'druid',
        calmTrait: 'understanding',
        isThrowaway: true
      })
      return 'a wasteland ' + setup.profile(npc, 'druid')
    },
    'cursed mummies': town => 'cursed mummies',
    'a hobgoblin warlord': town => 'a hobgoblin warlord',
    'an orcish war chief': town => 'an orcish war chief',
    'a tribe of kobolds': town => 'a tribe of kobolds',
    'a territorial griffon': town => 'a territorial griffon',
    'a pair of manticores': town => 'a pair of manticores',
    'slavering gnolls': town => 'slavering gnolls',
    'a mountain lion’s den': town => 'a mountain lion’s den',
    'unidentifiable remains': town => 'some unidentifiable remains',
    'a hungry ettin': town => 'a hungry ettin',
    'a griffon’s nest': town => 'a griffon’s nest',
    'a manticore’s den': town => 'a manticore’s den',
    'a basilisk’s lair': town => 'a basilisk’s lair',
    'a wyvern’s nest': town => 'a wyvern’s nest',
    'a clan of stone giants': town => 'a clan of stone giants',
    'a dragon': town => 'a dragon',
    'a sleeping dragon': town => 'a sleeping dragon',
    'a mad witch': town => {
      let npc = setup.createNPC(town, {
        gender: 'woman',
        dndClass: 'sorcerer',
        background: 'hermit',
        profession: 'witch',
        note: 'This witch is as mad as a cut snake.',
        isThrowaway: true
      })
      return 'a mad ' + setup.profile(npc, 'witch')
    },
    'restless ghosts': () => {
      let ghost = setup.misc.ghost.create()
      return 'a restless ' + ghost.tippyWord
    },
    'an outcast orc': town => {
      let npc = setup.createNPC(town, {
        race: 'half-orc',
        background: 'hermit',
        note: 'This person is either an orc that was outcast, or a half orc.',
        isThrowaway: true
      })
      return 'a reclusive ' + setup.profile(npc, 'shapeshifter')
    },
    'an owlbear': town => 'an owlbear',
    'a troll': town => 'a troll',
    'several harpies': town => 'several harpies',
    'a handful of dwarves': town => 'a handful of dwarves',
    'ghostly warriors': town => 'ghostly warriors',
    'a lost prospector': town => {
      let npc = setup.createNPC(town, {
        background: 'outlander',
        hasClass: false,
        profession: 'prospector',
        note: 'This person is very lost.',
        isThrowaway: true
      })
      return 'a lost ' + setup.profile(npc, 'prospector')
    },
    'a solemn warrior': town => {
      let npc = setup.createNPC(town, {
        background: 'soldier',
        hasClass: true,
        dndClass: 'fighter',
        calmTrait: 'solemn',
        stressTrait: 'determined',
        isThrowaway: true
      })
      return 'a solemn looking ' + setup.profile(npc, 'warrior')
    },
    'a seasoned mountaineer': town => {
      let npc = setup.createNPC(town, {
        background: 'outlander',
        hasClass: false,
        profession: 'mountaineer',
        note: 'Never gets lost.',
        isThrowaway: true
      })
      return 'a seasoned ' + setup.profile(npc, 'mountaineer')
    },

    'an eccentric witch': town => {
      let npc = setup.createNPC(town, {
        gender: 'woman',
        dndClass: 'sorcerer',
        background: 'hermit',
        profession: 'witch',
        note: 'This witch is as crazy as a cut snake.',
        isThrowaway: true
      })
      return 'an eccentric ' + setup.profile(npc, 'witch')
    },
    'a contemplative monk': town => {
      let npc = setup.createNPC(town, {
        dndClass: 'monk',
        background: 'acolyte',
        profession: 'monk',
        calmTrait: 'contemplative',
        stressTrait: 'determined',
        isThrowaway: true
      })
      return 'a contemplative ' + setup.profile(npc, 'monk')
    },
    'a hunting peryton': town => 'a hunting peryton',
    'a mountain lion': town => 'a mountain lion',
    'a pair of harpies': town => 'a pair of harpies',
    'a flock of ravens': town => 'a flock of ravens',
    'several homeless dwarves': town => 'several homeless dwarves',
    'an angry wraith': town => 'an angry wraith',
    'a malevolent ghost': () => {
      let ghost = setup.misc.ghost.create({ reaction: 'murderous and cruel' })
      return 'a malevolent ' + ghost.tippyWord
    },
    'a mated pair of manticores': town => 'a mated pair of manticores',
    'a trio of monstrous trolls': town => 'a trio of monstrous trolls',
    'a clan of stone giants at rest': town => 'a clan of stone giants at rest',
    'a roc tearing apart some prey': town => 'a roc tearing apart some prey',
    'a beggarly bandit': town => {
      let npc = setup.createNPC(town, {
        background: 'criminal',
        dndClass: ['fighter', 'rogue', 'rogue'].seededrandom(),
        isThrowaway: true
      })
      return 'a beggarly ' + setup.profile(npc, 'bandit')
    },
    'an old witch': town => {
      let npc = setup.createNPC(town, {
        dndClass: 'sorcerer',
        gender: 'woman',
        background: 'acolyte',
        ageStage: 'elderly',
        isThrowaway: true
      })
      return 'an old ' + setup.profile(npc, 'witch')
    },
    'a curious herbalist': town => {
      let npc = setup.createNPC(town, {
        hasClass: false,
        background: 'acolyte',
        profession: 'herbalist',
        isThrowaway: true
      })
      return 'a curious ' + setup.profile(npc, 'herbalist')
    },
    'a lost child': town => {
      let npc = setup.createNPC(town, {
        ageStage: 'child',
        isThrowaway: true
      })
      return 'a lost ' + setup.profile(npc, 'child')
    },
    'a woodcutter busy with the day’s work': town => {
      let npc = setup.createNPC(town, {
        hasClass: false,
        gender: 'man',
        profession: 'woodcutter',
        isThrowaway: true
      })
      return 'a <<profile `$npcs[' + JSON.stringify(npc.key) + "]` woodcutter>>, busy with the day's work"
    },
    'an intrepid hunter': town => {
      let npc = setup.createNPC(town, {
        dndClass: 'ranger',
        background: 'outlander',
        isThrowaway: true
      })
      return 'an intrepid ' + setup.profile(npc, 'hunter')
    },
    'an elvish ranger': town => {
      let npc = setup.createNPC(town, {
        dndClass: 'ranger',
        race: 'elf',
        background: 'outlander',
        isThrowaway: true
      })
      return 'an elvish ' + setup.profile(npc, 'ranger')
    },
    'a large bear': () => 'a large bear',
    'a bear cub': () => 'a bear cub',
    'a wailing ghost': () => {
      let ghost = setup.misc.ghost.create()
      return 'a wailing ' + ghost.tippyWord
    },
    'giant spiders': () => {
      let spider = setup.misc.spider.create()
      return 'giant ' + spider.tippyWord + '<b>s</b><<run setup.tippy("span")>>'
    },
    'hungry zombies': () => 'hungry zombies',
    'a lonely old woman': town => {
      let npc = setup.createNPC(town, {
        gender: 'woman',
        background: 'hermit',
        ageStage: 'elderly',
        calmTrait: 'quiet',
        isThrowaway: true
      })
      return 'a lonely old ' + setup.profile(npc, 'woman')
    },
    'a beautiful witch': town => {
      let npc = setup.createNPC(town, {
        dndClass: 'sorcerer',
        gender: 'woman',
        background: 'acolyte',
        note: 'This witch is very beautiful.',
        isThrowaway: true
      })
      return 'a beautiful ' + setup.profile(npc, 'witch')
    },
    'a horrible witch': town => {
      let npc = setup.createNPC(town, {
        dndClass: 'sorcerer',
        gender: 'woman',
        background: 'acolyte',
        calmTrait: 'mean',
        stressTrait: 'cruel',
        isThrowaway: true
      })
      return 'a horrible ' + setup.profile(npc, 'witch')
    },
    'an outcast dwarf': town => {
      let npc = setup.createNPC(town, {
        race: 'dwarf',
        background: 'hermit',
        hasClass: false,
        calmTrait: 'quiet',
        isThrowaway: true
      })
      return 'an outcast ' + setup.profile(npc, 'dwarf')
    },
    'a dwarf prospector': town => {
      let npc = setup.createNPC(town, {
        hasClass: false,
        race: 'dwarf',
        background: 'commoner',
        profession: 'prospector',
        isThrowaway: true
      })
      return 'a mining ' + setup.profile(npc, 'prospector')
    },
    'a wood elf druid': town => {
      let npc = setup.createNPC(town, {
        dndClass: 'druid',
        background: 'outlander',
        race: 'elf',
        isThrowaway: true
      })
      return 'a wood elf ' + setup.profile(npc, 'druid')
    },
    'some irritable trolls': () => 'some irritable trolls'
  }