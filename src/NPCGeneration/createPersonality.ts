setup.createPersonality = (npc: NPC) => {
  const data = setup.npcData
  Object.assign(npc, {
    calmTrait: npc.calmTrait || data.calmTrait.random(),
    stressTrait: npc.stressTrait || data.stressTrait.random(),
    trait: npc.trait || data.trait.random(),
    hasPersonality: true
    // value: npc.value || data.value.random(),
    // drive: npc.drive || data.drive.random(),
    // belief: npc.belief || data.belief.random(),
  })

  if (!npc.vocalPattern) {
    if (dice(2, 50) >= 75) {
      npc.vocalPattern = data.vocalPattern.random()
    }
  }
}

setup.checkPersonality = (npc: NPC, createIfAbsent: boolean) => {
  if (npc.hasPersonality) {
    return true
  } else if (npc.calmTrait && npc.stresTrait) {
    return true
  } else if (createIfAbsent === true) {
    setup.createPersonality(npc)
    return true
  } else {
    return false
  }
}
