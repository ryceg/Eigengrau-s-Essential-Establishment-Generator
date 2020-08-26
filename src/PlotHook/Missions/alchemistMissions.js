const missions = {
  disappearingPotions (town) {
    const npc = setup.createNPC(town, { profession: 'rogue', background: 'criminal' })
    return `${'I have had some issues with potions disappearing, and suspect that somebody is stealing from me. Would you be able to catch the thief?' + '<blockquote>The thief is <<profile `$npcs['}${JSON.stringify(npc.key)}]\`>></blockquote>`
  },
  testSubject () {
    const missionPotion = lib.createAlchemy({ type: 'potion' })
    return `${"I'm in need of a test subject for a new potion that I've been brewing; I'm not quite sure what the effects will be. Would you be interested in trying this?" + "<div class='descriptive'>" + '<h4>'}${missionPotion.titleReadout}</h4>${missionPotion.descriptionReadout}</div>` + `<blockquote>${missionPotion.effectReadout}</blockquote>`
  },
  bandits (town) {
    const npc = setup.createNPC(town, { profession: ['rogue', 'fighter'].random(), background: 'criminal' })
    const missionIngredient = lib.createAlchemy({ type: 'preserved herb' })
    return `I had a shipment of ${missionIngredient.herb}, but it was attacked by bandits. They probably don't know what they got; they're hiding in the hills. Would you retrieve it for me?` + `<blockquote>The bandit captain responsible is <<profile \`$npcs[${JSON.stringify(npc.key)}]\`>></blockquote>`
  },
  collectHerb () {
    const missionIngredient = lib.createAlchemy({ type: 'preserved herb' })
    return `I am in need of some capable adventurers to go and collect some ${missionIngredient.herb}. Are you up to the task?`
  },
  disappearingShipment () {
    const missionIngredient = lib.createAlchemy({ type: 'preserved herb' })
    return `I had a shipment of ${missionIngredient.herb}, but it never arrived... I suspect that something happened to it.`
  },
  bodyParts () {
    const missionBodyPart = lib.createAlchemy({ type: 'body part' })
    return `This may be somewhat unsavoury, but I need the ${missionBodyPart.bodyPart} from ${lib.articles.output(missionBodyPart.bodyPartOrigin)}. Can you find me one?`
  },
  badIngredients (town) {
    const missionIngredient = lib.createAlchemy({ type: 'preserved herb' })
    const npc = setup.createNPC(town, { hasClass: false, profession: 'alchemist' })
    return `I received a shipment of ${missionIngredient.herb}, but it was completely unusable- my friend <<profile \`$npcs[${JSON.stringify(npc.key)}]\`>> would never send me bad goods, so I suspect that something is amiss!`
  }
}

setup.alchemistMission = function (town) {
  return missions[Object.keys(missions).random()](town)
}
