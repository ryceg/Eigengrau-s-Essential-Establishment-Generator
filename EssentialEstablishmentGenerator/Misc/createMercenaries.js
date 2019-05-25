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
      'olive green'].seededrandom(),
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
    ].seededrandom(),
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
    ].seededrandom(),
    attitude: [
      'friendly and loyal',
      'respectful and business-like',
      'cautious and uncertain',
      'terrified and tight-lipped',
      'disappointed and rude',
      'angry and rebellious'].seededrandom(),
    currently: [
      'gainfully employed as guards',
      'gainfully employed in war',
      'under contract with some criminals',
      'under contract with some merchants',
      'under contract with some nobles',
      'looking for work'].seededrandom(),
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
      'raiding and pillaging'].seededrandom(),
    notorious: [
      'taking no prisoners',
      'leaving the dead to be eaten by beasts',
      'tattooing or branding prisoners',
      'scalping or flaying prisoners',
      'burning villages and fields',
      'betraying their employers',
      'singing bawdy songs',
      'drinking too much ale and wine'].seededrandom(),
    tactics: [
      'hit-and-run tactics',
      'direct assaults on the enemy',
      'fancy footwork',
      'unpredictable lurches',
      'masterful combat maneuvers',
      'complete lack of mercy',
      'taunting and jeering the enemy',
      'dirty tactics'].seededrandom(),
    armour: [
      'exotic robes',
      'leather armor',
      'studded leather armor',
      'hide armor',
      'ringmail',
      'chainmail',
      'scale armor',
      'plate armor'].seededrandom(),
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
      'scimitars and a shields'].seededrandom()
  }

  switch (mercenaries.commanderTrait) {
    case 'a brazen outlaw':
      mercenaries.captain = setup.createNPC(town, {
        background: 'criminal'
      })
      break
    case 'a charismatic demagogue':
      mercenaries.captain = setup.createNPC(town, {
        background: 'charlatan',
        calmTrait: 'charismatic',
        stressTrait: 'manipulative'
      })
      break
    case 'a mysterious foreigner':
      mercenaries.captain = setup.createNPC(town, {
        background: 'outlander'
      })
      break
    case 'an outcast from a prominent family':
      mercenaries.captain = setup.createNPC(town, {
        background: 'noble'
      })
      break
    case 'a ruthless killer':
      mercenaries.captain = setup.createNPC(town, {
        background: 'criminal'
      })
      break
    case 'a dashing swashbuckler':
      mercenaries.captain = setup.createNPC(town, {
        background: 'sailor',
        dndClass: 'fighter'
      })
      break
    case 'a brutish thug':
      mercenaries.captain = setup.createNPC(town, {
        background: 'criminal',
        dndClass: 'fighter'
      })
      break
    case 'a celebrated war hero':
      mercenaries.captain = setup.createNPC(town, {
        background: 'soldier',
        dndClass: 'fighter'
      })
      break
    case 'a disgraced knight':
      mercenaries.captain = setup.createNPC(town, {
        background: 'criminal',
        dndClass: 'paladin'
      })
      break
    case 'a former arena champion':
      mercenaries.captain = setup.createNPC(town, {
        background: 'gladiator',
        dndClass: 'fighter'
      })
      break
    case 'an ex-gladiator':
      mercenaries.captain = setup.createNPC(town, {
        background: 'gladiator',
        dndClass: 'fighter'
      })
      break
    case 'an escaped slave':
      mercenaries.captain = setup.createNPC(town, {
        background: 'criminal'
      })
      break
    default:
      mercenaries.captain = setup.createNPC(town, {
        background: 'soldier',
        dndClass: 'fighter'
      })
  }

  const mercenariesCaptain = mercenaries.captain
  mercenaries.name = [
    'The ' + setup.factionData.type['mercenaries'].group.seededrandom() + ' of ' + setup.factionData.type['mercenaries'].adjective.seededrandom() + ' ' + setup.factionData.type['mercenaries'].main.seededrandom(),
    'The ' + setup.factionData.type['mercenaries'].group.seededrandom() + ' of ' + setup.factionData.type['mercenaries'].main.seededrandom(),
    'The ' + setup.factionData.type['mercenaries'].adjective.seededrandom() + ' ' + setup.factionData.type['mercenaries'].group.seededrandom(),
    'The ' + setup.factionData.type['mercenaries'].main.seededrandom() + ' of ' + State.variables.town.name,
    'The ' + State.variables.town.name + ' ' + setup.factionData.type['mercenaries'].main.seededrandom(),
    setup.factionData.type['mercenaries'].unique.seededrandom()
  ].seededrandom()

  mercenaries.readout = 'A group of mercenaries sit in the corner of the room, armed to the teeth with ' + mercenaries.weapon + ', wearing ' + mercenaries.colours + ' livery over their ' + mercenaries.armour + ' with an insignia of ' + mercenaries.insignia + '. They are ' + mercenaries.attitude + ' towards their commander ' + mercenariesCaptain.name + ', who is ' + mercenaries.commanderTrait + '. They specialise in ' + mercenaries.specializes + ', and are notorious for ' + mercenaries.notorious + '. They are famous for their ' + mercenaries.tactics + ', and are currently ' + mercenaries.currently + '.'
  mercenaries.tippyWord = '<span class=tip title=' + JSON.stringify(mercenaries.readout) + '> <b>mercenaries</b></span><<run setup.tippy("span")>>'
  return mercenaries
}
