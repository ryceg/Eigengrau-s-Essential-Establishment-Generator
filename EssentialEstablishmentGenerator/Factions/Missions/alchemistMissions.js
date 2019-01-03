/* global setup */
setup.alchemistMission = function (town) {
  var missions = {
    'disappearing potions': function (town) {
      var npc = setup.createNPC(town, { dndClass: 'rogue', background: 'criminal' })
      return 'I have had some issues with potions disappearing, and suspect that somebody is stealing from me. Would you be able to catch the thief?' + '<blockquote>The thief is <<profile `$npcs[' + JSON.stringify(npc.key) + ']`>></blockquote>'
    },
    'testSubject': function () {
      var missionPotion = setup.createAlchemy({ type: 'potion' })
      return "I'm in need of a test subject for a new potion that I've been brewing; I'm not quite sure what the effects will be. Would you be interested in trying this?" + "<div class='descriptive'>" + '<h4>' + missionPotion.titleReadout + '</h4>' + missionPotion.descriptionReadout + '</div>' + '<blockquote>' + missionPotion.effectReadout + '</blockquote>'
    },
    'bandits': function (town) {
      var npc = setup.createNPC(town, { dndClass: ['rogue', 'fighter'].random(), background: 'criminal' })
      var missionIngredient = setup.createAlchemy({ type: 'preserved herb' })
      return 'I had a shipment of ' + missionIngredient.herb + ", but it was attacked by bandits. They probably don't know what they got; they're hiding in the hills. Would you retrieve it for me?" + '<blockquote>The bandit captain responsible is <<profile `$npcs[' + JSON.stringify(npc.key) + ']`>></blockquote>'
    },
    'collectHerbs': function () {
      var missionIngredient = setup.createAlchemy({ type: 'preserved herb' })
      return 'I am in need of some capable adventurers to go and collect some ' + missionIngredient.herb + '. Are you up to the task?'
    },
    'disappearingShipment': function (town) {
      var missionIngredient = setup.createAlchemy({ type: 'preserved herb' })
      return 'I had a shipment of ' + missionIngredient.herb + ', but it never arrived... I suspect that something happened to it.'
    },
    'bodyParts': function (town) {
      var missionBodyPart = setup.createAlchemy({ type: 'body part' })
      return 'This may be somewhat unsavoury, but I need the ' + missionBodyPart.bodyPart + ' from a ' + missionBodyPart.bodyPartOrigin + '. Can you find me one?'
    },
    'badIngredients': function (town) {
      var missionIngredient = setup.createAlchemy({ type: 'preserved herb' })
      var npc = setup.createNPC(town, { hasClass: false, profession: 'alchemist' })
      return 'I received a shipment of ' + missionIngredient.herb + ', but it was completely unusable- my friend <<profile `$npcs[' + JSON.stringify(npc.key) + ']`>> would never send me bad goods, so I suspect that something is amiss!'
    }
  }
  var keys = Object.keys(missions)
  return missions[keys[keys.length * Math.random() << 0]](town)
}
