
setup.thievesMission = function (town, mission) {
  mission.type = ['alchemy', 'assassination', 'blackmail', 'burglary', 'swindle', 'fence', 'fraud', 'gambling', 'kidnapping', 'narcotics', 'prostitution', 'protection', 'slavery', 'smuggling', 'street'].random()

  const details = missionDetails(mission)

  if (details) {
    mission.details = details.random()
  }

  mission.difficultyText = missionDifficulty(mission)

  const openingLine = [
    `${[
      "I've got a job for you.",
      'Got a job for you to do.',
      "There's a job I need you to do.",
      "There's something I need you to do."
    ].random()} ${mission.difficultyText} ${["This one's a ", "It's a ", 'This is a '].random()}${mission.type} job.`,
    `${[
      `I've got ${lib.articles.output(mission.type)} job for you.`,
      `Got ${lib.articles.output(mission.type)} job for you to do.`,
      `There's ${lib.articles.output(mission.type)} job I need you to do.`,
      `There's ${lib.articles.output(mission.type)} job I need you to do.`
    ].random()} ${mission.difficultyText}`
  ].random()

  const closingLine = ['fuck it up.', 'let me down.', 'disappoint me.'].random()

  mission.readout = `${openingLine} I need you to ${mission.details} Don't ${closingLine}`

  return mission
}

function missionDifficulty (mission) {
  switch (mission.difficulty) {
    case 'easy':
      return [
        'Should be pretty easy.',
        "It'll be a piece of cake.",
        "Shouldn't be any trouble for you.",
        'Should be no trouble for you.',
        'Should be easy enough.'
      ].random()
    case 'hard':
      return [
        "It'll be a bit of a challenge.",
        'Should be reasonably difficult.',
        'It should be entertaining enough for you.',
        'It might be a tad tricky.'
      ].random()
  }
  return ''
}

/**
 * @returns {string[]}
 */
function missionDetails (mission) {
  switch (mission.type) {
    case 'alchemy': return alchemyMissionDetails(mission)
    case 'assassination': return assassinationMissionDetails(mission)
    case 'blackmail': return blackmailMissionDetails(mission)
    case 'burglary': return burglaryMissionDetails(mission)
    case 'swindle': return swindleMissionDetails(mission)
    case 'fence': return fenceMissionDetails(mission)
    case 'fraud': return fraudMissionDetails(mission)
    case 'gambling': return gamblingMissionDetails(mission)
    case 'kidnapping': return kidnappingMissionDetails(mission)
    case 'narcotics': return narcoticsMissionDetails(mission)
    case 'prostitution': return prostitutionMissionDetails(mission)
    case 'protection': return protectionMissionDetails(mission)
    case 'slavery': return slaveryMissionDetails(mission)
    case 'smuggling': return smugglingMissionDetails(mission)
    case 'street': return streetMissionDetails(mission)
    default: return defaultMissionDetails(mission)
  }
}

function alchemyMissionDetails (mission) {
  switch (mission.difficulty) {
    case 'easy':
      return [
        'go and pick up some basic reagents and return to the Guild without getting caught.',
        'deliver a poisoned weapon without getting caught.',
        'create a basic poison in quantity, and deliver it to a customer, get paid, and return without getting caught.',
        'create a basic potion in quantity and deliver it into enemy territory. Return with the money.',
        'create a previously unknown potion or potion in your skill level.'
      ]
    case 'medium':
      return [
        'harvest intermediate reagents in enemy territory and escape.',
        'create a previously unknown potion or potion in your skill level.',
        'steal a shipment of enemy alchemical goods worth at least 500gp.',
        'create an intermediate potion in quantity and deliver it into enemy territory. Return with the money.',
        "destroy an enemy's alchemical laboratory and escape."
      ]
    case 'hard':
      return [
        'create a previously unknown potion or potion in your skill level.',
        'successfully mix two advanced potions and get a favorable result.',
        'create an advanced potion in quantity and deliver it into enemy territory. Return with the money.',
        'oversee the successful application of at least 40 poisoned weapons with an advanced poison.',
        'successfully reduce the creation time of a potion by 25%.'
      ]
  }
}

