/**
 * This is run on start up.
 * It returns the available town professions, with their support values.
 *
 * Individual professions are returned by the `fetchProfessionChance()`
 * function located in `NPCGeneration/fetchProfessionChance.js`
 */
setup.fetchProfessions = (town = State.variables.town) => {
  const allProfessions = Object.entries(lib.professions)
  const townProfessions = {}

  for (const [name, profession] of allProfessions) {
    const townPop = town.population
    const newSv = profession.sv + (lib.dice('4d4-10') * 10)
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
      townProfessions[name] = profession
    }
  }

  return townProfessions
}
