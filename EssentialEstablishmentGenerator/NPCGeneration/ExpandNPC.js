setup.ExpandNPC = function (town, npc) {
  npc.hasHistory = true
  npc.isShallow = false

  if (npc.family === undefined) setup.createFamily(town, npc)

  // Creating life events first may be counterintuitive,
  // but some life events force us to create new family members
  setup.createLifeEvents(town, npc)

  const relatives = setup.fetchFamily(town, npc)
  Object.keys(setup.fetchFamily(town, npc)).forEach((key) => {
    const relative = State.variables.npcs[key]
    const relationship = relatives[key]
    const inverse = setup.familyRelationships.inverse(npc, relationship)
    setup.createRelationship(town, npc, relative,
      setup.familyRelationships.verbose(relationship),
      setup.familyRelationships.verbose(inverse))
  })

  setup.createHistory(town, npc)
}
