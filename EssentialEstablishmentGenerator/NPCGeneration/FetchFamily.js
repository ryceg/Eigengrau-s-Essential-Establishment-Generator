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
      const nounKey = `${relativeList[ptr].relationship}${State.variables.npcs[relativeList[ptr].key].gender}`
      relatives[relativeList[ptr].key] = nounKey in setup.familyData.relationshipNouns
        ? setup.familyData.relationshipNouns[nounKey]
        : 'relative'

      if (relativeList[ptr].depth < depth) {
        // Expand node first before fetching
        setup.ExpandFamily(town, State.variables.npcs[relativeList[ptr].key])

        const familyNode = family.members[relativeList[ptr].key]
        if (familyNode.parentMarriage) {
          relativeList.push(...familyNode.parentMarriage.parents.map(relativeKey => ({
            key: relativeKey,
            depth: relativeList[ptr].depth + 1,
            relationship: `${relativeList[ptr].relationship}parent-`
          })))
        }

        if (familyNode.siblings) {
          relativeList.push(...familyNode.siblings
            .map(relativeKey => ({
              key: relativeKey,
              depth: relativeList[ptr].depth + 1,
              relationship: `${relativeList[ptr].relationship}sibling-`
            })))
        }

        if (familyNode.marriages) {
          familyNode.marriages.forEach(marriage => {
            const partners = marriage.parents
            relativeList.push(...partners.map(relativeKey => ({
              key: relativeKey,
              depth: relativeList[ptr].depth + 1,
              relationship: `${relativeList[ptr].relationship}partner-`
            })))

            relativeList.push(...marriage.children.map(relativeKey => ({
              key: relativeKey,
              depth: relativeList[ptr].depth + 1,
              relationship: `${relativeList[ptr].relationship}child-`
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
