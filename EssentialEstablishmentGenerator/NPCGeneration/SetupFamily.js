setup.createFamily = function (town, npc) {
  const key = `${npc.lastName} family`
  const family = {
    key,
    members: {}
  }
  family.members[npc.key] = {
    key: npc.key,
    parentMarriage: undefined,
    marriages: undefined,
    canRemarry: true
  }
  town.families[key] = family
  npc.family = key
}

setup.ExpandFamily = function (town, npc) {
  const family = town.families[npc.family]
  const node = family.members[npc.key]

  setup.createParentage(town, family, npc)

  // Marriages and descendants
  const marriageMin = setup.npcData.raceTraits[npc.race].ageTraits['young adult'].baseAge
  if (npc.ageYears <= marriageMin) {
    node.marriages = []
    node.canRemarry = false
  }

  if (node.marriages === undefined) {
    node.marriages = []
    if (random(1, 100) <= setup.familyData.marriagePercent) {
      const newMarriage = setup.createMarriage(town, family, npc)
      node.marriages.push(newMarriage)
    }
  }

  while (node.canRemarry) {
    if (random(1, 100) <= setup.familyData.remarriagePercent) {
      const newMarriage = setup.createMarriage(town, family, npc, marriageMin)
      node.marriages.push(newMarriage)
    } else {
      node.canRemarry = false
    }
  }
}

setup.fetchFamily = function (town, npc, depth = 2) {
  // We fetch nodes in breadth-first order.
  const relativeList = [{ key: npc.key, depth: 0, relationship: '', gender: npc.gender }]
  const relatives = {}
  let ptr = 0
  console.log(`fetching ${npc.key} relativeList...`)
  const family = town.families[npc.family]
  console.log(family)
  while (ptr < relativeList.length) {
    if (!(relativeList[ptr].key in relatives)) {
      const nounKey = `${relativeList[ptr].relationship}${State.variables.npcs[relativeList[ptr].key].gender[0]}`
      relatives[relativeList[ptr].key] = nounKey

      if (relativeList[ptr].depth < depth) {
        // Expand node first before fetching
        setup.ExpandFamily(town, State.variables.npcs[relativeList[ptr].key])

        const familyNode = family.members[relativeList[ptr].key]
        if (familyNode.parentMarriage) {
          relativeList.push(...familyNode.parentMarriage.parents.map(relativeKey => ({
            key: relativeKey,
            depth: relativeList[ptr].depth + 1,
            relationship: `${relativeList[ptr].relationship}E`
          })))
        }

        if (familyNode.siblings) {
          relativeList.push(...familyNode.siblings
            .map(relativeKey => ({
              key: relativeKey,
              depth: relativeList[ptr].depth + 1,
              relationship: `${relativeList[ptr].relationship}B`
            })))
        }

        if (familyNode.marriages) {
          familyNode.marriages.forEach(marriage => {
            const partners = marriage.parents
            relativeList.push(...partners.map(relativeKey => ({
              key: relativeKey,
              depth: relativeList[ptr].depth + 1,
              relationship: `${relativeList[ptr].relationship}C`
            })))

            relativeList.push(...marriage.children.map(relativeKey => ({
              key: relativeKey,
              depth: relativeList[ptr].depth + 1,
              relationship: `${relativeList[ptr].relationship}D`
            })))
          })
        }
      }
    }
    ptr++
  }

  delete relatives[npc.key]
  if (relatives === null) return {}
  return relatives
}
