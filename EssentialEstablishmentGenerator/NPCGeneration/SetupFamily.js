setup.createFamily = function (town, npc) {
  const key = `${npc.lastName} family`
  const family = {
    key,
    members: {}
  }
  family.members[npc.key] = {
    key: npc.key,
    parentMarriage: undefined,
    marriages: undefined,
    canRemarry: true
  }
  town.families[key] = family
  npc.family = key
}
