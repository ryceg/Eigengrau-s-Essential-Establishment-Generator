
// uses State.variables.npcs
setup.getFatherMother = function (town, npc) {
  let father, mother

  /**
   * @type {import("./createFamilyMembers").Family}
   */
  const family = town.families[npc.family]
  const node = family.members[npc.key]

  if (node.parentMarriage) {
    father = node.parentMarriage.parents.find(key => {
      return State.variables.npcs[key].gender === 'man'
    })
    mother = node.parentMarriage.parents.find(key => {
      return State.variables.npcs[key].gender === 'woman'
    })
  }

  return { father, mother }
}
