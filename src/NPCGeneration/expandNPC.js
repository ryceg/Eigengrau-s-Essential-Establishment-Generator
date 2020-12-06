setup.expandNPC = function (town, npc) {
  console.groupCollapsed(`Expanding ${npc.name}...`)
  npc.hasHistory = true
  npc.isShallow = false

  if (npc.family === undefined) lib.createFamily(town, npc)

  // Creating life events first may be counterintuitive,
  // but some life events force us to create new family members
  setup.createLifeEvents(town, npc)

  const relatives = setup.fetchFamily(town, npc)
  Object.keys(relatives).forEach((key) => {
    const relative = State.variables.npcs[key]
    const relationship = relatives[key]
    const inverse = lib.familyRelationships.inverse(npc, relationship)
    setup.createRelationship(town, npc, relative,
      lib.familyRelationships.verbose(relationship),
      lib.familyRelationships.verbose(inverse))
  })

  setup.createHistory(town, npc)
  setup.createFriends(town, npc)
  console.groupEnd()
}
