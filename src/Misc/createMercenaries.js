// uses setup.createNPC
setup.createMercenaries = function (town) {
  const mercenariesData = {
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
      'olive green'],
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
    ],
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
    ],
    commander: {
      'a brazen outlaw': {
        background: 'criminal'
      },
      'a charismatic demagogue': {
        background: 'charlatan',
        calmTrait: 'charismatic',
        stressTrait: 'manipulative'
      },
      'a mysterious foreigner': {
        background: 'outlander'
      },
      'an outcast from a prominent family': {
        background: 'noble'
      },
      'a ruthless killer': {
        background: 'criminal'
      },
      'a dashing swashbuckler': {
        background: 'sailor',
        profession: 'fighter'
      },
      'a brutish thug': {
        background: 'criminal',
        profession: 'fighter'
      },
      'a celebrated war hero': {
        background: 'soldier',
        profession: 'fighter'
      },
      'a disgraced knight': {
        background: 'criminal',
        profession: 'paladin'
      },
      'a former arena champion': {
        background: 'gladiator',
        profession: 'fighter'
      },
      'an ex-gladiator': {
        background: 'gladiator',
        profession: 'fighter'
      },
      'an escaped slave': {
        background: 'criminal'
      }
    },
    attitude: [
      'friendly and loyal',
      'respectful and business-like',
      'cautious and uncertain',
      'terrified and tight-lipped',
      'disappointed and rude',
      'angry and rebellious'],
    currently: [
      'gainfully employed as guards',
      'gainfully employed in war',
      'under contract with some criminals',
      'under contract with some merchants',
      'under contract with some nobles',
      'looking for work'],
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
      'raiding and pillaging'],
    notorious: [
      'taking no prisoners',
      'leaving the dead to be eaten by beasts',
      'tattooing or branding prisoners',
      'scalping or flaying prisoners',
      'burning villages and fields',
      'betraying their employers',
      'singing bawdy songs',
      'drinking too much ale and wine'],
    tactics: [
      'hit-and-run tactics',
      'direct assaults on the enemy',
      'fancy footwork',
      'unpredictable lurches',
      'masterful combat maneuvers',
      'complete lack of mercy',
      'taunting and jeering the enemy',
      'dirty tactics'],
    armour: [
      'exotic robes',
      'leather armor',
      'studded leather armor',
      'hide armor',
      'ringmail',
      'chainmail',
      'scale armor',
      'plate armor'],
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
      'scimitars and shields']
  }
  const mercenaries = {
    colours: mercenariesData.colours.random(),
    insignia: mercenariesData.insignia.random(),
    commanderTrait: Object.keys(mercenariesData.commander).random(),
    attitude: mercenariesData.attitude.random(),
    currently: mercenariesData.currently.random(),
    specializes: mercenariesData.specializes.random(),
    notorious: mercenariesData.notorious.random(),
    tactics: mercenariesData.tactics.random(),
    armour: mercenariesData.armour.random(),
    weapon: mercenariesData.weapon.random()
  }

  mercenaries.name = [
    `The ${lib.factionData.types.mercenaries.names.group.random()} of ${lib.factionData.types.mercenaries.names.adjective.random()} ${lib.factionData.types.mercenaries.names.main.random()}`,
    `The ${lib.factionData.types.mercenaries.names.group.random()} of ${lib.factionData.types.mercenaries.names.main.random()}`,
    `The ${lib.factionData.types.mercenaries.names.adjective.random()} ${lib.factionData.types.mercenaries.names.group.random()}`,
    `The ${lib.factionData.types.mercenaries.names.main.random()} of ${State.variables.town.name}`,
    `The ${State.variables.town.name} ${lib.factionData.types.mercenaries.names.main.random()}`,
    lib.factionData.types.mercenaries.names.unique.random()
  ].random()

  mercenaries.readout = `A group of mercenaries sit in the corner of the room, armed to the teeth with ${mercenaries.weapon}, wearing ${mercenaries.colours} livery over their ${mercenaries.armour} with an insignia of ${mercenaries.insignia}; they are ${mercenaries.name}, a company that is famous for their ${mercenaries.tactics}. They are ${mercenaries.attitude} towards their commander, who is ${mercenaries.commanderTrait}. They specialise in ${mercenaries.specializes}, and are notorious for ${mercenaries.notorious}. They are currently ${mercenaries.currently}.`
  mercenaries.tippyWord = lib.createTippyFull(mercenaries.readout, 'mercenaries')
  return mercenaries
}
