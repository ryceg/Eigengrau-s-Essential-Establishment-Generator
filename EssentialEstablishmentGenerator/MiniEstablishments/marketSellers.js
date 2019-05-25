setup.createMarketSellers = function (town, obj, opts, number) {
  opts = opts || {}
  let i
  for (i = 0; i < number; i++) {
    const npc = setup.createNPC(town, Object.assign({
      profession: 'merchant',
      merchant: {
        selling: [
          'selling ' + setup.market.vendors.selling.seededrandom(),
          [
            'shouting out ',
            'calling ',
            'calling to any who would listen: ',
            'hawking goods, saying ',
            'shouting ',
            'beckoning ',
            'saying loudly '
          ].seededrandom() + '"' +
            setup.market.vendors.shouts.seededrandom() + ' ' + setup.market.vendors.suffix.seededrandom() + '"'
        ].seededrandom(),
        tent: setup.market.vendors.tent.seededrandom()
      },
      hasClass: false,
      isThrowaway: true,
      isShallow: true,
      canBeCustom: true
    }, opts))
    obj[npc.key] = npc.merchant
  }
  return obj
}
