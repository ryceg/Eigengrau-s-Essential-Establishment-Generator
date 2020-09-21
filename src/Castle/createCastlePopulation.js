setup.createCastlePopulation = (town, castle, opts) => {
  const selected = lib.weightedRandomFetcher(town, setup.castle.ruler.types, castle, null, 'object')

  if (!selected.base.profession) selected.base.profession = 'castellan'
  castle.associatedNPC = setup.createNPC(town, selected.base)
  setup.createBuildingRelationship(town, castle, castle.associatedNPC, { relationship: 'ruler', reciprocalRelationship: `castle ${castle.associatedNPC.heshe} rules` })

  if (!selected.acquisitionMethod) {
    selected.acquisitionMethod = setup.castle.ruler.getAcquisitionMethod(town, castle).acquisitionMethod
  }
  if (!selected.type) {
    selected.type = `${lib.articles.output(castle.associatedNPC.calmTrait)} ${castle.associatedNPC.descriptor}`
  }

  castle.ruler = {
    key: castle.associatedNPC.key,
    type: selected.type,
    acquisitionMethod: selected.acquisitionMethod
  }

  const castleHelpers = ['maid', 'laundry worker', 'nanny', 'groundskeeper', 'kitchen drudge', 'stablehand', 'servant', 'seamstress', 'butler', 'herald', 'gardener', 'gamekeeper', 'falconer', 'dairymaid', 'breeder', 'beekeeper', 'page', 'knight', 'noble', 'lady', 'advisor']
  const numberOfHelpers = Math.max(2, (castle.roll.wealth / 20) * ((castle.roll.size / 10) - ((town.roll.wealth / 10) - 8)))

  for (let i = 0; i < numberOfHelpers; i++) {
    if (castleHelpers.length > 0) {
      const newNPC = setup.createNPC(town, { profession: castleHelpers.pluck() })
      setup.createBuildingRelationship(town, castle, newNPC, { relationship: `${newNPC.profession}`, reciprocalRelationship: 'place of employment' })
      setup.createRelationship(town, newNPC, castle.associatedNPC, 'liege', 'subject')
    }
  }
}