function assassinationMissionDetails (mission) {
  switch (mission.difficulty) {
    case 'easy':
      return [
        'track a target to a location and observe for 4 hours. Do not get caught or be seen. Signal a contact and return.',
        'kill a target in ambush, through a fixed killzone and escape. Claim credit for it.',
        'deliver a contact poison to a target in a crowded location. Escape.',
        'track a target to a location and observe for 1 hour. Trigger a fixed trap and escape.',
        'deliver ingested poison to a target in an public area. Escape.'
      ]
    case 'medium':
      return [
        'kill a political target. Escape.',
        'kill a target in his own home and steal goods worth at least 500gp.',
        'kill a target with ingested poison only, at a specific time and date.',
        'kill a group of targets with a fixed trap.',
        'kill a group of targets in a public location and claim credit for it.'
      ]
    case 'hard':
      return [
        'kill a royal target in a moving vehicle. Escape and claim credit for it.',
        'kill a political target at a public function with contact poison. Escape.',
        'kill a group of targets spread across several locations on the same day. Claim credit for it.',
        'kill a group of targets with ingested poison only, at a specific time and date.',
        'kill a group of targets with no visible means of assassination on the corpse.'
      ]
  }
}

function blackmailMissionDetails (mission) {
  switch (mission.difficulty) {
    case 'easy':
      return [
        'pick up a payment from a dead drop without being seen. Return to the Guild.',
        "follow target and observe for 4 hours without being seen. Obtain 'dirt' on the target. Present blackmail terms worth at least 10gp/month. Escape.",
        'pick up a payment from a target in enemy territory. Escape and return to the Guild.',
        'collect evidence against a target in enemy territory. Escape.',
        'collect evidence on a target in a public location without being seen. Return to the Guild.'
      ]
    case 'medium':
      return [
        'collect evidence on a political target without being seen.',
        'collect payment from a target, in public, and escape without being identified.',
        'follow target and observe for 24 hours without being seen. Present blackmail terms worth at least 100gp/month. successfully blackmail for 6 months.',
        'pick up a payment from a political target in enemy territory. Escape and return to the Guild.',
        'collect enough evidence to blackmail 3 targets in one month.'
      ]
    case 'hard':
      return [
        'collect evidence on a royal target without being identified. Blackmail for at least 1000gp/month. successfully blackmail for at least 3 months.',
        'maintain a group of at least 3 targets successfully for at least 1 year. Blackmail must be at least 500gp/month.',
        'successfully blackmail 1 target for 750gp/month. maintain for at least 3 months.',
        'collect evidence to blackmail 3 political targets in one month.',
        'collect enough evidence on your allies to ensure a clean exit strategy, if needed.'
      ]
  }
}

function burglaryMissionDetails (mission) {
  switch (mission.difficulty) {
    case 'easy':
      return [
        'steal 10gp worth of goods from a home.',
        'steal 20gp worth of goods from a business.',
        'break into a safe and escape with goods worth at least 20gp.',
        'disarm 3 traps and retrieve the package. Escape.',
        'place a target location under surveillance without being seen for 4 hours. Return to the Guild.'
      ]
    case 'medium':
      return [
        'break into a shop with magical defenses. steal at least 500gp worth of goods. Return to the Guild.',
        'steal 250gp worth of goods from a home or business.',
        'break into a vault and escape with goods worth at least 500gp.',
        'steal an object guarded by constant physical surveillance. Object should be worth at least 250gp.',
        'steal an object from a political or royal location and escape. Object can be worth anything, but should be unique and memorable.'
      ]
    case 'hard':
      return [
        'break into a royal location and steal goods worth at least 1000gp.',
        'break into a location with physical and magical defenses, as well as constant physical surveillance. steal an object worth at least 5000gp.',
        'steal an artefact from any location. Escape and keep in your possession for at least 48 hours.',
        'rob a moving vehicle of goods worth at least 1000gp and escape.',
        'break into a Guild House and steal an object that is unique and memorable. Keep it for at least 48 hours.'
      ]
  }
}

function swindleMissionDetails (mission) {
  switch (mission.difficulty) {
    case 'easy':
      return [
        'swindle a target out of 10gp or equivalent goods. Escape.',
        'swindle a target out of 20gp or equivalent goods. Escape.',
        'swindle a target and get the target to promise an additional 10gp later.',
        "swindle a target and retrieve your original investment back as well as keeping the target's money. Escape.",
        'swindle 3 targets in one day. Any amount over 5gp.'
      ]
    case 'medium':
      return [
        'grift a target out of 500gp or equivalent goods.',
        'grift a target out of 500gp or equivalent goods and get the target to promise an additional 100gp later.',
        'swindle a target and get the target arrested before you escape.',
        "grift a target and retrieve your initial investment back as well as keeping the target's money. Escape.",
        'run a grift that takes 3 months to finalize and take at least 1000gp or equivalent goods from the target.'
      ]
    case 'hard':
      return [
        'grift a target out of 1000gp or equivalent goods and get the target arrested before you escape.',
        'grift a political or royal target for at least 500gp or equivalent goods.',
        'run 3 successful grifts in 1 month for at least 250gp or equivalent goods each.',
        'swindle a target out of at least 1000gp or equivalent goods and escape without using a distraction.',
        'become accepted as a legitimate agent in the commercial/political/royal world in a Life grift.'
      ]
  }
}

