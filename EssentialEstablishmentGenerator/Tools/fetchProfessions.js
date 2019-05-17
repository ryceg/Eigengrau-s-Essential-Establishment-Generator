setup.fetchProfessions = function (town) {
  // this is run on start up.
  // it returns the available town professions, with their support values.
  // individual professions are returned by the fetchProfessionChance() function located in NPCGeneration/fetchProfessionChance.js
  town = town || State.variables.town
  town.professions = {}
  var professionNames = Object.keys(setup.townData.professions)
  var professions = professionNames
    .map(function (profession) {
      return setup.townData.professions[profession]
    }, town)
  for (let profession of professions) {
    var townPop = town.population
    var newSv = profession.sv + (dice('4d4-10') * 10)
    // console.log('sV: ' + profession.sv)
    // console.log('new sV: ' + newSv)
    var professionRoll = townPop / newSv /* Set the number of professions equal = the town's population divided by how many people are needed = support that type of business */
    var professionRollPercentage = townPop / profession.sv * 100
    // console.log('professionRollPercentage: ' + professionRollPercentage)
    var professionRollHundred = randomFloat(1, 100)
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
      var name = professions.indexOf(profession)
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
