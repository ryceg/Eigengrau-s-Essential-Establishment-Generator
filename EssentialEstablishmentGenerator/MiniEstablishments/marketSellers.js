setup.createMarketSellers = function (town, obj, opts, number) {
  opts = opts || {}
  var i
  for (i = 0; i < number; i++) {
    var npc = setup.createNPC(town, Object.assign({
      profession: 'merchant',
      merchant: {
        selling: [
          'selling ' + setup.market.vendors.selling.random(),
          [
            'shouting out ',
            'calling ',
            'calling to any who would listen: ',
            'hawking goods, saying ',
            'shouting '
          ].random() + '"' +
            setup.market.vendors.shouts.random() + ' ' + setup.market.vendors.suffix.random() + '"'
        ].random(),
        tent: setup.market.vendors.tent.random()
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