function fenceMissionDetails (mission) {
  switch (mission.difficulty) {
    case 'easy':
      return [
        'successfully identify and evaluate goods worth at least 10gp.',
        'successfully identify and evaluate a minor magical item.',
        'successfully identify a minor cursed item.',
        'identify 3 counterfeit items.',
        'sell onwards goods worth at least 20gp.'
      ]
    case 'medium':
      return [
        'successfully identify and evaluate goods worth at least 500gp.',
        'successfully identify and evaluate a major magical item.',
        'successfully identify a major cursed item.',
        'Identify 3 counterfeit items and 3 forgeries in 1 month.',
        'sell onwards goods worth at least 500gp.'
      ]
    case 'hard':
      return [
        'successfully identify and evaluate goods worth at least 1000gp.',
        'successfully identify and evaluate an artefact.',
        'successfully sell onwards a set of linked magical items.',
        'successfully identify and evaluate goods in enemy territory and return with the goods to the Guild.',
        'sell onwards goods worth at least 1000gp.'
      ]
  }
}

function fraudMissionDetails (mission) {
  switch (mission.difficulty) {
    case 'easy':
      return [
        'steal an official paper without getting caught. Return to the Guild.',
        'steal an official paper in enemy territory without getting caught. Return to the Guild.',
        'create a forgery or counterfeit item and successfully use it without getting caught.',
        'create 3 forgeries or counterfeit items worth at least 20gp.',
        'successfully use a forgery or counterfeit item 3 times.'
      ]
    case 'medium':
      return [
        'create a royal or political forgery/counterfeit and sell it for at least 500gp.',
        'create a forgery/counterfeit object of artistic merit and sell it for at least 500gp.',
        'steal polticial or royal papers and use them to create at least 3 forgeries.',
        'create 3 forgery/counterfeit objects worth at least 250gp each.',
        'create travel documents for a secondary political body. (like another Kingdom)'
      ]
    case 'hard':
      return [
        'create a royal or political forgery/counterfeit and sell it for at least 1000gp.',
        'create forgeries for at least 20 people to be used in one transaction.',
        'create royal identification papers.',
        'steal supplies to create travel, identity and official documents for at least 3 other political bodies.',
        'create a counterfeit that for an object that is normally displayed in a public location and switch them.'
      ]
  }
}

function gamblingMissionDetails (mission) {
  switch (mission.difficulty) {
    case 'easy':
      return [
        'win at least 10gp in one day.',
        'win at least 5gp from 3 different targets in one day.',
        'successfully cheat and win at least 10gp.',
        'successfully bankrupt all opponents in one game.',
        'successfully cheat and win at least 20gp.'
      ]
    case 'medium':
      return [
        'win at least 250gp in one day',
        'win at least 50gp from 3 different targets in one day',
        'successfully cheat and win at least 500gp.',
        'successfully bankrupt all opponents in one game and get the losers to agree to another game tomorrow.',
        'successfully cheat a professional gambler and win at least 100gp.'
      ]
    case 'hard':
      return [
        'cheat a gambling establishment of at least 1000gp.',
        'win at least 1500gp in 1 day.',
        'successfully cheat a professional gambler and win at least 500gp.',
        'successfully win a game with at least 19 other competitors.',
        'successfully rig a mechanical game or a racing competition to win at least 1000gp.'
      ]
  }
}

