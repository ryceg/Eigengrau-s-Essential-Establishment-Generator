setup.createRelationship = function (town, npc, targetNPC, type, targetType) {
  console.log('Forming a relationship.')
  console.log(npc)
  console.log(targetNPC)
  const npcs = State.variables.npcs
  if (typeof npc === 'string') {
    console.error('First argument was passed a string!')
    npc = State.variables.npcs[npc]
  }
  if (typeof targetNPC === 'string') {
    console.error('Second argument was passed a string!')
    targetNPC = State.variables.npcs[targetNPC]
  }
  // if (!npc || !targetNPC || !npc.key || !targetNPC.key) {
  //   console.log('Called createRelationship() with a null/undefined argument')
  //   return
  // }
  // console.log('Forming a relationship with ' + npc.name + ' and ' + targetNPC.name)
  const npcsToClean = []
  if (npc.relationships[targetNPC.key] && npcs[npc.relationships[targetNPC.key]]) {
    /* npc already had a valid partner; mark it for removal */
    npcsToClean.push(npcs[targetNPC.key])
  }
  if (targetNPC.relationships[npc.key] && npcs[targetNPC.relationships[npc.key]]) {
    /* targetNPC already had a valid partner; mark it for removal */
    npcsToClean.push(npcs[targetNPC.relationships[npc.key]])
  }
  /* Remove "old" partners first */
  for (const n of npcsToClean) {
    n.relationships[npc.key] = ''
    n.relationships[targetNPC.key] = ''
  }
  /* Link the two */
  npc.relationships[targetNPC.key] = type
  targetNPC.relationships[npc.key] = targetType
  console.log(npc.name + ' is a ' + type + ' to ' + targetNPC.name)
  console.log(targetNPC.name + ' is a ' + targetType + ' to ' + npc.name)
}
