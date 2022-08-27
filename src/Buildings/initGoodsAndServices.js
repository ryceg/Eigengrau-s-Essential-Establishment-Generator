setup.initGoodsAndServices = () => {
  setup.goodsAndServices = {
    default: {
      // this function is curried to be compatible with the buildingTypes array
      create: (type) => (town, opts = {}) => {
        // this is the template for the creation of generic buildings; i.e. those that are present in this list.
        // It is *not* for taverns, town squares, castles, or anything large scale.
        // this is why it is distinct from the lib.createBuilding() function; everything needs lib.createBuilding, not everything needs setup.goodsAndServices.default.create()
        lib.logger.openGroup(`setup.goodsAndServices.default.create()ing ${lib.articles.output(type)}`)
        const building = {
          type,
          buildingType: type,
          objectType: 'building',
          passageName: 'GenericPassage',
          initPassage: 'GenericPassage'
        }
        Object.assign(building, (opts.newBuilding || lib.createBuilding)(town, building.type, { ...building, ...opts }))
        building.wordNoun = building.wordNoun || opts.wordNoun || setup.goodsAndServices[building.type].name.wordNoun.random() || 'building'
        building.PassageFormat = building.PassageFormat || opts.PassageFormat || setup.goodsAndServices[building.type].PassageFormat()
        setup.goodsAndServices[type].create(town, building, opts)
        lib.createStructure(town, building)

        lib.logger.closeGroup()
        return building
      }
    }
  }
}
