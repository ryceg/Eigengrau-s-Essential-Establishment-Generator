setup.createPersonality = (npc) => {
  const data = setup.npcData
  npc = {
    calmTrait: npc.calmTrait || data.calmTrait.random(),
    stressTrait: npc.stressTrait || data.stressTrait.random(),
    trait: npc.trait || data.trait.random()
    // value: npc.value || data.value.random(),
    // drive: npc.drive || data.drive.random(),
    // belief: npc.belief || data.belief.random(),
  }

  if (!npc.vocalPattern) {
    if (dice(2, 50) >= 75) {
      npc.vocalPattern = data.vocalPattern.random()
    }
  }
  return npc
}
