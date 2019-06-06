setup.ExpandNPC = function (town, npc) {
  console.log(`expanding ${npc.race} ${npc.key}...`)
  npc.hasHistory = true
  npc.isShallow = false

  if (npc.family === undefined) setup.createFamily(town, npc)

  setup.createHistory(town, npc)
  setup.createLifeEvents(town, npc)

  const relatives = setup.fetchFamily(town, npc)
  Object.keys(setup.fetchFamily(town, npc)).forEach((key) => {
    const relative = State.variables.npcs[key]
    const relationship = relatives[key]
    const inverse = setup.familyData.relationshipInverseKey(npc, relationship)
    setup.createRelationship(town, npc, relative, setup.familyData.verboseRelationship(relationship), setup.familyData.verboseRelationship(inverse))
  })
}
