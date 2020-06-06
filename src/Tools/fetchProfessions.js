/**
 * This is run on start up.
 * It returns the available town professions, with their support values.
 *
 * Individual professions are returned by the `fetchProfessionChance()`
 * function located in `NPCGeneration/fetchProfessionChance.js`
 */
setup.fetchProfessions = town => {
  town = town || State.variables.town
  town.professions = {}

  const professions = Object.entries(setup.townData.professions)

  for (const [name, profession] of professions) {
    const townPop = town.population
    const newSv = profession.sv + (dice('4d4-10') * 10)
    const professionRoll = townPop / newSv /* Set the number of professions equal = the town's population divided by how many people are needed = support that type of business */
    const professionRollPercentage = townPop / profession.sv * 100
    const professionRollHundred = randomFloat(1, 100)

    let population
    if (professionRoll < 1 && (professionRollPercentage >= professionRollHundred)) {
      population = 1
    } else if (professionRoll < 1 && professionRollPercentage < professionRollHundred) {
      population = 0
    } else {
      population = Math.trunc(professionRoll) /* Truncate the number = a whole number */
    }

    if (population >= 1) {
      profession.population = population
      profession.name = name
      town.professions[name] = profession
    }
  }
  console.log(town.professions)
  return town.professions
}
