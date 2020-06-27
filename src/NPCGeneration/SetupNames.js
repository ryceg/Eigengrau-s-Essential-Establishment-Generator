setup.createName = function (parameters) {
  console.log('Returning a name!')
  if (parameters.firstOrLast === 'lastName') return setup.npcData.raceTraits[parameters.race || 'human'].lastName.random().toUpperFirst()
  return setup.npcData.raceTraits[parameters.race || 'human'].genderTraits[parameters.gender || 'man'].firstName.random().toUpperFirst()
}
