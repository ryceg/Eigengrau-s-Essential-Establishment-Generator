setup.alchemistMission = function (town, mission) {
  var missionPotion = setup.createAlchemy({ type: 'potion' })
  var missionIngredient = setup.createAlchemy({ type: 'preserved herb' })
  var missionBodyPart = setup.createAlchemy({ type: 'body part' })
  var alchemistMissionNPC = setup.createNPC(town, { isShallow: true, hasClass: false, profession: 'alchemist' })
  switch (mission.difficulty) {
    case 'easy':
      Object.assign(mission, {
        readout: ['I have had some issues with potions disappearing, and suspect that somebody is stealing from me. Would you be able to catch the thief?',
          "I'm in need of a test subject for a new potion that I've been brewing; I'm not quite sure what the effects will be. Would you be interested in trying this?" + "<div class='descriptive'>" + '<h4>' + missionPotion.titleReadout + '</h4>' + missionPotion.descriptionReadout + '</div>' + '<blockquote>' + missionPotion.effectReadout + '</blockquote>',
          'I had a shipment of ' + missionIngredient.herb + ", but it was attacked by bandits. They probably don't know what they got; they're hiding in the hills. Would you retrieve it for me?"
        ].random()
      })
      break
    case 'medium':
      Object.assign(mission, {
        readout: ['I have had some issues with potions disappearing, and suspect that somebody is stealing from me. Would you be able to catch the thief?',
          'I am in need of some capable adventurers to go and collect some ' + missionIngredient.herb + '. Are you up to the task?',
          'I ordered a cartment of ' + missionIngredient.herb + ', but it never arrived... I suspect that something happened to it.',
          'This may be somewhat unsavoury, but I need the ' + missionBodyPart.bodyPart + ' from a ' + missionBodyPart.bodyPartOrigin + '. Can you find me one?'
        ].random()
      })
      break
    case 'hard':
      Object.assign(mission, {
        readout: ['I have had some issues with potions disappearing, and suspect that somebody is stealing from me. Would you be able to catch the thief?',
          'I am in need of some capable adventurers to go and collect some ' + missionIngredient.herb + '. Are you up to the task?',
          'I had a shipment of ' + missionIngredient.herb + ", but it was attacked by bandits. They probably don't know what they got; they're hiding in the hills. Would you retrieve it for me?",
          'I received a shipment of ' + missionIngredient.herb + ', but it was completely unusable- my friend ' + '<<profile ' + alchemistMissionNPC + '>> would never send me bad goods, so I suspect that something is amiss!'
        ].random()
      })
      break
  }

  return mission
}
