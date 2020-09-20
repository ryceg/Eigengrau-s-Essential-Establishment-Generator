setup.createCastlePopulation = (town, castle, opts) => {
  const selected = lib.weightedRandomFetcher(town, setup.castle.ruler.types, castle, null, 'object')

  if (!selected.base.profession) selected.base.profession = 'castellan'
  castle.associatedNPC = setup.createNPC(town, selected.base)
  setup.createBuildingRelationship(town, castle, castle.associatedNPC, { relationship: 'ruler', reciprocalRelationship: `${castle.associatedNPC.hisher} castle` })

  if (!selected.acquisitionMethod) {
    selected.acquisitionMethod = setup.castle.ruler.getAcquisitionMethod(town, castle)
  }
  if (!selected.type) {
    selected.type = lib.articles.output(castle.associatedNPC.calmTrait) + castle.associatedNPC.descriptor
  }

  castle.ruler = {
    key: castle.associatedNPC.key,
    type: selected.type,
    acquisitionMethod: selected.acquisitionMethod
  }
}
