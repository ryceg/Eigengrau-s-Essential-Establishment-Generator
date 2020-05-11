//
// setup.createRumours = function (town) {
//   var rumours = {
//     'hedge': function (town) {
//       var npc = setup.createNPC(town, { race: 'elf', vocalPattern: 'speaks in cryptic riddles' })
//       return 'The hedge maze in front of the manor has been maintained for decades by a <<profile `$npcs[' + JSON.stringify(npc.key) + ']` strange elf>> who speaks in cryptic riddles. Recently, a visiting noble from a nearby kingdom went into the maze and never came out. Everyone who has gone in looking for him has met the same fate...'
//     },
//     'scupltor': function (town) {
//       var npc = setup.createNPC(town, { profession: 'sculptor', dndClass: 'warlock' })
//       return 'A talented <<profile `$npcs[' + JSON.stringify(npc.key) + ']` sculptor>> recently did a sculpture for <<profile `$npcs[' + JSON.stringify(town.leader.key) + ']` the leader>> of $town.name and ever since, ' + town.leader.heshe + ' has not been ' + town.leader.himherself + '- before ' + town.leader.heshe + ' remembered all ' + town.leader.hisher + ' servants names, and now ' + town.leader.heshe + ' merely bark orders... We fear that something happened to ' + town.leader.himher + '.'
//     },
//     'tinkerer': function (town) {
//       var npc = setup.createNPC(town, { profession: 'tinkerer', dndClass: 'wizard', race: 'gnome', gender: 'man' })
//       return 'A local tinkerer named <<profile `$npcs[' + JSON.stringify(npc.key) + ']`>> has recently gone missing. The locals know him as an honest tradesman; however he was also something of a recluse, whose tinkerings sometimes bordered on the immoral.'
//     },
//     'doppelganger': function (town) {
//
//     },
//     'bandits': function (town) {
//       return 'There was talk of a group of bandits that had taken up terrorizing the road to the north of $town.name, but I went through there just last week, and there was nought a sound the entire journey.'
//     }
//   }
//   return rumours
// }
