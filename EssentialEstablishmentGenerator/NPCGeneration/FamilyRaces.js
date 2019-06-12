// Given a NPC to be married, determine the partner race
setup.marriagePools = {
  'human': ['human', 'elf', 'orc', 'half-elf', 'half-orc', 'tiefling'],
  'elf': ['human', 'elf', 'half-elf'],
  'orc': ['human', 'orc', 'half-orc'],
  'half-elf': ['human', 'elf', 'half-elf', 'half-orc'],
  'half-orc': ['human', 'orc', 'half-elf', 'half-orc'],
  'tiefling': ['human', 'tiefling']
}

setup.findParentRaces = function (npc) {
  const parentalLineageRoll = random(1, 8)

  let lineage, fatherRace, motherRace
  switch (npc.race) {
    case 'half-orc':
      if (parentalLineageRoll === 8) {
        lineage = 'Both parents were half-orcs'
        fatherRace = 'half-orc'
        motherRace = 'half-orc'
      } else if (parentalLineageRoll >= 6) {
        lineage = 'One parent was a human, the other was a half orc'
        motherRace = 'human'
        fatherRace = 'half-orc'
      } else if (parentalLineageRoll >= 4) {
        lineage = 'One parent was a half-orc, the other was an orc'
        motherRace = 'half-orc'
        fatherRace = 'orc'
      } else if (parentalLineageRoll < 4) {
        lineage = 'One parent was a human, the other was an orc'
        motherRace = 'human'
        fatherRace = 'orc'
      }
      break
    case 'half-elf':
      if (parentalLineageRoll === 8) {
        lineage = 'Both parents were half-elves'
        motherRace = 'half-elf'
        fatherRace = 'half-elf'
      } else if (parentalLineageRoll === 7) {
        lineage = 'One parent was a human, the other was a half elf'
        fatherRace = 'half-elf'
        motherRace = 'human'
      } else if (parentalLineageRoll === 6) {
        lineage = 'One parent was a half-elf, the other was an elf'
        fatherRace = 'half-elf'
        motherRace = 'elf'
      } else if (parentalLineageRoll < 6) {
        lineage = 'One parent was a human, the other was an elf'
        fatherRace = 'elf'
        motherRace = 'human'
      }
      break
    case 'tiefling':
      if (parentalLineageRoll === 8) {
        lineage = 'One parent was a human, the other was a devil'
        motherRace = 'human'
        fatherRace = 'devil'
      } else if (parentalLineageRoll === 7) {
        lineage = 'One parent was a tiefling, the other was a devil'
        motherRace = 'tiefling'
        fatherRace = 'devil'
      } else if (parentalLineageRoll >= 4) {
        lineage = 'One parent was a human, the other was a tiefling'
        motherRace = 'human'
        fatherRace = 'tiefling'
      } else if (parentalLineageRoll < 4) {
        lineage = 'Both parents were human, with their infernal ancestry manifesting in me later in life'
        motherRace = 'human'
        fatherRace = 'human'
      }
      break
    default:
      lineage = undefined
      motherRace = npc.race
      fatherRace = npc.race
  }

  // For the sake of symmetry
  if (random(1, 2) === 2) [motherRace, fatherRace] = [fatherRace, motherRace]
  return { motherRace, fatherRace, lineage }
}

setup.findChildRace = function (town, motherRace, fatherRace) {
  console.log(`Handling ${motherRace}+${fatherRace} marriage!`)

  motherRace = motherRace || fatherRace || setup.fetchRace(town)
  fatherRace = fatherRace || motherRace || setup.fetchRace(town)
  const races = []
  races.push(motherRace, fatherRace)

  if (motherRace === fatherRace) {
    return motherRace
  }
  if (races.includes('human')) {
    if (races.includes('elf')) {
      return 'half-elf'
    } else if (races.includes('orc')) {
      return 'half-orc'
    }
    const halfbreeds = ['half-orc', 'half-elf', 'tiefling', 'dragonborn']
    if (races.find(race => (halfbreeds.includes(race)))) {
      const otherRace = races.find(race => (race !== 'human'))
      console.log(races, otherRace)
      if (random(100) > 70) {
        return otherRace
      } else {
        return 'human'
      }
    }
  } else {
    return motherRace
  }
}

setup.findPartnerRace = function (town, npc) {
  if (!(npc.race in setup.marriagePools)) return npc.race

  const pool = setup.marriagePools[npc.race]
    .filter((race) => typeof town.baseDemographics[race] === 'number')
  const poolSum = pool.map((race) => town.baseDemographics[race])
    .reduce((a, b) => (a + b), 0)

  let roll = Math.random() * poolSum
  for (let i = 0; i < pool.length; i++) {
    roll -= town.baseDemographics[pool[i]]
    if (roll <= 0) return pool[i]
  }

  return npc.race
}
