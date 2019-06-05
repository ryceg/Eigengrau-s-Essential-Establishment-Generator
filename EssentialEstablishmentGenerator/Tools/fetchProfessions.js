setup.fetchProfessions = function (town) {
  // this is run on start up.
  // it returns the available town professions, with their support values.
  // individual professions are returned by the fetchProfessionChance() function located in NPCGeneration/fetchProfessionChance.js
  town = town || State.variables.town
  town.professions = {}
  const professionNames = Object.keys(setup.townData.professions)
  const professions = professionNames
    .map(function (profession) {
      return setup.townData.professions[profession]
    }, town)
  for (const profession of professions) {
    const townPop = town.population
    const newSv = profession.sv + (dice('4d4-10') * 10)
    // console.log('sV: ' + profession.sv)
    // console.log('new sV: ' + newSv)
    const professionRoll = townPop / newSv /* Set the number of professions equal = the town's population divided by how many people are needed = support that type of business */
    const professionRollPercentage = townPop / profession.sv * 100
    // console.log('professionRollPercentage: ' + professionRollPercentage)
    const professionRollHundred = randomFloat(1, 100)
    // eslint-disable-next-line no-var
    var professionCount
    if (professionRoll < 1 && (professionRollPercentage >= professionRollHundred)) {
      professionCount = 1
    } else if (professionRoll < 1 && professionRollPercentage < professionRollHundred) {
      professionCount = 0
    } else {
      professionCount = Math.trunc(professionRoll) /* Truncate the number = a whole number */
    }

    if (professionCount >= 1) {
      profession.population = professionCount
      const name = professions.indexOf(profession)
      profession.name = professionNames[name]
      town.professions[profession.name] = profession
    //   var professionIndex = professions.indexOf(profession)
    //   console.log('professionIndex: ' + professionIndex)
    //   var outputProfession = professionNames[professionIndex]
    //   console.log(outputProfession)
    //   professionArray.push(outputProfession)
    //   professionCountArray.push(professionCount)
    }
  }
  console.log(town.professions)
  return town.professions
}
