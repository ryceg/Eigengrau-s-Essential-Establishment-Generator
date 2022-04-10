import type { NPC, Town } from '@lib'
import { createMarriage, createParentage } from './createFamilyMembers'

const MARRIAGE_PERCENT = 55
const REMARRIAGE_PERCENT = 9

interface Relative {
  key: string
  depth: number
  relationship: string
  gender?: string
}

export const getFamily = (town: Town, npc: NPC, depth = 2) => {
  // We fetch nodes in breadth-first order.
  const relativeList: Relative[] = [
    { key: npc.key, depth: 0, relationship: '', gender: npc.gender }
  ]
  const relatives: Record<string, string> = {}

  lib.logger.info(`Fetching ${npc.key} relativeList...`)

  const family = town.families[npc.family]
  lib.logger.info(family)

  let ptr = 0

  while (ptr < relativeList.length) {
    const relative = relativeList[ptr]

    const createRelative = (type: string) => (relativeKey: string) => ({
      key: relativeKey,
      depth: relative.depth + 1,
      relationship: `${relative.relationship}${type}`
    })

    if (!(relative.key in relatives)) {
      const nounKey = `${relative.relationship}${
        State.variables.npcs[relative.key].gender[0]
      }`
      relatives[relative.key] = nounKey

      if (relative.depth < depth) {
        // Expand node first before fetching
        expandFamily(town, State.variables.npcs[relative.key])

        const familyNode = family.members[relative.key]
        if (familyNode.parentMarriage) {
          relativeList.push(
            ...familyNode.parentMarriage.parents.map(createRelative('E'))
          )
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
  lib.logger.info(relatives)
  return relatives
}

const expandFamily = (town: Town, npc: NPC) => {
  const family = town.families[npc.family]
  const node = family.members[npc.key]

  createParentage(town, family, npc)

  // Marriages and descendants
  const marriageMin = lib.raceTraits[npc.race].ageTraits['young adult'].baseAge
  if (npc.ageYears <= marriageMin) {
    node.marriages = []
    node.canRemarry = false
  }

  if (node.marriages === undefined) {
    node.marriages = []
    if (random(1, 100) <= MARRIAGE_PERCENT) {
      const newMarriage = createMarriage(town, family, npc)
      node.marriages.push(newMarriage)
    }
  }

  while (node.canRemarry) {
    if (random(1, 100) <= REMARRIAGE_PERCENT) {
      const newMarriage = createMarriage(town, family, npc, true)
      node.marriages.push(newMarriage)
    } else {
      node.canRemarry = false
    }
  }
}
