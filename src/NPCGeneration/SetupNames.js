setup.createName = function (parameters) {
  console.log('Returning a name!')
  if (parameters.firstOrLast === 'lastName') return lib.raceTraits[parameters.race || 'human'].lastName.random().toUpperFirst()
  return lib.raceTraits[parameters.race || 'human'].genderTraits[parameters.gender || 'man'].firstName.random().toUpperFirst()
}
