setup.createPersonality = npc => {
  const data = setup.npcData

  lib.assign(npc, {
    calmTrait: npc.calmTrait || data.calmTrait.random(),
    stressTrait: npc.stressTrait || data.stressTrait.random(),
    trait: npc.trait || data.trait.random(),
    hasPersonality: true
    // value: npc.value || data.value.random(),
    // drive: npc.drive || data.drive.random(),
    // belief: npc.belief || data.belief.random(),
  })

  if (!npc.vocalPattern) {
    if (lib.dice(2, 50) >= 75) {
      lib.assign(npc, {
        vocalPattern: data.vocalPattern.random()
      })
    }
  }
}

setup.hasPersonality = npc => {
  return npc.hasPersonality || (npc.trait && npc.calmTrait && npc.stressTrait)
}
