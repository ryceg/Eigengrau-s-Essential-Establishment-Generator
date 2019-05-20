setup.leaderFaction = function (town, faction) {
  console.log('determining leaders...')
  faction.roll.leaderBribes = dice(2, 50)
  faction.roll.leaderCompetence = dice(2, 50)

  if (faction.age === 'brand new' || faction.age === 'very new') {
    if (faction.leadershipType === 'group') {
      faction.leaderQualification = ['the original founders', 'the original founders', 'the first appointed leaders'].seededrandom()
    } else {
      faction.leaderQualification = ['the original founder', 'the original founder', 'the first appointed leader'].seededrandom()
    }
  } else {
    faction.leaderQualification = setup.factionData.type[faction.type].leaderQualification.seededrandom()
  }

  const isLargerThan = setup.createModifier(function (a, b) {
    return a > b
  })

  faction.leaderBribes = isLargerThan(faction.roll.leaderBribes, {
    95: 'will never, under any circumstances be accepted',
    90: 'will never be accepted, and will be met with instant excommunication',
    80: 'are treated as insults',
    70: 'will be met with laughter',
    60: 'are scorned',
    55: 'are uncommon, and frowned upon',
    50: 'will usually be rejected',
    45: 'depend on circumstances',
    40: 'are sometimes accepted',
    30: 'will be bargained about',
    20: 'will usually be accepted',
    10: 'are a regular part of business',
    5: 'depend on circumstances'
  }, 'are expected')

  if (faction.roll.leaderCompetence > 95) {
    faction.leaderCompetence = 'ruthlessly efficient'
  } else if (faction.roll.leaderCompetence > 90) {
    faction.leaderCompetence = 'extremely efficient'
  } else if (faction.roll.leaderCompetence > 80) {
    faction.leaderCompetence = 'very competent'
  } else if (faction.roll.leaderCompetence > 70) {
    faction.leaderCompetence = 'quite competent'
  } else if (faction.roll.leaderCompetence > 60) {
    faction.leaderCompetence = 'reasonably competent'
  } else if (faction.roll.leaderCompetence > 55) {
    faction.leaderCompetence = 'usually competent'
  } else if (faction.roll.leaderCompetence > 50) {
    faction.leaderCompetence = 'of mild competence'
  } else if (faction.roll.leaderCompetence > 45) {
    faction.leaderCompetence = 'of mild incompetence'
  } else if (faction.roll.leaderCompetence > 40) {
    faction.leaderCompetence = 'somewhat incompetent'
  } else if (faction.roll.leaderCompetence > 30) {
    faction.leaderCompetence = 'quite incompetent'
  } else if (faction.roll.leaderCompetence > 20) {
    faction.leaderCompetence = 'very incompetent'
  } else if (faction.roll.leaderCompetence > 10) {
    faction.leaderCompetence = 'unbelievably incompetent'
  } else if (faction.roll.leaderCompetence <= 5) {
    faction.leaderCompetence = 'incompetent to the point of being unable to pour water out of a boot with the instructions written on the heel'
  } else {
    faction.leaderCompetence = 'of mild competence'
  }

  switch (faction.leadershipType) {
    case 'individual':
      var leaderTraits = setup.factionData.type[faction.type].leaderTraits
      var key
      for (key in leaderTraits) {
        if (Array.isArray(leaderTraits[key])) {
          leaderTraits[key] = leaderTraits[key].seededrandom()
        }
      }
      faction.leader = setup.createNPC(town, leaderTraits)
      if (faction.isPoliticalPower === true) {
        town.leader = faction.leader
      }
      break
    case 'group':
      setup.createLeaderGroup(faction)
  }

  if (faction.roll.stability <= 30) {
    faction.stabilityCause = ['internal power struggles', 'conflicts with rivaling factions'].seededrandom()
  } else if (faction.roll.stability >= 70 && faction.leadershipType === 'individual') {
    faction.stabilityCause = ['the lack of infighting for the leadership role'].seededrandom()
  } else if (faction.roll.stability >= 70 && faction.leadershipType === 'group') {
    faction.stabilityCause = ['their much-loved ' + faction.leaderGroupTitle, 'the lack of infighting for the leadership roles'].seededrandom()
  }

  return faction
}
