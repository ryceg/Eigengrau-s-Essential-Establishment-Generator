const MARRIAGE_PERCENT = 55
const REMARRIAGE_PERCENT = 9

/**
 * @param {import("../../../lib/town/_common").Town} town
 * @param {import("../../../lib/npc-generation/_common").NPC} npc
 * @warn Uses setup.createParentage, setup.createMarriage
 */
setup.expandFamily = function (town, npc) {
  /**
   * @type {import("./createFamilyMembers").Family}
   */
  const family = town.families[npc.family]
  const node = family.members[npc.key]

  setup.createParentage(town, family, npc)

  // Marriages and descendants
  /**
   * @type {number}
   */
  const marriageMin = lib.raceTraits[npc.race].ageTraits['young adult'].baseAge
  if (npc.ageYears <= marriageMin) {
    node.marriages = []
    node.canRemarry = false
  }

  if (node.marriages === undefined) {
    node.marriages = []
    if (random(1, 100) <= MARRIAGE_PERCENT) {
      const newMarriage = setup.createMarriage(town, family, npc)
      node.marriages.push(newMarriage)
    }
  }

  while (node.canRemarry) {
    if (random(1, 100) <= REMARRIAGE_PERCENT) {
      const newMarriage = setup.createMarriage(town, family, npc, marriageMin)
      node.marriages.push(newMarriage)
    } else {
      node.canRemarry = false
    }
  }
}

// Uses setup.expandFamily
setup.fetchFamily = function (town, npc, depth = 2) {
  // We fetch nodes in breadth-first order.
  const relativeList = [{ key: npc.key, depth: 0, relationship: '', gender: npc.gender }]
  const relatives = {}
  console.log(`fetching ${npc.key} relativeList...`)

  /**
   * @type {import("./createFamilyMembers").Family}
   */
  const family = town.families[npc.family]
  console.log(family)

  let ptr = 0

  while (ptr < relativeList.length) {
    const relative = relativeList[ptr]

    const createRelative = type => relativeKey => ({
      key: relativeKey,
      depth: relative.depth + 1,
      relationship: `${relative.relationship}${type}`
    })

    if (!(relative.key in relatives)) {
      const nounKey = `${relative.relationship}${State.variables.npcs[relative.key].gender[0]}`
      relatives[relative.key] = nounKey

      if (relative.depth < depth) {
        // Expand node first before fetching
        setup.expandFamily(town, State.variables.npcs[relative.key])

        const familyNode = family.members[relative.key]
        if (familyNode.parentMarriage) {
          relativeList.push(...familyNode.parentMarriage.parents.map(createRelative('E')))
        }

        if (familyNode.siblings) {
          relativeList.push(...familyNode.siblings.map(createRelative('B')))
        }

        if (familyNode.marriages) {
          for (const marriage of familyNode.marriages) {
            relativeList.push(...marriage.parents.map(createRelative('C')))
            relativeList.push(...marriage.children.map(createRelative('D')))
          }
        }
      }
    }
    ptr++
  }

  delete relatives[npc.key]
  if (relatives === null) return {}
  console.log(relatives)
  return relatives
}
