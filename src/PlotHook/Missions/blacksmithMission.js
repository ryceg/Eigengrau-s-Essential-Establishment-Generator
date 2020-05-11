const missionsSmithy = {
  disappearingIngots (town) {
    const npc = setup.createNPC(town, { dndClass: 'rogue', background: 'criminal' })
    return 'I have had some issues with different types of ingots disappearing, and suspect that somebody is stealing from me. Would you be able to catch the thief?' + '<blockquote>The thief is <<profile `$npcs[' + JSON.stringify(npc.key) + ']`>></blockquote>'
  },
  testSubject () {
    return "I'm in need of someone to test out this new <<print $smithy.weapons.seededrandom()>> in a duel against me. Would you be interested in trying this? I would compensate you for the trouble of course."
  },
  bandits (town) {
    const npc = setup.createNPC(town, { dndClass: ['rogue', 'fighter'].seededrandom(), background: 'criminal' })
    return 'I had a shipment of ' + ['brass ingots', 'iron ingots', 'steel ingots', 'bronze ingots', 'dwarven steel', 'new anvils', 'silver ingots', 'gold ingots'].seededrandom() + " being delivered here, but it was attacked by bandits. They'll probably try to sell it to some shady merchant; they're hiding in the hills. Would you retrieve the shipment for me?" + '<blockquote>The bandit captain responsible is <<profile `$npcs[' + JSON.stringify(npc.key) + ']`>></blockquote>'
  },
  collectRareThing () {
    return 'I am in need of some capable adventurers to go and collect some ' + ['rare jewelstones', 'chunks of an ancient mineral', 'old weapons forged by a long forgotten smith'].seededrandom() + ". You'll find it in " + ['a winding cavern near town', 'the bottom of a mineshaft that was abandonded years ago', 'an alegedly haunted forest full of small caves', 'the mountain home of an ancient beast', 'a cavern at the top of the highest peak in the region'].seededrandom() + '. Are you up to the task?'
  },
  disappearingShipment () {
    return 'I had a shipment of <<print $smithy.weapons.seededrandom()>>s coming, but it never arrived... I suspect that something happened to it. Would you be interested in looking into it?'
  },
  badWeapons (town) {
    const npc = setup.createNPC(town, { hasClass: false, profession: 'blacksmith' })
    return 'I received a shipment of <<print $smithy.weapons.seededrandom()>>s, but they were completely unusable- my friend <<profile `$npcs[' + JSON.stringify(npc.key) + ']`>> would never send me bad goods, so I suspect that something is amiss!'
  },
  deliverWeapons (town) {
    const npc = setup.createNPC(town, { hasClass: false, profession: 'noble' })
    return 'I recently forged a <<print $smithy.weapons.seededrandom()>> for a local ' + setup.profile(npc, 'noble') + ", but I don't have time to bring it to " + npc.himher + '. Would you be willing to take it to ' + npc.himher + ' for me? I would pay you for your troubles of course.'
  }
}

setup.blacksmithMission = function (town) {
  return missionsSmithy[Object.keys(missionsSmithy).seededrandom()](town)
}
