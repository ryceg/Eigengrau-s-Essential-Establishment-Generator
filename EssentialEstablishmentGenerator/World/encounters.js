// /* global setup */
// setup.misc.encounters = {
//   'a group of bandits operating a toll road': function (town) {
//     var bandits = setup.misc.bandits.create(town, { business: 'scamming people into paying a toll to use the trail (despite it clearly not being crown-maintained)' })
//     return 'a group of ' + bandits.tippyWord + ' operating a toll road. '
//   },
//   'a band of robbers': function (town) {
//     var bandits = setup.misc.bandits.create(town, { business: 'attacking people using the trail' })
//     return bandits.tippy + '<b>a band of robbers.</b></span>'
//   },
//   'a party of raiders': function (town) {
//     var bandits = setup.misc.bandits.create(town)
//     return bandits.tippy + '<b>a party of raiders.</b></span>'
//   },
//   "some goblins' hideout": function (town) {
//     var goblins = setup.misc.goblins.create(town)
//     return 'a goblin hideout. ' + goblins.readout
//   },
//   'a pair of goblin scouts': function () { return 'a pair of goblin scouts' },
//   'a goblin patrol': function () { return 'a goblin patrol' },
//   'some outlaws’ hideout': function (town) {
//     var bandits = setup.misc.bandits.create(town)
//     return bandits.tippy + 'a hideout belonging to <b>some outlaws.</b></span>'
//   },
//   'a disciplined military company': function (town) {
//     var mercenaries = setup.createMercenaries(town)
//     return 'a military company, armed to the teeth with ' + mercenaries.weapon + ', wearing ' + mercenaries.colours + ' livery over their ' + mercenaries.armour + ' with an insignia of ' + mercenaries.insignia + '. They are ' + mercenaries.attitude + ' towards their <<profile `$npcs[' + JSON.stringify(mercenaries.captain.key) + ']` commander>>, who is ' + mercenaries.commanderTrait + '. They specialise in ' + mercenaries.specializes + ', and are notorious for ' + mercenaries.notorious + '. They are famous for their ' + mercenaries.tactics + ', and are currently ' + mercenaries.currently + '.'
//   },
//   'a rowdy mercenary troop': function (town) {
//     var mercenaries = setup.createMercenaries(town)
//     return 'a mercenary troop, armed to the teeth with ' + mercenaries.weapon + ', wearing ' + mercenaries.colours + ' livery over their ' + mercenaries.armour + ' with an insignia of ' + mercenaries.insignia + '. They are ' + mercenaries.attitude + ' towards their <<profile `$npcs[' + JSON.stringify(mercenaries.captain.key) + ']` commander>>, who is ' + mercenaries.commanderTrait + '. They specialise in ' + mercenaries.specializes + ', and are notorious for ' + mercenaries.notorious + '. They are famous for their ' + mercenaries.tactics + ', and are currently ' + mercenaries.currently + '.'
//   },
//   'a band of desperate outlaws': function (town) {
//     var bandits = setup.misc.bandits.create(town)
//     return bandits.tippy + '<b>a band of desperate outlaws.</b></span>'
//   },
//   'a clan of orcs': function (town) {
//     var orcs = setup.misc.orcs.create()
//     return 'a clan of orcs. ' + orcs.readout
//   },
//   'a goblin war party': function (town) {
//     var goblins = setup.misc.goblins.create()
//     return 'a goblin war party. ' + goblins.readout
//   },
//   'several orc raiders': function (town) {
//     var orcs = setup.misc.orcs.create()
//     return 'several orc raiders. ' + orcs.readout
//   },
//   'an orkish war band': function () {
//     var orcs = setup.misc.orcs.create()
//     return 'an orc war band. ' + orcs.readout
//   },
//   'an orc war band': function (town) {
//     var orcs = setup.misc.orcs.create(town)
//     return 'an orc war band. ' + orcs.readout
//   },
//   'a handful of ogres': function () {
//     var ogre = setup.misc.ogre.create()
//     return 'a handful of ' + ogre.tippyWord + 's'
//   },
//   'an ogre': function () {
//     var ogre = setup.misc.ogre.create()
//     return 'a lone ' + ogre.tippyWord
//   },
//   'several giant spiders': function () {
//     var spider = setup.misc.spider.create()
//     return 'several giant ' + spider.tippyWord + '<b>s</b>'
//   },
//   'a pack of wolves': function () {
//     var wolf = setup.misc.wolf.create()
//     var wolves = wolf.tippy + '<b>wolves</b></span>'
//     return 'a pack of ' + wolves
//   },
//   'a lone wolf': function () {
//     var wolf = setup.misc.wolf.create()
//     return 'a lone ' + wolf.tippyWord
//   },
//   'a hunting cat': function () {
//     var cat = setup.misc.cat.create()
//     return 'a hunting ' + cat.tippyWord
//   },
//   'an itinerant priest': function (town) {
//     var npc = setup.createNPC(town, {
//       hasClass: false,
//       background: 'acolyte',
//       profession: 'priest'
//     })
//     return 'an itinerant <<profile `$npcs[' + JSON.stringify(npc.key) + ']` priest>>'
//   },
//   'a hermit': function (town) {
//     var npc = setup.createNPC(town, {
//       hasClass: false,
//       background: 'hermit',
//       profession: 'hermit'
//     })
//     return 'a <<profile `$npcs[' + JSON.stringify(npc.key) + ']` hermit>>'
//   },
//   'a solitary hunter': function (town) {
//     var npc = setup.createNPC(town, {
//       dndClass: 'ranger',
//       background: 'outlander'
//     })
//     return 'a solitary <<profile `$npcs[' + JSON.stringify(npc.key) + ']` hunter>>'
//   },
//   'a solitary bandit': function (town) {
//     var npc = setup.createNPC(town, {
//       dndClass: 'rogue',
//       background: 'criminal'
//     })
//     return 'a solitary <<profile `$npcs[' + JSON.stringify(npc.key) + ']` bandit>>'
//   },
//   'an injured knight': function (town) {
//     var npc = setup.createNPC(town, {
//       dndClass: ['fighter', 'fighter', 'paladin'].random(),
//       background: ['noble', 'soldier', 'soldier'].random()
//     })
//     return 'an injured <<profile `$npcs[' + JSON.stringify(npc.key) + ']` knight>>'
//   },
//   'a ranger': function (town) {
//     var npc = setup.createNPC(town, {
//       dndClass: 'ranger',
//       background: 'outlander'
//     })
//     return 'a solitary <<profile `$npcs[' + JSON.stringify(npc.key) + ']` hunter>>'
//   },
//   'a small merchant caravan': function (town) {
//     var caravan = setup.misc.caravan.create(town)
//     return 'a small merchant caravan. ' + caravan.readout
//   },
//   'a diseased animal corpse': function () { return 'a diseased animal corpse' },
//   'a dead body': function () { return 'a dead body' },
//   'a group of dwarves': function () { return 'a group of dwarves' },
//   'a handful of farmers': function () { return 'a handful of farmers' },
//   'the border patrol': function () { return 'the border patrol' },
//   'a travelling peddler': function () { return 'a travelling peddler' },
//   'a hunting party': function () { return 'a hunting party' },
//   'another adventuring party': function () { return 'another adventuring party' },
//   'some escaped convicts': function () { return 'some escaped convicts' },
//   'some herdsmen': function () { return 'some herdsmen' },
//   'some particularly dense overgrowth': function () { return 'some particularly dense overgrowth' },
//   'some tribesmen': function () { return 'some tribesmen' },
//   'the undead': function () { return 'the undead' },
//   '[monster encounter]': function () { return '[monster encounter]' },
//   'a merchant caravan': function (town) {
//     var caravan = setup.misc.caravan.create(town)
//     return 'a merchant caravan. ' + caravan.readout
//   },
//   'some bandits': function (town) {
//     var bandits = setup.misc.bandits.create(town, { business: 'attacking people using the trail' })
//     return bandits.tippy + '<b>some bandits.</b></span>'
//   },
//   'a band of mercenaries': function (town) {
//     var mercenaries = setup.createMercenaries(town)
//     return 'a mercenary troop, armed to the teeth with ' + mercenaries.weapon + ', wearing ' + mercenaries.colours + ' livery over their ' + mercenaries.armour + ' with an insignia of ' + mercenaries.insignia + '. They are ' + mercenaries.attitude + ' towards their <<profile `$npcs[' + JSON.stringify(mercenaries.captain.key) + ']` commander>>, who is ' + mercenaries.commanderTrait + '. They specialise in ' + mercenaries.specializes + ', and are notorious for ' + mercenaries.notorious + '. They are famous for their ' + mercenaries.tactics + ', and are currently ' + mercenaries.currently + '.'
//   },
//   'a traveling peddler': function (town) {
//     var npc = setup.createNPC(town, {
//       hasClass: false,
//       background: 'urchin',
//       profession: 'merchant'
//     })
//     return 'a traveling <<profile `$npcs[' + JSON.stringify(npc.key) + ']` peddler>>'
//   },
//   'a solitary troubador': function (town) {
//     var npc = setup.createNPC(town, {
//       hasClass: false,
//       background: 'entertainer',
//       profession: 'troubador'
//     })
//     return 'a solitary <<profile `$npcs[' + JSON.stringify(npc.key) + ']` troubador>>'
//   },
//   'an adventurer on a horse': function (town) {
//     var npc = setup.createNPC(town, {
//       dndClass: ['fighter', 'fighter', 'paladin'].random(),
//       background: ['noble', 'soldier', 'soldier'].random()
//     })
//     return 'an <<profile `$npcs[' + JSON.stringify(npc.key) + ']` adventurer>> on a horse'
//   },
//   'a mounted messenger': function (town) {
//     var npc = setup.createNPC(town, {
//       hasClass: false,
//       profession: 'messenger'
//     })
//     return 'a mounted <<profile `$npcs[' + JSON.stringify(npc.key) + ']` messenger>>'
//   },
//   'a work gang heading home': function () { return 'a work gang heading home' },
//   'the road wardens': function () { return 'the road wardens' },
//   'some of the local militia': function () { return 'some of the local militia' },
//   'a pair of travelling clerics': function () { return 'a pair of travelling clerics' },
//   'some graverobbers': function () { return 'some graverobbers' },
//   'some farmers': function () { return 'some farmers' },
//   'a plague-infested cabin': function () { return 'a plague-infested cabin' },
//   'some beserkers': function () { return 'some beserkers' },
//   'a caravan of gypsies': function () { return 'a caravan of gypsies' },
//   'a knight errant': function (town) {
//     var npc = setup.createNPC(town, {
//       dndClass: 'paladin',
//       background: ['noble', 'soldier', 'soldier'].random()
//     })
//     return 'a <<profile `$npcs[' + JSON.stringify(npc.key) + ']` knight>> errant'
//   },
//   'a wounded knight': function (town) {
//     var npc = setup.createNPC(town, {
//       dndClass: ['fighter', 'fighter', 'paladin'].random(),
//       background: ['noble', 'soldier', 'soldier'].random()
//     })
//     return 'an injured <<profile `$npcs[' + JSON.stringify(npc.key) + ']` knight>>'
//   },
//   'a traveling lady': function (town) {
//     var npc = setup.createNPC(town, {
//       hasClass: false,
//       background: 'noble'
//     })
//     return 'a traveling <<profile `$npcs[' + JSON.stringify(npc.key) + ']` lady>>'
//   },
//   'a courier': function (town) {
//     var npc = setup.createNPC(town, {
//       hasClass: false,
//       profession: 'courier'
//     })
//     return 'a <<profile `$npcs[' + JSON.stringify(npc.key) + ']` courier>>'
//   },
//   'some robbers': function (town) {
//     var bandits = setup.misc.bandits.create(town, { business: 'attacking people using the trail' })
//     return bandits.tippy + '<b>some robbers.</b></span>'
//   },
//   'a marching army': function (town) {
//     var mercenaries = setup.createMercenaries(town)
//     return 'a small army, armed to the teeth with ' + mercenaries.weapon + ', wearing ' + mercenaries.colours + ' livery over their ' + mercenaries.armour + ' with an insignia of ' + mercenaries.insignia + '. They are ' + mercenaries.attitude + ' towards their <<profile `$npcs[' + JSON.stringify(mercenaries.captain.key) + ']` commander>>, who is ' + mercenaries.commanderTrait + '. They specialise in ' + mercenaries.specializes + ', and are notorious for ' + mercenaries.notorious + '. They are famous for their ' + mercenaries.tactics + ', and are currently ' + mercenaries.currently + '.'
//   },
//   'a wedding party': function () { return 'a wedding party' },
//   'a group of pilgrims': function () { return 'a group of pilgrims' },
//   'a funeral procession': function () { return 'a funeral procession' },
//   'a plague cart': function () { return 'a plague cart' },
//   'a lone horse, trotting the other way': function () { return 'a lone horse, trotting the other way' },
//   'a traveling theatre troupe': function () { return 'a traveling theatre troupe' },
//   'some beggars': function () { return 'some beggars' },
//   'a caravan of slavers': function () { return 'a caravan of slavers' },
//   'a lone zombie': function () { return 'a lone zombie' },
//   'a strange hermit': function (town) {
//     var npc = setup.createNPC(town, {
//       background: 'hermit'
//     })
//     return 'a strange <<profile `$npcs[' + JSON.stringify(npc.key) + ']` hermit>>'
//   },
//   'a lost traveler': function (town) {
//     var npc = setup.createNPC(town, {
//       background: 'outlander',
//       profession: 'traveler',
//       note: 'This person is very lost.'
//     })
//     return 'a lost <<profile `$npcs[' + JSON.stringify(npc.key) + ']` traveler>>'
//   },
//   'a poor nomad': function (town) {
//     var npc = setup.createNPC(town, {
//       hasClass: false,
//       background: 'commoner',
//       profession: 'nomad'
//     })
//     return 'a poor <<profile `$npcs[' + JSON.stringify(npc.key) + ']` nomad>>'
//   },
//   'a suspicious miner': function (town) {
//     var npc = setup.createNPC(town, {
//       hasClass: false,
//       profession: 'miner',
//       calmTrait: 'suspicious',
//       note: 'This person is hiding something.'
//     })
//     return 'a suspicious <<profile `$npcs[' + JSON.stringify(npc.key) + ']` miner>>'
//   },
//   'a barbarian hunter': function (town) {
//     var npc = setup.createNPC(town, {
//       dndClass: 'barbarian',
//       background: 'outlander',
//       profession: 'hunter'
//     })
//     return 'a barbarian <<profile `$npcs[' + JSON.stringify(npc.key) + ']` hunter>>'
//   },
//   'a mounted barbarian scout': function (town) {
//     var npc = setup.createNPC(town, {
//       dndClass: 'barbarian',
//       background: 'outlander',
//       profession: 'scout'
//     })
//     return 'a mounted barbarian <<profile `$npcs[' + JSON.stringify(npc.key) + ']` scout>>'
//   },
//   'the ghost of a traveler': function () {
//     var ghost = setup.misc.ghost.create()
//     return 'the ghost of a traveler. ' + ghost.readout
//   },
//   'a poisonous snake': function () { return 'a poisonous snake' },
//   'a giant spider': function () {
//     var spider = setup.misc.spider.create()
//     return 'a giant ' + spider.tippyWord
//   },
//   'a giant scorpion': function () { return 'a giant scorpion' },
//   'a giant centipede': function () { return 'a giant centipede' },
//   'a pack of jackals': function () { return 'a pack of jackals' },
//   'a hungry jackalwere': function () { return 'a hungry jackalwere' },
//   'a giant lizard': function () { return 'a giant lizard' },
//   'a pair of gnolls': function () { return 'a pair of gnolls' },
//   'a pair of bandits': function () { return 'a pair of bandits' },
//   'an hobgoblin scout': function () { return 'an hobgoblin scout' },
//   'a roc on the wing': function () { return 'a roc on the wing' },
//   'a wyvern on the wing': function () { return 'a wyvern on the wing' },
//   'lots of bats': function (town) { return 'lots of bats' },
//   'many spider webs': function (town) { return 'many spider webs' },
//   "a troll's stash.": function (town) { return "a troll's stash." },
//   "an ogre's lair": function () {
//     var ogre = setup.misc.ogre.create()
//     return 'a lair belonging to an ' + ogre.tippyWord
//   },
//   'some abandoned mining equipment': function (town) { return 'some abandoned mining equipment' },
//   'bare rock': function (town) { return 'bare rock' },
//   'a potable spring': function (town) { return 'a potable spring' },
//   'mummified remains': function (town) { return 'some mummified remains' },
//   'a band of dwarvish refugees': function (town) { return 'a band of dwarvish refugees' },
//   'a swarm of beetles': function (town) { return 'a swarm of beetles' },
//   'a half mad prophet': function (town) {
//     var npc = setup.createNPC(town, {
//       dndClass: 'sorcerer',
//       background: 'acolyte',
//       profession: 'prophet',
//       note: 'This prophet is as crazy as can be.'
//     })
//     return 'a half-mad <<profile `$npcs[' + JSON.stringify(npc.key) + ']` prophet>>'
//   },
//   'a reclusive sorcerer': function (town) {
//     var npc = setup.createNPC(town, {
//       dndClass: 'sorcerer',
//       background: 'acolyte',
//       calmTrait: 'withdrawn'
//     })
//     return 'a reclusive <<profile `$npcs[' + JSON.stringify(npc.key) + ']` sorcerer>>'
//   },
//   'a merchant of exotic goods': function (town) {
//     var npc = setup.createNPC(town, {
//       background: 'noble',
//       profession: 'merchant',
//       hasClass: false
//     })
//     return 'a strange <<profile `$npcs[' + JSON.stringify(npc.key) + ']` merchant>> of exotic goods'
//   },
//   'a misanthropic shapeshifter': function (town) {
//     var npc = setup.createNPC(town, {
//       background: 'hermit',
//       profession: 'hermit',
//       calmTrait: 'misanthropic',
//       stressTrait: 'murderous',
//       note: 'Hates everyone. Is a shapeshifter.',
//       hasClass: false
//     })
//     return 'a misanthropic <<profile `$npcs[' + JSON.stringify(npc.key) + ']` shapeshifter>>'
//   },
//   'an eccentric monk': function (town) {
//     var npc = setup.createNPC(town, {
//       background: 'hermit',
//       profession: 'hermit',
//       calmTrait: 'kinda weird',
//       hasClass: true,
//       dndClass: 'monk'
//     })
//     return 'an eccentric <<profile `$npcs[' + JSON.stringify(npc.key) + ']` monk>>'
//   },
//   'a nomadic herder': function (town) {
//     var npc = setup.createNPC(town, {
//       background: 'outlander',
//       profession: 'herder',
//       hasClass: false
//     })
//     return 'a nomadic <<profile `$npcs[' + JSON.stringify(npc.key) + ']` herder>>'
//   },
//   'a nomadic warrior': function (town) {
//     var npc = setup.createNPC(town, {
//       background: 'outlander',
//       profession: 'warrior',
//       dndClass: 'fighter'
//     })
//     return 'a nomadic <<profile `$npcs[' + JSON.stringify(npc.key) + ']` warrior>>'
//   },
//   'an outcast elf': function (town) {
//     var npc = setup.createNPC(town, {
//       background: 'outlander',
//       profession: 'hermit',
//       note: 'Is an outcast.',
//       hasClass: false,
//       race: 'elf'
//     })
//     return 'an outcast <<profile `$npcs[' + JSON.stringify(npc.key) + ']` elf>>'
//   },
//   'a reclusive scholar': function (town) {
//     var npc = setup.createNPC(town, {
//       hasClass: false,
//       background: 'hermit',
//       profession: 'scholar',
//       calmTrait: 'withdrawn'
//     })
//     return 'a reclusive <<profile `$npcs[' + JSON.stringify(npc.key) + ']` scholar>>'
//   },
//   'an eccentric healer': function (town) {
//     var npc = setup.createNPC(town, {
//       dndClass: 'cleric',
//       background: 'acolyte',
//       note: 'This healer is rather odd.'
//     })
//     return 'an eccentric <<profile `$npcs[' + JSON.stringify(npc.key) + ']` healer>>'
//   },
//   'a poor goatherder': function (town) {
//     var npc = setup.createNPC(town, {
//       hasClass: false,
//       background: 'hermit',
//       profession: 'goatherder',
//       note: 'This goatherder is very poor, but knows the area well.'
//     })
//     return 'a poor <<profile `$npcs[' + JSON.stringify(npc.key) + ']` goatherder>>'
//   },
//   'a mining prospector': function (town) {
//     var npc = setup.createNPC(town, {
//       hasClass: false,
//       background: 'commoner',
//       profession: 'prospector'
//     })
//     return 'a mining <<profile `$npcs[' + JSON.stringify(npc.key) + ']` prospector>>'
//   },
//   'a religious fanatic with his many wives': function (town) {
//     var npc = setup.createNPC(town, {
//       background: 'outlander',
//       profession: 'religious fanatic',
//       note: 'Has multiple wives.'
//     })
//     return 'a religious <<profile `$npcs[' + JSON.stringify(npc.key) + ']` fanatic>> with his many wives'
//   },
//   'poisonous snakes': function (town) { return 'poisonous snakes' },
//   'a pair of orcs': function (town) { return 'a pair of orcs' },
//   'a mad sorcerer': function (town) {
//     var npc = setup.createNPC(town, {
//       background: 'hermit',
//       dndClass: 'sorcerer',
//       calmTrait: 'paranoid',
//       stressTrait: 'murderous',
//       note: 'This person is totally mad.'
//     })
//     return 'a mad <<profile `$npcs[' + JSON.stringify(npc.key) + ']` sorcerer>>'
//   },
//   'a paranoid shapeshifter': function (town) {
//     var npc = setup.createNPC(town, {
//       background: 'hermit',
//       hasClass: false,
//       profession: 'hermit',
//       calmTrait: 'paranoid',
//       stressTrait: 'murderous',
//       note: 'This person is a paranoid shapeshifter.'
//     })
//     return 'a paranoid <<profile `$npcs[' + JSON.stringify(npc.key) + ']` shapeshifter>>'
//   },
//   'a restless ghost': function () {
//     var ghost = setup.misc.ghost.create()
//     return 'a restless ghost. ' + ghost.readout
//   },
//   'a dangerous fugitive': function (town) {
//     var npc = setup.createNPC(town, {
//       background: 'criminal',
//       profession: 'criminal',
//       dndClass: 'rogue',
//       calmTrait: 'paranoid',
//       stressTrait: 'murderous',
//       note: 'This person is a wanted criminal for high treason against the crown.'
//     })
//     return 'a dangerous <<profile `$npcs[' + JSON.stringify(npc.key) + ']` fugitive>>'
//   },
//   'spiders and rats': function () {
//     var spider = setup.misc.spider.create()
//     return spider.tippyWord + '<b>s</b>' + ' and rats'
//   },
//   'a treasure hunter': function (town) {
//     var npc = setup.createNPC(town, {
//       background: 'criminal',
//       profession: 'treasure hunter',
//       dndClass: 'rogue',
//       calmTrait: 'adventurous',
//       stressTrait: 'excited',
//       note: 'This person loves the thrill of a treasure hunt, and is about to go on a quest.'
//     })
//     return 'a <<profile `$npcs[' + JSON.stringify(npc.key) + ']` treasure-hunter>>'
//   },
//   'a wasteland druid': function (town) {
//     var npc = setup.createNPC(town, {
//       background: 'acolyte',
//       profession: 'druid',
//       dndClass: 'druid',
//       calmTrait: 'understanding'
//     })
//     return 'a wasteland <<profile `$npcs[' + JSON.stringify(npc.key) + ']` druid>>'
//   },
//   'cursed mummies': function (town) { return 'cursed mummies' },
//   'a hobgoblin warlord': function (town) { return 'a hobgoblin warlord' },
//   'an orcish war chief': function (town) { return 'an orcish war chief' },
//   'a tribe of kobolds': function (town) { return 'a tribe of kobolds' },
//   'a territorial griffon': function (town) { return 'a territorial griffon' },
//   'a pair of manticores': function (town) { return 'a pair of manticores' },
//   'slavering gnolls': function (town) { return 'slavering gnolls' },
//   'a dragon': function (town) { return 'a dragon' },
//   'a mountain lion’s den': function (town) { return 'a mountain lion’s den' },
//   'unidentifiable remains': function (town) { return 'some unidentifiable remains' },
//   'a hungry ettin': function (town) { return 'a hungry ettin' },
//   'a griffon’s nest': function (town) { return 'a griffon’s nest' },
//   'a manticore’s den': function (town) { return 'a manticore’s den' },
//   'a basilisk’s lair': function (town) { return 'a basilisk’s lair' },
//   'a wyvern’s nest': function (town) { return 'a wyvern’s nest' },
//   'a clan of stone giants': function (town) { return 'a clan of stone giants' },
//   'a sleeping dragon': function (town) { return 'a sleeping dragon' },
//   'a mad witch': function (town) {
//     var npc = setup.createNPC(town, {
//       gender: 'woman',
//       dndClass: 'sorcerer',
//       background: 'hermit',
//       profession: 'witch',
//       note: 'This witch is as mad as a cut snake.'
//     })
//     return 'a mad <<profile `$npcs[' + JSON.stringify(npc.key) + ']` witch>>'
//   },
//   'a reclusive shapeshifter': function (town) {
//     var npc = setup.createNPC(town, {
//       dndClass: 'sorcerer',
//       background: 'hermit',
//       profession: 'shapeshifter',
//       note: 'This person is a shapeshifter.'
//     })
//     return 'a reclusive <<profile `$npcs[' + JSON.stringify(npc.key) + ']` shapeshifter>>'
//   },
//   'restless ghosts': function () {
//     var ghost = setup.misc.ghost.create()
//     return 'a restless ghost. ' + ghost.readout
//   },
//   'an outcast orc': function (town) {
//     var npc = setup.createNPC(town, {
//       race: 'half-orc',
//       background: 'hermit',
//       note: 'This person is either an orc that was outcast, or a half orc..'
//     })
//     return 'a reclusive <<profile `$npcs[' + JSON.stringify(npc.key) + ']` shapeshifter>>'
//   },
//   'an owlbear': function (town) { return 'an owlbear' },
//   'a troll': function (town) { return 'a troll' },
//   'several harpies': function (town) { return 'several harpies' },
//   'a handful of dwarves': function (town) { return 'a handful of dwarves' },
//   'ghostly warriors': function (town) { return 'ghostly warriors' },
//   'a lost prospector': function (town) {
//     var npc = setup.createNPC(town, {
//       background: 'outlander',
//       hasClass: false,
//       profession: 'prospector',
//       note: 'This person is very lost.'
//     })
//     return 'a lost <<profile `$npcs[' + JSON.stringify(npc.key) + ']` prospector>>'
//   },
//   'a solemn warrior': function (town) {
//     var npc = setup.createNPC(town, {
//       background: 'soldier',
//       hasClass: true,
//       dndClass: 'fighter',
//       calmTrait: 'solemn',
//       stressTrait: 'determined'
//     })
//     return 'a solemn looking <<profile `$npcs[' + JSON.stringify(npc.key) + ']` warrior>>'
//   },
//   'a seasoned mountaineer': function (town) {
//     var npc = setup.createNPC(town, {
//       background: 'outlander',
//       hasClass: false,
//       profession: 'mountaineer',
//       note: 'Never gets lost.'
//     })
//     return 'a seasoned <<profile `$npcs[' + JSON.stringify(npc.key) + ']` mountaineer>>'
//   },
//
//   'an eccentric witch': function (town) {
//     var npc = setup.createNPC(town, {
//       gender: 'woman',
//       dndClass: 'sorcerer',
//       background: 'hermit',
//       profession: 'witch',
//       note: 'This witch is as crazy as a cut snake.'
//     })
//     return 'an eccentric <<profile `$npcs[' + JSON.stringify(npc.key) + ']` witch>>'
//   },
//   'a contemplative monk': function (town) {
//     var npc = setup.createNPC(town, {
//       dndClass: 'monk',
//       background: 'acolyte',
//       profession: 'monk',
//       calmTrait: 'contemplative',
//       stressTrait: 'determined'
//     })
//     return 'a contemplative <<profile `$npcs[' + JSON.stringify(npc.key) + ']` monk>>'
//   },
//   'a hunting peryton': function (town) { return 'a hunting peryton' },
//   'a mountain lion': function (town) { return 'a mountain lion' },
//   'a pair of harpies': function (town) { return 'a pair of harpies' },
//   'a flock of ravens': function (town) { return 'a flock of ravens' },
//   'several homeless dwarves': function (town) { return 'several homeless dwarves' },
//   'an angry wraith': function (town) { return 'an angry wraith' },
//   'a malevolent ghost': function () {
//     var ghost = setup.misc.ghost.create({ reaction: 'murderous and cruel' })
//     return 'a malevolent ghost. ' + ghost.readout
//   },
//   'a mated pair of manticores': function (town) { return 'a mated pair of manticores' },
//   'a trio of monstrous trolls': function (town) { return 'a trio of monstrous trolls' },
//   'a clan of stone giants at rest': function (town) { return 'a clan of stone giants at rest' },
//   'a roc tearing apart some prey': function (town) { return 'a roc tearing apart some prey' },
//   'a pair of outlaws': function (town) {
//     var npc = setup.createNPC(town, {
//       background: 'criminal'
//     })
//     var secondNpc = setup.createNPC(town, {
//       background: 'criminal'
//     })
//     return 'a pair of two outlaws; one ' + '<<profile `$npcs[' + JSON.stringify(npc.key) + ']` ' + JSON.stringify(npc.descriptor) + '>>, and a <<profile `$npcs[' + JSON.stringify(secondNpc.key) + ']` ' + JSON.stringify(secondNpc.descriptor) + '>>'
//   },
//   'a beggarly bandit': function (town) {
//     var npc = setup.createNPC(town, {
//       background: 'criminal',
//       dndClass: ['fighter', 'rogue', 'rogue'].random()
//     })
//     return 'a beggarly <<profile `$npcs[' + JSON.stringify(npc.key) + ']` bandit>>'
//   },
//   'an old witch': function (town) {
//     var npc = setup.createNPC(town, {
//       dndClass: 'sorcerer',
//       gender: 'woman',
//       background: 'acolyte',
//       ageStage: 'elderly'
//     })
//     return 'an old <<profile `$npcs[' + JSON.stringify(npc.key) + ']` witch>>'
//   },
//   'a curious herbalist': function (town) {
//     var npc = setup.createNPC(town, {
//       hasClass: false,
//       background: 'acolyte',
//       profession: 'herbalist'
//     })
//     return 'a curious <<profile `$npcs[' + JSON.stringify(npc.key) + ']` herbalist>>'
//   },
//   'a lost child': function (town) {
//     var npc = setup.createNPC(town, {
//       ageStage: 'child'
//     })
//     return 'a lost <<profile `$npcs[' + JSON.stringify(npc.key) + ']` child>>'
//   },
//   'a woodcutter busy with the day’s work': function (town) {
//     var npc = setup.createNPC(town, {
//       hasClass: false,
//       gender: 'man',
//       profession: 'woodcutter'
//     })
//     return 'a <<profile `$npcs[' + JSON.stringify(npc.key) + "]` woodcutter>>, busy with the day's work"
//   },
//   'an intrepid hunter': function (town) {
//     var npc = setup.createNPC(town, {
//       dndClass: 'ranger',
//       background: 'outlander'
//     })
//     return 'an intrepid <<profile `$npcs[' + JSON.stringify(npc.key) + ']` hunter>>'
//   },
//   'an elvish ranger': function (town) {
//     var npc = setup.createNPC(town, {
//       dndClass: 'ranger',
//       race: 'elf',
//       background: 'outlander'
//     })
//     return 'an elvish <<profile `$npcs[' + JSON.stringify(npc.key) + ']` ranger>>'
//   },
//   'a large bear': function () { return 'a large bear' },
//   'a bear cub': function () { return 'a bear cub' },
//   'a wailing ghost': function () {
//     var ghost = setup.misc.ghost.create()
//     return 'a wailing ghost. ' + ghost.readout
//   },
//   'a lonely old woman': function (town) {
//     var npc = setup.createNPC(town, {
//       gender: 'woman',
//       background: 'hermit',
//       ageStage: 'elderly',
//       calmTrait: 'quiet'
//     })
//     return 'a lonely old <<profile `$npcs[' + JSON.stringify(npc.key) + ']` woman>>'
//   },
//   'a beautiful witch': function (town) {
//     var npc = setup.createNPC(town, {
//       dndClass: 'sorcerer',
//       gender: 'woman',
//       background: 'acolyte',
//       note: 'This witch is very beautiful.'
//     })
//     return 'a beautiful <<profile `$npcs[' + JSON.stringify(npc.key) + ']` witch>>'
//   },
//   'a horrible witch': function (town) {
//     var npc = setup.createNPC(town, {
//       dndClass: 'sorcerer',
//       gender: 'woman',
//       background: 'acolyte',
//       calmTrait: 'mean',
//       stressTrait: 'cruel'
//     })
//     return 'a horrible <<profile `$npcs[' + JSON.stringify(npc.key) + ']` witch>>'
//   },
//   'an outcast dwarf': function (town) {
//     var npc = setup.createNPC(town, {
//       race: 'dwarf',
//       background: 'hermit',
//       hasClass: false,
//       calmTrait: 'quiet'
//     })
//     return 'an outcast <<profile `$npcs[' + JSON.stringify(npc.key) + ']` dwarf>>'
//   },
//   'a dwarf prospector': function (town) {
//     var npc = setup.createNPC(town, {
//       hasClass: false,
//       race: 'dwarf',
//       background: 'commoner',
//       profession: 'prospector'
//     })
//     return 'a mining <<profile `$npcs[' + JSON.stringify(npc.key) + ']` prospector>>'
//   },
//   'a wood elf druid': function (town) {
//     var npc = setup.createNPC(town, {
//       dndClass: 'druid',
//       background: 'outlander',
//       race: 'elf'
//     })
//     return 'a wood elf <<profile `$npcs[' + JSON.stringify(npc.key) + ']` druid>>'
//   },
//   'giant spiders': function () {
//     var spider = setup.misc.spider.create()
//     return 'giant ' + spider.tippyWord + '<b>s</b><<run setup.tippy("span")>>'
//   },
//   'hungry zombies': function () { return 'hungry zombies' },
//   'some irritable trolls': function () { return 'some irritable trolls' }
// }
