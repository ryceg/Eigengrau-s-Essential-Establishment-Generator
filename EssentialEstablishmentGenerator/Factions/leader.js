setup.leaderFaction = function (faction) {
  faction.leaderBribesRoll = dice(2, 50)
  faction.leaderCompetenceRoll = dice(2, 50)
  var type = faction.type

  if (faction.age === 'brand new' || faction.age === 'very new') {
    if (faction.leadershipType === 'group') {
      faction.leaderQualification = ['the original founders', 'the original founders', 'the first appointed leaders'].random()
    } else {
      faction.leaderQualification = ['the original founder', 'the original founder', 'the first appointed leader'].random()
    }
  } else {
    faction.leaderQualification = factionData.type[type].leaderQualification.random()
  }

  if (faction.leaderBribesRoll > 95) {
    faction.leaderBribes = 'will never, under any circumstances be accepted'
  } else if (faction.leaderBribesRoll > 90) {
    faction.leaderBribes = 'will never be accepted, and will be met with instant excommunication'
  } else if (faction.leaderBribesRoll > 80) {
    faction.leaderBribes = 'are treated as insults'
  } else if (faction.leaderBribesRoll > 70) {
    faction.leaderBribes = 'will be met with laughter'
  } else if (faction.leaderBribesRoll > 60) {
    faction.leaderBribes = 'are scorned'
  } else if (faction.leaderBribesRoll > 55) {
    faction.leaderBribes = 'are uncommon, and frowned upon'
  } else if (faction.leaderBribesRoll > 50) {
    faction.leaderBribes = 'will usually be rejected'
  } else if (faction.leaderBribesRoll > 45) {
    faction.leaderBribes = 'depend on circumstances'
  } else if (faction.leaderBribesRoll > 40) {
    faction.leaderBribes = 'are sometimes accepted'
  } else if (faction.leaderBribesRoll > 30) {
    faction.leaderBribes = 'will be bargained about'
  } else if (faction.leaderBribesRoll > 20) {
    faction.leaderBribes = 'will usually be accepted'
  } else if (faction.leaderBribesRoll > 10) {
    faction.leaderBribes = 'are a regular part of business'
  } else if (faction.leaderBribesRoll <= 5) {
    faction.leaderBribes = 'are expected'
  } else {
    faction.leaderBribes = 'depend on circumstances'
  }

  if (faction.leaderCompetenceRoll > 95) {
    faction.leaderCompetence = 'ruthlessly efficient'
  } else if (faction.leaderCompetenceRoll > 90) {
    faction.leaderCompetence = 'extremely efficient'
  } else if (faction.leaderCompetenceRoll > 80) {
    faction.leaderCompetence = 'very competent'
  } else if (faction.leaderCompetenceRoll > 70) {
    faction.leaderCompetence = 'quite competent'
  } else if (faction.leaderCompetenceRoll > 60) {
    faction.leaderCompetence = 'reasonably competent'
  } else if (faction.leaderCompetenceRoll > 55) {
    faction.leaderCompetence = 'usually competent'
  } else if (faction.leaderCompetenceRoll > 50) {
    faction.leaderCompetence = 'of mild competence'
  } else if (faction.leaderCompetenceRoll > 45) {
    faction.leaderCompetence = 'of mild incompetence'
  } else if (faction.leaderCompetenceRoll > 40) {
    faction.leaderCompetence = 'somewhat incompetent'
  } else if (faction.leaderCompetenceRoll > 30) {
    faction.leaderCompetence = 'quite incompetent'
  } else if (faction.leaderCompetenceRoll > 20) {
    faction.leaderCompetence = 'very incompetent'
  } else if (faction.leaderCompetenceRoll > 10) {
    faction.leaderCompetence = 'unbelievably incompetent'
  } else if (faction.leaderCompetenceRoll <= 5) {
    faction.leaderCompetence = 'incompetent to the point of being unable to pour water out of a boot with the instructions written on the heel'
  } else {
    faction.leaderCompetence = 'of mild competence'
  }

  switch (faction.leadershipType) {
    case 'individual':
      if (faction.isPoliticalPower === true) {
        if (State.variables.townLeader) {
          // State.variables.townLeader = faction.leader
          faction.leader = State.variables.townLeader
        } else {
          faction.leader = setup.createNPC({
            hasClass: factionData.type[type].hasClass,
            profession: factionData.type[type].profession,
            dndClass: factionData.type[type].dndClass
          })
          State.variables.townLeader = faction.leader
          // faction.leader = State.variables.townLeader
        }
      } else {
        faction.leader = setup.createNPC({
          hasClass: factionData.type[type].hasClass,
          profession: factionData.type[type].profession,
          dndClass: factionData.type[type].dndClass
        })
      }
      break
    case 'group':
      setup.createLeaderGroup(faction)
  }

  if (faction.stabilityRoll <= 30) {
    faction.stabilityCause = ['internal power struggles', 'conflicts with rivaling factions'].random()
  } else if (faction.stabilityRoll >= 70 && faction.leadershipType === 'individual') {
    faction.stabilityCause = ['the lack of infighting for the leadership role'].random()
  } else if (faction.stabilityRoll >= 70 && faction.leadershipType === 'group') {
    faction.stabilityCause = ['their much-loved ' + faction.leaderGroupTitle, 'the lack of infighting for the leadership roles'].random()
  }

  return faction
}
