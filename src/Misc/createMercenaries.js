// uses setup.createNPC
setup.createMercenaries = function (town) {
  const mercenaries = {
    colours: [
      'black',
      'red',
      'scarlet',
      'gold',
      'forest green',
      'royal blue',
      'brown',
      'dark grey',
      'gunmetal',
      'maroon',
      'navy blue',
      'dark brown',
      'steel',
      'light blue',
      'magenta',
      'dark green',
      'olive green'].random(),
    insignia: [
      'a skull',
      'a ghost',
      'a clenched fist',
      'a flame',
      'an arrow',
      'a dagger',
      'a sword',
      'a hammer',
      'the sun',
      'the moon',
      'a star',
      'a flame',
      'a bat',
      'a bull',
      'a dragon',
      'a falcon',
      'a lion',
      'a raven',
      'a scorpion',
      'a viper',
      'a python',
      'a rattlesnake',
      'a cobra',
      'a panther',
      'a bobcat',
      'a tiger',
      'an elephant',
      'a vulture',
      'a wolf',
      'a bear',
      'a mace',
      'a bow',
      'a pike',
      'a flexed arm',
      'a shield',
      'an emerald',
      'a sapphire',
      'an opal',
      'a diamond',
      'a gold bar',
      'an axe',
      'a potion bottle'
    ].random(),
    commanderTrait: [
      'a brazen outlaw',
      'a charismatic demagogue',
      'a mysterious foreigner',
      'an outcast from a prominent family',
      'a ruthless killer',
      'a dashing swashbuckler',
      'a brutish thug',
      'a celebrated war hero',
      'a disgraced knight',
      'a former arena champion',
      'an ex-gladiator',
      'an escaped slave'
    ].random(),
    attitude: [
      'friendly and loyal',
      'respectful and business-like',
      'cautious and uncertain',
      'terrified and tight-lipped',
      'disappointed and rude',
      'angry and rebellious'].random(),
    currently: [
      'gainfully employed as guards',
      'gainfully employed in war',
      'under contract with some criminals',
      'under contract with some merchants',
      'under contract with some nobles',
      'looking for work'].random(),
    specializes: [
      'siege-breaking',
      'holding a redoubt or fort',
      'frontal assault',
      'infiltration tactics',
      'skirmishes',
      'laying ambushes',
      'patrolling',
      'flanking maneuvers',
      'guerilla tactics',
      'raiding and pillaging'].random(),
    notorious: [
      'taking no prisoners',
      'leaving the dead to be eaten by beasts',
      'tattooing or branding prisoners',
      'scalping or flaying prisoners',
      'burning villages and fields',
      'betraying their employers',
      'singing bawdy songs',
      'drinking too much ale and wine'].random(),
    tactics: [
      'hit-and-run tactics',
      'direct assaults on the enemy',
      'fancy footwork',
      'unpredictable lurches',
      'masterful combat maneuvers',
      'complete lack of mercy',
      'taunting and jeering the enemy',
      'dirty tactics'].random(),
    armour: [
      'exotic robes',
      'leather armor',
      'studded leather armor',
      'hide armor',
      'ringmail',
      'chainmail',
      'scale armor',
      'plate armor'].random(),
    weapon: [
      'longswords',
      'longswords and shields',
      'shortswords and spears',
      'shortswords and shields',
      'longswords and crossbows',
      'greatswords',
      'spears and shields',
      'battleaxes',
      'battleaxes and shields',
      'warhammers',
      'scimitars',
      'scimitars and a shields'].random()
  }

  mercenaries.captain = createMercenaryCaptain(mercenaries.commanderTrait, town)

  mercenaries.name = [
    `The ${lib.factionData.mercenaries.names.group.random()} of ${lib.factionData.mercenaries.names.adjective.random()} ${lib.factionData.mercenaries.names.main.random()}`,
    `The ${lib.factionData.mercenaries.names.group.random()} of ${lib.factionData.mercenaries.names.main.random()}`,
    `The ${lib.factionData.mercenaries.names.adjective.random()} ${lib.factionData.mercenaries.names.group.random()}`,
    `The ${lib.factionData.mercenaries.names.main.random()} of ${State.variables.town.name}`,
    `The ${State.variables.town.name} ${lib.factionData.mercenaries.names.main.random()}`,
    lib.factionData.mercenaries.names.unique.random()
  ].random()

  mercenaries.readout = `A group of mercenaries sit in the corner of the room, armed to the teeth with ${mercenaries.weapon}, wearing ${mercenaries.colours} livery over their ${mercenaries.armour} with an insignia of ${mercenaries.insignia}. They are ${mercenaries.attitude} towards their commander ${setup.profile(mercenaries.captain)}, who is ${mercenaries.commanderTrait}. They specialise in ${mercenaries.specializes}, and are notorious for ${mercenaries.notorious}. They are famous for their ${mercenaries.tactics}, and are currently ${mercenaries.currently}.`
  mercenaries.tippyWord = lib.createTippyFull(mercenaries.readout, 'mercenaries')
  return mercenaries
}

/**
 * @param {string} trait
 * @param {Town} town
 * @returns {NPC}
 */
function createMercenaryCaptain (trait, town) {
  const { createNPC } = setup

  switch (trait) {
    case 'a brazen outlaw':
      return createNPC(town, {
        background: 'criminal'
      })
    case 'a charismatic demagogue':
      return createNPC(town, {
        background: 'charlatan',
        calmTrait: 'charismatic',
        stressTrait: 'manipulative'
      })
    case 'a mysterious foreigner':
      return createNPC(town, {
        background: 'outlander'
      })
    case 'an outcast from a prominent family':
      return createNPC(town, {
        background: 'noble'
      })
    case 'a ruthless killer':
      return createNPC(town, {
        background: 'criminal'
      })
    case 'a dashing swashbuckler':
      return createNPC(town, {
        background: 'sailor',
        profession: 'fighter'
      })
    case 'a brutish thug':
      return createNPC(town, {
        background: 'criminal',
        profession: 'fighter'
      })
    case 'a celebrated war hero':
      return createNPC(town, {
        background: 'soldier',
        profession: 'fighter'
      })
    case 'a disgraced knight':
      return createNPC(town, {
        background: 'criminal',
        profession: 'paladin'
      })
    case 'a former arena champion':
      return createNPC(town, {
        background: 'gladiator',
        profession: 'fighter'
      })
    case 'an ex-gladiator':
      return createNPC(town, {
        background: 'gladiator',
        profession: 'fighter'
      })
    case 'an escaped slave':
      return createNPC(town, {
        background: 'criminal'
      })
    default:
      return createNPC(town, {
        background: 'soldier',
        profession: 'fighter'
      })
  }
}
