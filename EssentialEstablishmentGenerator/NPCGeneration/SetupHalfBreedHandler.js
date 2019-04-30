setup.halfbreedHandler = function (town, mother, father) {
  console.log('Handling some half-breeds!')
  console.log({mother}, {father})
  if (typeof mother === 'string') {
    console.error('First argument was passed a string!')
    mother = State.variables.npcs[mother]
  }
  if (typeof father === 'string') {
    console.error('Second argument was passed a string!')
    father = State.variables.npcs[father]
  }

  mother.race = mother.race || father.race || setup.fetchRace(town)
  father.race = father.race || mother.race || setup.fetchRace(town)
  var races = []
  races.push(mother.race, father.race)

  if (mother.race === father.race) {
    return mother.race
  }
  if (races.includes('human')) {
    if (races.includes('elf')) {
      return 'half-elf'
    } else if (races.includes('orc')) {
      return 'half-orc'
    }
    var halfbreeds = ['half-orc', 'half-elf', 'tiefling', 'dragonborn']
    if (races.includes(halfbreeds)) {
      var otherRace = races.filter(function (race) {
        if (race !== 'human') {
          return race
        }
      })
      if (random(100) > 70) {
        return otherRace
      } else {
        return 'human'
      }
    }
  } else {
    return mother.race
  }
}
