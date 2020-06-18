setup.createMarketSellers = (town, obj, opts = {}, number) => {
  const shout = [
    'shouting out ',
    'calling ',
    'calling to any who would listen: ',
    'hawking goods, saying ',
    'shouting ',
    'beckoning ',
    'saying loudly '
  ]

  for (let i = 0; i < number; i++) {
    const npc = setup.createNPC(town, Object.assign({
      profession: 'merchant',
      merchant: {
        selling: [
          `selling ${lib.market.vendors.selling.random()}`,
          `${shout.random()}"${lib.market.vendors.shouts.random()} ${lib.market.vendors.suffix.random()}"`
        ].random(),
        tent: lib.market.vendors.tent.random()
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
