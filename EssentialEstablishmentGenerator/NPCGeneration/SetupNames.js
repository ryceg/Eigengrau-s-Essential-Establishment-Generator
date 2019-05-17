setup.createName = function (parameters) {
  console.log('Returning a name!')
  return setup.npcData.raceTraits[parameters.race || 'human'].genderTraits[parameters.gender || 'man'][parameters.firstOrLast || 'firstName'].seededrandom().toUpperFirst()
}