function kidnappingMissionDetails (mission) {
  switch (mission.difficulty) {
    case 'easy':
      return [
        'track a target for at least 4 hours without being seen.',
        'track and observe a target in enemy territory for at least 1 hour without being seen. Return to the Guild.',
        'abduct 1 minor target and hold for at least 48 hours. Demand a ransom of at least 10gp.',
        'abduct 2 minor targets and hold for at least 24 hours. Demand a ransom of at least 20gp.',
        'subdue a violent target and hold for at least 8 hours.'
      ]
    case 'medium':
      return [
        'abduct a major target and hold for at least 24 hours. Demand a ransom of at least 500gp.',
        'track a target for at least 24 hours without being seen.',
        'abduct multiple targets and hold for at least 1 hour. Demand a ransom of at least 50gp per target.',
        'abduct a political target and demand a ransom of at least 250gp. Release the target alive.',
        'abduct a target from a moving vehicle.'
      ]
    case 'hard':
      return [
        'abduct multiple targets from a moving vehicle.',
        'abduct a royal target and demand a ransom of at least 1000gp. Release the target alive.',
        'abduct a political target from a public place and demand a ransom of at least 500gp.',
        'abduct at least 10 targets at the same time and hold them for at least 30 days.',
        'abduct an enemy target in enemy territory and demand a ransom of at least 500gp.'
      ]
  }
}

function narcoticsMissionDetails (mission) {
  switch (mission.difficulty) {
    case 'easy':
      return [
        'buy product from a rival worth at least 10gp and return to the Guild..',
        'collect money owed to the Guild by a non-paying customer.',
        'protect a product shipment from enemies for at least 24 hours.',
        'sell product worth at least 10gp.',
        'sell product worth at least 20gp.'
      ]
    case 'medium':
      return [
        'sell product worth at least 500gp for the month.',
        'buy product in enemy territory worth at least 500gp and escort it back to the Guild.',
        'ship product worth at least 500gp into enemy territory and collect the money and escape.',
        'set up at least 10 distributors for your product and maintain them for at least 30 days.',
        'Start a production facility for your product and create raw goods worth at least 250gp per month.'
      ]
    case 'hard':
      return [
        'sell product worth at least 1000gp for the week.',
        "destroy an enemy's production facility and escape.",
        'set up at least 20 distributors for your product and maintain them for 3 months.',
        'ship product worth at least 1000gp through enemy territory and sell the product. Return through enemy territory to the Guild.',
        "takeover a rival's production chain."
      ]
  }
}

function prostitutionMissionDetails (mission) {
  switch (mission.difficulty) {
    case 'easy':
      return [
        'earn at least 10gp in 1 day.',
        'successfully protect an employee from a violent customer.',
        'retrieve an employee from enemy territory and escape. Return to the Guild.',
        'earn at least 20gp in 1 day.',
        'recruit 1 new employee and earn at least 5gp from them in 1 day.'
      ]
    case 'medium':
      return [
        'earn at least 250gp in 1 day.',
        'recruit at least 10 employees and earn at least 100gp from them in 1 day.',
        'retreive at least 3 employees from enemy territory and escape.',
        'discovering the cure for an outbreak of disease among your employees.',
        'set up a base of operation and maintain it for at least 30 days.'
      ]
    case 'hard':
      return [
        'maintain 3 bases of operation for at least 3 months.',
        'earn at least 1000gp in 1 day.',
        'recruit at least 10 employees and earn at least 500gp from them in 1 day.',
        'acquire new employees in enemy territory and return them to your base of operations without being seen.',
        'discover who has been murdering your employees.'
      ]
  }
}

function protectionMissionDetails (mission) {
  switch (mission.difficulty) {
    case 'easy':
      return [
        'intimidate a target into buying protection worth at least 10gp a week.',
        'intimidate a target into buying protection worth at least 20gp a week.',
        'retrieve stolen weekly earnings from enemy. Return earnings to the Guild.',
        're-intimidate a non-paying customer.',
        'successfully assault a non-paying customer without getting caught.'
      ]
    case 'medium':
      return [
        'intimidate a target into buying protection worth at least 250gp a week.',
        "negotiate an increase in a target's weekly payoff by 25%.",
        "destroy a rival's racket and escape.",
        "negotiate an increase in a target's weekly payoff by 50%, but decrease the payments to twice a month.",
        "set physical or magical traps to destroy a non-paying customer's home or business."
      ]
    case 'hard':
      return [
        'intimidate a target into buying protection worth at least 500gp a week.',
        'intimidate a political target into buying protection.',
        "negotiate an increase in a target's weekly payoff by 75%.",
        "renegotiate an increase in at least 10 target's weekly payoffs by 50%",
        "destroy a rival's businesses and remove them from doing business ever again."
      ]
  }
}

function slaveryMissionDetails (mission) {
  switch (mission.difficulty) {
    case 'easy':
      return [
        'sell 1 slave worth at least 100gp.',
        'sell 1 slave worth at least 200gp.',
        'move 1 slave through enemy territory and return to the Guild with the slave unharmed.',
        'intimidate 10 slaves.',
        'acquire 1 new slave and sell it within 48 hours for at least 100gp.'
      ]
    case 'medium':
      return [
        'oversee a successful sale of at least 10 slaves worth at least 1000gp.',
        "ambush a rival's goods and steal at least 3 slaves and escape.",
        'put down a minor revolt among the slaves. 25% rise up.',
        'secure a new source of acquiring slaves worth at least 500 gp/month.',
        'sell at least ten slaves and intimidate the target into giving at least 1 slave back.'
      ]
    case 'hard':
      return [
        'establish a secure base of operations doing at least 1000gp worth of trade a month.',
        "destroy a rival's operations and escape with as many goods as possible.",
        'put down a major revolt among the slaves. 75% rise up.',
        'oversee the transport, through enemy territory; and sale of at least 10 slaves for a profit of at least 1000gp.',
        'sell 100 slaves in one month and make a profit of at least 10000gp.'
      ]
  }
}

function smugglingMissionDetails (mission) {
  switch (mission.difficulty) {
    case 'easy':
      return [
        'move goods worth at least 10gp.',
        'move goods worth at least 20gp.',
        'move goods through a low physical-security checkpoint.',
        'pick up goods worth at least 20gp in enemy territory and successfully return to the Guild.',
        'move live cargo without being seen and return to the Guild.'
      ]
    case 'medium':
      return [
        'move goods worth at least 500gp.',
        'move goods through a high physical-security checkpoint.',
        'move goods through enemy territory at pick up goods worth at least 500gp and return to the Guild.',
        'move goods worth at least 250gp through moving magical surveillance.',
        'move goods worth at least 250gp via air.'
      ]
    case 'hard':
      return [
        'move goods worth at least 1000gp.',
        'move goods worth at least 500gp through magical-security checkpoint.',
        'move goods worth at least 500gp inside a political or royal shipment.',
        'move goods worth at least 500gp via planar teleportation.',
        'move live cargo through enemy territory and return to the Guild.'
      ]
  }
}

function streetMissionDetails (mission) {
  switch (mission.difficulty) {
    case 'easy':
      return [
        'pickpocket 10gp or equivalent goods.',
        'pickpocket 20gp or equivalent goods.',
        'pickpocket an official paper.',
        'successfully mug 3 targets in 1 day.',
        'mug a target for at least 30gp or equivalent goods.'
      ]
    case 'medium':
      return [
        'pickpocket 250gp or equivalent goods',
        'mug a group of targets for 100gp or equivalent goods',
        'mug a political target.',
        'pickpocket 10 targets in 1 day.',
        'pickpocket a magic item.'
      ]
    case 'hard':
      return [
        'pickpocket a royal target of some valuable, personal or otherwise.',
        'mug a political target of 500gp or equivalent goods and escape.',
        'pickpocket 3 magic items in 1 day.',
        'mug a Guild Leader for at least 500gp or equivalent goods.',
        'pickpocket an artefact.'
      ]
  }
}

function defaultMissionDetails (mission) {
  switch (mission.difficulty) {
    case 'easy':
      return [
        'pick up a payment from a dead drop without being seen. Return to the Guild.',
        "follow target and observe for 4 hours without being seen. Obtain 'dirt' on the target. Present blackmail terms worth at least 10gp/month. Escape.",
        'pick up a payment from a target in enemy territory. Escape and return to the Guild.',
        'collect evidence against a target in enemy territory. Escape.',
        'collect evidence on a target in a public location without being seen. Return to the Guild.'
      ]
    case 'medium':
      return [
        'collect evidence on a political target without being seen.',
        'collect payment from a target, in public, and escape without being identified.',
        'follow target and observe for 24 hours without being seen. Present blackmail terms worth at least 100gp/month. successfully blackmail for 6 months.',
        'pick up a payment from a political target in enemy territory. Escape and return to the Guild.',
        'collect enough evidence to blackmail 3 targets in one month.'
      ]
    case 'hard':
      return [
        'collect evidence on a royal target without being identified. Blackmail for at least 1000gp/month. successfully blackmail for at least 3 months.',
        'maintain a group of at least 3 targets successfully for at least 1 year. Blackmail must be at least 500gp/month.',
        'successfully blackmail 1 target for 750gp/month. maintain for at least 3 months.',
        'collect evidence to blackmail 3 political targets in one month.',
        'collect enough evidence on your allies to ensure a clean exit strategy, if needed.'
      ]
  }
}
